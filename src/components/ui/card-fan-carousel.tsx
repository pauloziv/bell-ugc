"use client";

import {
  useState,
  useRef,
  useCallback,
  useEffect,
  useLayoutEffect,
  useSyncExternalStore,
} from "react";
import { Play, Heart, ChatCircle, ShareNetwork, X } from "@phosphor-icons/react";
import { gsap, useGSAP, Observer, Flip, registerGsapPlugins } from "@/lib/gsap-register";

registerGsapPlugins();

export interface CardItem {
  imgUrl: string;
  alt?: string;
  linkUrl?: string;
  label?: string;
  views?: string;
  videoUrl?: string;
}

interface SocialCardsProps {
  cards: CardItem[];
}

const MAX_VISIBLE = 7;
const HALF = 3;

const FAN_POSITIONS = [
  { rot: -21, scale: 0.7756, x: -30, y: 7.3, zIndex: 1 },
  { rot: -14, scale: 0.8498, x: -22, y: 4.0, zIndex: 2 },
  { rot: -7, scale: 0.9346, x: -11, y: 1.3, zIndex: 3 },
  { rot: 0, scale: 1.0, x: 0, y: 0.0, zIndex: 10 },
  { rot: 7, scale: 0.9346, x: 11, y: 1.3, zIndex: 3 },
  { rot: 14, scale: 0.8498, x: 22, y: 4.0, zIndex: 2 },
  { rot: 21, scale: 0.7756, x: 30, y: 7.3, zIndex: 1 },
];

function getResponsiveMultiplier(width: number) {
  if (width < 480) return 0.48;
  if (width < 640) return 0.58;
  if (width < 768) return 0.7;
  if (width < 1024) return 0.88;
  return 1.12;
}

function getHeightMultiplier(width: number) {
  let idealPx: number;
  if (width < 480) idealPx = 30 * 16;
  else if (width < 640) idealPx = 34 * 16;
  else if (width < 768) idealPx = 36 * 16;
  else if (width < 1024) idealPx = 40 * 16;
  else idealPx = 44 * 16;

  const available = window.innerHeight * 0.7;
  if (available >= idealPx) return 1;
  return available / idealPx;
}

function getSlotConfig(totalCards: number, slot: number) {
  if (totalCards >= MAX_VISIBLE) return FAN_POSITIONS[slot];
  const center = totalCards >> 1;
  const distance = totalCards > 1 ? (slot - center) / center : 0;
  const absDistance = Math.abs(distance);
  return {
    rot: distance * 21,
    scale: 1.0 - 0.2244 * absDistance * absDistance,
    x: distance * 30,
    y: absDistance * absDistance * 7.3,
    zIndex: 10 - Math.abs(slot - center),
  };
}

const ARROW_CLASSES =
  "relative flex items-center justify-center rounded-full border-[1.5px] border-navy/10 bg-navy/5 backdrop-blur-[16px] text-navy/50 cursor-pointer shrink-0 outline-none shadow-[0_4px_20px_rgba(233,30,140,0.12)] hover:border-magenta/40 hover:text-magenta active:opacity-70 transition-colors duration-300 before:content-[''] before:absolute before:inset-[3px] before:rounded-full before:border before:border-navy/[0.04] before:pointer-events-none";

const emptySubscribe = () => () => {};

function ReelFrame({
  card,
  index,
  onPlay,
}: {
  card: CardItem;
  index: number;
  onPlay?: () => void;
}) {
  return (
    <div className="relative w-full h-full overflow-hidden rounded-[1.35rem] bg-navy">
      <img
        src={card.imgUrl}
        loading="lazy"
        alt={card.alt || `Reel ${index + 1}`}
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-navy/80 via-transparent to-navy/25" />

      <div className="absolute top-3 left-3 right-12 flex items-center justify-between text-white/80 text-[10px] tracking-wide">
        <span className="font-body">0:12</span>
        <span className="w-1.5 h-1.5 rounded-full bg-lime" />
      </div>

      <button
        type="button"
        aria-label={`Reproduzir ${card.label || card.alt || "reel"}`}
        onClick={(e) => {
          e.preventDefault();
          e.stopPropagation();
          onPlay?.();
        }}
        className="absolute inset-0 z-10 flex items-center justify-center"
      >
        <span className="w-14 h-14 rounded-full bg-white/15 border border-white/25 backdrop-blur-sm flex items-center justify-center">
          <Play weight="fill" size={22} className="text-white ml-0.5" />
        </span>
      </button>

      <div className="absolute right-2.5 bottom-16 flex flex-col items-center gap-3 text-white pointer-events-none">
        <Heart weight="fill" size={22} />
        <ChatCircle weight="bold" size={22} />
        <ShareNetwork weight="bold" size={20} />
      </div>

      <div className="absolute bottom-3 left-3 right-10 pointer-events-none">
        <span className="block font-display font-bold text-white text-sm leading-tight [text-shadow:0_1px_8px_rgba(26,26,46,0.45)]">
          {card.label || card.alt}
        </span>
        {card.views ? (
          <span className="block text-[11px] text-white/70 mt-1 font-body">
            {card.views}
          </span>
        ) : null}
      </div>
    </div>
  );
}

export default function SocialCards({ cards }: SocialCardsProps) {
  const mounted = useSyncExternalStore(emptySubscribe, () => true, () => false);
  const containerRef = useRef<HTMLDivElement>(null);
  const isAnimating = useRef(false);
  const hasEntered = useRef(false);
  const directionRef = useRef<"left" | "right" | null>(null);
  const prevVisible = useRef<Set<number>>(new Set());
  const cycleRef = useRef<(direction: "left" | "right") => void>(() => {});

  const totalCards = cards.length;
  const needsPagination = totalCards > MAX_VISIBLE;
  const [centerIndex, setCenterIndex] = useState(
    needsPagination ? HALF : totalCards >> 1,
  );

  const getVisibleMap = useCallback(
    (center: number) => {
      const map = new Map<number, number>();
      if (!needsPagination) {
        cards.forEach((_, i) => map.set(i, i));
        return map;
      }
      for (let slot = 0; slot < MAX_VISIBLE; slot++) {
        map.set(
          ((center + slot - HALF) % totalCards + totalCards) % totalCards,
          slot,
        );
      }
      return map;
    },
    [totalCards, needsPagination, cards],
  );

  const [playingIndex, setPlayingIndex] = useState<number | null>(null);
  const playingIndexRef = useRef<number | null>(null);
  const playerRef = useRef<HTMLDivElement>(null);
  const playerSlotRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const closingRef = useRef(false);
  const hoverRef = useRef(false);

  const resetPlayer = useCallback(() => {
    const player = playerRef.current;
    const slot = playerSlotRef.current;
    if (player) {
      gsap.killTweensOf(player);
      gsap.set(player, { clearProps: "all" });
    }
    if (slot) {
      gsap.killTweensOf(slot);
      gsap.set(slot, { clearProps: "all" });
    }
    document.body.style.overflow = "";
  }, []);

  const cycle = useCallback(
    (direction: "left" | "right") => {
      if (
        isAnimating.current ||
        !needsPagination ||
        playingIndexRef.current !== null ||
        hoverRef.current
      )
        return;
      isAnimating.current = true;
      directionRef.current = direction;
      setCenterIndex((prev) =>
        direction === "right"
          ? (prev + 1) % totalCards
          : (prev - 1 + totalCards) % totalCards,
      );
    },
    [totalCards, needsPagination],
  );

  const centerSlot = useCallback(() => {
    const slot = playerSlotRef.current;
    if (!slot) return;
    const maxW = Math.min(22.5 * 16, window.innerWidth - 32);
    const maxH = window.innerHeight - 64;
    const height = Math.min(maxW * (16 / 9), maxH);
    const width = height * (9 / 16);
    gsap.set(slot, {
      left: (window.innerWidth - width) / 2,
      top: (window.innerHeight - height) / 2,
      width,
      height,
      x: 0,
      y: 0,
      margin: 0,
    });
  }, []);

  const closePlay = useCallback(() => {
    if (closingRef.current) return;
    const index = playingIndexRef.current;
    const player = playerRef.current;
    const video = videoRef.current;
    const source =
      index !== null
        ? containerRef.current?.querySelectorAll<HTMLElement>(".fan-card")[index]
        : undefined;

    video?.pause();
    if (video) video.currentTime = 0;

    const finish = () => {
      closingRef.current = false;
      playingIndexRef.current = null;
      setPlayingIndex(null);
      resetPlayer();
    };

    if (!player || index === null) {
      finish();
      return;
    }

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced || !source) {
      finish();
      return;
    }

    closingRef.current = true;
    Flip.fit(player, source, {
      duration: 0.4,
      ease: "power2.in",
      absolute: true,
      onComplete: finish,
    });
  }, [resetPlayer]);

  const openPlay = useCallback((index: number) => {
    if (playingIndexRef.current !== null || closingRef.current) return;
    const url = cards[index]?.videoUrl;
    if (!url) return;
    playingIndexRef.current = index;
    setPlayingIndex(index);
    const video = videoRef.current;
    if (video) {
      video.src = url;
      video.playsInline = true;
      void video.play().catch(() => {});
    }
  }, [cards]);

  useLayoutEffect(() => {
    if (playingIndex === null) return;
    const player = playerRef.current;
    const slot = playerSlotRef.current;
    const video = videoRef.current;
    const source =
      containerRef.current?.querySelectorAll<HTMLElement>(".fan-card")[playingIndex];
    if (!player) return;

    document.body.style.overflow = "hidden";
    centerSlot();

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const playVideo = () => {
      if (!video) return;
      video.muted = false;
      const attempt = video.play();
      if (attempt) void attempt.catch(() => {});
    };

    if (reduced || !source || !slot) {
      playVideo();
    } else {
      Flip.fit(player, source, { duration: 0, absolute: true });
      requestAnimationFrame(() => {
        Flip.fit(player, slot, {
          duration: 0.55,
          ease: "power2.inOut",
          absolute: true,
          onComplete: playVideo,
        });
      });
    }

    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") closePlay();
    };
    window.addEventListener("keydown", onKey);
    return () => {
      window.removeEventListener("keydown", onKey);
    };
  }, [playingIndex, closePlay, centerSlot]);

  useLayoutEffect(() => {
    registerGsapPlugins();
  }, []);

  useLayoutEffect(() => {
    cycleRef.current = cycle;
  }, [cycle]);

  useEffect(() => {
    if (!needsPagination) return;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) return;

    const id = window.setInterval(() => {
      if (document.hidden) return;
      cycleRef.current("right");
    }, 3200);

    return () => window.clearInterval(id);
  }, [needsPagination]);

  useGSAP(
    () => {
      registerGsapPlugins();
      const container = containerRef.current;
      if (!container || !needsPagination) return;

      const observer = Observer.create({
        target: container,
        type: "touch,pointer",
        lockAxis: true,
        tolerance: 48,
        preventDefault: false,
        onLeft: () => cycleRef.current("right"),
        onRight: () => cycleRef.current("left"),
      });

      return () => observer.kill();
    },
    { scope: containerRef, dependencies: [needsPagination] },
  );

  useGSAP(
    (context, contextSafe) => {
      registerGsapPlugins();
      if (!contextSafe) return;
      const container = containerRef.current;
      if (!container || !totalCards) return;

      const cardElements = Array.from(
        container.querySelectorAll<HTMLElement>(".fan-card"),
      );
      if (!cardElements.length) return;

      const reduced = window.matchMedia(
        "(prefers-reduced-motion: reduce)",
      ).matches;
      const visibleMap = getVisibleMap(centerIndex);
      const previouslyVisible = prevVisible.current;
      const direction = directionRef.current;
      const isFirstMount = !hasEntered.current;
      const multiplier = getResponsiveMultiplier(window.innerWidth);
      const hMult = getHeightMultiplier(window.innerWidth);
      const slotCount = needsPagination ? MAX_VISIBLE : totalCards;
      const config = (slot: number) => getSlotConfig(slotCount, slot);

      if (isFirstMount) isAnimating.current = true;
      const animWatchdog = window.setTimeout(() => {
        isAnimating.current = false;
      }, 2500);

      let completedCount = 0;
      const visibleCount = visibleMap.size;
      const onCardDone = contextSafe(() => {
        if (++completedCount >= visibleCount) {
          isAnimating.current = false;
          if (isFirstMount) hasEntered.current = true;
        }
      });

      const origin = { xPercent: -50, yPercent: -50 };

      cardElements.forEach((card, cardIndex) => {
        const slot = visibleMap.get(cardIndex);
        const wasVisible = previouslyVisible.has(cardIndex);

        if (slot !== undefined) {
          const { x, y, rot, scale, zIndex } = config(slot);
          const target = {
            ...origin,
            x: `${x * multiplier}rem`,
            y: `${y * hMult}rem`,
            rotation: rot,
            scale,
            autoAlpha: 1,
            zIndex,
          };

          if (reduced) {
            gsap.set(card, target);
            onCardDone();
          } else if (isFirstMount) {
            gsap.set(card, {
              ...origin,
              x: 0,
              y: `${12 * hMult}rem`,
              rotation: 0,
              scale: 0.5,
              autoAlpha: 0,
            });
            gsap.to(card, {
              ...target,
              duration: 1.2,
              ease: "bellFanIn",
              delay: 0.2 + slot * 0.06,
              onComplete: onCardDone,
            });
          } else if (!wasVisible) {
            const enterX = direction === "right" ? 40 : -40;
            gsap.set(card, {
              ...origin,
              x: `${enterX}rem`,
              y: `${y * hMult}rem`,
              rotation: direction === "right" ? 30 : -30,
              scale: 0.5,
              autoAlpha: 0,
            });
            gsap.to(card, {
              ...target,
              duration: 0.6,
              ease: "bellFanMove",
              onComplete: onCardDone,
            });
          } else {
            gsap.to(card, {
              ...target,
              duration: 0.5,
              ease: "bellFanMove",
              onComplete: onCardDone,
            });
          }
        } else if (wasVisible) {
          const exitX = direction === "right" ? -40 : 40;
          gsap.to(card, {
            x: `${exitX}rem`,
            autoAlpha: 0,
            scale: 0.5,
            rotation: direction === "right" ? -30 : 30,
            duration: reduced ? 0 : 0.4,
            ease: "power2.in",
            zIndex: 0,
          });
        } else if (isFirstMount) {
          gsap.set(card, {
            ...origin,
            autoAlpha: 0,
            scale: 0.3,
            x: 0,
            y: 0,
            zIndex: 0,
          });
        }
      });

      prevVisible.current = new Set(visibleMap.keys());

      const visibleEntries: { el: HTMLElement; slot: number }[] = [];
      cardElements.forEach((el, i) => {
        const slot = visibleMap.get(i);
        if (slot !== undefined) visibleEntries.push({ el, slot });
      });
      visibleEntries.sort((a, b) => a.slot - b.slot);

      let activeSlot: number | null = null;
      let leaveTimer: ReturnType<typeof setTimeout> | null = null;
      const centerSlot = visibleEntries.length >> 1;

      const updateHoverLayout = contextSafe((hoveredSlot: number | null) => {
        const mult = getResponsiveMultiplier(window.innerWidth);
        const hM = getHeightMultiplier(window.innerWidth);

        visibleEntries.forEach(({ el, slot }) => {
          const base = config(slot);
          let targetX = base.x * mult;
          let targetY = base.y * hM;
          let targetRot = base.rot;
          let targetScale = base.scale;
          let delay = 0;

          if (hoveredSlot !== null) {
            const distance = Math.abs(slot - hoveredSlot);
            delay = distance * 0.02;

            if (slot === hoveredSlot) {
              targetY -= 2.5 * hM;
              targetScale *= 1.08;
            } else {
              const normalized =
                centerSlot > 0 ? (slot - centerSlot) / centerSlot : 0;
              const pushStrength =
                8 *
                (1 - Math.abs(normalized)) *
                (1 + 0.2 * Math.max(0, 3 - distance));

              if (slot < hoveredSlot) {
                targetX -= pushStrength * mult;
                targetRot -= 3 / (distance + 1);
              } else {
                targetX += pushStrength * mult;
                targetRot += 3 / (distance + 1);
              }

              if (slot === visibleEntries.length - 1 && hoveredSlot < centerSlot)
                targetY -= 1 * hM;
              if (slot === 0 && hoveredSlot > centerSlot) targetY -= 1 * hM;
            }
          } else {
            delay = Math.abs(slot - centerSlot) * 0.02;
          }

          gsap.to(el, {
            x: `${targetX}rem`,
            y: `${targetY}rem`,
            rotation: targetRot,
            scale: targetScale,
            duration: reduced ? 0 : 0.5,
            delay: reduced ? 0 : delay,
            ease: "bellFanIn",
            overwrite: "auto",
          });
          gsap.set(el, { zIndex: base.zIndex });
        });
      });

      const enterHandlers = visibleEntries.map(({ el, slot }) => {
        const handler = contextSafe(() => {
          if (isAnimating.current) return;
          if (leaveTimer) {
            clearTimeout(leaveTimer);
            leaveTimer = null;
          }
          if (activeSlot !== slot) {
            activeSlot = slot;
            updateHoverLayout(slot);
          }
        });
        el.addEventListener("mouseenter", handler);
        return { el, handler };
      });

      const onMouseLeave = contextSafe(() => {
        if (isAnimating.current) return;
        if (leaveTimer) clearTimeout(leaveTimer);
        leaveTimer = setTimeout(() => {
          activeSlot = null;
          updateHoverLayout(null);
        }, 50);
      });
      container.addEventListener("mouseleave", onMouseLeave);

      const onResize = contextSafe(() => {
        if (!isAnimating.current) updateHoverLayout(activeSlot);
      });
      window.addEventListener("resize", onResize);

      return () => {
        window.clearTimeout(animWatchdog);
        enterHandlers.forEach(({ el, handler }) =>
          el.removeEventListener("mouseenter", handler),
        );
        container.removeEventListener("mouseleave", onMouseLeave);
        window.removeEventListener("resize", onResize);
        if (leaveTimer) clearTimeout(leaveTimer);
      };
    },
    {
      scope: containerRef,
      dependencies: [centerIndex, totalCards, getVisibleMap, needsPagination, mounted],
      revertOnUpdate: false,
    },
  );

  if (!totalCards) return null;

  const chevron = (direction: "left" | "right") => (
    <svg
      className="relative z-[2] w-4 h-4 md:w-5 md:h-5"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polyline
        points={direction === "left" ? "15 18 9 12 15 6" : "9 18 15 12 9 6"}
      />
    </svg>
  );

  return (
    <section className="flex flex-col items-center w-full py-4 lg:py-8 px-0 relative">
      <div className="flex items-center justify-center w-full max-w-[90rem]">
        <div
          ref={containerRef}
          className="fan-layout flex relative justify-center items-center w-full max-w-[80rem]"
          onMouseEnter={() => {
            hoverRef.current = true;
          }}
          onMouseLeave={() => {
            hoverRef.current = false;
          }}
        >
          {mounted
            ? cards.map((card, index) => {
                const frame = (
                  <ReelFrame
                    card={card}
                    index={index}
                    onPlay={() => openPlay(index)}
                  />
                );
                return card.linkUrl ? (
                  <a
                    key={`${card.imgUrl}-${index}`}
                    href={card.linkUrl}
                    target={card.linkUrl.startsWith("http") ? "_blank" : "_self"}
                    rel="noopener noreferrer"
                    className="fan-card block cursor-pointer"
                  >
                    {frame}
                  </a>
                ) : (
                  <div key={`${card.imgUrl}-${index}`} className="fan-card">
                    {frame}
                  </div>
                );
              })
            : null}
        </div>
      </div>

      <div
        className={`fan-backdrop ${playingIndex !== null ? "is-open" : ""}`}
        onClick={closePlay}
        aria-hidden={playingIndex === null}
      />
      <div ref={playerSlotRef} className="fan-player-slot" aria-hidden />
      <div
        ref={playerRef}
        className={`fan-player ${playingIndex !== null ? "is-open" : ""}`}
        role={playingIndex !== null ? "dialog" : undefined}
        aria-modal={playingIndex !== null}
        aria-label={
          playingIndex !== null
            ? cards[playingIndex]?.label || "Reel"
            : undefined
        }
      >
        <div className="relative h-full w-full">
          <video
            ref={videoRef}
            poster={playingIndex !== null ? cards[playingIndex].imgUrl : undefined}
            playsInline
            controls
            className="h-full w-full rounded-[1.35rem] object-cover"
          />
          {playingIndex !== null ? (
            <button
              type="button"
              onClick={closePlay}
              aria-label="Fechar video"
              className="absolute top-3 right-3 z-10 flex h-10 w-10 items-center justify-center rounded-full border-2 border-navy bg-white/90 text-navy"
            >
              <X weight="bold" size={18} />
            </button>
          ) : null}
        </div>
      </div>

      {needsPagination && (
        <div className="flex items-center justify-center gap-4 mt-4 md:mt-6">
          <button
            type="button"
            className={`${ARROW_CLASSES} w-10 h-10 md:w-12 md:h-12`}
            onClick={() => cycle("left")}
            aria-label="Anterior"
          >
            {chevron("left")}
          </button>
          <div className="flex items-center gap-2">
            {cards.map((_, i) => (
              <span
                key={i}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  i === centerIndex
                    ? "bg-magenta scale-[1.3]"
                    : "bg-navy/15"
                }`}
              />
            ))}
          </div>
          <button
            type="button"
            className={`${ARROW_CLASSES} w-10 h-10 md:w-12 md:h-12`}
            onClick={() => cycle("right")}
            aria-label="Proximo"
          >
            {chevron("right")}
          </button>
        </div>
      )}
    </section>
  );
}

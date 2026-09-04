import { Sparkle, Star } from "@phosphor-icons/react/dist/ssr";

export default function BrandLogo({
  compact = false,
  onDark = false,
}: {
  compact?: boolean;
  onDark?: boolean;
}) {
  return (
    <span
      className={`inline-flex items-center ${compact ? "gap-1" : "gap-1.5"}`}
    >
      <Star
        weight="fill"
        size={compact ? 12 : 15}
        className={onDark ? "shrink-0 text-yellow" : "shrink-0 text-magenta"}
        aria-hidden
      />
      <span
        className={`-rotate-[4deg] font-display leading-none font-extrabold tracking-tighter ${
          onDark ? "text-white" : "text-navy"
        } ${compact ? "text-[1.2rem]" : "text-[1.65rem]"}`}
      >
        Bel
      </span>
      <span
        className={`rotate-[8deg] rounded-full border-[2.5px] border-navy bg-lime font-display leading-none font-extrabold tracking-[0.14em] text-navy shadow-[2px_2px_0_0_#1A1A2E] ${
          compact ? "px-[0.45rem] py-[0.22rem] text-[9px]" : "px-2 py-1 text-[11px]"
        }`}
      >
        UGC
      </span>
      <Sparkle
        weight="fill"
        size={compact ? 12 : 15}
        className="shrink-0 text-yellow"
        aria-hidden
      />
    </span>
  );
}

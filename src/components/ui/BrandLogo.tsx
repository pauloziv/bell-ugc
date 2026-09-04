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
      className={`relative inline-flex items-end overflow-visible ${
        compact ? "pt-1 pr-1.5" : "pt-1.5 pr-2"
      }`}
    >
      <span
        className={`relative z-[1] origin-bottom -rotate-[5deg] font-display leading-none font-extrabold tracking-tighter ${
          onDark ? "text-white" : "text-navy"
        } ${compact ? "text-[1.28rem]" : "text-[1.7rem]"}`}
      >
        Bel
      </span>
      <span
        className={`relative z-[2] -mb-px -ml-1 rotate-[10deg] ${
          compact ? "origin-bottom-left" : ""
        }`}
      >
        <span
          className={`relative inline-flex items-center rounded-full border-[2.5px] border-navy bg-lime font-display leading-none font-extrabold tracking-[0.14em] text-navy shadow-[2px_2px_0_0_#1A1A2E] ${
            compact ? "px-[0.42rem] py-[0.2rem] text-[9px]" : "px-2 py-1 text-[11px]"
          }`}
        >
          UGC
        </span>
      </span>
      <Star
        weight="fill"
        size={compact ? 11 : 14}
        className={
          onDark
            ? "absolute -bottom-0.5 left-0 z-[3] text-yellow"
            : "absolute -bottom-0.5 left-0 z-[3] text-magenta"
        }
        aria-hidden
      />
      <Sparkle
        weight="fill"
        size={compact ? 12 : 15}
        className="absolute -top-0.5 -right-0.5 z-[3] text-yellow"
        aria-hidden
      />
    </span>
  );
}

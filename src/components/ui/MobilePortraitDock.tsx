"use client";

import HeroPortrait from "@/components/ui/HeroPortrait";

export default function MobilePortraitDock() {
  return (
    <div
      data-mobile-portrait-dock
      className="pointer-events-none relative z-20 h-0 lg:hidden"
    >
      <div className="absolute left-1/2 top-0 w-[min(100%-2.5rem,15.5rem)] -translate-x-1/2 -translate-y-[58%]">
        <HeroPortrait frame="circle" />
      </div>
    </div>
  );
}

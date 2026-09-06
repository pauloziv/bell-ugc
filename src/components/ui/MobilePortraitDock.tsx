"use client";

import HeroPortrait from "@/components/ui/HeroPortrait";

export default function MobilePortraitDock() {
  return (
    <div
      data-mobile-portrait-dock
      className="relative z-10 px-4 pb-12 pt-2 lg:hidden"
    >
      <div className="mx-auto w-[min(100%-2.5rem,15.5rem)]">
        <HeroPortrait frame="circle" />
      </div>
    </div>
  );
}

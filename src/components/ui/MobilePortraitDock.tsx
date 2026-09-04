"use client";

import HeroPortrait from "@/components/ui/HeroPortrait";

export default function MobilePortraitDock() {
  return (
    <div
      data-mobile-portrait-dock
      className="lg:hidden sticky top-[4.75rem] z-20 mx-auto w-[min(100%-2rem,18.5rem)]"
    >
      <HeroPortrait />
    </div>
  );
}

"use client";

import type { ReactNode } from "react";
import TravelingAvatar from "@/components/ui/TravelingAvatar";
import { useTrailRef } from "@/components/ui/trail-context";

export default function AvatarTrail({ children }: { children: ReactNode }) {
  const trailRef = useTrailRef();
  return (
    <div id="avatar-trail" ref={trailRef} className="relative">
      <TravelingAvatar />
      {children}
    </div>
  );
}

"use client";

import { createContext, useContext, useRef, type ReactNode, type RefObject } from "react";

const TrailRefContext = createContext<RefObject<HTMLDivElement | null> | null>(null);

export function useTrailRef() {
  return useContext(TrailRefContext);
}

export function PortraitMotionRoot({ children }: { children: ReactNode }) {
  const trailRef = useRef<HTMLDivElement>(null);
  return (
    <TrailRefContext.Provider value={trailRef}>{children}</TrailRefContext.Provider>
  );
}

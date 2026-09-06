import Hero from "@/components/Hero";
import WhatIsUGC from "@/components/WhatIsUGC";
import ContentStyle from "@/components/ContentStyle";
import Platforms from "@/components/Platforms";
import Cases from "@/components/Cases";
import Process from "@/components/Process";
import Setup from "@/components/Setup";
import Pricing from "@/components/Pricing";
import CTA from "@/components/CTA";
import FloatingNav from "@/components/ui/FloatingNav";
import AvatarTrail from "@/components/ui/AvatarTrail";
import { PortraitMotionRoot } from "@/components/ui/trail-context";

export const revalidate = 3600;

export default function Home() {
  return (
    <>
      <FloatingNav />
      <PortraitMotionRoot>
        <Hero />
        <AvatarTrail>
          <WhatIsUGC />
          <ContentStyle />
          <Platforms />
          <Cases />
          <Process />
          <Setup />
          <Pricing />
        </AvatarTrail>
      </PortraitMotionRoot>
      <CTA />
    </>
  );
}

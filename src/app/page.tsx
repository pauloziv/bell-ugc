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
import KitTape from "@/components/media-kit/KitTape";
import { PortraitMotionRoot } from "@/components/ui/trail-context";
import { TAPE_PROCESSO, TAPE_SOBRE } from "@/lib/kit-copy";

export const revalidate = 3600;

export default function Home() {
  return (
    <>
      <FloatingNav />
      <PortraitMotionRoot>
        <Hero />
        <AvatarTrail>
          <KitTape items={TAPE_SOBRE} bg="bg-lime" reverse />
          <WhatIsUGC />
          <KitTape items={TAPE_PROCESSO} bg="bg-magenta" ink="text-white" />
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

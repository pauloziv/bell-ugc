import Hero from "@/components/Hero";
import WhatIsUGC from "@/components/WhatIsUGC";
import ContentStyle from "@/components/ContentStyle";
import Platforms from "@/components/Platforms";
import Cases from "@/components/Cases";
import Process from "@/components/Process";
import Pricing from "@/components/Pricing";
import CTA from "@/components/CTA";
import FloatingNav from "@/components/ui/FloatingNav";

export default function Home() {
  return (
    <>
      <FloatingNav />
      <Hero />
      <WhatIsUGC />
      <ContentStyle />
      <Platforms />
      <Cases />
      <Process />
      <Pricing />
      <CTA />
    </>
  );
}

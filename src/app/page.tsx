import Hero from "@/components/Hero";
import About from "@/components/About";
import WhatIsUGC from "@/components/WhatIsUGC";
import ContentStyle from "@/components/ContentStyle";
import Platforms from "@/components/Platforms";
import Cases from "@/components/Cases";
import Process from "@/components/Process";
import Pricing from "@/components/Pricing";
import CTA from "@/components/CTA";
import FloatingNav from "@/components/ui/FloatingNav";
import MarqueeStrip from "@/components/ui/MarqueeStrip";

const BRANDS = [
  "Natura",
  "Boticario",
  "Farm",
  "Havaianas",
  "Granado",
  "Natura",
  "Boticario",
  "Farm",
];

export default function Home() {
  return (
    <>
      <FloatingNav />
      <Hero />
      <About />
      <WhatIsUGC />
      <ContentStyle />
      <Platforms />
      <Cases />
      <MarqueeStrip items={BRANDS} />
      <Process />
      <Pricing />
      <CTA />
    </>
  );
}

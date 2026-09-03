"use client";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { Observer } from "gsap/Observer";
import { CustomEase } from "gsap/CustomEase";
import { Flip } from "gsap/Flip";

gsap.registerPlugin(useGSAP, Observer, CustomEase, Flip);

let easesReady = false;

export function registerGsapPlugins() {
  if (typeof window === "undefined" || easesReady) return;
  CustomEase.create("bellFanIn", "0.175,0.885,0.32,1.275");
  CustomEase.create("bellFanMove", "0.32,0.72,0,1");
  easesReady = true;
}

export { gsap, useGSAP, Observer, Flip };

"use client";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { Observer } from "gsap/Observer";
import { CustomEase } from "gsap/CustomEase";

import { Flip } from "gsap/Flip";

let registered = false;

export function registerGsapPlugins() {
  if (registered || typeof window === "undefined") return;
  gsap.registerPlugin(useGSAP, Observer, CustomEase, Flip);
  CustomEase.create("bellFanIn", "0.175,0.885,0.32,1.275");
  CustomEase.create("bellFanMove", "0.32,0.72,0,1");
  registered = true;
}

export { gsap, useGSAP, Observer, Flip };

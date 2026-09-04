"use client";

import { useEffect } from "react";

function isInViewport(node: HTMLElement) {
  const rect = node.getBoundingClientRect();
  return rect.bottom > 0 && rect.top < window.innerHeight * 0.92;
}

export default function RevealObserver() {
  useEffect(() => {
    const nodes = Array.from(document.querySelectorAll<HTMLElement>(".reveal"));
    if (!nodes.length) return;

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) {
      nodes.forEach((node) => node.classList.add("is-in"));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target.classList.add("is-in");
          observer.unobserve(entry.target);
        });
      },
      { threshold: 0.05, rootMargin: "0px 0px -4% 0px" },
    );

    nodes.forEach((node) => {
      if (isInViewport(node)) {
        node.classList.add("is-in");
        return;
      }
      observer.observe(node);
    });

    return () => observer.disconnect();
  }, []);

  return null;
}

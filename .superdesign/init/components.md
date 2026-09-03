# Shared UI primitives

## MagneticButton
Path: `src/components/ui/MagneticButton.tsx`
Framer magnetic CTA. Props: `children`, `className`, `href`.

## ScrollReveal
Path: `src/components/ui/ScrollReveal.tsx`
Framer in-view fade. Props: `children`, `delay`, `className`.
Do **not** wrap GSAP trees.

## BlobBackground
Path: `src/components/ui/BlobBackground.tsx`
Decorative magenta/yellow/lime orbs. Prop: `className`.

## MarqueeStrip
Path: `src/components/ui/MarqueeStrip.tsx`
Infinite brand marquee. Props: `items: string[]`, `className`.

## FloatingNav
Path: `src/components/ui/FloatingNav.tsx`
Fixed pill nav after 300px scroll.

## SocialCards (card-fan-carousel)
Path: `src/components/ui/card-fan-carousel.tsx`
GSAP fan of 9:16 reel players. Plugins: `useGSAP`, `Observer`, `CustomEase`.
Props: `cards: CardItem[]` with `imgUrl`, `alt?`, `linkUrl?`, `label?`, `views?`.

See source files — keep GSAP isolated from Framer Motion.

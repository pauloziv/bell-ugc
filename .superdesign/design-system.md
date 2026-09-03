# Bell UGC — Portfolio Design System

## Product Context

- **Product**: Personal portfolio website for Bell, a UGC (User-Generated Content) creator
- **Goal**: Attract brands and clients by showcasing Bell's content creation skills, style, and process
- **Audience**: Marketing managers, brand owners, social media teams looking for UGC creators
- **Tone**: Creative, energetic, confident, approachable — NOT corporate or sterile
- **Key pages**: Single-page scrollable site with 9 sections (Hero, About, What is UGC, Content Style, Platforms, Cases, Process, Pricing, CTA)

## Visual Direction — TWO BRANCHES

### Direction A: Bold Pop

**Vibe**: Explosive energy, street-art meets digital native, Gen-Z creative confidence

**Color Palette**:
- Background: #FAFAFA (off-white) with colored section accents
- Primary: #E91E8C (hot magenta)
- Secondary: #FFD23F (electric yellow)
- Accent: #7BED4F (lime green)
- Dark: #1A1A2E (deep navy-black)
- Text primary: #1A1A2E
- Text secondary: #6B7280
- Surface cards: #FFFFFF with colored border accents

**Typography**:
- Display/H1: Cabinet Grotesk Black, text-5xl md:text-7xl, tracking-tighter, leading-none
- H2: Cabinet Grotesk Bold, text-3xl md:text-5xl, tracking-tight
- H3: Satoshi Bold, text-xl md:text-2xl
- Body: Satoshi Regular, text-base, leading-relaxed, max-w-[65ch]
- Accent/labels: Satoshi Medium, text-xs uppercase tracking-[0.2em]

**Shape Language**:
- Border radius: rounded-[2rem] to rounded-[3rem] — exaggerated squircles
- Organic blob shapes as background decorations (SVG, animated)
- Wavy section dividers instead of straight lines
- Sticker/badge elements with rotation (-3deg to 5deg)
- Cut-out collage aesthetic for photo treatments

**Shadows & Depth**:
- Cards: shadow-[0_20px_60px_-15px_rgba(233,30,140,0.15)] (magenta-tinted)
- Buttons: shadow-[0_8px_30px_-5px_rgba(233,30,140,0.3)] on hover
- No plain gray shadows — always tinted to nearest accent

**Motion Patterns**:
- Spring physics: stiffness 120, damping 18
- Scroll reveals: translate-y-16 + blur-sm + opacity-0, staggered 100ms
- Magnetic hover on CTAs
- Blob backgrounds: infinite slow morph (15s cycle)
- Marquee strips with brand names
- Parallax tilt on case study cards
- Bouncy hover scale on interactive elements (scale 1.03, spring overshoot)

**Layout**:
- Asymmetric grids: grid-template-columns 2fr 1fr or 1fr 2fr
- Massive whitespace: py-28 to py-40 section padding
- Hero: split-screen (text left, photo collage right)
- Cases: bento grid with varying card sizes
- Process: horizontal scroll timeline
- Floating pill navigation

---

### Direction D: Candy Pastel

**Vibe**: Dreamy modern, soft power, feminine confidence without being girly — think Glossier meets Linear

**Color Palette**:
- Background: #FDF8FF (lavender-white)
- Primary: #C77DFF (vivid lavender)
- Secondary: #FFB4A2 (warm peach)
- Accent: #80EDBF (fresh mint)
- Dark: #2D2B3D (deep plum-gray)
- Text primary: #2D2B3D
- Text secondary: #7C7891
- Surface cards: rgba(255,255,255,0.7) with backdrop-blur-xl (glass)

**Typography**:
- Display/H1: Outfit ExtraBold, text-5xl md:text-7xl, tracking-tighter, leading-none
- H2: Outfit Bold, text-3xl md:text-5xl, tracking-tight
- H3: Satoshi Medium, text-xl md:text-2xl
- Body: Satoshi Regular, text-base, leading-relaxed, max-w-[65ch]
- Accent/labels: Satoshi Medium, text-xs uppercase tracking-[0.2em]

**Shape Language**:
- Border radius: rounded-[2.5rem] to rounded-full — pill and circle motifs
- Gradient orbs as background elements (soft radial, 40% opacity)
- Circle/bubble decorations floating in backgrounds
- Soft mesh gradients on hero and CTA sections
- Photo treatments: rounded-full or rounded-[3rem] with soft pastel borders (4px)

**Shadows & Depth**:
- Cards: shadow-[0_24px_48px_-12px_rgba(199,125,255,0.12)] (lavender-tinted)
- Glassmorphism: backdrop-blur-2xl + border border-white/20 + shadow-[inset_0_1px_0_rgba(255,255,255,0.2)]
- Floating elements: shadow-[0_12px_40px_-8px_rgba(199,125,255,0.2)]

**Motion Patterns**:
- Spring physics: stiffness 80, damping 22 (softer, dreamier)
- Scroll reveals: translate-y-12 + opacity-0, ease-[cubic-bezier(0.32,0.72,0,1)] 800ms
- Floating animation on decorative elements (subtle Y oscillation, 4s cycle)
- Gradient orbs: slow drift animation (20s infinite)
- Soft scale on hover (1.02) with 500ms transition
- Staggered card reveals with 150ms delay cascade
- Smooth section transitions with parallax depth layers

**Layout**:
- Centered with generous breathing: max-w-7xl mx-auto
- Hero: centered text with floating photo bubble + gradient mesh bg
- Cases: clean grid with rounded glass cards
- Process: vertical timeline with alternating left/right
- Pricing: pill-shaped cards with gradient borders
- Floating pill navigation with glass effect

---

## Shared Design Rules (both directions)

**Anti-patterns (BANNED)**:
- No Inter, Roboto, Arial, Helvetica
- No emojis in code or content
- No pure #000000 — use respective dark tokens
- No 3-column equal card grids
- No centered hero when layout variance > 4
- No generic "John Doe" placeholder names
- No Unsplash URLs — use picsum.photos/seed/{name}/{w}/{h}
- No h-screen — always min-h-[100dvh]
- No linear or ease-in-out transitions

**Responsiveness**:
- Breakpoints: sm(640) md(768) lg(1024) xl(1280)
- Container: max-w-[1400px] mx-auto px-4 md:px-8
- Below 768px: single-column, w-full, px-4, py-8
- Grid layouts collapse to grid-cols-1 on mobile
- Asymmetric layouts reset to stacked on mobile

**Accessibility**:
- All interactive elements: focus-visible ring
- Reduced motion: respect prefers-reduced-motion
- Semantic HTML: proper heading hierarchy
- Alt text on all images
- Touch targets: min 44x44px on mobile

**Content (Portuguese — BR)**:
- All UI text in Portuguese
- Hero tagline: "Criadora de conteudo UGC"
- CTA: "Vamos criar juntos?"
- Section titles in Portuguese
- Placeholder brand names: "Natura", "Boticario", "Farm", "Havaianas", "Granado"

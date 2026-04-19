# Social Bar — Design System

## Overview

**Social Bar** is a SaaS platform that digitalizes and amplifies the in-venue experience for bars, restobars, and karaoke venues. Customers access the platform by scanning a QR code at the venue, entering a daily access code, and unlocking a fully interactive experience — entirely on their own smartphone.

**Made by Creativa Perú** — targeting the Perú / LATAM market.

### Products & Surfaces

| Surface | Description |
|---|---|
| **Customer App** | Mobile web app accessed via QR → daily code. Interactive experience: games, chat, music voting, karaoke, ordering. |
| **Admin Dashboard** | Web-based control panel for bar owners/managers. Controls sessions, sends flash offers, configures modules, views metrics. |
| **DJ Console** | Simplified view for DJs: music queue, requests, karaoke lineup. |
| **Marketing Landing Page** | B2B landing targeting bar owners. Spanish-language. Hero → problem → solution → features → pricing → CTA. |

### Key Sources

No codebase or Figma links were provided. This design system was derived entirely from the product brief supplied by Creativa Perú (creativaflowperu@gmail.com / +51 923593150). All visual decisions are original interpretations of the described brand DNA.

---

## CONTENT FUNDAMENTALS

### Language & Locale
- **Primary language:** Spanish (es-PE / Latin American Spanish)
- **Target audience:** Bar and venue owners/operators in Perú and LATAM — not developers, not end consumers.
- **Secondary audience:** Customers at the venue (the mobile app UX).

### Tone of Voice
- **Direct and commercial.** No fluff, no jargon, no techno-speak.
- **Confident but not arrogant.** "Tu bar, potenciado." Not "revolutionary AI-powered synergies."
- **Business-first.** Always frame features as business outcomes: more sales, more time in venue, better experience, less waste.
- **Warmth with swagger.** The product lives in nightlife culture — there's energy and fun — but the owner-facing comms are no-nonsense.

### Casing
- Headlines: **Title Case** in Spanish (capitalize only first word + proper nouns)
- CTAs: **ALL CAPS** for maximum urgency — "SOLICITA UNA DEMO", "EMPIEZA GRATIS"
- Feature names: Title Case (e.g. "Chat en Vivo", "Karaoke Digital")
- Body copy: Sentence case

### Copy Patterns
- Lead with the business benefit, explain the feature second.
  - ✅ "Aumenta el consumo: tus clientes juegan, piden y quedan más tiempo."
  - ❌ "Our gamification module uses WebSocket real-time sync."
- Use "tu" / "tus" (informal you), not "usted" — approachable and modern.
- Short punchy sentences. Max 2 lines of body copy per block.
- Numbers anchor trust: "Sin inversión en hardware", "100% desde el celular"
- Emoji: **not used** in product UI or marketing copy. Reserved possibly for social media only.

### Example Headlines
- "Más consumo. Mejor experiencia. Sin hardware."
- "Convierte cada mesa en una experiencia."
- "Tu bar, digitalizado. Tus ventas, multiplicadas."
- "La plataforma que tu bar necesitaba."

---

## VISUAL FOUNDATIONS

### Aesthetic Direction
**Dark Nightlife + Modern Fintech.** Think: the premium ambiance of a high-end bar fused with the clean confidence of a B2B SaaS dashboard. Not gothic, not flashy Vegas — controlled, sophisticated darkness with purposeful neon accents that feel earned, not gratuitous.

### Color System
See `colors_and_type.css` for full CSS variable definitions.

| Role | Value | Usage |
|---|---|---|
| `--bg-base` | `#08080E` | Page background |
| `--bg-surface` | `#0F0F1A` | Cards, panels |
| `--bg-elevated` | `#171728` | Elevated cards, modals |
| `--bg-overlay` | `#1E1E32` | Tooltips, dropdowns |
| `--neon-purple` | `#A855F7` | Primary brand accent |
| `--neon-pink` | `#EC4899` | Secondary / CTA highlight |
| `--neon-cyan` | `#22D3EE` | Info / music / interactive |
| `--neon-green` | `#10F38E` | Success / live / active |
| `--neon-amber` | `#F59E0B` | VIP / premium / gold |
| `--fg-1` | `#FFFFFF` | Primary text |
| `--fg-2` | `#C4C4D8` | Secondary text |
| `--fg-3` | `#6B6B8A` | Muted / placeholder |
| `--border` | `rgba(255,255,255,0.08)` | Subtle card borders |
| `--border-accent` | `rgba(168,85,247,0.35)` | Glowing borders |

### Gradient Language
- **Hero gradient:** radial from `--neon-purple` (opacity 0.3) at top-center fading to `--bg-base`
- **CTA button:** linear-gradient from `--neon-purple` → `--neon-pink` (135deg)
- **Card glow:** box-shadow with neon color at low opacity (e.g. `0 0 24px rgba(168,85,247,0.25)`)
- **Glass surfaces:** `background: rgba(255,255,255,0.04)` + `backdrop-filter: blur(16px)` + `border: 1px solid var(--border)`
- Never full-bleed gradients as backgrounds — always radial spots on dark base

### Typography
| Role | Font | Weight | Size range |
|---|---|---|---|
| Display / Hero | Syne | 700–800 | 48–96px |
| Heading | Syne | 600–700 | 24–40px |
| Subheading | DM Sans | 500–600 | 16–20px |
| Body | DM Sans | 400 | 14–16px |
| Caption/Label | DM Sans | 500 | 11–13px |
| Mono/Code | JetBrains Mono | 400 | 12–14px |

**Font substitution note:** Syne and DM Sans are loaded from Google Fonts. If brand-owned typefaces exist, they should replace these. See flag in SKILL.md.

### Spacing System
Based on 4px base unit. Scale: 4, 8, 12, 16, 24, 32, 48, 64, 96, 128px

### Corner Radii
- `--radius-sm`: 6px — chips, badges, small inputs
- `--radius-md`: 12px — buttons, small cards
- `--radius-lg`: 20px — feature cards, modals
- `--radius-xl`: 32px — hero cards, large panels
- `--radius-full`: 9999px — pills, avatars, toggle switches

### Shadows & Glows
- **Elevated card:** `0 4px 24px rgba(0,0,0,0.5)`
- **Neon glow (purple):** `0 0 32px rgba(168,85,247,0.3), 0 0 8px rgba(168,85,247,0.15)`
- **Neon glow (pink):** `0 0 32px rgba(236,72,153,0.3)`
- **Neon glow (cyan):** `0 0 32px rgba(34,211,238,0.3)`
- **Inner glow:** `inset 0 0 20px rgba(168,85,247,0.1)` — used on active states

### Borders
- Default: `1px solid rgba(255,255,255,0.07)`
- Accent: `1px solid rgba(168,85,247,0.4)` with matching glow
- Gradient border technique: CSS pseudo-element or `border-image` with purple→pink gradient

### Animation
- **Easing:** `cubic-bezier(0.16, 1, 0.3, 1)` (snappy spring) for entrances
- **Duration:** 200ms for micro-interactions, 400ms for panel transitions, 600ms for hero elements
- **Hover states:** scale(1.02) + increased glow intensity — never color-only hover
- **Press states:** scale(0.97) — quick tactile feedback
- **No heavy animations** — subtle, purposeful. Avoid bounces or excessive movement.
- **Scroll animations:** fade-up (translateY 20px → 0, opacity 0→1) with staggered delays

### Imagery & Backgrounds
- Dark base with radial neon gradients as "atmosphere"
- Product screenshots shown in device frames (phone mockup or browser)
- No stock photography of people — use UI screenshots only
- Subtle noise texture overlay (opacity ~0.03) on backgrounds for premium feel
- No hand-drawn illustrations — clean, digital-native aesthetic

### Cards
- Background: `--bg-surface` or `--bg-elevated`
- Border: `1px solid var(--border)`
- Border-radius: `--radius-lg` (20px)
- Hover: border upgrades to `--border-accent` + neon glow appears
- No colored left-border accent (avoid that trope)

### Iconography
See ICONOGRAPHY section below.

---

## ICONOGRAPHY

**Approach:** Lucide Icons (CDN) — thin stroke (1.5–2px), minimal, modern. Consistent 24×24 base size scaled to context.

- CDN: `https://unpkg.com/lucide@latest/dist/umd/lucide.min.js`
- Usage: `<i data-lucide="icon-name"></i>` then `lucide.createIcons()`
- No emoji as icons in product UI
- No PNG icons — SVG only for scalability
- Module icons (games, chat, music, karaoke, etc.) use Lucide with neon color tinting

**Icon → Module Mapping:**
| Module | Lucide Icon |
|---|---|
| Juegos +18 | `dice-6` |
| Chat en Vivo | `message-circle` |
| Música Interactiva | `music-2` |
| Karaoke Digital | `mic-2` |
| Atención Inmediata | `bell` |
| Audios Personalizados | `volume-2` |
| Feedback | `star` |
| Admin Dashboard | `layout-dashboard` |
| Flash Offer | `zap` |
| QR Scan | `qr-code` |

---

## FILE INDEX

```
README.md               — This file
SKILL.md                — Agent skill definition
colors_and_type.css     — CSS variables: colors, type, spacing, radii, shadows
assets/
  logo.svg              — Social Bar wordmark + icon
  logo-icon.svg         — Icon only
  noise.svg             — Background texture
preview/
  colors-base.html      — Base color palette
  colors-neon.html      — Neon accent swatches
  colors-semantic.html  — Semantic / state colors
  type-scale.html       — Display + heading type specimens
  type-body.html        — Body + caption + mono specimens
  spacing-tokens.html   — Spacing + radius + shadow tokens
  components-buttons.html     — Button variants
  components-badges.html      — Badges, chips, status indicators
  components-cards.html       — Feature and content cards
  components-inputs.html      — Form inputs, search, selects
  components-nav.html         — Navigation patterns
  brand-logo.html             — Logo usage
  brand-modules.html          — Module icon cards
ui_kits/
  landing/
    index.html          — Full landing page (interactive)
    Hero.jsx            — Hero section component
    Features.jsx        — Feature cards section
    HowItWorks.jsx      — User flow section
    Pricing.jsx         — Pricing cards
    Footer.jsx          — Footer + contact
  app/
    index.html          — Customer mobile app (interactive)
    AppShell.jsx        — Shell, nav, session header
    HomeScreen.jsx      — Module grid home screen
    GamesScreen.jsx     — Games module
    ChatScreen.jsx      — Live chat module
    KaraokeScreen.jsx   — Karaoke queue module
```

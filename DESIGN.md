# FAMTRIX Design System & Style Guide (`DESIGN.md`)

> **Single Source of Truth for Visual Styling & Front-End Implementation**  
> **Brand:** FAMTRIX (Digital Solutions & Technology Services)  
> **Tagline:** *Powered by Innovation. Driven by Technology.*  
> **Motto:** *We Build. We Secure. We Grow Together.*  
> **Target Audience:** Startups, local businesses, and students in Mysuru, India (Remote & In-Person).  
> **Design Philosophy:** Ultra-modern, trustworthy, high-performance tech vanguard combining dark obsidian surfaces, subtle glassmorphism, luminous aurora gradients (neon emerald to electric cyan/blue), and crisp, accessible typography.

---

## 1. Brand Identity & Visual Language

FAMTRIX stands at the intersection of robust engineering, modern digital transformation, and local accessibility in Mysuru. The visual language conveys:
- **Authority & Reliability:** High-grade cybersecurity, modern cloud architectures, and full-stack software development.
- **Growth & Innovation:** High-energy neon emerald accents symbolizing business growth, client conversions, and dynamic automation.
- **Approachability:** Tailored for Mysore-based founders, retail and service business owners, and ambitious students looking for internships, live projects, and digital career advancement.

---

## 2. Color Palette & Semantic Tokens

The color palette is derived directly from the official FAMTRIX brand assets (`hero-banner.png`, `approach-ccdc-framework.png`, `digital-marketing-service.png`) and optimized via contrast standards (WCAG AAA for body text, AA+ for display elements).

### 2.1 Core Brand Colors

| Token Name | HEX Code | RGB | Purpose & Usage |
| :--- | :--- | :--- | :--- |
| `--brand-primary` | `#0EA5E9` | `rgb(14, 165, 233)` | **Electric Cyan / Tech Blue**: Core action color, links, primary interactive states, tech icons. |
| `--brand-primary-deep` | `#2563EB` | `rgb(37, 99, 235)` | **Royal Tech Blue**: Depth gradients, high-contrast button foundations. |
| `--brand-secondary` | `#10B981` | `rgb(16, 185, 129)` | **Neon Emerald / Mint**: Growth metrics, active status pills, secondary highlights, success badges. |
| `--brand-secondary-light`| `#22C55E` | `rgb(34, 197, 94)` | **Vibrant Lime / Growth Green**: Logo upper monogram, high-impact gradient accents. |
| `--brand-accent-glow` | `#38BDF8` | `rgb(56, 189, 248)` | **Atmospheric Cyan**: Glowing borders, ambient light pools, subtle hover states. |
| `--brand-whatsapp` | `#25D366` | `rgb(37, 211, 102)` | **WhatsApp Direct Action**: Dedicated header and floating contact trigger. |

### 2.2 Surface & Canvas System (Dark Canvas - Default Brand Mode)

| Surface Token | HEX / RGBA | Description |
| :--- | :--- | :--- |
| `--bg-canvas` | `#050814` | Ultra-deep obsidian navy; seamless contrast with 3D renders. |
| `--bg-canvas-subtle`| `#091124` | Secondary section background (alternating band). |
| `--bg-card` | `rgba(15, 23, 42, 0.65)` | Glassmorphic surface for cards, pricing modules, feature tiles. |
| `--bg-card-hover` | `rgba(30, 41, 59, 0.75)` | Elevated interactive card surface on hover. |
| `--bg-elevated` | `#0F172A` | Floating navigation bar, popovers, dropdowns. |
| `--border-subtle` | `rgba(255, 255, 255, 0.08)`| Hairline glass card border for crisp structure. |
| `--border-highlight`| `rgba(56, 189, 248, 0.35)`| Focused input borders and active card rings. |

### 2.3 Light Canvas Alternative (Clean Contrast Mode / Fallback)

| Surface Token | HEX | Description |
| :--- | :--- | :--- |
| `--bg-light-canvas` | `#F8FAFC` | Slate-50 clean canvas for daylight readability. |
| `--bg-light-surface`| `#FFFFFF` | Crisp white elevated card surface. |
| `--border-light` | `#E2E8F0` | Slate-200 card border. |
| `--text-light-head` | `#0F172A` | Slate-900 high-contrast headings. |
| `--text-light-body` | `#334155` | Slate-700 readable narrative text. |

### 2.4 Typography Color System

| Token | HEX Code | Usage |
| :--- | :--- | :--- |
| `--text-white` | `#FFFFFF` | Headings (H1, H2, H3), key metrics, prominent buttons. |
| `--text-slate-100` | `#F1F5F9` | Subheadings, card titles, prominent badges. |
| `--text-slate-300` | `#CBD5E1` | Primary paragraph text, feature lists, form labels. |
| `--text-slate-400` | `#94A3B8` | Secondary notes, footer links, metadata, dates. |
| `--text-slate-500` | `#64748B` | Disabled states, subtle watermarks, copyright text. |

### 2.5 Gradients & Aurora Accents

```css
/* Signature Brand Aurora Gradient (Header CTA, Headline Highlights, Badges) */
--grad-brand-aurora: linear-gradient(135deg, #10B981 0%, #0EA5E9 50%, #2563EB 100%);

/* Electric Tech Button Glow */
--grad-button-primary: linear-gradient(135deg, #0EA5E9 0%, #2563EB 100%);

/* Secondary Accent Button Glow */
--grad-button-success: linear-gradient(135deg, #10B981 0%, #059669 100%);

/* Hero Text Highlight Clip */
--grad-text-hero: linear-gradient(135deg, #FFFFFF 30%, #38BDF8 70%, #10B981 100%);

/* Subtle Glass Border Gradient */
--grad-border-glass: linear-gradient(135deg, rgba(255, 255, 255, 0.18) 0%, rgba(255, 255, 255, 0.02) 100%);

/* Hero Radial Glow */
--grad-hero-ambient: radial-gradient(circle at 50% 15%, rgba(14, 165, 233, 0.16) 0%, rgba(16, 185, 129, 0.07) 35%, transparent 70%);
```

---

## 3. Typography System

### 3.1 Font Families

- **Primary Font Stack:**  
  `'Plus Jakarta Sans', 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif`  
  *Rationale:* Plus Jakarta Sans features geometric precision, contemporary tech proportions, warm humanist touchpoints, and ultra-crisp legibility across all screen densities.
- **Monospace / Code Font Stack:**  
  `'JetBrains Mono', 'Fira Code', 'Courier New', monospace`  
  *Rationale:* For developer credentials, API references, server metrics, and tech stack tags.

### 3.2 Type Scale & Hierarchy (8px Baseline Grid)

| Level | Size (px / rem) | Line Height | Weight | Letter Spacing | Responsive Scaling (Mobile / Desktop) |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **Display / Hero H1** | `52px / 3.25rem` | `1.1` (57px) | `800` (ExtraBold) | `-0.03em` | `36px (Mobile) -> 52px (Desktop)` |
| **Section H2** | `36px / 2.25rem` | `1.2` (43px) | `700` (Bold) | `-0.025em` | `28px (Mobile) -> 36px (Desktop)` |
| **Card / Feature H3**| `22px / 1.375rem`| `1.3` (29px) | `600` (SemiBold) | `-0.015em` | `20px (Mobile) -> 22px (Desktop)` |
| **Subheading H4** | `18px / 1.125rem`| `1.4` (25px) | `600` (SemiBold) | `-0.01em` | `16px -> 18px` |
| **Body Large** | `18px / 1.125rem`| `1.6` (29px) | `400 / 500` | `0` | Lead paragraph, hero subtitle |
| **Body Standard** | `16px / 1.0rem` | `1.6` (26px) | `400` (Regular) | `0` | Default body copy, descriptions |
| **Body Small** | `14px / 0.875rem`| `1.5` (21px) | `400 / 500` | `+0.01em` | Metadata, card footnotes, form labels |
| **Micro / Badge** | `12px / 0.75rem` | `1.4` (17px) | `600` (SemiBold) | `+0.06em` | Uppercase pill tags, breadcrumbs |

---

## 4. Spacing & Layout Architecture

### 4.1 8px / 4px Spacing Rhythm

Every margin, padding, height, and gap is strictly aligned to a 4px/8px incremental scale:

```css
--space-1: 4px;   /* 0.25rem */
--space-2: 8px;   /* 0.50rem */
--space-3: 12px;  /* 0.75rem */
--space-4: 16px;  /* 1.00rem */
--space-5: 20px;  /* 1.25rem */
--space-6: 24px;  /* 1.50rem */
--space-8: 32px;  /* 2.00rem */
--space-10: 40px; /* 2.50rem */
--space-12: 48px; /* 3.00rem */
--space-16: 64px; /* 4.00rem */
--space-20: 80px; /* 5.00rem */
--space-24: 96px; /* 6.00rem */
--space-32: 128px;/* 8.00rem */
```

### 4.2 Layout Grid & Containers

- **Maximum Container Width:** `1280px` (`max-w-7xl` in Tailwind/CSS grid)
- **Container Gutter Padding:**
  - Mobile: `16px` (`px-4`)
  - Tablet: `24px` (`px-6`)
  - Desktop: `32px` (`px-8`)
- **Vertical Section Spacing:**
  - Standard Sections: `80px` (Mobile) / `112px` (Desktop)
  - Hero Section: `60px` top buffer, `96px` bottom buffer
- **Column Grids:**
  - 12-column flexible fluid CSS Grid with `24px` (`gap-6`) to `32px` (`gap-8`) gap.
  - 3-column cards (`grid-cols-1 md:grid-cols-2 lg:grid-cols-3`) for What We Do, Case Studies, and Resources.
  - 4-column cards (`grid-cols-1 sm:grid-cols-2 lg:grid-cols-4`) for Why FAMTRIX.

---

## 5. Visual Effects, Shadows & Textures

### 5.1 Subtle Glassmorphism

Cards and header elements float gracefully over dark backgrounds:

```css
.glass-panel {
  background: rgba(15, 23, 42, 0.65);
  backdrop-filter: blur(16px) saturate(160%);
  -webkit-backdrop-filter: blur(16px) saturate(160%);
  border: 1px solid rgba(255, 255, 255, 0.08);
  box-shadow: 0 10px 30px -10px rgba(0, 0, 0, 0.5);
  transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
}

.glass-panel:hover {
  background: rgba(30, 41, 59, 0.7);
  border-color: rgba(56, 189, 248, 0.3);
  box-shadow: 0 20px 40px -12px rgba(14, 165, 233, 0.18);
  transform: translateY(-4px);
}
```

### 5.2 Shadows & Tech Glows

```css
--shadow-sm: 0 1px 2px 0 rgba(0, 0, 0, 0.3);
--shadow-md: 0 4px 6px -1px rgba(0, 0, 0, 0.4), 0 2px 4px -2px rgba(0, 0, 0, 0.3);
--shadow-lg: 0 10px 15px -3px rgba(0, 0, 0, 0.5), 0 4px 6px -4px rgba(0, 0, 0, 0.4);
--shadow-xl: 0 20px 25px -5px rgba(0, 0, 0, 0.6), 0 8px 10px -6px rgba(0, 0, 0, 0.5);

/* Neon Glow Accents */
--glow-cyan: 0 0 24px -2px rgba(14, 165, 233, 0.45);
--glow-green: 0 0 24px -2px rgba(16, 185, 129, 0.45);
--glow-primary-btn: 0 4px 20px rgba(14, 165, 233, 0.35);
```

### 5.3 Background Pattern (`assets/hero-bg-pattern.svg`)

- Dedicated high-performance SVG pattern saved in `assets/hero-bg-pattern.svg`.
- Incorporates:
  1. Base deep obsidian gradient (`#050814` to `#091124`).
  2. Multi-point blurred radial light fields (Cyan `#0EA5E9` at 20% / Emerald `#10B981` at 80%).
  3. Haikei organic fluid waves layered at bottom transitions.
  4. Subtle precision 40px tech grid with glowing node vertices (`rgba(56, 189, 248, 0.15)`).

---

## 6. Component Style Specifications

### 6.1 Border Radius Standards

- **Buttons (Pills / Soft Rounded):** `9999px` (Pill format for CTAs) or `10px` (Modern compact)
- **Cards & Content Modules:** `16px` (`rounded-2xl`)
- **Featured Banners / Hero Wrappers:** `24px` (`rounded-3xl`)
- **Inputs & Form Controls:** `12px` (`rounded-xl`)
- **Badges & Tags:** `9999px` (Full Pill)

### 6.2 Buttons & Interaction States

1. **Primary Button (High-Impact Hero CTA):**
   - Background: `--grad-button-primary` (`#0EA5E9` to `#2563EB`) or Brand Aurora.
   - Text: `#FFFFFF`, Weight: `600`, Size: `15px`.
   - Padding: `14px 28px`.
   - Radius: `9999px` (Pill).
   - Shadow: `--glow-primary-btn`.
   - Hover: `translateY(-2px)`, scale(1.02), increased glow brightness.

2. **Secondary Button (Outline Glass):**
   - Background: `rgba(255, 255, 255, 0.04)`.
   - Border: `1px solid rgba(255, 255, 255, 0.15)`.
   - Text: `#F1F5F9`, Weight: `500`.
   - Padding: `14px 26px`.
   - Hover: `background: rgba(255, 255, 255, 0.1)`, `border-color: rgba(255, 255, 255, 0.35)`.

3. **WhatsApp Quick Connect Pill:**
   - Background: `rgba(37, 211, 102, 0.12)`.
   - Border: `1px solid rgba(37, 211, 102, 0.35)`.
   - Text: `#25D366`, Weight: `600`.
   - Icon: Green WhatsApp glyph.

### 6.3 Form Elements

- **Input Fields & Textareas:**
  - Background: `rgba(15, 23, 42, 0.6)`.
  - Border: `1px solid rgba(255, 255, 255, 0.1)`.
  - Radius: `12px`.
  - Text Color: `#FFFFFF`.
  - Placeholder Color: `#64748B`.
  - Focus Ring: `0 0 0 2px rgba(14, 165, 233, 0.4)`, border color `#0EA5E9`.
  - Padding: `14px 18px`.

---

## 7. Wireframe-to-Asset Mapping Matrix

Based on the thorough examination of `Famtrix Homepage Wireframe.pdf` and the downloaded visual assets in `assets/`:

| Section # | Wireframe Section Title | Matching Downloaded Asset in `assets/` | Description & Content Integration |
| :--- | :--- | :--- | :--- |
| **0** | **Header** | `famtrix-logo.svg` | Branded logo monogram + wordmark, nav links, WhatsApp pill, consultation CTA. |
| **1** | **Hero Section** | `hero-banner.png` & `hero-bg-pattern.svg` | Headline, Mysuru startup focus, CTA buttons, metrics bar (50+ clients, 100+ projects, 100% secure, 98% satisfaction), tech stack logos (React, Next.js, Node.js, MongoDB, AWS). |
| **2** | **What We Do (6 Services)** | • `digital-marketing-service.png`<br>• `full-stack-dev-service.png`<br>• `graphic-design-service.png`<br>• `ai-automation-service.png`<br>• `cybersecurity-service.png` | 6 service cards with 3D illustrations, crisp value props, and "Request a Quote / Learn More" links. |
| **3** | **Featured Product Showcase** | `featured-product-showcase.png` | Marketing demo showcase laptop, feature bullets, "Book a Demo" CTA. |
| **4** | **Who We Help** | • `who-we-help-startups.png`<br>• `who-we-help-businesses.png`<br>• `who-we-help-students.png` | 3 persona cards tailored for Startups (scale quickly), Local Businesses (reach local customers), and Students (internships & practical industry training). |
| **5** | **Why FAMTRIX** | • `why-mysuru-based.png`<br>• `why-one-team.png`<br>• `why-budget-friendly.png`<br>• `why-flexible-collaboration.png` | 4 value pillars: Local Mysuru-based, One Unified Team, Budget-Friendly, Flexible In-Person / Remote. |
| **6** | **Proof & Results (CCDC Approach)** | `approach-ccdc-framework.png` | The FAMTRIX CCDC Framework (Creating Value, Creating Quality, Delivering Value with Quality, Capturing Highlights) + Testimonial quote card. |
| **7** | **Lead Magnet** | Glassmorphic CTA banner | "Free Marketing Checklist for Local Businesses" with email input and "Download Free" button. |
| **8** | **About Section** | Modern founder/team layout | "The story behind FAMTRIX" - Mission, Mysuru tech roots, and link to About page. |
| **9** | **Resources / Blog** | 3 modern resource cards | Digital marketing tips for Mysuru businesses, First 100 customers online, Tech guides. |
| **10** | **Contact Section & Map** | Interactive split-form | Direct contact details (Email, Phone, Mysuru Karnataka address, Google Map embed) + Consultation form. |
| **11** | **Footer** | `famtrix-logo.svg` | Company info, navigation columns, social links (LinkedIn, Instagram), copyright © FAMTRIX. |

---

## 8. Development Implementation Rules

1. **Mobile-First Responsiveness:** Every layout component must scale effortlessly from 360px wide smartphones up to 4K desktop screens.
2. **Performance First:** All images will utilize modern formats, lazy loading, and explicit width/height ratios to eliminate Layout Shift (CLS = 0).
3. **Semantic HTML5:** Strict use of `<header>`, `<main>`, `<section>`, `<article>`, `<aside>`, `<footer>`.
4. **Accessibility (a11y):** All interactive elements must feature accessible focus outlines, ARIA labels, and proper color contrast.

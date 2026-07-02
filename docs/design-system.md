# Shopaholic Approved Brand & Design System

This design system defines the CSS tokens, layouts, buttons, typography, and styling variables for **Shopaholic Approved**. It replicates the soft, cute, collector boutique aesthetic of the reference site, ensuring the UI remains clean, professional, and accessible.

---

## 1. CSS Color Tokens
The website uses a soft pastel color scheme paired with highly readable dark charcoal text. Implement these tokens in the main stylesheet (`index.css`) as root variables:

```css
:root {
  /* Brand Primary & Backgrounds */
  --color-bg-primary: #ffffff;
  --color-bg-soft-cream: #faf8f5;    /* Soft beige/cream tint */
  --color-text-charcoal: #0d141a;    /* High readability dark text */
  --color-text-muted: #56585e;       /* Muted gray for descriptions */
  
  /* Soft Pastel Accents & Overlay Colors */
  --color-accent-lavender: #7a5cff;  /* Primary brand purple */
  --color-accent-indigo: #312a4f;    /* Footer and button hover dark purple */
  --color-accent-pink: #fbcce6;      /* Soft pink accent for preorders hover */
  --color-accent-yellow: #f7d87b;    /* Pastel gold/yellow for contact hover */
  
  /* Status Badges */
  --color-badge-instock-bg: #e2f4f0;
  --color-badge-instock-text: #008361; /* Soft green */
  
  --color-badge-preorder-bg: #ebe4ff;
  --color-badge-preorder-text: #5025d1; /* Soft purple */
  
  --color-badge-soldout-bg: #f2f3f6;
  --color-badge-soldout-text: #727586; /* Soft gray */
  
  --color-badge-lowstock-bg: #fff8e2;
  --color-badge-lowstock-text: #9f6000; /* Soft orange */
  
  --color-badge-new-bg: #ffe8ef;
  --color-badge-new-text: #d63163; /* Soft red-pink */
  
  --color-badge-soon-bg: #e3ebf9;
  --color-badge-soon-text: #265ab2; /* Soft blue */

  /* UI Borders & Focus Rings */
  --color-border-light: #dadce0;
  --color-border-dark: #0d141a;
  --color-focus-outline: #7a5cff;
}
```

---

## 2. Typography System

### Google Font Pairings
Include these fonts from Google Fonts:
```html
<link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600&family=Lobster&family=Merriweather:wght@400;700&family=Playfair+Display:wght@400;700&family=Roboto:wght@400;700&display=swap" rel="stylesheet">
```

### Font Configurations
- **Serif Heading Font:** `'Playfair Display'`, or `'Merriweather'`, serif (used for elegant headers).
- **Display Accent Font:** `'Lobster'`, cursive (used selectively for storytelling headings, like the About section).
- **Body & Interface Font:** `'Poppins'`, sans-serif (clean, cute geometric roundness for general text, navigation, and badges).
- **Alternative Sans Font:** `'Roboto'`, sans-serif (used on search forms and data tables).

### Size & Scale Hierarchy
| Token | Font Family | Size (Desktop) | Size (Mobile) | Line Height | Weight |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **H1** | Playfair Display / Serif | 64px (4.0rem) | 40px (2.5rem) | 1.3 | 600 / Bold |
| **H2** | Playfair Display / Serif | 56px (3.5rem) | 36px (2.25rem) | 1.3 | 600 / Bold |
| **H3** | Playfair Display / Serif | 48px (3.0rem) | 32px (2.0rem) | 1.3 | 600 / Bold |
| **H4** | Playfair Display / Serif | 40px (2.5rem) | 24px (1.5rem) | 1.3 | 600 / Bold |
| **H5** | Merriweather / Serif | 26px (1.625rem)| 20px (1.25rem) | 1.3 | 600 / Semi-Bold |
| **Body (Large)** | Poppins / Sans-Serif | 18px (1.125rem)| 18px (1.125rem) | 1.5 | 400 / Normal |
| **Body (Normal)**| Poppins / Sans-Serif | 16px (1.0rem) | 16px (1.0rem) | 1.5 | 400 / Normal |
| **Body (Small)** | Poppins / Sans-Serif | 14px (0.875rem)| 14px (0.875rem) | 1.5 | 500 / Medium |

---

## 3. Button Styles
Buttons must use a fully-rounded pill shape (`border-radius: 999px` or matching pixel scale) to convey a friendly, soft aesthetic.

### Hero Action Buttons (Custom Pill)
- **Shared Properties:**
  - `padding: 16px 40px;` (mobile: `14px 36px`)
  - `border-radius: 28px;`
  - `border-width: 1.5px;`
  - `border-style: solid;`
  - `font-family: 'Merriweather', serif;`
  - `font-size: 18px;`
  - `transition: background-color 0.2s ease, border-color 0.2s ease, color 0.2s ease;`
- **Shop CTA Button:**
  - Background: `#ffffff`
  - Border Color: `#0d141a` (var `--color-text-charcoal`)
  - Text Color: `#0d141a`
  - *Hover State:* Background changes to `rgba(122, 92, 255, 0.25)` (soft purple overlay) or solid `#c5c1eb`. Text/border color remains charcoal.
- **Preorders CTA Button:**
  - Background: `#ffffff`
  - Border Color: `#0d141a`
  - Text Color: `#0d141a`
  - *Hover State:* Background changes to `#fad0e7` (soft pink).
- **Contact CTA Button:**
  - Background: `#ffffff`
  - Border Color: `#0d141a`
  - Text Color: `#0d141a`
  - *Hover State:* Background changes to `#edd988` (soft yellow/gold).

### Secondary Standard Buttons (Product Add-to-Cart)
- **Primary Button Class:**
  - Background: `#0d141a`
  - Text Color: `#ffffff`
  - Border: None
  - `border-radius: 999px;`
  - *Hover State:* Background `#2f313a` (light charcoal shift).
- **Secondary Button Class (Out-of-Stock / Muted):**
  - Background: `#ffffff`
  - Border Color: `#dadce0`
  - Text Color: `#727586`
  - *Hover State:* Background `#f2f3f6`.

---

## 4. Cards and Shadows
- **Card Border Radius:** All container blocks, custom catalog banners, and product showcase image wrappers must use a rounded corner system:
  - Main section image boxes: `border-radius: 20px;`
  - Product Card grid frames: `border-radius: 12px;`
- **Shadow System:** Avoid harsh drop-shadows. Use a soft, subtle glow to keep items matching the pastel theme:
  - Cards: `box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);`
  - Cart Drawers: `box-shadow: -4px 0 20px rgba(0, 0, 0, 0.06);`

---

## 5. Spacing System
Use consistent rem spacing matching standard layout margins:
- `spacing-xs`: `0.25rem` (4px)
- `spacing-sm`: `0.5rem` (8px)
- `spacing-md`: `1.0rem` (16px)
- `spacing-lg`: `1.5rem` (24px)
- `spacing-xl`: `2.0rem` (32px)
- `spacing-xxl`: `3.0rem` (48px)
- `spacing-section`: `4.0rem` (64px) — padding between core homepage panels.

---

## 6. Form Input Elements
For Request Sourcing forms and contact message forms:
- **Style:**
  - `padding: 12px 16px;`
  - `border: 1px solid var(--color-border-light);`
  - `border-radius: 10px;`
  - `font-family: 'Poppins', sans-serif;`
  - `font-size: 16px;`
  - `background-color: var(--color-bg-primary);`
- **States:**
  - *Hover:* Border shifts to `--color-text-charcoal`.
  - *Focus:* Outline uses `2px solid var(--color-focus-outline)` with a small offset, or a soft box-shadow glow `0 0 0 3px rgba(122, 92, 255, 0.2)`.

---

## 7. Product Badges & Inventory States
Badges must display prominently on the top corner of product cards and detail panels:
- **Common Badge Styling:**
  - `display: inline-block;`
  - `padding: 4px 10px;`
  - `border-radius: 6px;`
  - `font-size: 12px;`
  - `font-weight: 600;`
  - `text-transform: uppercase;`
  - `letter-spacing: 0.5px;`
- **Badge Types:**
  - **In Stock:** Background `var(--color-badge-instock-bg)`, Text `var(--color-badge-instock-text)`.
  - **Low Stock:** Background `var(--color-badge-lowstock-bg)`, Text `var(--color-badge-lowstock-text)`.
  - **Sold Out:** Background `var(--color-badge-soldout-bg)`, Text `var(--color-badge-soldout-text)`.
  - **Preorder:** Background `var(--color-badge-preorder-bg)`, Text `var(--color-badge-preorder-text)`.
  - **New Arrival:** Background `var(--color-badge-new-bg)`, Text `var(--color-badge-new-text)`.
  - **Coming Soon:** Background `var(--color-badge-soon-bg)`, Text `var(--color-badge-soon-text)`.

---

## 8. Layout Structures & Visual Rules

### Header Settings
- **Sticky State:** Header must remain fixed at the top of the viewport (`position: sticky; top: 0; z-index: 100;`).
- **Styles:** Solid background `#ffffff` with a subtle bottom border (`1px solid var(--color-border-light)`) to separate it from the page content.
- **Heights:** Desktop: `96px` height; Mobile: `157px` height (or collapsible sandwich menu).

### Footer Settings
- **Design:** Deep indigo background color (`#312a4f`) with white/light gray links.
- **Padding:** Top/bottom `40px` (desktop: `64px`).
- **Disclaimers:** Includes a small, clean font area at the absolute bottom for the store affiliate disclaimer.

---

## 9. Mobile Responsiveness Overrides
- **Max Width Containers:** Limit desktop container width to `1224px` / `1240px`.
- **Breakpoints:**
  - Mobile: `< 768px`
  - Tablet: `768px` - `1024px`
  - Desktop: `> 1024px`
- **Grid Layout Wraps:** Category strips and product cards must wrap to single-column or 2-column grids on mobile.
- **Font Scaling:** Check scaling sizes in Section 2 table. Do not exceed `40px` for headings on mobile devices.

---

## 10. Accessibility Boundaries
To build a highly credible, professional store:
- **Contrast Check:** Ensure all text passes WCAG AA contrast ratios. Charcoal `#0d141a` text on `#ffffff` backgrounds exceeds `4.5:1`.
- **Keyboard Navigation:** Custom focus states (`:focus-visible`) must highlight elements with a clear lavender ring outline.
- **Tap Targets:** Interactive touch areas, buttons, and nav menu links must have a minimum clickable area of `44px x 44px`.
- **Alt Text:** Every product image must include a descriptive, accurate alternative text string (e.g. `<img alt="Macaron Vinyl Plush Face bag charm keychain - Green" ...>`).

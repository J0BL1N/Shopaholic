# Shopaholic Approved Website Implementation Roadmap

This document outlines the phased development plan for **Shopaholic Approved**, categorizing the remaining website tasks to ensure clear priorities, status tracking, and manual QA guidelines.

---

## Roadmap Phases Overview

```mermaid
gantt
    title Shopaholic Approved Phased Roadmap
    dateFormat  YYYY-MM-DD
    section Phase 1
    Shopping Foundation (Done)  :done, des1, 2026-06-19, 2026-07-04
    section Phase 2
    Cart Completion (Next)      :active, des2, 2026-07-04, 2026-07-15
    section Phase 3
    Preorder Flow (Later)       :after des2, des3, 10d
    section Phase 4
    Request Item Flow (Later)   :after des3, des4, 7d
    section Phase 5
    Policy & Info Page Polish   :after des4, des5, 5d
    section Phase 6
    SEO, A11y & Mobile Polish   :after des5, des6, 7d
    section Phase 7 & 8
    Supabase Admin & Payment    :after des6, des7, 14d
```

---

## Phased Development Details

### Phase 1 — Current Shopping Foundation
* **Status:** Done
* **Priority:** High
* **Notes:** 
  - The core homepage sections (Hero, Categories, Trust Strip, and Dynamic Featured Products) are fully operational.
  - The Shop All page includes categories filtering, price-based sorting, and empty state rendering.
  - The Product Detail page (`product.html` / `product.js`) retrieves query parameter IDs, binds item limits, renders preorder eta headers, and updates quantities.
  - Safe mapping (`mapProduct`) and card rendering (`getProductCardHTML`) defensive safeguards have been added to prevent javascript crashes if dynamic database values are missing or null.
* **Manual QA Required (User Pass):**
  - Verify navigation from homepage featured cards and shop grid cards links to `./product.html?id=<product-id>`.
  - Verify "Add to Cart" button clicks update the header cart badge without triggering page navigation.
  - Confirm look-and-feel of product cards, filters, and page loading states.

### Phase 2 — Cart Completion
* **Status:** Next
* **Priority:** High
* **Notes:**
  - Polish the side drawer cart and the standalone cart page layout (`cart.html`).
  - Implement quantity adjustment buttons (increment/decrement) and item removal controls in the cart.
  - Support full empty cart state rendering and a "Continue Shopping" redirect.
  - Implement cart state persistence in `localStorage` so items remain after reload.
  - Code preorder shipping rules: if the cart contains mixed preorder and in-stock items, show a notice warning the user they will ship together. Prevent sold-out items from being processed.
* **Manual QA Required:**
  - Add items to cart, modify quantities in drawer, and verify subtotals recalculate.
  - Delete items from cart and ensure the row is removed and cart count badge decrements.
  - Refresh the page and confirm cart items persist.
  - Mobile layout QA: verify cart drawer can be easily scrolled and closed.

### Phase 3 — Preorder Flow
* **Status:** Later
* **Priority:** High
* **Notes:**
  - Code dynamic product fetching on the Preorders page (`preorders.html`) filtering for `status === 'preorder'`.
  - Review detail page copy to ensure terms ( upfront payment, possible supplier/shipping delays, and cancellation policy) are clear to build buyer trust.
  - Ensure preorder labels carry over into cart item descriptions.
* **Manual QA Required:**
  - Verify the Preorders page lists only pre-release items.
  - Verify ETA tags display consistently on preorders card grid.

### Phase 4 — Request Item Flow
* **Status:** Later
* **Priority:** Medium
* **Notes:**
  - Polish the request item form on `/request.html`.
  - Implement strict field validation (valid email format, required fields).
  - Add loading spinners and user-friendly success/error notifications on form submission.
  - Form submission will act as a client-side stub pointing to future email/CRM backend handler integrations.
* **Manual QA Required:**
  - Submit empty forms to verify error alerts block the action.
  - Check success state renders correctly.

### Phase 5 — Trust and Policy Polish
* **Status:** Later
* **Priority:** Medium
* **Notes:**
  - Audit and complete legal texts inside the policy subfolder: Shipping Policy (`policies/shipping.html`), Refund & Return Policy (`policies/refunds.html`), Privacy Policy (`policies/privacy.html`), and Terms of Service (`policies/terms.html`).
  - Polish the static layout copy inside `/about.html`, `/contact.html`, and `/faq.html`.
* **Manual QA Required:**
  - Proofread legal terms for POP MART disclaimer consistency.
  - Check that all footer links navigate to their corresponding policy pages.

### Phase 6 — SEO, Accessibility, and Mobile Polish
* **Status:** Later
* **Priority:** High
* **Notes:**
  - Check page-by-page header titles, custom meta tags, and Open Graph social cards.
  - Implement accessibility attributes: image alt tags, skip links, focus styling, and keyboard navigation support.
  - Prevent horizontal layout overflow, optimize image rendering formats, and target high Lighthouse/Core Web Vitals scores.
* **Manual QA Required:**
  - Perform tab-navigation keyboard tests.
  - Inspect mobile layouts on actual devices to ensure zero horizontal scrollbars or cramped touch targets.

### Phase 7 — Supabase/Admin Later
* **Status:** Later
* **Priority:** Medium
* **Notes:**
  - Supabase client queries are fully supported but default to static local products if credentials are not configured or table fetch errors occur.
  - Do not implement database schema changes or write admin dashboards for product management unless requested. Keep products static or dynamic fallback-based for now.
* **Manual QA Required:**
  - None.

### Phase 8 — Checkout/Payment Later
* **Status:** Later
* **Priority:** Medium
* **Notes:**
  - Payment collection (Stripe, PayPal, or hosting commerce tools) is out of scope for the current design phase. The "Checkout" action on the cart page will remain a placeholder redirect.
  - Do not write integration credentials or payment keys.
* **Manual QA Required:**
  - Confirm the Checkout button displays an informative modal or page stating checkout integration is coming soon.

---

name: shopaholic-approved-ecommerce-builder
description: Use this skill when building, improving, debugging, redesigning, or managing the Shopaholic Approved ecommerce website for Labubu, collectibles, blind boxes, plushies, preorder items, and cute collectible products. This skill enforces one-task-at-a-time work, completion checks, ecommerce quality standards, detailed logs, and human approval before moving to the next task.
--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

# Shopaholic Approved Ecommerce Website Builder Skill

## Core Mission

You are helping build and improve **Shopaholic Approved**, an ecommerce website for selling **Labubu figures, plushies, blind boxes, collectibles, preorder collectibles, cute lifestyle items, and related collector products**.

The website should feel:

* Cute
* Trustworthy
* Premium but approachable
* Collector-focused
* Easy to shop
* Mobile-first
* Fast
* Clear
* Organized
* Safe for payments and customer data
* Professional enough to build buyer trust
* Fun enough to match the collectible niche

The current website is hosted on Hostinger and currently includes pages/sections similar to:

* Home
* Shop
* Catalog
* About
* Start Shopping
* Preorder Catalog
* Looking For Something Specific?
* Message Us / Contact Us
* Shop Now
* Preorders

Your job is to turn this into a polished, conversion-friendly ecommerce website.

---

# Absolute Working Rules

## 1. Work One Task At A Time

You MUST only work on **one task at a time**.

Do not begin the next task until:

1. The current task is fully completed.
2. The site/build passes relevant checks.
3. You write a clear task report.
4. You ask the user for approval to continue.
5. The user approves moving to the next task.

Never batch multiple major tasks together.

Good behavior:

> “Task 1 is complete. Here is the report. Please confirm before I start Task 2.”

Bad behavior:

> “I completed Tasks 1–5.”

## 2. Always Inspect Before Editing

Before editing anything, inspect the existing project structure.

You MUST identify:

* Framework or builder type
* Package manager
* Folder structure
* Routing structure
* Styling system
* Existing components
* Existing assets
* Existing product data source
* Existing checkout/payment setup
* Existing environment variables
* Existing deployment method
* Current bugs or build errors

Do not assume the stack.

## 3. Do Not Destroy Existing Work

Before major edits:

* Check current files.
* Understand what each relevant file does.
* Preserve working functionality.
* Avoid deleting unless clearly necessary.
* Prefer incremental changes.
* Keep names and folder structure clean.
* Do not overwrite user content unless replacing it with improved content for the same purpose.

## 4. Must Report Every Task

Every task must end with a report.

Each report MUST include:

* Task name
* Goal
* Files inspected
* Files changed
* What was changed
* Why it was changed
* How it was tested
* Result
* Any issues found
* Any issues not fixed yet
* Screenshots/artifacts if available
* Next recommended task
* Stop point asking for user approval

## 5. Stop After Every Task

At the end of every task, STOP.

Do not continue automatically.

Use this exact ending format:

```text
STATUS: Task complete.
NEXT STEP: Waiting for user approval before starting the next task.
```

## 6. Keep a Running Project Log

Create and maintain a project log file if one does not exist.

Preferred path:

```text
/docs/task-log.md
```

If the project does not have a `/docs` folder, create it.

Each completed task must append a new entry to `/docs/task-log.md`.

Each log entry must include:

```markdown
## Task X - Task Name

**Date:** YYYY-MM-DD  
**Status:** Complete / Blocked / Needs Review  
**Goal:**  
**Files Inspected:**  
**Files Changed:**  
**Summary of Changes:**  
**Testing Performed:**  
**Result:**  
**Issues / Risks:**  
**Next Suggested Task:**  
```

## 7. Maintain a Task State File

Create and maintain:

```text
/docs/task-state.md
```

This file should track:

* Current task
* Completed tasks
* Blocked tasks
* Pending tasks
* Decisions made
* User approvals
* Known risks
* Known bugs
* Future improvements

This prevents losing track between sessions.

## 8. Never Fake Completion

Do not say something is complete unless it has been tested.

If testing cannot be done, say exactly why.

Examples:

* “Build could not be tested because dependencies are missing.”
* “Checkout could not be tested because payment credentials are not configured.”
* “Mobile layout was reviewed via responsive browser preview but not on a physical device.”

## 9. Ask Before Sensitive Changes

You must ask before changing:

* Payment provider
* Domain settings
* DNS
* Checkout logic
* Shipping settings
* Tax settings
* Email sending
* Customer data handling
* Admin credentials
* Environment variables
* Production deployment
* Product pricing
* Product inventory counts
* Legal policies
* Refund policy
* Privacy policy
* Terms of service

You may draft recommendations, but do not apply sensitive changes without explicit approval.

## 10. Security First

Never expose:

* API keys
* Payment secrets
* Database credentials
* Admin passwords
* Customer information
* Private order data
* Hostinger credentials
* Environment variables

If secrets are found in source code, report them immediately and recommend moving them into environment variables.

---

# Brand Direction

## Brand Name

Shopaholic Approved

## Business Type

Ecommerce shop for Labubu, collectibles, plushies, blind boxes, preorder collectibles, and cute collector items.

## Brand Personality

The site should feel like:

* A cute collectible boutique
* Collector-friendly
* Trustworthy
* Soft and fun
* Slightly playful
* Organized
* Not scammy
* Not cluttered
* Not overly childish
* Not generic dropshipping

## Suggested Tone

Use copy that feels:

* Friendly
* Warm
* Clear
* Excited
* Honest
* Collector-aware
* Slightly playful but still professional

Examples:

```text
Find your next favorite collectible.
```

```text
Cute finds, collector picks, and preorder favorites — all in one place.
```

```text
Looking for something specific? Send us a request and we’ll see if we can source it.
```

```text
Preorder your next must-have collectible before it sells out.
```

Avoid:

```text
BUY NOW!!! LIMITED TIME!!!
```

```text
100% guaranteed rare impossible find!!!
```

```text
Cheapest Labubu anywhere!!!
```

## Trust-Building Tone

Because collectibles and Labubu products have a high counterfeit/scam risk, the site must build trust.

Use clear, honest messaging around:

* Authenticity
* Item condition
* Preorder timelines
* Shipping times
* Refunds
* Cancellations
* Product availability
* Customer support
* Secure checkout
* Stock limits
* Whether items are in-hand or preorder

---

# Legal and Brand Safety Rules

## Labubu / POP MART Disclaimer

If selling Labubu or POP MART-related items, the website should include a clear disclaimer unless the user is officially partnered/licensed.

Suggested wording:

```text
Shopaholic Approved is an independent collectible shop and is not affiliated with, endorsed by, or sponsored by POP MART, Kasing Lung, or The Monsters/Labubu brand owners. Product names and images are used only to identify the items being sold.
```

Do not claim official partnership unless the user provides proof.

Do not use copyrighted logos, artwork, or official branding in a misleading way.

## Authenticity Language

Use careful wording.

Allowed:

```text
Authenticity checked before listing.
```

```text
Sourced from trusted suppliers.
```

```text
Product packaging and condition will be shown clearly when available.
```

Avoid unless proven:

```text
Official authorized reseller.
```

```text
Guaranteed official partner.
```

```text
Direct from POP MART.
```

## Product Images

Use product images only if:

* The user owns them,
* The supplier allows them,
* They are generated/created for the site,
* They are licensed,
* Or they are official product images used fairly for product identification.

Do not scrape random product photos from the web without permission.

---

# Ecommerce Requirements

## Core Pages Needed

The website should eventually include:

1. Home
2. Shop / All Products
3. Product Detail Page
4. Cart
5. Checkout
6. Preorders
7. Catalog / Coming Soon
8. Request an Item
9. About
10. Contact
11. FAQ
12. Shipping Policy
13. Returns / Refund Policy
14. Privacy Policy
15. Terms of Service
16. Order Tracking / Order Status if supported
17. Authenticity / Buyer Trust page if useful

## Homepage Goals

The homepage should quickly answer:

* What does this shop sell?
* Why should customers trust it?
* What can they buy now?
* Are preorders available?
* How do they request a specific item?
* How do they contact the shop?

Suggested homepage sections:

1. Hero section

   * Brand headline
   * Short subheading
   * CTA: Shop Now
   * Secondary CTA: View Preorders

2. Featured categories

   * Labubu
   * Blind Boxes
   * Plushies
   * Preorders
   * Collectibles
   * New Arrivals

3. Featured products

   * Product cards with price, status, and image

4. Preorder spotlight

   * Explain preorder process clearly

5. Trust strip

   * Secure checkout
   * Carefully packed
   * Collector-focused
   * Support available

6. Request an item

   * “Looking for something specific?”

7. About preview

   * Short brand story

8. FAQ preview

   * Shipping, preorders, authenticity, returns

9. Footer

   * Navigation
   * Contact
   * Policies
   * Social links

## Shop Page Requirements

The shop page should include:

* Product grid
* Search
* Category filters
* Sort by price/newest/popularity if supported
* Product availability badges
* Price
* Product image
* Quick add if supported
* Link to product details
* Empty state message
* Loading state
* Error state

Product badges should include:

* In Stock
* Sold Out
* Preorder
* Coming Soon
* Limited Quantity
* New Arrival

## Product Page Requirements

Each product detail page should include:

* Product title
* High-quality images
* Price
* Availability
* In-hand or preorder status
* Quantity selector if stock allows
* Add to cart button
* Product description
* Product details
* Size/material if known
* Condition if applicable
* Authenticity/source note
* Shipping estimate
* Preorder estimate if relevant
* Return/refund note
* Related products
* Social sharing if useful

## Cart Requirements

Cart should include:

* Product image
* Product name
* Quantity
* Price
* Subtotal
* Remove item
* Update quantity
* Clear cart if useful
* Continue shopping
* Checkout button
* Shipping/tax note
* Preorder warning if cart contains preorder items

## Checkout Requirements

Checkout must be secure and clear.

Do not implement fake checkout.

If using a real provider, confirm with the user first.

Possible providers:

* Hostinger ecommerce tools
* Stripe
* PayPal
* Square
* Shopify Buy Button
* WooCommerce if WordPress
* Other approved provider

Checkout should include:

* Contact info
* Shipping info
* Payment
* Order summary
* Shipping method
* Tax if required
* Confirmation page/email

## Preorder Requirements

Preorders are risky if unclear. The preorder page must explain:

* What preorder means
* Estimated arrival window
* Whether payment is taken upfront
* Whether cancellations are allowed
* What happens if supplier cancels
* Whether items can be delayed
* How customers receive updates
* Whether preorder and in-stock items ship together or separately

Suggested preorder copy:

```text
Preorder items are not currently in hand unless stated otherwise. Estimated arrival dates are provided when available, but delays can happen due to supplier timelines, shipping, customs, or release changes. We’ll keep customers updated if anything changes.
```

## Request an Item Requirements

The website should allow customers to request specific collectibles.

Request form fields:

* Name
* Email
* Item name
* Brand/series
* Link or image reference if available
* Budget range
* Deadline if any
* Notes

Submission should go to the shop owner via email, form backend, CRM, or Hostinger form integration.

Do not create a form that silently fails.

Always test form submission.

---

# Visual Design Direction

## Overall Style

Design should be:

* Cute
* Clean
* Soft
* Modern
* Mobile-first
* Easy to scan
* Trustworthy

## Suggested Color Direction

Use soft collectible boutique colors, such as:

* Cream / off-white backgrounds
* Soft pink accents
* Pastel purple
* Warm beige
* Soft brown
* Black or dark charcoal text for readability
* Optional mint or baby blue accents

Avoid:

* Harsh neon backgrounds
* Too many bright colors
* Low contrast text
* Overly busy patterns behind important text
* Cluttered product cards

## Typography

Use readable fonts.

Good pairings:

* A rounded playful heading font
* A clean sans-serif body font

Prioritize readability over aesthetic.

## Layout Rules

* Mobile-first.
* Product cards should be consistent.
* Buttons should be obvious.
* CTAs should not compete too much.
* Use whitespace.
* Keep important shopping actions above the fold.
* Footer should be complete and professional.

## Image Rules

* Product images should be square or consistent ratio.
* Use rounded corners if it matches the brand.
* Do not stretch images.
* Use alt text.
* Compress images.
* Lazy-load images where appropriate.
* Use placeholders for missing images.
* Do not use blurry product photos.

---

# Accessibility Requirements

The site must be accessible.

Check:

* Proper heading order
* Alt text for images
* Keyboard navigation
* Visible focus states
* Color contrast
* Button labels
* Form labels
* Error messages
* Mobile tap targets
* Descriptive links

Avoid:

```html
<button>Click here</button>
```

Prefer:

```html
<button>Shop Labubu Collectibles</button>
```

---

# SEO Requirements

Every important page should have:

* Unique title tag
* Meta description
* Clean URL
* Proper H1
* Structured headings
* Product alt text
* Internal links
* Open Graph title/image if supported
* Schema markup if appropriate

Suggested homepage SEO:

Title:

```text
Shopaholic Approved | Labubu, Blind Boxes & Cute Collectibles
```

Meta description:

```text
Shop Labubu, blind boxes, plushies, preorder collectibles, and cute collector finds from Shopaholic Approved.
```

Product page SEO should include:

* Product name
* Brand/series if allowed
* Item type
* Availability
* Shop name

---

# Performance Requirements

The site should be fast.

Check:

* Image sizes
* Lazy loading
* Bundle size
* Unused JavaScript
* Unused CSS
* Font loading
* Mobile performance
* Lighthouse score if available
* Caching
* Compression

Do not add heavy libraries unless necessary.

---

# Security Requirements

Check for:

* Exposed secrets
* Unsafe checkout
* Mixed HTTP/HTTPS content
* Unvalidated forms
* Spam-prone contact forms
* Broken auth if admin exists
* Public environment files
* Console errors
* Dependency vulnerabilities

Never put private keys in frontend code.

---

# Testing Requirements

Each task must include relevant testing.

Possible tests:

* Run build
* Run dev server
* Check browser preview
* Check mobile viewport
* Check console errors
* Check broken links
* Check forms
* Check cart behavior
* Check checkout flow in test mode
* Check image loading
* Check accessibility basics
* Check SEO metadata
* Check page speed if tools are available

If tests cannot be run, report why.

---

# File Organization Preferences

If creating a custom codebase, prefer organized structure.

Example:

```text
/src
  /components
    Header
    Footer
    ProductCard
    ProductGrid
    Hero
    TrustBadges
    NewsletterSignup
  /pages
    Home
    Shop
    Product
    Cart
    Checkout
    About
    Contact
    Preorders
    FAQ
  /data
    products
    categories
    policies
  /styles
  /utils
/docs
  task-log.md
  task-state.md
  site-plan.md
```

If using WordPress/Hostinger builder, adapt to that system instead of forcing a custom structure.

---

# Product Data Model

If product data needs to be created, use a consistent model.

Example:

```json
{
  "id": "labubu-example-001",
  "title": "Labubu Collectible Figure",
  "slug": "labubu-collectible-figure",
  "category": "Labubu",
  "status": "In Stock",
  "price": 0,
  "compareAtPrice": null,
  "images": [],
  "description": "",
  "details": {
    "brand": "",
    "series": "",
    "condition": "New",
    "size": "",
    "material": "",
    "authenticityNote": ""
  },
  "inventory": {
    "quantity": 0,
    "trackInventory": true
  },
  "shipping": {
    "shipsFrom": "",
    "estimatedProcessingTime": "",
    "preorderEta": null
  },
  "tags": []
}
```

Do not invent real prices, quantities, or supplier claims unless the user provides them.

Use placeholders clearly marked as placeholders.

---

# Product Card Standards

Each product card should include:

* Image
* Product title
* Price
* Status badge
* Short detail if useful
* Add to cart or View Details button

Example status badge logic:

```text
In Stock -> show “In Stock”
quantity <= 3 -> show “Low Stock”
quantity === 0 -> show “Sold Out”
preorder === true -> show “Preorder”
comingSoon === true -> show “Coming Soon”
```

---

# Copywriting Standards

## Homepage Hero Example

```text
Cute Collectibles, Shopaholic Approved

Find Labubu favorites, blind boxes, plushies, and preorder collectibles curated for collectors who love the hunt.
```

Buttons:

```text
Shop New Arrivals
View Preorders
```

## Preorder Section Example

```text
Preorder Collectibles

Secure upcoming collectible releases before they arrive. Each preorder listing includes estimated timing, availability notes, and updates when details change.
```

## Request Section Example

```text
Looking for something specific?

Send us the item you’re hunting for and we’ll see if we can bring it in.
```

## Trust Section Example

```text
Collector-focused picks, carefully packed orders, and clear preorder updates.
```

---

# Required Website Improvements To Prioritize

Unless the user says otherwise, prioritize work in this order:

1. Audit current site/project
2. Create project logs and task tracking
3. Fix broken pages, broken links, and navigation
4. Improve homepage structure
5. Create proper shop/product structure
6. Create preorder page and preorder policy explanation
7. Create request/contact flow
8. Add trust and authenticity messaging
9. Add shipping/refund/privacy/terms pages
10. Improve mobile layout
11. Improve SEO metadata
12. Improve performance
13. Test checkout/cart
14. Final QA
15. Deployment checklist

---

# Task Report Template

At the end of every task, respond with:

```markdown
# Task Report: [Task Name]

## Goal
[What this task was supposed to accomplish.]

## Files Inspected
- [file/path]
- [file/path]

## Files Changed
- [file/path] — [short description]

## What I Changed
- [change 1]
- [change 2]
- [change 3]

## Why I Changed It
[Explain the reasoning.]

## Testing Performed
- [test command or manual check]
- [browser/mobile check]
- [build check]

## Result
[Pass/fail/partial.]

## Issues Found
- [issue]
- [issue]

## Issues Not Fixed Yet
- [issue]
- [issue]

## Log Updated
- `/docs/task-log.md`
- `/docs/task-state.md`

## Next Recommended Task
[Next task name.]

STATUS: Task complete.
NEXT STEP: Waiting for user approval before starting the next task.
```

---

# Commit / Version Control Rules

If the project uses Git:

* Check current branch.
* Check status before edits.
* Make focused commits.
* Do not commit secrets.
* Use clear commit messages.
* Do not rewrite history unless asked.

Suggested commit format:

```text
feat(home): improve ecommerce hero and homepage sections
```

or

```text
fix(shop): repair product grid mobile layout
```

---

# Deployment Rules

Before deployment:

* Run build.
* Check console errors.
* Check links.
* Check mobile.
* Check forms.
* Check cart/checkout.
* Confirm environment variables.
* Confirm domain target.
* Confirm production branch.
* Ask user for approval.

Do not deploy without approval.

---

# Definition of Done

A task is only done when:

* The requested change is implemented.
* Relevant files are updated.
* The site still builds or the limitation is clearly reported.
* The change is checked visually if possible.
* The log is updated.
* The task report is written.
* The agent stops and waits for approval.

---

# First Action When This Skill Is Used

When starting work on this website, your first task MUST be:

```text
Task 1: Project Audit and Setup
```

During Task 1:

1. Inspect the project structure.
2. Identify the tech stack.
3. Identify current pages/components.
4. Identify current ecommerce features.
5. Identify missing ecommerce features.
6. Identify existing assets.
7. Identify build/deploy method.
8. Create `/docs/task-log.md` if missing.
9. Create `/docs/task-state.md` if missing.
10. Write the first audit report.
11. Stop and wait for user approval before changing the design or features.

Do not redesign the site during Task 1.

Task 1 is audit/setup only.

---

# User Approval Rule

After each task, ask:

```text
Do you approve moving on to the next task?
```

Do not continue until the user approves.

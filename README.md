# Shopaholic Approved Collectibles Boutique

A premium, client-side collectible e-commerce frontend built using Vite, vanilla Javascript, and Vanilla CSS. The application connects to Supabase for dynamic products data, falling back to static lists when offline.

---

## Technical Stack
- **Bundler:** Vite
- **Logic:** Vanilla ES Modules (Javascript)
- **Styling:** Vanilla CSS
- **Database:** Supabase Client (`@supabase/supabase-js`)

---

## ⚡ Supabase Setup Instructions

1. **Create a Supabase Project:**
   Head to [Supabase](https://supabase.com) and spin up a new database project.

2. **Initialize Database Tables:**
   Open the **SQL Editor** tab in your Supabase dashboard, click "New Query", paste the entire contents of [supabase/schema.sql](file:///c:/Users/jayde/Downloads/fabby%20website/supabase/schema.sql), and run it. This will:
   - Create the `categories` and `products` tables.
   - Configure Row-Level Security (RLS) policies allowing public read select access.
   - Insert seed data for the 6 collectible categories and 12 baseline items.

3. **Configure Environment Variables:**
   - In your local workspace root, copy `.env.example` to `.env.local`.
   - Retrieve your API keys from **Project Settings > API** in the Supabase Dashboard.
   - Populate the variables:
     ```env
     VITE_SUPABASE_URL=your-project-url.supabase.co
     VITE_SUPABASE_ANON_KEY=your-anon-public-key
     ```
   *(Note: `.env.local` is listed in `.gitignore` and will never be committed to Git).*

---

## ☁️ Cloudflare Pages Setup

To deploy the static output to Cloudflare Pages:

1. **Connect Repository:**
   Connect your GitHub repository to Cloudflare Pages.

2. **Build Settings:**
   Configure the build parameters exactly as follows:
   - **Framework Preset:** None (or Vite)
   - **Build Command:** `npm run build`
   - **Build Output Directory:** `dist`

3. **Environment Variables:**
   Under the project **Settings > Environment Variables** in Cloudflare, add:
   - `VITE_SUPABASE_URL` = (Your production Supabase Project URL)
   - `VITE_SUPABASE_ANON_KEY` = (Your production Supabase Anon Key)

---

## 🛠️ Local Development

To run the project locally:

```bash
# Install dependencies
npm install

# Run the dev server
npm run dev

# Build the production bundle
npm run build
```

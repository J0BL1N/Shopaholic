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

## 🚀 GitHub Pages Live Preview Deployment

This static multi-page site is configured to build and deploy automatically to **GitHub Pages** via **GitHub Actions**:

1. **Select Actions Deployment Source**:
   - Go to your repository settings on GitHub: **Settings** → **Pages**.
   - Under **Build and deployment** → **Source**, change the selection from *Deploy from a branch* to **GitHub Actions**.

2. **Deploy by Pushing to Main**:
   - Any push to the `main` branch triggers the build workflow defined in `.github/workflows/deploy.yml`.
   - Track build progress under the **Actions** tab in GitHub.

3. **Access Live Preview URL**:
   - Once completed, the live site is viewable at:
     `https://J0BL1N.github.io/Shopaholic/`

---

## 🛠️ Local Development

To run and build the project locally:

```bash
# Install dependencies
npm install

# Run Vite local development server
npm run dev

# Compile the production bundle (build output served under /dist)
npm run build

# Preview the compiled production build locally
npm run preview
```

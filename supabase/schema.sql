-- Supabase Schema & Seeds for Shopaholic Approved

-- 1. Create Categories Table
CREATE TABLE IF NOT EXISTS public.categories (
    slug text PRIMARY KEY,
    name text NOT NULL,
    description text,
    created_at timestamp with time zone DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- 2. Create Products Table
CREATE TABLE IF NOT EXISTS public.products (
    id text PRIMARY KEY,
    name text NOT NULL,
    category_slug text REFERENCES public.categories(slug) ON UPDATE CASCADE,
    price numeric(10,2) NOT NULL,
    image text NOT NULL,
    status text NOT NULL CHECK (status IN ('in_stock', 'preorder', 'low_stock', 'sold_out')),
    short_description text NOT NULL,
    preorder_eta text,
    stock_count integer,
    created_at timestamp with time zone DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- 3. Enable Row Level Security (RLS)
ALTER TABLE public.categories ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.products ENABLE ROW LEVEL SECURITY;

-- 4. Create Public Select Access Policies
CREATE POLICY "Allow public select access on categories" 
ON public.categories 
FOR SELECT 
USING (true);

CREATE POLICY "Allow public select access on products" 
ON public.products 
FOR SELECT 
USING (true);

-- 5. Seed Categories
INSERT INTO public.categories (slug, name, description) VALUES
('blind-boxes', 'Blind Boxes', 'The thrill of the mystery! Open a box and meet your next favorite find.'),
('plushies', 'Plushies', 'Soft, huggable, and cuddly friends to brighten your collection.'),
('bags-purses', 'Bags & Purses', 'Cute carryalls, mini bags, and everyday accessories to complete your look.'),
('apparel', 'Apparel', 'Cute clothing, cozy pieces, and wearable finds for everyday style.'),
('home-kitchen', 'Home & Kitchen', 'Cute home finds, kitchen must-haves, and cozy pieces for everyday life.'),
('junk-drawer', 'The Junk Drawer', 'Random treasures, quirky extras, and cute little finds that do not fit anywhere else.')
ON CONFLICT (slug) DO UPDATE SET
    name = EXCLUDED.name,
    description = EXCLUDED.description;

-- 6. Seed Products
INSERT INTO public.products (id, name, category_slug, price, image, status, short_description, preorder_eta, stock_count) VALUES
('sweet-dream-bunny', 'Sweet Dream Bunny Blind Box', 'blind-boxes', 15.99, 'https://images.unsplash.com/photo-1559251606-c623743a6d76?w=600&auto=format&fit=crop&q=60', 'in_stock', 'A mystery box containing one of 8 adorable sleeping bunny vinyl figures. Which sleeping friend will you adopt?', NULL, 42),
('retro-arcade-kitty', 'Retro Arcade Kitty Figure', 'blind-boxes', 16.50, 'https://images.unsplash.com/photo-1607604276583-eef5d076aa5f?w=600&auto=format&fit=crop&q=60', 'preorder', 'Preorder the upcoming retro-gaming themed cat series. High-quality vinyl figures with matching mini accessories.', 'October 2026', 50),
('peach-bunny-charm', 'Fluffy Peach Bunny Plush Charm', 'plushies', 12.00, 'https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?w=600&auto=format&fit=crop&q=60', 'low_stock', 'Super soft, pocket-sized bunny plush keychain in peach pink. Features a golden clasp to attach to your bag.', NULL, 3),
('giant-pastel-dino', 'Giant Pastel Dinosaur Plush', 'plushies', 34.99, 'https://images.unsplash.com/photo-1596461404969-9ae70f2830c1?w=600&auto=format&fit=crop&q=60', 'sold_out', 'An ultra-huggable, jumbo dinosaur plushie in soft lavender. Perfect cuddly bedroom accent for any dinosaur fan.', NULL, 0),
('lavender-mini-backpack', 'Lavender Corduroy Mini Backpack', 'bags-purses', 28.50, 'https://images.unsplash.com/photo-1622560480605-d83c853bc5c3?w=600&auto=format&fit=crop&q=60', 'in_stock', 'Compact corduroy backpack with multi-compartments and cute metal zipper pulls. Fits your phone, wallet, and keys.', NULL, 12),
('strawberry-canvas-tote', 'Sweet Strawberry Canvas Tote Bag', 'bags-purses', 18.00, 'https://images.unsplash.com/photo-1544816155-12df9643f363?w=600&auto=format&fit=crop&q=60', 'low_stock', 'Heavy-duty cream canvas tote screen-printed with cute strawberry illustrations. Includes a handy inner pocket.', NULL, 2),
('cloud-knit-cardigan', 'Pastel Cloud Knit Cardigan', 'apparel', 45.00, 'https://images.unsplash.com/photo-1556905055-8f358a7a47b2?w=600&auto=format&fit=crop&q=60', 'preorder', 'Cozy, oversized cardigan featuring blue and white cloud patterns. Made from premium ultra-soft acrylic yarn.', 'November 2026', 35),
('cinnabun-slippers', 'Cinnabun Fluffy Slippers', 'apparel', 22.00, 'https://images.unsplash.com/photo-1543163521-1bf539c55dd2?w=600&auto=format&fit=crop&q=60', 'sold_out', 'Warm, plush-lined home slippers shaped like cute cinnamon buns. Features non-slip memory foam soles.', NULL, 0),
('sleepy-cat-mug', 'Sleepy Cat Ceramic Mug', 'home-kitchen', 16.99, 'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?w=600&auto=format&fit=crop&q=60', 'in_stock', 'Hand-painted ceramic mug featuring a sleeping cat face and 3D ears. Microwave and dishwasher safe.', NULL, 18),
('sakura-tea-bottle', 'Sakura Blossom Glass Tea Bottle', 'home-kitchen', 24.00, 'https://images.unsplash.com/photo-1576092768241-dec231879fc3?w=600&auto=format&fit=crop&q=60', 'in_stock', 'Double-walled borosilicate glass tea infuser bottle decorated with cherry blossom prints. Keeps drinks hot or cold.', NULL, 14),
('space-cat-keychain', 'Glow Space Acrylic Keychain', 'junk-drawer', 6.50, 'https://images.unsplash.com/photo-1589051030485-26859b1d75dd?w=600&auto=format&fit=crop&q=60', 'in_stock', 'Double-sided acrylic keychain featuring an astronaut cat floating in space. Glows green in the dark!', NULL, 25),
('dessert-sticker-pack', 'Cute Dessert Sticker Sheet Pack', 'junk-drawer', 4.99, 'https://images.unsplash.com/photo-1572375995501-4b0894d13c1e?w=600&auto=format&fit=crop&q=60', 'in_stock', 'A pack of 3 matte sticker sheets filled with adorable dessert illustrations. Perfect for journaling and decorating.', NULL, 50)
ON CONFLICT (id) DO UPDATE SET
    name = EXCLUDED.name,
    category_slug = EXCLUDED.category_slug,
    price = EXCLUDED.price,
    image = EXCLUDED.image,
    status = EXCLUDED.status,
    short_description = EXCLUDED.short_description,
    preorder_eta = EXCLUDED.preorder_eta,
    stock_count = EXCLUDED.stock_count;

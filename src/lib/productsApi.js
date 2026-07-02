import { supabase, hasSupabaseConfig } from './supabase.js';
import { products as staticProducts } from '../data/products.js';

// Static categories fallback
const staticCategories = [
  { slug: "blind-boxes", name: "Blind Boxes", description: "The thrill of the mystery! Open a box and meet your next favorite find." },
  { slug: "plushies", name: "Plushies", description: "Soft, huggable, and cuddly friends to brighten your collection." },
  { slug: "bags-purses", name: "Bags & Purses", description: "Cute carryalls, mini bags, and everyday accessories to complete your look." },
  { slug: "apparel", name: "Apparel", description: "Cute clothing, cozy pieces, and wearable finds for everyday style." },
  { slug: "home-kitchen", name: "Home & Kitchen", description: "Cute home finds, kitchen must-haves, and cozy pieces for everyday life." },
  { slug: "junk-drawer", name: "The Junk Drawer", description: "Random treasures, quirky extras, and cute little finds that do not fit anywhere else." }
];

// Helper to map DB row keys to frontend keys
function mapProduct(row) {
  return {
    id: row.id,
    name: row.name,
    category: row.category_slug,
    price: Number(row.price),
    image: row.image,
    status: row.status,
    shortDescription: row.short_description,
    preorderEta: row.preorder_eta || undefined,
    stockCount: row.stock_count !== null && row.stock_count !== undefined ? Number(row.stock_count) : undefined
  };
}

export async function getProducts() {
  if (!hasSupabaseConfig || !supabase) {
    console.log("Supabase not configured. Using static products fallback.");
    return staticProducts;
  }

  try {
    const { data, error } = await supabase
      .from('products')
      .select('*')
      .order('created_at', { ascending: true });

    if (error) {
      console.warn("Supabase products query returned error, using static fallback:", error.message);
      return staticProducts;
    }

    if (!data || data.length === 0) {
      console.log("Supabase products table is empty. Using static fallback.");
      return staticProducts;
    }

    return data.map(mapProduct);
  } catch (err) {
    console.error("Supabase products query failed, using static fallback:", err);
    return staticProducts;
  }
}

export async function getFeaturedProducts() {
  const featuredIds = ['sweet-dream-bunny', 'peach-bunny-charm', 'lavender-mini-backpack', 'sleepy-cat-mug'];

  if (!hasSupabaseConfig || !supabase) {
    return staticProducts.filter(p => featuredIds.includes(p.id));
  }

  try {
    const { data, error } = await supabase
      .from('products')
      .select('*')
      .in('id', featuredIds);

    if (error) {
      console.warn("Supabase featured query error, using static fallback:", error.message);
      return staticProducts.filter(p => featuredIds.includes(p.id));
    }

    if (!data || data.length === 0) {
      return staticProducts.filter(p => featuredIds.includes(p.id));
    }

    return data.map(mapProduct);
  } catch (err) {
    console.error("Supabase featured query failed, using static fallback:", err);
    return staticProducts.filter(p => featuredIds.includes(p.id));
  }
}

export async function getPreorderProducts() {
  if (!hasSupabaseConfig || !supabase) {
    return staticProducts.filter(p => p.status === 'preorder');
  }

  try {
    const { data, error } = await supabase
      .from('products')
      .select('*')
      .eq('status', 'preorder')
      .order('created_at', { ascending: true });

    if (error) {
      console.warn("Supabase preorder query error, using static fallback:", error.message);
      return staticProducts.filter(p => p.status === 'preorder');
    }

    if (!data || data.length === 0) {
      return staticProducts.filter(p => p.status === 'preorder');
    }

    return data.map(mapProduct);
  } catch (err) {
    console.error("Supabase preorder query failed, using static fallback:", err);
    return staticProducts.filter(p => p.status === 'preorder');
  }
}

export async function getCategories() {
  if (!hasSupabaseConfig || !supabase) {
    return staticCategories;
  }

  try {
    const { data, error } = await supabase
      .from('categories')
      .select('*');

    if (error) {
      console.warn("Supabase categories query error, using static fallback:", error.message);
      return staticCategories;
    }

    if (!data || data.length === 0) {
      return staticCategories;
    }

    return data;
  } catch (err) {
    console.error("Supabase categories query failed, using static fallback:", err);
    return staticCategories;
  }
}

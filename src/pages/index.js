import { getFeaturedProducts } from '../lib/productsApi.js';
import { getProductCardHTML } from '../utils/productCard.js';
import { addToCart } from '../utils/cart.js';

document.addEventListener('DOMContentLoaded', async () => {
  const grid = document.getElementById('featured-products-grid');
  if (!grid) return;

  let loadedProducts = [];

  try {
    loadedProducts = await getFeaturedProducts();
    grid.innerHTML = loadedProducts.map(getProductCardHTML).join('');
  } catch (err) {
    console.error("Error loading featured products:", err);
  }

  // Setup Add-to-Cart click event delegation
  grid.addEventListener('click', (e) => {
    const btn = e.target.closest('.btn-add-to-cart');
    if (!btn) return;
    
    const productId = btn.getAttribute('data-id');
    const product = loadedProducts.find(p => p.id === productId);
    if (product) {
      addToCart(product, 1);
      
      // Temporary visual success state on button
      const span = btn.querySelector('span');
      const originalText = span.textContent;
      span.textContent = "Added! ✓";
      btn.style.backgroundColor = "var(--color-badge-instock-bg)";
      btn.style.color = "var(--color-badge-instock-text)";
      btn.style.borderColor = "var(--color-badge-instock-text)";
      
      setTimeout(() => {
        span.textContent = originalText;
        btn.style.backgroundColor = "";
        btn.style.color = "";
        btn.style.borderColor = "";
      }, 1500);
    }
  });
});

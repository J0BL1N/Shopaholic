import { getPreorderProducts } from '../lib/productsApi.js';
import { getProductCardHTML } from '../utils/productCard.js';
import { addToCart } from '../utils/cart.js';

document.addEventListener('DOMContentLoaded', async () => {
  const grid = document.getElementById('preorders-products-grid');
  if (!grid) return;

  // Display loading spinner initially
  grid.innerHTML = `
    <div class="product-loading" style="grid-column: 1/-1;">
      <div class="spinner"></div>
      <p style="margin-top: var(--spacing-md);">Loading preorder items...</p>
    </div>
  `;

  let loadedProducts = [];

  try {
    loadedProducts = await getPreorderProducts();
    if (loadedProducts.length === 0) {
      grid.innerHTML = `
        <div style="grid-column: 1/-1; text-align: center; padding: 64px 24px; color: var(--color-text-muted);">
          <div style="font-size: 48px; margin-bottom: var(--spacing-md);">✨</div>
          <h3 style="font-family: 'Playfair Display', serif; font-size: 20px; color: var(--color-text-charcoal); margin-bottom: var(--spacing-sm);">All Caught Up!</h3>
          <p style="font-size: 14px; max-width: 400px; margin: 0 auto var(--spacing-lg) auto;">No preorder items are currently listed, but we update our reserve catalog regularly. Head over to our main shop page to see what's in stock today!</p>
          <a href="./shop.html" class="btn-checkout" style="display: inline-block; width: auto; padding: 10px 24px; text-decoration: none;">Explore In-Stock Items</a>
        </div>
      `;
    } else {
      grid.innerHTML = loadedProducts.map(getProductCardHTML).join('');
    }
  } catch (err) {
    console.error("Error loading preorder products:", err);
    grid.innerHTML = `<div style="grid-column: 1/-1; text-align: center; padding: 48px; color: var(--color-badge-lowstock-text);">Error loading preorders. Please refresh to try again.</div>`;
  }

  // Add to Cart delegation
  grid.addEventListener('click', (e) => {
    const btn = e.target.closest('.btn-add-to-cart');
    if (!btn || btn.disabled) return;

    const productId = btn.getAttribute('data-id');
    const product = loadedProducts.find(p => p.id === productId);

    if (product) {
      if (product.status === 'sold_out' || product.stockCount === 0) {
        alert("Sorry, this item is sold out!");
        return;
      }

      addToCart(product, 1);

      // Temporary visual success state
      const span = btn.querySelector('span');
      const originalText = span.textContent;
      span.textContent = "Reserved! ✓";
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

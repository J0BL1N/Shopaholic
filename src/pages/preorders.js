import { products } from '../data/products.js';
import { getProductCardHTML } from '../utils/productCard.js';
import { addToCart } from '../utils/cart.js';

document.addEventListener('DOMContentLoaded', () => {
  const grid = document.getElementById('preorders-products-grid');
  if (!grid) return;

  // Filter preorder products
  const preorderProducts = products.filter(p => p.status === 'preorder');

  // Render HTML
  if (preorderProducts.length === 0) {
    grid.innerHTML = `<div style="grid-column: 1/-1; text-align: center; padding: 48px; color: var(--color-text-muted);">No preorder items are currently listed. Check back soon!</div>`;
  } else {
    grid.innerHTML = preorderProducts.map(getProductCardHTML).join('');
  }

  // Add to Cart delegation
  grid.addEventListener('click', (e) => {
    const btn = e.target.closest('.btn-add-to-cart');
    if (!btn) return;

    const productId = btn.getAttribute('data-id');
    const product = products.find(p => p.id === productId);

    if (product) {
      addToCart(product, 1);

      // Temporary visual success state
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

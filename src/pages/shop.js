import { getProducts } from '../lib/productsApi.js';
import { getProductCardHTML } from '../utils/productCard.js';
import { addToCart } from '../utils/cart.js';

document.addEventListener('DOMContentLoaded', async () => {
  const grid = document.getElementById('shop-products-grid');
  const filterContainer = document.getElementById('category-filters');
  const sortSelect = document.getElementById('sort-select');

  if (!grid) return;

  let loadedProducts = [];
  let currentCategory = 'all';
  let currentSort = 'featured';

  // 1. Check URL parameters for pre-selected category
  const urlParams = new URLSearchParams(window.location.search);
  const urlCategory = urlParams.get('category');
  
  if (urlCategory && filterContainer) {
    // Validate if the button exists before setting it
    const targetBtn = filterContainer.querySelector(`[data-category="${urlCategory}"]`);
    if (targetBtn) {
      currentCategory = urlCategory;
      
      // Update active class on filter buttons
      filterContainer.querySelectorAll('.filter-btn').forEach(btn => {
        btn.classList.remove('active');
      });
      targetBtn.classList.add('active');
    }
  }

  // 2. Main render function
  const render = () => {
    // Filter
    let filtered = loadedProducts;
    if (currentCategory !== 'all') {
      filtered = loadedProducts.filter(p => p.category === currentCategory);
    }

    // Sort (make a copy of array so we don't mutate original)
    const sorted = [...filtered];
    if (currentSort === 'price-low') {
      sorted.sort((a, b) => a.price - b.price);
    } else if (currentSort === 'price-high') {
      sorted.sort((a, b) => b.price - a.price);
    } // 'featured' keeps the original array order

    // Render HTML
    if (sorted.length === 0) {
      grid.innerHTML = `<div style="grid-column: 1/-1; text-align: center; padding: 48px; color: var(--color-text-muted);">No products found in this category.</div>`;
    } else {
      grid.innerHTML = sorted.map(getProductCardHTML).join('');
    }
  };

  // 3. Category Filter Click Handler
  if (filterContainer) {
    filterContainer.addEventListener('click', (e) => {
      const btn = e.target.closest('.filter-btn');
      if (!btn) return;

      // Update active states
      filterContainer.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      currentCategory = btn.getAttribute('data-category');
      
      // Update URL search params without page reload for a premium SPA-like feel
      const newUrl = new URL(window.location);
      if (currentCategory === 'all') {
        newUrl.searchParams.delete('category');
      } else {
        newUrl.searchParams.set('category', currentCategory);
      }
      window.history.pushState({}, '', newUrl);

      render();
    });
  }

  // 4. Sort Dropdown Change Handler
  if (sortSelect) {
    sortSelect.addEventListener('change', (e) => {
      currentSort = e.target.value;
      render();
    });
  }

  // 5. Add to Cart delegation
  grid.addEventListener('click', (e) => {
    const btn = e.target.closest('.btn-add-to-cart');
    if (!btn) return;

    const productId = btn.getAttribute('data-id');
    const product = loadedProducts.find(p => p.id === productId);

    if (product) {
      addToCart(product, 1);

      // Temporary visual success status on button
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

  // Initial Fetch & Render
  try {
    loadedProducts = await getProducts();
  } catch (err) {
    console.error("Error fetching products:", err);
  }
  render();
});

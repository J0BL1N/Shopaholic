import { getProductById } from '../lib/productsApi.js';
import { addToCart } from '../utils/cart.js';
import { BADGE_MAP, CATEGORY_MAP } from '../utils/productCard.js';

document.addEventListener('DOMContentLoaded', async () => {
  const loadingEl = document.getElementById('product-loading');
  const errorEl = document.getElementById('product-error');
  const contentEl = document.getElementById('product-content');

  if (!contentEl) return;

  const urlParams = new URLSearchParams(window.location.search);
  const productId = urlParams.get('id');

  if (!productId) {
    showError();
    return;
  }

  let product = null;
  try {
    product = await getProductById(productId);
  } catch (err) {
    console.error("Error fetching product by ID:", err);
  }

  if (!product) {
    showError();
    return;
  }

  // Populate Product Details
  const statusBadge = document.getElementById('product-status-badge');
  const imageEl = document.getElementById('product-image');
  const titleEl = document.getElementById('product-title');
  const priceEl = document.getElementById('product-price');
  const descEl = document.getElementById('product-description');
  const categoryLink = document.getElementById('product-category-link');
  const breadcrumbName = document.getElementById('product-breadcrumb-name');
  const preorderBox = document.getElementById('product-preorder-box');
  const preorderEta = document.getElementById('product-preorder-eta');
  const stockStatus = document.getElementById('product-stock-status');
  const btnAddToCart = document.getElementById('btn-product-add-to-cart');
  const btnText = document.getElementById('btn-text');

  // Breadcrumbs & Title
  const categoryText = CATEGORY_MAP[product.category] || product.category || 'Uncategorized';
  categoryLink.textContent = categoryText;
  categoryLink.href = `./shop.html?category=${product.category || ''}`;
  breadcrumbName.textContent = product.name || 'Unnamed Product';
  titleEl.textContent = product.name || 'Unnamed Product';

  // Price & Image
  const priceValue = typeof product.price === 'number' ? product.price : Number(product.price);
  priceEl.textContent = `$${isNaN(priceValue) ? '0.00' : priceValue.toFixed(2)}`;
  imageEl.src = product.image || 'https://images.unsplash.com/photo-1559251606-c623743a6d76?w=600&auto=format&fit=crop&q=60';
  imageEl.alt = product.name || 'Unnamed Product';

  // Status Badge
  const status = product.status || 'in_stock';
  statusBadge.textContent = BADGE_MAP[status] || status;
  statusBadge.className = `product-badge badge-${status}`;

  // Description
  descEl.textContent = product.shortDescription || '';

  // Preorder Details
  const isPreorder = status === 'preorder';
  const isSoldOut = status === 'sold_out';

  if (isPreorder) {
    preorderBox.style.display = 'block';
    preorderEta.textContent = product.preorderEta || 'TBA';
    btnText.textContent = 'Preorder Item';
  } else {
    preorderBox.style.display = 'none';
  }

  // Stock / Inventory State message
  if (isSoldOut) {
    stockStatus.innerHTML = `<span class="stock-out-warning">This item is currently sold out and unavailable.</span>`;
    btnAddToCart.disabled = true;
    btnAddToCart.classList.add('btn-disabled');
    btnText.textContent = 'Sold Out';
  } else if (product.status === 'low_stock' && product.stockCount !== undefined) {
    stockStatus.innerHTML = `<span class="stock-low-warning">Only ${product.stockCount} items left in stock!</span>`;
  } else if (product.status === 'in_stock' && product.stockCount !== undefined) {
    stockStatus.innerHTML = `<span class="stock-ok">${product.stockCount} items in stock. Ready to ship!</span>`;
  } else {
    stockStatus.innerHTML = '';
  }

  // Quantity controls
  const qtyInput = document.getElementById('qty-input');
  const qtyMinus = document.getElementById('qty-minus');
  const qtyPlus = document.getElementById('qty-plus');

  let quantity = 1;
  const maxQty = product.stockCount !== undefined ? product.stockCount : 99;

  if (isSoldOut || maxQty <= 0) {
    qtyInput.value = 0;
    if (qtyMinus) qtyMinus.disabled = true;
    if (qtyPlus) qtyPlus.disabled = true;
  } else {
    const updateQtyDisplay = () => {
      qtyInput.value = quantity;
    };

    qtyMinus.addEventListener('click', () => {
      if (quantity > 1) {
        quantity--;
        updateQtyDisplay();
      }
    });

    qtyPlus.addEventListener('click', () => {
      if (quantity < maxQty) {
        quantity++;
        updateQtyDisplay();
      } else if (product.stockCount !== undefined) {
        alert(`Only ${product.stockCount} items are currently available.`);
      }
    });
  }

  // Add to Cart click handler
  if (!isSoldOut) {
    btnAddToCart.addEventListener('click', () => {
      addToCart(product, quantity);

      // Temporary visual success states on button
      const originalBtnText = btnText.textContent;
      
      btnText.textContent = "Added to Cart! ✓";
      btnAddToCart.classList.add('added');

      setTimeout(() => {
        btnText.textContent = originalBtnText;
        btnAddToCart.classList.remove('added');
      }, 1500);
    });
  }

  // Transition view states
  loadingEl.style.display = 'none';
  contentEl.style.display = 'grid';

  function showError() {
    loadingEl.style.display = 'none';
    errorEl.style.display = 'block';
  }
});

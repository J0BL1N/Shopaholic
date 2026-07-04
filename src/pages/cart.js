import { getCart, updateQuantity, removeFromCart } from '../utils/cart.js';
import { CATEGORY_MAP } from '../utils/productCard.js';

document.addEventListener('DOMContentLoaded', () => {
  const emptyView = document.getElementById('cart-empty-view');
  const filledView = document.getElementById('cart-filled-view');
  const itemsContainer = document.getElementById('cart-items-container');
  const itemsCountText = document.getElementById('summary-items-count');
  const subtotalText = document.getElementById('summary-subtotal');

  if (!itemsContainer) return;

  const renderCart = () => {
    const cart = getCart();
    
    if (cart.length === 0) {
      filledView.style.display = 'none';
      emptyView.style.display = 'block';
      return;
    }

    emptyView.style.display = 'none';
    filledView.style.display = 'grid';

    let totalCount = 0;
    let subtotal = 0;
    let hasPreorder = false;
    let hasInStock = false;

    itemsContainer.innerHTML = cart.map(item => {
      totalCount += item.quantity;
      const lineTotal = item.price * item.quantity;
      subtotal += lineTotal;

      const categoryText = CATEGORY_MAP[item.category] || item.category || "Uncategorized";

      const isPreorder = item.status === 'preorder';
      const isSoldOut = item.status === 'sold_out' || item.stockCount === 0;

      if (isPreorder) {
        hasPreorder = true;
      } else {
        hasInStock = true;
      }

      const preorderText = isPreorder
        ? `<span class="product-badge badge-preorder" style="display: inline-block; padding: 2px 8px; font-size: 11px; margin-top: 4px; width: fit-content;">Preorder (ETA: ${item.preorderEta || 'TBA'})</span>`
        : '';

      const soldOutText = isSoldOut
        ? `<span class="product-badge badge-sold_out" style="display: inline-block; padding: 2px 8px; font-size: 11px; margin-top: 4px; width: fit-content;">Sold Out</span>`
        : '';

      const isMinQty = item.quantity <= 1;
      const isMaxQty = (item.stockCount !== undefined && item.quantity >= item.stockCount) || isSoldOut;

      return `
        <div class="cart-item-row" data-id="${item.id}">
          <img class="cart-item-img" src="${item.image || 'https://images.unsplash.com/photo-1559251606-c623743a6d76?w=600&auto=format&fit=crop&q=60'}" alt="${item.name || 'Unnamed Product'}">
          <div class="cart-item-info">
            <a href="./product.html?id=${item.id}" class="cart-item-name">${item.name || 'Unnamed Product'}</a>
            <div class="cart-item-details">
              <span class="text-small" style="font-size: 12px; margin-bottom: 2px;">Category: ${categoryText}</span>
              <div style="display: flex; gap: 6px; flex-wrap: wrap;">
                ${preorderText}
                ${soldOutText}
              </div>
              <span class="cart-item-price">$${item.price.toFixed(2)} each</span>
            </div>
            
            <div class="cart-qty-row">
              <div class="cart-qty-ctrl">
                <button class="btn-qty" data-action="decrease" data-id="${item.id}" ${isMinQty ? 'disabled' : ''}>−</button>
                <span class="cart-qty-val">${item.quantity}</span>
                <button class="btn-qty" data-action="increase" data-id="${item.id}" ${isMaxQty ? 'disabled' : ''}>+</button>
              </div>
              <button class="btn-remove" data-id="${item.id}">
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="3 6 5 6 21 6"></polyline><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path><line x1="10" y1="11" x2="10" y2="17"></line><line x1="14" y1="11" x2="14" y2="17"></line></svg>
                <span>Remove</span>
              </button>
            </div>
          </div>
          <div style="font-weight: 600; font-size: 16px; min-width: 80px; text-align: right; align-self: flex-start; margin-top: 4px;">
            $${lineTotal.toFixed(2)}
          </div>
        </div>
      `;
    }).join('');

    // Toggle mixed preorder/in-stock notice
    const mixedNotice = document.getElementById('cart-mixed-notice');
    if (mixedNotice) {
      if (hasPreorder && hasInStock) {
        mixedNotice.style.display = 'flex';
      } else {
        mixedNotice.style.display = 'none';
      }
    }

    // Update summary block values
    itemsCountText.textContent = `${totalCount} item${totalCount !== 1 ? 's' : ''}`;
    subtotalText.textContent = `$${subtotal.toFixed(2)}`;
  };

  // Event Delegation for operations on Cart items
  itemsContainer.addEventListener('click', (e) => {
    // 1. Quantity Controls
    const qtyBtn = e.target.closest('.btn-qty');
    if (qtyBtn) {
      const id = qtyBtn.getAttribute('data-id');
      const action = qtyBtn.getAttribute('data-action');
      const cart = getCart();
      const currentItem = cart.find(item => item.id === id);
      
      if (currentItem) {
        const isSoldOut = currentItem.status === 'sold_out' || currentItem.stockCount === 0;
        if (action === 'increase') {
          if (isSoldOut) return;
          if (currentItem.stockCount !== undefined && currentItem.quantity >= currentItem.stockCount) return;
          updateQuantity(id, currentItem.quantity + 1);
        } else if (action === 'decrease') {
          if (currentItem.quantity <= 1) return;
          updateQuantity(id, currentItem.quantity - 1);
        }
        renderCart();
      }
      return;
    }

    // 2. Remove Buttons
    const removeBtn = e.target.closest('.btn-remove');
    if (removeBtn) {
      const id = removeBtn.getAttribute('data-id');
      removeFromCart(id);
      renderCart();
    }
  });

  // Observe updates from header (if duplicate tab or storage synced)
  window.addEventListener('sa_cart_updated', renderCart);

  // Initial render
  renderCart();
});

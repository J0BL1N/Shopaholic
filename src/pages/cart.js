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

    itemsContainer.innerHTML = cart.map(item => {
      totalCount += item.quantity;
      const lineTotal = item.price * item.quantity;
      subtotal += lineTotal;

      const categoryText = CATEGORY_MAP[item.category] || item.category;
      const isPreorder = item.status === 'preorder';
      const preorderText = isPreorder ? `<span style="color: var(--color-badge-preorder-text); font-weight: 600; font-size: 11px;">[Preorder - ETA: ${item.preorderEta || 'TBD'}]</span>` : '';

      return `
        <div class="cart-item-row" data-id="${item.id}">
          <img class="cart-item-img" src="${item.image}" alt="${item.name}">
          <div class="cart-item-info">
            <a href="./shop.html?category=${item.category}" class="cart-item-name">${item.name}</a>
            <div class="cart-item-details">
              <span class="text-small" style="font-size: 12px; margin-bottom: 2px;">Category: ${categoryText}</span>
              ${preorderText}
              <span class="cart-item-price">$${item.price.toFixed(2)} each</span>
            </div>
            
            <div class="cart-qty-row">
              <div class="cart-qty-ctrl">
                <button class="btn-qty" data-action="decrease" data-id="${item.id}">−</button>
                <span class="cart-qty-val">${item.quantity}</span>
                <button class="btn-qty" data-action="increase" data-id="${item.id}">+</button>
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
        if (action === 'increase') {
          updateQuantity(id, currentItem.quantity + 1);
        } else if (action === 'decrease') {
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

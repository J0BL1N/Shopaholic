// Cart Utilities using localStorage key 'sa_cart'

export function getCart() {
  try {
    return JSON.parse(localStorage.getItem('sa_cart')) || [];
  } catch (e) {
    return [];
  }
}

export function saveCart(cart) {
  localStorage.setItem('sa_cart', JSON.stringify(cart));
  window.dispatchEvent(new Event('sa_cart_updated'));
  // Trigger storage event for other open tabs
  window.dispatchEvent(new StorageEvent('storage', {
    key: 'sa_cart',
    newValue: JSON.stringify(cart)
  }));
}

export function addToCart(product, quantity = 1) {
  const cart = getCart();
  const existingItem = cart.find(item => item.id === product.id);

  if (existingItem) {
    // Check stock if applicable
    if (product.stockCount !== undefined) {
      const newQuantity = existingItem.quantity + quantity;
      if (newQuantity <= product.stockCount) {
        existingItem.quantity = newQuantity;
      } else {
        existingItem.quantity = product.stockCount;
        alert(`Sorry, only ${product.stockCount} items are available in stock.`);
      }
    } else {
      existingItem.quantity += quantity;
    }
  } else {
    // Check if stock is 0
    if (product.stockCount === 0) {
      alert("Sorry, this item is sold out!");
      return;
    }
    cart.push({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
      category: product.category,
      status: product.status,
      stockCount: product.stockCount,
      preorderEta: product.preorderEta,
      quantity: quantity
    });
  }

  saveCart(cart);
}

export function updateQuantity(productId, quantity) {
  let cart = getCart();
  const item = cart.find(item => item.id === productId);

  if (item) {
    if (quantity <= 0) {
      cart = cart.filter(item => item.id !== productId);
    } else {
      // Check stock limit
      if (item.stockCount !== undefined && quantity > item.stockCount) {
        item.quantity = item.stockCount;
        alert(`Sorry, only ${item.stockCount} items are available in stock.`);
      } else {
        item.quantity = quantity;
      }
    }
    saveCart(cart);
  }
}

export function removeFromCart(productId) {
  let cart = getCart();
  cart = cart.filter(item => item.id !== productId);
  saveCart(cart);
}

export function clearCart() {
  saveCart([]);
}

// Helper for rendering product cards consistently

export const CATEGORY_MAP = {
  "blind-boxes": "Blind Boxes",
  "plushies": "Plushies",
  "bags-purses": "Bags & Purses",
  "apparel": "Apparel",
  "home-kitchen": "Home & Kitchen",
  "junk-drawer": "The Junk Drawer"
};

export const BADGE_MAP = {
  "in_stock": "In Stock",
  "preorder": "Preorder",
  "low_stock": "Low Stock",
  "sold_out": "Sold Out"
};

export function getProductCardHTML(product) {
  const badgeText = BADGE_MAP[product.status] || "";
  const categoryText = CATEGORY_MAP[product.category] || product.category;
  const isSoldOut = product.status === "sold_out";
  
  let buttonText = "Add to Cart";
  if (product.status === "preorder") {
    buttonText = "Preorder Item";
  } else if (isSoldOut) {
    buttonText = "Sold Out";
  }

  const etaTag = product.status === "preorder" && product.preorderEta
    ? `<div class="preorder-eta-tag">ETA: ${product.preorderEta}</div>`
    : "";

  return `
    <div class="product-card" data-id="${product.id}">
      <a href="./product.html?id=${product.id}" class="product-card-link-wrapper">
        <div class="product-card-img-wrapper">
          <span class="product-badge badge-${product.status}">${badgeText}</span>
          <img class="product-card-img" src="${product.image}" alt="${product.name}" loading="lazy">
        </div>
        <div class="product-card-content">
          <span class="product-card-category">${categoryText}</span>
          <h3 class="product-card-name">${product.name}</h3>
          <div class="product-card-price">$${product.price.toFixed(2)}</div>
          ${etaTag}
          <p class="product-card-desc">${product.shortDescription}</p>
        </div>
      </a>
      <div class="product-card-actions">
        <button class="btn-add-to-cart" data-id="${product.id}" ${isSoldOut ? "disabled" : ""}>
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="9" cy="21" r="1"></circle><circle cx="20" cy="21" r="1"></circle><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path></svg>
          <span>${buttonText}</span>
        </button>
      </div>
    </div>
  `;
}

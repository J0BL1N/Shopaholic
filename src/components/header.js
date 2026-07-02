/* Global Sticky Header Component */

document.addEventListener('DOMContentLoaded', () => {
  const headerContainer = document.getElementById('global-header');
  if (!headerContainer) return;
  
  const currentPath = window.location.pathname;
  
  // Helper to determine active state of navigation links
  const getActiveClass = (path) => {
    if (currentPath === path || currentPath.endsWith(path)) {
      return 'active';
    }
    // Handle home index page fallbacks
    if (path === 'index.html' && (currentPath === '/' || currentPath.endsWith('/') || currentPath === '' || currentPath.endsWith('index.html'))) {
      return 'active';
    }
    return '';
  };
  
  // Adjust paths based on folder depth (e.g. if page is in a /policies subfolder)
  const isSubfolder = currentPath.includes('/policies/');
  const rootPath = isSubfolder ? '../' : './';
  
  headerContainer.innerHTML = `
    <div class="container header-container">
      <a href="${rootPath}index.html" class="logo-link" aria-label="Shopaholic Approved Home">
        <span class="logo-text">Shopaholic Approved</span>
      </a>
      
      <button class="menu-toggle" id="menu-toggle-btn" aria-label="Open Navigation Menu" aria-expanded="false">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>
      </button>

      <ul class="nav-menu" id="nav-menu-list">
        <li><a href="${rootPath}index.html" class="nav-link ${getActiveClass('index.html')}">Home</a></li>
        <li><a href="${rootPath}shop.html" class="nav-link ${getActiveClass('shop.html')}">Shop</a></li>
        <li><a href="${rootPath}preorders.html" class="nav-link ${getActiveClass('preorders.html')}">Preorders</a></li>
        <li><a href="${rootPath}catalog.html" class="nav-link ${getActiveClass('catalog.html')}">Catalog</a></li>
        <li><a href="${rootPath}request.html" class="nav-link ${getActiveClass('request.html')}">Request an Item</a></li>
        <li><a href="${rootPath}about.html" class="nav-link ${getActiveClass('about.html')}">About</a></li>
        <li><a href="${rootPath}contact.html" class="nav-link ${getActiveClass('contact.html')}">Contact</a></li>
      </ul>
      
      <div class="header-actions">
        <a href="${rootPath}cart.html" class="cart-icon-btn" aria-label="Shopping Cart">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="9" cy="21" r="1"></circle><circle cx="20" cy="21" r="1"></circle><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path></svg>
          <span class="cart-badge" id="global-cart-count">0</span>
        </a>
      </div>
    </div>
  `;
  
  // Mobile Hamburger Toggle logic
  const toggleBtn = document.getElementById('menu-toggle-btn');
  const menuList = document.getElementById('nav-menu-list');
  
  if (toggleBtn && menuList) {
    toggleBtn.addEventListener('click', () => {
      menuList.classList.toggle('open');
      const isOpen = menuList.classList.contains('open');
      toggleBtn.setAttribute('aria-expanded', isOpen);
      toggleBtn.innerHTML = isOpen 
        ? `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>`
        : `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>`;
    });
  }

  // Synchronize cart count badge from localStorage
  const updateCartBadge = () => {
    const badge = document.getElementById('global-cart-count');
    if (!badge) return;
    try {
      const cart = JSON.parse(localStorage.getItem('sa_cart')) || [];
      const totalCount = cart.reduce((total, item) => total + (item.quantity || 1), 0);
      badge.textContent = totalCount;
    } catch (e) {
      badge.textContent = '0';
    }
  };

  updateCartBadge();
  window.addEventListener('storage', updateCartBadge);
  window.addEventListener('sa_cart_updated', updateCartBadge);
});

/* Global Deep Indigo Footer Component */

document.addEventListener('DOMContentLoaded', () => {
  const footerContainer = document.getElementById('global-footer');
  if (!footerContainer) return;
  
  const currentPath = window.location.pathname;
  const isSubfolder = currentPath.includes('/policies/');
  const rootPath = isSubfolder ? '../' : './';
  const policyPrefix = isSubfolder ? '' : 'policies/';
  
  footerContainer.innerHTML = `
    <div class="container">
      <div class="footer-grid">
        <div class="footer-column footer-brand-info">
          <h6>Shopaholic Approved</h6>
          <p class="footer-brand-desc">Find your next favorite collectible, plushie, or preorder release from our curated boutique.</p>
        </div>
        
        <div class="footer-column">
          <h6>Shop</h6>
          <ul class="footer-links">
            <li><a href="${rootPath}shop.html" class="footer-link">All Products</a></li>
            <li><a href="${rootPath}preorders.html" class="footer-link">Preorders</a></li>
            <li><a href="${rootPath}catalog.html" class="footer-link">Coming Soon</a></li>
            <li><a href="${rootPath}request.html" class="footer-link">Request an Item</a></li>
          </ul>
        </div>
        
        <div class="footer-column">
          <h6>Customer Care</h6>
          <ul class="footer-links">
            <li><a href="${rootPath}about.html" class="footer-link">About Us</a></li>
            <li><a href="${rootPath}contact.html" class="footer-link">Contact Us</a></li>
            <li><a href="${rootPath}faq.html" class="footer-link">FAQ</a></li>
          </ul>
        </div>
        
        <div class="footer-column">
          <h6>Policies</h6>
          <ul class="footer-links">
            <li><a href="${rootPath}${policyPrefix}shipping.html" class="footer-link">Shipping Policy</a></li>
            <li><a href="${rootPath}${policyPrefix}refunds.html" class="footer-link">Refund & Return Policy</a></li>
            <li><a href="${rootPath}${policyPrefix}privacy.html" class="footer-link">Privacy Policy</a></li>
            <li><a href="${rootPath}${policyPrefix}terms.html" class="footer-link">Terms of Service</a></li>
          </ul>
        </div>
      </div>
      
      <hr class="footer-divider" />
      
      <div class="footer-bottom">
        <p class="footer-disclaimer">
          Shopaholic Approved is an independent collectible shop. We are not affiliated with, endorsed by, or sponsored by any third-party collectible brands unless clearly stated. Product names, references, and images are used only to identify the items being sold.
        </p>
        <p class="footer-copyright">
          © 2026 Shopaholic Approved. All rights reserved.
        </p>
      </div>
    </div>
  `;
});

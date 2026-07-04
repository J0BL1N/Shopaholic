import { resolve } from 'path';
import { defineConfig } from 'vite';

export default defineConfig(({ command, mode }) => {
  const isDev = command === 'serve' && mode === 'development';
  return {
    base: isDev ? '/' : '/Shopaholic/',
    build: {
      rollupOptions: {
        input: {
          main: resolve(__dirname, 'index.html'),
          shop: resolve(__dirname, 'shop.html'),
          preorders: resolve(__dirname, 'preorders.html'),
          catalog: resolve(__dirname, 'catalog.html'),
          request: resolve(__dirname, 'request.html'),
          about: resolve(__dirname, 'about.html'),
          contact: resolve(__dirname, 'contact.html'),
          faq: resolve(__dirname, 'faq.html'),
          cart: resolve(__dirname, 'cart.html'),
          product: resolve(__dirname, 'product.html'),
          shipping: resolve(__dirname, 'policies/shipping.html'),
          refunds: resolve(__dirname, 'policies/refunds.html'),
          privacy: resolve(__dirname, 'policies/privacy.html'),
          terms: resolve(__dirname, 'policies/terms.html'),
        },
      },
    },
  };
});

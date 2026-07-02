document.addEventListener('DOMContentLoaded', () => {
  const faqList = document.querySelector('.faq-list');
  if (!faqList) return;

  faqList.addEventListener('click', (e) => {
    const questionBtn = e.target.closest('.faq-question');
    if (!questionBtn) return;

    const currentItem = questionBtn.closest('.faq-item');
    if (!currentItem) return;

    const isOpen = currentItem.classList.contains('open');

    // Close all FAQ items for a neat accordion feel
    faqList.querySelectorAll('.faq-item').forEach(item => {
      item.classList.remove('open');
    });

    // Toggle click target
    if (!isOpen) {
      currentItem.classList.add('open');
    }
  });
});

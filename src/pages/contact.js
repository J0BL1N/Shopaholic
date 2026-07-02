document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('general-contact-form');
  const successDiv = document.getElementById('contact-success');
  const successEmail = document.getElementById('contact-email-confirm');
  const resetBtn = document.getElementById('btn-reset-contact');

  if (!form) return;

  // Pre-populate form message if referenced from cart checkout
  const urlParams = new URLSearchParams(window.location.search);
  const isCheckoutRef = urlParams.get('ref') === 'checkout';

  if (isCheckoutRef) {
    try {
      const cart = JSON.parse(localStorage.getItem('sa_cart')) || [];
      if (cart.length > 0) {
        const msgTextarea = document.getElementById('con-message');
        const subjectInput = document.getElementById('con-subject');

        if (subjectInput) {
          subjectInput.value = "Order Reservation Inquiry";
        }

        if (msgTextarea) {
          let summary = "Hello Shopaholic Approved!\n\nI would like to inquire about reserving/ordering the following items from my cart:\n\n";
          let total = 0;
          cart.forEach(item => {
            const lineVal = item.price * item.quantity;
            total += lineVal;
            const preorderLabel = item.status === 'preorder' ? ' [Preorder]' : '';
            summary += `• ${item.quantity}x ${item.name}${preorderLabel} ($${item.price.toFixed(2)} ea. — Line Total: $${lineVal.toFixed(2)})\n`;
          });
          summary += `\nEstimated Subtotal: $${total.toFixed(2)}\n`;
          summary += "Please let me know the total cost with shipping, and how I can proceed to finalize this order.\n\nThank you!";
          msgTextarea.value = summary;
        }
      }
    } catch (e) {
      console.warn("Could not read cart for contact prefill:", e);
    }
  }

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const nameVal = document.getElementById('con-name').value.trim();
    const emailVal = document.getElementById('con-email').value.trim();
    const messageVal = document.getElementById('con-message').value.trim();

    let hasError = false;

    // Reset error visuals
    form.querySelectorAll('.form-input').forEach(input => {
      input.style.borderColor = "";
    });

    if (!nameVal) {
      document.getElementById('con-name').style.borderColor = "#d63163";
      hasError = true;
    }
    if (!emailVal || !emailVal.includes('@')) {
      document.getElementById('con-email').style.borderColor = "#d63163";
      hasError = true;
    }
    if (!messageVal) {
      document.getElementById('con-message').style.borderColor = "#d63163";
      hasError = true;
    }

    if (hasError) {
      alert("Please fill in all required fields marked with * with valid information.");
      return;
    }

    // Success State Transition
    successEmail.textContent = emailVal;

    form.style.display = "none";
    successDiv.style.display = "block";
  });

  if (resetBtn) {
    resetBtn.addEventListener('click', () => {
      form.reset();
      successDiv.style.display = "none";
      form.style.display = "block";
    });
  }
});

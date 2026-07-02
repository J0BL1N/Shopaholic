document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('sourcing-request-form');
  const successDiv = document.getElementById('request-success');
  const successItemName = document.getElementById('success-item-name');
  const successEmail = document.getElementById('success-email');
  const resetBtn = document.getElementById('btn-reset-request');

  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    // Custom Validation
    const nameVal = document.getElementById('req-name').value.trim();
    const emailVal = document.getElementById('req-email').value.trim();
    const itemNameVal = document.getElementById('req-item-name').value.trim();

    let hasError = false;

    // Reset error visuals
    form.querySelectorAll('.form-input').forEach(input => {
      input.style.borderColor = "";
    });

    if (!nameVal) {
      document.getElementById('req-name').style.borderColor = "#d63163";
      hasError = true;
    }
    if (!emailVal || !emailVal.includes('@')) {
      document.getElementById('req-email').style.borderColor = "#d63163";
      hasError = true;
    }
    if (!itemNameVal) {
      document.getElementById('req-item-name').style.borderColor = "#d63163";
      hasError = true;
    }

    if (hasError) {
      alert("Please fill in all required fields marked with * with valid information.");
      return;
    }

    // Success State Transition
    successItemName.textContent = itemNameVal;
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

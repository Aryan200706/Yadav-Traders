const form = document.getElementById('contactForm');
const note = document.getElementById('formNote');
const submitBtn = document.getElementById('submitBtn');

if (form) {
  form.addEventListener('submit', () => {
    // Allow normal POST submission to FormSubmit and only show UI feedback.
    if (submitBtn) {
      submitBtn.disabled = true;
      submitBtn.textContent = 'Sending...';
    }

    if (note) {
      note.textContent = 'Submitting your details...';
    }
  });
}

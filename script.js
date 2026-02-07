const form = document.getElementById('contactForm');
const note = document.getElementById('formNote');

if (form) {
  form.addEventListener('submit', (event) => {
    event.preventDefault();

    const ownerEmail = form.dataset.ownerEmail || 'owner@yadavtraders.com';
    const name = document.getElementById('name').value.trim();
    const phone = document.getElementById('phone').value.trim();
    const email = document.getElementById('email').value.trim();
    const type = document.getElementById('type').value.trim();
    const message = document.getElementById('message').value.trim();

    const subject = encodeURIComponent(`Staffing Inquiry - ${type || 'Contact Form'}`);
    const body = encodeURIComponent(
      `Name: ${name}\nPhone: ${phone}\nEmail: ${email}\nType: ${type}\n\nMessage:\n${message}`
    );

    const mailto = `mailto:${ownerEmail}?subject=${subject}&body=${body}`;
    window.location.href = mailto;

    note.textContent = 'Email app opened. If it did not open, please copy the details and email us directly.';
  });
}

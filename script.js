const navToggle = document.querySelector('.nav-toggle');
const mainNav = document.querySelector('.main-nav');

if (navToggle && mainNav) {
  navToggle.addEventListener('click', () => {
    mainNav.classList.toggle('open');
  });

  mainNav.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => mainNav.classList.remove('open'));
  });
}

const form = document.querySelector('.inquiry-form');
if (form) {
  form.addEventListener('submit', (event) => {
    event.preventDefault();
    alert('Form placeholder: connect this form to your email or Formspree/EmailJS in Accio Work.');
  });
}

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
const status = document.querySelector('.form-status');
const submitBtn = document.querySelector('.btn-submit');

if (form) {
  form.addEventListener('submit', async (event) => {
    event.preventDefault();
    submitBtn.disabled = true;
    submitBtn.innerText = 'Sending...';
    status.innerHTML = '';
    
    const data = new FormData(event.target);
    
    try {
      const response = await fetch('https://formspree.io/yaojack@mail.nanshuobiz.com', {
        method: 'POST',
        body: data,
        headers: {
          'Accept': 'application/json'
        }
      });
      
      if (response.ok) {
        status.innerHTML = '<p style="color: #2e7d32; font-weight: bold; margin-top: 15px;">Thank you. Your inquiry has been sent successfully. We will contact you soon.</p>';
        form.reset();
      } else {
        throw new Error('Response not ok');
      }
    } catch (error) {
      status.innerHTML = '<p style="color: #d32f2f; font-weight: bold; margin-top: 15px;">Sorry, something went wrong. Please contact us by WhatsApp or email.</p>';
    } finally {
      submitBtn.disabled = false;
      submitBtn.innerText = 'Submit Inquiry';
    }
  });
}

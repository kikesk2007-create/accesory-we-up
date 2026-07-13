document.addEventListener('DOMContentLoaded', function () {
  var toggle = document.querySelector('.nav-toggle');
  var navbar = document.querySelector('.navbar');
  if (toggle && navbar) {
    toggle.addEventListener('click', function () {
      navbar.classList.toggle('open');
      var expanded = navbar.classList.contains('open');
      toggle.setAttribute('aria-expanded', expanded ? 'true' : 'false');
    });
  }

  var form = document.querySelector('#contact-form');
  if (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      var msg = document.querySelector('#form-msg');
      var name = form.querySelector('#name').value.trim();
      var email = form.querySelector('#email').value.trim();
      var message = form.querySelector('#message').value.trim();

      if (!name || !email || !message) {
        msg.textContent = 'Por favor completa nombre, correo y mensaje antes de enviar.';
        msg.className = 'form-msg show error';
        return;
      }
      var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailPattern.test(email)) {
        msg.textContent = 'Ingresa un correo electrónico válido.';
        msg.className = 'form-msg show error';
        return;
      }
      msg.textContent = '¡Gracias, ' + name + '! Tu mensaje fue recibido (demo de Front-End, sin envío real).';
      msg.className = 'form-msg show ok';
      form.reset();
    });
  }
});

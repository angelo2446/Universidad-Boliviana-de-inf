const usuarioValido = "SOLIZ";
const passwordValido = "12927753";

const form = document.getElementById('loginForm');
const errorMensaje = document.getElementById('errorMensaje');
const usuarioInput = document.getElementById('usuario');
const passwordInput = document.getElementById('password');

form.addEventListener('submit', function(event) {
  event.preventDefault();

  const usuario = usuarioInput.value;
  const password = passwordInput.value;

  if (usuario === usuarioValido && password === passwordValido) {
    sessionStorage.setItem('usuario', usuario);
    window.location.href = 'dashboard.html';
  } else {
    errorMensaje.style.display = 'block';
  }
});

usuarioInput.addEventListener('input', () => {
  errorMensaje.style.display = 'none';
});

passwordInput.addEventListener('input', () => {
  errorMensaje.style.display = 'none';
});
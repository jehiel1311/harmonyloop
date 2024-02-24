


function mostrarDialogo() {
  var dialogo = document.getElementById('dialogo');
  dialogo.classList.toggle('hidden');
  
  ocultarGreeting();
}

function enviarWhatsApp() {
  const mensaje = encodeURIComponent(document.getElementById('mensaje').value);
  window.location.href = `https://wa.me/3415555023?text=${mensaje}`;
}

function cerrarDialogo() {
  var dialogo = document.getElementById('dialogo');
 
  dialogo.classList.add('hidden');
}

function mostrarGreeting() {
  document.getElementById('greeting').style.display = 'block';
}

function ocultarGreeting() {
  document.getElementById('greeting').style.display = 'none';
}

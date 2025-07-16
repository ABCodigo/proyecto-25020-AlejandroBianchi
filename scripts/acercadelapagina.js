
// Seleccionamos el botón y el contenido
const button = document.getElementById('toggleButton');
console.log(button);
let body = document.body;

// Agregamos un manejador de evento clic al botón
toggleButton.addEventListener('click', function () {
    // Verificamos el color de fondo actual y lo cambiamos
    if (body.classList.contains('dark')) {
        body.classList.remove('dark');
        body.classList.add('light');
    } else {
        body.classList.remove('light');
        body.classList.add('dark');
    }
});
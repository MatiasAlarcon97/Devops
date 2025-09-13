const form = document.getElementById('loginForm');
const usernameField = document.getElementById('username');
const passwordField = document.getElementById('password');
const errorMessage = document.getElementById('error-message');

    // Función para manejar el envío del formulario
    form.addEventListener('submit', function(event) {
        // Evitar que el formulario se envíe antes de la validación
        event.preventDefault();
        // Verificar si ambos campos están llenos
        if (usernameField.value === '' || passwordField.value === '') {
            // Mostrar el mensaje de error
            errorMessage.style.display = 'block';
        } else {
            // Si ambos campos están llenos, ocultar el mensaje de error
            errorMessage.style.display = 'none';
            // Aquí podrías enviar el formulario con AJAX o proceder con el envío tradicional
            // Si es un envío tradicional, descomenta la siguiente línea
            // form.submit();
            
            // En este caso, solo mostramos un mensaje de éxito
            alert('Formulario enviado correctamente');
        }
    });
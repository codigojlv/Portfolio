document.addEventListener('DOMContentLoaded', function() {
    const darkModeToggle = document.getElementById('darkModeToggle');
    const body = document.body;

    // Comprobar si el modo oscuro estaba activado previamente por el usuario
    const isDarkModePreferred = localStorage.getItem('darkMode');

    // Si el usuario no ha establecido una preferencia (primera visita),
    // mostrar el modo oscuro por defecto.
    if (isDarkModePreferred === null) {
        body.classList.add('dark-mode');
        localStorage.setItem('darkMode', 'enabled');
        darkModeToggle.textContent = '☀️'; // Cambiar el icono a sol
    } else if (isDarkModePreferred === 'enabled') {
        body.classList.add('dark-mode');
        darkModeToggle.textContent = '☀️'; // Cambiar el icono a sol
    } else {
        darkModeToggle.textContent = '🌙'; // Asegurar que el icono sea luna si no está en modo oscuro
    }

    darkModeToggle.addEventListener('click', function() {
        body.classList.toggle('dark-mode');

        // Guardar o eliminar el estado del modo oscuro en localStorage
        if (body.classList.contains('dark-mode')) {
            localStorage.setItem('darkMode', 'enabled');
            darkModeToggle.textContent = '☀️'; // Cambiar el icono a sol
        } else {
            localStorage.setItem('darkMode', 'disabled');
            darkModeToggle.textContent = '🌙'; // Cambiar el icono a luna
        }
    });

    // Lógica para el botón hamburguesa
    const menuToggle = document.getElementById('menu-toggle');
    const sidebar = document.getElementById('sidebar');

    if (menuToggle && sidebar) {
        menuToggle.addEventListener('click', function() {
            sidebar.classList.toggle('activo');
        });
    }
});

// control de menu cursos

function toggleContenido(id) {
    const contenido = document.getElementById(id);
    const contenidos = document.querySelectorAll('.contenidoa');
  
    // Cerrar todos los contenidos
    contenidos.forEach(c => {
      if (c !== contenido) {
        c.style.display = 'none';
      }
    });
  
    // Alternar el contenido seleccionado
    if (contenido.style.display === 'block') {
      contenido.style.display = 'none';
    } else {
      contenido.style.display = 'block';
    }
  }

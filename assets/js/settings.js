document.addEventListener("DOMContentLoaded", function () {
  const settingsButton = document.getElementById("settings-button");
  const settingsPanel = document.getElementById("settings-panel");

  // Mostrar/Ocultar el panel al hacer clic en el botón
  settingsButton.addEventListener("click", (e) => {
    e.stopPropagation(); // Evita que el clic se propague al documento
    settingsPanel.classList.toggle("visible");
  });

  // Cerrar el panel al hacer clic fuera de él
  document.addEventListener("click", (e) => {
    // Si el panel está visible y el clic NO fue dentro del panel ni en el botón, lo ocultamos
    if (
      settingsPanel.classList.contains("visible") &&
      !settingsPanel.contains(e.target) &&
      !settingsButton.contains(e.target)
    ) {
      settingsPanel.classList.remove("visible");
    }
  });

  // Mostrar el botón al hacer scroll hacia abajo (más de 200px)
  window.addEventListener("scroll", function () {
    if (window.scrollY > 100) {
      settingsButton.classList.add("visible");
    } else {
      settingsButton.classList.remove("visible");
      // También ocultamos el panel si se oculta el botón
      settingsPanel.classList.remove("visible");
    }
  });

  // Cambiar idioma
  document.getElementById("lang-select").addEventListener("change", function () {
    changeLanguage(this.value);
  });

  // Alternar Dark Mode
  document.getElementById("darkmode-toggle").addEventListener("change", function () {
    if (this.checked) {
      document.body.classList.add("dark-mode");
    } else {
      document.body.classList.remove("dark-mode");
    }
  });
});


window.addEventListener("scroll", function() {
  const settingsButton = document.getElementById("settings-button");
  // Mostrar el botón si se ha desplazado más de 300px, ocultarlo en caso contrario.
  if (window.scrollY > 200) {
    settingsButton.style.display = "flex";
  } else {
    settingsButton.style.display = "none";
  }
});
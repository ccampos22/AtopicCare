document.addEventListener("DOMContentLoaded", () => {
  const isDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;  

  // Show / hide panel on click
  settingsButton.addEventListener("click", (e) => {
    e.stopPropagation();
    settingsPanel.classList.toggle("visible");
  });

  // Close settings panel
  document.addEventListener("click", (e) => {
    closeSettingsPanel(e);
  });

  // Show/Hide settings btn on scroll
  window.addEventListener("scroll", () => {
    showSettingsBtn(200);
  });
 
  // Set Dark Mode depending on user preferences
  if(isDarkMode){
    document.body.classList.toggle("dark-mode", true);
    darkmodeToggle.checked = true;
  }        
  darkmodeToggle.addEventListener("change", function () {        
    document.body.classList.toggle("dark-mode", this.checked);
  });
});

// Closes settings panel whe click outside - CC
const closeSettingsPanel = (e) => {
  if (
    settingsPanel.classList.contains("visible") &&
    !settingsPanel.contains(e.target) &&
    !settingsPanel.contains(e.target)
  ) {
    settingsPanel.classList.remove("visible");
  }
}

// Show / Hide Settings Btn on Scroll - CC
const showSettingsBtn = (scrollThreshold) => {
  if (window.scrollY > scrollThreshold)
    settingsButton.classList.add("visible");
  else {
    settingsButton.classList.remove("visible");
    settingsPanel.classList.remove("visible");
  }
}
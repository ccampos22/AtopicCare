function readSectionContent(sectionId, lang = 'en-US', rate = 1) {
    const section = document.getElementById(sectionId);
    if (section) {
      // Obtiene el texto interno de la sección
      const text = section.innerText;
      // Crea una instancia para reproducir el texto
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.lang = lang;
      utterance.rate = rate;
      // Inicia la lectura
      speechSynthesis.speak(utterance);
    } else {
      console.error("No se encontró la sección con ID:", sectionId);
    }
  }
const readSectionContent = (sectionId, rate = 1) => {
    const section = document.getElementById(sectionId);
    let lang;
    if(Cookies.get('lang'))
      lang = Cookies.get('lang') != "en" ? "es-CRC" : "en-US";
    
      
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
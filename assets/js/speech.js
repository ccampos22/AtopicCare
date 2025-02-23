const readSectionContent = (sectionId, rate = 1) => {
    const section = document.getElementById(sectionId);
    let lang;
    if(Cookies.get('lang'))
      lang = Cookies.get('lang') != "en" ? "es-MX" : "en-US";
    
      
    if (section) {
      // Get the text to read
      const text = section.innerText;
      // Create an instance to read
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.lang = lang;
      utterance.rate = rate;      
      speechSynthesis.speak(utterance);
    } else {
      console.error("No se encontró la sección con ID:", sectionId);
    }
  }
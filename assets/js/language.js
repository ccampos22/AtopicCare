document.addEventListener("DOMContentLoaded", () => {
  const language = Cookies.get('lang') ? Cookies.get('lang') : "en";
  langSelect.value = language;
  // Init i18next
  i18next.init(
    {
      lng: language,
      debug: true,
      resources,
    },
    updateContent
  );

  // Change website language
  langSelect.addEventListener("change", function () {    
    changeLanguage(this.value);
    Cookies.set('lang', this.value, { expires: 7 });
  });
});

// Update Microwebsite content
const updateContent = () => {
  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.getAttribute("data-i18n");
    el.innerText = i18next.t(key);
  });
}

// Change language dinamic
const changeLanguage = (lng) => {
  i18next.changeLanguage(lng, updateContent);
}

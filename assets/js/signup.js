document.addEventListener("DOMContentLoaded", () => {
  // Array with return messages - 
  const validationFields = [
    {id: 'name', errorId: 'nameError', messageEmpty: 'Please enter your full name.'},
    {id: 'country', errorId: 'countryError', messageEmpty: 'Please enter your country.'},
    {id: 'phone', errorId: 'phoneError', messageEmpty: 'Please enter a valid phone number.'},
    {id: 'email', errorId: 'emailError', messageEmpty: 'Please enter your email address.', messageInvalid: 'Please enter a valid email address format.', isEmail: true}
  ];

  // Submit Event
  signupForm.addEventListener("submit", (event) => {
    event.preventDefault();

    // Validamos el formulario. Si todo ok, enviamos o realizamos otra acción
    if (validateForm(validationFields)) {   
      console.info("Formulario válido, se podría enviar.");
      submitSuccess.textContent = '¡Formulario enviado con éxito!';
      submitSuccess.style.display = 'block';
      // Clear the inputs
      setTimeout(() => {
        clearInputs(validationFields);
        submitSuccess.style.display = 'none'; 
      }, 3000); 
    }
  });
});

// Clears the error status of an input and its error container - CC
const clearError = (input, errorDiv) => {
  input.classList.remove("error");
  errorDiv.textContent = "";
  errorDiv.style.display = "none";
};

// Clear the inputs provided - CC
const clearInputs = (fieldsArray) => {
    fieldsArray.forEach((field) => {
        const input = document.getElementById(field.id);
        input.value = '';
    });
};

// Show error status - CC
const showError = (input, errorDiv, message) => {
  input.classList.add("error");
  errorDiv.textContent = message;
  errorDiv.style.display = "block";
};

// Validate empty input - CC
const isEmpty = (value) => !value.trim();

// Validate email with regex - CC
const validateEmail = (email) => {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
};

// Validate if the form is completed correctly - CC
const validateForm = (fieldsArray) => {
  let formIsValid = true;

  fieldsArray.forEach((field) => {
    const input = document.getElementById(field.id);
    const errorDiv = document.getElementById(field.errorId);

    // Clean previous state
    clearError(input, errorDiv);

    // Validate if its not empty
    if (isEmpty(input.value)) {
      showError(input, errorDiv, field.messageEmpty);
      formIsValid = false;
    }
    // Validate email if its necessary
    else if (field.isEmail && !validateEmail(input.value.trim())) {
      showError(input, errorDiv, field.messageInvalid);
      formIsValid = false;
    }
  });

  return formIsValid;
};

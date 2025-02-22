document.addEventListener("DOMContentLoaded", function () {
    updateFooterYear();
});


// Get the current year to update footer information - CC
const updateFooterYear = () => {
    const currentYear = new Date().getFullYear(); 
    const footerText = `&copy; ${currentYear} AtopicCare. All rights reserved.`; 
    document.getElementById('footerYear').innerHTML = footerText; 
};
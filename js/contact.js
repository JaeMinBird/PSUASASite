function submitForm(event) {
    // Prevent default form submission
    event.preventDefault();

    // Get the form data
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;

    // Create a form data object
    const formData = new FormData();
    formData.append('entry.1320401285', name);   // Name field ID
    formData.append('entry.2013840095', email);  // Email field ID

    // Send the data to the Google Form using fetch
    fetch('https://docs.google.com/forms/d/e/1FAIpQLSfkYWRlGvXUr0U-YqVHMAiqYBNpeyL3cp4Mt8-HlPjZodUAqg/formResponse', {
        method: 'POST',
        body: formData,
        mode: 'no-cors' // Important to bypass CORS policy of Google Forms
    }).then(response => {
        // Optionally, show a confirmation message
        document.getElementById("confirmation-message").innerText = "Thank you for signing up!";
    }).catch(error => {
        console.error('Error submitting the form', error);
    });
}

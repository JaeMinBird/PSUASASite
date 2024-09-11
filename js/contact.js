function submitForm(event) {
    // Get the form data
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;

    // Create the Google Forms link with form data
    const googleFormsLink = `https://docs.google.com/forms/d/e/1FAIpQLSfkYWRlGvXUr0U-YqVHMAiqYBNpeyL3cp4Mt8-HlPjZodUAqg/viewform?usp=pp_url&entry.1320401285=${name}&entry.2013840095=${email}`;

    // Open new window
    window.open(googleFormsLink, "_blank");
}
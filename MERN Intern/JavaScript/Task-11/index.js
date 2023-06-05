// JavaScript validation and submission handling
const form = document.getElementById("registrationForm");
form.addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form submission

    // Perform custom validation
    const firstName = document.getElementById("firstName").value;
    const lastName = document.getElementById("lastName").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const reenterPassword = document.getElementById("reenterPassword").value;
    const gender = document.querySelector('input[name="gender"]:checked');
    const age = document.getElementById("age").value;
    const phone = document.getElementById("phone").value;
    const address = document.getElementById("address").value;
    const state = document.getElementById("state").value;
    const country = document.getElementById("country").value;
    const language = Array.from(document.getElementById("language").options)
        .filter(option => option.selected)
        .map(option => option.value);
    const declaration = document.getElementById("declaration").checked;

    // Perform validation checks
    let errorMessages = [];

    if (password !== reenterPassword) {
        errorMessages.push("Passwords do not match.");
    }

    if (!gender) {
        errorMessages.push("Please select a gender.");
    }

    if (phone.length !== 10) {
        errorMessages.push("Phone number should be 10 digits long.");
    }

    if (!declaration) {
        errorMessages.push("You must agree to the declaration.");
    }

    // Display error messages if any
    const errorContainer = document.getElementById("errorContainer");
    if (errorMessages.length > 0) {
        errorContainer.innerHTML = "";
        for (const error of errorMessages) {
            const errorMessage = document.createElement("p");
            errorMessage.textContent = error;
            errorMessage.classList.add("error-message");
            errorContainer.appendChild(errorMessage);
        }
    } else {
        // Form is valid, perform registration logic here
        // You can submit the form or perform AJAX request
        // Here, we'll simply display a success message
        alert("Registration successful!");
        form.reset();
        errorContainer.innerHTML = "";
    }
});
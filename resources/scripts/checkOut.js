// Immediately Invoked Function Expression (IIFE) for encapsulation and to avoid polluting the global namespace

(() => {
  "use strict"; // Use strict mode to prevent certain actions and to throw more exceptions

  // Select all forms with the class 'needs-validation'
  const forms = document.querySelectorAll(".needs-validation");

  // Loop over the selected forms
  Array.from(forms).forEach((form) => {
    // Attach an event listener to the form's submit event
    form.addEventListener(
      "submit",
      (event) => {
        // Check if the form is valid
        if (!form.checkValidity()) {
          event.preventDefault(); // Prevent form submission
          event.stopPropagation(); // Stop the event from propagating further
        }
        // Add 'was-validated' class to the form. This can be used for styling or for later checks.
        form.classList.add("was-validated");
      },
      false
    );
  });
})();

// Function to fetch cart items from the URL's query parameters
function getCartItems() {
  // Extract the query string from the current URL
  // Implement logic to fetch cart items from your data source, this will be local storage for this project
  // Return an array of cart items
  const queryString = window.location.search;
  // Parse the query string to get key-value pairs
  const urlParams = new URLSearchParams(queryString);
  // Get the value of the 'cartItems' key from the parsed query string
  const cartItemsString = urlParams.get("cartItems");
  // Return the parsed JSON object if it exists, or an empty array if it doesn't
  return cartItemsString ? JSON.parse(cartItemsString) : [];
}

// Fetch cart items using the above function
const cartItems = getCartItems();

// Attach an event listener to the 'DOMContentLoaded' event
document.addEventListener("DOMContentLoaded", function () {
  // Fetch DOM elements and other initializations after the DOM has fully loaded

  // DOM is fully loaded, start initializing the checkout page
  const cartItemsContainer = document.getElementById("cart-items");
  const checkoutForm = document.getElementById("checkout-form");

  // Define an array of field IDs that need validation
  const fieldsToValidate = [
    "firstName",
    "lastName",
    "email",
    "phone",
    "address",
    "zip",
    "ccName",
    "ccNumber",
    "ccExpiration",
    "ccCvv",
  ];

  // Helper function to dynamically create form input fields
  function createFormField(id, placeholder) {
    const input = document.createElement("input");
    input.type = "text";
    input.id = id;
    input.placeholder = placeholder;
    return input;
  }

  // Helper function to display validation error messages
  function displayError(field, message) {
    const errorElement = document.createElement("p");
    errorElement.classList.add("error-message");
    errorElement.id = `${field}-error`;
    errorElement.textContent = message;
    checkoutForm.appendChild(errorElement);
  }

  // Function to clear validation errors
  function clearErrors() {
    const errorElements = document.querySelectorAll(".error-message");
    errorElements.forEach((element) => {
      element.textContent = "";
    });
  }

  // Event listener for form submission
  checkoutForm.addEventListener("submit", function (e) {
    e.preventDefault(); // Prevent the default form submission
    clearErrors(); // Clear any existing error messages

    let isValid = true;

    fieldsToValidate.forEach((field) => {
      const inputElement = document.getElementById(field);
      const inputValue = inputElement.value.trim();

      if (!validateField(field, inputValue)) {
        displayError(field, `${field} is invalid`);
        isValid = false;
      }
    });

    if (isValid) {
      // Form is valid, you can proceed with submission or other actions
      alert("Form is valid! You can proceed with submission.");
    }
  });

  // Initialize cart items if they exist and the container is present
  if (cartItems && cartItemsContainer) {
    cartItems.forEach((item) => {
      const cartItemElement = document.createElement("div");
      cartItemElement.textContent = item.name; // Adjust this to display the appropriate cart item details
      cartItemsContainer.appendChild(cartItemElement);
    });
  }
});

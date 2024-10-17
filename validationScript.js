// JavaScript code for form validation

// Retrieve the form and input field element
const form = document.getElementById('myForm');
const inputField = document.getElementById('inputField');

// Regular expression pattern for alphanumeric input
const alphanumericPattern = /^[a-zA-Z0-9]+$/;

// Add an event listener to the form for the submit event
form.addEventListener('submit', function (event) {
  // Retrieve the input field value
  const inputValue = inputField.value.trim();

  // Check if the input value matches the pattern
  if (alphanumericPattern.test(inputValue)) {
    // Valid input: display confirmation and allow the form to submit
    alert('Success!: The input is valid and the form was submitted.');
  } else {
    // Invalid input: display error message and prevent form submission
    alert('Error!: Enter a valid alphanumeric value.');
    event.preventDefault(); // Prevent form submission
  }
});

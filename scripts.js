// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Get the form element
    const form = document.querySelector('.btn').closest('form');
    
    // Add submit event listener
    form.addEventListener('submit', function(event) {
        // Prevent the default form submission
        event.preventDefault();
        
        // Get the email input value
        const emailInput = document.getElementById('email');
        const email = emailInput.value.trim();
        
        // Get the message div
        const messageDiv = document.querySelector('.message');
        
        // Validate and display message
        if (email === '') {
            messageDiv.textContent = 'Please enter a valid email address.';
            messageDiv.style.color = '#e53e3e'; // Red for error
        } else {
            messageDiv.textContent = `Thank you! Your email address ${email} has been added to our mailing list!`;
            messageDiv.style.color = '#38a169'; // Green for success
            emailInput.value = ''; // Clear the input
        }
    });
});

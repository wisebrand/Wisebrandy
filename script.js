// Wait until the entire HTML document is loaded
document.addEventListener('DOMContentLoaded', function() {
    // 1. Get references to the form and the message area
    const loginForm = document.getElementById('login-form');
    const messageElement = document.getElementById('message');

    // 2. Define the correct, secret credentials
    const CORRECT_USERNAME = 'learner';
    const CORRECT_PASSWORD = 'password123';

    // 3. Add an event listener to handle the form submission
    loginForm.addEventListener('submit', function(event) {
        // Prevent the default form submission (which would reload the page)
        event.preventDefault();

        // Get the values from the input fields
        const usernameInput = document.getElementById('username').value;
        const passwordInput = document.getElementById('password').value;

        // Reset the message area
        messageElement.classList.add('hidden');
        messageElement.textContent = '';
        messageElement.style.backgroundColor = '';

        // 4. Check if the entered credentials match the correct ones
        if (usernameInput === CORRECT_USERNAME && passwordInput === CORRECT_PASSWORD) {
            // Success case
            messageElement.textContent = 'Login Successful! Welcome, ' + usernameInput + '.';
            messageElement.style.backgroundColor = '#d4edda'; // Light green background
            messageElement.style.color = '#155724'; // Dark green text
        } else {
            // Failure case
            messageElement.textContent = 'Invalid Username or Password. Try again.';
            messageElement.style.backgroundColor = '#f8d7da'; // Light red background
            messageElement.style.color = '#721c24'; // Dark red text
        }
        
        // Show the message
        messageElement.classList.remove('hidden');
    });
});
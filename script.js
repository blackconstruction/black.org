var loader =document .getElementById("tyuio");

window.addEventListener("load", function(){
    loader.style.display = "none";
})
document.addEventListener('DOMContentLoaded', function() {
    var counter = 0;
    var counterDisplay = document.getElementById('counter');
    var upArrow = document.querySelector('.up-arrow');
    var downArrow = document.querySelector('.down-arrow');

    upArrow.addEventListener('click', function() {
        counter++;
        counterDisplay.textContent = counter;
    });

    downArrow.addEventListener('click', function() {
        counter--;
        counterDisplay.textContent = counter;
    });
});
const modeSwitch = document.getElementById('modeSwitch');

modeSwitch.addEventListener('change', () => {
    if (modeSwitch.checked) {
        document.body.classList.add('dark-mode');
    } else {
        document.body.classList.remove('dark-mode');
    }
});


// Dummy user data
let users = [];

// Function to handle user login
function login() {
    const username = document.getElementById('loginUsername').value;
    const password = document.getElementById('loginPassword').value;

    // Check if user exists
    const user = users.find(u => u.username === username && u.password === password);

    if (user) {
        // Successful login
        document.getElementById('loginMessage').innerText = 'Login Successful!';
    } else {
        // Invalid credentials
        document.getElementById('loginMessage').innerText = 'Invalid username or password.';
    }
}

// Function to handle user signup
function signup() {
    const username = document.getElementById('signupUsername').value;
    const password = document.getElementById('signupPassword').value;

    // Check if username already exists
    const existingUser = users.find(u => u.username === username);

    if (existingUser) {
        // Username already taken
        document.getElementById('signupMessage').innerText = 'Username already exists.';
    } else {
        // Add new user
        users.push({ username, password });
        document.getElementById('signupMessage').innerText = 'Signup Successful!';
    }
}

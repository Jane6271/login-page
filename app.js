

document.addEventListener('DOMContentLoaded', function () {
    // Form submission handler
    document.getElementById('loginForm').addEventListener('submit', function (e) {
        e.preventDefault();

        // Get form data
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;
        const username = document.getElementById('username').value;
        const rememberMe = document.getElementById('remember').checked;

        // Show alert with submitted data
        alert(`Thank you for signing up!\n\nEmail: ${email}\nUsername: ${username}\nRemember me: ${rememberMe ? 'Yes' : 'No'}`);

        // Store form data in localStorage
        localStorage.setItem('authData', JSON.stringify({
            email: email,
            username: username,
            rememberMe: rememberMe
        }));

        // Transition to profile page
        showProfilePage();
    });

    // Back button handler
    document.getElementById('backBtn').addEventListener('click', function () {
        document.getElementById('loginPage').classList.remove('hidden');
        document.getElementById('loginPage').classList.add('active');

        document.getElementById('profilePage').classList.add('hidden');
        document.getElementById('profilePage').classList.remove('active');
    });

    // Function to show profile page with user data
    function showProfilePage() {
        // Get stored data
        const authData = JSON.parse(localStorage.getItem('authData'));

        if (!authData) {
            alert('No user data found!');
            return;
        }

        // Populate profile fields
        document.getElementById('profileEmail').textContent = authData.email;
        document.getElementById('profileUsername').textContent = authData.username;
        document.getElementById('profileUsernameFull').textContent = authData.username;

        // Show profile page
        document.getElementById('loginPage').classList.add('hidden');
        document.getElementById('loginPage').classList.remove('active');

        document.getElementById('profilePage').classList.remove('hidden');
        document.getElementById('profilePage').classList.add('active');
    }
});

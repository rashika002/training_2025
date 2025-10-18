// Handle login form submission
document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    if (username === 'user' && password === 'pass') {
        localStorage.setItem('loggedIn', 'true');
        window.location.href = 'products.html';
    } else {
        alert('Invalid credentials');
    }
});
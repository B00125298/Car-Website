// frontend/js/login.js
document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.getElementById('login-form');
  
    loginForm.addEventListener('submit', function(event) {
      event.preventDefault();
  
      const formData = new FormData(loginForm);
      const email = formData.get('email');
      const password = formData.get('password');
  
      fetch('/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email, password })
      })
      .then(response => {
        if (!response.ok) {
          throw new Error('Invalid email or password');
        }
        alert('Login successful');
        window.location.href = '/'; // Redirect to homepage after successful login
      })
      .catch(error => {
        console.error('Login error:', error);
        alert('Invalid email or password');
      });
    });
  });
  
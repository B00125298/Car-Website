// frontend/js/signup.js
document.addEventListener('DOMContentLoaded', function() {
    const signupForm = document.getElementById('signup-form');
  
    signupForm.addEventListener('submit', function(event) {
      event.preventDefault();
  
      const formData = new FormData(signupForm);
      const username = formData.get('username');
      const email = formData.get('email');
      const password = formData.get('password');
  
      fetch('/auth/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ username, email, password })
      })
      .then(response => {
        if (!response.ok) {
          throw new Error('Failed to sign up');
        }
        alert('Sign up successful');
        window.location.href = '/login'; // Redirect to login page after successful signup
      })
      .catch(error => {
        console.error('Sign up error:', error);
        alert('Failed to sign up');
      });
    });
  });
  
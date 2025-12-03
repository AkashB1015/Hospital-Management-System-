// Toggle panels for sign in / sign up
const container = document.getElementById('container');
const registerBtn = document.getElementById('register');
const loginBtn = document.getElementById('login');

if (registerBtn) {
  registerBtn.addEventListener('click', () => {
    container.classList.add('right-panel-active');
  });
}
if (loginBtn) {
  loginBtn.addEventListener('click', () => {
    container.classList.remove('right-panel-active');
  });
}

// Patient Sign In
const signInForm = document.querySelector('.form-container:not(.sign-up) form');
if (signInForm) {
  signInForm.addEventListener('submit', (e) => {
    e.preventDefault();
    let email = signInForm.querySelector('input[type="email"]').value;
    let password = signInForm.querySelector('input[type="password"]').value;
    if (email.includes('@') && password) {
      localStorage.setItem('loggedInEmail', email);
      window.location.href = '../Dashboard/Patient.html';
    } else {
      alert('Enter valid email and password.');
    }
  });
}

// Patient Sign Up
const signUpForm = document.querySelector('.sign-up form');
if (signUpForm) {
  signUpForm.addEventListener('submit', (e) => {
    e.preventDefault();
    let name = signUpForm.querySelector('input[placeholder="Full Name"]').value;
    let email = signUpForm.querySelector('input[type="email"]').value;
    let age = signUpForm.querySelector('input[placeholder="Age"]').value;
    let password = signUpForm.querySelector('input[type="password"]').value;
    if (name && email && age && password) {
      localStorage.setItem('loggedInEmail', email);
      alert(`Registration successful for ${name}!`);
      window.location.href = '../Dashboard/Patient.html';
    } else {
      alert('Fill all registration fields correctly.');
    }
  });
}

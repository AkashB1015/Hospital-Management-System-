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

const forgotLink = document.querySelector('.forgot');
const modal = document.getElementById('forgotModal');
const closeBtn = document.querySelector('.close');
const resetForm = document.getElementById('resetForm');

forgotLink.addEventListener('click', (e) => {
  e.preventDefault();
  modal.classList.add('active');
});

closeBtn.addEventListener('click', () => {
  modal.classList.remove('active');
});

resetForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const email = resetForm.querySelector('input[type="email"]').value;

  alert(`Password reset link sent to ${email}`);
  modal.classList.remove('active');
  resetForm.reset();
});

window.addEventListener('click', (e) => {
  if (e.target === modal) {
    modal.classList.remove('active');
  }
});

const signInForm = document.querySelector('.form-container:not(.sign-up) form');
if (signInForm) {
  signInForm.addEventListener('submit', (e) => {
    e.preventDefault();
    let email = signInForm.querySelector('input[type="email"]').value;
    let password = signInForm.querySelector('input[type="password"]').value;
    if (email.includes('@') && password) {
      localStorage.setItem('loggedInEmail', email);
      window.location.href = '../Dashboard/Admin.html';
    } else {
      alert('Enter valid email and password.');
    }
  });
}

const signUpForm = document.querySelector('.sign-up form');
if (signUpForm) {
  signUpForm.addEventListener('submit', (e) => {
    e.preventDefault();
    let name = signUpForm.querySelector('input[placeholder="Full Name"]').value;
    let email = signUpForm.querySelector('input[type="email"]').value;
    let specialization = signUpForm.querySelector(
      'input[placeholder="Specialization"]'
    ).value;
    let password = signUpForm.querySelector('input[type="password"]').value;
    if (name && email && specialization && password) {
      localStorage.setItem('loggedInEmail', email);
      alert(`Registration successful for ${name}!`);
      window.location.href = '../Dashboard/Admin.html';
    } else {
      alert('Fill all registration fields correctly.');
    }
  });
}

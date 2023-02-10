let loginForm = document.querySelector('.login-wrap');
let signupForm = document.querySelector('.signup-wrap');
let title = document.querySelector('title');

let signupToggleBtn = document.querySelector('#toggle-signup');
let loginToggleBtn = document.querySelector('#toggle-login');

signupToggleBtn.onclick = () => {
    loginForm.classList.remove('lactive');
    signupForm.classList.add('lactive');
    title.textContent = 'Signup form';
}

loginToggleBtn.onclick = () => {
    signupForm.classList.remove('lactive');
    loginForm.classList.add('lactive');
    title.textContent = 'Login form';
}
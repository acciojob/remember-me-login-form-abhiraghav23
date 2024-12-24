const loginForm = document.getElementById('loginForm');
const submitButton = document.getElementById('submit');
const existingButton = document.getElementById('existing');
const usernameInput = document.getElementById('username');
const passwordInput = document.getElementById('password');
const rememberMeCheckbox = document.getElementById('checkbox');

function handleFormSubmit() {
    const username = usernameInput.value;
    const password = passwordInput.value;
    const rememberMe = rememberMeCheckbox.checked;

    if (rememberMe) {
        localStorage.setItem('username', username);
        localStorage.setItem('password', password);
    } else {
        localStorage.removeItem('username');
        localStorage.removeItem('password');
    }

    alert(`Logged in as ${username}`);
}

function checkExistingUser() {
    const savedUsername = localStorage.getItem('username');
    if (savedUsername) {
        existingButton.style.display = 'block';
    }
}

function handleExistingUserLogin() {
    const savedUsername = localStorage.getItem('username');
    alert(`Logged in as ${savedUsername}`);
}

submitButton.addEventListener('click', handleFormSubmit);

existingButton.addEventListener('click', handleExistingUserLogin);

checkExistingUser();

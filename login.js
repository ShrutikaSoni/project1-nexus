document.addEventListener('DOMContentLoaded', function () {
    const loginButton = document.querySelector('#loginButton');
    loginButton.addEventListener('click', () => {
        const loginUsername = document.querySelector('#loginUsername').value;
        const loginPassword = document.querySelector('#loginPassword').value;
        const errorMessage = document.querySelector('#errorMessage');
        if (loginUsername === '' || loginPassword === '') {
            errorMessage.textContent = 'Please fill all the fields.';
        } else if (loginUsername.length < 5) {
            errorMessage.textContent = 'Username must be at least 5 characters.';
        } else if (loginPassword.length < 8) {
            errorMessage.textContent = 'Password must be at least 8 characters.';
        } else {
            errorMessage.textContent = 'Login Successfull';
        }
    });
});

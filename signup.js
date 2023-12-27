document.addEventListener('DOMContentLoaded', function () {
    const signupButton = document.querySelector('#signupButton');
    signupButton.addEventListener('click', () => {
        const signupUsername = document.querySelector('#signupUsername').value;
        const signupPassword = document.querySelector('#signupPassword').value;
        const errorMessage = document.querySelector('#errorMessage');

        if (signupUsername === '' || signupPassword === '') {
            errorMessage.textContent = 'Please fill all the fields.';
        } else if (signupUsername.length < 5) {
            errorMessage.textContent = 'Username must be at least 5 characters.';
        } else if (signupPassword.length < 8) {
            errorMessage.textContent = 'Password must be at least 8 characters.';
        } else {
            errorMessage.textContent = 'Signup Successfull';
        }
    });
});

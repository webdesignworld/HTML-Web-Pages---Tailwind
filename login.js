document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); 
   
    let isValid = true;

    const email = document.getElementById('email');
    const emailError = document.getElementById('emailError');
    if (email.value.trim() === '') {
        email.classList.add('input-error');
        emailError.style.display = 'block';
        isValid = false;
    } else {
        email.classList.remove('input-error');
        emailError.style.display = 'none';
    }

    const password = document.getElementById('password');
    const passwordError = document.getElementById('passwordError');
    if (password.value.trim() === '') {
        password.classList.add('input-error');
        passwordError.style.display = 'block';
        isValid = false;
    } else {
        password.classList.remove('input-error');
        passwordError.style.display = 'none';
    }

    if (isValid) {
        Swal.fire({                 
            text: 'Thank you for reaching out!',
            icon: 'success',
            confirmButtonText: 'OK'
        });
    }
});

const inputs = document.querySelectorAll('input');
inputs.forEach(input => {
    input.addEventListener('focus', function() {
        this.classList.remove('input-error');
        const errorElement = this.nextElementSibling;
        if (errorElement && errorElement.classList.contains('error')) {
            errorElement.style.display = 'none';
        }
    });
});

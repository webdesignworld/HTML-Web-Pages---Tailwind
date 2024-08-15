document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); 

    let isValid = true;

 
    const name = document.getElementById('name');
    const nameError = document.getElementById('nameError');
    if (name.value.trim() === '') {
        name.classList.add('input-error');
        nameError.style.display = 'block';
        isValid = false;
    } else {
        name.classList.remove('input-error');
        nameError.style.display = 'none';
    }

    
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


    const message = document.getElementById('message');
    const messageError = document.getElementById('messageError');
    if (message.value.trim() === '') {
        message.classList.add('input-error');
        messageError.style.display = 'block';
        isValid = false;
    } else {
        message.classList.remove('input-error');
        messageError.style.display = 'none';
    }

 
    if (isValid) {
        Swal.fire({                 
            text: 'Thank you for reaching out!',
            icon: 'success',
            confirmButtonText: 'OK'
        });
     
        document.getElementById('contactForm').reset();
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

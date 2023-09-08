document.addEventListener('DOMContentLoaded', function() {
    const passwordInput = document.querySelector('#password');
    const passwordError = document.querySelector('#password-error');
    
    passwordInput.addEventListener('input', function() {
        const password = passwordInput.value;
        
        if (validatePassword(password)) {
            passwordError.textContent = '';
        } else {
            passwordError.textContent = 'Password must be at least 6 characters long and contain both letters and numbers.';
        }
    });
    
    function validatePassword(password) {
        // Minimum length of 6 characters
        if (password.length < 6) {
            return false;
        }
        
        // Check for at least one letter and one number
        const hasLetter = /[a-zA-Z]/.test(password);
        const hasNumber = /\d/.test(password);
        
        return hasLetter && hasNumber;
    }
});

//Email Validation
document.addEventListener('DOMContentLoaded', function() {
    const emailInput = document.getElementById('email');
    const emailError = document.getElementById('email-error');

    emailInput.addEventListener('input', function() {
        const email = emailInput.value;

        if (validateEmail(email)) {
            emailError.textContent = '';
        } else {
            emailError.textContent = 'Please enter a valid email address.';
        }
    });

    function validateEmail(email) {
        // Basic email validation using a regular expression
        const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
        return emailPattern.test(email);
    }
});

// Function to display the current date
function displayDate() {
    const dateDisplay = document.getElementById('date-display');
    const currentDate = new Date();

    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    const formattedDate = currentDate.toLocaleDateString('en-US', options);

    dateDisplay.textContent = `${formattedDate}`;
}

// Update the date on page load
displayDate();

// Optionally, update the date every second (or as needed)
setInterval(displayDate, 1000);

//Slideshow automation
let slideIndex = 0;

function showSlides() {
    const slides = document.getElementsByClassName('slideshow-image');
    
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = 'none';
    }
    
    slideIndex++;
    
    if (slideIndex > slides.length) {
        slideIndex = 1;
    }
    
    slides[slideIndex - 1].style.display = 'block';
    
    setTimeout(showSlides, 3000); // Change slide every 3 seconds (adjust as needed)
}

document.addEventListener('DOMContentLoaded', function() {
    showSlides(); // Start the slideshow
});


// Function to change the background color of the navigation bar on scroll
function changeNavbarColorOnScroll() {
    const navbar = document.getElementById('navbar');

    window.addEventListener('scroll', function() {
        if (window.scrollY > 100) { // Adjust the scroll threshold as needed
            navbar.style.backgroundColor = '#333'; // Change to the desired background color
        } else {
            navbar.style.backgroundColor = 'transparent'; // Back to transparent when scrolling up
        }
    });
}

// Call the function to initiate the color change on scroll
changeNavbarColorOnScroll();

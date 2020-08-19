// For the nav bar transition

const navSlider = () => {
    const burger = document.querySelector('.burger');
    const navBar = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');

    // Toggle nav
    burger.addEventListener('click', () => {
        // Add class nav-active to the burger, reverts translate
        navBar.classList.toggle('nav-active');

        // Animate Links
        navLinks.forEach((link, index) => {
            if (link.style.animation) {
                link.style.animation = '';
            } else {
                link.style.animation = `navAnimation 0.5s ease forwards 
                                    ${index / 7 + 0.26}s`;
            }  
        });

        // Burger animations
        burger.classList.toggle('b-transform');
    });
}

// For calling all the functions
const app = () => {
    navSlider();
}

app();
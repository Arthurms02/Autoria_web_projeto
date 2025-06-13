document.addEventListener('DOMContentLoaded', () => {
    const hamburgerMenu = document.querySelector('.menu-hamburguer');
    const navLinks = document.querySelector('.nav-menu');

        hamburgerMenu.addEventListener('click', () => {
            navLinks.classList.toggle('active');
            hamburgerMenu.classList.toggle('active');
            });
        });

        navLinks.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('active');
            hamburgerMenu.classList.remove('active');
        });
    });

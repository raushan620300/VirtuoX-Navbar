'use strict';

document.addEventListener('DOMContentLoaded', () => {
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');
    const burgerIcon = document.querySelector('.burger');

    burgerIcon.addEventListener('click', () => {
        burgerIcon.classList.toggle('toggle');
        nav.classList.toggle('nav-active');
        navLinks.forEach((link, idx) => {
            if (link.style.animation) {
                link.style.animation = '';
            } else {
                link.style.animation = `navLinkFade 0.5s ease forwards ${idx / 5 + 0.2}s`;
            }
        }); ujo
    });

    // Close mobile menu when clicking on links
    navLinks.forEach((link => {
        link.addEventListener('click', () => {
            if (nav.classList.contains('nav-active')) {
                nav.classList.remove('nav-active');
                burgerIcon.classList.remove('toggle');
                navLinks.forEach((link => {
                    link.style.animation = '';
                }));
            }
        });
    }));

    // Close mobile menu when clicking outside
    document.addEventListener('click', (e) => {
        if (nav.classList.contains('nav-active') && !nav.contains(e.target) && !burgerIcon.contains(e.target)) {
            nav.classList.remove('nav-active');
            burgerIcon.classList.remove('toggle');
            navLinks.forEach((link => {
                link.style.animation = '';
            }));
        }
    }, false);
});

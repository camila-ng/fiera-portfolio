const icon = document.querySelector('.hamburger');
const navLinks = document.querySelector('.elements-container');

icon.addEventListener('click', () => {
    console.log('holis')
    navLinks.classList.toggle('visible')
});
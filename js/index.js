const icon = document.querySelector('.hamburger');
const navLinks = document.querySelector('.elements-container');


icon.addEventListener('click', () => {
    console.log('holis')
    navLinks.classList.toggle('visible')
});

window.sr = ScrollReveal();
  sr.reveal('.middle-content',{
    duration: 3000,
    origin: 'bottom',
    distance: '-100px'
  });


  window.sr = ScrollReveal();
  sr.reveal('.bottom-images',{
    duration: 1000,
    origin: 'bottom',
    distance: '-50px'
  });
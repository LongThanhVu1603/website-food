//Sricky

window.addEventListener('scroll', function(){
    const header = this.document.querySelector('header');
    header.classList.toggle("sticky",window.scrollY > 0);
});

// Toggle

function menuToggle(){
    const menuToggle = document.querySelector('.menuToggle');
    menuToggle.classList.toggle('active');
    const nav = document.querySelector('.nav');
    nav.classList.toggle('active');
}
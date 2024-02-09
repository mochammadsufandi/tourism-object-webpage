const menu = document.querySelector('.hamburger-menu');
const navbar = document.querySelector('.navbar');

// Active and Close Sidebar menu for Navbar using hamburger menu
menu.addEventListener('click',() => {
    navbar.classList.toggle('active')
})

// Closing Sidebar Menu For Navbar using any click (except hamburger menu)
document.addEventListener('click',(ev) => {
    if (!menu.contains(ev.target) && !navbar.contains(ev.target)) {
        navbar.classList.remove('active');
    }
})


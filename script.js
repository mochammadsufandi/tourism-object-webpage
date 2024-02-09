const menu = document.querySelector('.hamburger-menu');
const navbar = document.querySelector('.navbar');
const themeSwitch = document.getElementById('theme-switch');
const body = document.querySelector('body');
const spanFeather = document.getElementById('span-feather');
const mainContainer = document.querySelector('.main-container');
const contentBox = document.querySelectorAll('.content');
const date = document.querySelectorAll('.date');
const writer = document.querySelectorAll('.writer');

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

// Active and De-active dark-theme 
themeSwitch.addEventListener('click', () => {
    if (themeSwitch.checked === false) {
        body.classList.add('bg-dark');
        spanFeather.classList.add('dark-feather');
        mainContainer.classList.add('dark-main-container');
        for (let i=0; i<contentBox.length; i++) {
            const h2 = contentBox[i].querySelector('h2');
            const p = contentBox[i].querySelector('.content-paragraph');
            contentBox[i].classList.add('bg-content');
            h2.classList.add('dark-text');
            date[i].classList.add('dark-text-date');
            writer[i].classList.add('dark-text-date');
            p.classList.add('dark-text');
        }
        
    } else {
        body.classList.remove('bg-dark');
        spanFeather.classList.remove('dark-feather');
        mainContainer.classList.remove('dark-main-container');
        for (let i=0; i<contentBox.length; i++) {
            const h2 = contentBox[i].querySelector('h2');
            const p = contentBox[i].querySelector('.content-paragraph');
            contentBox[i].classList.remove('bg-content');
            h2.classList.remove('dark-text');
            date[i].classList.remove('dark-text');
            writer[i].classList.remove('dark-text-date');
            p.classList.remove('dark-text');
        }

    }
})


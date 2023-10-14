document.addEventListener('DOMContentLoaded', function () {
// Simulate a 2-second loading period
const progressBar = document.querySelector('.progress-bar');
setTimeout(function () {
    progressBar.style.width = '100%';
    progressBar.addEventListener('transitionend', function () {
        const loadingScreen = document.querySelector('.loading-screen');
        loadingScreen.style.opacity = 0;
        loadingScreen.addEventListener('transitionend', function () {
            loadingScreen.style.display = 'none';
        }, { once: true });
    }, { once: true });
}, 90); // Adjust the duration as needed
    
    
    
    const menuToggle = document.getElementById('menu-toggle');
    const mainMenu = document.getElementById('main-menu');
    const siteTitle = document.querySelector('.site-title');

    menuToggle.addEventListener('click', function (event) {
        event.stopPropagation();
        mainMenu.classList.toggle('active');
    });

    if (document.title === 'Home | Studio Orbyq') {
        siteTitle.style.display = 'none';
    }

    const imageContainers = document.querySelectorAll('.image-container');

    imageContainers.forEach((container) => {
        container.addEventListener('mouseenter', () => {
            const img = container.querySelector('.image-zoom');
            if (img) {
                img.style.transform = 'scale(1.15)';
            }
        });

        container.addEventListener('mouseleave', () => {
            const img = container.querySelector('.image-zoom');
            if (img) {
                img.style.transform = 'scale(1)';
            }
        });
    });

    document.addEventListener('click', function (event) {
        if (!event.target.closest('#main-menu')) {
            mainMenu.classList.remove('active');
        }
    });

    const currentHeaderText = document.querySelector('.site-title');
    const menuItems = document.querySelectorAll('.main-menu ul li');
    const currentPage = window.location.pathname;

    menuItems.forEach((item) => {
        const anchor = item.querySelector('a');
        if (anchor.textContent === currentHeaderText.textContent) {
            anchor.classList.add('active');
            item.style.backgroundImage = `url('../images/icons/header/svg/${anchor.textContent.toLowerCase()}/${anchor.textContent.toLowerCase()}-active.svg')`;
        } else if (anchor.textContent === 'Home' && currentPage.includes('index.html')) {
            anchor.classList.add('active');
            item.style.backgroundImage = `url('../images/icons/header/svg/home/home-active.svg')`;
        } else if (anchor.textContent === 'Projects' && currentPage.includes('projects.html')) {
            anchor.classList.add('active');
            item.style.backgroundImage = `url('../images/icons/header/svg/projects/projects-active.svg')`;
        } else if (anchor.textContent === 'About' && currentPage.includes('about.html')) {
            anchor.classList.add('active');
            item.style.backgroundImage = `url('../images/icons/header/svg/about/about-active.svg')`;
        } else if (anchor.textContent === 'Contact' && currentPage.includes('contact.html')) {
            anchor.classList.add('active');
            item.style.backgroundImage = `url('../images/icons/header/svg/contact/contact-active.svg')`;
        }
    });

});
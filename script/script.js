document.addEventListener('DOMContentLoaded', function () {
    const menuToggle = document.getElementById('menu-toggle');
    const mainMenu = document.getElementById('main-menu');
    const siteTitle = document.querySelector('.site-title');

    menuToggle.addEventListener('click', function () {
        mainMenu.classList.toggle('active');
    });

    // Check if the current page's title is 'Home | Studio Orbyq' and hide the site title if true
    if (document.title === 'Home | Studio Orbyq') {
        siteTitle.style.display = 'none';
    }
});

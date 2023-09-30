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

    const imageContainers = document.querySelectorAll('.image-container');

    imageContainers.forEach((container) => {
        container.addEventListener('mouseenter', () => {
            const img = container.querySelector('.image-zoom');
            img.style.transform = 'scale(1.2)';
        });

        container.addEventListener('mouseleave', () => {
            const img = container.querySelector('.image-zoom');
            img.style.transform = 'scale(1)';
        });
    });
});

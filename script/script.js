document.addEventListener('DOMContentLoaded', function () {
    const menuToggle = document.getElementById('menu-toggle');
    const mainMenu = document.getElementById('main-menu');
    const siteTitle = document.querySelector('.site-title');

    menuToggle.addEventListener('click', function (event) {
        event.stopPropagation(); // Prevent the click event from propagating to document
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

    // Add a click event listener to the document to close the menu when clicking outside
    document.addEventListener('click', function (event) {
        if (!event.target.closest('#main-menu')) {
            // Check if the clicked element or any of its ancestors is not part of the menu
            mainMenu.classList.remove('active'); // Close the menu
        }
    });
});

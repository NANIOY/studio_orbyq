document.addEventListener('DOMContentLoaded', function () {
    const projectImageLinks = document.querySelectorAll('.project-image');
    const rightButton = document.querySelector('.right');
    const leftButton = document.querySelector('.left');
    const bulletDivs = document.querySelectorAll('.bullet');
    const classNames = ['first-image', 'second-image', 'third-image'];
    let rotationInterval;
    let currentIndex = 0;
    let touchStartX = 0;
    let touchEndX = 0;

    updateBulletActive(currentIndex);
    updateProjectName(classNames[currentIndex]);
    updateImage();

    rightButton.addEventListener('click', function () {
        currentIndex = (currentIndex + 1) % classNames.length;
        updateImage();
        updateLink();
        updateProjectName(classNames[currentIndex]);
    });

    leftButton.addEventListener('click', function () {
        currentIndex = (currentIndex - 1 + classNames.length) % classNames.length;
        updateImage();
        updateLink();
        updateProjectName(classNames[currentIndex]);
    });

    bulletDivs.forEach((bullet, index) => {
        bullet.addEventListener('click', function () {
            currentIndex = index;
            updateImage();
            updateLink();
            updateProjectName(classNames[currentIndex]);
        });
    });

    projectImageLinks.forEach((projectImageLink) => {
        projectImageLink.addEventListener('touchstart', function (event) {
            touchStartX = event.touches[0].clientX;
        });

        projectImageLink.addEventListener('touchend', function (event) {
            touchEndX = event.changedTouches[0].clientX;
            handleSwipe();
        });
    });

    function handleSwipe() {
        const minSwipeDistance = 50;
        const swipeDistance = touchEndX - touchStartX;

        if (swipeDistance > minSwipeDistance) {
            currentIndex = (currentIndex - 1 + classNames.length) % classNames.length;
        } else if (swipeDistance < -minSwipeDistance) {
            currentIndex = (currentIndex + 1) % classNames.length;
        }

        updateImage();
        updateLink();
        updateProjectName(classNames[currentIndex]);
    }

    function updateImage() {
        const projectImages = document.querySelectorAll('.project-image');

        // Fade out all images
        projectImages.forEach((image) => {
            image.classList.add('fade-out');
        });

        // Set the new active image
        const newImage = projectImages[currentIndex];
        newImage.classList.add('fade-in');
        newImage.classList.remove('fade-out');

        // Reset opacity for other images
        projectImages.forEach((image, index) => {
            if (index !== currentIndex) {
                image.classList.remove('fade-in');
                image.classList.add('fade-out');
            }
        });

        updateBulletActive(currentIndex);
    }

    function updateBulletActive(index) {
        bulletDivs.forEach((bullet, i) => {
            if (i === index) {
                bullet.classList.add('bullet-active');
            } else {
                bullet.classList.remove('bullet-active');
            }
        });
    }

    // Function to pause the image rotation
    function pauseRotation() {
        clearInterval(rotationInterval);
    }

    // Add event listeners to the project image
    projectImageLinks.forEach((projectImageLink) => {
        projectImageLink.addEventListener('mouseenter', function () {
            pauseRotation();
        });

        projectImageLink.addEventListener('mouseleave', function () {
            startRotation();
        });
    });

    // Add event listeners to the pagination container
    const paginationContainer = document.querySelector('.pagination');
    paginationContainer.addEventListener('mouseenter', function () {
        pauseRotation();
    });

    paginationContainer.addEventListener('mouseleave', function () {
        startRotation();
    });

    // Start the initial rotation
    startRotation();

    // Function to start the image rotation
    function startRotation() {
        rotationInterval = setInterval(function () {
            currentIndex = (currentIndex + 1) % classNames.length;
            updateImage();
            updateLink();
            updateProjectName(classNames[currentIndex]);
        }, 5000);
    }

    function updateLink() {
        const currentImageLink = [
            'https://studio-orbyq.com/projects/ixpo/',
            'https://studio-orbyq.com/projects/copoll/',
            'https://studio-orbyq.com/projects/studio-orbyq/'
        ][currentIndex];
        projectImageLinks.forEach((projectImageLink) => {
            projectImageLink.setAttribute('href', currentImageLink);
        });
    }

    function updateProjectName(className) {
        const projectNameElement = document.querySelector('.heading-title');
        if (projectNameElement) {
            if (className === 'first-image') {
                projectNameElement.textContent = 'ixpo';
            } else if (className === 'second-image') {
                projectNameElement.textContent = 'copoll';
            } else if (className === 'third-image') {
                projectNameElement.textContent = 'Studio Orbyq';
            }
            toggleThirdChild(className);
        }
    }

    function toggleThirdChild(className) {
        const ulElement = document.querySelector('.icon-list-items');
        const thirdChild = ulElement.children[2];

        if (className === 'second-image' || className === 'third-image') {
            thirdChild.style.display = 'none';
        } else {
            thirdChild.style.display = '';
        }
    }
});

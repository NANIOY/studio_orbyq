document.addEventListener('DOMContentLoaded', function () {
    // Create the loading screen container
    const loadingScreen = document.createElement('div');
    loadingScreen.classList.add('loading-screen');
    document.body.appendChild(loadingScreen);

    // Create the loading content container
    const loadingContent = document.createElement('div');
    loadingContent.classList.add('loading-content');
    loadingScreen.appendChild(loadingContent);

    // Create the logo container
    const loadingLogo = document.createElement('div');
    loadingLogo.classList.add('loading-logo');
    loadingContent.appendChild(loadingLogo);

    const logoImage = document.createElement('img');
    logoImage.src = '../images/logo/monochrome-white.webp';
    logoImage.alt = 'Studio Orbyq Logo';
    loadingLogo.appendChild(logoImage);

    // Create the loader container
    const loader = document.createElement('div');
    loader.classList.add('loader');
    loadingContent.appendChild(loader);

    const progressBar = document.createElement('div');
    progressBar.classList.add('progress-bar');
    loader.appendChild(progressBar);

    // Style modifications
    loadingLogo.style.position = 'absolute';
    loadingLogo.style.top = '50%';
    loadingLogo.style.left = '50%';
    loadingLogo.style.transform = 'translate(-50%, -50%)';
    loadingLogo.style.zIndex = '10000';

    logoImage.style.width = '20%';
    logoImage.style.height = 'auto';
    logoImage.style.display = 'block';
    logoImage.style.margin = '-112px auto 0 auto';

    loader.style.width = '1000px';
    loader.style.height = '20px';
    loader.style.border = '2px solid #07F52C';
    loader.style.borderRadius = '2px';

    progressBar.style.width = '0';
    progressBar.style.height = '100%';
    progressBar.style.backgroundColor = '#07F52C';
    progressBar.style.borderRadius = '2px';
    progressBar.style.position = 'absolute';
    progressBar.style.top = '0';
    progressBar.style.left = '0';
    progressBar.style.transition = 'width 1s';

    // Simulate a loading period and hide the loading screen
    setTimeout(function () {
        progressBar.style.width = '100%';
        progressBar.addEventListener('transitionend', function () {
            loadingScreen.style.opacity = 0;
            loadingScreen.addEventListener('transitionend', function () {
                loadingScreen.style.display = 'none';
            }, { once: true });
        }, { once: true });
    }, 50);
});

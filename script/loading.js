document.addEventListener('DOMContentLoaded', function () {
    // Create the loading screen container
    const loadingScreen = document.createElement('div');
    loadingScreen.classList.add('loading-screen');
    document.body.appendChild(loadingScreen);

    // Simulate a loading period and hide the loading screen
    setTimeout(function () {
        loadingScreen.style.opacity = 0; // Start the fade-out effect
        loadingScreen.addEventListener('transitionend', function () {
            loadingScreen.style.display = 'none'; // Hide the loading screen after the transition
        }, { once: true });
    }, 0);
});

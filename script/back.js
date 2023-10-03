document.addEventListener('DOMContentLoaded', function() {
    // Find the back button element by its class
    const backButton = document.querySelector('.back-button');

    // Check if the back button element exists
    if (backButton) {
        // Add a click event listener to the back button
        backButton.addEventListener('click', function() {
            // Go back in the browser's history
            history.back();
        });
    }
});

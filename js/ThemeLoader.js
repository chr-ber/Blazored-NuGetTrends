(function () {

    const lightBackground = 'rgb(255,255,255)';
    const darkBackground = 'rgba(26,26,39,1)';

    var userSettingsJson = localStorage.getItem('UserSettings');
    var loadingScreen = document.getElementById('loading-screen');

    if (!loadingScreen) {
        return;
    }

    if (userSettingsJson) {
        var userSettings = JSON.parse(userSettingsJson);
        var isDark = userSettings.UseDarkMode;

        if (isDark === true) {
            // Dark mode
            loadingScreen.style.backgroundColor = darkBackground;
        } else if (isDark === false) {
            // Light mode
            loadingScreen.style.backgroundColor = lightBackground;
        }
    } else {
        var prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
        loadingScreen.style.backgroundColor = prefersDark ? darkBackground : lightBackground;
    }

})();

// Get the theme switch button and HTML element for the theme
const themeSwitcher = document.getElementById('themeSwitcher');
const htmlElement = document.documentElement;

// Check if there's a saved theme in localStorage
const savedTheme = localStorage.getItem('theme');

// Apply the saved theme if it exists
if (savedTheme) {
    htmlElement.setAttribute('data-theme', savedTheme);
}

// Add event listener to toggle themes
themeSwitcher.addEventListener('click', () => {
    let currentTheme = htmlElement.getAttribute('data-theme');
    if (currentTheme === 'white') {
        htmlElement.setAttribute('data-theme', 'black');
        localStorage.setItem('theme', 'black'); // Save the theme
    } else {
        htmlElement.setAttribute('data-theme', 'white');
        localStorage.setItem('theme', 'white'); // Save the theme
    }
});

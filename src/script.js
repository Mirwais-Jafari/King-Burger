// Get the necessary elements
const toggleButton = document.getElementById('toggleButton');
const menuIcon = document.getElementById('menuIcon');
const menuContent = document.getElementById('menuContent');
const toggleMenu = document.getElementById('toggleMenu');
const menuItems = document.getElementById('menuItems');
const toggleLanguage = document.getElementById('toggleLanguage');
const languages = document.getElementById('languages');
const toggleLocation = document.getElementById('toggleLocation');
const countries = document.getElementById('countries');

// Add event listeners for button clicks
toggleButton.addEventListener('click', () => {
  menuContent.classList.toggle('hidden');
});

// Add event listener for toggleMenu click
toggleMenu.addEventListener('click', () => {
  menuItems.classList.toggle('hidden');
});

toggleLanguage.addEventListener('click', () => {
  languages.classList.toggle('hidden');
});

countries.addEventListener('click', () => {
  countries.classList.toggle('hidden');
});
document.addEventListener('DOMContentLoaded', () => {
  const themeToggle = document.getElementById('theme-toggle');
  const btnPtable = document.getElementById('btn-ptable');
  const btnOrbitals = document.getElementById('btn-orbitals');

  // Track active mode state (default is dark mode)
  let isDarkMode = true;

  /**
   * Toggles the document body class and updates button text
   */
  function toggleTheme() {
    isDarkMode = !isDarkMode;

    if (isDarkMode) {
      document.body.classList.remove('light-mode');
      document.body.classList.add('dark-mode');
      themeToggle.textContent = '☀️ Light Mode';
    } else {
      document.body.classList.remove('dark-mode');
      document.body.classList.add('light-mode');
      themeToggle.textContent = '🌙 Dark Mode';
    }

    document.body.style.backgroundImage = getComputedStyle(document.body).backgroundImage;
  }

  /**
   * Opens the requested local page file in a new browser tab
   * @param {string} pageUrl - Path to HTML file
   */
  function openInNewTab(pageUrl) {
    window.open(pageUrl, '_blank');
  }

  // Event listener for theme toggle
  themeToggle.addEventListener('click', toggleTheme);

  // Event listeners for opening pages in a new tab
  btnPtable.addEventListener('click', () => {
    openInNewTab('Chemistry/Periodic Table.html');
  });

  btnOrbitals.addEventListener('click', () => {
    openInNewTab('Chemistry/Orbitals.html');
  });
});
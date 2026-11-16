// New browser tab starts in dark mode. Within the tab, navigation keeps the choice.
(() => {
  const KEY = 'mustafa-theme-tab';
  const root = document.documentElement;
  function readTheme() {
    try { return sessionStorage.getItem(KEY) === 'light' ? 'light' : 'dark'; }
    catch { return 'dark'; }
  }
  function applyTheme(theme) {
    root.setAttribute('data-bs-theme', theme);
    const icon = document.getElementById('themeIcon');
    const button = document.getElementById('themeToggle');
    if (icon) icon.className = theme === 'dark' ? 'bi bi-sun-fill' : 'bi bi-moon-fill';
    if (button) {
      const label = theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode';
      button.setAttribute('aria-label', label);
      button.setAttribute('title', label);
      button.setAttribute('aria-pressed', String(theme === 'light'));
    }
  }
  function init() {
    applyTheme(readTheme());
    const button = document.getElementById('themeToggle');
    if (button) button.addEventListener('click', () => {
      const next = root.getAttribute('data-bs-theme') === 'dark' ? 'light' : 'dark';
      try { sessionStorage.setItem(KEY, next); } catch {}
      applyTheme(next);
    });
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init);
  else init();
})();

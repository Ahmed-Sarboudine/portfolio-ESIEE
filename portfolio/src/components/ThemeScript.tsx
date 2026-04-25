// Runs before React hydration to avoid flash of wrong theme.
export function ThemeScript() {
  const script = `
    (function() {
      var saved = localStorage.getItem('portfolio-theme');
      if (saved === 'light') {
        document.documentElement.setAttribute('data-theme', 'light');
      }
    })();
  `;
  return <script dangerouslySetInnerHTML={{ __html: script }} />;
}

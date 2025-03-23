export class ThemeModeMonitor {

  public static handleChange = (e: MediaQueryListEvent) => {
    document.documentElement.setAttribute('data-bs-theme', e.matches ? 'dark' : 'light');
  };
  public static MountMonitor (): void {
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    mediaQuery.addEventListener('change', this.handleChange);
  }
  public static RemoveMonitor (): void {
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    mediaQuery.removeEventListener('change', this.handleChange);
  }
}
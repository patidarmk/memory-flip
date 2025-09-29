import * as React from 'react';
import { themes, ThemeKey } from '@/data/themes';

const useTheme = () => {
  const [theme, setTheme] = React.useState<ThemeKey>('fruits');

  React.useEffect(() => {
    const saved = localStorage.getItem('memomatch-theme');
    if (saved && themes[saved as ThemeKey]) {
      setTheme(saved as ThemeKey);
    }
  }, []);

  React.useEffect(() => {
    localStorage.setItem('memomatch-theme', theme);
  }, [theme]);

  return { theme, setTheme };
};

export { useTheme };
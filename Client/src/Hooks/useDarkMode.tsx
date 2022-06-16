import { useEffect, useState } from 'react';

function useDarkMode(): [
  {
    darkMode: boolean;
    isTransition: boolean;
  },
  () => void
] {
  const [themeMode, setThemeMode] = useState({
    darkMode: localStorage.theme === 'dark',
    isTransition: false,
  });
  const toggleDarkMode = () => {
    setThemeMode({
      darkMode: !themeMode.darkMode,
      isTransition: true,
    });
  };
  useEffect(() => {
    const html = window.document.documentElement;
    const prev = themeMode.darkMode ? 'light' : 'dark';
    html.classList.remove(prev);
    const next = themeMode.darkMode ? 'dark' : 'light';
    html.classList.add(next);
    localStorage.setItem('theme', next);
  }, [themeMode.darkMode]);
  return [themeMode, toggleDarkMode];
}

export default useDarkMode;

import { useCallback, useEffect, useState } from 'react';

type Theme = "light" | "dark";

const STORAGE_KEY = "theme";

function getInitialTheme(): Theme {
  if  (typeof document === "undefined") return "light"; 
    return document.documentElement.classList.contains("dark") ? "dark" : "light";
}

export function useTheme() {
  const [theme, setTheme] = useState<Theme>(getInitialTheme);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
  }, [theme]);

  const setDarkMode = useCallback((enable: boolean) => {
    const next: Theme = enable ? "dark" : "light";
    setTheme(next);
    try {
      localStorage.setItem(STORAGE_KEY, next);
    } catch (error) {}
  }, []);

  return { isDark: theme === "dark", setDarkMode };
}
"use client";

import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";

type Theme = "dark" | "light";

type ThemeContextValue = {
  theme: Theme;
  mounted: boolean;
  toggleTheme: () => void;
};

const ThemeContext = createContext<ThemeContextValue | null>(null);

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState<Theme>("dark");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const storedTheme = window.localStorage.getItem("portfolio-theme") as Theme | null;
    const systemPrefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const activeTheme = storedTheme ?? (systemPrefersDark ? "dark" : "light");

    setTheme(activeTheme);
    document.documentElement.dataset.theme = activeTheme;
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;

    document.documentElement.dataset.theme = theme;
    window.localStorage.setItem("portfolio-theme", theme);
  }, [mounted, theme]);

  const value = useMemo(
    () => ({
      theme,
      mounted,
      toggleTheme: () => setTheme((current) => (current === "dark" ? "light" : "dark")),
    }),
    [mounted, theme],
  );

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within ThemeProvider");
  }

  return context;
}

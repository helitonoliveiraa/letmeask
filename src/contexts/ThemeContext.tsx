import { useEffect } from 'react';
import { createContext, ReactNode, useState } from 'react';
import { ThemeProvider } from 'styled-components';

import { light, dark } from '../styles/themes/index';

type Theme = 'light' | 'dark';

export type ThemeContextType = {
  theme: Theme;
  toggleTheme: () => void;
};

type ThemeProviderProps = {
  children: ReactNode;
};

export const ThemeContext = createContext<ThemeContextType>(
  {} as ThemeContextType,
);

export function ThemeContextProvider({
  children,
}: ThemeProviderProps): JSX.Element {
  const [theme, setTheme] = useState<Theme>(() => {
    const storageTheme = localStorage.getItem('letmeask:theme');

    if (storageTheme) {
      return JSON.parse(storageTheme);
    }

    return 'light';
  });

  useEffect(() => {
    localStorage.setItem('letmeask:theme', JSON.stringify(theme));
  }, [theme]);

  function toggleTheme() {
    setTheme(theme === 'light' ? 'dark' : 'light');
  }

  const currentTheme = theme === 'light' ? light : dark;

  return (
    <ThemeProvider theme={currentTheme}>
      <ThemeContext.Provider value={{ theme, toggleTheme }}>
        {children}
      </ThemeContext.Provider>
    </ThemeProvider>
  );
}

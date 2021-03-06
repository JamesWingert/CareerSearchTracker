// import type { ReactNode } from 'react';
import { createContext, useContext } from 'react';
import { useTheme } from 'react-daisyui';
import { Theme } from 'react-daisyui';

import useLocalStorage from '../hooks/useLocalStorage';

// type ThemeMode = 'pastel' | 'dracula';
// interface ThemeContextType {
//   themeMode: ThemeMode;
//   toggleTheme: () => void;
// }
const ThemeContext = createContext({});
const useThemeContext = () => useContext(ThemeContext);

const ThemeProvider = ({ children }) => {
  // eslint-disable-next-line no-unused-vars
  const { theme, setTheme } = useTheme();
  const isDarkOS = theme === 'dracula';

  const [themeMode, setThemeMode] = useLocalStorage(
    'themeMode',
    isDarkOS ? 'dracula' : 'pastel'
  );

  const toggleTheme = () => {
    switch (themeMode) {
      case 'pastel':
        setThemeMode('dracula');
        break;
      case 'dracula':
        setThemeMode('pastel');
        break;
      default:
    }
  };

  return (
    <ThemeContext.Provider value={{ themeMode, toggleTheme }}>
      <Theme dataTheme={themeMode === 'pastel' ? 'pastel' : 'dracula'}>
        {children}
      </Theme>
    </ThemeContext.Provider>
  );
};

export { ThemeProvider, useThemeContext };

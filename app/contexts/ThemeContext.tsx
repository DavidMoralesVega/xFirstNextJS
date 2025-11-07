'use client'

import { createContext, useContext, useState, ReactNode } from 'react';

// En Angular sería:
// @Injectable({ providedIn: 'root' })
// export class ThemeService {
//   private theme = signal<'light' | 'dark'>('light');
//   toggleTheme() { ... }
// }

// 1. Definir el tipo del contexto
interface ThemeContextType {
  theme: 'light' | 'dark';
  toggleTheme: () => void;
}

// 2. Crear el contexto (como crear el Service en Angular)
const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

// 3. Provider component (como el providedIn: 'root')
export function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setTheme] = useState<'light' | 'dark'>('light');

  const toggleTheme = () => {
    setTheme(prev => prev === 'light' ? 'dark' : 'light');
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

// 4. Custom hook para usar el contexto (como inyectar el service)
// En Angular: constructor(private themeService: ThemeService) {}
// En React: const { theme, toggleTheme } = useTheme();
export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme debe usarse dentro de ThemeProvider');
  }
  return context;
}

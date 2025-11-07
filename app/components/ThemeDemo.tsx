'use client'

import { useTheme } from '../contexts/ThemeContext';

// Componente que consume el ThemeContext
// En Angular: constructor(private themeService: ThemeService) {}

export default function ThemeDemo() {
  // En Angular: this.themeService.theme()
  // En React: useTheme() hook
  const { theme, toggleTheme } = useTheme();

  return (
    <div className={`p-6 rounded-lg border ${
      theme === 'light'
        ? 'bg-white border-zinc-300 text-black'
        : 'bg-zinc-900 border-zinc-700 text-white'
    }`}>
      <h3 className="text-xl font-semibold mb-4">
        Theme Context Demo
      </h3>

      <div className="space-y-4">
        <p>
          Tema actual: <span className="font-bold">{theme}</span>
        </p>

        <button
          onClick={toggleTheme}
          className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
        >
          Cambiar tema
        </button>

        <div className="p-3 bg-yellow-50 dark:bg-yellow-900/20 rounded text-sm">
          <p className={theme === 'light' ? 'text-zinc-700' : 'text-zinc-300'}>
            💡 <strong>Angular:</strong> constructor(private themeService: ThemeService) {'{'}{'}'}
          </p>
          <p className={theme === 'light' ? 'text-zinc-700' : 'text-zinc-300'}>
            💡 <strong>React:</strong> const {'{'} theme, toggleTheme {'}'} = useTheme()
          </p>
        </div>
      </div>
    </div>
  );
}

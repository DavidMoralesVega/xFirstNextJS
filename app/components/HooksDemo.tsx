'use client'

import { useState } from 'react';
import { useLocalStorage } from '../hooks/useLocalStorage';
import { useFetch } from '../hooks/useFetch';
import { useDebounce } from '../hooks/useDebounce';
import { useWindowSize } from '../hooks/useWindowSize';
import { useToggle } from '../hooks/useToggle';

// Demo de useLocalStorage
function LocalStorageDemo() {
  const [name, setName] = useLocalStorage('user-name', '');

  return (
    <div className="p-4 bg-blue-50 dark:bg-blue-900/20 rounded border border-blue-200 dark:border-blue-800">
      <h4 className="font-bold mb-2 text-black dark:text-white">
        useLocalStorage Hook
      </h4>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Escribe tu nombre..."
        className="w-full px-3 py-2 border border-zinc-300 dark:border-zinc-600 rounded bg-white dark:bg-zinc-800 text-black dark:text-white"
      />
      <p className="text-sm text-zinc-600 dark:text-zinc-400 mt-2">
        Se guarda automáticamente en localStorage. Recarga la página!
      </p>
    </div>
  );
}

// Demo de useFetch
function FetchDemo() {
  const { data, loading, error, refetch } = useFetch<{ title: string; body: string }>(
    'https://jsonplaceholder.typicode.com/posts/1'
  );

  if (loading) {
    return (
      <div className="p-4 bg-green-50 dark:bg-green-900/20 rounded border border-green-200 dark:border-green-800">
        <div className="flex items-center gap-2">
          <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-green-600"></div>
          <span className="text-black dark:text-white">Cargando...</span>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="p-4 bg-red-50 dark:bg-red-900/20 rounded border border-red-200 dark:border-red-800">
        <p className="text-red-700 dark:text-red-300">Error: {error.message}</p>
      </div>
    );
  }

  return (
    <div className="p-4 bg-green-50 dark:bg-green-900/20 rounded border border-green-200 dark:border-green-800">
      <h4 className="font-bold mb-2 text-black dark:text-white">
        useFetch Hook
      </h4>
      <div className="p-3 bg-white dark:bg-zinc-800 rounded mb-2">
        <p className="font-semibold text-black dark:text-white">{data?.title}</p>
        <p className="text-sm text-zinc-600 dark:text-zinc-400">{data?.body}</p>
      </div>
      <button
        onClick={refetch}
        className="px-3 py-1 bg-green-600 text-white rounded hover:bg-green-700 text-sm"
      >
        Recargar
      </button>
    </div>
  );
}

// Demo de useDebounce
function DebounceDemo() {
  const [searchTerm, setSearchTerm] = useState('');
  const debouncedSearchTerm = useDebounce(searchTerm, 500);

  return (
    <div className="p-4 bg-purple-50 dark:bg-purple-900/20 rounded border border-purple-200 dark:border-purple-800">
      <h4 className="font-bold mb-2 text-black dark:text-white">
        useDebounce Hook
      </h4>
      <input
        type="text"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        placeholder="Escribe algo..."
        className="w-full px-3 py-2 border border-zinc-300 dark:border-zinc-600 rounded bg-white dark:bg-zinc-800 text-black dark:text-white mb-2"
      />
      <div className="grid grid-cols-2 gap-2 text-sm">
        <div className="p-2 bg-white dark:bg-zinc-800 rounded">
          <p className="text-zinc-600 dark:text-zinc-400">Valor inmediato:</p>
          <p className="font-mono text-black dark:text-white">{searchTerm || '(vacío)'}</p>
        </div>
        <div className="p-2 bg-white dark:bg-zinc-800 rounded">
          <p className="text-zinc-600 dark:text-zinc-400">Valor debounced (500ms):</p>
          <p className="font-mono text-black dark:text-white">{debouncedSearchTerm || '(vacío)'}</p>
        </div>
      </div>
      <p className="text-xs text-zinc-600 dark:text-zinc-400 mt-2">
        Útil para búsquedas: evita hacer fetch en cada tecla
      </p>
    </div>
  );
}

// Demo de useWindowSize
function WindowSizeDemo() {
  const { width, height } = useWindowSize();

  return (
    <div className="p-4 bg-orange-50 dark:bg-orange-900/20 rounded border border-orange-200 dark:border-orange-800">
      <h4 className="font-bold mb-2 text-black dark:text-white">
        useWindowSize Hook
      </h4>
      <div className="grid grid-cols-2 gap-2">
        <div className="p-3 bg-white dark:bg-zinc-800 rounded">
          <p className="text-sm text-zinc-600 dark:text-zinc-400">Ancho:</p>
          <p className="text-2xl font-bold text-black dark:text-white">{width}px</p>
        </div>
        <div className="p-3 bg-white dark:bg-zinc-800 rounded">
          <p className="text-sm text-zinc-600 dark:text-zinc-400">Alto:</p>
          <p className="text-2xl font-bold text-black dark:text-white">{height}px</p>
        </div>
      </div>
      <p className="text-xs text-zinc-600 dark:text-zinc-400 mt-2">
        Redimensiona la ventana y mira cómo cambian los valores
      </p>
    </div>
  );
}

// Demo de useToggle
function ToggleDemo() {
  const [isOpen, toggle, setIsOpen] = useToggle(false);

  return (
    <div className="p-4 bg-pink-50 dark:bg-pink-900/20 rounded border border-pink-200 dark:border-pink-800">
      <h4 className="font-bold mb-2 text-black dark:text-white">
        useToggle Hook
      </h4>

      <div className="flex gap-2 mb-3">
        <button
          onClick={toggle}
          className="px-3 py-2 bg-pink-600 text-white rounded hover:bg-pink-700"
        >
          Toggle
        </button>
        <button
          onClick={() => setIsOpen(true)}
          className="px-3 py-2 bg-green-600 text-white rounded hover:bg-green-700"
        >
          Abrir
        </button>
        <button
          onClick={() => setIsOpen(false)}
          className="px-3 py-2 bg-red-600 text-white rounded hover:bg-red-700"
        >
          Cerrar
        </button>
      </div>

      {isOpen && (
        <div className="p-3 bg-white dark:bg-zinc-800 rounded border-2 border-pink-400 dark:border-pink-600">
          <p className="text-black dark:text-white font-semibold">
            🎉 Modal / Sidebar simulado
          </p>
          <p className="text-sm text-zinc-600 dark:text-zinc-400">
            Este contenido se muestra/oculta con el toggle
          </p>
        </div>
      )}

      <p className="text-xs text-zinc-600 dark:text-zinc-400 mt-2">
        Útil para modals, sidebars, dropdowns
      </p>
    </div>
  );
}

// Componente principal que agrupa todas las demos
export default function HooksDemo() {
  return (
    <div className="space-y-6">
      <LocalStorageDemo />
      <FetchDemo />
      <DebounceDemo />
      <WindowSizeDemo />
      <ToggleDemo />
    </div>
  );
}

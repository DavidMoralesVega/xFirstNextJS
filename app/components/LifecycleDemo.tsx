'use client'

import { useState, useEffect } from 'react';

// useEffect = como ngOnInit, ngOnDestroy en Angular

export default function LifecycleDemo() {
  const [message, setMessage] = useState('Componente montado');
  const [seconds, setSeconds] = useState(0);

  // useEffect sin dependencias = ngOnInit
  useEffect(() => {
    console.log('🟢 Componente montado (ngOnInit)');
    setMessage('Componente cargado!');

    // Return = ngOnDestroy
    return () => {
      console.log('🔴 Componente destruido (ngOnDestroy)');
    };
  }, []); // ← [] vacío = solo se ejecuta 1 vez al montar

  // useEffect con dependencias = se ejecuta cuando cambia algo
  useEffect(() => {
    const interval = setInterval(() => {
      setSeconds(s => s + 1);
    }, 1000);

    // Limpieza del interval
    return () => clearInterval(interval);
  }, []); // ← Solo monta una vez el timer

  return (
    <div className="p-6 bg-purple-50 dark:bg-purple-900/20 rounded-lg border border-purple-200 dark:border-purple-800">
      <h3 className="text-xl font-semibold mb-4 text-black dark:text-white">
        Lifecycle Demo (useEffect)
      </h3>

      <p className="text-lg text-black dark:text-white mb-2">{message}</p>
      <p className="text-2xl font-bold text-purple-600 dark:text-purple-400">
        Segundos activo: {seconds}
      </p>

      <div className="mt-4 p-3 bg-yellow-50 dark:bg-yellow-900/20 rounded text-sm">
        <p className="text-zinc-700 dark:text-zinc-300">
          💡 <strong>Angular:</strong> ngOnInit() {'{ ... }'}
        </p>
        <p className="text-zinc-700 dark:text-zinc-300">
          💡 <strong>React:</strong> useEffect(() ={'>'} {'{ ... }'}, [])
        </p>
        <p className="text-zinc-700 dark:text-zinc-300 mt-2">
          💡 <strong>Angular:</strong> ngOnDestroy() {'{ ... }'}
        </p>
        <p className="text-zinc-700 dark:text-zinc-300">
          💡 <strong>React:</strong> return () ={'>'} {'{ ... }'} dentro de useEffect
        </p>
      </div>

      <div className="mt-3 text-xs text-zinc-500 dark:text-zinc-400">
        Abre la consola del navegador (F12) para ver los logs del lifecycle
      </div>
    </div>
  );
}

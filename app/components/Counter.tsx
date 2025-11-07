'use client'  // ← OBLIGATORIO para usar estado (useState, onClick, etc.)

import { useState } from 'react';

// En Angular sería:
// export class CounterComponent {
//   count = 0;
//   increment() { this.count++; }
// }

export default function Counter() {
  // useState = como una variable reactiva en Angular
  // [valor, función_para_cambiar_valor] = useState(valor_inicial)
  const [count, setCount] = useState(0);

  return (
    <div className="p-6 bg-blue-50 dark:bg-blue-900/20 rounded-lg border border-blue-200 dark:border-blue-800">
      <h3 className="text-xl font-semibold mb-4 text-black dark:text-white">
        Counter Component (Client)
      </h3>

      <div className="flex items-center gap-4">
        <button
          onClick={() => setCount(count - 1)}
          className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
        >
          -
        </button>

        <span className="text-3xl font-bold text-black dark:text-white">
          {count}
        </span>

        <button
          onClick={() => setCount(count + 1)}
          className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
        >
          +
        </button>
      </div>

      <div className="mt-4 p-3 bg-yellow-50 dark:bg-yellow-900/20 rounded text-sm">
        <p className="text-zinc-700 dark:text-zinc-300">
          💡 <strong>En Angular:</strong> count = 0; increment() {'{ this.count++ }'}
        </p>
        <p className="text-zinc-700 dark:text-zinc-300">
          💡 <strong>En React:</strong> const [count, setCount] = useState(0)
        </p>
        <p className="text-zinc-700 dark:text-zinc-300 mt-2">
          ⚠️ Necesita 'use client' porque usa interactividad (onClick, useState)
        </p>
      </div>
    </div>
  );
}

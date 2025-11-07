'use client'

import { useState } from 'react';
import Button from './Button';

// Componente que demuestra comunicación padre-hijo
export default function PropsDemo() {
  const [message, setMessage] = useState('Esperando click...');

  const handleButtonClick = (msg: string) => {
    setMessage(msg);
  };

  return (
    <div className="p-6 bg-purple-50 dark:bg-purple-900/20 rounded-lg border border-purple-200 dark:border-purple-800">
      <h3 className="text-xl font-semibold mb-4 text-black dark:text-white">
        Comunicación Padre ↔ Hijo
      </h3>

      {/* Padre pasa props al hijo */}
      <div className="flex gap-3 mb-4">
        <Button
          label="Primario"
          variant="primary"
          onClick={handleButtonClick}
        />
        <Button
          label="Secundario"
          variant="secondary"
          onClick={handleButtonClick}
        />
        <Button
          label="Peligro"
          variant="danger"
          onClick={handleButtonClick}
        />
      </div>

      {/* El padre recibe datos del hijo via callback */}
      <div className="p-4 bg-white dark:bg-zinc-800 rounded">
        <p className="text-black dark:text-white font-medium">Mensaje del hijo:</p>
        <p className="text-zinc-600 dark:text-zinc-400">{message}</p>
      </div>

      <div className="mt-4 p-3 bg-yellow-50 dark:bg-yellow-900/20 rounded text-sm">
        <p className="text-zinc-700 dark:text-zinc-300">
          💡 <strong>Angular:</strong> &lt;app-button [label]="texto" (btnClick)="handleClick($event)"&gt;
        </p>
        <p className="text-zinc-700 dark:text-zinc-300">
          💡 <strong>React:</strong> &lt;Button label="texto" onClick={'{'} handleClick {'}'} /&gt;
        </p>
      </div>
    </div>
  );
}

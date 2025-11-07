'use client'

import { useState } from 'react';

// Demo de POST/PUT/DELETE (como HttpClient en Angular)

interface Todo {
  id: number;
  title: string;
  completed: boolean;
}

export default function DataMutationDemo() {
  const [title, setTitle] = useState('');
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<Todo | null>(null);
  const [error, setError] = useState<string | null>(null);

  // POST request - Como this.http.post() en Angular
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // En Angular sería:
    // this.http.post<Todo>('/api/todos', { title, completed: false })
    //   .subscribe({
    //     next: (data) => this.result = data,
    //     error: (err) => this.error = err
    //   });

    try {
      setLoading(true);
      setError(null);

      const res = await fetch('https://jsonplaceholder.typicode.com/todos', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          title,
          completed: false,
          userId: 1,
        }),
      });

      if (!res.ok) {
        throw new Error('Error al crear todo');
      }

      const data = await res.json();
      setResult(data);
      setTitle('');
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Error desconocido');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-6 bg-purple-50 dark:bg-purple-900/20 rounded-lg border border-purple-200 dark:border-purple-800">
      <h3 className="text-xl font-semibold mb-4 text-black dark:text-white">
        Data Mutation (POST/PUT/DELETE)
      </h3>

      <form onSubmit={handleSubmit} className="mb-4">
        <div className="flex gap-2">
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Título del todo..."
            className="flex-1 px-3 py-2 border border-zinc-300 dark:border-zinc-600 rounded bg-white dark:bg-zinc-800 text-black dark:text-white"
            required
          />
          <button
            type="submit"
            disabled={loading}
            className="px-4 py-2 bg-purple-600 text-white rounded hover:bg-purple-700 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {loading ? 'Enviando...' : 'Crear Todo'}
          </button>
        </div>
      </form>

      {error && (
        <div className="p-3 bg-red-100 dark:bg-red-900/30 border border-red-300 dark:border-red-700 rounded mb-4">
          <p className="text-red-700 dark:text-red-300">❌ {error}</p>
        </div>
      )}

      {result && (
        <div className="p-4 bg-white dark:bg-zinc-800 rounded border border-zinc-200 dark:border-zinc-700 mb-4">
          <p className="text-green-600 dark:text-green-400 font-bold mb-2">✅ Todo creado:</p>
          <pre className="text-sm text-black dark:text-white overflow-x-auto">
            {JSON.stringify(result, null, 2)}
          </pre>
        </div>
      )}

      <div className="p-3 bg-yellow-50 dark:bg-yellow-900/20 rounded text-sm">
        <p className="text-zinc-700 dark:text-zinc-300 font-bold mb-2">
          📤 POST Request:
        </p>
        <p className="text-zinc-700 dark:text-zinc-300 font-mono text-xs mb-2">
          fetch(url, {'{'} method: 'POST', body: JSON.stringify(data) {'}'})
        </p>
        <p className="text-zinc-700 dark:text-zinc-300">
          💡 <strong>Angular:</strong> this.http.post&lt;T&gt;(url, data).subscribe(...)
        </p>
        <p className="text-zinc-700 dark:text-zinc-300">
          💡 <strong>React:</strong> await fetch(url, {'{'} method: 'POST', ... {'}'})
        </p>
      </div>
    </div>
  );
}

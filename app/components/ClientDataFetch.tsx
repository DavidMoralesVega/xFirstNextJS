'use client'

import { useState, useEffect } from 'react';

// Client Component - Como HttpClient en Angular

interface User {
  id: number;
  name: string;
  email: string;
  username: string;
}

export default function ClientDataFetch() {
  // Estados (como en Angular)
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // useEffect = ngOnInit (fetch cuando el componente se monta)
  useEffect(() => {
    // En Angular sería:
    // ngOnInit() {
    //   this.http.get<User[]>('...').subscribe({
    //     next: (data) => this.users = data,
    //     error: (err) => this.error = err,
    //     complete: () => this.loading = false
    //   });
    // }

    const fetchUsers = async () => {
      try {
        setLoading(true);
        const res = await fetch('https://jsonplaceholder.typicode.com/users');

        if (!res.ok) {
          throw new Error('Error al cargar usuarios');
        }

        const data = await res.json();
        setUsers(data);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Error desconocido');
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, []); // [] = solo ejecuta 1 vez (como ngOnInit)

  // Loading state
  if (loading) {
    return (
      <div className="p-6 bg-blue-50 dark:bg-blue-900/20 rounded-lg border border-blue-200 dark:border-blue-800">
        <div className="flex items-center gap-3">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
          <span className="text-black dark:text-white">Cargando usuarios...</span>
        </div>
      </div>
    );
  }

  // Error state
  if (error) {
    return (
      <div className="p-6 bg-red-50 dark:bg-red-900/20 rounded-lg border border-red-200 dark:border-red-800">
        <p className="text-red-700 dark:text-red-300">❌ Error: {error}</p>
      </div>
    );
  }

  // Success state
  return (
    <div className="p-6 bg-blue-50 dark:bg-blue-900/20 rounded-lg border border-blue-200 dark:border-blue-800">
      <h3 className="text-xl font-semibold mb-4 text-black dark:text-white">
        Client Data Fetch (como Angular)
      </h3>

      <div className="space-y-2 mb-4">
        {users.map(user => (
          <div key={user.id} className="p-3 bg-white dark:bg-zinc-800 rounded border border-zinc-200 dark:border-zinc-700">
            <p className="font-bold text-black dark:text-white">{user.name}</p>
            <p className="text-sm text-zinc-600 dark:text-zinc-400">{user.email}</p>
          </div>
        ))}
      </div>

      <div className="p-3 bg-yellow-50 dark:bg-yellow-900/20 rounded text-sm">
        <p className="text-zinc-700 dark:text-zinc-300 font-bold mb-2">
          🌐 Client Component - Como Angular:
        </p>
        <ul className="list-disc list-inside text-zinc-700 dark:text-zinc-300 space-y-1">
          <li>Fetch se ejecuta en el navegador (como HttpClient)</li>
          <li>Usuario ve loading spinner</li>
          <li>Datos se cargan después del render inicial</li>
          <li>Útil para datos que cambian frecuentemente</li>
        </ul>
        <p className="mt-2 text-zinc-700 dark:text-zinc-300">
          💡 <strong>En Angular:</strong> Siempre funciona así (HttpClient en ngOnInit)
        </p>
      </div>
    </div>
  );
}

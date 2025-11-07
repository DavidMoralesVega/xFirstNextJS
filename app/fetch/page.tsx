import Link from 'next/link';
import { Suspense } from 'react';
import ServerDataFetch from '../components/ServerDataFetch';
import ClientDataFetch from '../components/ClientDataFetch';
import DataMutationDemo from '../components/DataMutationDemo';

// Loading fallback para Server Component
function LoadingFallback() {
  return (
    <div className="p-6 bg-zinc-100 dark:bg-zinc-800 rounded-lg animate-pulse">
      <div className="h-6 bg-zinc-300 dark:bg-zinc-700 rounded w-1/3 mb-4"></div>
      <div className="space-y-3">
        <div className="h-20 bg-zinc-300 dark:bg-zinc-700 rounded"></div>
        <div className="h-20 bg-zinc-300 dark:bg-zinc-700 rounded"></div>
        <div className="h-20 bg-zinc-300 dark:bg-zinc-700 rounded"></div>
      </div>
    </div>
  );
}

export default function FetchPage() {
  return (
    <div className="min-h-screen p-8 bg-white dark:bg-black">
      <div className="max-w-4xl mx-auto">
        <div className="mb-6">
          <Link
            href="/"
            className="text-blue-600 dark:text-blue-400 hover:underline"
          >
            ← Volver al inicio
          </Link>
        </div>

        <h1 className="text-4xl font-bold mb-2 text-black dark:text-white">
          Lección 4: Fetch de Datos
        </h1>
        <p className="text-lg text-zinc-600 dark:text-zinc-400 mb-8">
          Server vs Client Data Fetching (HttpClient en Angular)
        </p>

        {/* Sección 1: Server Data Fetch */}
        <div className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-black dark:text-white">
            1. Server Component Fetch (NO existe en Angular)
          </h2>
          <Suspense fallback={<LoadingFallback />}>
            <ServerDataFetch />
          </Suspense>
        </div>

        {/* Sección 2: Client Data Fetch */}
        <div className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-black dark:text-white">
            2. Client Component Fetch (como HttpClient en Angular)
          </h2>
          <ClientDataFetch />
        </div>

        {/* Sección 3: Data Mutation */}
        <div className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-black dark:text-white">
            3. Mutaciones (POST/PUT/DELETE)
          </h2>
          <DataMutationDemo />
        </div>

        {/* Tabla comparativa */}
        <div className="mt-8 p-6 bg-zinc-100 dark:bg-zinc-900 rounded-lg">
          <h2 className="text-2xl font-semibold mb-4 text-black dark:text-white">
            Comparación: Angular HttpClient vs Next.js Fetch
          </h2>

          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b-2 border-zinc-300 dark:border-zinc-700">
                  <th className="text-left py-2 text-black dark:text-white">Operación</th>
                  <th className="text-left py-2 text-black dark:text-white">Angular</th>
                  <th className="text-left py-2 text-black dark:text-white">Next.js (Client)</th>
                  <th className="text-left py-2 text-black dark:text-white">Next.js (Server)</th>
                </tr>
              </thead>
              <tbody className="text-zinc-700 dark:text-zinc-300">
                <tr className="border-b border-zinc-200 dark:border-zinc-800">
                  <td className="py-3 font-semibold">GET</td>
                  <td className="py-3 font-mono text-xs">
                    http.get(url)<br/>.subscribe(...)
                  </td>
                  <td className="py-3 font-mono text-xs">
                    useEffect(() ={'>'} {'{'}<br/>
                    &nbsp;&nbsp;fetch(url)<br/>
                    {'}'}, [])
                  </td>
                  <td className="py-3 font-mono text-xs">
                    await fetch(url)
                  </td>
                </tr>
                <tr className="border-b border-zinc-200 dark:border-zinc-800">
                  <td className="py-3 font-semibold">POST</td>
                  <td className="py-3 font-mono text-xs">
                    http.post(url, data)<br/>.subscribe(...)
                  </td>
                  <td className="py-3 font-mono text-xs">
                    fetch(url, {'{'}<br/>
                    &nbsp;&nbsp;method: 'POST',<br/>
                    &nbsp;&nbsp;body: JSON...<br/>
                    {'}'})
                  </td>
                  <td className="py-3 font-mono text-xs">
                    Mismo que client
                  </td>
                </tr>
                <tr className="border-b border-zinc-200 dark:border-zinc-800">
                  <td className="py-3 font-semibold">Loading</td>
                  <td className="py-3 font-mono text-xs">
                    loading = true<br/>
                    finalize(() ={'>'} ...)
                  </td>
                  <td className="py-3 font-mono text-xs">
                    const [loading, set...]<br/>
                    = useState(true)
                  </td>
                  <td className="py-3 font-mono text-xs">
                    &lt;Suspense<br/>
                    &nbsp;&nbsp;fallback={'{'}...{'}'}&gt;
                  </td>
                </tr>
                <tr className="border-b border-zinc-200 dark:border-zinc-800">
                  <td className="py-3 font-semibold">Error</td>
                  <td className="py-3 font-mono text-xs">
                    catchError(...)
                  </td>
                  <td className="py-3 font-mono text-xs">
                    try/catch
                  </td>
                  <td className="py-3 font-mono text-xs">
                    try/catch o<br/>error.tsx
                  </td>
                </tr>
                <tr>
                  <td className="py-3 font-semibold">Cuándo</td>
                  <td className="py-3">
                    Siempre en cliente
                  </td>
                  <td className="py-3">
                    Datos dinámicos,<br/>autenticación
                  </td>
                  <td className="py-3">
                    SEO, datos estáticos,<br/>performance
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Código comparativo */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-4 bg-red-50 dark:bg-red-900/20 rounded-lg">
            <h3 className="font-bold text-black dark:text-white mb-3">Angular (HttpClient)</h3>
            <pre className="text-xs text-zinc-800 dark:text-zinc-200 overflow-x-auto">
{`import { HttpClient } from '@angular/common/http';

export class UserComponent {
  users: User[] = [];
  loading = true;

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.http.get<User[]>('/api/users')
      .subscribe({
        next: (data) => {
          this.users = data;
        },
        error: (err) => {
          console.error(err);
        },
        complete: () => {
          this.loading = false;
        }
      });
  }
}`}
            </pre>
          </div>

          <div className="p-4 bg-green-50 dark:bg-green-900/20 rounded-lg">
            <h3 className="font-bold text-black dark:text-white mb-3">React (Client Component)</h3>
            <pre className="text-xs text-zinc-800 dark:text-zinc-200 overflow-x-auto">
{`'use client'
import { useState, useEffect } from 'react';

export default function UserComponent() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/api/users')
      .then(res => res.json())
      .then(data => {
        setUsers(data);
      })
      .catch(err => {
        console.error(err);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);
}`}
            </pre>
          </div>
        </div>

        {/* Reglas importantes */}
        <div className="mt-6 p-4 bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500">
          <h3 className="font-bold text-blue-800 dark:text-blue-300 mb-2">
            💡 ¿Cuándo usar Server vs Client fetch?
          </h3>
          <div className="text-blue-700 dark:text-blue-300 space-y-2">
            <p><strong>Usa Server Components cuando:</strong></p>
            <ul className="list-disc list-inside ml-4">
              <li>Los datos son públicos (no requieren auth del usuario)</li>
              <li>Necesitas SEO (Google debe ver los datos)</li>
              <li>Los datos no cambian frecuentemente</li>
              <li>Quieres reducir JavaScript enviado al navegador</li>
            </ul>
            <p className="mt-3"><strong>Usa Client Components cuando:</strong></p>
            <ul className="list-disc list-inside ml-4">
              <li>Necesitas datos del usuario autenticado</li>
              <li>Los datos cambian en tiempo real</li>
              <li>Necesitas interactividad (filtros, búsqueda)</li>
              <li>Similar a cómo funciona Angular</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

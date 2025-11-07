// Esta página es un Server Component (por defecto)
// Pero puede importar y usar Client Components

import Counter from '../components/Counter';
import ServerInfo from '../components/ServerInfo';
import LifecycleDemo from '../components/LifecycleDemo';
import Link from 'next/link';

export default function DemoPage() {
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
          Lección 2: Estado y Componentes
        </h1>
        <p className="text-lg text-zinc-600 dark:text-zinc-400 mb-8">
          Diferencias entre Server y Client Components
        </p>

        {/* Grid con los 3 componentes */}
        <div className="space-y-6">
          {/* Server Component */}
          <ServerInfo />

          {/* Client Component con estado */}
          <Counter />

          {/* Client Component con lifecycle */}
          <LifecycleDemo />
        </div>

        {/* Resumen comparativo */}
        <div className="mt-8 p-6 bg-zinc-100 dark:bg-zinc-900 rounded-lg">
          <h2 className="text-2xl font-semibold mb-4 text-black dark:text-white">
            Resumen: Angular vs React/Next.js
          </h2>

          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-zinc-300 dark:border-zinc-700">
                <th className="text-left py-2 text-black dark:text-white">Concepto</th>
                <th className="text-left py-2 text-black dark:text-white">Angular</th>
                <th className="text-left py-2 text-black dark:text-white">Next.js/React</th>
              </tr>
            </thead>
            <tbody className="text-zinc-700 dark:text-zinc-300">
              <tr className="border-b border-zinc-200 dark:border-zinc-800">
                <td className="py-2 font-semibold">Variable reactiva</td>
                <td className="py-2">count = 0</td>
                <td className="py-2">const [count, setCount] = useState(0)</td>
              </tr>
              <tr className="border-b border-zinc-200 dark:border-zinc-800">
                <td className="py-2 font-semibold">Cambiar valor</td>
                <td className="py-2">this.count++</td>
                <td className="py-2">setCount(count + 1)</td>
              </tr>
              <tr className="border-b border-zinc-200 dark:border-zinc-800">
                <td className="py-2 font-semibold">OnInit</td>
                <td className="py-2">ngOnInit() {'{ ... }'}</td>
                <td className="py-2">useEffect(() ={'>'} {'{ ... }'}, [])</td>
              </tr>
              <tr className="border-b border-zinc-200 dark:border-zinc-800">
                <td className="py-2 font-semibold">OnDestroy</td>
                <td className="py-2">ngOnDestroy() {'{ ... }'}</td>
                <td className="py-2">return () ={'>'} {'{ ... }'} en useEffect</td>
              </tr>
              <tr className="border-b border-zinc-200 dark:border-zinc-800">
                <td className="py-2 font-semibold">Eventos</td>
                <td className="py-2">(click)="method()"</td>
                <td className="py-2">onClick={'{'} () ={'>'} method() {'}'}</td>
              </tr>
              <tr>
                <td className="py-2 font-semibold">Interactividad</td>
                <td className="py-2">Siempre cliente</td>
                <td className="py-2">Necesita 'use client'</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Regla importante */}
        <div className="mt-6 p-4 bg-red-50 dark:bg-red-900/20 border-l-4 border-red-500">
          <h3 className="font-bold text-red-800 dark:text-red-300 mb-2">
            ⚠️ Regla de oro:
          </h3>
          <p className="text-red-700 dark:text-red-300">
            Si necesitas: <code className="bg-red-100 dark:bg-red-900 px-1 rounded">useState</code>,{' '}
            <code className="bg-red-100 dark:bg-red-900 px-1 rounded">useEffect</code>,{' '}
            <code className="bg-red-100 dark:bg-red-900 px-1 rounded">onClick</code>,{' '}
            <code className="bg-red-100 dark:bg-red-900 px-1 rounded">onChange</code>, o cualquier
            evento → Debes usar <code className="bg-red-100 dark:bg-red-900 px-1 rounded">'use client'</code>
          </p>
          <p className="text-red-700 dark:text-red-300 mt-2">
            Si solo renderizas HTML estático → Déjalo como Server Component (mejor para SEO)
          </p>
        </div>
      </div>
    </div>
  );
}

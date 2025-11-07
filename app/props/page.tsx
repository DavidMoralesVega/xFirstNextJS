import Link from 'next/link';
import UserCard from '../components/UserCard';
import PropsDemo from '../components/PropsDemo';
import TodoList from '../components/TodoList';

// Server Component que usa Client Components
export default function PropsPage() {
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
          Lección 3: Props (Input/Output)
        </h1>
        <p className="text-lg text-zinc-600 dark:text-zinc-400 mb-8">
          Comunicación entre componentes padre e hijo
        </p>

        {/* Sección 1: Props básicos (@Input) */}
        <div className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-black dark:text-white">
            1. Props básicos (como @Input en Angular)
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <UserCard name="Juan Pérez" age={25} role="Developer" />
            <UserCard name="María García" age={30} role="Designer" />
            <UserCard name="Pedro López" age={28} />
          </div>
          <div className="mt-4 p-3 bg-blue-50 dark:bg-blue-900/20 rounded text-sm">
            <p className="text-zinc-700 dark:text-zinc-300 font-mono text-xs">
              &lt;UserCard name="Juan" age={'{'}25{'}'} role="Developer" /&gt;
            </p>
          </div>
        </div>

        {/* Sección 2: Callbacks (@Output) */}
        <div className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-black dark:text-white">
            2. Callbacks (como @Output en Angular)
          </h2>
          <PropsDemo />
        </div>

        {/* Sección 3: Lista completa con comunicación bidireccional */}
        <div className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-black dark:text-white">
            3. Ejemplo completo: TodoList
          </h2>
          <TodoList />
        </div>

        {/* Tabla comparativa */}
        <div className="mt-8 p-6 bg-zinc-100 dark:bg-zinc-900 rounded-lg">
          <h2 className="text-2xl font-semibold mb-4 text-black dark:text-white">
            Comparación: Angular vs React
          </h2>

          <div className="space-y-4">
            <div>
              <h3 className="font-bold text-black dark:text-white mb-2">
                Pasar datos al hijo (@Input):
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-3 bg-red-50 dark:bg-red-900/20 rounded">
                  <p className="text-xs text-zinc-500 dark:text-zinc-400 mb-1">Angular</p>
                  <code className="text-sm text-zinc-800 dark:text-zinc-200">
                    @Input() name: string;<br/>
                    &lt;app-user [name]="userName"&gt;
                  </code>
                </div>
                <div className="p-3 bg-green-50 dark:bg-green-900/20 rounded">
                  <p className="text-xs text-zinc-500 dark:text-zinc-400 mb-1">React</p>
                  <code className="text-sm text-zinc-800 dark:text-zinc-200">
                    {'{'} name {'}:'} string<br/>
                    &lt;User name={'{'}userName{'}'} /&gt;
                  </code>
                </div>
              </div>
            </div>

            <div>
              <h3 className="font-bold text-black dark:text-white mb-2">
                Emitir eventos al padre (@Output):
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-3 bg-red-50 dark:bg-red-900/20 rounded">
                  <p className="text-xs text-zinc-500 dark:text-zinc-400 mb-1">Angular</p>
                  <code className="text-sm text-zinc-800 dark:text-zinc-200">
                    @Output() click = new EventEmitter();<br/>
                    &lt;app-btn (click)="handleClick($event)"&gt;
                  </code>
                </div>
                <div className="p-3 bg-green-50 dark:bg-green-900/20 rounded">
                  <p className="text-xs text-zinc-500 dark:text-zinc-400 mb-1">React</p>
                  <code className="text-sm text-zinc-800 dark:text-zinc-200">
                    onClick: (e) ={'>'} void<br/>
                    &lt;Btn onClick={'{'}handleClick{'}'} /&gt;
                  </code>
                </div>
              </div>
            </div>

            <div>
              <h3 className="font-bold text-black dark:text-white mb-2">
                Props opcionales:
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-3 bg-red-50 dark:bg-red-900/20 rounded">
                  <p className="text-xs text-zinc-500 dark:text-zinc-400 mb-1">Angular</p>
                  <code className="text-sm text-zinc-800 dark:text-zinc-200">
                    @Input() role?: string;
                  </code>
                </div>
                <div className="p-3 bg-green-50 dark:bg-green-900/20 rounded">
                  <p className="text-xs text-zinc-500 dark:text-zinc-400 mb-1">React</p>
                  <code className="text-sm text-zinc-800 dark:text-zinc-200">
                    role?: string
                  </code>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Reglas importantes */}
        <div className="mt-6 p-4 bg-red-50 dark:bg-red-900/20 border-l-4 border-red-500">
          <h3 className="font-bold text-red-800 dark:text-red-300 mb-2">
            ⚠️ Reglas importantes de Props:
          </h3>
          <ul className="list-disc list-inside text-red-700 dark:text-red-300 space-y-1">
            <li>Las props son <strong>inmutables</strong> (read-only) en el componente hijo</li>
            <li>Para cambiar datos, el hijo debe llamar a un callback del padre</li>
            <li>Los datos fluyen hacia abajo (padre → hijo), eventos hacia arriba (hijo → padre)</li>
            <li>Usa TypeScript para definir interfaces de props (como en Angular)</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

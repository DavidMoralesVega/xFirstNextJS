import Link from 'next/link';
import HooksDemo from '../components/HooksDemo';

export default function HooksDemoPage() {
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
          Lección 7: Custom Hooks
        </h1>
        <p className="text-lg text-zinc-600 dark:text-zinc-400 mb-8">
          Reutilización de lógica (como helper functions/services en Angular)
        </p>

        {/* Explicación */}
        <div className="mb-8 p-6 bg-zinc-100 dark:bg-zinc-900 rounded-lg">
          <h2 className="text-xl font-semibold mb-3 text-black dark:text-white">
            ¿Qué son los Custom Hooks?
          </h2>
          <p className="text-zinc-700 dark:text-zinc-300 mb-3">
            Los Custom Hooks son funciones que permiten <strong>reutilizar lógica con estado</strong> entre componentes.
          </p>
          <p className="text-zinc-700 dark:text-zinc-300 mb-3">
            En Angular, harías esto con:
          </p>
          <ul className="list-disc list-inside text-zinc-700 dark:text-zinc-300 space-y-1 ml-4">
            <li>Services (para lógica con estado global)</li>
            <li>Helper functions (para lógica sin estado)</li>
            <li>RxJS operators (para transformar datos)</li>
          </ul>
          <p className="text-zinc-700 dark:text-zinc-300 mt-3">
            Los Custom Hooks son <strong>más flexibles</strong> porque pueden usar otros hooks internamente.
          </p>
        </div>

        {/* Reglas */}
        <div className="mb-8 p-4 bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-500">
          <h3 className="font-bold text-yellow-800 dark:text-yellow-300 mb-2">
            ⚠️ Reglas de los Hooks:
          </h3>
          <ul className="list-disc list-inside text-yellow-700 dark:text-yellow-300 space-y-1">
            <li>El nombre DEBE empezar con "use" (useLocalStorage, useFetch, etc.)</li>
            <li>Solo se pueden llamar en componentes o en otros custom hooks</li>
            <li>Solo se pueden llamar en el nivel superior (no dentro de if, loops, etc.)</li>
          </ul>
        </div>

        {/* Demos */}
        <div className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-black dark:text-white">
            Ejemplos de Custom Hooks
          </h2>
          <HooksDemo />
        </div>

        {/* Comparación de código */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-4 bg-red-50 dark:bg-red-900/20 rounded-lg">
            <h3 className="font-bold text-black dark:text-white mb-3">
              Angular (Service/Helper)
            </h3>
            <pre className="text-xs text-zinc-800 dark:text-zinc-200 overflow-x-auto">
{`// localStorage.service.ts
@Injectable({ providedIn: 'root' })
export class LocalStorageService {
  setItem<T>(key: string, value: T) {
    localStorage.setItem(
      key,
      JSON.stringify(value)
    );
  }

  getItem<T>(key: string): T | null {
    const item = localStorage.getItem(key);
    return item ? JSON.parse(item) : null;
  }
}

// component.ts
constructor(
  private storage: LocalStorageService
) {}

ngOnInit() {
  const name = this.storage.getItem('name');
}

saveName(name: string) {
  this.storage.setItem('name', name);
}`}
            </pre>
          </div>

          <div className="p-4 bg-green-50 dark:bg-green-900/20 rounded-lg">
            <h3 className="font-bold text-black dark:text-white mb-3">
              React (Custom Hook)
            </h3>
            <pre className="text-xs text-zinc-800 dark:text-zinc-200 overflow-x-auto">
{`// useLocalStorage.ts
export function useLocalStorage<T>(
  key: string,
  initialValue: T
) {
  const [value, setValue] = useState(() => {
    const item = localStorage.getItem(key);
    return item ? JSON.parse(item) : initialValue;
  });

  const updateValue = (newValue: T) => {
    setValue(newValue);
    localStorage.setItem(
      key,
      JSON.stringify(newValue)
    );
  };

  return [value, updateValue];
}

// component.tsx
const [name, setName] = useLocalStorage('name', '');

// Usar directamente:
setName('Juan'); // Guarda automáticamente`}
            </pre>
          </div>
        </div>

        {/* Más ejemplos de código */}
        <div className="mt-8 p-6 bg-zinc-100 dark:bg-zinc-900 rounded-lg">
          <h2 className="text-2xl font-semibold mb-4 text-black dark:text-white">
            Comparación de patrones comunes
          </h2>

          <div className="space-y-6">
            {/* Debounce */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-3 bg-white dark:bg-zinc-800 rounded">
                <h4 className="font-bold text-sm mb-2 text-black dark:text-white">
                  Angular (RxJS debounceTime)
                </h4>
                <pre className="text-xs text-zinc-700 dark:text-zinc-300">
{`searchControl = new FormControl('');

ngOnInit() {
  this.searchControl.valueChanges
    .pipe(debounceTime(500))
    .subscribe(value => {
      this.search(value);
    });
}`}
                </pre>
              </div>
              <div className="p-3 bg-white dark:bg-zinc-800 rounded">
                <h4 className="font-bold text-sm mb-2 text-black dark:text-white">
                  React (useDebounce hook)
                </h4>
                <pre className="text-xs text-zinc-700 dark:text-zinc-300">
{`const [search, setSearch] = useState('');
const debouncedSearch = useDebounce(search, 500);

useEffect(() => {
  if (debouncedSearch) {
    fetchResults(debouncedSearch);
  }
}, [debouncedSearch]);`}
                </pre>
              </div>
            </div>

            {/* Window resize */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-3 bg-white dark:bg-zinc-800 rounded">
                <h4 className="font-bold text-sm mb-2 text-black dark:text-white">
                  Angular (HostListener)
                </h4>
                <pre className="text-xs text-zinc-700 dark:text-zinc-300">
{`windowWidth = 0;

@HostListener('window:resize')
onResize() {
  this.windowWidth = window.innerWidth;
}

ngOnInit() {
  this.windowWidth = window.innerWidth;
}`}
                </pre>
              </div>
              <div className="p-3 bg-white dark:bg-zinc-800 rounded">
                <h4 className="font-bold text-sm mb-2 text-black dark:text-white">
                  React (useWindowSize hook)
                </h4>
                <pre className="text-xs text-zinc-700 dark:text-zinc-300">
{`const { width, height } = useWindowSize();

// Ya está listo para usar!
// Se actualiza automáticamente`}
                </pre>
              </div>
            </div>
          </div>
        </div>

        {/* Ventajas */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-4 bg-green-50 dark:bg-green-900/20 border-l-4 border-green-500">
            <h3 className="font-bold text-green-800 dark:text-green-300 mb-2">
              ✅ Ventajas de Custom Hooks
            </h3>
            <ul className="list-disc list-inside text-green-700 dark:text-green-300 space-y-1 text-sm">
              <li>Reutilización de lógica con estado</li>
              <li>Código más limpio y testeable</li>
              <li>Composición de hooks (un hook usa otros hooks)</li>
              <li>No necesitas dependency injection</li>
              <li>Más intuitivo que RxJS para casos simples</li>
            </ul>
          </div>

          <div className="p-4 bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500">
            <h3 className="font-bold text-blue-800 dark:text-blue-300 mb-2">
              💡 Cuándo crear un Custom Hook
            </h3>
            <ul className="list-disc list-inside text-blue-700 dark:text-blue-300 space-y-1 text-sm">
              <li>Cuando repites la misma lógica en múltiples componentes</li>
              <li>Cuando quieres encapsular efectos secundarios (localStorage, fetch)</li>
              <li>Para abstraer lógica compleja y hacerla reutilizable</li>
              <li>Cuando necesitas suscribirte a eventos del navegador</li>
            </ul>
          </div>
        </div>

        {/* Hooks populares de librerías */}
        <div className="mt-8 p-4 bg-purple-50 dark:bg-purple-900/20 border-l-4 border-purple-500">
          <h3 className="font-bold text-purple-800 dark:text-purple-300 mb-2">
            📦 Librerías populares de Custom Hooks
          </h3>
          <div className="text-purple-700 dark:text-purple-300 space-y-2">
            <p>
              <strong>react-use:</strong> Colección de 100+ hooks útiles
            </p>
            <p>
              <strong>@uidotdev/usehooks:</strong> Hooks modernos y bien documentados
            </p>
            <p>
              <strong>ahooks:</strong> Hooks para aplicaciones empresariales
            </p>
            <p className="text-sm mt-3">
              No necesitas instalarlas todavía, es bueno saber que existen cuando necesites funcionalidad avanzada.
            </p>
          </div>
        </div>

        {/* Equivalencias */}
        <div className="mt-8 p-6 bg-zinc-100 dark:bg-zinc-900 rounded-lg">
          <h2 className="text-2xl font-semibold mb-4 text-black dark:text-white">
            Tabla de equivalencias
          </h2>

          <table className="w-full text-sm">
            <thead>
              <tr className="border-b-2 border-zinc-300 dark:border-zinc-700">
                <th className="text-left py-2 text-black dark:text-white">Necesidad</th>
                <th className="text-left py-2 text-black dark:text-white">Angular</th>
                <th className="text-left py-2 text-black dark:text-white">React Hook</th>
              </tr>
            </thead>
            <tbody className="text-zinc-700 dark:text-zinc-300">
              <tr className="border-b border-zinc-200 dark:border-zinc-800">
                <td className="py-3">Fetch de datos</td>
                <td className="py-3">HttpClient Service</td>
                <td className="py-3 font-mono text-xs">useFetch</td>
              </tr>
              <tr className="border-b border-zinc-200 dark:border-zinc-800">
                <td className="py-3">LocalStorage</td>
                <td className="py-3">LocalStorage Service</td>
                <td className="py-3 font-mono text-xs">useLocalStorage</td>
              </tr>
              <tr className="border-b border-zinc-200 dark:border-zinc-800">
                <td className="py-3">Debounce input</td>
                <td className="py-3">RxJS debounceTime</td>
                <td className="py-3 font-mono text-xs">useDebounce</td>
              </tr>
              <tr className="border-b border-zinc-200 dark:border-zinc-800">
                <td className="py-3">Window resize</td>
                <td className="py-3">@HostListener</td>
                <td className="py-3 font-mono text-xs">useWindowSize</td>
              </tr>
              <tr>
                <td className="py-3">Toggle estado</td>
                <td className="py-3">Variable boolean</td>
                <td className="py-3 font-mono text-xs">useToggle</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

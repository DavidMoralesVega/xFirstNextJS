'use client'

import Link from 'next/link';
import { ThemeProvider } from '../contexts/ThemeContext';
import { AuthProvider } from '../contexts/AuthContext';
import { CartProvider } from '../contexts/CartContext';
import ThemeDemo from '../components/ThemeDemo';
import AuthDemo from '../components/AuthDemo';
import CartDemo from '../components/CartDemo';

// En Angular, los providers se configuran en app.config.ts o module
// En React, envuelves tu app con los providers

function ContextDemoContent() {
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
          Lección 6: Context API
        </h1>
        <p className="text-lg text-zinc-600 dark:text-zinc-400 mb-8">
          Services e Inyección de Dependencias (Angular) vs Context API (React)
        </p>

        {/* Explicación inicial */}
        <div className="mb-8 p-6 bg-zinc-100 dark:bg-zinc-900 rounded-lg">
          <h2 className="text-xl font-semibold mb-3 text-black dark:text-white">
            ¿Qué es Context API?
          </h2>
          <p className="text-zinc-700 dark:text-zinc-300 mb-3">
            Context API es la forma de React para compartir estado global entre componentes
            sin pasar props manualmente en cada nivel (prop drilling).
          </p>
          <p className="text-zinc-700 dark:text-zinc-300">
            Es equivalente a los <strong>Services con @Injectable()</strong> en Angular.
          </p>
        </div>

        {/* Demos */}
        <div className="space-y-8">
          {/* Theme Context */}
          <div>
            <h2 className="text-2xl font-semibold mb-4 text-black dark:text-white">
              1. Theme Context (Simple)
            </h2>
            <ThemeDemo />
          </div>

          {/* Auth Context */}
          <div>
            <h2 className="text-2xl font-semibold mb-4 text-black dark:text-white">
              2. Auth Context (con Login/Logout)
            </h2>
            <AuthDemo />
          </div>

          {/* Cart Context */}
          <div>
            <h2 className="text-2xl font-semibold mb-4 text-black dark:text-white">
              3. Cart Context (Shopping Cart con localStorage)
            </h2>
            <CartDemo />
          </div>
        </div>

        {/* Comparación código */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-4 bg-red-50 dark:bg-red-900/20 rounded-lg">
            <h3 className="font-bold text-black dark:text-white mb-3">Angular Service</h3>
            <pre className="text-xs text-zinc-800 dark:text-zinc-200 overflow-x-auto">
{`// auth.service.ts
@Injectable({ providedIn: 'root' })
export class AuthService {
  private userSignal = signal<User | null>(null);

  user = this.userSignal.asReadonly();

  login(email: string, password: string) {
    // Login logic
    this.userSignal.set(user);
  }

  logout() {
    this.userSignal.set(null);
  }
}

// component.ts
constructor(private authService: AuthService) {}

ngOnInit() {
  this.user = this.authService.user();
}

login() {
  this.authService.login(email, password);
}`}
            </pre>
          </div>

          <div className="p-4 bg-green-50 dark:bg-green-900/20 rounded-lg">
            <h3 className="font-bold text-black dark:text-white mb-3">React Context</h3>
            <pre className="text-xs text-zinc-800 dark:text-zinc-200 overflow-x-auto">
{`// AuthContext.tsx
const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);

  const login = (email, password) => {
    // Login logic
    setUser(user);
  };

  const logout = () => setUser(null);

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

// Hook personalizado
export const useAuth = () => useContext(AuthContext);

// component.tsx
const { user, login, logout } = useAuth();`}
            </pre>
          </div>
        </div>

        {/* Tabla comparativa */}
        <div className="mt-8 p-6 bg-zinc-100 dark:bg-zinc-900 rounded-lg">
          <h2 className="text-2xl font-semibold mb-4 text-black dark:text-white">
            Comparación: Services vs Context
          </h2>

          <table className="w-full text-sm">
            <thead>
              <tr className="border-b-2 border-zinc-300 dark:border-zinc-700">
                <th className="text-left py-2 text-black dark:text-white">Aspecto</th>
                <th className="text-left py-2 text-black dark:text-white">Angular</th>
                <th className="text-left py-2 text-black dark:text-white">React</th>
              </tr>
            </thead>
            <tbody className="text-zinc-700 dark:text-zinc-300">
              <tr className="border-b border-zinc-200 dark:border-zinc-800">
                <td className="py-3 font-semibold">Crear</td>
                <td className="py-3 font-mono text-xs">@Injectable()</td>
                <td className="py-3 font-mono text-xs">createContext()</td>
              </tr>
              <tr className="border-b border-zinc-200 dark:border-zinc-800">
                <td className="py-3 font-semibold">Proveer</td>
                <td className="py-3 font-mono text-xs">providedIn: 'root'</td>
                <td className="py-3 font-mono text-xs">&lt;Provider&gt;</td>
              </tr>
              <tr className="border-b border-zinc-200 dark:border-zinc-800">
                <td className="py-3 font-semibold">Inyectar/Usar</td>
                <td className="py-3 font-mono text-xs">constructor(private srv: Service)</td>
                <td className="py-3 font-mono text-xs">useContext(Context)</td>
              </tr>
              <tr className="border-b border-zinc-200 dark:border-zinc-800">
                <td className="py-3 font-semibold">Estado reactivo</td>
                <td className="py-3 font-mono text-xs">signal() / BehaviorSubject</td>
                <td className="py-3 font-mono text-xs">useState()</td>
              </tr>
              <tr>
                <td className="py-3 font-semibold">Custom hook</td>
                <td className="py-3">N/A (inyección directa)</td>
                <td className="py-3 font-mono text-xs">useAuth(), useCart()</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Patrón recomendado */}
        <div className="mt-6 p-4 bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500">
          <h3 className="font-bold text-blue-800 dark:text-blue-300 mb-2">
            💡 Patrón recomendado:
          </h3>
          <div className="text-blue-700 dark:text-blue-300 space-y-2">
            <p>
              <strong>1. Crea el Context:</strong> createContext()
            </p>
            <p>
              <strong>2. Crea el Provider:</strong> Componente que envuelve children
            </p>
            <p>
              <strong>3. Crea el custom hook:</strong> useAuth(), useCart(), etc.
            </p>
            <p>
              <strong>4. Usa el hook:</strong> const {'{'} user {'}'} = useAuth()
            </p>
            <p className="mt-3 text-sm">
              Este patrón es equivalente a crear un Service en Angular y hacer dependency injection.
            </p>
          </div>
        </div>

        {/* Cuándo usar Context */}
        <div className="mt-6 p-4 bg-green-50 dark:bg-green-900/20 border-l-4 border-green-500">
          <h3 className="font-bold text-green-800 dark:text-green-300 mb-2">
            ✅ Cuándo usar Context API:
          </h3>
          <ul className="list-disc list-inside text-green-700 dark:text-green-300 space-y-1">
            <li>Autenticación (usuario actual, login/logout)</li>
            <li>Temas (dark/light mode)</li>
            <li>Idioma/internacionalización</li>
            <li>Shopping cart</li>
            <li>Configuración global de la app</li>
            <li>Cualquier estado que necesiten múltiples componentes distantes</li>
          </ul>
        </div>

        {/* Cuándo NO usar Context */}
        <div className="mt-6 p-4 bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-500">
          <h3 className="font-bold text-yellow-800 dark:text-yellow-300 mb-2">
            ⚠️ Cuándo NO usar Context API:
          </h3>
          <ul className="list-disc list-inside text-yellow-700 dark:text-yellow-300 space-y-1">
            <li>Datos que solo necesita 1-2 componentes (usa props)</li>
            <li>Estado muy frecuente (causa re-renders innecesarios)</li>
            <li>Para apps muy grandes (mejor usa Zustand, Redux, o Jotai)</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

// La página envuelta con los providers
export default function ContextDemoPage() {
  return (
    <ThemeProvider>
      <AuthProvider>
        <CartProvider>
          <ContextDemoContent />
        </CartProvider>
      </AuthProvider>
    </ThemeProvider>
  );
}

'use client'

import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function PWAPage() {
  const [isInstallable, setIsInstallable] = useState(false);
  const [deferredPrompt, setDeferredPrompt] = useState<any>(null);
  const [isInstalled, setIsInstalled] = useState(false);

  useEffect(() => {
    // Detectar si la app ya está instalada
    if (window.matchMedia('(display-mode: standalone)').matches) {
      setIsInstalled(true);
    }

    // Listener para el evento beforeinstallprompt
    const handler = (e: Event) => {
      e.preventDefault();
      setDeferredPrompt(e);
      setIsInstallable(true);
    };

    window.addEventListener('beforeinstallprompt', handler);

    // Listener para cuando se instala la app
    window.addEventListener('appinstalled', () => {
      setIsInstalled(true);
      setIsInstallable(false);
    });

    return () => {
      window.removeEventListener('beforeinstallprompt', handler);
    };
  }, []);

  const handleInstallClick = async () => {
    if (!deferredPrompt) return;

    deferredPrompt.prompt();
    const { outcome } = await deferredPrompt.userChoice;

    if (outcome === 'accepted') {
      console.log('Usuario aceptó instalar la PWA');
    }

    setDeferredPrompt(null);
    setIsInstallable(false);
  };

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
          Progressive Web App (PWA)
        </h1>
        <p className="text-lg text-zinc-600 dark:text-zinc-400 mb-8">
          Esta aplicación ahora es una PWA instalable!
        </p>

        {/* Estado de instalación */}
        <div className={`mb-8 p-6 rounded-lg border ${
          isInstalled
            ? 'bg-green-50 dark:bg-green-900/20 border-green-200 dark:border-green-800'
            : 'bg-blue-50 dark:bg-blue-900/20 border-blue-200 dark:border-blue-800'
        }`}>
          {isInstalled ? (
            <div>
              <h2 className="text-2xl font-bold text-green-800 dark:text-green-300 mb-2">
                ✅ App instalada!
              </h2>
              <p className="text-green-700 dark:text-green-300">
                La aplicación está corriendo como PWA instalada en tu dispositivo.
              </p>
            </div>
          ) : (
            <div>
              <h2 className="text-2xl font-bold text-blue-800 dark:text-blue-300 mb-2">
                📱 Instalar aplicación
              </h2>
              {isInstallable ? (
                <div>
                  <p className="text-blue-700 dark:text-blue-300 mb-4">
                    Puedes instalar esta aplicación en tu dispositivo!
                  </p>
                  <button
                    onClick={handleInstallClick}
                    className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 font-semibold"
                  >
                    Instalar aplicación
                  </button>
                </div>
              ) : (
                <p className="text-blue-700 dark:text-blue-300">
                  En navegadores compatibles, verás un botón de instalación aquí.
                  O busca el icono de instalación en la barra de direcciones.
                </p>
              )}
            </div>
          )}
        </div>

        {/* Características de PWA */}
        <div className="mb-8 p-6 bg-zinc-100 dark:bg-zinc-900 rounded-lg">
          <h2 className="text-2xl font-semibold mb-4 text-black dark:text-white">
            ✨ Características de esta PWA
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-4 bg-white dark:bg-zinc-800 rounded">
              <div className="text-2xl mb-2">📱</div>
              <h3 className="font-bold mb-1 text-black dark:text-white">Instalable</h3>
              <p className="text-sm text-zinc-600 dark:text-zinc-400">
                Puedes instalarla en tu escritorio o móvil como una app nativa
              </p>
            </div>

            <div className="p-4 bg-white dark:bg-zinc-800 rounded">
              <div className="text-2xl mb-2">⚡</div>
              <h3 className="font-bold mb-1 text-black dark:text-white">Offline</h3>
              <p className="text-sm text-zinc-600 dark:text-zinc-400">
                Funciona sin conexión gracias al Service Worker
              </p>
            </div>

            <div className="p-4 bg-white dark:bg-zinc-800 rounded">
              <div className="text-2xl mb-2">🚀</div>
              <h3 className="font-bold mb-1 text-black dark:text-white">Rápida</h3>
              <p className="text-sm text-zinc-600 dark:text-zinc-400">
                Carga instantánea con caché inteligente
              </p>
            </div>

            <div className="p-4 bg-white dark:bg-zinc-800 rounded">
              <div className="text-2xl mb-2">🔔</div>
              <h3 className="font-bold mb-1 text-black dark:text-white">Push Notifications</h3>
              <p className="text-sm text-zinc-600 dark:text-zinc-400">
                Compatible con notificaciones push (requiere configuración adicional)
              </p>
            </div>
          </div>
        </div>

        {/* Cómo instalar */}
        <div className="mb-8 p-6 bg-purple-50 dark:bg-purple-900/20 rounded-lg border border-purple-200 dark:border-purple-800">
          <h2 className="text-2xl font-semibold mb-4 text-black dark:text-white">
            📲 Cómo instalar en diferentes dispositivos
          </h2>

          <div className="space-y-4">
            <div>
              <h3 className="font-bold text-purple-800 dark:text-purple-300 mb-2">
                Chrome/Edge (Windows/Mac):
              </h3>
              <ol className="list-decimal list-inside text-purple-700 dark:text-purple-300 space-y-1 ml-4">
                <li>Haz clic en el icono de instalación en la barra de direcciones</li>
                <li>O ve a menú (⋮) → "Instalar aplicación"</li>
                <li>Confirma la instalación</li>
              </ol>
            </div>

            <div>
              <h3 className="font-bold text-purple-800 dark:text-purple-300 mb-2">
                iOS (Safari):
              </h3>
              <ol className="list-decimal list-inside text-purple-700 dark:text-purple-300 space-y-1 ml-4">
                <li>Toca el botón de compartir (cuadro con flecha)</li>
                <li>Selecciona "Agregar a pantalla de inicio"</li>
                <li>Confirma el nombre y agrega</li>
              </ol>
            </div>

            <div>
              <h3 className="font-bold text-purple-800 dark:text-purple-300 mb-2">
                Android (Chrome):
              </h3>
              <ol className="list-decimal list-inside text-purple-700 dark:text-purple-300 space-y-1 ml-4">
                <li>Toca el banner de instalación que aparece</li>
                <li>O menú (⋮) → "Agregar a pantalla de inicio"</li>
                <li>Confirma la instalación</li>
              </ol>
            </div>
          </div>
        </div>

        {/* Configuración técnica */}
        <div className="mb-8 p-6 bg-zinc-100 dark:bg-zinc-900 rounded-lg">
          <h2 className="text-2xl font-semibold mb-4 text-black dark:text-white">
            ⚙️ Configuración técnica
          </h2>

          <div className="space-y-4">
            <div className="p-4 bg-white dark:bg-zinc-800 rounded">
              <h3 className="font-bold mb-2 text-black dark:text-white">
                1. next-pwa instalado
              </h3>
              <pre className="text-xs bg-zinc-100 dark:bg-zinc-900 p-2 rounded overflow-x-auto">
                <code className="text-zinc-800 dark:text-zinc-200">
                  npm install next-pwa
                </code>
              </pre>
            </div>

            <div className="p-4 bg-white dark:bg-zinc-800 rounded">
              <h3 className="font-bold mb-2 text-black dark:text-white">
                2. next.config.ts configurado
              </h3>
              <pre className="text-xs bg-zinc-100 dark:bg-zinc-900 p-2 rounded overflow-x-auto">
                <code className="text-zinc-800 dark:text-zinc-200">
{`import withPWA from 'next-pwa';

const pwaConfig = withPWA({
  dest: 'public',
  register: true,
  skipWaiting: true,
});`}
                </code>
              </pre>
            </div>

            <div className="p-4 bg-white dark:bg-zinc-800 rounded">
              <h3 className="font-bold mb-2 text-black dark:text-white">
                3. manifest.json creado
              </h3>
              <p className="text-sm text-zinc-600 dark:text-zinc-400 mb-2">
                Archivo de configuración con nombre, iconos, colores, etc.
              </p>
              <p className="text-xs text-zinc-500 dark:text-zinc-500">
                Ubicación: <code className="bg-zinc-100 dark:bg-zinc-900 px-1 rounded">public/manifest.json</code>
              </p>
            </div>

            <div className="p-4 bg-white dark:bg-zinc-800 rounded">
              <h3 className="font-bold mb-2 text-black dark:text-white">
                4. Iconos generados
              </h3>
              <p className="text-sm text-zinc-600 dark:text-zinc-400">
                icon-192x192.png, icon-512x512.png, favicon, etc.
              </p>
            </div>

            <div className="p-4 bg-white dark:bg-zinc-800 rounded">
              <h3 className="font-bold mb-2 text-black dark:text-white">
                5. Service Worker
              </h3>
              <p className="text-sm text-zinc-600 dark:text-zinc-400">
                Generado automáticamente por next-pwa en la carpeta public/
              </p>
            </div>
          </div>
        </div>

        {/* Comparación Angular vs Next.js PWA */}
        <div className="mb-8 p-6 bg-orange-50 dark:bg-orange-900/20 rounded-lg border border-orange-200 dark:border-orange-800">
          <h2 className="text-2xl font-semibold mb-4 text-black dark:text-white">
            Angular vs Next.js PWA
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-4 bg-white dark:bg-zinc-800 rounded">
              <h3 className="font-bold mb-2 text-black dark:text-white">
                Angular (@angular/pwa)
              </h3>
              <pre className="text-xs text-zinc-700 dark:text-zinc-300">
{`ng add @angular/pwa

// Genera automáticamente:
// - ngsw-config.json
// - manifest.webmanifest
// - iconos
// - service worker`}
              </pre>
            </div>

            <div className="p-4 bg-white dark:bg-zinc-800 rounded">
              <h3 className="font-bold mb-2 text-black dark:text-white">
                Next.js (next-pwa)
              </h3>
              <pre className="text-xs text-zinc-700 dark:text-zinc-300">
{`npm install next-pwa

// Configurar en next.config.ts
// Crear manifest.json manual
// Generar iconos
// SW automático`}
              </pre>
            </div>
          </div>

          <p className="mt-4 text-sm text-orange-700 dark:text-orange-300">
            Ambos frameworks tienen excelente soporte para PWA. Angular es más automático,
            Next.js requiere un poco más de configuración manual pero da más control.
          </p>
        </div>

        {/* Test de funcionalidades PWA */}
        <div className="p-4 bg-green-50 dark:bg-green-900/20 border-l-4 border-green-500">
          <h3 className="font-bold text-green-800 dark:text-green-300 mb-2">
            ✅ Verificar que la PWA funciona:
          </h3>
          <ul className="list-disc list-inside text-green-700 dark:text-green-300 space-y-1">
            <li>Abre DevTools (F12) → Application → Manifest (debería mostrar el manifest.json)</li>
            <li>Application → Service Workers (debería estar registrado)</li>
            <li>Lighthouse → Generate Report → PWA (debería dar score alto)</li>
            <li>Intenta instalar la app desde el navegador</li>
            <li>Desconecta el internet y verifica que funcione offline</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

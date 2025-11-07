// NO tiene 'use client' = Server Component (por defecto)
// Se ejecuta en el servidor, NO envía JavaScript al navegador

export default function ServerInfo() {
  // Esto se ejecuta en el SERVIDOR al hacer build
  const buildTime = new Date().toLocaleString('es-ES');

  return (
    <div className="p-6 bg-green-50 dark:bg-green-900/20 rounded-lg border border-green-200 dark:border-green-800">
      <h3 className="text-xl font-semibold mb-4 text-black dark:text-white">
        Server Component
      </h3>

      <p className="text-zinc-700 dark:text-zinc-300 mb-2">
        Este componente se ejecutó en el servidor
      </p>
      <p className="text-sm text-zinc-600 dark:text-zinc-400">
        Build time: {buildTime}
      </p>

      <div className="mt-4 p-3 bg-yellow-50 dark:bg-yellow-900/20 rounded text-sm">
        <p className="text-zinc-700 dark:text-zinc-300">
          ✅ NO puede usar: useState, onClick, useEffect
        </p>
        <p className="text-zinc-700 dark:text-zinc-300">
          ✅ SÍ puede: fetch de datos, queries DB, leer archivos
        </p>
        <p className="text-zinc-700 dark:text-zinc-300">
          ✅ Mejor para SEO (ya viene renderizado)
        </p>
        <p className="text-zinc-700 dark:text-zinc-300">
          ✅ No envía JavaScript al navegador = Más rápido
        </p>
      </div>
    </div>
  );
}

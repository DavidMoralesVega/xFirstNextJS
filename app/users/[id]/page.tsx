// Ruta dinámica: /users/1, /users/2, /users/cualquier-cosa
// En Angular sería: { path: 'users/:id', component: UserComponent }

// Esta función es requerida para exportación estática
// Define qué IDs pre-generar como HTML estático
export function generateStaticParams() {
  return [{ id: "1" }, { id: "123" }, { id: "juan" }];
}

export default async function UserPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  // En Next.js 16, params es una Promise y necesita await
  const { id } = await params;

  return (
    <div className="min-h-screen p-8 bg-white dark:bg-black">
      <h1 className="text-4xl font-bold mb-4 text-black dark:text-white">
        User Profile
      </h1>
      <div className="p-6 bg-zinc-100 dark:bg-zinc-900 rounded-lg">
        <p className="text-2xl text-zinc-800 dark:text-zinc-200">
          User ID: <span className="font-bold text-blue-600">{id}</span>
        </p>
        <p className="mt-4 text-zinc-600 dark:text-zinc-400">
          Prueba visitando /users/1, /users/123, /users/juan
        </p>
      </div>

      <div className="mt-6 p-4 bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-500">
        <p className="text-sm text-zinc-700 dark:text-zinc-300">
          💡 En Angular: this.route.snapshot.params['id']
        </p>
        <p className="text-sm text-zinc-700 dark:text-zinc-300">
          💡 En Next.js 16: await params, luego params.id
        </p>
      </div>
    </div>
  );
}

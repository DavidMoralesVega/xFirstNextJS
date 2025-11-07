// Server Component - Fetch en el SERVIDOR (esto NO existe en Angular)
// No necesita 'use client'

interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

async function getPosts(): Promise<Post[]> {
  // Esto se ejecuta en el SERVIDOR durante el build
  const res = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=5', {
    cache: 'force-cache'  // Cachea los datos (como en build time)
  });

  if (!res.ok) {
    throw new Error('Failed to fetch posts');
  }

  return res.json();
}

export default async function ServerDataFetch() {
  // await directo en el componente! (solo en Server Components)
  const posts = await getPosts();

  return (
    <div className="p-6 bg-green-50 dark:bg-green-900/20 rounded-lg border border-green-200 dark:border-green-800">
      <h3 className="text-xl font-semibold mb-4 text-black dark:text-white">
        Server Data Fetch
      </h3>

      <div className="space-y-3 mb-4">
        {posts.map(post => (
          <div key={post.id} className="p-3 bg-white dark:bg-zinc-800 rounded border border-zinc-200 dark:border-zinc-700">
            <h4 className="font-bold text-black dark:text-white">{post.title}</h4>
            <p className="text-sm text-zinc-600 dark:text-zinc-400">{post.body.substring(0, 100)}...</p>
          </div>
        ))}
      </div>

      <div className="p-3 bg-yellow-50 dark:bg-yellow-900/20 rounded text-sm">
        <p className="text-zinc-700 dark:text-zinc-300 font-bold mb-2">
          ⚡ Server Component - Ventajas:
        </p>
        <ul className="list-disc list-inside text-zinc-700 dark:text-zinc-300 space-y-1">
          <li>Fetch se ejecuta en el servidor (durante build en sitios estáticos)</li>
          <li>HTML ya viene con los datos (mejor SEO)</li>
          <li>No hay loading spinner visible al usuario</li>
          <li>Datos cacheados por defecto</li>
        </ul>
        <p className="mt-2 text-zinc-700 dark:text-zinc-300">
          💡 <strong>En Angular:</strong> Esto NO es posible. Todo fetch es en el cliente.
        </p>
      </div>
    </div>
  );
}

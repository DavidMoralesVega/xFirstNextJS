export default function AboutPage() {
  return (
    <div className="min-h-screen p-8 bg-white dark:bg-black">
      <h1 className="text-4xl font-bold mb-4 text-black dark:text-white">
        About Page
      </h1>
      <p className="text-lg text-zinc-600 dark:text-zinc-400">
        Esta es la página About. Se accede desde /about
      </p>
      <p className="mt-4 text-zinc-600 dark:text-zinc-400">
        En Angular escribirías: {'{'} path: 'about', component: AboutComponent {'}'}
      </p>
      <p className="mt-2 text-zinc-600 dark:text-zinc-400">
        En Next.js solo creas: <code className="bg-zinc-100 dark:bg-zinc-800 px-2 py-1 rounded">app/about/page.tsx</code>
      </p>
    </div>
  );
}

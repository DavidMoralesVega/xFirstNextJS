export default function ContactPage() {
  return (
    <div className="min-h-screen p-8 bg-white dark:bg-black">
      <h1 className="text-4xl font-bold mb-4 text-black dark:text-white">
        Contact Page
      </h1>
      <p className="text-lg text-zinc-600 dark:text-zinc-400">
        Esta es la página de contacto. Se accede desde /contact
      </p>

      <div className="mt-6 p-4 bg-zinc-100 dark:bg-zinc-900 rounded-lg">
        <h2 className="text-xl font-semibold mb-2 text-black dark:text-white">Contacto</h2>
        <p className="text-zinc-600 dark:text-zinc-400">Email: info@example.com</p>
        <p className="text-zinc-600 dark:text-zinc-400">Teléfono: +123456789</p>
      </div>
    </div>
  );
}

import Image from "next/image";
import Link from "next/link";  // ← Como RouterLink en Angular

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex min-h-screen w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
        <Image
          className="dark:invert"
          src="/next.svg"
          alt="Next.js logo"
          width={100}
          height={20}
          priority
        />
        <div className="flex flex-col items-center gap-6 text-center sm:items-start sm:text-left">
          <h1 className="max-w-xs text-3xl font-semibold leading-10 tracking-tight text-black dark:text-zinc-50">
            Bienvenido a Next.js
          </h1>
          <p className="max-w-md text-lg leading-8 text-zinc-600 dark:text-zinc-400">
            Aprendiendo Next.js viniendo desde Angular
          </p>

          {/* Navegación - Como routerLink en Angular */}
          <div className="w-full p-6 bg-zinc-100 dark:bg-zinc-900 rounded-lg">
            <h2 className="text-xl font-semibold mb-4 text-black dark:text-white">
              Navegación (File-based Routing)
            </h2>
            <div className="flex flex-col gap-3">
              <Link
                href="/demo"
                className="text-green-600 dark:text-green-400 hover:underline font-bold text-lg"
              >
                🎯 Lección 2: Estado y Componentes
              </Link>
              <Link
                href="/props"
                className="text-purple-600 dark:text-purple-400 hover:underline font-bold text-lg"
              >
                🎯 Lección 3: Props (Input/Output)
              </Link>
              <Link
                href="/fetch"
                className="text-orange-600 dark:text-orange-400 hover:underline font-bold text-lg"
              >
                🎯 Lección 4: Fetch de Datos (HttpClient)
              </Link>
              <Link
                href="/about"
                className="text-blue-600 dark:text-blue-400 hover:underline"
              >
                → Ir a About (/about)
              </Link>
              <Link
                href="/contact"
                className="text-blue-600 dark:text-blue-400 hover:underline"
              >
                → Ir a Contact (/contact)
              </Link>
              <Link
                href="/users/123"
                className="text-blue-600 dark:text-blue-400 hover:underline"
              >
                → Ver Usuario 123 (/users/123)
              </Link>
              <Link
                href="/users/juan"
                className="text-blue-600 dark:text-blue-400 hover:underline"
              >
                → Ver Usuario Juan (/users/juan)
              </Link>
            </div>
            <p className="mt-4 text-sm text-zinc-500 dark:text-zinc-400">
              💡 En Angular: [routerLink]="/about"<br/>
              💡 En Next.js: &lt;Link href="/about"&gt;
            </p>
          </div>
        </div>
        <div className="flex flex-col gap-4 text-base font-medium sm:flex-row">
          <a
            className="flex h-12 w-full items-center justify-center gap-2 rounded-full bg-foreground px-5 text-background transition-colors hover:bg-[#383838] dark:hover:bg-[#ccc] md:w-[158px]"
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              className="dark:invert"
              src="/vercel.svg"
              alt="Vercel logomark"
              width={16}
              height={16}
            />
            Deploy Now
          </a>
          <a
            className="flex h-12 w-full items-center justify-center rounded-full border border-solid border-black/[.08] px-5 transition-colors hover:border-transparent hover:bg-black/[.04] dark:border-white/[.145] dark:hover:bg-[#1a1a1a] md:w-[158px]"
            href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            Documentation
          </a>
        </div>
      </main>
    </div>
  );
}

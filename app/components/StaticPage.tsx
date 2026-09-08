import Link from "next/link";

export default function StaticPage({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-1 flex-col items-center bg-zinc-50 px-4 py-16 dark:bg-black sm:py-24">
      <header className="mb-10 flex flex-col items-center text-center">
        <Link
          href="/"
          className="text-3xl font-bold tracking-tight sm:text-4xl"
        >
          HesaplaCepte
        </Link>
      </header>

      <main className="w-full max-w-2xl rounded-2xl border border-black/10 bg-white/70 p-6 shadow-sm backdrop-blur dark:border-white/10 dark:bg-white/5 sm:p-8">
        <h1 className="text-2xl font-bold tracking-tight">{title}</h1>
        <div className="mt-6 space-y-4 text-sm leading-relaxed text-black/70 dark:text-white/70 [&_h2]:mt-6 [&_h2]:mb-2 [&_h2]:text-base [&_h2]:font-semibold [&_h2]:text-black [&_h2]:dark:text-white [&_li]:mb-1 [&_ul]:list-disc [&_ul]:space-y-1 [&_ul]:pl-5 [&_a]:underline [&_a]:underline-offset-2">
          {children}
        </div>
      </main>
    </div>
  );
}

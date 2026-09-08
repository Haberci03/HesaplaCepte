import Link from "next/link";

export default function BlogLayout({
  children,
}: {
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
        <p className="mt-3 max-w-lg text-balance text-zinc-600 dark:text-zinc-400">
          Maaş, vergi ve finans konularında rehberler ve ipuçları
        </p>
      </header>

      <main className="flex w-full flex-col items-center">{children}</main>
    </div>
  );
}

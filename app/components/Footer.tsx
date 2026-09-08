import Link from "next/link";

const FOOTER_LINKS = [
  { href: "/", label: "Ana Sayfa" },
  { href: "/hakkimizda", label: "Hakkımızda" },
  { href: "/gizlilik-politikasi", label: "Gizlilik Politikası" },
  { href: "/iletisim", label: "İletişim" },
];

export default function Footer() {
  return (
    <footer className="border-t border-black/10 bg-zinc-50 px-4 py-8 dark:border-white/10 dark:bg-black">
      <div className="mx-auto flex max-w-4xl flex-col items-center gap-3 text-center">
        <nav className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm text-black/60 dark:text-white/60">
          {FOOTER_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="hover:text-black dark:hover:text-white"
            >
              {link.label}
            </Link>
          ))}
        </nav>
        <p className="text-xs text-black/40 dark:text-white/40">
          © {new Date().getFullYear()} HesaplaCepte. Tüm hesaplamalar
          bilgilendirme amaçlıdır.
        </p>
      </div>
    </footer>
  );
}

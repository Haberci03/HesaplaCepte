import Link from "next/link";

export interface RelatedItem {
  href: string;
  title: string;
  description?: string;
  badge?: string;
}

export default function RelatedContent({
  title,
  items,
}: {
  title: string;
  items: RelatedItem[];
}) {
  if (items.length === 0) return null;

  return (
    <section className="w-full max-w-2xl">
      <h2 className="text-lg font-semibold">{title}</h2>
      <div className="mt-4 grid gap-3 sm:grid-cols-2">
        {items.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className="group rounded-xl border border-black/10 bg-white/70 p-4 shadow-sm backdrop-blur transition-colors hover:border-black/20 dark:border-white/10 dark:bg-white/5 dark:hover:border-white/20"
          >
            {item.badge && (
              <span className="text-[11px] font-medium uppercase tracking-wide text-black/40 dark:text-white/40">
                {item.badge}
              </span>
            )}
            <p className="mt-0.5 text-sm font-medium">{item.title}</p>
            {item.description && (
              <p className="mt-1 line-clamp-2 text-xs text-black/50 dark:text-white/50">
                {item.description}
              </p>
            )}
          </Link>
        ))}
      </div>
    </section>
  );
}

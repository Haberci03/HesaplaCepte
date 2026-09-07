import type { FaqItem } from "@/app/data/faq";

export default function Faq({ items }: { items: FaqItem[] }) {
  return (
    <section className="w-full max-w-2xl">
      <h2 className="text-xl font-semibold">Sık Sorulan Sorular</h2>
      <div className="mt-4 divide-y divide-black/10 rounded-2xl border border-black/10 bg-white/70 dark:divide-white/10 dark:border-white/10 dark:bg-white/5">
        {items.map((item) => (
          <details key={item.question} className="group p-5 open:pb-5">
            <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-medium marker:content-none">
              {item.question}
              <span className="shrink-0 text-black/40 transition-transform group-open:rotate-45 dark:text-white/40">
                +
              </span>
            </summary>
            <p className="mt-3 text-sm leading-relaxed text-black/60 dark:text-white/60">
              {item.answer}
            </p>
          </details>
        ))}
      </div>
    </section>
  );
}

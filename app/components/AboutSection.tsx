import { LAST_UPDATED } from "@/lib/constants";

export default function AboutSection({
  title = "Bu Hesaplayıcı Hakkında",
  sources,
  children,
}: {
  title?: string;
  sources?: string[];
  children: React.ReactNode;
}) {
  return (
    <section className="w-full max-w-2xl">
      <h2 className="text-lg font-semibold">{title}</h2>
      <p className="mt-3 text-sm leading-relaxed text-black/60 dark:text-white/60 sm:text-base">
        {children}
      </p>
      <div className="mt-4 border-t border-black/10 pt-3 text-xs leading-relaxed text-black/50 dark:border-white/10 dark:text-white/50">
        <p className="font-medium text-black/60 dark:text-white/60">
          Kaynaklar ve Son Kontrol
        </p>
        {sources && sources.length > 0 && (
          <p className="mt-1">Kaynak: {sources.join("; ")}</p>
        )}
        <p className="mt-1">Son kontrol: {LAST_UPDATED}</p>
      </div>
    </section>
  );
}

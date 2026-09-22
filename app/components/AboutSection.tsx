export default function AboutSection({
  title = "Bu Hesaplayıcı Hakkında",
  children,
}: {
  title?: string;
  children: React.ReactNode;
}) {
  return (
    <section className="w-full max-w-2xl">
      <h2 className="text-lg font-semibold">{title}</h2>
      <p className="mt-3 text-sm leading-relaxed text-black/60 dark:text-white/60 sm:text-base">
        {children}
      </p>
    </section>
  );
}

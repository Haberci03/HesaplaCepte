const DEFAULT_TEXT =
  "Bu hesaplayıcılar yalnızca bilgilendirme amaçlıdır, resmi veya hukuki tavsiye niteliği taşımaz. Kesin sonuçlar için bir mali müşavir veya muhasebeciye danışmanızı öneririz.";

export default function Disclaimer({ text = DEFAULT_TEXT }: { text?: string }) {
  return (
    <div className="flex w-full max-w-2xl items-start gap-2.5 rounded-xl border border-sky-900/10 bg-sky-50/60 px-4 py-3 text-xs leading-relaxed text-sky-900/70 dark:border-sky-400/15 dark:bg-sky-400/[0.06] dark:text-sky-200/70 sm:text-sm">
      <svg
        aria-hidden
        viewBox="0 0 20 20"
        fill="currentColor"
        className="mt-0.5 h-4 w-4 shrink-0"
      >
        <path
          fillRule="evenodd"
          d="M18 10A8 8 0 1 1 2 10a8 8 0 0 1 16 0Zm-8-4.5a1 1 0 1 0 0 2 1 1 0 0 0 0-2ZM9 9a1 1 0 0 0 0 2h.25v3H9a1 1 0 1 0 0 2h2.5a1 1 0 1 0 0-2H11v-4a1 1 0 0 0-1-1H9Z"
          clipRule="evenodd"
        />
      </svg>
      <p>{text}</p>
    </div>
  );
}

import type { Metadata } from "next";
import Link from "next/link";
import { getAllPosts } from "@/lib/blog";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Maaş, vergi, kredi ve finans konularında rehberler, ipuçları ve güncel bilgiler.",
  alternates: { canonical: "/blog" },
};

const dateFormatter = new Intl.DateTimeFormat("tr-TR", {
  day: "numeric",
  month: "long",
  year: "numeric",
});

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <div className="w-full max-w-4xl">
      <h1 className="text-2xl font-bold tracking-tight sm:text-3xl">Blog</h1>

      {posts.length === 0 ? (
        <p className="mt-6 text-sm text-black/60 dark:text-white/60">
          Henüz yazı yayınlanmadı.
        </p>
      ) : (
        <div className="mt-6 grid gap-5 sm:grid-cols-2">
          {posts.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="group rounded-2xl border border-black/10 bg-white/70 p-6 shadow-sm backdrop-blur transition-colors hover:border-black/20 dark:border-white/10 dark:bg-white/5 dark:hover:border-white/20"
            >
              <p className="text-xs text-black/40 dark:text-white/40">
                {dateFormatter.format(new Date(post.date))}
              </p>
              <h2 className="mt-1 font-semibold">{post.title}</h2>
              <p className="mt-2 text-sm text-black/60 dark:text-white/60">
                {post.description}
              </p>
              <span className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-black/80 group-hover:gap-1.5 dark:text-white/80">
                Devamını Oku <span aria-hidden>→</span>
              </span>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}

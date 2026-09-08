import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { getAllPosts, getPostBySlug } from "@/lib/blog";
import { CALCULATOR_LABEL_BY_HREF, type CalculatorHref } from "@/lib/calculators";
import { buildBlogPostPageSchemas } from "@/lib/jsonLd";
import { getOtherBlogPostItems } from "@/lib/relatedContent";
import JsonLd from "@/app/components/JsonLd";
import RelatedContent from "@/app/components/RelatedContent";

const dateFormatter = new Intl.DateTimeFormat("tr-TR", {
  day: "numeric",
  month: "long",
  year: "numeric",
});

export function generateStaticParams() {
  return getAllPosts().map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return {};

  return {
    title: post.title,
    description: post.description,
    alternates: { canonical: `/blog/${post.slug}` },
  };
}

export default async function BlogPostPage(props: PageProps<"/blog/[slug]">) {
  const { slug } = await props.params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  const relatedLabel = post.relatedCalculator
    ? CALCULATOR_LABEL_BY_HREF[post.relatedCalculator as CalculatorHref]
    : undefined;

  return (
    <article className="w-full max-w-2xl">
      <JsonLd data={buildBlogPostPageSchemas(post)} />
      <Link
        href="/blog"
        className="text-sm text-black/50 hover:text-black dark:text-white/50 dark:hover:text-white"
      >
        ← Blog
      </Link>

      <p className="mt-4 text-xs text-black/40 dark:text-white/40">
        {dateFormatter.format(new Date(post.date))}
      </p>
      <h1 className="mt-1 text-2xl font-bold tracking-tight sm:text-3xl">
        {post.title}
      </h1>

      <div className="mt-6 space-y-4 text-sm leading-relaxed text-black/70 dark:text-white/70 [&_a]:underline [&_a]:underline-offset-2 [&_blockquote]:border-l-2 [&_blockquote]:border-black/20 [&_blockquote]:pl-4 [&_blockquote]:italic [&_blockquote]:dark:border-white/20 [&_h1]:mb-2 [&_h1]:mt-8 [&_h1]:text-xl [&_h1]:font-semibold [&_h1]:text-black [&_h1]:dark:text-white [&_h2]:mb-2 [&_h2]:mt-8 [&_h2]:text-lg [&_h2]:font-semibold [&_h2]:text-black [&_h2]:dark:text-white [&_h3]:mb-2 [&_h3]:mt-6 [&_h3]:font-semibold [&_h3]:text-black [&_h3]:dark:text-white [&_li]:mb-1 [&_ol]:list-decimal [&_ol]:space-y-1 [&_ol]:pl-5 [&_strong]:font-semibold [&_strong]:text-black [&_strong]:dark:text-white [&_ul]:list-disc [&_ul]:space-y-1 [&_ul]:pl-5">
        <ReactMarkdown remarkPlugins={[remarkGfm]}>
          {post.content}
        </ReactMarkdown>
      </div>

      {post.relatedCalculator && relatedLabel && (
        <Link
          href={post.relatedCalculator}
          className="group mt-10 flex items-center justify-between gap-4 rounded-2xl border border-black/10 bg-white/70 p-6 shadow-sm backdrop-blur transition-colors hover:border-black/20 dark:border-white/10 dark:bg-white/5 dark:hover:border-white/20"
        >
          <div>
            <p className="text-xs text-black/40 dark:text-white/40">
              İlgili Hesaplayıcı
            </p>
            <p className="mt-1 font-semibold">{relatedLabel}</p>
          </div>
          <span
            aria-hidden
            className="text-xl text-black/40 transition-transform group-hover:translate-x-0.5 dark:text-white/40"
          >
            →
          </span>
        </Link>
      )}

      <div className="mt-10">
        <RelatedContent
          title="Diğer Yazılar"
          items={getOtherBlogPostItems(post.slug)}
        />
      </div>
    </article>
  );
}

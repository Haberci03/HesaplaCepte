import { CALCULATORS, type CalculatorHref } from "./calculators";
import { getAllPosts } from "./blog";
import type { RelatedItem } from "@/app/components/RelatedContent";

const MAX_RELATED_CALCULATORS = 3;
const MAX_OTHER_POSTS = 3;

// Bir hesaplayıcı sayfası için "İlgili Hesaplayıcılar" bölümünün öğelerini
// üretir: aynı kategorideki diğer hesaplayıcılar (en fazla 3) ve varsa
// frontmatter'ında relatedCalculator bu hesaplayıcıya eşleşen blog yazıları.
export function getRelatedCalculatorItems(
  currentHref: CalculatorHref
): RelatedItem[] {
  const current = CALCULATORS.find((c) => c.href === currentHref);
  if (!current) return [];

  const relatedCalculators: RelatedItem[] = CALCULATORS.filter(
    (c) => c.category === current.category && c.href !== currentHref
  )
    .slice(0, MAX_RELATED_CALCULATORS)
    .map((c) => ({ href: c.href, title: c.label }));

  const relatedPosts: RelatedItem[] = getAllPosts()
    .filter((post) => post.relatedCalculator === currentHref)
    .map((post) => ({
      href: `/blog/${post.slug}`,
      title: post.title,
      description: post.description,
      badge: "Blog Yazısı",
    }));

  return [...relatedCalculators, ...relatedPosts];
}

// Bir blog yazısı için "Diğer Yazılar" bölümünün öğelerini üretir: bu yazı
// hariç, en yeni tarihliden başlayarak en fazla 3 yazı.
export function getOtherBlogPostItems(currentSlug: string): RelatedItem[] {
  return getAllPosts()
    .filter((post) => post.slug !== currentSlug)
    .slice(0, MAX_OTHER_POSTS)
    .map((post) => ({
      href: `/blog/${post.slug}`,
      title: post.title,
      description: post.description,
    }));
}

import { SITE_NAME, SITE_URL } from "./site";
import {
  CALCULATOR_LABEL_BY_HREF,
  CALCULATOR_CATEGORY_BY_HREF,
  type CalculatorHref,
} from "./calculators";

export interface BreadcrumbItem {
  name: string;
  path: string; // "/" için "", örn. "/maas-hesaplama"
}

export function buildBreadcrumbSchema(items: BreadcrumbItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: `${SITE_URL}${item.path}`,
    })),
  };
}

export function buildFaqSchema(items: { question: string; answer: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };
}

export function buildWebSiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: SITE_NAME,
    url: SITE_URL,
    description:
      "Maaş, KDV, kıdem tazminatı, kredi, sağlık ve finans konularında güncel oranlarla ücretsiz hesaplama araçları.",
  };
}

export function buildBlogPostingSchema(post: {
  title: string;
  description: string;
  date: string;
  slug: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.description,
    datePublished: post.date,
    url: `${SITE_URL}/blog/${post.slug}`,
    author: {
      "@type": "Organization",
      name: SITE_NAME,
      url: SITE_URL,
    },
    publisher: {
      "@type": "Organization",
      name: SITE_NAME,
      url: SITE_URL,
    },
  };
}

// Bir hesaplayıcı sayfası için FAQPage + BreadcrumbList şemalarını, mevcut
// SSS listesinden ve lib/calculators.ts'deki etiket/kategoriden otomatik üretir.
// Kategorilerin kendi sayfası olmadığından, o adım ana sayfaya işaret eder.
export function buildCalculatorPageSchemas(
  href: CalculatorHref,
  faqItems: { question: string; answer: string }[]
) {
  const label = CALCULATOR_LABEL_BY_HREF[href];
  const category = CALCULATOR_CATEGORY_BY_HREF[href];

  const breadcrumb = buildBreadcrumbSchema([
    { name: "Ana Sayfa", path: "" },
    { name: category, path: "" },
    { name: label, path: href },
  ]);

  return [breadcrumb, buildFaqSchema(faqItems)];
}

// Bir blog yazısı için BlogPosting + BreadcrumbList şemalarını, yazının
// frontmatter verisinden otomatik üretir.
export function buildBlogPostPageSchemas(post: {
  title: string;
  description: string;
  date: string;
  slug: string;
}) {
  const breadcrumb = buildBreadcrumbSchema([
    { name: "Ana Sayfa", path: "" },
    { name: "Blog", path: "/blog" },
    { name: post.title, path: `/blog/${post.slug}` },
  ]);

  return [breadcrumb, buildBlogPostingSchema(post)];
}

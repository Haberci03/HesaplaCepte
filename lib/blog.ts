import fs from "fs";
import path from "path";
import matter from "gray-matter";

const BLOG_DIR = path.join(process.cwd(), "content/blog");

export interface BlogPostMeta {
  slug: string;
  title: string;
  description: string;
  date: string;
  relatedCalculator?: string;
}

export interface BlogPost extends BlogPostMeta {
  content: string;
}

function getMarkdownFiles(): string[] {
  if (!fs.existsSync(BLOG_DIR)) return [];
  return fs.readdirSync(BLOG_DIR).filter((file) => file.endsWith(".md"));
}

function readMeta(file: string): BlogPostMeta {
  const raw = fs.readFileSync(path.join(BLOG_DIR, file), "utf-8");
  const { data } = matter(raw);

  return {
    slug: data.slug,
    title: data.title,
    description: data.description,
    date: data.date,
    relatedCalculator: data.relatedCalculator,
  };
}

// Sayfa zaten frontmatter'daki title'ı büyük bir <h1> olarak gösterir; içerik
// aynı başlığı tekrarlayan bir "# Başlık" satırıyla başlıyorsa bunu kırpar.
function stripLeadingH1(content: string): string {
  const trimmed = content.trimStart();
  const match = trimmed.match(/^#\s+[^\n]+\n?/);
  return match ? trimmed.slice(match[0].length).trimStart() : content;
}

function readPost(file: string): BlogPost {
  const raw = fs.readFileSync(path.join(BLOG_DIR, file), "utf-8");
  const { data, content } = matter(raw);

  return {
    slug: data.slug,
    title: data.title,
    description: data.description,
    date: data.date,
    relatedCalculator: data.relatedCalculator,
    content: stripLeadingH1(content),
  };
}

// Yazıları tarihe göre yeniden eskiye sıralı döner.
export function getAllPosts(): BlogPostMeta[] {
  return getMarkdownFiles()
    .map(readMeta)
    .sort((a, b) => (a.date < b.date ? 1 : -1));
}

export function getPostBySlug(slug: string): BlogPost | null {
  const post = getMarkdownFiles()
    .map(readPost)
    .find((p) => p.slug === slug);
  return post ?? null;
}

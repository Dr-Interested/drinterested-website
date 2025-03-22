import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"

import { getPostBySlug } from "@/data/blog"
import { formatDate } from "@/lib/utils"

type BlogPostPageProps = {
  params: {
    slug: string
  }
}

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const post = getPostBySlug(params.slug)

  if (!post) {
    return {
      title: "Post Not Found",
    }
  }

  return {
    title: post.title,
    description: post.excerpt,
  }
}

export default function BlogPostPage({ params }: BlogPostPageProps) {
  const post = getPostBySlug(params.slug)

  if (!post) {
    notFound()
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="mb-8">
        <Link href="/blog" className="text-primary hover:underline mb-4 inline-block">
          ← Back to all posts
        </Link>
      </div>

      <article className="prose prose-lg max-w-4xl mx-auto dark:prose-invert">
        <div className="mb-8 text-center">
          <h1 className="text-4xl font-bold mb-4">{post.title}</h1>
          <div className="text-muted-foreground mb-4">
            {post.author && <span>By {post.author} • </span>}
            <time dateTime={post.date}>{formatDate(post.date)}</time>
          </div>
        </div>

        <div className="mb-12 relative aspect-video overflow-hidden rounded-lg">
          <Image src={post.image || "/placeholder.svg"} alt={post.title} fill className="object-cover" priority />
        </div>

        <div
          className="blog-content"
          dangerouslySetInnerHTML={{ __html: post.content ? markdownToHtml(post.content) : post.excerpt }}
        />
      </article>
    </div>
  )
}

// Simple markdown to HTML converter
function markdownToHtml(markdown: string): string {
  if (!markdown) return ""

  // Convert headers
  let html = markdown
    .replace(/^# (.*$)/gm, "<h1>$1</h1>")
    .replace(/^## (.*$)/gm, "<h2>$1</h2>")
    .replace(/^### (.*$)/gm, "<h3>$1</h3>")
    .replace(/^#### (.*$)/gm, "<h4>$1</h4>")
    .replace(/^##### (.*$)/gm, "<h5>$1</h5>")
    .replace(/^###### (.*$)/gm, "<h6>$1</h6>")

  // Convert paragraphs - ensure there's a blank line before and after
  html = html.replace(/^(?!<h[1-6]|<ul|<ol|<li|<blockquote)(.+)$/gm, "<p>$1</p>")

  // Convert bold and italic
  html = html.replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>").replace(/\*(.*?)\*/g, "<em>$1</em>")

  // Convert lists
  html = html.replace(/^- (.*$)/gm, "<ul><li>$1</li></ul>").replace(/<\/ul>\s*<ul>/g, "")

  // Convert links
  html = html.replace(/\[(.*?)\]$$(.*?)$$/g, '<a href="$2">$1</a>')

  // Convert line breaks
  html = html.replace(/\n\n/g, "<br />")

  return html
}


import Link from "next/link"
import Image from "next/image"
import { ArrowLeft } from "lucide-react"
import { blogPosts, getPostsByCategory } from "@/data/blog"

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const { slug } = params

  // Find the current post
  const currentPost = blogPosts.find((post) => post.slug === slug)

  // If post not found, use placeholder data
  const title =
    currentPost?.title ||
    slug
      .split("-")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ")

  // Determine category from current post or slug
  const getCategory = () => {
    if (currentPost) {
      return currentPost.category.toLowerCase().replace(/\s+/g, "-")
    }

    if (slug.includes("cancer") || slug.includes("immunotherapy") || slug.includes("toxins")) {
      return "cancer"
    } else if (
      slug.includes("doctor") ||
      slug.includes("nephrologist") ||
      slug.includes("hepatology") ||
      slug.includes("endocrinologist") ||
      slug.includes("medicine") ||
      slug.includes("cardiologist")
    ) {
      return "types-of-doctors"
    } else if (slug.includes("nurse") || slug.includes("elder")) {
      return "types-of-nurses"
    }
    return ""
  }

  const category = getCategory()
  const categoryName =
    category === "cancer"
      ? "Cancer"
      : category === "types-of-doctors"
        ? "Types of Doctors"
        : category === "types-of-nurses"
          ? "Types of Nurses"
          : ""

  // Get related posts (up to 3 latest posts from the same category, excluding current post)
  const relatedPosts = getPostsByCategory(category)
    .filter((post) => post.slug !== slug) // Exclude current post
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()) // Sort by date (newest first)
    .slice(0, 3) // Get up to 3 posts

  return (
    <>
      <section className="bg-tertiary py-16 md:py-24">
        <div className="container-custom">
          <div className="flex flex-wrap gap-4 mb-6">
            <Link href="/blog" className="flex items-center text-primary hover:text-secondary">
              <ArrowLeft size={20} className="mr-2" />
              All Topics
            </Link>

            {category && (
              <Link href={`/blog/category/${category}`} className="flex items-center text-primary hover:text-secondary">
                <ArrowLeft size={20} className="mr-2" />
                {categoryName}
              </Link>
            )}
          </div>

          <h1 className="heading-fancy text-primary mb-6">{title}</h1>
          <div className="flex items-center text-gray-600 mb-8">
            <span>{currentPost?.date || "June 15, 2024"}</span>
            <span className="mx-2">•</span>
            <span>Dr. Interested Team</span>
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="relative h-[400px] w-full mb-8 rounded-lg overflow-hidden">
              <Image
                src={currentPost?.image || `/placeholder.svg?height=800&width=1200&text=${slug.replace(/-/g, "+")}`}
                alt={title}
                fill
                className="object-cover"
              />
            </div>

            <div className="prose prose-lg max-w-none">
              <p>
                This is a placeholder for the blog post content. In a real application, this would be the full content
                of the blog post with proper formatting, images, and other elements.
              </p>

              <p>
                The content would be fetched from a database or CMS based on the slug parameter: <strong>{slug}</strong>
              </p>

              <h2>Introduction</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in dui mauris. Vivamus hendrerit arcu
                sed erat molestie vehicula. Sed auctor neque eu tellus rhoncus ut eleifend nibh porttitor. Ut in nulla
                enim.
              </p>

              <h2>Main Content</h2>
              <p>
                Suspendisse in justo eu magna luctus suscipit. Sed lectus. Integer euismod lacus luctus magna. Quisque
                cursus, metus vitae pharetra auctor, sem massa mattis sem, at interdum magna augue eget diam.
              </p>

              <p>
                Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Morbi lacinia
                molestie dui. Praesent blandit dolor. Sed non quam. In vel mi sit amet augue congue elementum. Morbi in
                ipsum sit amet pede facilisis laoreet.
              </p>

              <h2>Conclusion</h2>
              <p>
                Donec lacus nunc, viverra nec, blandit vel, egestas et, augue. Vestibulum tincidunt malesuada tellus. Ut
                ultrices ultrices enim. Curabitur sit amet mauris. Morbi in dui quis est pulvinar ullamcorper.
              </p>
            </div>

            {relatedPosts.length > 0 && (
              <div className="mt-12 pt-8 border-t border-gray-200">
                <h3 className="text-xl font-semibold mb-4">Related Articles</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {relatedPosts.map((post) => (
                    <div key={post.id} className="bg-tertiary rounded-lg p-4">
                      <h4 className="font-medium mb-2">{post.title}</h4>
                      <p className="text-sm text-gray-600 mb-2">{post.date}</p>
                      <Link href={`/blog/${post.slug}`}>
                        <span className="text-secondary hover:underline">Read More</span>
                      </Link>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </section>
    </>
  )
}


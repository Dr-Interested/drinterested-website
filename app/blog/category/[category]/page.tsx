import Link from "next/link"
import { OptimizedImage } from "@/components/ui/image"
import { Button } from "@/components/ui/button"
import { ArrowLeft } from "lucide-react"
import { getPostsByCategory } from "@/data/blog"
import { formatDate } from "@/lib/utils"

// Define the params type for this dynamic route
type Params = {
  category: string
}

// Define the props type for the page component
type Props = {
  params: Params
}

export default function CategoryPage({ params }: Props) {
  const { category } = params

  // Format category name for display
  const getCategoryName = () => {
    if (category === "cancer") return "Cancer"
    if (category === "types-of-doctors") return "Types of Doctors"
    if (category === "types-of-nurses") return "Types of Nurses"
    return category
      .split("-")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ")
  }

  const categoryName = getCategoryName()

  // Filter posts by category
  const filteredPosts = getPostsByCategory(category)

  return (
    <>
      <section className="bg-tertiary py-16 md:py-24">
        <div className="container-custom">
          <Link href="/blog" className="flex items-center text-primary hover:text-secondary mb-6">
            <ArrowLeft size={20} className="mr-2" />
            All Topics
          </Link>
          <h1 className="heading-fancy text-primary mb-6">{categoryName}</h1>
          <p className="text-xl max-w-3xl" style={{ fontFamily: "Montserrat, sans-serif" }}>
            Explore our articles about {categoryName.toLowerCase()}.
          </p>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map((post) => (
              <div key={post.id} className="bg-tertiary rounded-lg overflow-hidden shadow-md card-hover">
                <div className="relative h-48">
                  <OptimizedImage
                    src={post.image || "/placeholder.svg"}
                    alt={post.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </div>
                <div className="p-6 space-y-4">
                  <span className="text-sm text-gray-600">{formatDate(post.date)}</span>
                  <h3 className="text-primary" style={{ fontFamily: "Playfair Display, serif" }}>
                    {post.title}
                  </h3>
                  <p style={{ fontFamily: "Montserrat, sans-serif" }}>{post.excerpt}</p>
                  <Link href={`/blog/${post.slug}`}>
                    <Button className="btn-secondary w-full">Read More</Button>
                  </Link>
                </div>
              </div>
            ))}
          </div>

          {filteredPosts.length === 0 && (
            <div className="text-center py-12">
              <h3 className="text-xl mb-4">No articles found in this category</h3>
              <Link href="/blog">
                <Button className="btn-primary">Browse All Topics</Button>
              </Link>
            </div>
          )}
        </div>
      </section>

      <section className="section-padding bg-primary text-white">
        <div className="container-custom text-center space-y-6">
          <h2 className="heading-fancy">Interested in Contributing?</h2>
          <p className="max-w-2xl mx-auto" style={{ fontFamily: "Montserrat, sans-serif" }}>
            Are you passionate about healthcare and enjoy writing? We welcome guest contributors to our blog!
          </p>
          <Button className="bg-white text-primary hover:bg-white/90">Contact Us</Button>
        </div>
      </section>
    </>
  )
}


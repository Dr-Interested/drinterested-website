import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowLeft } from "lucide-react"

// Types for our blog data
type BlogPost = {
  id: string
  title: string
  excerpt: string
  category: string
  slug: string
  image: string
  date: string
}

// Blog data
const blogPosts: BlogPost[] = [
  // Cancer Category
  {
    id: "cancer-overview",
    title: "What is Cancer: A General Overview",
    excerpt: "An introduction to cancer, its causes, and how it affects the body.",
    category: "Cancer",
    slug: "what-is-cancer-overview",
    image: "/placeholder.svg?height=400&width=600&text=Cancer+Overview",
    date: "June 15, 2024",
  },
  {
    id: "immunotherapy",
    title: "Immunotherapy",
    excerpt: "Exploring how immunotherapy is revolutionizing cancer treatment.",
    category: "Cancer",
    slug: "immunotherapy",
    image: "/placeholder.svg?height=400&width=600&text=Immunotherapy",
    date: "June 10, 2024",
  },
  {
    id: "coleys-toxins",
    title: "Coley's Toxins",
    excerpt: "The history and modern applications of Coley's Toxins in cancer treatment.",
    category: "Cancer",
    slug: "coleys-toxins",
    image: "/placeholder.svg?height=400&width=600&text=Coleys+Toxins",
    date: "June 5, 2024",
  },

  // Types of Doctors Category
  {
    id: "nephrologists",
    title: "An Overview on Nephrologists",
    excerpt: "Understanding the role of nephrologists in kidney health and disease management.",
    category: "Types of Doctors",
    slug: "overview-nephrologists",
    image: "/placeholder.svg?height=400&width=600&text=Nephrologists",
    date: "May 28, 2024",
  },
  {
    id: "hepatology",
    title: "Understanding Hepatology",
    excerpt: "A deep dive into the field of hepatology and liver disease treatment.",
    category: "Types of Doctors",
    slug: "understanding-hepatology",
    image: "/placeholder.svg?height=400&width=600&text=Hepatology",
    date: "May 22, 2024",
  },
  {
    id: "endocrinologists",
    title: "The Role of Endocrinologists and a Case Study in Medullary Thyroid Cancer",
    excerpt: "Exploring endocrinology through the lens of a complex thyroid cancer case.",
    category: "Types of Doctors",
    slug: "endocrinologists-thyroid-cancer",
    image: "/placeholder.svg?height=400&width=600&text=Endocrinologists",
    date: "May 15, 2024",
  },
  {
    id: "internal-medicine",
    title: "How Internal Medicine Doctors Solve Complex Cases",
    excerpt: "The diagnostic approach and problem-solving methods used by internal medicine specialists.",
    category: "Types of Doctors",
    slug: "internal-medicine-complex-cases",
    image: "/placeholder.svg?height=400&width=600&text=Internal+Medicine",
    date: "May 8, 2024",
  },
  {
    id: "cardiologists",
    title: "The Vital Role of Cardiologists: Specialists in Heart Health",
    excerpt: "Understanding the importance of cardiologists in diagnosing and treating heart conditions.",
    category: "Types of Doctors",
    slug: "cardiologists-heart-health",
    image: "/placeholder.svg?height=400&width=600&text=Cardiologists",
    date: "May 1, 2024",
  },

  // Types of Nurses Category
  {
    id: "pediatric-nurses",
    title: "The Role and Importance of Pediatric Nurses",
    excerpt: "How pediatric nurses provide specialized care for children and support for families.",
    category: "Types of Nurses",
    slug: "pediatric-nurses-role",
    image: "/placeholder.svg?height=400&width=600&text=Pediatric+Nurses",
    date: "April 25, 2024",
  },
  {
    id: "elder-care",
    title: "Specialization in Elder Care",
    excerpt: "The unique challenges and rewards of nursing specialization in geriatric care.",
    category: "Types of Nurses",
    slug: "elder-care-specialization",
    image: "/placeholder.svg?height=400&width=600&text=Elder+Care",
    date: "April 18, 2024",
  },
]

export default function CategoryPage({ params }: { params: { category: string } }) {
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
  const filteredPosts = blogPosts.filter((post) => post.category.toLowerCase().replace(/\s+/g, "-") === category)

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
                  <Image src={post.image || "/placeholder.svg"} alt={post.title} fill className="object-cover" />
                </div>
                <div className="p-6 space-y-4">
                  <span className="text-sm text-gray-600">{post.date}</span>
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


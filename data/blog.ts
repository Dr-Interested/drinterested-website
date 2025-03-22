// Types for our blog data
export type BlogPost = {
  id: string
  title: string
  excerpt: string
  category: string
  slug: string
  image: string
  date: string
  content?: string
}

export type BlogCategory = {
  id: string
  name: string
  slug: string
  description: string
  image: string
}

// Blog categories
export const blogCategories: BlogCategory[] = [
  {
    id: "cancer",
    name: "Cancer",
    slug: "cancer",
    description: "Learn about different aspects of cancer, from general overviews to specific treatment approaches.",
    image: "/placeholder.svg?height=600&width=800&text=Cancer",
  },
  {
    id: "types-of-doctors",
    name: "Types of Doctors",
    slug: "types-of-doctors",
    description: "Explore different medical specialties and the roles of various types of physicians.",
    image: "/placeholder.svg?height=600&width=800&text=Types+of+Doctors",
  },
  {
    id: "types-of-nurses",
    name: "Types of Nurses",
    slug: "types-of-nurses",
    description: "Discover the diverse roles and specializations within the nursing profession.",
    image: "/placeholder.svg?height=600&width=800&text=Types+of+Nurses",
  },
]

// Blog posts
export const blogPosts: BlogPost[] = [
  // Cancer Category
  {
    id: "cancer-overview",
    title: "What is Cancer: A General Overview",
    excerpt: "An introduction to cancer, its causes, and how it affects the body.",
    category: "Cancer",
    slug: "cancer-overview",
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
    slug: "nephrologists",
    image: "/placeholder.svg?height=400&width=600&text=Nephrologists",
    date: "May 28, 2024",
  },
  {
    id: "hepatology",
    title: "Understanding Hepatology",
    excerpt: "A deep dive into the field of hepatology and liver disease treatment.",
    category: "Types of Doctors",
    slug: "hepatology",
    image: "/placeholder.svg?height=400&width=600&text=Hepatology",
    date: "May 22, 2024",
  },
  {
    id: "endocrinologists",
    title: "The Role of Endocrinologists and a Case Study in Medullary Thyroid Cancer",
    excerpt: "Exploring endocrinology through the lens of a complex thyroid cancer case.",
    category: "Types of Doctors",
    slug: "endocrinologists",
    image: "/placeholder.svg?height=400&width=600&text=Endocrinologists",
    date: "May 15, 2024",
  },
  {
    id: "internal-medicine",
    title: "How Internal Medicine Doctors Solve Complex Cases",
    excerpt: "The diagnostic approach and problem-solving methods used by internal medicine specialists.",
    category: "Types of Doctors",
    slug: "internal-medicine",
    image: "/placeholder.svg?height=400&width=600&text=Internal+Medicine",
    date: "May 8, 2024",
  },
  {
    id: "cardiologists",
    title: "The Vital Role of Cardiologists: Specialists in Heart Health",
    excerpt: "Understanding the importance of cardiologists in diagnosing and treating heart conditions.",
    category: "Types of Doctors",
    slug: "cardiologists",
    image: "/placeholder.svg?height=400&width=600&text=Cardiologists",
    date: "May 1, 2024",
  },

  // Types of Nurses Category
  {
    id: "pediatric-nurses",
    title: "The Role and Importance of Pediatric Nurses",
    excerpt: "How pediatric nurses provide specialized care for children and support for families.",
    category: "Types of Nurses",
    slug: "pediatric-nurses",
    image: "/placeholder.svg?height=400&width=600&text=Pediatric+Nurses",
    date: "April 25, 2024",
  },
  {
    id: "elder-care",
    title: "Specialization in Elder Care",
    excerpt: "The unique challenges and rewards of nursing specialization in geriatric care.",
    category: "Types of Nurses",
    slug: "elder-care",
    image: "/placeholder.svg?height=400&width=600&text=Elder+Care",
    date: "April 18, 2024",
  },
]

// Helper functions
export function getPostsByCategory(category: string): BlogPost[] {
  return blogPosts.filter((post) => post.category.toLowerCase().replace(/\s+/g, "-") === category.toLowerCase())
}

export function getLatestPostByCategory(category: string): BlogPost | null {
  const posts = getPostsByCategory(category)
  if (posts.length === 0) return null

  // Sort by date (newest first) and return the first post
  return posts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())[0]
}

export function getPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find((post) => post.slug === slug)
}

export function getCategoryBySlug(slug: string): BlogCategory | undefined {
  return blogCategories.find((category) => category.slug === slug)
}


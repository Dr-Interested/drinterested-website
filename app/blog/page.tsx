import Link from "next/link"
import { OptimizedImage } from "@/components/ui/image"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import { blogCategories, getLatestPostByCategory } from "@/data/blog"
import { formatDate } from "@/lib/utils"

export default function BlogPage() {
  return (
    <>
      <section className="bg-tertiary py-16 md:py-24">
        <div className="container-custom text-center">
          <h1 className="heading-fancy text-primary mb-6">Blog</h1>
          <p className="text-xl max-w-3xl mx-auto" style={{ fontFamily: "Montserrat, sans-serif" }}>
            Explore healthcare topics through our educational articles and insights.
          </p>
        </div>
      </section>

      {/* Blog Categories Navigation */}
      <section className="bg-white py-8 border-b">
        <div className="container-custom">
          <div className="flex flex-wrap justify-center gap-4">
            {blogCategories.map((category) => (
              <a
                key={category.slug}
                href={`#${category.slug}`}
                className="px-6 py-2 bg-tertiary rounded-full text-primary font-medium hover:bg-secondary hover:text-white transition-colors"
              >
                {category.name}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Topics Section - One row per topic with latest post */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <h2 className="heading-fancy text-primary text-center mb-12">All Topics</h2>

          <div className="space-y-16">
            {blogCategories.map((category) => {
              const latestPost = getLatestPostByCategory(category.slug)
              return (
                <div key={category.id} id={category.slug} className="scroll-mt-24">
                  <div className="bg-tertiary/20 rounded-lg p-8 shadow-md">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                      {/* Category Info */}
                      <div className="lg:col-span-1">
                        <h3
                          className="text-2xl font-bold text-primary mb-4"
                          style={{ fontFamily: "Playfair Display, serif" }}
                        >
                          {category.name}
                        </h3>
                        <p className="mb-6" style={{ fontFamily: "Montserrat, sans-serif" }}>
                          {category.description}
                        </p>
                        <Link href={`/blog/category/${category.slug}`}>
                          <Button className="btn-secondary flex items-center gap-2">
                            View All Articles
                            <ArrowRight size={16} />
                          </Button>
                        </Link>
                      </div>

                      {/* Latest Post */}
                      <div className="lg:col-span-2">
                        {latestPost ? (
                          <div className="bg-white rounded-lg overflow-hidden shadow-md h-full flex flex-col">
                            <div className="relative h-48 md:h-64">
                              <OptimizedImage
                                src={latestPost.image || "/placeholder.svg"}
                                alt={latestPost.title}
                                fill
                                className="object-cover"
                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                priority={true}
                              />
                              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                              <div className="absolute bottom-0 left-0 p-4 text-white">
                                <span className="text-sm bg-secondary/80 px-2 py-1 rounded-md">Latest</span>
                              </div>
                            </div>
                            <div className="p-6 flex-grow flex flex-col">
                              <span className="text-sm text-gray-600 mb-2">{formatDate(latestPost.date)}</span>
                              <h4
                                className="text-xl font-bold text-primary mb-3"
                                style={{ fontFamily: "Playfair Display, serif" }}
                              >
                                {latestPost.title}
                              </h4>
                              <p
                                className="text-gray-700 mb-4 flex-grow"
                                style={{ fontFamily: "Montserrat, sans-serif" }}
                              >
                                {latestPost.excerpt}
                              </p>
                              <Link href={`/blog/${latestPost.slug}`}>
                                <Button className="w-full bg-primary hover:bg-primary/90">Read Article</Button>
                              </Link>
                            </div>
                          </div>
                        ) : (
                          <div className="bg-white rounded-lg p-6 h-full flex items-center justify-center">
                            <p className="text-gray-500 italic">No articles available in this category yet.</p>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
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


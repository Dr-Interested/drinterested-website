import { Button } from "@/components/ui/button"
import Image from "next/image"

export default function GalleryPage() {
  return (
    <>
      <section className="bg-tertiary py-16 md:py-24">
        <div className="container-custom text-center">
          <h1 className="text-primary mb-6">Gallery</h1>
          <p className="text-xl max-w-3xl mx-auto">Images of our work, events, and community in action.</p>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-custom">
          <h2 className="text-primary text-center mb-12">Event Highlights</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1, 2, 3, 4, 5, 6].map((img) => (
              <div
                key={img}
                className="relative h-64 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow"
              >
                <Image
                  src={`/placeholder.svg?height=400&width=600&text=Event+Image+${img}`}
                  alt={`Event image ${img}`}
                  fill
                  className="object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-secondary/10">
        <div className="container-custom">
          <h2 className="text-primary text-center mb-12">Research Showcase</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1, 2, 3, 4, 5, 6].map((img) => (
              <div
                key={img}
                className="relative h-64 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow"
              >
                <Image
                  src={`/placeholder.svg?height=400&width=600&text=Research+Image+${img}`}
                  alt={`Research image ${img}`}
                  fill
                  className="object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-custom">
          <h2 className="text-primary text-center mb-12">Team Building</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1, 2, 3, 4, 5, 6].map((img) => (
              <div
                key={img}
                className="relative h-64 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow"
              >
                <Image
                  src={`/placeholder.svg?height=400&width=600&text=Team+Image+${img}`}
                  alt={`Team image ${img}`}
                  fill
                  className="object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-primary text-white">
        <div className="container-custom text-center space-y-6">
          <h2>Share Your Experience</h2>
          <p className="max-w-2xl mx-auto">Have photos from our events? We'd love to feature them in our gallery!</p>
          <Button className="bg-white text-primary hover:bg-white/90">Submit Photos</Button>
        </div>
      </section>
    </>
  )
}


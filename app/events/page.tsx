import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Calendar, Clock, MapPin } from "lucide-react"
import { Input } from "@/components/ui/input"
import Link from "next/link"

export default function EventsPage() {
  return (
    <>
      <section className="bg-tertiary py-16 md:py-24">
        <div className="container-custom text-center">
          <h1 className="heading-fancy text-primary mb-6">Events</h1>
          <p className="text-xl max-w-3xl mx-auto" style={{ fontFamily: "Montserrat, sans-serif" }}>
            Join us for engaging events designed to educate and inspire the next generation of healthcare professionals.
          </p>
        </div>
      </section>

      {/* Upcoming Events Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="heading-fancy text-primary">Upcoming Events</h2>
            <div className="section-divider"></div>
            <p className="text-xl mt-4" style={{ fontFamily: "Playfair Display, serif" }}>
              Don't Miss Out!
            </p>
            <p className="mt-2" style={{ fontFamily: "Montserrat, sans-serif" }}>
              Stay informed about our upcoming events, designed to educate and inspire.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-tertiary rounded-lg overflow-hidden shadow-md card-hover">
              <div className="relative h-48">
                <Image
                  src="/placeholder.svg?height=400&width=600"
                  alt="Pathways to Medicine Webinar"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6 space-y-4">
                <h3 className="text-primary" style={{ fontFamily: "Playfair Display, serif" }}>
                  Pathways to Medicine Webinar
                </h3>
                <div className="flex items-center gap-2 text-gray-600 mb-2">
                  <Calendar size={18} />
                  <span>TBD</span>
                </div>
                <div className="flex items-center gap-2 text-gray-600 mb-2">
                  <Clock size={18} />
                  <span>TBD</span>
                </div>
                <div className="flex items-center gap-2 text-gray-600 mb-4">
                  <MapPin size={18} />
                  <span>Virtual Event</span>
                </div>
                <p style={{ fontFamily: "Montserrat, sans-serif" }}>
                  Learn about the different pathways to a career in healthcare from medical professionals and current
                  students.
                </p>
                <Button className="btn-secondary w-full">Coming Soon</Button>
              </div>
            </div>

            <div className="bg-tertiary rounded-lg overflow-hidden shadow-md card-hover">
              <div className="relative h-48">
                <Image
                  src="/placeholder.svg?height=400&width=600"
                  alt="Medical School Application Workshop"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6 space-y-4">
                <h3 className="text-primary" style={{ fontFamily: "Playfair Display, serif" }}>
                  Medical School Application Workshop
                </h3>
                <div className="flex items-center gap-2 text-gray-600 mb-2">
                  <Calendar size={18} />
                  <span>TBD</span>
                </div>
                <div className="flex items-center gap-2 text-gray-600 mb-2">
                  <Clock size={18} />
                  <span>TBD</span>
                </div>
                <div className="flex items-center gap-2 text-gray-600 mb-4">
                  <MapPin size={18} />
                  <span>Virtual Event</span>
                </div>
                <p style={{ fontFamily: "Montserrat, sans-serif" }}>
                  Get insider tips on preparing competitive medical school applications from admissions experts.
                </p>
                <Button className="btn-secondary w-full">Coming Soon</Button>
              </div>
            </div>

            <div className="bg-tertiary rounded-lg overflow-hidden shadow-md card-hover">
              <div className="relative h-48">
                <Image
                  src="/placeholder.svg?height=400&width=600"
                  alt="Healthcare Career Panel"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6 space-y-4">
                <h3 className="text-primary" style={{ fontFamily: "Playfair Display, serif" }}>
                  Healthcare Career Panel
                </h3>
                <div className="flex items-center gap-2 text-gray-600 mb-2">
                  <Calendar size={18} />
                  <span>TBD</span>
                </div>
                <div className="flex items-center gap-2 text-gray-600 mb-2">
                  <Clock size={18} />
                  <span>TBD</span>
                </div>
                <div className="flex items-center gap-2 text-gray-600 mb-4">
                  <MapPin size={18} />
                  <span>Virtual Event</span>
                </div>
                <p style={{ fontFamily: "Montserrat, sans-serif" }}>
                  Explore diverse healthcare careers beyond medicine with professionals from various specialties.
                </p>
                <Button className="btn-secondary w-full">Coming Soon</Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Past Events Section */}
      <section className="section-padding bg-secondary/10">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="heading-fancy text-primary">Past Events</h2>
            <div className="section-divider"></div>
            <p className="text-xl mt-4" style={{ fontFamily: "Playfair Display, serif" }}>
              Highlights from Our Journey
            </p>
            <p className="mt-2" style={{ fontFamily: "Montserrat, sans-serif" }}>
              Take a look at some of the amazing events we've hosted so far!
            </p>
          </div>

          <div className="bg-white rounded-lg overflow-hidden shadow-md mb-8 card-hover">
            <div className="grid grid-cols-1 md:grid-cols-2">
              <div className="relative h-64 md:h-auto">
                <Image
                  src="/placeholder.svg?height=600&width=800"
                  alt="Research Proposal Competition"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-8 space-y-4">
                <h3 className="text-primary" style={{ fontFamily: "Playfair Display, serif" }}>
                  Research Proposal Competition
                </h3>
                <div className="flex items-center gap-2 text-gray-600">
                  <Calendar size={18} />
                  <span>June 2024</span>
                </div>
                <p style={{ fontFamily: "Montserrat, sans-serif" }}>
                  Students worked with mentors to create impactful research proposals, with the top submissions
                  developed into full papers.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="bg-tertiary px-3 py-1 rounded-full text-sm">Research</span>
                  <span className="bg-tertiary px-3 py-1 rounded-full text-sm">Mentorship</span>
                  <span className="bg-tertiary px-3 py-1 rounded-full text-sm">Competition</span>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* This section is intentionally left blank as per requirements */}
            <p
              className="col-span-full text-center text-lg italic text-gray-500"
              style={{ fontFamily: "Montserrat, sans-serif" }}
            >
              More past events will be added soon!
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-primary text-white">
        <div className="container-custom text-center space-y-6">
          <h2 className="heading-fancy">Don't Miss Our Next Event!</h2>
          <p className="max-w-2xl mx-auto" style={{ fontFamily: "Montserrat, sans-serif" }}>
            Join our mailing list to stay updated on upcoming events and opportunities.
          </p>
          <div className="max-w-md mx-auto mt-8">
            <form className="flex flex-col sm:flex-row gap-3">
              <Input
                type="email"
                placeholder="Your email address"
                className="bg-white/10 border-white/20 text-white placeholder:text-white/50 flex-grow"
              />
              <Button className="bg-white text-primary hover:bg-white/90 whitespace-nowrap">Subscribe</Button>
            </form>
            <p className="text-xs mt-2 text-white/70">
              By subscribing, you agree to our{" "}
              <Link href="/terms" className="underline">
                Terms & Conditions
              </Link>
            </p>
          </div>
        </div>
      </section>
    </>
  )
}


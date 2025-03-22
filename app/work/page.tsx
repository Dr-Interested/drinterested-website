import Image from "next/image"
import { Button } from "@/components/ui/button"

export default function WorkPage() {
  return (
    <>
      <section className="bg-tertiary py-16 md:py-24">
        <div className="container-custom text-center">
          <h1 className="text-primary mb-6">Our Work So Far</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Discover the impact we've made in inspiring the next generation of healthcare professionals.
          </p>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
            <div className="space-y-6">
              <h2 className="text-primary">Research Initiatives</h2>
              <p>
                Our research proposal competition allows students to work with mentors to develop impactful research
                ideas. Top submissions are developed into full papers with the guidance of executives and
                undergraduate/medical students.
              </p>
              <ul className="list-disc list-inside space-y-2 text-lg">
                <li>Mentorship from medical professionals</li>
                <li>Hands-on research experience</li>
                <li>Opportunity to publish papers</li>
                <li>Collaboration with peers and experts</li>
              </ul>
            </div>
            <div className="relative h-[400px] rounded-lg overflow-hidden shadow-xl">
              <Image
                src="/placeholder.svg?height=800&width=600"
                alt="Students conducting research"
                fill
                className="object-cover"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
            <div className="relative h-[400px] rounded-lg overflow-hidden shadow-xl order-1 md:order-none">
              <Image
                src="/placeholder.svg?height=800&width=600"
                alt="Medical webinar session"
                fill
                className="object-cover"
              />
            </div>
            <div className="space-y-6">
              <h2 className="text-primary">Educational Webinars</h2>
              <p>
                We host engaging webinars featuring healthcare professionals who share insights about different medical
                specialties, career paths, and the realities of working in healthcare.
              </p>
              <ul className="list-disc list-inside space-y-2 text-lg">
                <li>Expert-led discussions</li>
                <li>Interactive Q&A sessions</li>
                <li>Diverse range of medical topics</li>
                <li>Networking opportunities</li>
              </ul>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-primary">Community Building</h2>
              <p>
                Dr.Interested fosters a supportive community where students can connect with like-minded peers, share
                resources, and collaborate on projects related to healthcare and medicine.
              </p>
              <ul className="list-disc list-inside space-y-2 text-lg">
                <li>Discord community for continuous engagement</li>
                <li>Peer mentorship opportunities</li>
                <li>Collaborative learning environment</li>
                <li>Social events and networking</li>
              </ul>
            </div>
            <div className="relative h-[400px] rounded-lg overflow-hidden shadow-xl">
              <Image
                src="/placeholder.svg?height=800&width=600"
                alt="Students networking at an event"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-secondary/10">
        <div className="container-custom text-center space-y-8">
          <h2 className="text-primary">Our Impact</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="text-4xl font-bold text-secondary mb-2">100+</div>
              <p className="text-lg">Students Engaged</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="text-4xl font-bold text-secondary mb-2">20+</div>
              <p className="text-lg">Webinars Hosted</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="text-4xl font-bold text-secondary mb-2">15+</div>
              <p className="text-lg">Research Projects</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="text-4xl font-bold text-secondary mb-2">10+</div>
              <p className="text-lg">Schools Represented</p>
            </div>
          </div>
          <Button className="btn-primary mt-8">Join Our Community</Button>
        </div>
      </section>
    </>
  )
}


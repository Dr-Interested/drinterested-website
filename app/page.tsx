import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Instagram, Linkedin, MessageSquare, ExternalLink, ArrowRight } from "lucide-react"

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-tertiary py-16 md:py-24">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 fade-in">
              <h1 className="heading-fancy text-primary">Welcome to Dr. Interested</h1>
              <p className="text-2xl font-medium text-primary/80 subheading-fancy">
                Inspiring the Next Generation of Healthcare Professionals
              </p>
              <p className="text-lg md:text-xl">
                Discover your pathway to a career in healthcare with Dr. Interested. From engaging webinars to hands-on
                research opportunities, we're here to help high school students explore the world of medicine.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button className="btn-primary hover-lift">Sign Up Here</Button>
                <div className="flex flex-wrap items-center gap-4">
                  <Link
                    href="https://discord.gg/pzbGRgsGXY"
                    target="_blank"
                    className="flex items-center gap-2 hover:text-secondary transition-colors"
                  >
                    <MessageSquare size={20} />
                    <span>Discord</span>
                  </Link>
                  <Link
                    href="https://www.instagram.com/dr.interested/"
                    target="_blank"
                    className="flex items-center gap-2 hover:text-secondary transition-colors"
                  >
                    <Instagram size={20} />
                    <span>Instagram</span>
                  </Link>
                  <Link
                    href="https://www.linkedin.com/company/dr-interested"
                    target="_blank"
                    className="flex items-center gap-2 hover:text-secondary transition-colors"
                  >
                    <Linkedin size={20} />
                    <span>LinkedIn</span>
                  </Link>
                </div>
                <Link
                  href="https://linktr.ee/dr.interested"
                  target="_blank"
                  className="flex items-center gap-2 hover:text-secondary transition-colors"
                >
                  <ExternalLink size={20} />
                  <span>LinkTree</span>
                </Link>
              </div>
            </div>
            <div
              className="relative h-[400px] rounded-lg overflow-hidden shadow-xl fade-in"
              style={{ animationDelay: "0.3s" }}
            >
              <Image src="/images/logo.png" alt="Dr. Interested Logo" fill className="object-contain p-8" />
            </div>
          </div>
        </div>
      </section>

      {/* What We Are Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center space-y-6 fade-in">
            <h2 className="heading-fancy text-primary">What We Are</h2>
            <div className="section-divider"></div>
            <p style={{ fontFamily: "Montserrat, sans-serif" }} className="font-light">
              Dr. Interested is a student-led organization that empowers high school students to explore careers in
              healthcare and medical research. Through engaging events, leadership opportunities, and collaborative
              projects, we aim to bridge the gap between passion and profession.
            </p>
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section className="section-padding bg-secondary/10">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative h-[400px] rounded-lg overflow-hidden shadow-xl">
              <Image
                src="/placeholder.svg?height=800&width=600"
                alt="Students in a medical workshop"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              <div className="absolute bottom-0 left-0 p-6 text-white">
                <h3 className="text-xl font-bold mb-2">Hands-on Learning</h3>
                <p className="text-sm md:text-base">Practical experiences for aspiring healthcare professionals</p>
              </div>
            </div>
            <div className="space-y-6">
              <h2 className="heading-fancy text-primary">About Us</h2>
              <p style={{ fontFamily: "Montserrat, sans-serif" }} className="font-light">
                We're dedicated to providing high school students with the tools and resources they need to succeed in
                the medical field. From hosting expert-led webinars to offering volunteer opportunities and research
                initiatives, Dr. Interested is committed to making healthcare accessible and exciting for young minds.
              </p>
              <Button className="btn-primary group">
                Learn More
                <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Our Goal, Mission, and Vision Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <h2 className="heading-fancy text-primary text-center mb-6 fade-in">Our Goal, Mission, and Vision</h2>
          <div className="section-divider fade-in" style={{ animationDelay: "0.2s" }}></div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <div className="bg-tertiary p-8 rounded-lg shadow-md card-hover fade-in stagger-item">
              <h3 className="text-primary mb-4" style={{ fontFamily: "Playfair Display, serif" }}>
                Goal
              </h3>
              <p className="text-lg font-light" style={{ fontFamily: "Montserrat, sans-serif" }}>
                To inspire, educate, and support high school students in their journey toward a career in healthcare by
                providing resources, mentorship, and hands-on opportunities.
              </p>
            </div>
            <div className="bg-tertiary p-8 rounded-lg shadow-md card-hover fade-in stagger-item">
              <h3 className="text-primary mb-4" style={{ fontFamily: "Playfair Display, serif" }}>
                Mission
              </h3>
              <p className="text-lg font-light" style={{ fontFamily: "Montserrat, sans-serif" }}>
                To empower the next generation of healthcare professionals through education, collaboration, and
                meaningful experiences.
              </p>
            </div>
            <div className="bg-tertiary p-8 rounded-lg shadow-md card-hover fade-in stagger-item">
              <h3 className="text-primary mb-4" style={{ fontFamily: "Playfair Display, serif" }}>
                Vision
              </h3>
              <p className="text-lg font-light" style={{ fontFamily: "Montserrat, sans-serif" }}>
                A future where students are equipped with the knowledge and opportunities needed to excel in healthcare,
                contributing to a healthier, more informed world.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-primary text-white">
        <div className="container-custom text-center space-y-6">
          <h2 className="heading-fancy">Stay Updated</h2>
          <p className="max-w-2xl mx-auto font-light" style={{ fontFamily: "Montserrat, sans-serif" }}>
            Stay updated on Dr. Interested and other exciting healthcare opportunities for high schoolers!
          </p>
          <div className="max-w-md mx-auto mt-8">
            <form className="flex flex-col sm:flex-row gap-3">
              <Input
                type="email"
                placeholder="Your email address"
                className="bg-white/10 border-white/20 text-white placeholder:text-white/50 flex-grow"
              />
              <Button className="bg-white text-primary hover:bg-white/90 whitespace-nowrap group">
                Subscribe
                <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </form>
            <p className="text-xs mt-2 text-white/70">
              By subscribing, you agree to our{" "}
              <Link href="/terms" className="underline hover:text-white transition-colors">
                Terms & Conditions
              </Link>
            </p>
          </div>
        </div>
      </section>
    </>
  )
}


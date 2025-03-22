import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Instagram, Linkedin, MessageSquare, ArrowRight } from "lucide-react"
import { emailAddresses } from "@/data/contact"

const Footer = () => {
  return (
    <footer className="bg-primary text-white">
      <div className="container-custom py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="space-y-4">
            <Link href="/" className="block hover-lift">
              <Image src="/images/logo.png" alt="Dr. Interested Logo" width={180} height={70} className="h-16 w-auto" />
            </Link>
            <p className="text-base">
              Inspiring the next generation of healthcare professionals through education, collaboration, and meaningful
              experiences.
            </p>
            <div className="flex space-x-4 mt-6">
              <Link
                href="https://www.instagram.com/dr.interested/"
                target="_blank"
                className="bg-white/10 p-2 rounded-full hover:bg-white/20 transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </Link>
              <Link
                href="https://www.linkedin.com/company/dr-interested"
                target="_blank"
                className="bg-white/10 p-2 rounded-full hover:bg-white/20 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </Link>
              <Link
                href="https://discord.gg/pzbGRgsGXY"
                target="_blank"
                className="bg-white/10 p-2 rounded-full hover:bg-white/20 transition-colors"
                aria-label="Discord"
              >
                <MessageSquare size={20} />
              </Link>
            </div>
          </div>

          <div className="space-y-4">
            <h4 className="text-xl font-semibold">Quick Links</h4>
            <div className="h-1 w-12 bg-secondary mb-4"></div>
            <nav className="flex flex-col space-y-2">
              <Link href="/" className="text-base hover:text-secondary transition-colors group flex items-center">
                <ArrowRight size={14} className="mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                <span className="group-hover:translate-x-1 transition-transform">Home</span>
              </Link>
              <Link href="/work" className="text-base hover:text-secondary transition-colors group flex items-center">
                <ArrowRight size={14} className="mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                <span className="group-hover:translate-x-1 transition-transform">Our Work</span>
              </Link>
              <Link href="/events" className="text-base hover:text-secondary transition-colors group flex items-center">
                <ArrowRight size={14} className="mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                <span className="group-hover:translate-x-1 transition-transform">Events</span>
              </Link>
              <Link
                href="/members"
                className="text-base hover:text-secondary transition-colors group flex items-center"
              >
                <ArrowRight size={14} className="mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                <span className="group-hover:translate-x-1 transition-transform">Members</span>
              </Link>
              <Link
                href="/contact"
                className="text-base hover:text-secondary transition-colors group flex items-center"
              >
                <ArrowRight size={14} className="mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                <span className="group-hover:translate-x-1 transition-transform">Contact</span>
              </Link>
              <Link
                href="/gallery"
                className="text-base hover:text-secondary transition-colors group flex items-center"
              >
                <ArrowRight size={14} className="mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                <span className="group-hover:translate-x-1 transition-transform">Gallery</span>
              </Link>
            </nav>
          </div>

          <div className="space-y-4">
            <h4 className="text-xl font-semibold">Contact Us</h4>
            <div className="h-1 w-12 bg-secondary mb-4"></div>
            <div className="space-y-3">
              {emailAddresses.map((item, index) => (
                <div key={index} className="group">
                  <p className="text-sm font-medium text-secondary">{item.department}</p>
                  <a
                    href={`mailto:${item.email}`}
                    className="text-base hover:text-secondary transition-colors block group-hover:translate-x-1 transition-transform"
                  >
                    {item.email}
                  </a>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-4">
            <h4 className="text-xl font-semibold">Stay Updated</h4>
            <div className="h-1 w-12 bg-secondary mb-4"></div>
            <p className="text-base">Subscribe to our newsletter for the latest events and opportunities.</p>
            <form className="space-y-2">
              <Input
                type="email"
                placeholder="Your email address"
                className="bg-white/10 border-white/20 text-white placeholder:text-white/50 focus:ring-secondary"
              />
              <Button className="w-full bg-secondary hover:bg-secondary/90 text-white flex items-center justify-center gap-2">
                Sign Up
                <ArrowRight size={16} />
              </Button>
            </form>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-white/20 text-center">
          <p className="text-sm">&copy; {new Date().getFullYear()} Dr. Interested. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer


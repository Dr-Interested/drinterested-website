"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"
import { usePathname } from "next/navigation"

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const pathname = usePathname()

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMenuOpen(false)
  }, [pathname])

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50 backdrop-blur-md bg-white/90">
      <div className="container-custom flex justify-between items-center py-4">
        <Link href="/" className="flex items-center">
          <Image src="/images/logo.png" alt="Dr. Interested Logo" width={150} height={60} className="h-12 w-auto" />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          <Link
            href="/"
            className={`text-lg font-medium transition-colors ${pathname === "/" ? "text-secondary" : "hover:text-secondary"}`}
          >
            Home
          </Link>
          <Link
            href="/work"
            className={`text-lg font-medium transition-colors ${pathname === "/work" ? "text-secondary" : "hover:text-secondary"}`}
          >
            Our Work
          </Link>
          <Link
            href="/events"
            className={`text-lg font-medium transition-colors ${pathname === "/events" ? "text-secondary" : "hover:text-secondary"}`}
          >
            Events
          </Link>
          <Link
            href="/members"
            className={`text-lg font-medium transition-colors ${pathname === "/members" ? "text-secondary" : "hover:text-secondary"}`}
          >
            Members
          </Link>
          <Link
            href="/contact"
            className={`text-lg font-medium transition-colors ${pathname === "/contact" ? "text-secondary" : "hover:text-secondary"}`}
          >
            Contact
          </Link>
          <Link
            href="/gallery"
            className={`text-lg font-medium transition-colors ${pathname === "/gallery" ? "text-secondary" : "hover:text-secondary"}`}
          >
            Gallery
          </Link>
          <Button className="btn-primary hover-lift">
            <a href="https://discord.gg/pzbGRgsGXY" target="_blank" rel="noopener noreferrer">
              Join Discord
            </a>
          </Button>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 rounded-md hover:bg-tertiary transition-colors"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-white py-4 px-6 shadow-md animate-in slide-in-from-top duration-300">
          <nav className="flex flex-col space-y-4">
            <Link
              href="/"
              className={`text-lg font-medium transition-colors ${pathname === "/" ? "text-secondary" : "hover:text-secondary"}`}
              onClick={toggleMenu}
            >
              Home
            </Link>
            <Link
              href="/work"
              className={`text-lg font-medium transition-colors ${pathname === "/work" ? "text-secondary" : "hover:text-secondary"}`}
              onClick={toggleMenu}
            >
              Our Work
            </Link>
            <Link
              href="/events"
              className={`text-lg font-medium transition-colors ${pathname === "/events" ? "text-secondary" : "hover:text-secondary"}`}
              onClick={toggleMenu}
            >
              Events
            </Link>
            <Link
              href="/members"
              className={`text-lg font-medium transition-colors ${pathname === "/members" ? "text-secondary" : "hover:text-secondary"}`}
              onClick={toggleMenu}
            >
              Members
            </Link>
            <Link
              href="/contact"
              className={`text-lg font-medium transition-colors ${pathname === "/contact" ? "text-secondary" : "hover:text-secondary"}`}
              onClick={toggleMenu}
            >
              Contact
            </Link>
            <Link
              href="/gallery"
              className={`text-lg font-medium transition-colors ${pathname === "/gallery" ? "text-secondary" : "hover:text-secondary"}`}
              onClick={toggleMenu}
            >
              Gallery
            </Link>
            <Button className="btn-primary w-full">
              <a
                href="https://discord.gg/pzbGRgsGXY"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full text-center"
              >
                Join Discord
              </a>
            </Button>
          </nav>
        </div>
      )}
    </header>
  )
}

export default Header


"use client"

import type React from "react"

import { useState, useRef, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Menu, X, ChevronDown, Folder } from "lucide-react"
import { blogCategories } from "@/data/blog"
import { usePathname } from "next/navigation"

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isBlogDropdownOpen, setIsBlogDropdownOpen] = useState(false)
  const [openCategory, setOpenCategory] = useState<string | null>(null)
  const dropdownRef = useRef<HTMLDivElement>(null)
  const mobileDropdownRef = useRef<HTMLDivElement>(null)
  const pathname = usePathname()

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
    // Close blog dropdown when toggling main menu
    setIsBlogDropdownOpen(false)
    setOpenCategory(null)
  }

  const toggleBlogDropdown = (e: React.MouseEvent) => {
    e.stopPropagation()
    setIsBlogDropdownOpen(!isBlogDropdownOpen)
    if (isBlogDropdownOpen) {
      setOpenCategory(null)
    }
  }

  const toggleCategory = (e: React.MouseEvent, categoryId: string) => {
    e.stopPropagation()
    setOpenCategory(openCategory === categoryId ? null : categoryId)
  }

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node) &&
        mobileDropdownRef.current &&
        !mobileDropdownRef.current.contains(event.target as Node)
      ) {
        setIsBlogDropdownOpen(false)
        setOpenCategory(null)
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [])

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMenuOpen(false)
    setIsBlogDropdownOpen(false)
    setOpenCategory(null)
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

          {/* Blog Dropdown */}
          <div className="relative" ref={dropdownRef}>
            <button
              onClick={toggleBlogDropdown}
              className={`flex items-center text-lg font-medium transition-colors ${pathname.startsWith("/blog") ? "text-secondary" : "hover:text-secondary"}`}
            >
              Blog
              <ChevronDown
                size={18}
                className={`ml-1 transition-transform ${isBlogDropdownOpen ? "rotate-180" : ""}`}
              />
            </button>

            {isBlogDropdownOpen && (
              <div className="absolute left-0 mt-2 w-72 bg-white rounded-md shadow-lg py-2 z-50 animate-in fade-in slide-in-from-top-5 duration-200">
                <Link
                  href="/blog"
                  className="block px-4 py-2 text-gray-800 hover:bg-tertiary hover:text-primary transition-colors"
                  onClick={() => {
                    setIsBlogDropdownOpen(false)
                    setOpenCategory(null)
                  }}
                >
                  All Topics
                </Link>

                <div className="max-h-64 overflow-y-auto">
                  {blogCategories.map((category) => (
                    <div key={category.slug}>
                      <button
                        onClick={(e) => toggleCategory(e, category.id)}
                        className="flex items-center w-full px-4 py-2 text-left text-gray-800 hover:bg-tertiary hover:text-primary transition-colors font-medium"
                      >
                        <Folder size={16} className="mr-2 text-secondary" />
                        {category.name}
                        <ChevronDown
                          size={16}
                          className={`ml-auto transition-transform ${openCategory === category.id ? "rotate-180" : ""}`}
                        />
                      </button>

                      {/* Subcategories without chevron icons */}
                      <div
                        className={`pl-8 overflow-hidden transition-all duration-300 ${openCategory === category.id ? "max-h-96" : "max-h-0"}`}
                      >
                        <Link
                          href={`/blog/category/${category.slug}`}
                          className="block px-4 py-2 text-gray-800 hover:bg-tertiary hover:text-primary transition-colors"
                          onClick={() => {
                            setIsBlogDropdownOpen(false)
                            setOpenCategory(null)
                          }}
                        >
                          View All in {category.name}
                        </Link>

                        {getPostsByCategory(category.slug).map((post) => (
                          <Link
                            key={post.slug}
                            href={`/blog/${post.slug}`}
                            className="block px-4 py-1.5 text-gray-700 hover:bg-tertiary hover:text-primary transition-colors text-sm"
                            onClick={() => {
                              setIsBlogDropdownOpen(false)
                              setOpenCategory(null)
                            }}
                          >
                            {post.title}
                          </Link>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

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

            {/* Mobile Blog Dropdown */}
            <div ref={mobileDropdownRef}>
              <button
                onClick={toggleBlogDropdown}
                className={`flex items-center w-full text-left text-lg font-medium transition-colors ${pathname.startsWith("/blog") ? "text-secondary" : "hover:text-secondary"}`}
              >
                Blog
                <ChevronDown
                  size={18}
                  className={`ml-1 transition-transform ${isBlogDropdownOpen ? "rotate-180" : ""}`}
                />
              </button>

              {isBlogDropdownOpen && (
                <div className="pl-4 mt-2 space-y-2 max-h-64 overflow-y-auto animate-in slide-in-from-left duration-200">
                  <Link
                    href="/blog"
                    className="block py-1 text-gray-800 hover:text-secondary transition-colors"
                    onClick={toggleMenu}
                  >
                    All Topics
                  </Link>

                  {blogCategories.map((category) => (
                    <div key={category.slug} className="py-1">
                      <button
                        onClick={(e) => toggleCategory(e, category.id)}
                        className="flex items-center w-full text-left text-gray-800 hover:text-secondary transition-colors font-medium"
                      >
                        <Folder size={16} className="mr-2 text-secondary" />
                        {category.name}
                        <ChevronDown
                          size={16}
                          className={`ml-auto transition-transform ${openCategory === category.id ? "rotate-180" : ""}`}
                        />
                      </button>

                      <div
                        className={`pl-6 overflow-hidden transition-all duration-300 ${openCategory === category.id ? "max-h-96 mt-1" : "max-h-0"}`}
                      >
                        <Link
                          href={`/blog/category/${category.slug}`}
                          className="block py-1 text-gray-800 hover:text-secondary transition-colors"
                          onClick={toggleMenu}
                        >
                          View All in {category.name}
                        </Link>

                        {getPostsByCategory(category.slug).map((post) => (
                          <Link
                            key={post.slug}
                            href={`/blog/${post.slug}`}
                            className="block py-1 text-gray-700 hover:text-secondary transition-colors text-sm"
                            onClick={toggleMenu}
                          >
                            {post.title}
                          </Link>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>

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

// Helper function to get posts by category
function getPostsByCategory(category: string) {
  const posts = [
    // Cancer
    { slug: "what-is-cancer-overview", title: "What is Cancer: A General Overview", category: "cancer" },
    { slug: "immunotherapy", title: "Immunotherapy", category: "cancer" },
    { slug: "coleys-toxins", title: "Coley's Toxins", category: "cancer" },

    // Types of Doctors
    { slug: "overview-nephrologists", title: "An Overview on Nephrologists", category: "types-of-doctors" },
    { slug: "understanding-hepatology", title: "Understanding Hepatology", category: "types-of-doctors" },
    { slug: "endocrinologists-thyroid-cancer", title: "The Role of Endocrinologists", category: "types-of-doctors" },
    { slug: "internal-medicine-complex-cases", title: "Internal Medicine Doctors", category: "types-of-doctors" },
    { slug: "cardiologists-heart-health", title: "The Vital Role of Cardiologists", category: "types-of-doctors" },

    // Types of Nurses
    { slug: "pediatric-nurses-role", title: "The Role of Pediatric Nurses", category: "types-of-nurses" },
    { slug: "elder-care-specialization", title: "Specialization in Elder Care", category: "types-of-nurses" },
  ]

  return posts.filter((post) => post.category === category)
}

export default Header


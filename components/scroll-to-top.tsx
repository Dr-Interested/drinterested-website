"use client"

import { useEffect, useState } from "react"
import { usePathname } from "next/navigation"
import { ArrowUp } from "lucide-react"
import { Button } from "@/components/ui/button"
import { debounce } from "@/lib/utils"

export default function ScrollToTop() {
  const pathname = usePathname()
  const [showButton, setShowButton] = useState(false)

  // Reset scroll position on route change
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  // Show button when scrolled down
  useEffect(() => {
    const handleScroll = debounce(() => {
      if (window.scrollY > 300) {
        setShowButton(true)
      } else {
        setShowButton(false)
      }
    }, 100)

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  }

  if (!showButton) return null

  return (
    <Button
      onClick={scrollToTop}
      className="fixed bottom-6 right-6 z-50 p-2 rounded-full bg-primary hover:bg-primary/90 text-white shadow-lg"
      aria-label="Scroll to top"
    >
      <ArrowUp size={20} />
    </Button>
  )
}


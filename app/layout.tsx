import type React from "react"
import type { Metadata, Viewport } from "next"
import ClientLayout from "./ClientLayout"

export const metadata: Metadata = {
  title: "Dr. Interested - Inspiring Future Healthcare Professionals",
  description:
    "Empowering high school students to explore careers in healthcare through education, research, and mentorship.",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
    generator: 'v0.dev'
}

export const viewport: Viewport = {
  themeColor: "#405862",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return <ClientLayout>{children}</ClientLayout>
}



import './globals.css'
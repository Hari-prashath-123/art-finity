import type React from "react"
import type { Metadata } from "next"

import "./globals.css"

import { Inter, Inter as V0_Font_Inter, Geist_Mono as V0_Font_Geist_Mono, Source_Serif_4 as V0_Font_Source_Serif_4 } from 'next/font/google'

// Initialize fonts
const _inter = V0_Font_Inter({ subsets: ['latin'], weight: ["100","200","300","400","500","600","700","800","900"] })
const _geistMono = V0_Font_Geist_Mono({ subsets: ['latin'], weight: ["100","200","300","400","500","600","700","800","900"] })
const _sourceSerif_4 = V0_Font_Source_Serif_4({ subsets: ['latin'], weight: ["200","300","400","500","600","700","800","900"] })

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Art Finity",
  description: "Art Finity Event - Image & Video Generation",
    generator: 'v0.app',
    icons: {
      icon: '/art-finitylogo.png',
      shortcut: '/art-finitylogo.png',
      apple: '/art-finitylogo.png'
    }
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} bg-black text-white antialiased`}>
        <div className="fixed top-4 right-4 z-50 flex items-center gap-3">
          <img
            src="/agen%20club%20logo.jpg"
            alt="Agen Club logo"
            className="w-16 h-16 md:w-20 md:h-20 rounded-full object-cover border border-white/10 shadow-lg"
          />
          <span className="text-white/80 text-lg md:text-2xl font-semibold select-none" aria-hidden>
            ×
          </span>
          <img
            src="/art-nexus%20logo.jpg"
            alt="Art Nexus logo"
            className="w-16 h-16 md:w-20 md:h-20 rounded-full object-cover border border-white/10 shadow-lg"
          />
        </div>
        {children}
      </body>
    </html>
  )
}

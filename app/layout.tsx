import type React from "react"
import type { Metadata, Viewport } from "next"
import { Geist, Geist_Mono } from "next/font/google"

import Navbar from "@/components/navbar"
import AnimatedBackground from "@/components/AnimatedBackground"
import "./globals.css"

const _geist = Geist({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Kaixen - AI-Powered ERP for Modern Businesses",
  description:
    "",
 
   icons: {
  
    apple: "/kaixen.png",
  },
  manifest: "./site.webmanifest",
};

export const viewport: Viewport = {
  themeColor: "#0f0f0f",
  userScalable: true,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`font-sans antialiased`}> <AnimatedBackground />   {/* 👈 add this */}
        <Navbar />
        {children}
        
    
      </body>
    </html>
  )
}

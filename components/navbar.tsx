"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X, TrendingUp } from "lucide-react"
import { Button } from "@/components/ui/button"
import { NavigationMenu, NavigationMenuList, NavigationMenuItem } from "@/components/ui/navigation-menu"

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const navLinks = [
    { label: "Home", href: "/" },
    { label: "About us", href: "/about" },
    { label: "Services", href: "/services" },
    { label: "Contact", href: "/contact" },
  ]

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md"
      style={{
        background: "rgba(255,255,255,0.90)",
        borderBottom: "1px solid #06b6d420",
        boxShadow: "0 2px 20px rgba(6,182,212,0.06)",
      }}
    >
      <div className="max-w-7xl mx-auto px-4 lg:px-0">
        <div className="flex items-center justify-between h-20">

          {/* Logo */}
          <Link href="/" className="flex items-center gap-3">
            <div
              className="w-9 h-9 rounded-xl flex items-center justify-center font-bold text-sm"
              style={{ background: "#06b6d420", border: "1px solid #06b6d440", color: "#06b6d4" }}
            >
              K
            </div>
            <span className="font-bold text-lg" style={{ color: "#0a0a0a" }}>
              Kaizen <span style={{ color: "#06b6d4" }}>ERP</span>
            </span>
          </Link>

          {/* Desktop Nav */}
          <NavigationMenu>
            <NavigationMenuList>
              {navLinks.map((link) => (
                <NavigationMenuItem key={link.label}>
                  <Link
                    href={link.href}
                    className="hidden lg:inline font-medium text-base px-4 py-2 rounded-lg transition-colors duration-200 hover:text-[#06b6d4]"
                    style={{ color: "#374151" }}
                  >
                    {link.label}
                  </Link>
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>

          {/* CTA */}
          <div className="hidden lg:flex items-center gap-4">
            <Link href="/join">
              <Button
                size="lg"
                className="rounded-full px-6 font-semibold transition-all"
                style={{ background: "#06b6d4", color: "#ffffff" }}
              >
                <TrendingUp className="w-4 h-4 mr-2" />
                Book a Demo
              </Button>
            </Link>
          </div>

          {/* Mobile Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-lg transition-colors"
            style={{ color: "#374151" }}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div
            className="lg:hidden py-4 space-y-1"
            style={{ borderTop: "1px solid #06b6d420" }}
          >
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="block px-4 py-3 text-sm font-medium rounded-xl transition-colors hover:text-[#06b6d4]"
                style={{ color: "#374151" }}
              >
                {link.label}
              </Link>
            ))}
            <div className="px-4 pt-3">
              <Link href="/join" className="w-full" onClick={() => setMobileMenuOpen(false)}>
                <Button
                  size="sm"
                  className="w-full rounded-full font-semibold"
                  style={{ background: "#06b6d4", color: "#ffffff" }}
                >
                  Book a Demo
                </Button>
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
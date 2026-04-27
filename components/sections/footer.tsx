"use client"

import { Github, Twitter, Linkedin } from "lucide-react"

export default function Footer() {
  return (
    <footer style={{ background: "#ffffff", borderTop: "1px solid #06b6d420" }}>
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">

          {/* Logo */}
          <div className="flex items-center gap-3">
            <div
              className="w-9 h-9 rounded-xl flex items-center justify-center font-bold text-sm"
              style={{ background: "#06b6d415", border: "1px solid #06b6d435", color: "#06b6d4" }}
            >
              K
            </div>
            <span className="font-bold text-lg" style={{ color: "#0a0a0a" }}>
              Kaixen <span style={{ color: "#06b6d4" }}>ERP</span>
            </span>
          </div>

          {/* Copyright */}
          <p className="text-sm text-center" style={{ color: "#9ca3af" }}>
            © 2026 Kaixen ERP. All rights reserved.{" "}
            <span style={{ color: "#06b6d4" }}>Improve Every Day. Scale Every Way.</span>
          </p>

          {/* Socials */}
          <div className="flex items-center gap-4" style={{ color: "#9ca3af" }}>
            <a href="#" aria-label="GitHub" className="hover:text-[#06b6d4] transition-colors">
              <Github className="w-5 h-5" />
            </a>
            <a href="#" aria-label="Twitter" className="hover:text-[#06b6d4] transition-colors">
              <Twitter className="w-5 h-5" />
            </a>
            <a href="#" aria-label="LinkedIn" className="hover:text-[#06b6d4] transition-colors">
              <Linkedin className="w-5 h-5" />
            </a>
          </div>

        </div>
      </div>
    </footer>
  )
}
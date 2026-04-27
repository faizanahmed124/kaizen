"use client"

import { Github, Twitter, Linkedin } from "lucide-react"

export default function Footer() {
  return (
    <footer style={{ background: "#0a1a12", borderTop: "1px solid #13f07620" }}>
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">

          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl flex items-center justify-center font-bold text-sm" style={{ background: "#13f07620", border: "1px solid #13f07640", color: "#13f076" }}>
              K
            </div>
            <span className="font-bold text-white text-lg">Kaizen <span style={{ color: "#13f076" }}>ERP</span></span>
          </div>

          <p className="text-sm text-center" style={{ color: "rgba(255,255,255,0.30)" }}>
            © 2026 Kaizen ERP. All rights reserved.{" "}
            <span style={{ color: "#13f076" }}>Improve Every Day. Scale Every Way.</span>
          </p>

          <div className="flex items-center gap-4" style={{ color: "rgba(255,255,255,0.40)" }}>
            <a href="#" aria-label="GitHub" className="hover:text-[#13f076] transition-colors"><Github className="w-5 h-5" /></a>
            <a href="#" aria-label="Twitter" className="hover:text-[#13f076] transition-colors"><Twitter className="w-5 h-5" /></a>
            <a href="#" aria-label="LinkedIn" className="hover:text-[#13f076] transition-colors"><Linkedin className="w-5 h-5" /></a>
          </div>

        </div>
      </div>
    </footer>
  )
}
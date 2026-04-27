"use client"

import { Button } from "@/components/ui/button"
import { TrendingUp } from "lucide-react"

export default function FinalCTA() {
  return (
    <section
      className="relative py-24 px-4 overflow-hidden"
      style={{ background: "#f0fafb" }}
    >
      {/* Glow blobs */}
      <div className="absolute top-10 left-20 w-64 h-64 rounded-full blur-3xl pointer-events-none" style={{ background: "#06b6d410" }}></div>
      <div className="absolute bottom-10 right-20 w-64 h-64 rounded-full blur-3xl pointer-events-none" style={{ background: "#06b6d410" }}></div>

      <div className="max-w-4xl mx-auto relative">

        {/* Glow blob behind card */}
        <div
          className="absolute inset-0 rounded-3xl blur-3xl pointer-events-none"
          style={{ background: "radial-gradient(ellipse at center, #06b6d412, transparent 70%)" }}
        />

        {/* Card */}
        <div
          className="relative z-10 p-12 md:p-16 rounded-3xl text-center space-y-6"
          style={{
            background: "#ffffff",
            border: "1px solid #06b6d430",
            boxShadow: "0 4px 32px rgba(6,182,212,0.10)",
          }}
        >
          {/* Icon */}
          <div
            className="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto"
            style={{ background: "#06b6d412", border: "1px solid #06b6d430" }}
          >
            <TrendingUp className="w-8 h-8" strokeWidth={1.5} style={{ color: "#06b6d4" }} />
          </div>

          {/* Heading */}
          <h2 className="text-4xl md:text-5xl font-bold leading-tight" style={{ color: "#0a0a0a" }}>
            Ready to Run a{" "}
            <span style={{ color: "#06b6d4" }}>Smarter Business?</span>
          </h2>

          {/* Subtext */}
          <p className="text-lg max-w-xl mx-auto" style={{ color: "#6b7280" }}>
            Join hundreds of businesses using Kaizen ERP to automate operations,
            reduce costs, and grow faster — starting today.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <Button
              size="lg"
              className="font-semibold rounded-full px-10"
              style={{ background: "#06b6d4", color: "#ffffff" }}
            >
              Get Started Free
            </Button>
            <Button
              size="lg"
              className="rounded-full px-10 font-semibold"
              style={{
                background: "transparent",
                border: "1px solid #06b6d450",
                color: "#06b6d4",
              }}
            >
              Talk to Our Team
            </Button>
          </div>

          {/* Fine print */}
          <p className="text-sm" style={{ color: "#9ca3af" }}>
            No credit card required. Get up and running in under 24 hours.
          </p>

          {/* Stats strip */}
          <div
            className="flex flex-col sm:flex-row justify-center gap-8 pt-6 border-t"
            style={{ borderColor: "#06b6d420" }}
          >
            <div>
              <p className="text-2xl font-bold" style={{ color: "#06b6d4" }}>500+</p>
              <p className="text-xs" style={{ color: "#9ca3af" }}>Businesses Onboarded</p>
            </div>
            <div>
              <p className="text-2xl font-bold" style={{ color: "#06b6d4" }}>99.9%</p>
              <p className="text-xs" style={{ color: "#9ca3af" }}>Uptime Guaranteed</p>
            </div>
            <div>
              <p className="text-2xl font-bold" style={{ color: "#06b6d4" }}>24hrs</p>
              <p className="text-xs" style={{ color: "#9ca3af" }}>Average Go-Live Time</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

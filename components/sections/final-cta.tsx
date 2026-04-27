"use client"

import { Button } from "@/components/ui/button"
import { TrendingUp } from "lucide-react"

export default function FinalCTA() {
  return (
    <section
      className="relative py-24 px-4 overflow-hidden"
      style={{ background: "#0d1f1a" }}
    >
      <div className="max-w-4xl mx-auto relative">

        {/* Glow blob */}
        <div
          className="absolute inset-0 rounded-3xl blur-3xl pointer-events-none"
          style={{ background: "radial-gradient(ellipse at center, #13f07615, transparent 70%)" }}
        />

        {/* Card */}
        <div
          className="relative z-10 p-12 md:p-16 rounded-3xl text-center space-y-6"
          style={{
            background: "#111f1a",
            border: "1px solid #13f07640",
          }}
        >
          {/* Icon */}
          <div
            className="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto"
            style={{ background: "#13f07615", border: "1px solid #13f07635" }}
          >
            <TrendingUp className="w-8 h-8" strokeWidth={1.5} style={{ color: "#13f076" }} />
          </div>

          {/* Heading */}
          <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight">
            Ready to Run a{" "}
            <span style={{ color: "#13f076" }}>Smarter Business?</span>
          </h2>

          {/* Subtext */}
          <p
            className="text-lg max-w-xl mx-auto"
            style={{ color: "rgba(255,255,255,0.55)" }}
          >
            Join hundreds of businesses using Kaizen ERP to automate operations,
            reduce costs, and grow faster — starting today.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <Button
              size="lg"
              className="font-semibold rounded-full px-10"
              style={{ background: "#13f076", color: "#0d1f1a" }}
            >
              Get Started Free
            </Button>
            <Button
              size="lg"
              className="rounded-full px-10 font-semibold"
              style={{
                background: "transparent",
                border: "1px solid #13f07650",
                color: "#13f076",
              }}
            >
              Talk to Our Team
            </Button>
          </div>

          {/* Fine print */}
          <p style={{ color: "rgba(255,255,255,0.30)" }} className="text-sm">
            No credit card required. Get up and running in under 24 hours.
          </p>

          {/* Stats strip */}
          <div
            className="flex flex-col sm:flex-row justify-center gap-8 pt-6 border-t"
            style={{ borderColor: "#13f07620" }}
          >
            <div>
              <p className="text-2xl font-bold" style={{ color: "#13f076" }}>500+</p>
              <p className="text-xs" style={{ color: "rgba(255,255,255,0.40)" }}>Businesses Onboarded</p>
            </div>
            <div>
              <p className="text-2xl font-bold" style={{ color: "#13f076" }}>99.9%</p>
              <p className="text-xs" style={{ color: "rgba(255,255,255,0.40)" }}>Uptime Guaranteed</p>
            </div>
            <div>
              <p className="text-2xl font-bold" style={{ color: "#13f076" }}>24hrs</p>
              <p className="text-xs" style={{ color: "rgba(255,255,255,0.40)" }}>Average Go-Live Time</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
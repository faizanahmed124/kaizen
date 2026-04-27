"use client"

import { TrendingUp, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"
import DashboardPreview from "@/components/dashboard-preview"

export default function Hero() {
  return (
    <section
      className="relative min-h-screen flex items-center justify-center px-4 py-20 overflow-hidden"
      style={{ background: "#f0fafb" }}
    >
      {/* Glow blobs */}
      <div className="absolute top-20 left-10 w-72 h-72 rounded-full blur-3xl pointer-events-none" style={{ background: "#06b6d415" }}></div>
      <div className="absolute bottom-20 right-10 w-72 h-72 rounded-full blur-3xl pointer-events-none" style={{ background: "#06b6d410" }}></div>

      <div className="relative z-20 max-w-7xl mx-auto w-full">
        <div className="grid lg:grid-cols-2 gap-26 items-center">
          <div className="space-y-8">
            <div className="space-y-8">

              {/* Badge */}
              <div
                className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-sm font-medium w-fit"
                style={{ border: "1px solid #06b6d430", background: "#06b6d412", color: "#06b6d4" }}
              >
                <Sparkles className="w-4 h-4" />
                Kaizen ERP — Built for Growth
              </div>

              <h1 className="text-6xl lg:text-5xl font-bold text-balance leading-tight" style={{ color: "#0a0a0a" }}>
                Improve Every Day.{" "}
                <span style={{ color: "#06b6d4" }}>Scale Every Way.</span>
              </h1>

              <p className="text-xl leading-relaxed" style={{ color: "#6b7280" }}>
                Kaizen ERP is an all-in-one business management platform that streamlines your operations,
                inventory, finance, and HR — so you can focus on growing smarter every day.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button
                size="lg"
                className="font-semibold rounded-full px-8"
                style={{ background: "#06b6d4", color: "#ffffff" }}
              >
                Get Started Free
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="rounded-full px-8 font-semibold"
                style={{
                  border: "1px solid #06b6d450",
                  background: "transparent",
                  color: "#06b6d4",
                }}
              >
                Watch Demo
              </Button>
            </div>

            {/* Stats Row */}
            <div
              className="flex gap-8 pt-4 pb-2 border-t"
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
                <p className="text-2xl font-bold" style={{ color: "#06b6d4" }}>3x</p>
                <p className="text-xs" style={{ color: "#9ca3af" }}>Faster Operations</p>
              </div>
            </div>

            <div className="text-sm" style={{ color: "#9ca3af" }}>
              99 SW 8th St, Miami, FL 33130
            </div>
          </div>

          <div className="hidden lg:flex flex-col items-center gap-8">
            <div className="w-full">
              <DashboardPreview />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
"use client"

import { TrendingUp, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"
import DashboardPreview from "@/components/dashboard-preview"

export default function Hero() {
  return (
    <section
      className="relative min-h-screen flex items-center justify-center px-4 py-20 overflow-hidden"
      style={{ background: "#0d1f1a" }}
    >
      <div className="relative z-20 max-w-7xl mx-auto w-full">
        <div className="grid lg:grid-cols-2 gap-26 items-center">
          <div className="space-y-8">
            <div className="space-y-8">

              {/* Badge */}
              <div
                className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-sm font-medium w-fit"
                style={{ border: "1px solid #13f07630", background: "#13f07610", color: "#13f076" }}
              >
                <Sparkles className="w-4 h-4" />
                Kaizen ERP — Built for Growth
              </div>

              <h1
                className="text-6xl lg:text-5xl font-bold text-balance leading-tight text-white"
              >
                Improve Every Day.{" "}
                <span style={{ color: "#13f076" }}>Scale Every Way.</span>
              </h1>

              <p className="text-xl leading-relaxed" style={{ color: "rgba(255,255,255,0.60)" }}>
                Kaizen ERP is an all-in-one business management platform that streamlines your operations,
                inventory, finance, and HR — so you can focus on growing smarter every day.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button
                size="lg"
                className="font-semibold rounded-full px-8"
                style={{ background: "#13f076", color: "#0d1f1a" }}
              >
                Get Started Free
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="rounded-full px-8 font-semibold"
                style={{
                  border: "1px solid #13f07650",
                  background: "transparent",
                  color: "#13f076",
                }}
              >
                Watch Demo
              </Button>
            </div>

            {/* Stats Row */}
            <div
              className="flex gap-8 pt-2 pb-2 border-t"
              style={{ borderColor: "#13f07620" }}
            >
              <div>
                <p className="text-2xl font-bold" style={{ color: "#13f076" }}>500+</p>
                <p className="text-xs" style={{ color: "rgba(255,255,255,0.50)" }}>Businesses Onboarded</p>
              </div>
              <div>
                <p className="text-2xl font-bold" style={{ color: "#13f076" }}>99.9%</p>
                <p className="text-xs" style={{ color: "rgba(255,255,255,0.50)" }}>Uptime Guaranteed</p>
              </div>
              <div>
                <p className="text-2xl font-bold" style={{ color: "#13f076" }}>3x</p>
                <p className="text-xs" style={{ color: "rgba(255,255,255,0.50)" }}>Faster Operations</p>
              </div>
            </div>

            <div className="text-sm" style={{ color: "rgba(255,255,255,0.35)" }}>
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
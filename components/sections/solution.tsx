"use client"

import { Users, Package, BarChart3, Workflow, TrendingUp, Cpu } from "lucide-react"

export default function Solution() {
  const features = [
    {
      title: "Smart HR Management",
      description: "Automate payroll, attendance, and employee records in one unified system",
      icon: Users,
    },
    {
      title: "Real-Time Inventory Control",
      description: "Track stock levels, automate reorders, and eliminate manual errors instantly",
      icon: Package,
    },
    {
      title: "Live Financial Insights",
      description: "Get instant visibility into revenue, expenses, and profit across your business",
      icon: BarChart3,
    },
    {
      title: "Seamless Workflow Automation",
      description: "Connect every department and eliminate bottlenecks with intelligent automation",
      icon: Workflow,
    },
    {
      title: "Business Growth Analytics",
      description: "Track KPIs and make data-driven decisions with real-time dashboards",
      icon: TrendingUp,
    },
    {
      title: "AI-Powered ERP Engine",
      description: "Smart automation that learns your business and optimizes operations",
      icon: Cpu,
    },
  ]

  return (
    <section
      className="relative py-24 px-4 overflow-hidden"
      style={{ background: "#f0fafb" }}
    >
      {/* Glow blobs */}
      <div className="absolute top-10 left-20 w-64 h-64 rounded-full blur-3xl pointer-events-none" style={{ background: "#06b6d410" }}></div>
      <div className="absolute bottom-10 right-20 w-64 h-64 rounded-full blur-3xl pointer-events-none" style={{ background: "#06b6d410" }}></div>

      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="text-center space-y-4 mb-16">
          <p className="text-sm font-medium tracking-widest uppercase" style={{ color: "#06b6d4" }}>
            What We Offer
          </p>
          <h2 className="text-4xl md:text-5xl font-bold" style={{ color: "#0a0a0a" }}>
            Core <span style={{ color: "#06b6d4" }}>Features</span>
          </h2>
          <p className="text-lg max-w-2xl mx-auto" style={{ color: "#6b7280" }}>
            Everything your team needs to manage and grow your business in one unified platform
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <div
                key={index}
                className="p-8 rounded-2xl transition-all duration-300 cursor-default"
                style={{
                  background: "#ffffff",
                  border: "1px solid #06b6d425",
                  boxShadow: "0 2px 16px rgba(6,182,212,0.06)",
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.borderColor = "#06b6d460"
                  e.currentTarget.style.boxShadow = "0 4px 24px rgba(6,182,212,0.12)"
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.borderColor = "#06b6d425"
                  e.currentTarget.style.boxShadow = "0 2px 16px rgba(6,182,212,0.06)"
                }}
              >
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center mb-5"
                  style={{ background: "#06b6d412", border: "1px solid #06b6d430" }}
                >
                  <Icon className="w-6 h-6" strokeWidth={1.5} style={{ color: "#06b6d4" }} />
                </div>
                <h3 className="text-lg font-semibold mb-2" style={{ color: "#0a0a0a" }}>
                  {feature.title}
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: "#6b7280" }}>
                  {feature.description}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
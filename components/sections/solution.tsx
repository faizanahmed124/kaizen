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
      style={{ background: "#0d1f1a" }}
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white">
            Core Features
          </h2>
          <p className="text-lg max-w-2xl mx-auto" style={{ color: "rgba(255,255,255,0.55)" }}>
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
                className="p-8 rounded-2xl transition group cursor-default"
                style={{
                  background: "#111f1a",
                  border: "1px solid #13f07630",
                }}
                onMouseEnter={e => (e.currentTarget.style.borderColor = "#13f07670")}
                onMouseLeave={e => (e.currentTarget.style.borderColor = "#13f07630")}
              >
                <Icon
                  className="w-8 h-8 mb-5"
                  style={{ color: "#13f076" }}
                  strokeWidth={1.5}
                />
                <h3 className="text-lg font-semibold text-white mb-2">
                  {feature.title}
                </h3>
                <p className="text-sm" style={{ color: "rgba(255,255,255,0.50)" }}>
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
"use client"

import { Users, Package, BarChart3, Workflow, Cpu, FileText } from "lucide-react"

export default function Features() {
  const features = [
    {
      icon: Users,
      title: "HR & Payroll Management",
      description: "Automate employee records, payroll processing, and attendance tracking",
    },
    {
      icon: Package,
      title: "Inventory & Stock Control",
      description: "Real-time stock tracking, automated reorders, and warehouse management",
    },
    {
      icon: BarChart3,
      title: "Financial Analytics",
      description: "Live profit & loss, balance sheets, and cash flow reporting",
    },
    {
      icon: Workflow,
      title: "Workflow Automation",
      description: "Eliminate manual tasks and connect every department seamlessly",
    },
    {
      icon: Cpu,
      title: "AI-Powered Insights",
      description: "Smart recommendations that help you make faster, better decisions",
    },
    {
      icon: FileText,
      title: "Invoicing & Billing",
      description: "Generate invoices, track payments, and manage accounts receivable",
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
          <p
            className="text-lg max-w-2xl mx-auto"
            style={{ color: "rgba(255,255,255,0.55)" }}
          >
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
                  strokeWidth={1.5}
                  style={{ color: "#13f076" }}
                />
                <h3 className="text-lg font-semibold text-white mb-2">
                  {feature.title}
                </h3>
                <p
                  className="text-sm"
                  style={{ color: "rgba(255,255,255,0.50)" }}
                >
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
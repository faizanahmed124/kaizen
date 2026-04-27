"use client"

import { Building2, ShoppingCart, Stethoscope, Factory, Store, Briefcase } from "lucide-react"

export default function UseCases() {
  const useCases = [
    { icon: Building2, title: "Startups & SMBs", description: "Get enterprise-grade ERP without the enterprise price tag" },
    { icon: ShoppingCart, title: "Retail & E-commerce", description: "Manage inventory, orders, and customers in one place" },
    { icon: Stethoscope, title: "Healthcare", description: "Streamline billing, staff, and supply chain operations" },
    { icon: Factory, title: "Manufacturing", description: "Track production, raw materials, and delivery pipelines" },
    { icon: Store, title: "Distribution", description: "Automate warehousing, logistics, and vendor management" },
    { icon: Briefcase, title: "Professional Services", description: "Manage projects, invoices, and team performance easily" },
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
            Who We <span style={{ color: "#13f076" }}>Serve</span>
          </h2>
          <p
            className="text-lg max-w-2xl mx-auto"
            style={{ color: "rgba(255,255,255,0.55)" }}
          >
            Kaizen ERP is built for every industry that wants to grow smarter
          </p>
        </div>

        {/* Use Cases Grid */}
        <div
          className="grid md:grid-cols-3 gap-0 rounded-2xl overflow-hidden"
          style={{ border: "1px solid #13f07630" }}
        >
          {useCases.map((useCase, index) => {
            const Icon = useCase.icon
            return (
              <div
                key={index}
                className="p-8 transition group text-center cursor-default"
                style={{
                  background: "#111f1a",
                  borderRight: "1px solid #13f07625",
                  borderBottom: "1px solid #13f07625",
                }}
                onMouseEnter={e => (e.currentTarget.style.background = "#162b22")}
                onMouseLeave={e => (e.currentTarget.style.background = "#111f1a")}
              >
                <div
                  className="w-14 h-14 rounded-xl flex items-center justify-center mx-auto mb-4"
                  style={{ background: "#13f07610", border: "1px solid #13f07630" }}
                >
                  <Icon
                    className="w-7 h-7"
                    strokeWidth={1.5}
                    style={{ color: "#13f076" }}
                  />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">
                  {useCase.title}
                </h3>
                <p
                  className="text-sm"
                  style={{ color: "rgba(255,255,255,0.50)" }}
                >
                  {useCase.description}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
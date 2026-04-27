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
      style={{ background: "#f0fafb" }}
    >
      {/* Glow blobs */}
      <div className="absolute top-10 left-20 w-64 h-64 rounded-full blur-3xl pointer-events-none" style={{ background: "#06b6d410" }}></div>
      <div className="absolute bottom-10 right-20 w-64 h-64 rounded-full blur-3xl pointer-events-none" style={{ background: "#06b6d410" }}></div>

      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="text-center space-y-4 mb-16">
          <p className="text-sm font-medium tracking-widest uppercase" style={{ color: "#06b6d4" }}>
            Industries We Serve
          </p>
          <h2 className="text-4xl md:text-5xl font-bold" style={{ color: "#0a0a0a" }}>
            Who We <span style={{ color: "#06b6d4" }}>Serve</span>
          </h2>
          <p className="text-lg max-w-2xl mx-auto" style={{ color: "#6b7280" }}>
            Kaixen ERP is built for every industry that wants to grow smarter
          </p>
        </div>

        {/* Use Cases Grid */}
        <div
          className="grid md:grid-cols-3 gap-0 rounded-2xl overflow-hidden"
          style={{ border: "1px solid #06b6d425" }}
        >
          {useCases.map((useCase, index) => {
            const Icon = useCase.icon
            return (
              <div
                key={index}
                className="p-8 transition-all duration-300 text-center cursor-default"
                style={{
                  background: "#ffffff",
                  borderRight: "1px solid #06b6d420",
                  borderBottom: "1px solid #06b6d420",
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.background = "#ecfeff"
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.background = "#ffffff"
                }}
              >
                <div
                  className="w-14 h-14 rounded-xl flex items-center justify-center mx-auto mb-4"
                  style={{ background: "#06b6d412", border: "1px solid #06b6d430" }}
                >
                  <Icon
                    className="w-7 h-7"
                    strokeWidth={1.5}
                    style={{ color: "#06b6d4" }}
                  />
                </div>
                <h3 className="text-lg font-semibold mb-2" style={{ color: "#0a0a0a" }}>
                  {useCase.title}
                </h3>
                <p className="text-sm" style={{ color: "#6b7280" }}>
                  {useCase.description}
                </p>
              </div>
            )
          })}
        </div>

        {/* Bottom note */}
        <div className="text-center mt-10">
          <p className="text-sm" style={{ color: "#9ca3af" }}>
            Don't see your industry?{" "}
            <span className="cursor-pointer underline underline-offset-4" style={{ color: "#06b6d4" }}>
              Talk to us — we customize for you.
            </span>
          </p>
        </div>

      </div>
    </section>
  )
}
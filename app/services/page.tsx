'use client'

import { Users, Package, BarChart3, Workflow, Cpu, FileText } from 'lucide-react'
import { Button } from '@/components/ui/button'
import Footer from '@/components/sections/footer'
import { useEffect, useRef, useState } from 'react'

function FadeInSection({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  const ref = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true) },
      { threshold: 0.1 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return (
    <div
      ref={ref}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(32px)",
        transition: `opacity 0.7s ease ${delay}ms, transform 0.7s ease ${delay}ms`,
      }}
    >
      {children}
    </div>
  )
}

export default function Services() {
  const services = [
    {
      icon: Users,
      title: 'HR & Payroll Management',
      description: 'Automate your entire HR process from hiring to payroll, attendance tracking, and employee performance management.',
      features: ['Payroll Automation', 'Attendance Tracking', 'Employee Records', 'Performance Reviews'],
    },
    {
      icon: Package,
      title: 'Inventory & Stock Control',
      description: 'Real-time inventory tracking with automated reorder alerts, warehouse management, and supplier coordination.',
      features: ['Real-Time Tracking', 'Auto Reorder Alerts', 'Warehouse Management', 'Supplier Portal'],
    },
    {
      icon: BarChart3,
      title: 'Financial Management',
      description: 'Complete financial visibility with live profit & loss, balance sheets, invoicing, and cash flow reports.',
      features: ['Live P&L Reports', 'Invoice Management', 'Cash Flow Tracking', 'Tax Compliance'],
    },
    {
      icon: Workflow,
      title: 'Workflow Automation',
      description: 'Eliminate manual tasks by automating approvals, notifications, and cross-department workflows.',
      features: ['Custom Workflows', 'Auto Approvals', 'Department Integration', 'Task Scheduling'],
    },
    {
      icon: Cpu,
      title: 'AI-Powered Analytics',
      description: 'Smart dashboards and AI insights that help you forecast demand, reduce costs, and make faster decisions.',
      features: ['Demand Forecasting', 'Cost Optimization', 'Custom Dashboards', 'Predictive Reports'],
    },
    {
      icon: FileText,
      title: 'Invoicing & Billing',
      description: 'Generate professional invoices, track payments, manage subscriptions, and automate your billing cycle.',
      features: ['Auto Invoice Generation', 'Payment Tracking', 'Subscription Billing', 'Accounts Receivable'],
    },
  ]

  return (
    <main className="relative overflow-hidden" style={{ background: "#f0fafb" }}>

      {/* Glow blobs */}
      <div className="absolute top-0 left-1/4 w-96 h-96 rounded-full blur-3xl pointer-events-none" style={{ background: "#06b6d410" }}></div>
      <div className="absolute top-1/3 right-1/4 w-96 h-96 rounded-full blur-3xl pointer-events-none" style={{ background: "#06b6d410" }}></div>

      <div className="relative z-10 pt-32 pb-20">
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">

          {/* Header */}
          <FadeInSection delay={0}>
            <div className="text-center mb-16">
              <p className="text-sm font-medium tracking-widest uppercase mb-4" style={{ color: "#06b6d4" }}>
                What We Offer
              </p>
              <h1 className="text-5xl md:text-6xl font-bold mb-6" style={{ color: "#0a0a0a" }}>
                Our <span style={{ color: "#06b6d4" }}>Services</span>
              </h1>
              <p className="text-xl max-w-2xl mx-auto" style={{ color: "#6b7280" }}>
                Everything your business needs to operate smarter, automate faster, and grow continuously.
              </p>
            </div>
          </FadeInSection>

          {/* Services Grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, idx) => {
              const Icon = service.icon
              return (
                <FadeInSection key={idx} delay={idx * 80}>
                  <div
                    className="p-8 rounded-2xl transition-all duration-300 group h-full"
                    style={{
                      background: "#ffffff",
                      border: "1px solid #06b6d425",
                      boxShadow: "0 2px 16px rgba(6,182,212,0.06)",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.borderColor = "#06b6d460"
                      e.currentTarget.style.boxShadow = "0 8px 32px rgba(6,182,212,0.14)"
                      e.currentTarget.style.transform = "translateY(-4px)"
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.borderColor = "#06b6d425"
                      e.currentTarget.style.boxShadow = "0 2px 16px rgba(6,182,212,0.06)"
                      e.currentTarget.style.transform = "translateY(0)"
                    }}
                  >
                    {/* Icon + Title */}
                    <div className="flex items-center gap-4 mb-4">
                      <div
                        className="w-14 h-14 rounded-xl flex items-center justify-center flex-shrink-0"
                        style={{ background: "#06b6d412", border: "1px solid #06b6d430" }}
                      >
                        <Icon className="w-6 h-6" strokeWidth={1.5} style={{ color: "#06b6d4" }} />
                      </div>
                      <h3 className="text-xl font-bold" style={{ color: "#0a0a0a" }}>{service.title}</h3>
                    </div>

                    {/* Description */}
                    <p className="mb-6 text-sm leading-relaxed" style={{ color: "#6b7280" }}>
                      {service.description}
                    </p>

                    {/* Features */}
                    <div className="space-y-2 mb-6">
                      {service.features.map((feature, fidx) => (
                        <div key={fidx} className="flex items-center gap-2 text-sm">
                          <div className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: "#06b6d4" }}></div>
                          <span style={{ color: "#06b6d4" }}>{feature}</span>
                        </div>
                      ))}
                    </div>

                    {/* Button */}
                    <Button
                      className="w-full rounded-full font-semibold transition-all duration-200"
                      style={{ background: "#06b6d412", color: "#06b6d4", border: "1px solid #06b6d430" }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.background = "#06b6d4"
                        e.currentTarget.style.color = "#ffffff"
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.background = "#06b6d412"
                        e.currentTarget.style.color = "#06b6d4"
                      }}
                    >
                      Learn More
                    </Button>
                  </div>
                </FadeInSection>
              )
            })}
          </div>

          {/* CTA */}
          <FadeInSection delay={200}>
            <div
              className="mt-20 p-12 rounded-2xl text-center transition-all duration-300"
              style={{
                background: "#ffffff",
                border: "1px solid #06b6d430",
                boxShadow: "0 4px 24px rgba(6,182,212,0.08)",
              }}
            >
              <h2 className="text-3xl font-bold mb-4" style={{ color: "#0a0a0a" }}>
                Ready to Run a{" "}
                <span style={{ color: "#06b6d4" }}>Smarter Business?</span>
              </h2>
              <p className="text-lg mb-8 max-w-2xl mx-auto" style={{ color: "#6b7280" }}>
                Let's schedule a free demo and show you exactly how Kaizen ERP can transform your operations.
              </p>
              <Button
                className="rounded-full px-10 font-semibold"
                style={{ background: "#06b6d4", color: "#ffffff" }}
              >
                Schedule Free Demo
              </Button>
            </div>
          </FadeInSection>

        </section>
      </div>

      <Footer />
    </main>
  )
}
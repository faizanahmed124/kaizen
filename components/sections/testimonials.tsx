"use client"

import { Star } from "lucide-react"

export default function Testimonials() {
  const testimonials = [
    {
      quote: "Kaizen ERP cut our manual work by 80%. Our team now focuses on growth instead of spreadsheets.",
      author: "Ahmed Raza",
      role: "CEO, RetailPro Pakistan",
      stats: "80% less manual work",
    },
    {
      quote: "We went live in 3 days. Inventory, HR, and finance all in one place. Absolute game changer.",
      author: "Sara Malik",
      role: "Operations Head, MedSupply Co.",
      stats: "3-day implementation",
    },
    {
      quote: "Our order processing time dropped by 60%. Kaizen ERP paid for itself within the first month.",
      author: "Usman Tariq",
      role: "COO, FastDistribute Ltd.",
      stats: "60% faster processing",
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
            Customer Stories
          </p>
          <h2 className="text-4xl md:text-5xl font-bold" style={{ color: "#0a0a0a" }}>
            Trusted by <span style={{ color: "#06b6d4" }}>Growing Businesses</span>
          </h2>
          <p className="text-lg max-w-2xl mx-auto" style={{ color: "#6b7280" }}>
            See how companies use Kaizen ERP to streamline operations and scale faster
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="p-8 rounded-2xl transition-all duration-300 flex flex-col justify-between"
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
              {/* Stars */}
              <div>
                <div className="flex gap-1 mb-5">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-4 h-4"
                      style={{ fill: "#06b6d4", color: "#06b6d4" }}
                    />
                  ))}
                </div>

                {/* Quote */}
                <p
                  className="text-base leading-relaxed italic mb-6"
                  style={{ color: "#374151" }}
                >
                  "{testimonial.quote}"
                </p>
              </div>

              {/* Author */}
              <div
                className="border-t pt-4"
                style={{ borderColor: "#06b6d420" }}
              >
                <p className="font-semibold" style={{ color: "#0a0a0a" }}>
                  {testimonial.author}
                </p>
                <p className="text-sm mb-2" style={{ color: "#9ca3af" }}>
                  {testimonial.role}
                </p>
                <p className="text-sm font-semibold" style={{ color: "#06b6d4" }}>
                  {testimonial.stats}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
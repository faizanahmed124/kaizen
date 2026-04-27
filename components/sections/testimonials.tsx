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
      style={{ background: "#0d1f1a" }}
    >
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="text-center space-y-4 mb-16">
          <p
            className="text-sm font-medium tracking-widest uppercase"
            style={{ color: "#13f076" }}
          >
            Customer Stories
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-white">
            Trusted by <span style={{ color: "#13f076" }}>Growing Businesses</span>
          </h2>
          <p
            className="text-lg max-w-2xl mx-auto"
            style={{ color: "rgba(255,255,255,0.55)" }}
          >
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
                background: "#111f1a",
                border: "1px solid #13f07630",
              }}
              onMouseEnter={e => (e.currentTarget.style.borderColor = "#13f07670")}
              onMouseLeave={e => (e.currentTarget.style.borderColor = "#13f07630")}
            >
              {/* Stars */}
              <div>
                <div className="flex gap-1 mb-5">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-4 h-4"
                      style={{ fill: "#13f076", color: "#13f076" }}
                    />
                  ))}
                </div>

                {/* Quote */}
                <p
                  className="text-base leading-relaxed italic mb-6"
                  style={{ color: "rgba(255,255,255,0.75)" }}
                >
                  "{testimonial.quote}"
                </p>
              </div>

              {/* Author */}
              <div
                className="border-t pt-4"
                style={{ borderColor: "#13f07620" }}
              >
                <p className="font-semibold text-white">{testimonial.author}</p>
                <p
                  className="text-sm mb-2"
                  style={{ color: "rgba(255,255,255,0.45)" }}
                >
                  {testimonial.role}
                </p>
                <p
                  className="text-sm font-semibold"
                  style={{ color: "#13f076" }}
                >
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
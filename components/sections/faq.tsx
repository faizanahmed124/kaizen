"use client"

import { useState } from "react"
import { ChevronDown } from "lucide-react"

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  const faqs = [
    {
      question: "How long does it take to set up Kaizen ERP?",
      answer:
        "Most businesses are fully up and running within 24 hours. Our onboarding team handles the entire setup process, migrates your existing data, and trains your team — so you can go live without any technical headaches.",
    },
    {
      question: "Can Kaizen ERP handle multiple departments?",
      answer:
        "Yes. Kaizen ERP is built to connect HR, finance, inventory, sales, and operations in one unified platform. Every department works from the same real-time data, eliminating silos and miscommunication.",
    },
    {
      question: "Is my business data secure?",
      answer:
        "Absolutely. We use end-to-end encryption, role-based access control, and regular security audits to keep your data safe. Your data is stored on secure cloud infrastructure with 99.9% uptime guaranteed.",
    },
    {
      question: "Can I customize Kaizen ERP for my industry?",
      answer:
        "Yes. Kaizen ERP is fully customizable. Whether you're in retail, manufacturing, healthcare, or professional services, we tailor workflows, reports, and modules to match exactly how your business operates.",
    },
    {
      question: "What happens if I need help after going live?",
      answer:
        "We provide dedicated support via chat, email, and phone. Our team is available to help you resolve issues, train new staff, and roll out new features as your business grows.",
    },
  ]

  return (
    <section
      className="relative py-24 px-4 overflow-hidden"
      style={{ background: "#0d1f1a" }}
    >
      <div className="max-w-4xl mx-auto">

        {/* Header */}
        <div className="text-center space-y-4 mb-16">
          <p
            className="text-sm font-medium tracking-widest uppercase"
            style={{ color: "#13f076" }}
          >
            FAQ
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-white">
            Common <span style={{ color: "#13f076" }}>Questions</span>
          </h2>
          <p
            className="text-lg"
            style={{ color: "rgba(255,255,255,0.55)" }}
          >
            Everything you need to know about Kaizen ERP
          </p>
        </div>

        {/* FAQ Items */}
        <div className="space-y-3">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="rounded-2xl overflow-hidden transition-all duration-300 cursor-pointer"
              style={{
                background: "#111f1a",
                border: `1px solid ${openIndex === index ? "#13f07660" : "#13f07625"}`,
              }}
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
            >
              {/* Question Row */}
              <button className="w-full px-6 py-5 flex items-center justify-between transition cursor-pointer">
                <h3
                  className="text-base font-semibold text-left"
                  style={{ color: openIndex === index ? "#13f076" : "white" }}
                >
                  {faq.question}
                </h3>
                <ChevronDown
                  className="w-5 h-5 flex-shrink-0 ml-4 transition-transform duration-300"
                  style={{
                    color: "#13f076",
                    transform: openIndex === index ? "rotate(180deg)" : "rotate(0deg)",
                  }}
                />
              </button>

              {/* Answer */}
              {openIndex === index && (
                <div
                  className="px-6 pb-6 pt-0 text-sm leading-relaxed border-t"
                  style={{
                    color: "rgba(255,255,255,0.60)",
                    borderColor: "#13f07620",
                  }}
                >
                  <p className="pt-4">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
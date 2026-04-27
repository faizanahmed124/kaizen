"use client"

import { BarChart2, Clock, TrendingDown } from "lucide-react"

export default function Problem() {
  const problems = [
    {
      stat: "70% of businesses use outdated tools",
      description: "Spreadsheets and legacy software slow down your entire operation",
      icon: TrendingDown,
    },
    {
      stat: "Hours lost to manual data entry",
      description: "Your team wastes valuable time on tasks that should be automated",
      icon: Clock,
    },
    {
      stat: "No real-time business visibility",
      description: "Without live insights, decisions are delayed and costly mistakes happen",
      icon: BarChart2,
    },
  ]

  return (
    <section className="relative py-24 px-4 overflow-hidden" style={{ background: "#f0fafb" }}>

      {/* Glow blobs */}
      <div className="absolute top-10 left-20 w-64 h-64 rounded-full blur-3xl pointer-events-none" style={{ background: "#06b6d410" }}></div>
      <div className="absolute bottom-10 right-20 w-64 h-64 rounded-full blur-3xl pointer-events-none" style={{ background: "#06b6d410" }}></div>

      <div className="max-w-7xl mx-auto">
        <div className="text-center space-y-4 mb-16">
          <p className="text-sm font-medium tracking-widest uppercase" style={{ color: "#06b6d4" }}>
            The Problem
          </p>
          <h2 className="text-4xl md:text-5xl font-bold" style={{ color: "#0a0a0a" }}>
            Is Your Business{" "}
            <span style={{ color: "#06b6d4" }}>Holding Itself Back?</span>
          </h2>
          <p className="text-lg max-w-2xl mx-auto" style={{ color: "#6b7280" }}>
            Most growing businesses hit the same wall — disconnected systems, manual processes, and zero visibility.
          </p>
        </div>

        {/* Problem Cards */}
        <div className="grid md:grid-cols-3 gap-6">
          {problems.map((problem, index) => {
            const Icon = problem.icon
            return (
              <div
                key={index}
                className="p-8 rounded-2xl transition-all duration-300 group"
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
                <h3 className="text-xl font-semibold mb-2" style={{ color: "#0a0a0a" }}>
                  {problem.stat}
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: "#6b7280" }}>
                  {problem.description}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
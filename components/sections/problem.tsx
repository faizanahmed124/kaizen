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
    <section className="relative py-24 px-4 overflow-hidden" style={{ background: "#0d1f1a" }}>
      <div className="max-w-7xl mx-auto">
        <div className="text-center space-y-4 mb-16">
          <h2
            className="text-4xl md:text-5xl font-bold text-white"
          >
            Is Your Business{" "}
            <span style={{ color: "#13f076" }}>Holding Itself Back?</span>
          </h2>
          <p className="text-lg max-w-2xl mx-auto" style={{ color: "rgba(255,255,255,0.55)" }}>
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
                className="p-8 rounded-2xl transition group backdrop-blur-sm"
                style={{
                  background: "#111f1a",
                  border: "1px solid #13f07630",
                }}
                onMouseEnter={e => (e.currentTarget.style.borderColor = "#13f07670")}
                onMouseLeave={e => (e.currentTarget.style.borderColor = "#13f07630")}
              >
                <div
                  className="w-12 h-12 rounded-lg flex items-center justify-center mb-5"
                  style={{ background: "#13f07610", border: "1px solid #13f07630" }}
                >
                  <Icon className="w-6 h-6" strokeWidth={1.5} style={{ color: "#13f076" }} />
                </div>
                <h3
                  className="text-xl font-semibold mb-2 text-white"
                >
                  {problem.stat}
                </h3>
                <p style={{ color: "rgba(255,255,255,0.50)" }}>{problem.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
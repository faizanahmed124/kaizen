"use client"

const technologies = [
  { name: "Next.js", category: "Frontend" },
  { name: "React", category: "Frontend" },
  { name: "TypeScript", category: "Language" },
  { name: "Node.js", category: "Backend" },
  { name: "PostgreSQL", category: "Database" },
  { name: "MongoDB", category: "Database" },
  { name: "Redis", category: "Cache" },
  { name: "Docker", category: "DevOps" },
  { name: "AWS", category: "Cloud" },
  { name: "Tailwind CSS", category: "Styling" },
  { name: "GraphQL", category: "API" },
  { name: "Prisma", category: "ORM" },
  { name: "Kubernetes", category: "DevOps" },
  { name: "REST API", category: "API" },
  { name: "Stripe", category: "Payments" },
  { name: "Vercel", category: "Hosting" },
]

const row1 = technologies.slice(0, 8)
const row2 = technologies.slice(8, 16)

export default function TechStack() {
  return (
    <section
      className="relative py-24 px-4 overflow-hidden"
      style={{ background: "#f0fafb" }}
    >
      {/* Top fade */}
      <div
        className="absolute top-0 left-0 right-0 h-24 z-10 pointer-events-none"
        style={{ background: "linear-gradient(to bottom, #f0fafb, transparent)" }}
      />
      {/* Bottom fade */}
      <div
        className="absolute bottom-0 left-0 right-0 h-24 z-10 pointer-events-none"
        style={{ background: "linear-gradient(to top, #f0fafb, transparent)" }}
      />

      {/* Glow blobs */}
      <div className="absolute top-10 left-20 w-64 h-64 rounded-full blur-3xl pointer-events-none" style={{ background: "#06b6d410" }}></div>
      <div className="absolute bottom-10 right-20 w-64 h-64 rounded-full blur-3xl pointer-events-none" style={{ background: "#06b6d410" }}></div>

      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="text-center space-y-4 mb-16">
          <p className="text-sm font-medium tracking-widest uppercase" style={{ color: "#06b6d4" }}>
            Our Tech Stack
          </p>
          <h2 className="text-4xl md:text-5xl font-bold" style={{ color: "#0a0a0a" }}>
            Built With <span style={{ color: "#06b6d4" }}>World-Class</span> Technologies
          </h2>
          <p className="text-lg max-w-2xl mx-auto" style={{ color: "#6b7280" }}>
            Kaizen ERP is powered by modern, battle-tested technologies to ensure performance, security, and scale
          </p>
        </div>

        {/* Scrolling Rows */}
        <div className="space-y-4 overflow-hidden">

          {/* Row 1 — scroll left */}
          <div className="flex gap-4 animate-scroll-left">
            {[...row1, ...row1].map((tech, i) => (
              <div
                key={i}
                className="flex-shrink-0 px-6 py-4 rounded-xl flex flex-col items-center gap-1 min-w-[140px]"
                style={{
                  background: "#ffffff",
                  border: "1px solid #06b6d425",
                  boxShadow: "0 2px 12px rgba(6,182,212,0.06)",
                }}
              >
                <span className="font-semibold text-sm" style={{ color: "#0a0a0a" }}>{tech.name}</span>
                <span className="text-xs" style={{ color: "#06b6d4" }}>{tech.category}</span>
              </div>
            ))}
          </div>

          {/* Row 2 — scroll right */}
          <div className="flex gap-4 animate-scroll-right">
            {[...row2, ...row2].map((tech, i) => (
              <div
                key={i}
                className="flex-shrink-0 px-6 py-4 rounded-xl flex flex-col items-center gap-1 min-w-[140px]"
                style={{
                  background: "#ffffff",
                  border: "1px solid #06b6d425",
                  boxShadow: "0 2px 12px rgba(6,182,212,0.06)",
                }}
              >
                <span className="font-semibold text-sm" style={{ color: "#0a0a0a" }}>{tech.name}</span>
                <span className="text-xs" style={{ color: "#06b6d4" }}>{tech.category}</span>
              </div>
            ))}
          </div>

        </div>
      </div>

      <style jsx>{`
        @keyframes scrollLeft {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        @keyframes scrollRight {
          0% { transform: translateX(-50%); }
          100% { transform: translateX(0); }
        }
        .animate-scroll-left {
          animation: scrollLeft 20s linear infinite;
        }
        .animate-scroll-right {
          animation: scrollRight 20s linear infinite;
        }
        .animate-scroll-left:hover,
        .animate-scroll-right:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  )
}
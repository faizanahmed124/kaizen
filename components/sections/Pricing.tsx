"use client"

import { useEffect, useRef } from "react"

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
      style={{ background: "#0d1f1a" }}
    >
      {/* Top fade */}
      <div
        className="absolute top-0 left-0 right-0 h-24 z-10 pointer-events-none"
        style={{
          background: "linear-gradient(to bottom, #0d1f1a, transparent)",
        }}
      />
      {/* Bottom fade */}
      <div
        className="absolute bottom-0 left-0 right-0 h-24 z-10 pointer-events-none"
        style={{
          background: "linear-gradient(to top, #0d1f1a, transparent)",
        }}
      />

      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="text-center space-y-4 mb-16">
          <p
            className="text-sm font-medium tracking-widest uppercase"
            style={{ color: "#13f076" }}
          >
            Our Tech Stack
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-white">
            Built With <span style={{ color: "#13f076" }}>World-Class</span> Technologies
          </h2>
          <p
            className="text-lg max-w-2xl mx-auto"
            style={{ color: "rgba(255,255,255,0.55)" }}
          >
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
                  background: "#111f1a",
                  border: "1px solid #13f07630",
                }}
              >
                <span className="text-white font-semibold text-sm">{tech.name}</span>
                <span
                  className="text-xs"
                  style={{ color: "#13f076" }}
                >
                  {tech.category}
                </span>
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
                  background: "#111f1a",
                  border: "1px solid #13f07630",
                }}
              >
                <span className="text-white font-semibold text-sm">{tech.name}</span>
                <span
                  className="text-xs"
                  style={{ color: "#13f076" }}
                >
                  {tech.category}
                </span>
              </div>
            ))}
          </div>

        </div>
      </div>

      {/* Animation styles */}
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
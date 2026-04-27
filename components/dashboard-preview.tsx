"use client"

import { ShoppingCart, TrendingUp, Package } from "lucide-react"

export default function DashboardPreview() {
  return (
    <div className="relative">
      <div
        className="relative p-6 rounded-2xl overflow-hidden"
        style={{
          background: "#ffffff",
          border: "1px solid #06b6d430",
          boxShadow: "0 4px 32px rgba(6,182,212,0.10)",
        }}
      >
        {/* Grid background */}
        <div className="absolute inset-0 opacity-20">
          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#06b6d4" strokeWidth="0.5" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)" />
          </svg>
        </div>

        <div className="relative z-10 space-y-6">

          {/* Header */}
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-bold" style={{ color: "#0a0a0a" }}>
              ERP Overview
            </h3>
            <div className="flex items-center gap-2">
              <div
                className="w-2 h-2 rounded-full animate-pulse"
                style={{ background: "#06b6d4" }}
              />
              <span className="text-xs" style={{ color: "#6b7280" }}>Live</span>
            </div>
          </div>

          {/* KPI Cards */}
          <div className="grid grid-cols-2 gap-3">
            <div
              className="p-3 rounded-xl transition-all duration-200"
              style={{ background: "#f0fafb", border: "1px solid #06b6d425" }}
              onMouseEnter={(e) => (e.currentTarget.style.borderColor = "#06b6d460")}
              onMouseLeave={(e) => (e.currentTarget.style.borderColor = "#06b6d425")}
            >
              <p className="text-xs mb-1" style={{ color: "#9ca3af" }}>Total Revenue</p>
              <p className="text-2xl font-bold" style={{ color: "#06b6d4" }}>$84.2K</p>
            </div>
            <div
              className="p-3 rounded-xl transition-all duration-200"
              style={{ background: "#f0fafb", border: "1px solid #06b6d425" }}
              onMouseEnter={(e) => (e.currentTarget.style.borderColor = "#06b6d460")}
              onMouseLeave={(e) => (e.currentTarget.style.borderColor = "#06b6d425")}
            >
              <p className="text-xs mb-1" style={{ color: "#9ca3af" }}>Pending Orders</p>
              <p className="text-2xl font-bold" style={{ color: "#06b6d4" }}>128</p>
            </div>
          </div>

          {/* Chart */}
          <div
            className="h-32 rounded-xl p-3 flex items-end gap-2 justify-center"
            style={{ background: "#f0fafb", border: "1px solid #06b6d420" }}
          >
            {[50, 70, 45, 80, 60, 90, 65].map((height, i) => (
              <div
                key={i}
                className="flex-1 rounded-sm transition-opacity duration-200"
                style={{
                  height: `${height}%`,
                  background: "linear-gradient(to top, #06b6d4, #06b6d480)",
                  opacity: 0.75,
                }}
                onMouseEnter={(e) => (e.currentTarget.style.opacity = "1")}
                onMouseLeave={(e) => (e.currentTarget.style.opacity = "0.75")}
              />
            ))}
          </div>

          {/* Activity */}
          <div className="space-y-2">
            <p className="text-xs font-semibold" style={{ color: "#374151" }}>
              Recent Activity
            </p>
            <div className="space-y-2">
              <div
                className="flex items-center gap-2 text-xs p-2 rounded-lg"
                style={{ background: "#f0fafb", border: "1px solid #06b6d420" }}
              >
                <ShoppingCart className="w-4 h-4 flex-shrink-0" style={{ color: "#06b6d4" }} />
                <span style={{ color: "#374151" }}>New order #4521 received</span>
              </div>
              <div
                className="flex items-center gap-2 text-xs p-2 rounded-lg"
                style={{ background: "#f0fafb", border: "1px solid #06b6d420" }}
              >
                <Package className="w-4 h-4 flex-shrink-0" style={{ color: "#06b6d4" }} />
                <span style={{ color: "#374151" }}>Low stock alert: SKU-887</span>
              </div>
              <div
                className="flex items-center gap-2 text-xs p-2 rounded-lg"
                style={{ background: "#f0fafb", border: "1px solid #06b6d420" }}
              >
                <TrendingUp className="w-4 h-4 flex-shrink-0" style={{ color: "#06b6d4" }} />
                <span style={{ color: "#374151" }}>Monthly target: 92% achieved</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}
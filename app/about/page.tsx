'use client'

import { TrendingUp, Users, Award, Zap } from 'lucide-react'
import Footer from '@/components/sections/footer'

export default function About() {
  const stats = [
    { label: 'Years Experience', value: '5+' },
    { label: 'Modules Available', value: '20+' },
    { label: 'Businesses Onboarded', value: '500+' },
    { label: 'Team Members', value: '50+' },
  ]

  const values = [
    {
      icon: TrendingUp,
      title: 'Continuous Improvement',
      description: 'Inspired by the Kaizen philosophy, we improve our platform every single day based on real user feedback.',
    },
    {
      icon: Users,
      title: 'Customer Focused',
      description: 'We build around our customers. Every feature, every update, every decision starts with what businesses actually need.',
    },
    {
      icon: Award,
      title: 'Excellence',
      description: 'We deliver enterprise-grade reliability, security, and performance — at a price every business can afford.',
    },
    {
      icon: Zap,
      title: 'Innovation',
      description: 'From AI-powered insights to real-time automation, we use cutting-edge technology to keep your business ahead.',
    },
  ]

  return (
    <main className="relative overflow-hidden" style={{ background: "#0d1f1a" }}>

      {/* Glow blobs */}
      <div className="absolute top-0 left-1/4 w-96 h-96 rounded-full blur-3xl pointer-events-none" style={{ background: "#13f07608" }}></div>
      <div className="absolute top-1/3 right-1/4 w-96 h-96 rounded-full blur-3xl pointer-events-none" style={{ background: "#13f07608" }}></div>

      <div className="relative z-10 pt-32 pb-20">
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">

          {/* Hero */}
          <div className="text-center mb-16">
            <p className="text-sm font-medium tracking-widest uppercase mb-4" style={{ color: "#13f076" }}>
              Who We Are
            </p>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              About{" "}
              <span style={{ color: "#13f076" }}>Kaizen ERP</span>
            </h1>
            <p className="text-xl max-w-2xl mx-auto" style={{ color: "rgba(255,255,255,0.55)" }}>
              We help businesses of every size run smarter, move faster, and grow continuously — with one unified ERP platform built for the modern world.
            </p>
          </div>

          {/* Mission */}
          <div
            className="mb-16 p-10 rounded-2xl"
            style={{ background: "#111f1a", border: "1px solid #13f07630" }}
          >
            <h2 className="text-3xl font-bold text-white mb-4">
              Our <span style={{ color: "#13f076" }}>Mission</span>
            </h2>
            <p className="text-lg leading-relaxed" style={{ color: "rgba(255,255,255,0.65)" }}>
              To make enterprise-grade business management accessible to every company — not just the Fortune 500.
              Kaizen ERP was built on the belief that small and mid-sized businesses deserve powerful tools that are
              simple to use, affordable to run, and designed to grow with them. Our mission is continuous improvement
              in everything we build — because better software means better businesses.
            </p>
          </div>

          {/* Stats */}
          <div className="grid md:grid-cols-4 gap-6 mb-20">
            {stats.map((stat, idx) => (
              <div
                key={idx}
                className="rounded-2xl p-8 text-center transition-all duration-300"
                style={{ background: "#111f1a", border: "1px solid #13f07630" }}
                onMouseEnter={(e) => (e.currentTarget.style.borderColor = "#13f07670")}
                onMouseLeave={(e) => (e.currentTarget.style.borderColor = "#13f07630")}
              >
                <div className="text-4xl font-bold mb-2" style={{ color: "#13f076" }}>
                  {stat.value}
                </div>
                <div className="text-xs font-medium uppercase tracking-widest" style={{ color: "rgba(255,255,255,0.45)" }}>
                  {stat.label}
                </div>
              </div>
            ))}
          </div>

          {/* Values */}
          <h2 className="text-3xl font-bold text-white mb-8">
            Our <span style={{ color: "#13f076" }}>Values</span>
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {values.map((value, idx) => {
              const Icon = value.icon
              return (
                <div
                  key={idx}
                  className="p-8 rounded-2xl transition-all duration-300"
                  style={{ background: "#111f1a", border: "1px solid #13f07630" }}
                  onMouseEnter={(e) => (e.currentTarget.style.borderColor = "#13f07670")}
                  onMouseLeave={(e) => (e.currentTarget.style.borderColor = "#13f07630")}
                >
                  <div className="flex items-start gap-4">
                    <div
                      className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
                      style={{ background: "#13f07615", border: "1px solid #13f07635" }}
                    >
                      <Icon className="w-6 h-6" strokeWidth={1.5} style={{ color: "#13f076" }} />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-white mb-2">{value.title}</h3>
                      <p style={{ color: "rgba(255,255,255,0.55)" }}>{value.description}</p>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>

        </section>
      </div>

      <Footer />
    </main>
  )
}
'use client'

import { TrendingUp, Users, Award, Zap } from 'lucide-react'
import Footer from '@/components/sections/footer'
import { useEffect, useRef, useState } from 'react'

function useCountUp(target: number, duration: number = 2000, start: boolean = false) {
  const [count, setCount] = useState(0)
  useEffect(() => {
    if (!start) return
    let startTime: number | null = null
    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp
      const progress = Math.min((timestamp - startTime) / duration, 1)
      setCount(Math.floor(progress * target))
      if (progress < 1) requestAnimationFrame(step)
    }
    requestAnimationFrame(step)
  }, [target, duration, start])
  return count
}

function StatCard({ value, label }: { value: string; label: string }) {
  const ref = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)
  const numeric = parseInt(value.replace(/\D/g, ""))
  const suffix = value.replace(/[0-9]/g, "")
  const count = useCountUp(numeric, 1800, visible)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true) },
      { threshold: 0.3 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return (
    <div
      ref={ref}
      className="rounded-2xl p-8 text-center transition-all duration-300"
      style={{ background: "#ffffff", border: "1px solid #06b6d425", boxShadow: "0 2px 16px rgba(6,182,212,0.06)" }}
      onMouseEnter={(e) => {
        e.currentTarget.style.borderColor = "#06b6d460"
        e.currentTarget.style.boxShadow = "0 4px 24px rgba(6,182,212,0.12)"
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.borderColor = "#06b6d425"
        e.currentTarget.style.boxShadow = "0 2px 16px rgba(6,182,212,0.06)"
      }}
    >
      <div className="text-4xl font-bold mb-2" style={{ color: "#06b6d4" }}>
        {visible ? count : 0}{suffix}
      </div>
      <div className="text-xs font-medium uppercase tracking-widest" style={{ color: "#9ca3af" }}>
        {label}
      </div>
    </div>
  )
}

function FadeInSection({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  const ref = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true) },
      { threshold: 0.15 }
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
    <main className="relative overflow-hidden" style={{ background: "#f0fafb" }}>

      {/* Glow blobs */}
      <div className="absolute top-0 left-1/4 w-96 h-96 rounded-full blur-3xl pointer-events-none" style={{ background: "#06b6d410" }}></div>
      <div className="absolute top-1/3 right-1/4 w-96 h-96 rounded-full blur-3xl pointer-events-none" style={{ background: "#06b6d410" }}></div>

      <div className="relative z-10 pt-32 pb-20">
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">

          {/* Hero */}
          <FadeInSection delay={0}>
            <div className="text-center mb-16">
              <p className="text-sm font-medium tracking-widest uppercase mb-4" style={{ color: "#06b6d4" }}>
                Who We Are
              </p>
              <h1 className="text-5xl md:text-6xl font-bold mb-6" style={{ color: "#0a0a0a" }}>
                About{" "}
                <span style={{ color: "#06b6d4" }}>Kaizen ERP</span>
              </h1>
              <p className="text-xl max-w-2xl mx-auto" style={{ color: "#6b7280" }}>
                We help businesses of every size run smarter, move faster, and grow continuously — with one unified ERP platform built for the modern world.
              </p>
            </div>
          </FadeInSection>

          {/* Mission */}
          <FadeInSection delay={100}>
            <div
              className="mb-16 p-10 rounded-2xl"
              style={{ background: "#ffffff", border: "1px solid #06b6d425", boxShadow: "0 2px 16px rgba(6,182,212,0.06)" }}
            >
              <h2 className="text-3xl font-bold mb-4" style={{ color: "#0a0a0a" }}>
                Our <span style={{ color: "#06b6d4" }}>Mission</span>
              </h2>
              <p className="text-lg leading-relaxed" style={{ color: "#6b7280" }}>
                To make enterprise-grade business management accessible to every company — not just the Fortune 500.
                Kaizen ERP was built on the belief that small and mid-sized businesses deserve powerful tools that are
                simple to use, affordable to run, and designed to grow with them. Our mission is continuous improvement
                in everything we build — because better software means better businesses.
              </p>
            </div>
          </FadeInSection>

          {/* Stats with count-up animation */}
          <FadeInSection delay={150}>
            <div className="grid md:grid-cols-4 gap-6 mb-20">
              {stats.map((stat, idx) => (
                <StatCard key={idx} value={stat.value} label={stat.label} />
              ))}
            </div>
          </FadeInSection>

          {/* Values */}
          <FadeInSection delay={200}>
            <h2 className="text-3xl font-bold mb-8" style={{ color: "#0a0a0a" }}>
              Our <span style={{ color: "#06b6d4" }}>Values</span>
            </h2>
          </FadeInSection>

          <div className="grid md:grid-cols-2 gap-6">
            {values.map((value, idx) => {
              const Icon = value.icon
              return (
                <FadeInSection key={idx} delay={200 + idx * 100}>
                  <div
                    className="p-8 rounded-2xl transition-all duration-300 h-full"
                    style={{ background: "#ffffff", border: "1px solid #06b6d425", boxShadow: "0 2px 16px rgba(6,182,212,0.06)" }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.borderColor = "#06b6d460"
                      e.currentTarget.style.boxShadow = "0 4px 24px rgba(6,182,212,0.12)"
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.borderColor = "#06b6d425"
                      e.currentTarget.style.boxShadow = "0 2px 16px rgba(6,182,212,0.06)"
                    }}
                  >
                    <div className="flex items-start gap-4">
                      <div
                        className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
                        style={{ background: "#06b6d412", border: "1px solid #06b6d430" }}
                      >
                        <Icon className="w-6 h-6" strokeWidth={1.5} style={{ color: "#06b6d4" }} />
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold mb-2" style={{ color: "#0a0a0a" }}>{value.title}</h3>
                        <p style={{ color: "#6b7280" }}>{value.description}</p>
                      </div>
                    </div>
                  </div>
                </FadeInSection>
              )
            })}
          </div>

        </section>
      </div>

      <Footer />
    </main>
  )
}
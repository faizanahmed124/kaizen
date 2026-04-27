'use client'

import React, { useState, useEffect, useRef } from "react"
import { Mail, Phone, MapPin, Send } from 'lucide-react'
import { Button } from '@/components/ui/button'
import Footer from '@/components/sections/footer'

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', company: '', message: '' })
  const [submitted, setSubmitted] = useState(false)
  const [visible, setVisible] = useState(false)
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true) },
      { threshold: 0.1 }
    )
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
    setFormData({ name: '', email: '', company: '', message: '' })
    setTimeout(() => setSubmitted(false), 4000)
  }

  const hoverIn = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.currentTarget.style.borderColor = "#06b6d460"
    e.currentTarget.style.transform = "translateY(-4px)"
  }

  const hoverOut = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.currentTarget.style.borderColor = "#06b6d425"
    e.currentTarget.style.transform = "translateY(0)"
  }

  const btnIn = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.currentTarget.style.background = "#0891b2"
  }

  const btnOut = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.currentTarget.style.background = "#06b6d4"
  }

  const focusIn = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    e.currentTarget.style.borderColor = "#06b6d4"
  }

  const focusOut = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    e.currentTarget.style.borderColor = "#06b6d430"
  }

  const fade = (delay: number): React.CSSProperties => ({
    opacity: visible ? 1 : 0,
    transform: visible ? "translateY(0)" : "translateY(28px)",
    transition: `opacity 0.7s ease ${delay}ms, transform 0.7s ease ${delay}ms`,
  })

  const inputStyle: React.CSSProperties = {
    width: "100%",
    padding: "12px 16px",
    background: "#f8fffe",
    border: "1px solid #06b6d430",
    borderRadius: "10px",
    color: "#0a0a0a",
    outline: "none",
    fontSize: "14px",
  }

  const labelStyle: React.CSSProperties = {
    display: "block",
    fontSize: "13px",
    marginBottom: "8px",
    color: "#374151",
    fontWeight: 500,
  }

  const cardStyle: React.CSSProperties = {
    display: "block",
    padding: "32px",
    borderRadius: "16px",
    textAlign: "center",
    background: "#ffffff",
    border: "1px solid #06b6d425",
    boxShadow: "0 2px 16px rgba(6,182,212,0.06)",
    transition: "all 0.3s",
  }

  const iconBoxStyle: React.CSSProperties = {
    width: "56px",
    height: "56px",
    borderRadius: "12px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    margin: "0 auto 16px",
    background: "#06b6d412",
    border: "1px solid #06b6d430",
  }

  return (
    <main className="relative overflow-hidden" style={{ background: "#f0fafb" }}>

      <div className="absolute top-0 left-1/4 w-96 h-96 rounded-full blur-3xl pointer-events-none" style={{ background: "#06b6d410" }} />
      <div className="absolute top-1/3 right-1/4 w-96 h-96 rounded-full blur-3xl pointer-events-none" style={{ background: "#06b6d410" }} />

      <div ref={sectionRef} className="relative z-10 pt-32 pb-20">
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Header */}
          <div style={fade(0)} className="text-center mb-16">
            <p className="text-sm font-medium tracking-widest uppercase mb-4" style={{ color: "#06b6d4" }}>
              Contact Us
            </p>
            <h1 className="text-5xl md:text-6xl font-bold mb-6" style={{ color: "#0a0a0a" }}>
              Get in <span style={{ color: "#06b6d4" }}>Touch</span>
            </h1>
            <p className="text-xl max-w-2xl mx-auto" style={{ color: "#6b7280" }}>
              Have questions about Kaixen ERP? Our team is ready to help you get started.
            </p>
          </div>

          {/* Cards */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">

            <div style={fade(100)}>
              <a href="mailto:support@kaisenerp.com" style={cardStyle} onMouseEnter={hoverIn} onMouseLeave={hoverOut}>
                <div style={iconBoxStyle}>
                  <Mail className="w-6 h-6" strokeWidth={1.5} style={{ color: "#06b6d4" }} />
                </div>
                <h3 className="text-lg font-semibold mb-2" style={{ color: "#0a0a0a" }}>Email</h3>
                <p className="text-sm" style={{ color: "#06b6d4" }}>support@kaisenerp.com</p>
              </a>
            </div>

            <div style={fade(200)}>
              <a href="tel:+15551234567" style={cardStyle} onMouseEnter={hoverIn} onMouseLeave={hoverOut}>
                <div style={iconBoxStyle}>
                  <Phone className="w-6 h-6" strokeWidth={1.5} style={{ color: "#06b6d4" }} />
                </div>
                <h3 className="text-lg font-semibold mb-2" style={{ color: "#0a0a0a" }}>Phone</h3>
                <p className="text-sm" style={{ color: "#06b6d4" }}>+1 (555) 123-4567</p>
              </a>
            </div>

            <div style={fade(300)}>
              <a href="#" style={cardStyle} onMouseEnter={hoverIn} onMouseLeave={hoverOut}>
                <div style={iconBoxStyle}>
                  <MapPin className="w-6 h-6" strokeWidth={1.5} style={{ color: "#06b6d4" }} />
                </div>
                <h3 className="text-lg font-semibold mb-2" style={{ color: "#0a0a0a" }}>Address</h3>
                <p className="text-sm" style={{ color: "#06b6d4" }}>99 SW 8th St, Miami, FL 33130</p>
              </a>
            </div>

          </div>

          {/* Form */}
          <div style={fade(350)} className="max-w-2xl mx-auto">
            <div className="p-8 rounded-2xl" style={{ background: "#ffffff", border: "1px solid #06b6d425", boxShadow: "0 4px 32px rgba(6,182,212,0.08)" }}>

              <h2 className="text-2xl font-bold text-center mb-8" style={{ color: "#0a0a0a" }}>
                Send us a <span style={{ color: "#06b6d4" }}>Message</span>
              </h2>

              {submitted && (
                <div className="mb-6 p-4 rounded-xl text-center text-sm font-medium" style={{ background: "#06b6d412", border: "1px solid #06b6d430", color: "#06b6d4" }}>
                  Message sent! We will get back to you soon.
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label style={labelStyle}>Full Name</label>
                    <input type="text" name="name" value={formData.name} onChange={handleChange} required placeholder="John Doe" style={inputStyle} onFocus={focusIn} onBlur={focusOut} />
                  </div>
                  <div>
                    <label style={labelStyle}>Email Address</label>
                    <input type="email" name="email" value={formData.email} onChange={handleChange} required placeholder="john@company.com" style={inputStyle} onFocus={focusIn} onBlur={focusOut} />
                  </div>
                </div>

                <div>
                  <label style={labelStyle}>Company</label>
                  <input type="text" name="company" value={formData.company} onChange={handleChange} placeholder="Your Company Name" style={inputStyle} onFocus={focusIn} onBlur={focusOut} />
                </div>

                <div>
                  <label style={labelStyle}>Message</label>
                  <textarea name="message" value={formData.message} onChange={handleChange} required rows={5} placeholder="Tell us about your business needs..." style={{ ...inputStyle, resize: "none" }} onFocus={focusIn} onBlur={focusOut} />
                </div>

                <Button type="submit" className="w-full font-semibold rounded-full py-6 flex items-center justify-center gap-2" style={{ background: "#06b6d4", color: "#ffffff" }} onMouseEnter={btnIn} onMouseLeave={btnOut}>
                  <Send className="w-4 h-4" />
                  Send Message
                </Button>
              </form>
            </div>
          </div>

        </section>
      </div>

      <Footer />
    </main>
  )
}
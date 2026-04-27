'use client'

import React, { useState } from "react"
import { ArrowRight, Check } from 'lucide-react'
import { Button } from '@/components/ui/button'
import Footer from '@/components/sections/footer'

export default function JoinNow() {
  const [step, setStep] = useState(1)
  const [formData, setFormData] = useState({
    company: '',
    email: '',
    industry: '',
    employees: '',
    firstName: '',
    lastName: '',
    phone: '',
    password: '',
    confirmPassword: '',
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleNext = () => { if (step < 3) setStep(step + 1) }
  const handleBack = () => { if (step > 1) setStep(step - 1) }
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setStep(4)
  }

  const benefits = [
    'HR & Payroll Automation',
    'Real-Time Inventory Tracking',
    'Live Financial Dashboards',
    'AI-Powered Insights',
    'Workflow Automation',
    'Dedicated Onboarding Support',
  ]

  const inputStyle = {
    width: "100%",
    padding: "12px 16px",
    background: "#ffffff",
    border: "1px solid #06b6d430",
    borderRadius: "10px",
    color: "#0a0a0a",
    outline: "none",
    fontSize: "14px",
  }

  const labelStyle = {
    display: "block",
    fontSize: "13px",
    marginBottom: "8px",
    color: "#374151",
    fontWeight: "500",
  }

  return (
    <main className="relative overflow-hidden min-h-screen" style={{ background: "#f0fafb" }}>

      {/* Glow blobs */}
      <div className="absolute top-0 left-1/4 w-96 h-96 rounded-full blur-3xl pointer-events-none" style={{ background: "#06b6d415" }}></div>
      <div className="absolute top-1/3 right-1/4 w-96 h-96 rounded-full blur-3xl pointer-events-none" style={{ background: "#06b6d410" }}></div>

      <div className="relative z-10 pt-32 pb-20">
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {step !== 4 && (
            <div className="text-center mb-16">
              <p className="text-sm font-medium tracking-widest uppercase mb-4" style={{ color: "#06b6d4" }}>
                Get Started
              </p>
              <h1 className="text-5xl md:text-6xl font-bold mb-6" style={{ color: "#0a0a0a" }}>
                Join <span style={{ color: "#06b6d4" }}>Kaizen ERP</span>
              </h1>
              <p className="text-xl max-w-2xl mx-auto" style={{ color: "#6b7280" }}>
                Set up your account and start running a smarter business in minutes
              </p>
            </div>
          )}

          <div className="grid md:grid-cols-3 gap-8">

            {/* Benefits Sidebar */}
            <div className="md:col-span-1">
              <div
                className="p-8 rounded-2xl sticky top-40"
                style={{ background: "#ffffff", border: "1px solid #06b6d425", boxShadow: "0 4px 24px rgba(6,182,212,0.08)" }}
              >
                <h3 className="text-xl font-bold mb-6" style={{ color: "#0a0a0a" }}>
                  What You <span style={{ color: "#06b6d4" }}>Get</span>
                </h3>
                <ul className="space-y-4">
                  {benefits.map((benefit, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <div
                        className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5"
                        style={{ background: "#06b6d420", border: "1px solid #06b6d440" }}
                      >
                        <Check className="w-3 h-3" style={{ color: "#06b6d4" }} />
                      </div>
                      <span className="text-sm" style={{ color: "#374151" }}>{benefit}</span>
                    </li>
                  ))}
                </ul>

                <div
                  className="mt-8 p-4 rounded-xl"
                  style={{ background: "#06b6d410", border: "1px solid #06b6d425" }}
                >
                  <p className="text-sm font-semibold" style={{ color: "#06b6d4" }}>Free 14-Day Trial</p>
                  <p className="text-xs mt-1" style={{ color: "#6b7280" }}>No credit card required</p>
                </div>
              </div>
            </div>

            {/* Form */}
            <div className="md:col-span-2">
              {step === 4 ? (
                <div
                  className="p-12 rounded-2xl text-center"
                  style={{ background: "#ffffff", border: "1px solid #06b6d430", boxShadow: "0 4px 24px rgba(6,182,212,0.08)" }}
                >
                  <div
                    className="w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6"
                    style={{ background: "#06b6d420", border: "2px solid #06b6d450" }}
                  >
                    <Check className="w-10 h-10" style={{ color: "#06b6d4" }} />
                  </div>
                  <h2 className="text-3xl font-bold mb-4" style={{ color: "#0a0a0a" }}>
                    Welcome to <span style={{ color: "#06b6d4" }}>Kaizen ERP!</span>
                  </h2>
                  <p className="text-lg mb-8" style={{ color: "#6b7280" }}>
                    Your account has been created. Check your email to verify and access your dashboard.
                  </p>
                  <Button
                    className="rounded-full px-10 font-semibold"
                    style={{ background: "#06b6d4", color: "#ffffff" }}
                  >
                    Go to Dashboard
                  </Button>
                </div>
              ) : (
                <form
                  onSubmit={handleSubmit}
                  className="p-8 rounded-2xl"
                  style={{ background: "#ffffff", border: "1px solid #06b6d425", boxShadow: "0 4px 24px rgba(6,182,212,0.08)" }}
                >
                  {/* Step Progress */}
                  <div className="flex gap-2 mb-8">
                    {[1, 2, 3].map((s) => (
                      <div
                        key={s}
                        className="h-1.5 flex-1 rounded-full transition-all duration-300"
                        style={{ background: s <= step ? "#06b6d4" : "#e5e7eb" }}
                      />
                    ))}
                  </div>

                  {/* Step 1 */}
                  {step === 1 && (
                    <div className="space-y-6">
                      <h2 className="text-2xl font-bold mb-6" style={{ color: "#0a0a0a" }}>
                        Company <span style={{ color: "#06b6d4" }}>Information</span>
                      </h2>
                      <div>
                        <label style={labelStyle}>Company Name</label>
                        <input type="text" name="company" value={formData.company} onChange={handleChange} required placeholder="Your Company" style={inputStyle} />
                      </div>
                      <div>
                        <label style={labelStyle}>Industry</label>
                        <select name="industry" value={formData.industry} onChange={handleChange} required style={inputStyle}>
                          <option value="">Select Industry</option>
                          <option value="retail">Retail & E-commerce</option>
                          <option value="healthcare">Healthcare</option>
                          <option value="manufacturing">Manufacturing</option>
                          <option value="distribution">Distribution</option>
                          <option value="services">Professional Services</option>
                          <option value="other">Other</option>
                        </select>
                      </div>
                      <div>
                        <label style={labelStyle}>Company Size</label>
                        <select name="employees" value={formData.employees} onChange={handleChange} required style={inputStyle}>
                          <option value="">Select Company Size</option>
                          <option value="1-10">1–10 employees</option>
                          <option value="11-50">11–50 employees</option>
                          <option value="51-200">51–200 employees</option>
                          <option value="200+">200+ employees</option>
                        </select>
                      </div>
                    </div>
                  )}

                  {/* Step 2 */}
                  {step === 2 && (
                    <div className="space-y-6">
                      <h2 className="text-2xl font-bold mb-6" style={{ color: "#0a0a0a" }}>
                        Contact <span style={{ color: "#06b6d4" }}>Information</span>
                      </h2>
                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <label style={labelStyle}>First Name</label>
                          <input type="text" name="firstName" value={formData.firstName} onChange={handleChange} required placeholder="John" style={inputStyle} />
                        </div>
                        <div>
                          <label style={labelStyle}>Last Name</label>
                          <input type="text" name="lastName" value={formData.lastName} onChange={handleChange} required placeholder="Doe" style={inputStyle} />
                        </div>
                      </div>
                      <div>
                        <label style={labelStyle}>Email Address</label>
                        <input type="email" name="email" value={formData.email} onChange={handleChange} required placeholder="john@company.com" style={inputStyle} />
                      </div>
                      <div>
                        <label style={labelStyle}>Phone Number</label>
                        <input type="tel" name="phone" value={formData.phone} onChange={handleChange} required placeholder="+1 (555) 123-4567" style={inputStyle} />
                      </div>
                    </div>
                  )}

                  {/* Step 3 */}
                  {step === 3 && (
                    <div className="space-y-6">
                      <h2 className="text-2xl font-bold mb-6" style={{ color: "#0a0a0a" }}>
                        Create Your <span style={{ color: "#06b6d4" }}>Account</span>
                      </h2>
                      <div>
                        <label style={labelStyle}>Password</label>
                        <input type="password" name="password" value={formData.password} onChange={handleChange} required placeholder="••••••••" style={inputStyle} />
                        <p className="text-xs mt-2" style={{ color: "#9ca3af" }}>
                          At least 8 characters with uppercase, lowercase, and numbers
                        </p>
                      </div>
                      <div>
                        <label style={labelStyle}>Confirm Password</label>
                        <input type="password" name="confirmPassword" value={formData.confirmPassword} onChange={handleChange} required placeholder="••••••••" style={inputStyle} />
                      </div>
                      <div
                        className="flex items-start gap-3 p-4 rounded-xl"
                        style={{ background: "#06b6d408", border: "1px solid #06b6d425" }}
                      >
                        <input type="checkbox" id="terms" required className="w-4 h-4 mt-1 accent-cyan-500" />
                        <label htmlFor="terms" className="text-sm" style={{ color: "#374151" }}>
                          I agree to the{" "}
                          <span style={{ color: "#06b6d4" }}>Terms of Service</span>
                          {" "}and{" "}
                          <span style={{ color: "#06b6d4" }}>Privacy Policy</span>
                        </label>
                      </div>
                    </div>
                  )}

                  {/* Nav Buttons */}
                  <div className="flex gap-4 mt-8">
                    {step > 1 && (
                      <Button
                        type="button"
                        onClick={handleBack}
                        variant="outline"
                        className="flex-1 rounded-full font-semibold"
                        style={{ border: "1px solid #06b6d440", background: "transparent", color: "#06b6d4" }}
                      >
                        Back
                      </Button>
                    )}
                    {step < 3 ? (
                      <Button
                        type="button"
                        onClick={handleNext}
                        className="flex-1 rounded-full font-semibold flex items-center justify-center gap-2"
                        style={{ background: "#06b6d4", color: "#ffffff" }}
                      >
                        Next <ArrowRight className="w-4 h-4" />
                      </Button>
                    ) : (
                      <Button
                        type="submit"
                        className="flex-1 rounded-full font-semibold"
                        style={{ background: "#06b6d4", color: "#ffffff" }}
                      >
                        Create Account
                      </Button>
                    )}
                  </div>

                  <p className="text-center text-sm mt-6" style={{ color: "#9ca3af" }}>
                    Already have an account?{" "}
                    <a href="#" style={{ color: "#06b6d4" }}>Sign In</a>
                  </p>
                </form>
              )}
            </div>
          </div>
        </section>
      </div>

      <Footer />
    </main>
  )
}
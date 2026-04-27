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
    background: "#0d1f1a",
    border: "1px solid #13f07630",
    borderRadius: "10px",
    color: "white",
    outline: "none",
    fontSize: "14px",
  }

  const labelStyle = {
    display: "block",
    fontSize: "13px",
    marginBottom: "8px",
    color: "rgba(255,255,255,0.60)",
  }

  return (
    <main className="relative overflow-hidden min-h-screen" style={{ background: "#0d1f1a" }}>

      {/* Glow blobs */}
      <div className="absolute top-0 left-1/4 w-96 h-96 rounded-full blur-3xl pointer-events-none" style={{ background: "#13f07608" }}></div>
      <div className="absolute top-1/3 right-1/4 w-96 h-96 rounded-full blur-3xl pointer-events-none" style={{ background: "#13f07608" }}></div>

      <div className="relative z-10 pt-32 pb-20">
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {step !== 4 && (
            <div className="text-center mb-16">
              <p className="text-sm font-medium tracking-widest uppercase mb-4" style={{ color: "#13f076" }}>
                Get Started
              </p>
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
                Join <span style={{ color: "#13f076" }}>Kaizen ERP</span>
              </h1>
              <p className="text-xl max-w-2xl mx-auto" style={{ color: "rgba(255,255,255,0.55)" }}>
                Set up your account and start running a smarter business in minutes
              </p>
            </div>
          )}

          <div className="grid md:grid-cols-3 gap-8">

            {/* Benefits Sidebar */}
            <div className="md:col-span-1">
              <div
                className="p-8 rounded-2xl sticky top-40"
                style={{ background: "#111f1a", border: "1px solid #13f07630" }}
              >
                <h3 className="text-xl font-bold text-white mb-6">
                  What You <span style={{ color: "#13f076" }}>Get</span>
                </h3>
                <ul className="space-y-4">
                  {benefits.map((benefit, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <div
                        className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5"
                        style={{ background: "#13f07620", border: "1px solid #13f07640" }}
                      >
                        <Check className="w-3 h-3" style={{ color: "#13f076" }} />
                      </div>
                      <span className="text-sm" style={{ color: "rgba(255,255,255,0.65)" }}>{benefit}</span>
                    </li>
                  ))}
                </ul>

                <div
                  className="mt-8 p-4 rounded-xl"
                  style={{ background: "#13f07610", border: "1px solid #13f07625" }}
                >
                  <p className="text-sm font-semibold" style={{ color: "#13f076" }}>Free 14-Day Trial</p>
                  <p className="text-xs mt-1" style={{ color: "rgba(255,255,255,0.45)" }}>No credit card required</p>
                </div>
              </div>
            </div>

            {/* Form */}
            <div className="md:col-span-2">
              {step === 4 ? (
                <div
                  className="p-12 rounded-2xl text-center"
                  style={{ background: "#111f1a", border: "1px solid #13f07650" }}
                >
                  <div
                    className="w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6"
                    style={{ background: "#13f07620", border: "2px solid #13f07660" }}
                  >
                    <Check className="w-10 h-10" style={{ color: "#13f076" }} />
                  </div>
                  <h2 className="text-3xl font-bold text-white mb-4">
                    Welcome to <span style={{ color: "#13f076" }}>Kaizen ERP!</span>
                  </h2>
                  <p className="text-lg mb-8" style={{ color: "rgba(255,255,255,0.55)" }}>
                    Your account has been created. Check your email to verify and access your dashboard.
                  </p>
                  <Button
                    className="rounded-full px-10 font-semibold"
                    style={{ background: "#13f076", color: "#0d1f1a" }}
                  >
                    Go to Dashboard
                  </Button>
                </div>
              ) : (
                <form
                  onSubmit={handleSubmit}
                  className="p-8 rounded-2xl"
                  style={{ background: "#111f1a", border: "1px solid #13f07630" }}
                >
                  {/* Step Progress */}
                  <div className="flex gap-2 mb-8">
                    {[1, 2, 3].map((s) => (
                      <div
                        key={s}
                        className="h-1.5 flex-1 rounded-full transition-all duration-300"
                        style={{ background: s <= step ? "#13f076" : "#13f07625" }}
                      />
                    ))}
                  </div>

                  {/* Step 1 */}
                  {step === 1 && (
                    <div className="space-y-6">
                      <h2 className="text-2xl font-bold text-white mb-6">
                        Company <span style={{ color: "#13f076" }}>Information</span>
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
                      <h2 className="text-2xl font-bold text-white mb-6">
                        Contact <span style={{ color: "#13f076" }}>Information</span>
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
                      <h2 className="text-2xl font-bold text-white mb-6">
                        Create Your <span style={{ color: "#13f076" }}>Account</span>
                      </h2>
                      <div>
                        <label style={labelStyle}>Password</label>
                        <input type="password" name="password" value={formData.password} onChange={handleChange} required placeholder="••••••••" style={inputStyle} />
                        <p className="text-xs mt-2" style={{ color: "rgba(255,255,255,0.35)" }}>
                          At least 8 characters with uppercase, lowercase, and numbers
                        </p>
                      </div>
                      <div>
                        <label style={labelStyle}>Confirm Password</label>
                        <input type="password" name="confirmPassword" value={formData.confirmPassword} onChange={handleChange} required placeholder="••••••••" style={inputStyle} />
                      </div>
                      <div
                        className="flex items-start gap-3 p-4 rounded-xl"
                        style={{ background: "#13f07610", border: "1px solid #13f07625" }}
                      >
                        <input type="checkbox" id="terms" required className="w-4 h-4 mt-1 accent-[#13f076]" />
                        <label htmlFor="terms" className="text-sm" style={{ color: "rgba(255,255,255,0.55)" }}>
                          I agree to the{" "}
                          <span style={{ color: "#13f076" }}>Terms of Service</span>
                          {" "}and{" "}
                          <span style={{ color: "#13f076" }}>Privacy Policy</span>
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
                        style={{ border: "1px solid #13f07640", background: "transparent", color: "#13f076" }}
                      >
                        Back
                      </Button>
                    )}
                    {step < 3 ? (
                      <Button
                        type="button"
                        onClick={handleNext}
                        className="flex-1 rounded-full font-semibold flex items-center justify-center gap-2"
                        style={{ background: "#13f076", color: "#0d1f1a" }}
                      >
                        Next <ArrowRight className="w-4 h-4" />
                      </Button>
                    ) : (
                      <Button
                        type="submit"
                        className="flex-1 rounded-full font-semibold"
                        style={{ background: "#13f076", color: "#0d1f1a" }}
                      >
                        Create Account
                      </Button>
                    )}
                  </div>

                  <p className="text-center text-sm mt-6" style={{ color: "rgba(255,255,255,0.40)" }}>
                    Already have an account?{" "}
                    <a href="#" style={{ color: "#13f076" }}>Sign In</a>
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
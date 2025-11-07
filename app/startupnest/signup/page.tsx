"use client"

import type React from "react"

import { useState } from "react"
import { useRouter } from "next/navigation"
import Aurora from "@/components/Aurora"
import { useToast } from "@/lib/hooks/useToast"
import { User, Mail, Phone, Lock, Eye, EyeOff, Rocket, Shield } from "lucide-react"

export default function SignupPage() {
  const router = useRouter()
  const { success, error } = useToast()
  const [formData, setFormData] = useState({
    userName: "",
    email: "",
    mobile: "",
    password: "",
    confirmPassword: "",
    role: "Entrepreneur",
  })
  const [errors, setErrors] = useState<Record<string, string>>({})
  const [isLoading, setIsLoading] = useState(false)
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)

  const validateForm = () => {
    const newErrors: Record<string, string> = {}
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    const mobileRegex = /^[0-9]{10}$/
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/

    if (!formData.userName) newErrors.userName = "Username is required"
    if (!formData.email) newErrors.email = "Email is required"
    else if (!emailRegex.test(formData.email)) newErrors.email = "Invalid email format"
    if (!formData.mobile) newErrors.mobile = "Mobile number is required"
    else if (!mobileRegex.test(formData.mobile)) newErrors.mobile = "Mobile must be 10 digits"
    if (!formData.password) newErrors.password = "Password is required"
    else if (!passwordRegex.test(formData.password))
      newErrors.password = "Password must be 8+ chars with uppercase, lowercase, and number"
    if (formData.password !== formData.confirmPassword) newErrors.confirmPassword = "Passwords do not match"

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSignup = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!validateForm()) return

    setIsLoading(true)
    try {
      let response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/user/signup`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          userName: formData.userName,
          email: formData.email,
          mobile: formData.mobile,
          password: formData.password,
          role: formData.role,
        }),
      })

      if (response.ok) {
        success("Account created successfully! Redirecting to login...")

        await new Promise((resolve) => setTimeout(resolve, 1200))
        router.push("/startupnest/login")
      } else {
        const data = await response.json()
        error(data.message || "Signup failed")
      }
    } catch (err) {
      error("An error occurred. Please try again.")
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-background overflow-hidden">
      <div className="fixed inset-0 w-full h-full">
        <Aurora colorStops={["#8B5CF6", "#A78BFA", "#C4B5FD"]} amplitude={1.5} blend={0.7} speed={0.6} />
      </div>

      <div className="relative z-10 flex items-center justify-center min-h-screen px-4 py-12">
        <div className="w-full max-w-6xl flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          {/* Left Side - Branding */}
          <div className="flex-1 text-center lg:text-left space-y-6 animate-in fade-in slide-in-from-left-4 duration-700">
            <div className="inline-flex items-center gap-3 px-4 py-2 bg-primary/10 border border-primary/20 rounded-full backdrop-blur-sm">
              <Shield className="w-5 h-5 text-primary" />
              <span className="text-sm font-medium text-primary">Join StartupNest Today</span>
            </div>
            
            <h1 className="text-4xl lg:text-6xl font-bold text-foreground leading-tight">
              Start Your <br />
              <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
                Success Story
              </span>
            </h1>
            
            <p className="text-lg text-muted-foreground max-w-md mx-auto lg:mx-0">
              Create your free account and join thousands of entrepreneurs building the future.
            </p>

            {/* Benefits */}
            <div className="space-y-3 pt-8">
              {[
                "Access to experienced mentors",
                "Browse funding opportunities",
                "Track your submissions in real-time",
                "Get instant notifications"
              ].map((benefit, idx) => (
                <div key={idx} className="flex items-center gap-3">
                  <div className="p-1 bg-primary/20 rounded-full">
                    <Rocket className="w-4 h-4 text-primary" />
                  </div>
                  <span className="text-muted-foreground">{benefit}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Side - Signup Form */}
          <div className="w-full max-w-md animate-in fade-in slide-in-from-right-4 duration-700">
            <div className="bg-card/40 backdrop-blur-2xl border border-border/40 rounded-2xl p-8 shadow-2xl hover:border-primary/50 transition-all duration-300">
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold text-foreground mb-2">Create Account</h2>
                <p className="text-muted-foreground">Fill in your details to get started</p>
              </div>

              <form onSubmit={handleSignup} className="space-y-5">
                {/* Username */}
                <div className="space-y-2">
                  <label className="block text-sm font-medium text-foreground">
                    Username <span className="text-destructive">*</span>
                  </label>
                  <div className="relative">
                    <User className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                    <input
                      type="text"
                      value={formData.userName}
                      onChange={(e) => setFormData({ ...formData, userName: e.target.value })}
                      className="w-full pl-11 pr-4 py-3 bg-input/50 backdrop-blur border border-border rounded-xl text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-200"
                      placeholder="johndoe"
                    />
                  </div>
                  {errors.userName && <p className="text-destructive text-sm animate-in fade-in">{errors.userName}</p>}
                </div>

                {/* Email */}
                <div className="space-y-2">
                  <label className="block text-sm font-medium text-foreground">
                    Email <span className="text-destructive">*</span>
                  </label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full pl-11 pr-4 py-3 bg-input/50 backdrop-blur border border-border rounded-xl text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-200"
                      placeholder="your@email.com"
                    />
                  </div>
                  {errors.email && <p className="text-destructive text-sm animate-in fade-in">{errors.email}</p>}
                </div>

                {/* Mobile */}
                <div className="space-y-2">
                  <label className="block text-sm font-medium text-foreground">
                    Mobile <span className="text-destructive">*</span>
                  </label>
                  <div className="relative">
                    <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                    <input
                      type="tel"
                      value={formData.mobile}
                      onChange={(e) => setFormData({ ...formData, mobile: e.target.value })}
                      className="w-full pl-11 pr-4 py-3 bg-input/50 backdrop-blur border border-border rounded-xl text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-200"
                      placeholder="1234567890"
                    />
                  </div>
                  {errors.mobile && <p className="text-destructive text-sm animate-in fade-in">{errors.mobile}</p>}
                </div>

                {/* Password */}
                <div className="space-y-2">
                  <label className="block text-sm font-medium text-foreground">
                    Password <span className="text-destructive">*</span>
                  </label>
                  <div className="relative">
                    <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                    <input
                      type={showPassword ? "text" : "password"}
                      value={formData.password}
                      onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                      className="w-full pl-11 pr-12 py-3 bg-input/50 backdrop-blur border border-border rounded-xl text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-200"
                      placeholder="••••••••"
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition"
                    >
                      {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                    </button>
                  </div>
                  {errors.password && <p className="text-destructive text-sm animate-in fade-in">{errors.password}</p>}
                </div>

                {/* Confirm Password */}
                <div className="space-y-2">
                  <label className="block text-sm font-medium text-foreground">
                    Confirm Password <span className="text-destructive">*</span>
                  </label>
                  <div className="relative">
                    <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                    <input
                      type={showConfirmPassword ? "text" : "password"}
                      value={formData.confirmPassword}
                      onChange={(e) => setFormData({ ...formData, confirmPassword: e.target.value })}
                      className="w-full pl-11 pr-12 py-3 bg-input/50 backdrop-blur border border-border rounded-xl text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-200"
                      placeholder="••••••••"
                    />
                    <button
                      type="button"
                      onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition"
                    >
                      {showConfirmPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                    </button>
                  </div>
                  {errors.confirmPassword && (
                    <p className="text-destructive text-sm animate-in fade-in">{errors.confirmPassword}</p>
                  )}
                </div>

                {/* Role Selection */}
                <div className="space-y-2">
                  <label className="block text-sm font-medium text-foreground">
                    I am a <span className="text-destructive">*</span>
                  </label>
                  <select
                    value={formData.role}
                    onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                    className="w-full px-4 py-3 bg-input/50 backdrop-blur border border-border rounded-xl text-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-200"
                  >
                    <option value="Entrepreneur">Entrepreneur</option>
                    <option value="Mentor">Mentor</option>
                  </select>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isLoading}
                  className="w-full px-4 py-3.5 bg-gradient-to-r from-primary to-accent text-white rounded-xl hover:shadow-lg hover:shadow-primary/50 transition-all duration-300 font-semibold disabled:opacity-50 disabled:cursor-not-allowed transform hover:scale-[1.02] active:scale-95 mt-6"
                >
                  {isLoading ? (
                    <span className="flex items-center justify-center gap-2">
                      <span className="inline-block w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
                      Creating account...
                    </span>
                  ) : (
                    "Create Account"
                  )}
                </button>
              </form>

              {/* Footer */}
              <p className="text-center text-muted-foreground mt-6 text-sm">
                Already have an account?{" "}
                <button
                  onClick={() => router.push("/startupnest/login")}
                  className="text-primary hover:underline font-semibold transition-colors"
                >
                  Sign in
                </button>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

"use client"

import type React from "react"

import { useState } from "react"
import { useRouter } from "next/navigation"
import Aurora from "@/components/Aurora"
import { useToast } from "@/lib/hooks/useToast"
import { Mail, Lock, Eye, EyeOff, Rocket, TrendingUp, Users } from "lucide-react"

export default function LoginPage() {
  const router = useRouter()
  const { success, error } = useToast()
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [showPassword, setShowPassword] = useState(false)
  const [errors, setErrors] = useState<Record<string, string>>({})
  const [showAlert, setShowAlert] = useState(false)
  const [alertMessage, setAlertMessage] = useState("")
  const [isLoading, setIsLoading] = useState(false)

  const validateForm = () => {
    const newErrors: Record<string, string> = {}
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

    if (!email) newErrors.email = "Email is required"
    else if (!emailRegex.test(email)) newErrors.email = "Invalid email format"

    if (!password) newErrors.password = "Password is required"

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!validateForm()) return

    setIsLoading(true)
    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/user/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      })

      const data = await response.json()

      if (response.ok) {
        localStorage.setItem("token", data.token)
        localStorage.setItem("role", data.role)
        localStorage.setItem("userId", data.userId)
        localStorage.setItem("userName", data.userName)

        success("Login successful! Redirecting...")

        await new Promise((resolve) => setTimeout(resolve, 1200))

        if (data.role === "Mentor") {
          router.push("/startupnest/mentor/home")
        } else {
          router.push("/startupnest/entrepreneur/home")
        }
      } else {
        error(data.message || "Login failed")
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

      <div className="relative z-10 flex items-center justify-center min-h-screen px-4">
        <div className="w-full max-w-6xl flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          {/* Left Side - Branding */}
          <div className="flex-1 text-center lg:text-left space-y-6 animate-in fade-in slide-in-from-left-4 duration-700">
            <div className="inline-flex items-center gap-3 px-4 py-2 bg-primary/10 border border-primary/20 rounded-full backdrop-blur-sm">
              <Rocket className="w-5 h-5 text-primary" />
              <span className="text-sm font-medium text-primary">Welcome Back to StartupNest</span>
            </div>
            
            <h1 className="text-4xl lg:text-6xl font-bold text-foreground leading-tight">
              Continue Your <br />
              <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
                Startup Journey
              </span>
            </h1>
            
            <p className="text-lg text-muted-foreground max-w-md mx-auto lg:mx-0">
              Access your dashboard, manage submissions, and connect with opportunities that match your vision.
            </p>

            {/* Features */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-8">
              {[
                { icon: TrendingUp, text: "Track your progress" },
                { icon: Users, text: "Connect with mentors" },
                { icon: Rocket, text: "Manage submissions" },
                { icon: Lock, text: "Secure & private" }
              ].map((feature, idx) => (
                <div key={idx} className="flex items-center gap-3 p-3 bg-card/30 backdrop-blur-xl border border-border/40 rounded-lg">
                  <div className="p-2 bg-primary/20 rounded-lg">
                    <feature.icon className="w-4 h-4 text-primary" />
                  </div>
                  <span className="text-sm text-muted-foreground">{feature.text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Side - Login Form */}
          <div className="w-full max-w-md animate-in fade-in slide-in-from-right-4 duration-700">
            <div className="bg-card/40 backdrop-blur-2xl border border-border/40 rounded-2xl p-8 shadow-2xl hover:border-primary/50 transition-all duration-300">
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold text-foreground mb-2">Sign In</h2>
                <p className="text-muted-foreground">Enter your credentials to continue</p>
              </div>

              <form onSubmit={handleLogin} className="space-y-6">
                {/* Email Field */}
                <div className="space-y-2">
                  <label className="block text-sm font-medium text-foreground">
                    Email Address <span className="text-destructive">*</span>
                  </label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full pl-11 pr-4 py-3.5 bg-input/50 backdrop-blur border border-border rounded-xl text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-200"
                      placeholder="your@email.com"
                    />
                  </div>
                  {errors.email && (
                    <p className="text-destructive text-sm animate-in fade-in flex items-center gap-1">
                      {errors.email}
                    </p>
                  )}
                </div>

                {/* Password Field */}
                <div className="space-y-2">
                  <label className="block text-sm font-medium text-foreground">
                    Password <span className="text-destructive">*</span>
                  </label>
                  <div className="relative">
                    <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                    <input
                      type={showPassword ? "text" : "password"}
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      className="w-full pl-11 pr-12 py-3.5 bg-input/50 backdrop-blur border border-border rounded-xl text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-200"
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
                  {errors.password && (
                    <p className="text-destructive text-sm animate-in fade-in">{errors.password}</p>
                  )}
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isLoading}
                  className="w-full px-4 py-3.5 bg-gradient-to-r from-primary to-accent text-white rounded-xl hover:shadow-lg hover:shadow-primary/50 transition-all duration-300 font-semibold disabled:opacity-50 disabled:cursor-not-allowed transform hover:scale-[1.02] active:scale-95"
                >
                  {isLoading ? (
                    <span className="flex items-center justify-center gap-2">
                      <span className="inline-block w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
                      Signing in...
                    </span>
                  ) : (
                    "Sign In"
                  )}
                </button>
              </form>

              {/* Footer */}
              <p className="text-center text-muted-foreground mt-6 text-sm">
                Don't have an account?{" "}
                <button
                  onClick={() => router.push("/startupnest/signup")}
                  className="text-primary hover:underline font-semibold transition-colors"
                >
                  Create your account
                </button>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

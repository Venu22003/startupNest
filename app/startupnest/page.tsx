"use client"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import Aurora from "@/components/Aurora"
import { Rocket, Users, TrendingUp, Target, Award, Zap, BarChart3, Shield, CheckCircle2 } from "lucide-react"

export default function StartupNestLanding() {
  const router = useRouter()
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  useEffect(() => {
    const token = localStorage.getItem("token")
    const role = localStorage.getItem("role")
    if (token && role) {
      setIsLoggedIn(true)
    }
  }, [])

  return (
    <div className="min-h-screen bg-background overflow-hidden">
      <main className="min-h-screen relative overflow-hidden">
        {/* Modern Purple Gradient Aurora */}
        <div className="fixed inset-0 w-full h-full">
          <Aurora colorStops={["#8B5CF6", "#A78BFA", "#C4B5FD"]} amplitude={1.5} blend={0.7} speed={0.6} />
        </div>

        {/* Gradient Overlay */}
        <div className="fixed inset-0 bg-gradient-to-b from-transparent via-background/10 to-background/50 pointer-events-none" />

        <div className="relative z-10">
          {/* Enhanced Navigation */}
          <nav className="border-b border-border/40 backdrop-blur-xl bg-background/20 sticky top-0 z-50 shadow-lg shadow-primary/5">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
              <div className="flex items-center gap-2">
                <div className="p-2 bg-primary/20 rounded-lg backdrop-blur">
                  <Rocket className="w-6 h-6 text-primary" />
                </div>
                <span className="text-2xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  StartupNest
                </span>
              </div>
              <div className="flex gap-3">
                {isLoggedIn ? (
                  <button
                    onClick={() => {
                      localStorage.clear()
                      router.push("/startupnest/login")
                    }}
                    className="px-6 py-2.5 bg-gradient-to-r from-primary to-accent text-white rounded-lg hover:shadow-lg hover:shadow-primary/50 transition-all duration-300 font-medium"
                  >
                    Logout
                  </button>
                ) : (
                  <>
                    <button
                      onClick={() => router.push("/startupnest/login")}
                      className="px-6 py-2.5 text-foreground hover:text-primary transition-colors font-medium"
                    >
                      Login
                    </button>
                    <button
                      onClick={() => router.push("/startupnest/signup")}
                      className="px-6 py-2.5 bg-gradient-to-r from-primary to-accent text-white rounded-lg hover:shadow-lg hover:shadow-primary/50 transition-all duration-300 font-medium"
                    >
                      Sign Up
                    </button>
                  </>
                )}
              </div>
            </div>
          </nav>

          {/* Hero Section */}
          <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32 text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/20 rounded-full mb-8 animate-fade-in-badge backdrop-blur-sm">
              <Zap className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-primary">Empowering Innovation Since 2025</span>
            </div>

            <h1 className="text-5xl md:text-7xl font-bold text-foreground mb-6 animate-fade-in-heading leading-tight">
              Turn Your Startup Dreams <br />
              Into <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">Reality</span>
            </h1>

            <p className="text-xl md:text-2xl text-muted-foreground mb-10 max-w-3xl mx-auto animate-fade-in-subheading leading-relaxed">
              Connect innovative entrepreneurs with experienced mentors. Get funding, mentorship, and transform your vision into a thriving business.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-buttons mb-16">
              {!isLoggedIn && (
                <>
                  <button
                    onClick={() => router.push("/startupnest/signup")}
                    className="group px-8 py-4 bg-gradient-to-r from-primary to-accent text-white rounded-lg hover:shadow-2xl hover:shadow-primary/50 transition-all duration-300 font-semibold text-lg transform hover:scale-105"
                  >
                    <span className="flex items-center gap-2 justify-center">
                      Get Started Free
                      <Rocket className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </span>
                  </button>
                  <button
                    onClick={() => router.push("/startupnest/login")}
                    className="px-8 py-4 border-2 border-primary text-primary rounded-lg hover:bg-primary/10 transition-all duration-300 font-semibold text-lg backdrop-blur-sm"
                  >
                    Sign In
                  </button>
                </>
              )}
            </div>

            {/* Stats Section */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
              {[
                { value: "500+", label: "Startups Funded", icon: TrendingUp },
                { value: "200+", label: "Active Mentors", icon: Users },
                { value: "$10M+", label: "Total Funding", icon: Award },
                { value: "95%", label: "Success Rate", icon: Target }
              ].map((stat, idx) => (
                <div key={idx} className="p-6 bg-card/30 backdrop-blur-xl border border-border/40 rounded-xl hover:border-primary/50 transition-all duration-300 hover:scale-105">
                  <stat.icon className="w-8 h-8 text-primary mx-auto mb-3" />
                  <div className="text-3xl font-bold text-foreground mb-1">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </div>
          </section>

          {/* Features Section */}
          <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
                Everything You Need to <span className="text-primary">Succeed</span>
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Comprehensive platform designed for entrepreneurs and mentors to connect and grow together
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="group p-8 rounded-2xl bg-gradient-to-br from-card/50 to-card/30 backdrop-blur-xl border border-border/40 hover:border-primary/50 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-primary/10">
                <div className="p-3 bg-primary/20 rounded-xl w-fit mb-6 group-hover:scale-110 transition-transform">
                  <Rocket className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-3">For Entrepreneurs</h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  Submit your startup ideas, get expert mentorship, and secure funding from experienced investors who believe in your vision.
                </p>
                <ul className="space-y-2">
                  {["Browse opportunities", "Submit pitches", "Track progress", "Get funded"].map((item, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <CheckCircle2 className="w-4 h-4 text-primary" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="group p-8 rounded-2xl bg-gradient-to-br from-card/50 to-card/30 backdrop-blur-xl border border-border/40 hover:border-accent/50 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-accent/10">
                <div className="p-3 bg-accent/20 rounded-xl w-fit mb-6 group-hover:scale-110 transition-transform">
                  <Users className="w-8 h-8 text-accent" />
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-3">For Mentors</h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  Create funding opportunities, review innovative submissions, and build your portfolio of successful ventures.
                </p>
                <ul className="space-y-2">
                  {["Create profiles", "Review startups", "Manage portfolio", "Track investments"].map((item, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <CheckCircle2 className="w-4 h-4 text-accent" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="group p-8 rounded-2xl bg-gradient-to-br from-card/50 to-card/30 backdrop-blur-xl border border-border/40 hover:border-primary/50 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-primary/10">
                <div className="p-3 bg-primary/20 rounded-xl w-fit mb-6 group-hover:scale-110 transition-transform">
                  <BarChart3 className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-3">Real-Time Analytics</h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  Track submission status, get instant notifications, and stay connected throughout the entire incubation process.
                </p>
                <ul className="space-y-2">
                  {["Live updates", "Smart matching", "Instant notifications", "Progress tracking"].map((item, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <CheckCircle2 className="w-4 h-4 text-primary" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
            <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-primary via-accent to-primary p-12 md:p-16 text-center">
              <div className="absolute inset-0 bg-grid-white/10" />
              <div className="relative z-10">
                <Shield className="w-16 h-16 text-white/90 mx-auto mb-6" />
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                  Ready to Launch Your Startup?
                </h2>
                <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                  Join thousands of successful entrepreneurs who transformed their ideas into thriving businesses
                </p>
                {!isLoggedIn && (
                  <button
                    onClick={() => router.push("/startupnest/signup")}
                    className="px-10 py-4 bg-white text-primary rounded-lg hover:shadow-2xl transition-all duration-300 font-bold text-lg transform hover:scale-105"
                  >
                    Create Free Account
                  </button>
                )}
              </div>
            </div>
          </section>

          {/* Footer */}
          <footer className="border-t border-border/40 backdrop-blur-xl bg-background/20 mt-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 text-center">
              <p className="text-muted-foreground">
                © 2025 StartupNest. All rights reserved. Built with ❤️ for entrepreneurs.
              </p>
            </div>
          </footer>
        </div>
      </main>
    </div>
  )
}

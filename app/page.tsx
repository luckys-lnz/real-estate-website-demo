"use client"

import { useState, useEffect } from "react"
import Hero from "@/components/hero"
import TrustSection from "@/components/trust-section"
import FeaturedProperties from "@/components/featured-properties"
import WhyChooseUs from "@/components/why-choose-us"
import CTASection from "@/components/cta-section"
import Footer from "@/components/footer"
import StickyWhatsApp from "@/components/sticky-whatsapp"

export default function Home() {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <main className="min-h-screen bg-background">
      <Hero />
      <TrustSection />
      <FeaturedProperties />
      <WhyChooseUs />
      <CTASection />
      <Footer />
      <StickyWhatsApp isScrolled={isScrolled} />
    </main>
  )
}

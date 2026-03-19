"use client"

import { useEffect, useState } from "react"
import Hero from "@/components/hero"
import LeadCaptureDialog from "@/components/lead-capture-dialog"
import Navbar from "@/components/navbar"
import FeaturedProperties from "@/components/featured-properties"
import TrustSection from "@/components/trust-section"
import CTASection from "@/components/cta-section"
import Footer from "@/components/footer"
import StickyWhatsApp from "@/components/sticky-whatsapp"
import {
  genericInquiryProperty,
  heroFeaturedProperty,
  type PropertyListing,
} from "@/lib/property-data"

export default function Home() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isLeadDialogOpen, setIsLeadDialogOpen] = useState(false)
  const [selectedProperty, setSelectedProperty] = useState<PropertyListing | null>(heroFeaturedProperty)
  const [selectedSource, setSelectedSource] = useState("Property Listing Page")

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const openLeadDialog = (
    property: PropertyListing = genericInquiryProperty,
    source = "General Inquiry",
  ) => {
    setSelectedProperty(property)
    setSelectedSource(source)
    setIsLeadDialogOpen(true)
  }

  return (
    <main className="min-h-screen bg-background">
      <Navbar isScrolled={isScrolled} onPrimaryAction={() => openLeadDialog(genericInquiryProperty, "Navigation Bar")} />
      <Hero
        featuredProperty={heroFeaturedProperty}
        onBookViewing={(property) => openLeadDialog(property, "Hero Section")}
      />
      <FeaturedProperties onBookViewing={(property) => openLeadDialog(property, "Property Listing Page")} />
      <TrustSection />
      <CTASection onPrimaryAction={() => openLeadDialog(genericInquiryProperty, "Contact Section")} />
      <Footer onPrimaryAction={() => openLeadDialog(genericInquiryProperty, "Footer CTA")} />
      <StickyWhatsApp
        isScrolled={isScrolled}
        onPrimaryAction={() => openLeadDialog(genericInquiryProperty, "Sticky CTA")}
      />
      <LeadCaptureDialog
        open={isLeadDialogOpen}
        onOpenChange={setIsLeadDialogOpen}
        property={selectedProperty}
        source={selectedSource}
      />
    </main>
  )
}

"use client"

import { motion } from "framer-motion"
import { MessageCircle, MapPin, PhoneCall } from "lucide-react"
import { Button } from "@/components/ui/button"
import { agentProfile } from "@/lib/property-data"

interface FooterProps {
  onPrimaryAction: () => void
}

export default function Footer({ onPrimaryAction }: FooterProps) {
  return (
    <footer className="bg-foreground px-4 py-16 text-primary-foreground">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="mb-12 grid gap-12 md:grid-cols-3"
        >
          <div className="space-y-4">
            <h3 className="text-2xl font-bold">PrimeEdge Realty</h3>
            <p className="leading-relaxed text-primary-foreground/80">
              A simple conversion-focused system for verified homes in Accra. Choose a listing, book a viewing, and
              continue straight to WhatsApp.
            </p>
          </div>

          <div className="space-y-4">
            <h4 className="flex items-center gap-2 font-semibold">
              <MapPin className="h-5 w-5" />
              Location
            </h4>
            <p className="leading-relaxed text-primary-foreground/80">
              Accra, Ghana
              <br />
              Serving all major residential areas
            </p>
          </div>

          <div className="space-y-4">
            <h4 className="flex items-center gap-2 font-semibold">
              <PhoneCall className="h-5 w-5" />
              Direct Agent Line
            </h4>
            <div className="space-y-2 text-primary-foreground/80">
              <p>
                WhatsApp:{" "}
                <a
                  href={`https://wa.me/${agentProfile.whatsappNumber}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline transition-colors hover:text-primary-foreground"
                >
                  {agentProfile.phone}
                </a>
              </p>
              <p>{agentProfile.responseTime}</p>
            </div>
            <Button
              className="h-11 rounded-full bg-secondary px-6 text-secondary-foreground hover:bg-secondary/90"
              onClick={onPrimaryAction}
            >
              <MessageCircle className="h-4 w-4" />
              Contact Agent Now
            </Button>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="border-t border-primary-foreground/20 pt-8 text-center text-primary-foreground/70"
        >
          <p>&copy; 2026 PrimeEdge Realty. All rights reserved. Focused on qualified buyer inquiries.</p>
        </motion.div>
      </div>
    </footer>
  )
}

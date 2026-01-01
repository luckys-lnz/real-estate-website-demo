"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { MessageCircle } from "lucide-react"

export default function CTASection() {
  return (
    <section className="py-20 px-4 bg-gradient-to-r from-primary/10 via-primary/5 to-background">
      <div className="max-w-3xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="space-y-6"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">Looking for property in Accra?</h2>

          <p className="text-lg text-muted-foreground leading-relaxed">
            Message us on WhatsApp right now and get access to verified property options tailored to your budget and
            preferences. Our agents respond within one hour.
          </p>

          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button
              size="lg"
              className="bg-secondary hover:bg-secondary/90 text-secondary-foreground h-14 px-10 text-lg font-semibold flex items-center gap-2 mx-auto"
              onClick={() =>
                window.open(
                  "https://wa.me/233552402768?text=Hi%20PrimeEdge%20Realty!%20I%20am%20interested%20in%20your%20property%20listings.",
                  "_blank",
                )
              }
            >
              <MessageCircle className="w-6 h-6" />
              Message on WhatsApp
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

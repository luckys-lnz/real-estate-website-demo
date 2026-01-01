"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { MessageCircle, ArrowRight } from "lucide-react"

export default function Hero() {
  return (
    <section className="relative min-h-screen bg-gradient-to-b from-primary/5 via-background to-background flex items-center justify-center px-4 pt-20 pb-12">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-6"
        >
          <h1 className="text-5xl md:text-6xl font-bold text-foreground leading-tight">
            Trusted Real Estate Services in Accra
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Helping buyers and investors find verified properties with confidence. Professional guidance, transparent
            process, and dedicated WhatsApp support.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6">
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                size="lg"
                className="bg-secondary hover:bg-secondary/90 text-secondary-foreground w-full sm:w-auto h-12 px-8 text-base font-semibold flex items-center gap-2"
                onClick={() =>
                  window.open(
                    "https://wa.me/233552402768?text=Hi%20PrimeEdge%20Realty!%20I%20am%20interested%20in%20your%20property%20listings.",
                    "_blank",
                  )
                }
              >
                <MessageCircle className="w-5 h-5" />
                Chat on WhatsApp
              </Button>
            </motion.div>

            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                size="lg"
                variant="outline"
                className="w-full sm:w-auto h-12 px-8 text-base font-semibold border-2 border-primary text-primary hover:bg-primary/5 flex items-center gap-2 bg-transparent"
                onClick={() => document.getElementById("properties")?.scrollIntoView({ behavior: "smooth" })}
              >
                View Properties
                <ArrowRight className="w-5 h-5" />
              </Button>
            </motion.div>
          </div>
        </motion.div>

        {/* Decorative element */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.4 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="absolute inset-0 -z-10 bg-gradient-to-r from-primary/0 via-primary/5 to-primary/0 rounded-full blur-3xl"
        />
      </div>
    </section>
  )
}

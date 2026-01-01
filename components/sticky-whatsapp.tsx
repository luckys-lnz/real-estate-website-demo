"use client"

import { motion, AnimatePresence } from "framer-motion"
import { MessageCircle } from "lucide-react"

interface StickyWhatsAppProps {
  isScrolled: boolean
}

export default function StickyWhatsApp({ isScrolled }: StickyWhatsAppProps) {
  return (
    <AnimatePresence>
      {isScrolled && (
        <motion.button
          initial={{ opacity: 0, scale: 0.8, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.8, y: 20 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          onClick={() =>
            window.open(
              "https://wa.me/233552402768?text=Hi%20PrimeEdge%20Realty!%20I%20am%20interested%20in%20your%20property%20listings.",
              "_blank",
            )
          }
          className="fixed bottom-6 right-6 md:bottom-8 md:right-8 z-40 bg-secondary hover:bg-secondary/90 text-secondary-foreground rounded-full p-4 shadow-lg flex items-center justify-center w-14 h-14 md:w-16 md:h-16 transition-colors"
          aria-label="Chat on WhatsApp"
        >
          <MessageCircle className="w-6 h-6 md:w-7 md:h-7" />
        </motion.button>
      )}
    </AnimatePresence>
  )
}

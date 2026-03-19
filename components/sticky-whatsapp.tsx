"use client"

import { motion, AnimatePresence } from "framer-motion"
import { MessageCircle } from "lucide-react"

interface StickyWhatsAppProps {
  isScrolled: boolean
  onPrimaryAction: () => void
}

export default function StickyWhatsApp({ isScrolled, onPrimaryAction }: StickyWhatsAppProps) {
  return (
    <AnimatePresence>
      {isScrolled && (
        <motion.button
          initial={{ opacity: 0, scale: 0.8, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.8, y: 20 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={onPrimaryAction}
          className="fixed bottom-6 right-6 z-40 flex h-14 items-center justify-center gap-2 rounded-full bg-secondary px-4 text-secondary-foreground shadow-lg transition-colors hover:bg-secondary/90 md:bottom-8 md:right-8"
          aria-label="Book viewing on WhatsApp"
        >
          <MessageCircle className="h-6 w-6" />
          <span className="hidden text-sm font-semibold sm:inline">Book Viewing</span>
        </motion.button>
      )}
    </AnimatePresence>
  )
}

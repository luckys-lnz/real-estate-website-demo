"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { PhoneCall } from "lucide-react"
import { agentProfile } from "@/lib/property-data"

interface CTASectionProps {
  onPrimaryAction: () => void
}

export default function CTASection({ onPrimaryAction }: CTASectionProps) {
  return (
    <section id="contact" className="scroll-mt-28 bg-gradient-to-r from-primary/10 via-primary/5 to-background px-4 py-20">
      <div className="mx-auto max-w-3xl text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="space-y-6"
        >
          <h2 className="text-3xl font-bold text-foreground md:text-4xl">Need Fresh Options That Match Your Budget?</h2>

          <p className="text-lg leading-relaxed text-muted-foreground">
            Tell us your name and budget, and we will open WhatsApp with a structured request so the agent can respond
            fast with the right homes.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-3 text-sm text-muted-foreground">
            <span className="rounded-full bg-background px-4 py-2 shadow-sm">Name only</span>
            <span className="rounded-full bg-background px-4 py-2 shadow-sm">Budget optional</span>
            <span className="rounded-full bg-background px-4 py-2 shadow-sm">Agent line {agentProfile.phone}</span>
          </div>

          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button
              size="lg"
              className="mx-auto flex h-14 items-center gap-2 bg-secondary px-10 text-lg font-semibold text-secondary-foreground hover:bg-secondary/90"
              onClick={onPrimaryAction}
            >
              <PhoneCall className="h-6 w-6" />
              Contact Agent Now
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

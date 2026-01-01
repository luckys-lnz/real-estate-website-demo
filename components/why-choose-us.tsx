"use client"

import { motion } from "framer-motion"
import { Check } from "lucide-react"

const features = [
  "Easy WhatsApp communication - chat directly with our agents anytime",
  "No hidden fees - transparent pricing from the start",
  "Local Accra market expertise - deep knowledge of neighborhoods and values",
  "Serious buyers only - we prioritize qualified inquiries",
  "Fast response times - typically reply within 1 hour",
  "Legal compliance verified - all documents properly documented",
]

export default function WhyChooseUs() {
  return (
    <section className="py-20 px-4 bg-muted/30">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Why Choose PrimeEdge Realty</h2>
          <p className="text-lg text-muted-foreground">We focus on what matters most to buyers in Accra.</p>
        </motion.div>

        <div className="space-y-3">
          {features.map((feature, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
            >
              <div className="flex items-start gap-4 p-4 rounded-lg bg-background hover:bg-card transition-colors">
                <Check className="w-5 h-5 text-secondary flex-shrink-0 mt-1" />
                <p className="text-muted-foreground leading-relaxed">{feature}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

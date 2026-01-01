"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Check, Lock, Zap } from "lucide-react"

const trustItems = [
  {
    icon: Check,
    title: "Verified Listings",
    description:
      "Every property in our portfolio is thoroughly verified and legally compliant. You get accurate information you can trust.",
  },
  {
    icon: Lock,
    title: "Transparent Process",
    description:
      "No hidden fees, no surprises. We believe in complete transparency at every step of your property journey.",
  },
  {
    icon: Zap,
    title: "Fast WhatsApp Support",
    description:
      "Quick responses and dedicated assistance on WhatsApp. We are available to answer your questions 24/7.",
  },
]

export default function TrustSection() {
  return (
    <section className="py-20 px-4 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Why Buyers Trust Us</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            We build confidence through verified properties, transparent practices, and genuine client support.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {trustItems.map((item, i) => {
            const Icon = item.icon
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <Card className="h-full border-border/50 shadow-sm hover:shadow-md transition-shadow">
                  <CardContent className="pt-8">
                    <motion.div whileHover={{ scale: 1.1 }} className="mb-4 inline-flex p-3 bg-primary/10 rounded-lg">
                      <Icon className="w-6 h-6 text-primary" />
                    </motion.div>
                    <h3 className="text-xl font-bold text-foreground mb-2">{item.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{item.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

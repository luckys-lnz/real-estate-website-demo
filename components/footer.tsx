"use client"

import { motion } from "framer-motion"
import { MessageCircle, MapPin } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-foreground text-primary-foreground py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="grid md:grid-cols-3 gap-12 mb-12"
        >
          {/* Company Info */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold">PrimeEdge Realty</h3>
            <p className="text-primary-foreground/80 leading-relaxed">
              Your trusted partner in finding the perfect property in Accra, Ghana.
            </p>
          </div>

          {/* Location */}
          <div className="space-y-4">
            <h4 className="font-semibold flex items-center gap-2">
              <MapPin className="w-5 h-5" />
              Location
            </h4>
            <p className="text-primary-foreground/80 leading-relaxed">
              Accra, Ghana
              <br />
              Serving all major residential areas
            </p>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h4 className="font-semibold flex items-center gap-2">
              <MessageCircle className="w-5 h-5" />
              Get in Touch
            </h4>
            <div className="space-y-2 text-primary-foreground/80">
              <p>
                WhatsApp:{" "}
                <a
                  href="https://wa.me/233552402768"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-primary-foreground underline transition-colors"
                >
                  +233 55 240 2768
                </a>
              </p>
              <p>Email: info@primeedge.com</p>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="border-t border-primary-foreground/20 pt-8 text-center text-primary-foreground/70"
        >
          <p>&copy; 2026 PrimeEdge Realty. All rights reserved. | Built with trust and professionalism.</p>
        </motion.div>
      </div>
    </footer>
  )
}

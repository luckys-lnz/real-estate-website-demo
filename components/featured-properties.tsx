"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { MessageCircle, MapPin, DollarSign } from "lucide-react"

const properties = [
  {
    id: 1,
    location: "East Legon",
    price: "GH₵ 150,000 - 250,000",
    image: "/modern-residential-property-in-east-legon-accra-gh.jpg",
    type: "3-4 Bedroom Residential",
  },
  {
    id: 2,
    location: "Airport Residential Area",
    price: "GH₵ 200,000 - 350,000",
    image: "/luxury-residential-property-airport-area-accra.jpg",
    type: "4-5 Bedroom Homes",
  },
  {
    id: 3,
    location: "Spintex Road",
    price: "GH₵ 100,000 - 180,000",
    image: "/affordable-residential-property-spintex-accra.jpg",
    type: "Affordable Options",
  },
  {
    id: 4,
    location: "Cantonments",
    price: "GH₵ 300,000+",
    image: "/premium-luxury-property-cantonments-accra.jpg",
    type: "Premium Properties",
  },
  {
    id: 5,
    location: "Dzorwulu",
    price: "GH₵ 180,000 - 280,000",
    image: "/modern-house-dzorwulu-neighborhood-accra.jpg",
    type: "3-4 Bedroom Homes",
  },
  {
    id: 6,
    location: "Labone",
    price: "GH₵ 250,000 - 400,000",
    image: "/beachfront-residential-property-labone-accra.jpg",
    type: "Waterfront Living",
  },
]

export default function FeaturedProperties() {
  return (
    <section id="properties" className="py-20 px-4 bg-background">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Featured Properties</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Handpicked verified listings across Accra's most sought-after neighborhoods.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {properties.map((property, i) => (
            <motion.div
              key={property.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: (i % 3) * 0.1 }}
            >
              <Card className="overflow-hidden border-border/50 shadow-sm hover:shadow-lg transition-shadow h-full flex flex-col">
                <div className="relative h-48 overflow-hidden bg-muted">
                  <motion.img
                    src={property.image}
                    alt={property.location}
                    className="w-full h-full object-cover"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                  />
                </div>

                <CardContent className="flex-1 flex flex-col p-5">
                  <div className="space-y-3 flex-1">
                    <div className="flex items-start justify-between gap-2">
                      <div>
                        <p className="text-sm font-semibold text-secondary uppercase tracking-wide">{property.type}</p>
                        <h3 className="text-lg font-bold text-foreground flex items-center gap-1 mt-1">
                          <MapPin className="w-4 h-4 text-primary" />
                          {property.location}
                        </h3>
                      </div>
                    </div>

                    <div className="flex items-center gap-2 text-primary font-semibold">
                      <DollarSign className="w-4 h-4" />
                      <span>{property.price}</span>
                    </div>
                  </div>

                  <Button
                    className="w-full bg-secondary hover:bg-secondary/90 text-secondary-foreground mt-4 flex items-center gap-2"
                    onClick={() =>
                      window.open(
                        `https://wa.me/233552402768?text=Hi%20PrimeEdge%20Realty!%20I%20am%20interested%20in%20the%20${property.location}%20property.`,
                        "_blank",
                      )
                    }
                  >
                    <MessageCircle className="w-4 h-4" />
                    Inquire on WhatsApp
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

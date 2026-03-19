"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { MapPin } from "lucide-react"
import { propertyListings, type PropertyListing } from "@/lib/property-data"

interface FeaturedPropertiesProps {
  onBookViewing: (property: PropertyListing) => void
}

export default function FeaturedProperties({ onBookViewing }: FeaturedPropertiesProps) {
  return (
    <section id="properties" className="scroll-mt-28 bg-background px-4 py-20">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <h2 className="mb-4 text-3xl font-bold text-foreground md:text-4xl">Available Homes Ready for Viewing</h2>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
            Pick a property, tap Book Viewing, and move straight into WhatsApp with your interest already structured.
          </p>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-3 text-sm text-muted-foreground">
            <span className="rounded-full bg-muted/50 px-4 py-2">Name required</span>
            <span className="rounded-full bg-muted/50 px-4 py-2">Budget optional</span>
            <span className="rounded-full bg-muted/50 px-4 py-2">Property auto-filled</span>
          </div>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {propertyListings.map((property, index) => (
            <motion.div
              key={property.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: (index % 3) * 0.1 }}
            >
              <Card className="flex h-full flex-col overflow-hidden border-border/50 shadow-sm transition-shadow hover:shadow-lg">
                <div className="relative h-52 overflow-hidden bg-muted">
                  <motion.img
                    src={property.image}
                    alt={property.name}
                    className="h-full w-full object-cover"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                  />
                  <div className="absolute left-4 top-4 rounded-full bg-secondary px-3 py-1 text-xs font-bold uppercase tracking-[0.12em] text-secondary-foreground">
                    {property.badge}
                  </div>
                </div>

                <CardContent className="flex flex-1 flex-col p-5">
                  <div className="flex flex-1 flex-col">
                    <div className="flex items-start justify-between gap-3">
                      <p className="rounded-full bg-primary/8 px-3 py-1 text-xs font-semibold uppercase tracking-[0.12em] text-primary">
                        {property.type}
                      </p>
                      <p className="text-xs font-semibold uppercase tracking-[0.12em] text-muted-foreground">
                        {property.urgency}
                      </p>
                    </div>

                    <div className="mt-4 min-h-[5.75rem]">
                      <h3 className="text-xl font-bold leading-tight text-foreground">{property.name}</h3>
                      <p className="mt-3 flex items-center gap-1 text-sm text-muted-foreground">
                        <MapPin className="h-4 w-4 text-primary" />
                        {property.location}
                      </p>
                    </div>

                    <div className="mt-4 border-t border-border/60 pt-4 font-semibold text-primary">
                      <span>{property.price}</span>
                    </div>

                    <p className="mt-4 min-h-[3rem] text-sm leading-relaxed text-muted-foreground line-clamp-2">
                      {property.summary}
                    </p>
                  </div>

                  <Button
                    className="mt-5 w-full bg-secondary text-secondary-foreground hover:bg-secondary/90"
                    onClick={() => onBookViewing(property)}
                  >
                    Book Viewing
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

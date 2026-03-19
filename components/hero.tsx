"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowRight, Clock3, MapPin, PhoneCall } from "lucide-react"
import { agentProfile, type PropertyListing } from "@/lib/property-data"

const heroPoster = "/hero-tour-poster.jpg"

interface HeroProps {
  featuredProperty: PropertyListing
  onBookViewing: (property: PropertyListing) => void
}

export default function Hero({ featuredProperty, onBookViewing }: HeroProps) {
  return (
    <section
      id="home"
      className="relative isolate flex min-h-screen scroll-mt-28 items-center overflow-hidden px-4 pb-12 pt-28"
    >
      <div className="absolute inset-0">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url("${heroPoster}")` }}
        />

        <video
          className="absolute inset-0 h-full w-full object-cover motion-reduce:hidden"
          autoPlay
          loop
          muted
          playsInline
          preload="metadata"
          poster={heroPoster}
          aria-hidden="true"
        >
          <source src="/hero-building-exterior.mp4" type="video/mp4" />
        </video>

        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(18,16,12,0.30)_0%,rgba(18,16,12,0.55)_44%,rgba(18,16,12,0.82)_100%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.18),transparent_38%),radial-gradient(circle_at_right_center,rgba(94,52,32,0.28),transparent_28%)]" />
      </div>

      <div className="relative z-10 mx-auto grid w-full max-w-6xl gap-10 lg:grid-cols-[1fr_26rem] lg:items-end">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl space-y-6"
        >
          <h1 className="text-5xl font-bold leading-tight text-white md:text-6xl">
            Find and Book Verified Homes in Accra
          </h1>

          <p className="max-w-2xl text-lg leading-relaxed text-white/80 md:text-xl">
            Select a property and instantly send a structured viewing request to
            the agent via WhatsApp - in under 15 seconds.
          </p>

          <div className="flex flex-col gap-4 pt-4 sm:flex-row">
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                size="lg"
                className="flex h-12 w-full items-center gap-2 bg-secondary px-8 text-base font-semibold text-secondary-foreground shadow-lg shadow-black/20 hover:bg-secondary/90 sm:w-auto"
                onClick={() => onBookViewing(featuredProperty)}
              >
                Book Viewing
              </Button>
            </motion.div>

            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                size="lg"
                variant="outline"
                className="flex h-12 w-full items-center gap-2 border-2 border-white/70 bg-white/10 px-8 text-base font-semibold text-white backdrop-blur-sm hover:border-white hover:bg-white/15 sm:w-auto"
                onClick={() =>
                  document
                    .getElementById("properties")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
              >
                See Hot Listings
                <ArrowRight className="w-5 h-5" />
              </Button>
            </motion.div>
          </div>

          <div className="rounded-[1.5rem] border border-white/14 bg-black/24 p-5 text-white backdrop-blur-sm">
            <div className="flex flex-wrap items-center gap-4 text-sm text-white/80">
              <span className="flex items-center gap-2">
                <Clock3 className="h-4 w-4" />
                {agentProfile.responseTime}
              </span>
              <span className="flex items-center gap-2">
                <PhoneCall className="h-4 w-4" />
                Agent Line {agentProfile.phone}
              </span>
            </div>
            <p className="mt-4 max-w-2xl text-sm leading-relaxed text-white/70">
              Serious buyers do best when the first step is simple: select a
              property, enter your details, and open WhatsApp with the property
              already attached.
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="overflow-hidden rounded-[2rem] border border-white/16 bg-black/30 text-white shadow-2xl backdrop-blur-md"
        >
          <div className="relative h-56">
            <img
              src={featuredProperty.image}
              alt={featuredProperty.name}
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
            <div className="absolute left-4 top-4 rounded-full bg-secondary px-3 py-1 text-xs font-bold uppercase tracking-[0.14em] text-secondary-foreground">
              {featuredProperty.badge}
            </div>
          </div>

          <div className="space-y-4 p-6">
            <div>
              <h2 className="text-2xl font-bold leading-tight">
                {featuredProperty.name}
              </h2>
            </div>

            <div className="flex items-center gap-2 text-white/75">
              <MapPin className="h-4 w-4 text-white/65" />
              <span>{featuredProperty.location}</span>
            </div>

            <p className="text-2xl font-semibold text-white">
              {featuredProperty.price}
            </p>
            <p className="text-sm leading-relaxed text-white/72">
              {featuredProperty.summary}
            </p>

            <div className="flex items-center gap-2 text-sm text-white/72">
              <PhoneCall className="h-4 w-4 text-white/65" />
              <span>{agentProfile.phone}</span>
            </div>

            <Button
              className="h-12 w-full rounded-full bg-secondary text-base font-semibold text-secondary-foreground hover:bg-secondary/90"
              onClick={() => onBookViewing(featuredProperty)}
            >
              Book Viewing
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

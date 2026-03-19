"use client"

import { motion } from "framer-motion"
import { Building2, Check, Clock3, FileText, MessageCircle, ShieldCheck } from "lucide-react"

const proofStats = [
  {
    icon: ShieldCheck,
    value: "3 filters",
    label: "before a home is shared",
    detail: "Documentation, fit, and viewing readiness are checked before a property reaches your shortlist.",
  },
  {
    icon: Clock3,
    value: "< 1 hr",
    label: "typical WhatsApp reply",
    detail: "Fast answers matter when you are comparing options and booking viewings.",
  },
  {
    icon: Building2,
    value: "6 areas",
    label: "already curated here",
    detail: "The site already covers prime neighborhoods like Cantonments, Airport, East Legon, and Labone.",
  },
  {
    icon: MessageCircle,
    value: "1:1 support",
    label: "from inquiry to viewing",
    detail: "You work through one guided flow instead of chasing scattered listing information.",
  },
]

const verificationChecks = [
  "Ownership trail and listing legitimacy are reviewed before a home is recommended.",
  "Pricing is compared against neighborhood context so buyers avoid obvious overpricing.",
  "Photos, location, and on-site readiness are checked to reduce wasted viewings.",
  "Key document questions are surfaced early, before you spend time committing to a visit.",
]

const buyerJourney = [
  {
    step: "01",
    title: "Tell us your brief",
    description: "Share your budget, target neighborhoods, and the kind of home you want to buy.",
  },
  {
    step: "02",
    title: "Receive a cleaner shortlist",
    description: "We narrow the field to options that look credible, aligned, and worth your attention.",
  },
  {
    step: "03",
    title: "View with more clarity",
    description: "By the time you step on site, you already know the context, next questions, and likely fit.",
  },
]

export default function TrustSection() {
  return (
    <section id="trust" className="scroll-mt-28 bg-muted/30 px-4 py-24">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="mb-12 grid gap-6 lg:grid-cols-[1.15fr_0.85fr] lg:items-end"
        >
          <div className="space-y-5">
            <div className="inline-flex items-center rounded-full border border-primary/15 bg-primary/8 px-4 py-2 text-sm font-semibold uppercase tracking-[0.18em] text-primary">
              Buyer Protection
            </div>
            <div className="space-y-4">
              <h2 className="max-w-3xl text-3xl font-bold text-foreground md:text-5xl">
                How We Protect Buyers Before You Ever Book a Viewing
              </h2>
              <p className="max-w-2xl text-lg leading-relaxed text-muted-foreground">
                The hero promises trust. This section shows the working system behind it: tighter screening, faster
                guidance, and fewer dead-end listings in your shortlist.
              </p>
            </div>
          </div>

          <div className="rounded-[2rem] border border-primary/12 bg-background/85 p-6 shadow-sm">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary/80">What buyers feel</p>
            <p className="mt-3 text-2xl font-semibold leading-tight text-foreground">
              Less guesswork, fewer wasted viewings, and clearer next steps from the first conversation.
            </p>
          </div>
        </motion.div>

        <div className="mb-8 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {proofStats.map((stat, index) => {
            const Icon = stat.icon

            return (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.45, delay: index * 0.08 }}
                className="rounded-[1.75rem] border border-border/60 bg-background/85 p-5 shadow-sm"
              >
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="text-3xl font-bold text-foreground">{stat.value}</p>
                    <p className="mt-2 text-sm font-semibold uppercase tracking-[0.18em] text-primary/75">
                      {stat.label}
                    </p>
                  </div>
                  <div className="rounded-2xl bg-primary/10 p-3 text-primary">
                    <Icon className="h-5 w-5" />
                  </div>
                </div>
                <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{stat.detail}</p>
              </motion.div>
            )
          })}
        </div>

        <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.55 }}
            className="rounded-[2rem] border border-border/60 bg-background p-7 shadow-sm md:p-8"
          >
            <div className="flex flex-col gap-4 border-b border-border/60 pb-6 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary/75">Verification Flow</p>
                <h3 className="mt-3 text-2xl font-bold text-foreground md:text-3xl">
                  What Gets Checked Before We Recommend a Home
                </h3>
              </div>
              <div className="rounded-full bg-secondary/10 px-4 py-2 text-sm font-medium text-secondary">
                Only stronger-fit listings move forward
              </div>
            </div>

            <div className="mt-6 space-y-4">
              {verificationChecks.map((item, index) => (
                <motion.div
                  key={item}
                  initial={{ opacity: 0, x: -16 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.35, delay: index * 0.08 }}
                  className="flex gap-4 rounded-2xl border border-border/50 bg-muted/35 p-4"
                >
                  <div className="mt-0.5 rounded-full bg-primary/10 p-2 text-primary">
                    <Check className="h-4 w-4" />
                  </div>
                  <p className="leading-relaxed text-muted-foreground">{item}</p>
                </motion.div>
              ))}
            </div>

            <div className="mt-6 rounded-[1.5rem] bg-primary/7 p-5">
              <div className="flex items-start gap-3">
                <div className="rounded-2xl bg-background p-3 text-primary shadow-sm">
                  <FileText className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary/80">Due diligence</p>
                  <p className="mt-2 text-base leading-relaxed text-foreground/80">
                    The goal is simple: give buyers a shortlist that feels screened, not sprayed across WhatsApp from
                    every corner of the market.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.55, delay: 0.08 }}
            className="rounded-[2rem] border border-primary/12 bg-[linear-gradient(180deg,rgba(157,92,56,0.10)_0%,rgba(255,255,255,0.92)_100%)] p-7 shadow-sm md:p-8"
          >
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary/80">Guided Buyer Journey</p>
            <h3 className="mt-3 text-2xl font-bold text-foreground md:text-3xl">
              A Clearer Path From First Message to Private Viewing
            </h3>

            <div className="mt-6 space-y-4">
              {buyerJourney.map((item) => (
                <div key={item.step} className="rounded-[1.5rem] border border-white/60 bg-background/88 p-5 shadow-sm">
                  <div className="flex items-start gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-primary-foreground text-sm font-bold">
                      {item.step}
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-foreground">{item.title}</h4>
                      <p className="mt-2 leading-relaxed text-muted-foreground">{item.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-6 rounded-[1.75rem] bg-foreground p-6 text-primary-foreground shadow-lg">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary-foreground/60">
                Why it matters
              </p>
              <p className="mt-3 text-xl font-semibold leading-tight">
                Buyers move faster when the first shortlist already feels filtered, credible, and ready for the next
                conversation.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

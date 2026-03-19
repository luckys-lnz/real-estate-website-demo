"use client"

import { type FormEvent, useEffect, useState } from "react"
import { MapPin, MessageCircle, Wallet } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { agentProfile, type PropertyListing } from "@/lib/property-data"

interface LeadCaptureDialogProps {
  open: boolean
  onOpenChange: (open: boolean) => void
  property: PropertyListing | null
  source: string
}

export default function LeadCaptureDialog({ open, onOpenChange, property, source }: LeadCaptureDialogProps) {
  const [name, setName] = useState("")
  const [budget, setBudget] = useState("")

  useEffect(() => {
    if (open) {
      setName("")
      setBudget("")
    }
  }, [open, property?.id])

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    if (!property || !name.trim()) {
      return
    }

    const interestLine =
      property.id === 0
        ? "Hi, I'm interested in finding a matching home in Accra."
        : `Hi, I'm interested in the ${property.name} in ${property.location}.`

    const messageLines = [
      interestLine,
      "",
      `Name: ${name.trim()}`,
      ...(budget.trim() ? [`Budget: ${budget.trim()}`] : []),
      "",
      "I'd like to schedule a viewing. Please let me know the next available time and next steps.",
      "",
      `Source: ${source}`,
    ]

    const whatsappUrl = `https://wa.me/${agentProfile.whatsappNumber}?text=${encodeURIComponent(messageLines.join("\n"))}`

    onOpenChange(false)
    window.location.assign(whatsappUrl)
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-md overflow-hidden rounded-[1.75rem] border-border/70 p-0">
        <div className="border-b border-border/60 bg-muted/30 px-6 py-5">
          <DialogHeader className="text-left">
            <DialogTitle className="text-2xl">Book Viewing</DialogTitle>
            <DialogDescription>
              Share your details and continue to WhatsApp with the property already filled in.
            </DialogDescription>
          </DialogHeader>
        </div>

        <div className="space-y-6 px-6 py-6">
          {property && (
            <div className="rounded-[1.5rem] border border-border/60 bg-muted/25 p-4">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary/75">{property.badge}</p>
                  <h3 className="mt-2 text-lg font-semibold text-foreground">{property.name}</h3>
                </div>
                <div className="rounded-full bg-secondary/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.12em] text-secondary">
                  {property.urgency}
                </div>
              </div>

              <div className="mt-4 flex items-center gap-2 text-sm text-muted-foreground">
                <MapPin className="h-4 w-4 text-primary" />
                <span>{property.location}</span>
              </div>

              <div className="mt-2 flex items-center gap-2 text-sm font-semibold text-foreground">
                <Wallet className="h-4 w-4 text-primary" />
                <span>{property.price}</span>
              </div>
            </div>
          )}

          <form className="space-y-4" onSubmit={handleSubmit}>
            <div className="space-y-2">
              <Label htmlFor="lead-name">Your name</Label>
              <Input
                id="lead-name"
                placeholder="Enter your name"
                value={name}
                onChange={(event) => setName(event.target.value)}
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="lead-budget">Budget (optional)</Label>
              <Input
                id="lead-budget"
                placeholder="e.g. $250,000 - $350,000"
                value={budget}
                onChange={(event) => setBudget(event.target.value)}
              />
            </div>

            <div className="rounded-2xl bg-primary/8 px-4 py-3 text-sm text-foreground/75">
              WhatsApp message will include your name, property interest, and budget if provided.
            </div>

            <Button type="submit" className="h-12 w-full rounded-full bg-secondary text-secondary-foreground hover:bg-secondary/90">
              <MessageCircle className="h-4 w-4" />
              Continue to WhatsApp
            </Button>
          </form>
        </div>
      </DialogContent>
    </Dialog>
  )
}

import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono, Outfit } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const _geist = Geist({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })
const outfit = Outfit({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "PrimeEdge Realty - Trusted Properties in Accra",
  description:
    "Find verified property listings in Accra, Ghana. Trust-focused real estate services with transparent processes and WhatsApp support.",
  icons: {
    icon: "/DEmo.png",
    apple: "/DEmo.png",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${outfit.className} font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}

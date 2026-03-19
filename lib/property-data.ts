export interface PropertyListing {
  id: number
  name: string
  location: string
  price: string
  image: string
  type: string
  badge: string
  urgency: string
  summary: string
}

export const agentProfile = {
  name: "PrimeEdge Realty Lead Desk",
  phone: "+233 55 240 2768",
  whatsappNumber: "233552402768",
  responseTime: "Replies in under 1 hour",
}

export const propertyListings: PropertyListing[] = [
  {
    id: 1,
    name: "4 Bedroom Garden Home",
    location: "East Legon",
    price: "$550,000 - $750,000",
    image: "/modern-residential-property-in-east-legon-accra-gh.jpg",
    type: "3-4 Bedroom Residential",
    badge: "Hot Listing",
    urgency: "High Demand Area",
    summary: "Modern family layout with a private compound and quick access to schools, cafes, and major roads.",
  },
  {
    id: 2,
    name: "5 Bedroom Luxury Residence",
    location: "Airport Residential Area",
    price: "$550,000 - $750,000",
    image: "/luxury-residential-property-airport-area-accra.jpg",
    type: "4-5 Bedroom Homes",
    badge: "Limited Availability",
    urgency: "Fast-Moving Listing",
    summary: "A polished luxury option suited for buyers who want prestige, space, and strong city access.",
  },
  {
    id: 3,
    name: "3 Bedroom Family Home",
    location: "Spintex Road",
    price: "$400,000 - $680,000",
    image: "/affordable-residential-property-spintex-accra.jpg",
    type: "Affordable Options",
    badge: "Buyer Favorite",
    urgency: "Budget Match",
    summary: "An efficient entry-point home for buyers who want value without losing access to core amenities.",
  },
  {
    id: 4,
    name: "4 Bedroom Diplomatic Villa",
    location: "Cantonments",
    price: "$630,000+",
    image: "/premium-luxury-property-cantonments-accra.jpg",
    type: "Premium Properties",
    badge: "Luxury Pick",
    urgency: "Prime Address",
    summary: "High-end residential appeal with premium finishes and the kind of address serious buyers ask for first.",
  },
  {
    id: 5,
    name: "4 Bedroom Courtyard Home",
    location: "Dzorwulu",
    price: "$480,000 - $800,000",
    image: "/modern-house-dzorwulu-neighborhood-accra.jpg",
    type: "3-4 Bedroom Homes",
    badge: "Viewing Ready",
    urgency: "Well Located",
    summary: "Balanced for buyers who want residential calm, central positioning, and a home that is easy to inspect.",
  },
  {
    id: 6,
    name: "4 Bedroom Seaside Residence",
    location: "Labone",
    price: "$550,000 - $700,000",
    image: "/beachfront-residential-property-labone-accra.jpg",
    type: "Waterfront Living",
    badge: "Rare Listing",
    urgency: "Limited Stock",
    summary: "A standout option for buyers chasing a distinctive lifestyle property in one of Accra's premium zones.",
  },
]

export const heroFeaturedProperty: PropertyListing = {
  id: 100,
  name: "5 Bedroom Luxury Residence",
  location: "Airport Residential Area",
  price: "$550,000 - $750,000",
  image: "/luxury-residential-property-airport-area-accra.jpg",
  type: "Luxury Residence",
  badge: "Only 2 Units Left",
  urgency: "Only 2 Units Left",
  summary: "Spacious 5-bedroom home with modern finishes and excellent city access.",
}

export const genericInquiryProperty: PropertyListing = {
  id: 0,
  name: "A matching home in Accra",
  location: "Accra",
  price: "Budget-based search",
  image: heroFeaturedProperty.image,
  type: "Agent Guided Search",
  badge: "Start Here",
  urgency: "Tell us your budget",
  summary: "Use this option when you want tailored recommendations instead of asking about one listing.",
}

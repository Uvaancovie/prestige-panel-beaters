"use client"

import { MessageCircle } from "lucide-react"

export function WhatsAppBubble() {
  return (
    <a
      href="https://wa.me/27796908176?text=Hi%20Prestige,%20I%20need%20a%20quote"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 bg-brand-red hover:bg-brand-blue text-brand-white p-4 rounded-full shadow-lg transition-all duration-300 hover:scale-110"
      aria-label="Contact us on WhatsApp"
    >
      <MessageCircle size={24} />
    </a>
  )
}

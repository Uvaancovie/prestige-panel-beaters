"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navLinks = [
    { href: "/services", label: "Services" },
    { href: "/insurance-claims", label: "Insurance Claims" },
    { href: "/fleet", label: "Fleet" },
    { href: "/gallery", label: "Gallery" },
    { href: "/contact", label: "Contact" },
  ]

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-brand-white/95 backdrop-blur-sm shadow-lg" : "bg-brand-white"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <span className="text-2xl font-bold text-brand-black" style={{ fontFamily: "Oswald, sans-serif" }}>
              PRESTIGE
            </span>
            <span className="text-2xl font-bold text-brand-red ml-1" style={{ fontFamily: "Oswald, sans-serif" }}>
              PANEL BEATERS
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-brand-black hover:text-brand-blue transition-colors duration-200 font-medium"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Desktop CTAs */}
          <div className="hidden md:flex items-center space-x-4">
            <a href="tel:0796908176" className="btn-tertiary text-sm">
              079 690 8176
            </a>
            <a
              href="https://wa.me/27796908176?text=Hi%20Prestige,%20I%20need%20a%20quote"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary text-sm"
            >
              WhatsApp Us
            </a>
            <Link href="/estimate" className="btn-primary text-sm">
              Get Photo Estimate
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 text-brand-black hover:text-brand-blue transition-colors"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden border-t border-brand-black/20 bg-brand-white">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="block px-3 py-2 text-brand-black hover:text-brand-blue transition-colors duration-200 font-medium"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              <div className="px-3 py-2 space-y-2">
                <a href="tel:0796908176" className="block btn-tertiary text-sm">
                  079 690 8176
                </a>
                <a
                  href="https://wa.me/27796908176?text=Hi%20Prestige,%20I%20need%20a%20quote"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block btn-secondary text-sm text-center"
                >
                  WhatsApp Us
                </a>
                <Link href="/estimate" className="block btn-primary text-sm text-center">
                  Get Photo Estimate
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}

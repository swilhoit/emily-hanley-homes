'use client'

import Link from 'next/link'
import { useState, useEffect } from 'react'
import { Menu, X, ChevronDown, MessageCircle, ArrowRight } from 'lucide-react'

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  {
    name: 'Resources',
    href: '#',
    megaMenu: true,
  },
  { name: 'Reviews', href: '/reviews' },
  { name: 'Contact', href: '/contact' },
]

const resourcesMenu = {
  tools: [
    {
      name: 'Buy or Bye Quiz',
      href: '/buy-or-bye',
      description: 'Discover your style preferences',
    },
    {
      name: '$700K Showdown',
      href: '/showdown',
      description: 'Compare homes at same price point',
    },
    {
      name: 'Off-Market Alerts',
      href: '/off-market',
      description: 'Get homes before they hit MLS',
    },
  ],
  explore: [
    {
      name: 'Neighborhoods',
      href: '/neighborhoods',
      description: 'Explore Metro Atlanta areas',
    },
    {
      name: 'Our Services',
      href: '/services',
      description: 'Buying, selling & more',
    },
    {
      name: 'Trusted Vendors',
      href: '/vendors',
      description: 'Our recommended partners',
    },
  ],
}

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [megaMenuOpen, setMegaMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 bg-white/95 backdrop-blur-md ${
        scrolled ? 'shadow-soft py-3' : 'py-4'
      }`}
    >
      <nav className="container-width flex items-center justify-between px-6 md:px-8">
        {/* Logo */}
        <Link
          href="/"
          className="text-xl md:text-2xl font-serif tracking-wide transition-colors duration-300 text-sage hover:text-coral"
        >
          Emily Hanley Homes
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-1">
          {navigation.map((item) => (
            <div
              key={item.name}
              className="relative"
              onMouseEnter={() => item.megaMenu && setMegaMenuOpen(true)}
              onMouseLeave={() => setMegaMenuOpen(false)}
            >
              {item.megaMenu ? (
                <button
                  className="flex items-center gap-1.5 px-4 py-2 text-sm font-medium tracking-wide transition-all duration-300 text-sage hover:text-coral"
                >
                  {item.name}
                  <ChevronDown
                    className={`w-4 h-4 transition-transform duration-300 ${
                      megaMenuOpen ? 'rotate-180' : ''
                    }`}
                  />
                </button>
              ) : (
                <Link
                  href={item.href}
                  className="px-4 py-2 text-sm font-medium tracking-wide transition-all duration-300 text-sage hover:text-coral"
                >
                  {item.name}
                </Link>
              )}

              {/* Mega Menu Dropdown */}
              {item.megaMenu && (
                <div
                  className={`absolute top-full -left-32 pt-4 transition-all duration-300 ${
                    megaMenuOpen
                      ? 'opacity-100 visible translate-y-0'
                      : 'opacity-0 invisible -translate-y-2'
                  }`}
                >
                  <div className="bg-white shadow-soft-lg w-[600px] overflow-hidden">
                    {/* Top accent */}
                    <div className="h-1 bg-gradient-to-r from-coral via-coral-dark to-coral" />

                    <div className="p-6">
                      <div className="grid grid-cols-2 gap-8">
                        {/* Tools Column */}
                        <div>
                          <h3 className="text-xs font-medium tracking-wider uppercase text-sage-muted mb-3">
                            Interactive Tools
                          </h3>
                          <div className="space-y-1">
                            {resourcesMenu.tools.map((item) => (
                              <Link
                                key={item.name}
                                href={item.href}
                                className="group block p-2 -mx-2 rounded-lg hover:bg-cream transition-all duration-300"
                              >
                                <span className="block font-medium text-sage group-hover:text-coral transition-colors duration-300">
                                  {item.name}
                                </span>
                                <span className="text-sm text-sage-light leading-snug">
                                  {item.description}
                                </span>
                              </Link>
                            ))}
                          </div>
                        </div>

                        {/* Explore Column */}
                        <div>
                          <h3 className="text-xs font-medium tracking-wider uppercase text-sage-muted mb-3">
                            Explore
                          </h3>
                          <div className="space-y-1">
                            {resourcesMenu.explore.map((item) => (
                              <Link
                                key={item.name}
                                href={item.href}
                                className="group block p-2 -mx-2 rounded-lg hover:bg-cream transition-all duration-300"
                              >
                                <span className="block font-medium text-sage group-hover:text-coral transition-colors duration-300">
                                  {item.name}
                                </span>
                                <span className="text-sm text-sage-light leading-snug">
                                  {item.description}
                                </span>
                              </Link>
                            ))}
                          </div>
                        </div>
                      </div>

                      {/* Bottom CTA */}
                      <div className="mt-5 pt-5 border-t border-sand-light">
                        <div className="flex items-center justify-between">
                          <div>
                            <span className="block font-medium text-sage text-sm">Atlanta Neighborhoods</span>
                            <span className="text-xs text-sage-light">Find the area that fits your lifestyle</span>
                          </div>
                          <Link
                            href="/neighborhoods"
                            className="text-sm font-medium text-coral hover:text-coral-dark transition-colors flex items-center gap-1"
                          >
                            Explore
                            <ArrowRight className="w-4 h-4" />
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}

          {/* CTA Button */}
          <a
            href="sms:6787079385?body=Hi Emily! Can you check out this home for me?"
            className="ml-6 px-5 py-2.5 bg-coral text-white text-sm font-medium tracking-wider uppercase hover:bg-coral-dark transition-all duration-300 flex items-center gap-2"
          >
            <MessageCircle className="w-4 h-4" />
            Text Emily
          </a>
        </div>

        {/* Mobile menu button */}
        <button
          type="button"
          className="lg:hidden p-2 text-sage"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
        </button>
      </nav>

      {/* Mobile Navigation */}
      <div
        className={`lg:hidden fixed inset-0 top-0 z-50 bg-white transition-all duration-500 ${
          mobileMenuOpen
            ? 'opacity-100 visible'
            : 'opacity-0 invisible pointer-events-none'
        }`}
      >
        <div className="flex items-center justify-between px-6 py-5 border-b border-sand-light">
          <Link
            href="/"
            className="text-xl font-serif text-sage tracking-wide"
            onClick={() => setMobileMenuOpen(false)}
          >
            Emily Hanley Homes
          </Link>
          <button
            type="button"
            className="text-sage p-2"
            onClick={() => setMobileMenuOpen(false)}
          >
            <X className="h-6 w-6" />
          </button>
        </div>

        <div className="px-6 py-8 overflow-y-auto max-h-[calc(100vh-80px)]">
          <div className="space-y-1">
            {navigation.map((item) => (
              <div key={item.name}>
                {item.megaMenu ? (
                  <div className="py-4">
                    <span className="text-xs font-medium tracking-wider uppercase text-sage-muted">
                      Resources
                    </span>

                    {/* Tools */}
                    <div className="mt-4 space-y-2">
                      <span className="text-xs text-sage-light uppercase tracking-wide">Tools</span>
                      {resourcesMenu.tools.map((child) => (
                        <Link
                          key={child.name}
                          href={child.href}
                          className="block py-2 text-sage hover:text-coral transition-colors"
                          onClick={() => setMobileMenuOpen(false)}
                        >
                          {child.name}
                        </Link>
                      ))}
                    </div>

                    {/* Explore */}
                    <div className="mt-6 space-y-2">
                      <span className="text-xs text-sage-light uppercase tracking-wide">Explore</span>
                      {resourcesMenu.explore.map((child) => (
                        <Link
                          key={child.name}
                          href={child.href}
                          className="block py-2 text-sage hover:text-coral transition-colors"
                          onClick={() => setMobileMenuOpen(false)}
                        >
                          {child.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                ) : (
                  <Link
                    href={item.href}
                    className="block py-4 text-lg font-serif text-sage hover:text-coral transition-colors border-b border-sand-light/50"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                )}
              </div>
            ))}
          </div>

          {/* Mobile CTA */}
          <div className="mt-8 pt-8 border-t border-sand-light">
            <a
              href="sms:6787079385?body=Hi Emily! I'm interested in learning more."
              className="btn-primary w-full flex items-center justify-center gap-2"
            >
              <MessageCircle className="w-4 h-4" />
              Text Emily Now
            </a>
            <p className="mt-4 text-center text-sm text-sage-light">
              Get honest feedback within 2 hours
            </p>
          </div>
        </div>
      </div>
    </header>
  )
}

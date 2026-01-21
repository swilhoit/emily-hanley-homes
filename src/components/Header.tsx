'use client'

import Link from 'next/link'
import { useState, useEffect } from 'react'
import { Menu, X, ChevronDown, Briefcase, MapPin, Wrench, Calculator, MessageCircle, Sparkles, TrendingUp, Bell, ArrowRight } from 'lucide-react'

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
      name: 'Budget Calculator',
      href: '/calculator',
      description: 'What can you actually afford?',
      icon: Calculator,
    },
    {
      name: 'House or Nah Quiz',
      href: '/house-or-nah',
      description: 'Discover your style preferences',
      icon: Sparkles,
    },
    {
      name: '$700K Showdown',
      href: '/showdown',
      description: 'Compare homes at same price point',
      icon: TrendingUp,
    },
  ],
  explore: [
    {
      name: 'Neighborhoods',
      href: '/neighborhoods',
      description: 'Explore Metro Atlanta areas',
      icon: MapPin,
    },
    {
      name: 'Our Services',
      href: '/services',
      description: 'Buying, selling & more',
      icon: Briefcase,
    },
    {
      name: 'Trusted Vendors',
      href: '/vendors',
      description: 'Our recommended partners',
      icon: Wrench,
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
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-white/95 backdrop-blur-md shadow-soft py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <nav className="container-width flex items-center justify-between px-6 md:px-8">
        {/* Logo */}
        <Link
          href="/"
          className={`text-xl md:text-2xl font-serif tracking-wide transition-colors duration-300 ${
            scrolled ? 'text-sage hover:text-coral' : 'text-white hover:text-coral'
          }`}
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
                  className={`flex items-center gap-1.5 px-4 py-2 text-sm font-medium tracking-wide transition-all duration-300 ${
                    scrolled ? 'text-sage hover:text-coral' : 'text-white/90 hover:text-white'
                  }`}
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
                  className={`px-4 py-2 text-sm font-medium tracking-wide transition-all duration-300 ${
                    scrolled ? 'text-sage hover:text-coral' : 'text-white/90 hover:text-white'
                  }`}
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

                    <div className="p-8">
                      <div className="grid grid-cols-2 gap-8">
                        {/* Tools Column */}
                        <div>
                          <h3 className="text-xs font-medium tracking-wider uppercase text-sage-muted mb-4">
                            Interactive Tools
                          </h3>
                          <div className="space-y-1">
                            {resourcesMenu.tools.map((item) => (
                              <Link
                                key={item.name}
                                href={item.href}
                                className="group flex items-start gap-4 p-3 -mx-3 rounded-lg hover:bg-cream transition-all duration-300"
                              >
                                <div className="w-10 h-10 rounded-lg bg-coral/10 flex items-center justify-center flex-shrink-0 group-hover:bg-coral group-hover:scale-105 transition-all duration-300">
                                  <item.icon className="w-5 h-5 text-coral group-hover:text-white transition-colors duration-300" />
                                </div>
                                <div className="pt-0.5">
                                  <span className="block font-medium text-sage group-hover:text-coral transition-colors duration-300">
                                    {item.name}
                                  </span>
                                  <span className="text-sm text-sage-light leading-snug">
                                    {item.description}
                                  </span>
                                </div>
                              </Link>
                            ))}
                          </div>
                        </div>

                        {/* Explore Column */}
                        <div>
                          <h3 className="text-xs font-medium tracking-wider uppercase text-sage-muted mb-4">
                            Explore
                          </h3>
                          <div className="space-y-1">
                            {resourcesMenu.explore.map((item) => (
                              <Link
                                key={item.name}
                                href={item.href}
                                className="group flex items-start gap-4 p-3 -mx-3 rounded-lg hover:bg-cream transition-all duration-300"
                              >
                                <div className="w-10 h-10 rounded-lg bg-sage/10 flex items-center justify-center flex-shrink-0 group-hover:bg-sage group-hover:scale-105 transition-all duration-300">
                                  <item.icon className="w-5 h-5 text-sage group-hover:text-white transition-colors duration-300" />
                                </div>
                                <div className="pt-0.5">
                                  <span className="block font-medium text-sage group-hover:text-coral transition-colors duration-300">
                                    {item.name}
                                  </span>
                                  <span className="text-sm text-sage-light leading-snug">
                                    {item.description}
                                  </span>
                                </div>
                              </Link>
                            ))}
                          </div>
                        </div>
                      </div>

                      {/* Bottom CTA */}
                      <div className="mt-6 pt-6 border-t border-sand-light">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-3">
                            <div className="w-10 h-10 rounded-full bg-coral/10 flex items-center justify-center">
                              <Bell className="w-5 h-5 text-coral" />
                            </div>
                            <div>
                              <span className="block font-medium text-sage text-sm">Off-Market Alerts</span>
                              <span className="text-xs text-sage-light">Get homes before they hit MLS</span>
                            </div>
                          </div>
                          <Link
                            href="/contact?interest=off-market"
                            className="text-sm font-medium text-coral hover:text-coral-dark transition-colors flex items-center gap-1"
                          >
                            Sign Up
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
                    <div className="mt-4 space-y-3">
                      <span className="text-xs text-sage-light uppercase tracking-wide">Tools</span>
                      {resourcesMenu.tools.map((child) => (
                        <Link
                          key={child.name}
                          href={child.href}
                          className="flex items-center gap-3 py-2 text-sage hover:text-coral transition-colors"
                          onClick={() => setMobileMenuOpen(false)}
                        >
                          <child.icon className="w-5 h-5 text-coral" />
                          <span>{child.name}</span>
                        </Link>
                      ))}
                    </div>

                    {/* Explore */}
                    <div className="mt-6 space-y-3">
                      <span className="text-xs text-sage-light uppercase tracking-wide">Explore</span>
                      {resourcesMenu.explore.map((child) => (
                        <Link
                          key={child.name}
                          href={child.href}
                          className="flex items-center gap-3 py-2 text-sage hover:text-coral transition-colors"
                          onClick={() => setMobileMenuOpen(false)}
                        >
                          <child.icon className="w-5 h-5 text-sage" />
                          <span>{child.name}</span>
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

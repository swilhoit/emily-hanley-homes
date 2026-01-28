'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { ArrowLeft, Bell, Home, DollarSign, MapPin, Calendar, CheckCircle, Sparkles, Send, Users, TrendingUp } from 'lucide-react'

export default function OffMarketPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    minPrice: '',
    maxPrice: '',
    neighborhoods: '',
    bedrooms: '',
    homeStyle: '',
    timeline: '',
    mustHaves: '',
    additionalInfo: ''
  })
  const [submitted, setSubmitted] = useState(false)
  const [isVisible, setIsVisible] = useState(false)
  const [focusedField, setFocusedField] = useState<string | null>(null)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Off-market form submitted:', formData)
    setSubmitted(true)
  }

  const neighborhoodOptions = [
    'Buckhead', 'Midtown', 'West Midtown', 'Virginia Highland', 'Inman Park',
    'Old Fourth Ward', 'Grant Park', 'East Atlanta', 'Decatur', 'Kirkwood',
    'Brookhaven', 'Sandy Springs', 'Dunwoody', 'Alpharetta', 'Roswell', 'Other'
  ]

  const bedroomOptions = ['2+', '3+', '4+', '5+']
  const styleOptions = ['Modern', 'Craftsman', 'Traditional', 'Contemporary', 'Farmhouse', 'Mid-Century', 'Any Style']
  const timelineOptions = ['ASAP', '1-3 months', '3-6 months', '6+ months', 'Just exploring']

  return (
    <div className="pt-16 overflow-hidden">
      {/* Hero */}
      <section className="relative min-h-[50vh] flex items-center bg-sage overflow-hidden">
        {/* Decorative Elements */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 right-10 w-64 h-64 rounded-full bg-coral blur-3xl" />
          <div className="absolute bottom-10 left-20 w-96 h-96 rounded-full bg-white blur-3xl" />
        </div>

        <div className="container-width px-6 md:px-8 py-20 relative z-10">
          <div className={`max-w-3xl mx-auto text-center transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            <span className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm text-white/90 px-4 py-2 text-sm font-medium tracking-wide uppercase mb-8">
              <Bell className="w-4 h-4" />
              Off-Market Alerts
            </span>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif text-white mb-6 leading-tight">
              Find Homes Before
              <span className="block text-coral">They Hit the Market</span>
            </h1>

            <p className="text-xl text-white/80 max-w-xl mx-auto">
              Get access to off-market and coming soon listings before they&apos;re advertised to the public.
            </p>
          </div>
        </div>

        {/* Bottom Wave */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
            <path d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 85C1200 90 1320 90 1380 90L1440 90V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" fill="white"/>
          </svg>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-white border-b border-sand">
        <div className="container-width px-6 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="w-14 h-14 rounded-full bg-coral/10 flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="w-7 h-7 text-coral" />
              </div>
              <div className="text-3xl md:text-4xl font-serif text-sage mb-2">$3.3M+</div>
              <p className="text-sage-light text-sm">Off-market sales in 2025</p>
            </div>
            <div className="text-center">
              <div className="w-14 h-14 rounded-full bg-coral/10 flex items-center justify-center mx-auto mb-4">
                <Users className="w-7 h-7 text-coral" />
              </div>
              <div className="text-3xl md:text-4xl font-serif text-sage mb-2">400+</div>
              <p className="text-sage-light text-sm">Local connections</p>
            </div>
            <div className="text-center">
              <div className="w-14 h-14 rounded-full bg-coral/10 flex items-center justify-center mx-auto mb-4">
                <Home className="w-7 h-7 text-coral" />
              </div>
              <div className="text-3xl md:text-4xl font-serif text-sage mb-2">Early Access</div>
              <p className="text-sage-light text-sm">Before public listings</p>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="section-padding bg-white">
        <div className="container-width px-6 md:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
            {/* Left - Info */}
            <div>
              <Link
                href="/"
                className="inline-flex items-center gap-2 text-sage-light hover:text-sage transition-colors mb-8"
              >
                <ArrowLeft className="w-4 h-4" />
                Back to Home
              </Link>

              <h2 className="text-2xl md:text-3xl font-serif text-sage mb-4">
                How It Works
              </h2>
              <p className="text-sage-light mb-8">
                With over 400 transactions under our belt, we&apos;ve built hundreds of local connections—agents, homeowners, and investors who trust us with their off-market and coming soon listings. This means our buyers hear about homes before they&apos;re advertised to the public.
              </p>

              <div className="space-y-6 mb-10">
                <div className="flex gap-4">
                  <div className="w-10 h-10 bg-coral rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-medium">1</span>
                  </div>
                  <div>
                    <h3 className="font-medium text-sage mb-1">Tell Us What You&apos;re Looking For</h3>
                    <p className="text-sage-light text-sm">Fill out the form with your preferences—neighborhoods, price range, must-haves, and timeline.</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-10 h-10 bg-coral rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-medium">2</span>
                  </div>
                  <div>
                    <h3 className="font-medium text-sage mb-1">Quick Intro Call</h3>
                    <p className="text-sage-light text-sm">We&apos;ll schedule a 15-minute call to confirm your preferences and answer any questions. This helps us match you with the right homes.</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-10 h-10 bg-coral rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-medium">3</span>
                  </div>
                  <div>
                    <h3 className="font-medium text-sage mb-1">Get Early Access</h3>
                    <p className="text-sage-light text-sm">We&apos;ll email you as soon as we hear about a home that matches your criteria—often days or weeks before it hits MLS.</p>
                  </div>
                </div>
              </div>

              {/* Why Off-Market */}
              <div className="bg-cream p-6 md:p-8">
                <h3 className="font-serif text-xl text-sage mb-4">Why Off-Market?</h3>
                <ul className="space-y-3 text-sage-light text-sm">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-coral flex-shrink-0 mt-0.5" />
                    <span>Less competition from other buyers</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-coral flex-shrink-0 mt-0.5" />
                    <span>More time to make a thoughtful decision</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-coral flex-shrink-0 mt-0.5" />
                    <span>Potential for better negotiation leverage</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-coral flex-shrink-0 mt-0.5" />
                    <span>Access to homes that may never be publicly listed</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Right - Form */}
            <div>
              {submitted ? (
                <div className="bg-green-50 border border-green-200 p-10 text-center">
                  <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-6">
                    <CheckCircle className="h-8 w-8 text-green-600" />
                  </div>
                  <h3 className="text-2xl font-serif text-sage mb-3">You&apos;re on the List!</h3>
                  <p className="text-sage-light mb-6">
                    Thanks for signing up. We&apos;ll be in touch soon to schedule your intro call.
                  </p>
                  <p className="text-sage-light mb-8 text-sm">
                    In the meantime, feel free to schedule a call directly:
                  </p>
                  <a
                    href="https://calendly.com/emily-emilyhanleyhomes"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary inline-flex items-center gap-2"
                  >
                    <Calendar className="w-4 h-4" />
                    Schedule Your 15-Min Call
                  </a>
                </div>
              ) : (
                <div className="bg-cream p-6 md:p-8">
                  <div className="flex items-center gap-2 mb-6">
                    <Sparkles className="w-5 h-5 text-coral" />
                    <h2 className="text-xl font-serif text-sage">Sign Up for Off-Market Alerts</h2>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-5">
                    {/* Contact Info */}
                    <div className="space-y-4">
                      <h3 className="text-sm font-medium text-sage uppercase tracking-wider">Contact Info</h3>

                      <div className="relative">
                        <label
                          className={`absolute left-4 transition-all duration-300 pointer-events-none ${
                            focusedField === 'name' || formData.name
                              ? '-top-2.5 text-xs bg-cream px-2 text-coral'
                              : 'top-3.5 text-sage-light'
                          }`}
                        >
                          Full Name *
                        </label>
                        <input
                          type="text"
                          required
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          onFocus={() => setFocusedField('name')}
                          onBlur={() => setFocusedField(null)}
                          className="w-full px-4 py-3.5 border-2 border-sand focus:border-coral focus:outline-none transition-colors bg-white"
                        />
                      </div>

                      <div className="grid md:grid-cols-2 gap-4">
                        <div className="relative">
                          <label
                            className={`absolute left-4 transition-all duration-300 pointer-events-none ${
                              focusedField === 'email' || formData.email
                                ? '-top-2.5 text-xs bg-cream px-2 text-coral'
                                : 'top-3.5 text-sage-light'
                            }`}
                          >
                            Email *
                          </label>
                          <input
                            type="email"
                            required
                            value={formData.email}
                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                            onFocus={() => setFocusedField('email')}
                            onBlur={() => setFocusedField(null)}
                            className="w-full px-4 py-3.5 border-2 border-sand focus:border-coral focus:outline-none transition-colors bg-white"
                          />
                        </div>
                        <div className="relative">
                          <label
                            className={`absolute left-4 transition-all duration-300 pointer-events-none ${
                              focusedField === 'phone' || formData.phone
                                ? '-top-2.5 text-xs bg-cream px-2 text-coral'
                                : 'top-3.5 text-sage-light'
                            }`}
                          >
                            Phone *
                          </label>
                          <input
                            type="tel"
                            required
                            value={formData.phone}
                            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                            onFocus={() => setFocusedField('phone')}
                            onBlur={() => setFocusedField(null)}
                            className="w-full px-4 py-3.5 border-2 border-sand focus:border-coral focus:outline-none transition-colors bg-white"
                          />
                        </div>
                      </div>
                    </div>

                    {/* Home Preferences */}
                    <div className="space-y-4 pt-4 border-t border-sand">
                      <h3 className="text-sm font-medium text-sage uppercase tracking-wider">What Are You Looking For?</h3>

                      {/* Price Range */}
                      <div className="grid grid-cols-2 gap-4">
                        <div className="relative">
                          <label
                            className={`absolute left-4 transition-all duration-300 pointer-events-none ${
                              focusedField === 'minPrice' || formData.minPrice
                                ? '-top-2.5 text-xs bg-cream px-2 text-coral'
                                : 'top-3.5 text-sage-light'
                            }`}
                          >
                            Min Price
                          </label>
                          <input
                            type="text"
                            placeholder=""
                            value={formData.minPrice}
                            onChange={(e) => setFormData({ ...formData, minPrice: e.target.value })}
                            onFocus={() => setFocusedField('minPrice')}
                            onBlur={() => setFocusedField(null)}
                            className="w-full px-4 py-3.5 border-2 border-sand focus:border-coral focus:outline-none transition-colors bg-white"
                          />
                        </div>
                        <div className="relative">
                          <label
                            className={`absolute left-4 transition-all duration-300 pointer-events-none ${
                              focusedField === 'maxPrice' || formData.maxPrice
                                ? '-top-2.5 text-xs bg-cream px-2 text-coral'
                                : 'top-3.5 text-sage-light'
                            }`}
                          >
                            Max Price
                          </label>
                          <input
                            type="text"
                            placeholder=""
                            value={formData.maxPrice}
                            onChange={(e) => setFormData({ ...formData, maxPrice: e.target.value })}
                            onFocus={() => setFocusedField('maxPrice')}
                            onBlur={() => setFocusedField(null)}
                            className="w-full px-4 py-3.5 border-2 border-sand focus:border-coral focus:outline-none transition-colors bg-white"
                          />
                        </div>
                      </div>

                      {/* Neighborhoods */}
                      <div>
                        <label className="block text-sage font-medium mb-2 text-sm">
                          Preferred Neighborhoods
                        </label>
                        <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
                          {neighborhoodOptions.map((hood) => (
                            <button
                              key={hood}
                              type="button"
                              onClick={() => {
                                const current = formData.neighborhoods.split(',').filter(Boolean)
                                const updated = current.includes(hood)
                                  ? current.filter(n => n !== hood)
                                  : [...current, hood]
                                setFormData({ ...formData, neighborhoods: updated.join(',') })
                              }}
                              className={`px-3 py-2 text-xs font-medium transition-all duration-300 ${
                                formData.neighborhoods.includes(hood)
                                  ? 'bg-coral text-white'
                                  : 'bg-white text-sage border border-sand hover:border-coral'
                              }`}
                            >
                              {hood}
                            </button>
                          ))}
                        </div>
                      </div>

                      {/* Bedrooms & Style */}
                      <div className="grid md:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sage font-medium mb-2 text-sm">Bedrooms</label>
                          <div className="flex gap-2">
                            {bedroomOptions.map((option) => (
                              <button
                                key={option}
                                type="button"
                                onClick={() => setFormData({ ...formData, bedrooms: option })}
                                className={`flex-1 px-3 py-2 text-sm font-medium transition-all duration-300 ${
                                  formData.bedrooms === option
                                    ? 'bg-coral text-white'
                                    : 'bg-white text-sage border border-sand hover:border-coral'
                                }`}
                              >
                                {option}
                              </button>
                            ))}
                          </div>
                        </div>
                        <div>
                          <label className="block text-sage font-medium mb-2 text-sm">Home Style</label>
                          <select
                            value={formData.homeStyle}
                            onChange={(e) => setFormData({ ...formData, homeStyle: e.target.value })}
                            className="w-full px-4 py-2.5 border-2 border-sand focus:border-coral focus:outline-none transition-colors bg-white text-sage"
                          >
                            <option value="">Select a style...</option>
                            {styleOptions.map((style) => (
                              <option key={style} value={style}>{style}</option>
                            ))}
                          </select>
                        </div>
                      </div>

                      {/* Timeline */}
                      <div>
                        <label className="block text-sage font-medium mb-2 text-sm">Timeline</label>
                        <div className="flex flex-wrap gap-2">
                          {timelineOptions.map((option) => (
                            <button
                              key={option}
                              type="button"
                              onClick={() => setFormData({ ...formData, timeline: option })}
                              className={`px-4 py-2 text-sm font-medium transition-all duration-300 ${
                                formData.timeline === option
                                  ? 'bg-coral text-white'
                                  : 'bg-white text-sage border border-sand hover:border-coral'
                              }`}
                            >
                              {option}
                            </button>
                          ))}
                        </div>
                      </div>

                      {/* Must-Haves */}
                      <div className="relative">
                        <label
                          className={`absolute left-4 transition-all duration-300 pointer-events-none ${
                            focusedField === 'mustHaves' || formData.mustHaves
                              ? '-top-2.5 text-xs bg-cream px-2 text-coral'
                              : 'top-3.5 text-sage-light'
                          }`}
                        >
                          Must-Haves (garage, yard, pool, etc.)
                        </label>
                        <input
                          type="text"
                          value={formData.mustHaves}
                          onChange={(e) => setFormData({ ...formData, mustHaves: e.target.value })}
                          onFocus={() => setFocusedField('mustHaves')}
                          onBlur={() => setFocusedField(null)}
                          className="w-full px-4 py-3.5 border-2 border-sand focus:border-coral focus:outline-none transition-colors bg-white"
                        />
                      </div>
                    </div>

                    {/* Additional Info */}
                    <div className="pt-4 border-t border-sand">
                      <div className="relative">
                        <label
                          className={`absolute left-4 transition-all duration-300 pointer-events-none ${
                            focusedField === 'additionalInfo' || formData.additionalInfo
                              ? '-top-2.5 text-xs bg-cream px-2 text-coral'
                              : 'top-3.5 text-sage-light'
                          }`}
                        >
                          Anything else we should know?
                        </label>
                        <textarea
                          rows={3}
                          value={formData.additionalInfo}
                          onChange={(e) => setFormData({ ...formData, additionalInfo: e.target.value })}
                          onFocus={() => setFocusedField('additionalInfo')}
                          onBlur={() => setFocusedField(null)}
                          className="w-full px-4 py-3.5 border-2 border-sand focus:border-coral focus:outline-none resize-none transition-colors bg-white"
                        />
                      </div>
                    </div>

                    {/* Note about call */}
                    <div className="bg-white p-4 border border-sand">
                      <p className="text-sage-light text-sm flex items-start gap-2">
                        <Calendar className="w-4 h-4 text-coral flex-shrink-0 mt-0.5" />
                        <span>
                          After you sign up, we&apos;ll schedule a quick 15-minute call to confirm your preferences and make sure we&apos;re sending you the right listings.
                        </span>
                      </p>
                    </div>

                    {/* Submit Button */}
                    <button
                      type="submit"
                      className="w-full btn-primary flex items-center justify-center gap-2 group"
                    >
                      <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      Sign Up for Off-Market Alerts
                    </button>
                  </form>
                </div>
              )}

              {/* General Contact - Below Form */}
              {!submitted && (
                <div className="mt-8 bg-sage/5 p-6">
                  <h3 className="font-medium text-sage mb-3">Have Other Questions?</h3>
                  <p className="text-sage-light text-sm mb-4">
                    Not ready for off-market alerts but want to chat about your home search?
                  </p>
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-2 text-coral font-medium text-sm hover:gap-3 transition-all"
                  >
                    Get in Touch
                    <ArrowLeft className="w-4 h-4 rotate-180" />
                  </Link>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

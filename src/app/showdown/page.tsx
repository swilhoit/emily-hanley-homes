'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Home, MapPin, Bed, Bath, Square, Calendar, MessageCircle, ArrowRight, Clock, Check, X, Quote, Sparkles, Building, Trees, Utensils } from 'lucide-react'

// This would be updated quarterly with real listings
const homes = [
  {
    id: 1,
    neighborhood: 'Virginia Highland',
    address: '1234 Virginia Ave NE',
    price: 699000,
    beds: 3,
    baths: 2,
    sqft: 1800,
    yearBuilt: 1925,
    image: null,
    icon: Trees,
    bestFor: 'Walkability',
    tagline: 'Less space, more lifestyle',
    pros: [
      'Walk to restaurants and bars',
      'Historic character and charm',
      'Strong resale value',
      'No HOA'
    ],
    cons: [
      'Smaller lot size',
      'Street parking only',
      'May need updates',
      'Competitive bidding likely'
    ],
    emilysTake: 'Perfect for someone who values walkability over space. The neighborhood is established, the resale value is strong, but you\'ll pay for location. Best for young professionals or couples without kids yet.',
    color: 'coral'
  },
  {
    id: 2,
    neighborhood: 'East Cobb',
    address: '5678 Roswell Rd',
    price: 695000,
    beds: 4,
    baths: 3,
    sqft: 2800,
    yearBuilt: 1995,
    image: null,
    icon: Home,
    bestFor: 'Families',
    tagline: 'More space, great schools',
    pros: [
      'Top-rated schools',
      'Large backyard',
      '2-car garage',
      'Move-in ready'
    ],
    cons: [
      '30+ min commute to city',
      'Need a car for everything',
      'Suburban feel',
      'HOA fees ($75/month)'
    ],
    emilysTake: 'Best bang for your buck if schools are a priority. You get more space, a yard, and excellent schools. Trade-off is the commute. Perfect for families with kids or planning to have them.',
    color: 'sage'
  },
  {
    id: 3,
    neighborhood: 'West Midtown',
    address: '910 Howell Mill Loft #302',
    price: 705000,
    beds: 2,
    baths: 2,
    sqft: 1500,
    yearBuilt: 2018,
    image: null,
    icon: Building,
    bestFor: 'Modern Living',
    tagline: 'Trendy, low-maintenance',
    pros: [
      'Modern finishes',
      'Walk to restaurants',
      'Rooftop access',
      'Concierge service'
    ],
    cons: [
      'HOA fees ($450/month)',
      'Only 2 bedrooms',
      'No yard',
      'Assigned parking only'
    ],
    emilysTake: 'Love this for single professionals or DINK couples. The restaurant scene is incredible, and modern loft living is low-maintenance. But the HOA adds up—factor that into your monthly budget.',
    color: 'coral'
  }
]

export default function ShowdownPage() {
  const [isVisible, setIsVisible] = useState(false)
  const [activeCard, setActiveCard] = useState<number | null>(null)
  const lastUpdated = 'January 2025'

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <div className="pt-16 overflow-hidden">
      {/* Hero */}
      <section className="relative min-h-[55vh] flex items-center bg-sage overflow-hidden">
        {/* Decorative Elements */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-20 w-72 h-72 rounded-full bg-coral blur-3xl" />
          <div className="absolute bottom-10 right-10 w-96 h-96 rounded-full bg-white blur-3xl" />
        </div>

        <div className="container-width px-6 md:px-8 py-20 relative z-10">
          <div className={`max-w-3xl mx-auto text-center transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            <span className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm text-white/90 px-4 py-2 text-sm font-medium tracking-wide uppercase mb-8">
              <Sparkles className="w-4 h-4" />
              Comparison Tool
            </span>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif text-white mb-6 leading-tight">
              $700K Home
              <span className="block text-coral">Showdown</span>
            </h1>

            <p className="text-xl text-white/80 max-w-2xl mx-auto mb-6">
              Same budget. Different neighborhoods. What would $700K get you?
            </p>

            <div className="inline-flex items-center gap-2 text-white/60 text-sm bg-white/10 backdrop-blur-sm px-4 py-2">
              <Calendar className="h-4 w-4" />
              Last updated: {lastUpdated}
            </div>
          </div>
        </div>

        {/* Bottom Wave */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
            <path d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 85C1200 90 1320 90 1380 90L1440 90V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" fill="#FEF3EC"/>
          </svg>
        </div>
      </section>

      {/* Intro */}
      <section className="py-8 bg-coral/10">
        <div className="container-width px-6 md:px-8">
          <div className="flex items-start gap-4 max-w-3xl mx-auto">
            <div className="w-12 h-12 rounded-full bg-coral/20 flex items-center justify-center flex-shrink-0">
              <Clock className="h-6 w-6 text-coral" />
            </div>
            <div>
              <h2 className="font-serif text-xl text-sage mb-2">Updated Quarterly</h2>
              <p className="text-sage-light">
                These are real examples based on actual listings (addresses changed for privacy).
                I update this quarterly to reflect current market conditions. Want to see actual
                listings at this price point? Text me.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Comparison Grid */}
      <section className="section-padding bg-white">
        <div className="container-width px-6 md:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-serif text-sage mb-4">Compare Your Options</h2>
            <p className="text-sage-light max-w-2xl mx-auto">
              Each neighborhood offers a different lifestyle. Here&apos;s what your $700K budget looks like in three distinct areas.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {homes.map((home, index) => (
              <div
                key={home.id}
                className={`group relative transition-all duration-500 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
                style={{ transitionDelay: `${index * 150}ms` }}
                onMouseEnter={() => setActiveCard(home.id)}
                onMouseLeave={() => setActiveCard(null)}
              >
                <div className={`h-full bg-cream transition-all duration-500 ${
                  activeCard === home.id ? 'shadow-xl -translate-y-2' : 'hover:shadow-soft'
                }`}>
                  {/* Image Placeholder with Icon */}
                  <div className="relative bg-sage/10 h-52 flex items-center justify-center overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-sage/20 to-coral/10" />
                    <div className={`relative z-10 w-20 h-20 rounded-full flex items-center justify-center transition-all duration-500 ${
                      home.color === 'coral' ? 'bg-coral/20' : 'bg-sage/20'
                    } ${activeCard === home.id ? 'scale-110' : ''}`}>
                      <home.icon className={`h-10 w-10 ${home.color === 'coral' ? 'text-coral' : 'text-sage'}`} />
                    </div>

                    {/* Best For Badge */}
                    <div className="absolute top-4 left-4">
                      <span className={`text-xs font-medium px-3 py-1 rounded-full ${
                        home.color === 'coral' ? 'bg-coral text-white' : 'bg-sage text-white'
                      }`}>
                        Best for: {home.bestFor}
                      </span>
                    </div>
                  </div>

                  {/* Details */}
                  <div className="p-6">
                    <div className="text-coral font-medium text-sm uppercase tracking-wider mb-1">{home.neighborhood}</div>
                    <h3 className="text-2xl md:text-3xl font-serif text-sage mb-1">${home.price.toLocaleString()}</h3>
                    <p className="text-sage-light text-sm mb-4">{home.tagline}</p>

                    <div className="flex flex-wrap items-center gap-3 text-sage-light text-sm mb-6 pb-6 border-b border-sand">
                      <span className="flex items-center gap-1.5 bg-white px-3 py-1.5 rounded-full">
                        <Bed className="h-4 w-4" /> {home.beds}
                      </span>
                      <span className="flex items-center gap-1.5 bg-white px-3 py-1.5 rounded-full">
                        <Bath className="h-4 w-4" /> {home.baths}
                      </span>
                      <span className="flex items-center gap-1.5 bg-white px-3 py-1.5 rounded-full">
                        <Square className="h-4 w-4" /> {home.sqft.toLocaleString()}
                      </span>
                      <span className="flex items-center gap-1.5 bg-white px-3 py-1.5 rounded-full">
                        <Calendar className="h-4 w-4" /> {home.yearBuilt}
                      </span>
                    </div>

                    {/* Pros */}
                    <div className="mb-5">
                      <h4 className="font-medium text-sage text-sm uppercase tracking-wider mb-3 flex items-center gap-2">
                        <Check className="w-4 h-4 text-green-600" />
                        The Good
                      </h4>
                      <ul className="space-y-2">
                        {home.pros.map((pro, i) => (
                          <li key={i} className="text-sage-light text-sm flex items-start gap-2">
                            <span className="w-5 h-5 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                              <Check className="w-3 h-3 text-green-600" />
                            </span>
                            {pro}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Cons */}
                    <div className="mb-5">
                      <h4 className="font-medium text-sage text-sm uppercase tracking-wider mb-3 flex items-center gap-2">
                        <X className="w-4 h-4 text-red-500" />
                        The Trade-offs
                      </h4>
                      <ul className="space-y-2">
                        {home.cons.map((con, i) => (
                          <li key={i} className="text-sage-light text-sm flex items-start gap-2">
                            <span className="w-5 h-5 rounded-full bg-red-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                              <X className="w-3 h-3 text-red-500" />
                            </span>
                            {con}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Emily's Take */}
                    <div className="bg-sage p-5 relative overflow-hidden">
                      <Quote className="absolute top-3 right-3 w-8 h-8 text-white/10" />
                      <h4 className="font-medium text-white text-sm uppercase tracking-wider mb-2">Emily&apos;s Take</h4>
                      <p className="text-white/80 text-sm leading-relaxed relative z-10">
                        &ldquo;{home.emilysTake}&rdquo;
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Summary */}
      <section className="section-padding bg-cream">
        <div className="container-width px-6 md:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <span className="inline-block bg-coral/10 text-coral px-4 py-2 text-sm font-medium tracking-wide uppercase mb-6">
                Quick Comparison
              </span>
              <h2 className="text-3xl md:text-4xl font-serif text-sage mb-4">The Bottom Line</h2>
            </div>

            <div className="grid md:grid-cols-3 gap-6 mb-12">
              {homes.map((home, index) => (
                <div
                  key={home.id}
                  className="group bg-white p-6 md:p-8 text-center transition-all duration-300 hover:shadow-soft hover:-translate-y-1"
                >
                  <div className={`w-14 h-14 rounded-full mx-auto mb-4 flex items-center justify-center transition-all duration-300 ${
                    home.color === 'coral'
                      ? 'bg-coral/10 group-hover:bg-coral'
                      : 'bg-sage/10 group-hover:bg-sage'
                  }`}>
                    <home.icon className={`h-7 w-7 transition-colors duration-300 ${
                      home.color === 'coral'
                        ? 'text-coral group-hover:text-white'
                        : 'text-sage group-hover:text-white'
                    }`} />
                  </div>
                  <div className="text-2xl font-serif text-sage mb-2">{home.neighborhood}</div>
                  <div className="text-coral font-medium mb-3">Best for: {home.bestFor}</div>
                  <p className="text-sage-light text-sm">{home.tagline}</p>
                </div>
              ))}
            </div>

            <div className="bg-sage p-8 md:p-12 text-center text-white relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-coral/10 rounded-full blur-3xl" />
              <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/5 rounded-full blur-2xl" />

              <div className="relative z-10">
                <p className="text-xl text-white/80 mb-6">
                  There&apos;s no wrong answer—just what&apos;s right for YOUR life.
                  Want to see actual listings at this price point?
                </p>
                <a
                  href="sms:6787079385?body=Hi Emily! I saw the $700K showdown and I'm curious about what's available in [neighborhood]. Can you send me some listings?"
                  className="btn-primary inline-flex items-center gap-2"
                >
                  <MessageCircle className="h-4 w-4" />
                  Text Me for Real Listings
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Different Budget? */}
      <section className="relative section-padding bg-sage overflow-hidden">
        {/* Decorative Elements */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-coral blur-3xl" />
          <div className="absolute bottom-0 left-0 w-64 h-64 rounded-full bg-white blur-3xl" />
        </div>

        <div className="container-width px-6 md:px-8 relative z-10">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif text-white mb-6">
              Different
              <span className="block text-coral">Budget?</span>
            </h2>
            <p className="text-xl text-white/70 mb-10">
              Whether you&apos;re looking at $400K or $1M+, I can show you what your budget
              gets you in different neighborhoods. Let&apos;s find your sweet spot.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link
                href="/calculator"
                className="bg-white text-sage px-8 py-4 font-medium tracking-wider text-sm uppercase hover:bg-cream transition-all duration-300 inline-flex items-center justify-center"
              >
                Calculate My Budget
              </Link>
              <a
                href="sms:6787079385?body=Hi Emily! My budget is around $___. What neighborhoods should I be looking at?"
                className="btn-primary inline-flex items-center justify-center gap-2"
              >
                <MessageCircle className="h-4 w-4" />
                Ask Emily
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

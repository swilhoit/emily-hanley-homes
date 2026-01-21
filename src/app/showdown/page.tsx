import Link from 'next/link'
import { Home, MapPin, Bed, Bath, Square, Calendar, MessageCircle, ArrowRight, Clock } from 'lucide-react'

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
    emilysTake: 'Perfect for someone who values walkability over space. The neighborhood is established, the resale value is strong, but you\'ll pay for location. Best for young professionals or couples without kids yet.'
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
    emilysTake: 'Best bang for your buck if schools are a priority. You get more space, a yard, and excellent schools. Trade-off is the commute. Perfect for families with kids or planning to have them.'
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
    emilysTake: 'Love this for single professionals or DINK couples. The restaurant scene is incredible, and modern loft living is low-maintenance. But the HOA adds up—factor that into your monthly budget.'
  }
]

export default function ShowdownPage() {
  const lastUpdated = 'January 2025'

  return (
    <div className="pt-16">
      {/* Hero */}
      <section className="section-padding bg-sage">
        <div className="container-width text-center text-white">
          <h1 className="text-4xl md:text-5xl font-serif mb-4">$700K Home Showdown</h1>
          <p className="text-xl text-white/80 max-w-2xl mx-auto">
            Same budget. Different neighborhoods. What would $700K get you?
          </p>
          <div className="flex items-center justify-center gap-2 mt-4 text-white/60 text-sm">
            <Calendar className="h-4 w-4" />
            Last updated: {lastUpdated}
          </div>
        </div>
      </section>

      {/* Intro */}
      <section className="py-8 bg-coral/10">
        <div className="container-width">
          <div className="flex items-start gap-4 max-w-3xl mx-auto">
            <Clock className="h-6 w-6 text-coral flex-shrink-0 mt-0.5" />
            <div>
              <h2 className="font-medium text-sage mb-1">Updated Quarterly</h2>
              <p className="text-sage-light text-sm">
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
        <div className="container-width">
          <div className="grid lg:grid-cols-3 gap-8">
            {homes.map((home) => (
              <div key={home.id} className="border border-sand">
                {/* Image Placeholder */}
                <div className="bg-sage/10 h-48 flex items-center justify-center">
                  <Home className="h-12 w-12 text-sage/30" />
                </div>

                {/* Details */}
                <div className="p-6">
                  <div className="text-coral font-medium text-sm mb-1">{home.neighborhood}</div>
                  <h3 className="text-xl font-serif text-sage mb-2">${home.price.toLocaleString()}</h3>

                  <div className="flex items-center gap-4 text-sage-light text-sm mb-4">
                    <span className="flex items-center gap-1">
                      <Bed className="h-4 w-4" /> {home.beds} bed
                    </span>
                    <span className="flex items-center gap-1">
                      <Bath className="h-4 w-4" /> {home.baths} bath
                    </span>
                    <span className="flex items-center gap-1">
                      <Square className="h-4 w-4" /> {home.sqft.toLocaleString()} sqft
                    </span>
                  </div>

                  <div className="text-sage-light text-sm mb-4">
                    Built in {home.yearBuilt}
                  </div>

                  {/* Pros */}
                  <div className="mb-4">
                    <h4 className="font-medium text-sage text-sm mb-2">The Good</h4>
                    <ul className="space-y-1">
                      {home.pros.map((pro, i) => (
                        <li key={i} className="text-sage-light text-sm flex items-start gap-2">
                          <span className="text-green-600">+</span> {pro}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Cons */}
                  <div className="mb-4">
                    <h4 className="font-medium text-sage text-sm mb-2">The Trade-offs</h4>
                    <ul className="space-y-1">
                      {home.cons.map((con, i) => (
                        <li key={i} className="text-sage-light text-sm flex items-start gap-2">
                          <span className="text-red-500">−</span> {con}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Emily's Take */}
                  <div className="bg-cream p-4 mt-4">
                    <h4 className="font-medium text-sage text-sm mb-2">Emily&apos;s Take</h4>
                    <p className="text-sage-light text-sm italic">
                      &ldquo;{home.emilysTake}&rdquo;
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Summary */}
      <section className="section-padding bg-cream">
        <div className="container-width">
          <div className="max-w-3xl mx-auto">
            <h2 className="heading-md text-center mb-8">The Bottom Line</h2>

            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="bg-white p-6 text-center">
                <div className="text-2xl font-serif text-sage mb-2">Virginia Highland</div>
                <div className="text-coral font-medium mb-2">Best for: Walkability</div>
                <p className="text-sage-light text-sm">
                  Less space, more lifestyle. Walk everywhere.
                </p>
              </div>
              <div className="bg-white p-6 text-center">
                <div className="text-2xl font-serif text-sage mb-2">East Cobb</div>
                <div className="text-coral font-medium mb-2">Best for: Families</div>
                <p className="text-sage-light text-sm">
                  More space, great schools, suburban life.
                </p>
              </div>
              <div className="bg-white p-6 text-center">
                <div className="text-2xl font-serif text-sage mb-2">West Midtown</div>
                <div className="text-coral font-medium mb-2">Best for: Modern Living</div>
                <p className="text-sage-light text-sm">
                  Trendy, low-maintenance, restaurant scene.
                </p>
              </div>
            </div>

            <div className="text-center">
              <p className="body-text mb-6">
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
      </section>

      {/* Different Budget? */}
      <section className="section-padding bg-sage">
        <div className="container-width text-center">
          <h2 className="text-3xl font-serif text-white mb-4">Different Budget?</h2>
          <p className="text-white/70 max-w-xl mx-auto mb-8">
            Whether you&apos;re looking at $400K or $1M+, I can show you what your budget
            gets you in different neighborhoods. Let&apos;s find your sweet spot.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/calculator"
              className="bg-white text-sage px-6 py-3 font-medium tracking-wide hover:bg-cream transition-colors"
            >
              Calculate My Budget
            </Link>
            <a
              href="sms:6787079385?body=Hi Emily! My budget is around $___. What neighborhoods should I be looking at?"
              className="btn-primary inline-flex items-center gap-2"
            >
              <MessageCircle className="h-4 w-4" />
              Ask Emily
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}

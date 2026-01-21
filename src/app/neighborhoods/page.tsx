'use client'

import { useState } from 'react'
import { MapPin, Coffee, Utensils, Star, MessageCircle, Home, DollarSign, Users, ChevronDown, ChevronUp, Sparkles } from 'lucide-react'

const neighborhoods = [
  {
    name: 'Virginia Highland',
    shortName: 'VaHi',
    vibe: 'Walkable, trendy, young professionals',
    priceRange: '$600K - $1.2M',
    goodFor: ['Walkability lovers', 'Restaurant goers', 'Young couples'],
    schools: 'Morningside Elementary, Inman Middle',
    emilysTake: 'If you want to walk to brunch and never drive on weekends, this is your spot. Competitive market though—move fast.',
    highlight: 'Walk everywhere',
    spots: [
      { name: 'Atkins Park Tavern', type: 'restaurant' },
      { name: 'Dark Horse Coffee', type: 'coffee' },
      { name: 'San Francisco Coffee', type: 'coffee' },
    ]
  },
  {
    name: 'Decatur',
    shortName: 'Decatur',
    vibe: 'Diverse, foodie paradise, excellent schools',
    priceRange: '$500K - $1M',
    goodFor: ['Families', 'Foodies', 'School-focused buyers'],
    schools: 'City Schools of Decatur (highly rated)',
    emilysTake: 'The schools here are a big draw. Great restaurants, walkable downtown, and a real community feel. Expect competition for the best streets.',
    highlight: 'Top schools',
    spots: [
      { name: 'Leon\'s Full Service', type: 'restaurant' },
      { name: 'Victory Sandwich Bar', type: 'restaurant' },
      { name: 'Dancing Goats Coffee', type: 'coffee' },
    ]
  },
  {
    name: 'Grant Park',
    shortName: 'Grant Park',
    vibe: 'Historic, family-friendly, Zoo Atlanta',
    priceRange: '$400K - $800K',
    goodFor: ['History lovers', 'Families with kids', 'Dog owners'],
    schools: 'Hope-Hill Elementary, MLK Jr Middle',
    emilysTake: 'Beautiful Victorian homes and the park is amazing for families. The farmers market on Sundays is a must. Getting pricier but still relative value.',
    highlight: 'Historic charm',
    spots: [
      { name: 'Ria\'s Bluebird', type: 'restaurant' },
      { name: 'Grant Park Coffeehouse', type: 'coffee' },
      { name: 'Six Feet Under', type: 'restaurant' },
    ]
  },
  {
    name: 'East Cobb',
    shortName: 'E. Cobb',
    vibe: 'Suburban, excellent schools, safe',
    priceRange: '$500K - $1.5M',
    goodFor: ['Families', 'Space seekers', 'School-focused buyers'],
    schools: 'Walton High School, Wheeler High School',
    emilysTake: 'I grew up here! Great schools, more space for your money, and safe neighborhoods. Trade-off is the commute into the city.',
    highlight: 'More space',
    spots: [
      { name: 'Canoe Restaurant', type: 'restaurant' },
      { name: 'Marietta Square', type: 'activity' },
      { name: 'Cool Beans Coffee', type: 'coffee' },
    ]
  },
  {
    name: 'Kirkwood',
    shortName: 'Kirkwood',
    vibe: 'Artsy, up-and-coming, diverse',
    priceRange: '$400K - $700K',
    goodFor: ['Artists', 'Young families', 'Community seekers'],
    schools: 'Toomer Elementary (Dekalb County)',
    emilysTake: 'One of my favorite neighborhoods for character and value. Great neighbors, porches, and block parties. Still has that real neighborhood feel.',
    highlight: 'Best value',
    spots: [
      { name: 'Le Petit Marché', type: 'restaurant' },
      { name: 'Pullman Yard', type: 'activity' },
      { name: 'East Pole Coffee', type: 'coffee' },
    ]
  },
  {
    name: 'Buckhead',
    shortName: 'Buckhead',
    vibe: 'Upscale, shopping, urban luxury',
    priceRange: '$600K - $2M+',
    goodFor: ['Luxury seekers', 'Shopping lovers', 'High-rise living'],
    schools: 'Atlanta Public Schools + private options',
    emilysTake: 'If you want walkable luxury with great restaurants and shopping, Buckhead delivers. Lots of condo options. HOA fees can be steep.',
    highlight: 'Luxury living',
    spots: [
      { name: 'Aria', type: 'restaurant' },
      { name: 'Lenox Square', type: 'activity' },
      { name: 'Cafe Intermezzo', type: 'coffee' },
    ]
  },
  {
    name: 'West Midtown',
    shortName: 'W. Midtown',
    vibe: 'Industrial chic, restaurants, nightlife',
    priceRange: '$500K - $1M',
    goodFor: ['Young professionals', 'Foodies', 'Design lovers'],
    schools: 'Atlanta Public Schools',
    emilysTake: 'The restaurant scene here is incredible and it\'s booming with new development. Great for singles and couples. Lots of loft conversions.',
    highlight: 'Food scene',
    spots: [
      { name: 'The Optimist', type: 'restaurant' },
      { name: 'Westside Provisions', type: 'activity' },
      { name: 'Brash Coffee', type: 'coffee' },
    ]
  },
  {
    name: 'Roswell',
    shortName: 'Roswell',
    vibe: 'Historic downtown, family-friendly, suburban',
    priceRange: '$400K - $900K',
    goodFor: ['Families', 'Historic charm seekers', 'Outdoor enthusiasts'],
    schools: 'Roswell High School (Fulton County)',
    emilysTake: 'Historic Canton Street is charming with great local shops. Good value compared to ITP, and the Chattahoochee River is right there for kayaking.',
    highlight: 'Outdoors',
    spots: [
      { name: 'The Fickle Pickle', type: 'restaurant' },
      { name: 'Vickery Village', type: 'activity' },
      { name: 'Cool Beans Roswell', type: 'coffee' },
    ]
  }
]

// Neighborhood Card Component for Mobile
function NeighborhoodCard({ neighborhood, isExpanded, onToggle }: {
  neighborhood: typeof neighborhoods[0]
  isExpanded: boolean
  onToggle: () => void
}) {
  return (
    <div className="bg-white rounded-lg shadow-soft overflow-hidden">
      {/* Card Header - Always Visible */}
      <button
        onClick={onToggle}
        className="w-full text-left p-5 flex items-start justify-between gap-4"
      >
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 mb-1">
            <h3 className="text-xl font-serif text-sage">{neighborhood.name}</h3>
            <span className="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium bg-coral/10 text-coral whitespace-nowrap">
              {neighborhood.highlight}
            </span>
          </div>
          <p className="text-sm text-sage-light mb-2">{neighborhood.vibe}</p>
          <p className="text-coral font-medium">{neighborhood.priceRange}</p>
        </div>
        <div className={`flex-shrink-0 w-8 h-8 rounded-full bg-cream flex items-center justify-center transition-transform duration-300 ${isExpanded ? 'rotate-180' : ''}`}>
          <ChevronDown className="w-5 h-5 text-sage" />
        </div>
      </button>

      {/* Expandable Content */}
      <div className={`overflow-hidden transition-all duration-300 ease-out ${isExpanded ? 'max-h-[600px] opacity-100' : 'max-h-0 opacity-0'}`}>
        <div className="px-5 pb-5 space-y-4">
          {/* Emily's Take - Featured prominently */}
          <div className="bg-coral/5 border-l-4 border-coral p-4 rounded-r-lg">
            <div className="flex items-center gap-2 mb-2">
              <Sparkles className="w-4 h-4 text-coral" />
              <span className="text-sm font-medium text-sage">Emily&apos;s Take</span>
            </div>
            <p className="text-sage-light text-sm leading-relaxed italic">
              &ldquo;{neighborhood.emilysTake}&rdquo;
            </p>
          </div>

          {/* Quick Facts */}
          <div className="grid grid-cols-1 gap-3">
            <div className="flex items-start gap-3">
              <div className="w-8 h-8 rounded-full bg-cream flex items-center justify-center flex-shrink-0">
                <Users className="h-4 w-4 text-coral" />
              </div>
              <div>
                <div className="text-xs font-medium text-sage uppercase tracking-wide">Good For</div>
                <div className="text-sm text-sage-light">{neighborhood.goodFor.join(' · ')}</div>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-8 h-8 rounded-full bg-cream flex items-center justify-center flex-shrink-0">
                <Home className="h-4 w-4 text-coral" />
              </div>
              <div>
                <div className="text-xs font-medium text-sage uppercase tracking-wide">Schools</div>
                <div className="text-sm text-sage-light">{neighborhood.schools}</div>
              </div>
            </div>
          </div>

          {/* Favorite Spots - Horizontal Scroll on Mobile */}
          <div>
            <div className="text-xs font-medium text-sage uppercase tracking-wide mb-2">My Favorite Spots</div>
            <div className="flex gap-2 overflow-x-auto pb-2 -mx-1 px-1 scrollbar-hide">
              {neighborhood.spots.map((spot) => (
                <div
                  key={spot.name}
                  className="flex items-center gap-2 bg-cream px-3 py-2 rounded-full whitespace-nowrap flex-shrink-0"
                >
                  {spot.type === 'coffee' && <Coffee className="h-3.5 w-3.5 text-coral" />}
                  {spot.type === 'restaurant' && <Utensils className="h-3.5 w-3.5 text-coral" />}
                  {spot.type === 'activity' && <Star className="h-3.5 w-3.5 text-coral" />}
                  <span className="text-xs text-sage">{spot.name}</span>
                </div>
              ))}
            </div>
          </div>

          {/* CTA */}
          <a
            href={`sms:6787079385?body=Hi Emily! I'm interested in learning more about ${neighborhood.name}. What homes are available there?`}
            className="flex items-center justify-center gap-2 w-full bg-coral text-white py-3 px-4 rounded-lg font-medium text-sm transition-colors hover:bg-coral-dark"
          >
            <MessageCircle className="h-4 w-4" />
            Ask About {neighborhood.name}
          </a>
        </div>
      </div>
    </div>
  )
}

export default function NeighborhoodsPage() {
  const [expandedCard, setExpandedCard] = useState<string | null>(neighborhoods[0].name)
  const [selectedNeighborhood, setSelectedNeighborhood] = useState(neighborhoods[0])

  const handleCardToggle = (name: string) => {
    setExpandedCard(expandedCard === name ? null : name)
  }

  return (
    <div className="pt-16">
      {/* Hero - More compact on mobile */}
      <section className="py-12 md:py-20 lg:py-28 px-6 md:px-8 bg-sage">
        <div className="container-width text-center text-white">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-serif mb-3 md:mb-4">Atlanta Neighborhoods</h1>
          <p className="text-base md:text-xl text-white/80 max-w-2xl mx-auto">
            The insider&apos;s guide from someone who grew up here and has sold 400+ homes across Metro Atlanta.
          </p>
        </div>
      </section>

      {/* Mobile: Card-based accordion layout */}
      <section className="py-8 md:hidden bg-cream">
        <div className="px-4">
          <p className="text-sm text-sage-light mb-4 text-center">Tap a neighborhood to explore</p>
          <div className="space-y-3">
            {neighborhoods.map((neighborhood) => (
              <NeighborhoodCard
                key={neighborhood.name}
                neighborhood={neighborhood}
                isExpanded={expandedCard === neighborhood.name}
                onToggle={() => handleCardToggle(neighborhood.name)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Desktop: Original two-column layout (hidden on mobile) */}
      <section className="section-padding bg-white hidden md:block">
        <div className="container-width">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Neighborhood List */}
            <div className="lg:col-span-1">
              <h2 className="heading-md mb-6">Select a Neighborhood</h2>
              <div className="space-y-2">
                {neighborhoods.map((neighborhood) => (
                  <button
                    key={neighborhood.name}
                    onClick={() => setSelectedNeighborhood(neighborhood)}
                    className={`w-full text-left p-4 transition-colors ${
                      selectedNeighborhood.name === neighborhood.name
                        ? 'bg-coral text-white'
                        : 'bg-cream hover:bg-sand-light text-sage'
                    }`}
                  >
                    <div className="font-medium">{neighborhood.name}</div>
                    <div className={`text-sm ${
                      selectedNeighborhood.name === neighborhood.name
                        ? 'text-white/80'
                        : 'text-sage-light'
                    }`}>
                      {neighborhood.vibe}
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Neighborhood Detail */}
            <div className="lg:col-span-2">
              <div className="bg-cream p-8">
                <div className="flex items-center gap-3 mb-2">
                  <h2 className="text-3xl font-serif text-sage">{selectedNeighborhood.name}</h2>
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-coral/10 text-coral">
                    {selectedNeighborhood.highlight}
                  </span>
                </div>
                <p className="text-coral mb-6">{selectedNeighborhood.vibe}</p>

                <div className="grid md:grid-cols-2 gap-6 mb-8">
                  <div className="flex items-start gap-3">
                    <DollarSign className="h-5 w-5 text-coral flex-shrink-0 mt-1" />
                    <div>
                      <div className="font-medium text-sage text-sm">Price Range</div>
                      <div className="text-sage-light">{selectedNeighborhood.priceRange}</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Users className="h-5 w-5 text-coral flex-shrink-0 mt-1" />
                    <div>
                      <div className="font-medium text-sage text-sm">Good For</div>
                      <div className="text-sage-light">{selectedNeighborhood.goodFor.join(', ')}</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 md:col-span-2">
                    <Home className="h-5 w-5 text-coral flex-shrink-0 mt-1" />
                    <div>
                      <div className="font-medium text-sage text-sm">Schools</div>
                      <div className="text-sage-light">{selectedNeighborhood.schools}</div>
                    </div>
                  </div>
                </div>

                <div className="bg-white p-6 mb-6 border-l-4 border-coral">
                  <div className="flex items-center gap-2 mb-2">
                    <Sparkles className="w-4 h-4 text-coral" />
                    <h3 className="font-medium text-sage">Emily&apos;s Take</h3>
                  </div>
                  <p className="text-sage-light italic">&ldquo;{selectedNeighborhood.emilysTake}&rdquo;</p>
                </div>

                <div>
                  <h3 className="font-medium text-sage mb-4">My Favorite Spots</h3>
                  <div className="grid grid-cols-3 gap-4">
                    {selectedNeighborhood.spots.map((spot) => (
                      <div key={spot.name} className="bg-white p-4 text-center">
                        {spot.type === 'coffee' && <Coffee className="h-5 w-5 text-coral mx-auto mb-2" />}
                        {spot.type === 'restaurant' && <Utensils className="h-5 w-5 text-coral mx-auto mb-2" />}
                        {spot.type === 'activity' && <Star className="h-5 w-5 text-coral mx-auto mb-2" />}
                        <div className="text-sm text-sage">{spot.name}</div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-8">
                  <a
                    href={`sms:6787079385?body=Hi Emily! I'm interested in learning more about ${selectedNeighborhood.name}. What homes are available there?`}
                    className="btn-primary inline-flex items-center gap-2"
                  >
                    <MessageCircle className="h-4 w-4" />
                    Ask About {selectedNeighborhood.name}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Google Map Embed Placeholder - Hidden on mobile for cleaner experience */}
      <section className="section-padding bg-sand-light hidden md:block">
        <div className="container-width">
          <h2 className="heading-lg text-center mb-4">Emily&apos;s Atlanta Map</h2>
          <p className="body-text text-center max-w-2xl mx-auto mb-8">
            My favorite coffee shops, restaurants, kid spots, and hidden gems across Metro Atlanta.
          </p>
          <div className="bg-sage/10 h-96 flex items-center justify-center">
            <div className="text-center">
              <MapPin className="h-12 w-12 text-sage/30 mx-auto mb-4" />
              <p className="text-sage-light">Interactive Google Map Coming Soon</p>
              <p className="text-sage-light text-sm">For now, text me for personalized neighborhood recommendations!</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA - Optimized for mobile */}
      <section className="py-12 md:py-20 lg:py-28 px-6 md:px-8 bg-sage">
        <div className="container-width text-center">
          <h2 className="text-2xl md:text-3xl font-serif text-white mb-3 md:mb-4">Not Sure Which Neighborhood?</h2>
          <p className="text-white/70 max-w-xl mx-auto mb-6 md:mb-8 text-sm md:text-base">
            Tell me what matters most—schools, walkability, budget, commute—and I&apos;ll point you in the right direction.
          </p>
          <a
            href="sms:6787079385?body=Hi Emily! I'm looking for a neighborhood in Atlanta. Here's what matters most to me:"
            className="btn-primary inline-flex items-center gap-2"
          >
            <MessageCircle className="h-4 w-4" />
            Get Personalized Recommendations
          </a>
        </div>
      </section>
    </div>
  )
}

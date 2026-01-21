'use client'

import { useState, useEffect } from 'react'
import dynamic from 'next/dynamic'
import Image from 'next/image'
import { MapPin, Coffee, Utensils, Star, MessageCircle, Home, DollarSign, Users, ChevronDown, Sparkles, Quote, ArrowRight } from 'lucide-react'

// Dynamic import for the map component (Leaflet requires window)
const AtlantaMap = dynamic(() => import('@/components/AtlantaMap').then(mod => mod.AtlantaMap), {
  ssr: false,
  loading: () => (
    <div className="w-full h-[500px] md:h-[600px] rounded-lg bg-cream flex items-center justify-center">
      <div className="text-center">
        <div className="w-12 h-12 rounded-full bg-coral/20 flex items-center justify-center mx-auto mb-3 animate-pulse">
          <MapPin className="w-6 h-6 text-coral" />
        </div>
        <p className="text-sage-light">Loading map...</p>
      </div>
    </div>
  ),
})

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
    // Virginia Highland: 1920s craftsman bungalows with front porches
    image: 'https://images.unsplash.com/photo-1449844908441-8829872d2607?w=800&h=500&fit=crop',
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
    // Decatur: Charming downtown square with local shops
    image: 'https://images.unsplash.com/photo-1582407947304-fd86f028f716?w=800&h=500&fit=crop',
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
    // Grant Park: Victorian architecture with turrets and gingerbread details
    image: 'https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=800&h=500&fit=crop',
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
    // East Cobb: Spacious suburban homes with mature trees
    image: 'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=800&h=500&fit=crop',
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
    // Kirkwood: Colorful craftsman homes with personality
    image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800&h=500&fit=crop',
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
    // Buckhead: Luxury living with skyline views
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&h=500&fit=crop',
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
    // West Midtown: Industrial lofts and urban development
    image: 'https://images.unsplash.com/photo-1555636222-cae831e670b3?w=800&h=500&fit=crop',
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
    // Roswell: Historic main street charm with local shops
    image: 'https://images.unsplash.com/photo-1605276374104-dee2a0ed3cd6?w=800&h=500&fit=crop',
    spots: [
      { name: 'The Fickle Pickle', type: 'restaurant' },
      { name: 'Vickery Village', type: 'activity' },
      { name: 'Cool Beans Roswell', type: 'coffee' },
    ]
  }
]

// Neighborhood Card Component for Mobile
function NeighborhoodCard({ neighborhood, isExpanded, onToggle, index }: {
  neighborhood: typeof neighborhoods[0]
  isExpanded: boolean
  onToggle: () => void
  index: number
}) {
  return (
    <div
      className="bg-white overflow-hidden transition-all duration-300 hover:shadow-soft"
      style={{ animationDelay: `${index * 50}ms` }}
    >
      {/* Card Header - Always Visible */}
      <button
        onClick={onToggle}
        className="w-full text-left p-5 flex items-start justify-between gap-4 group"
      >
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 mb-1 flex-wrap">
            <h3 className="text-xl font-serif text-sage group-hover:text-coral transition-colors">{neighborhood.name}</h3>
            <span className="inline-flex items-center px-2.5 py-1 text-xs font-medium bg-coral/10 text-coral whitespace-nowrap">
              {neighborhood.highlight}
            </span>
          </div>
          <p className="text-sm text-sage-light mb-2">{neighborhood.vibe}</p>
          <p className="text-coral font-medium">{neighborhood.priceRange}</p>
        </div>
        <div className={`flex-shrink-0 w-10 h-10 rounded-full bg-cream flex items-center justify-center transition-all duration-300 group-hover:bg-coral ${isExpanded ? 'rotate-180 bg-coral' : ''}`}>
          <ChevronDown className={`w-5 h-5 transition-colors ${isExpanded ? 'text-white' : 'text-sage group-hover:text-white'}`} />
        </div>
      </button>

      {/* Expandable Content */}
      <div className={`overflow-hidden transition-all duration-500 ease-out ${isExpanded ? 'max-h-[900px] opacity-100' : 'max-h-0 opacity-0'}`}>
        <div className="pb-5 space-y-4">
          {/* Neighborhood Image */}
          <div className="relative w-full h-[180px]">
            <Image
              src={neighborhood.image}
              alt={neighborhood.name}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 400px"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-sage/60 to-transparent" />
            <div className="absolute bottom-3 left-4">
              <span className="text-white font-serif text-xl">{neighborhood.name}</span>
            </div>
          </div>

          <div className="px-5 space-y-4">
          {/* Emily's Take - Featured prominently */}
          <div className="bg-sage p-5 relative overflow-hidden">
            <Quote className="absolute top-3 right-3 w-8 h-8 text-white/10" />
            <div className="flex items-center gap-2 mb-2">
              <Sparkles className="w-4 h-4 text-coral" />
              <span className="text-sm font-medium text-white">Emily&apos;s Take</span>
            </div>
            <p className="text-white/80 text-sm leading-relaxed relative z-10">
              &ldquo;{neighborhood.emilysTake}&rdquo;
            </p>
          </div>

          {/* Quick Facts */}
          <div className="grid grid-cols-1 gap-3">
            <div className="flex items-start gap-3 bg-cream p-4">
              <div className="w-10 h-10 rounded-full bg-coral/10 flex items-center justify-center flex-shrink-0">
                <Users className="h-5 w-5 text-coral" />
              </div>
              <div>
                <div className="text-xs font-medium text-sage uppercase tracking-wide mb-1">Good For</div>
                <div className="text-sm text-sage-light">{neighborhood.goodFor.join(' · ')}</div>
              </div>
            </div>
            <div className="flex items-start gap-3 bg-cream p-4">
              <div className="w-10 h-10 rounded-full bg-coral/10 flex items-center justify-center flex-shrink-0">
                <Home className="h-5 w-5 text-coral" />
              </div>
              <div>
                <div className="text-xs font-medium text-sage uppercase tracking-wide mb-1">Schools</div>
                <div className="text-sm text-sage-light">{neighborhood.schools}</div>
              </div>
            </div>
          </div>

          {/* Favorite Spots - Horizontal Scroll on Mobile */}
          <div>
            <div className="text-xs font-medium text-sage uppercase tracking-wide mb-3">My Favorite Spots</div>
            <div className="flex gap-2 overflow-x-auto pb-2 -mx-1 px-1 scrollbar-hide">
              {neighborhood.spots.map((spot) => (
                <div
                  key={spot.name}
                  className="flex items-center gap-2 bg-cream px-4 py-2.5 whitespace-nowrap flex-shrink-0"
                >
                  {spot.type === 'coffee' && <Coffee className="h-4 w-4 text-coral" />}
                  {spot.type === 'restaurant' && <Utensils className="h-4 w-4 text-coral" />}
                  {spot.type === 'activity' && <Star className="h-4 w-4 text-coral" />}
                  <span className="text-sm text-sage">{spot.name}</span>
                </div>
              ))}
            </div>
          </div>

          {/* CTA */}
          <a
            href={`sms:6787079385?body=Hi Emily! I'm interested in learning more about ${neighborhood.name}. What homes are available there?`}
            className="flex items-center justify-center gap-2 w-full bg-coral text-white py-4 px-4 font-medium text-sm transition-all duration-300 hover:bg-coral-dark"
          >
            <MessageCircle className="h-4 w-4" />
            Ask About {neighborhood.name}
          </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default function NeighborhoodsPage() {
  const [isVisible, setIsVisible] = useState(false)
  const [expandedCard, setExpandedCard] = useState<string | null>(neighborhoods[0].name)
  const [selectedNeighborhood, setSelectedNeighborhood] = useState(neighborhoods[0])

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const handleCardToggle = (name: string) => {
    setExpandedCard(expandedCard === name ? null : name)
  }

  return (
    <div className="pt-16 overflow-hidden">
      {/* Hero */}
      <section className="relative min-h-[50vh] flex items-center bg-sage overflow-hidden">
        {/* Decorative Elements */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-64 h-64 rounded-full bg-coral blur-3xl" />
          <div className="absolute bottom-10 right-20 w-80 h-80 rounded-full bg-white blur-3xl" />
        </div>

        <div className="container-width px-6 md:px-8 py-16 md:py-20 relative z-10">
          <div className={`max-w-3xl mx-auto text-center transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            <span className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm text-white/90 px-4 py-2 text-sm font-medium tracking-wide uppercase mb-6 md:mb-8">
              <MapPin className="w-4 h-4" />
              Neighborhood Guide
            </span>

            <h1 className="text-3xl md:text-4xl lg:text-6xl font-serif text-white mb-4 md:mb-6 leading-tight">
              Atlanta
              <span className="block text-coral">Neighborhoods</span>
            </h1>

            <p className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto">
              The insider&apos;s guide from someone who grew up here and has sold 400+ homes across Metro Atlanta.
            </p>
          </div>
        </div>

        {/* Bottom Wave */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
            <path d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 85C1200 90 1320 90 1380 90L1440 90V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" fill="#F5F1EB"/>
          </svg>
        </div>
      </section>

      {/* Mobile: Card-based accordion layout */}
      <section className="py-8 md:hidden bg-cream">
        <div className="px-4">
          <p className="text-sm text-sage-light mb-6 text-center">Tap a neighborhood to explore</p>
          <div className="space-y-3">
            {neighborhoods.map((neighborhood, index) => (
              <NeighborhoodCard
                key={neighborhood.name}
                neighborhood={neighborhood}
                isExpanded={expandedCard === neighborhood.name}
                onToggle={() => handleCardToggle(neighborhood.name)}
                index={index}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Desktop: Enhanced two-column layout */}
      <section className="section-padding bg-cream hidden md:block">
        <div className="container-width px-6 md:px-8">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Neighborhood List */}
            <div className="lg:col-span-1">
              <h2 className="text-2xl md:text-3xl font-serif text-sage mb-2">Select a Neighborhood</h2>
              <p className="text-sage-light mb-6">Click to explore details</p>
              <div className="space-y-2">
                {neighborhoods.map((neighborhood) => (
                  <button
                    key={neighborhood.name}
                    onClick={() => setSelectedNeighborhood(neighborhood)}
                    className={`w-full text-left p-4 transition-all duration-300 ${
                      selectedNeighborhood.name === neighborhood.name
                        ? 'bg-coral text-white shadow-soft'
                        : 'bg-white hover:shadow-soft hover:-translate-x-1 text-sage'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="font-medium">{neighborhood.name}</div>
                        <div className={`text-sm ${
                          selectedNeighborhood.name === neighborhood.name
                            ? 'text-white/80'
                            : 'text-sage-light'
                        }`}>
                          {neighborhood.priceRange}
                        </div>
                      </div>
                      <ArrowRight className={`w-4 h-4 transition-all ${
                        selectedNeighborhood.name === neighborhood.name
                          ? 'text-white translate-x-1'
                          : 'text-sage-light'
                      }`} />
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Neighborhood Detail */}
            <div className="lg:col-span-2">
              <div className="bg-white shadow-soft overflow-hidden">
                {/* Neighborhood Image Header */}
                <div className="relative w-full h-[280px]">
                  <Image
                    src={selectedNeighborhood.image}
                    alt={selectedNeighborhood.name}
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 66vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-sage/80 via-sage/20 to-transparent" />
                  <div className="absolute bottom-6 left-8 right-8">
                    <div className="flex items-center gap-3 mb-2 flex-wrap">
                      <h2 className="text-3xl md:text-4xl font-serif text-white">{selectedNeighborhood.name}</h2>
                      <span className="inline-flex items-center px-3 py-1 text-sm font-medium bg-white/20 backdrop-blur-sm text-white">
                        {selectedNeighborhood.highlight}
                      </span>
                    </div>
                    <p className="text-white/90 text-lg">{selectedNeighborhood.vibe}</p>
                  </div>
                </div>

                <div className="p-8 md:p-10">

                <div className="grid md:grid-cols-2 gap-6 mb-8">
                  <div className="flex items-start gap-4 bg-cream p-5">
                    <div className="w-12 h-12 rounded-full bg-coral/10 flex items-center justify-center flex-shrink-0">
                      <DollarSign className="h-6 w-6 text-coral" />
                    </div>
                    <div>
                      <div className="font-medium text-sage text-sm uppercase tracking-wider mb-1">Price Range</div>
                      <div className="text-sage-light text-lg">{selectedNeighborhood.priceRange}</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-4 bg-cream p-5">
                    <div className="w-12 h-12 rounded-full bg-coral/10 flex items-center justify-center flex-shrink-0">
                      <Users className="h-6 w-6 text-coral" />
                    </div>
                    <div>
                      <div className="font-medium text-sage text-sm uppercase tracking-wider mb-1">Good For</div>
                      <div className="text-sage-light">{selectedNeighborhood.goodFor.join(', ')}</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-4 bg-cream p-5 md:col-span-2">
                    <div className="w-12 h-12 rounded-full bg-coral/10 flex items-center justify-center flex-shrink-0">
                      <Home className="h-6 w-6 text-coral" />
                    </div>
                    <div>
                      <div className="font-medium text-sage text-sm uppercase tracking-wider mb-1">Schools</div>
                      <div className="text-sage-light">{selectedNeighborhood.schools}</div>
                    </div>
                  </div>
                </div>

                <div className="bg-sage p-6 md:p-8 mb-8 relative overflow-hidden">
                  <Quote className="absolute top-4 right-4 w-12 h-12 text-white/10" />
                  <div className="flex items-center gap-2 mb-3">
                    <Sparkles className="w-5 h-5 text-coral" />
                    <h3 className="font-medium text-white">Emily&apos;s Take</h3>
                  </div>
                  <p className="text-white/80 text-lg leading-relaxed relative z-10">&ldquo;{selectedNeighborhood.emilysTake}&rdquo;</p>
                </div>

                <div className="mb-8">
                  <h3 className="font-medium text-sage uppercase tracking-wider text-sm mb-4">My Favorite Spots</h3>
                  <div className="grid grid-cols-3 gap-4">
                    {selectedNeighborhood.spots.map((spot) => (
                      <div key={spot.name} className="bg-cream p-5 text-center group hover:bg-sage transition-colors duration-300">
                        <div className="w-10 h-10 rounded-full bg-coral/10 flex items-center justify-center mx-auto mb-3 group-hover:bg-coral transition-colors duration-300">
                          {spot.type === 'coffee' && <Coffee className="h-5 w-5 text-coral group-hover:text-white transition-colors" />}
                          {spot.type === 'restaurant' && <Utensils className="h-5 w-5 text-coral group-hover:text-white transition-colors" />}
                          {spot.type === 'activity' && <Star className="h-5 w-5 text-coral group-hover:text-white transition-colors" />}
                        </div>
                        <div className="text-sm text-sage group-hover:text-white transition-colors">{spot.name}</div>
                      </div>
                    ))}
                  </div>
                </div>

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

      {/* Map Section */}
      <section className="section-padding bg-white">
        <div className="container-width px-6 md:px-8">
          <div className="text-center mb-8">
            <span className="inline-block bg-coral/10 text-coral px-4 py-2 text-sm font-medium tracking-wide uppercase mb-6">
              Interactive Guide
            </span>
            <h2 className="text-3xl md:text-4xl font-serif text-sage mb-4">Emily&apos;s Atlanta Map</h2>
            <p className="text-sage-light max-w-2xl mx-auto">
              My favorite coffee shops, restaurants, kid spots, and hidden gems across Metro Atlanta.
              Click on any marker to learn more!
            </p>
          </div>
          <AtlantaMap />
        </div>
      </section>

      {/* CTA */}
      <section className="relative section-padding bg-sage overflow-hidden">
        {/* Decorative Elements */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-coral blur-3xl" />
          <div className="absolute bottom-0 left-0 w-64 h-64 rounded-full bg-white blur-3xl" />
        </div>

        <div className="container-width px-6 md:px-8 relative z-10">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl lg:text-5xl font-serif text-white mb-4 md:mb-6">
              Not Sure Which
              <span className="block text-coral">Neighborhood?</span>
            </h2>
            <p className="text-lg md:text-xl text-white/70 mb-8 md:mb-10">
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
        </div>
      </section>
    </div>
  )
}

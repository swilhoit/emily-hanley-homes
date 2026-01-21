'use client'

import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import { Icon, divIcon } from 'leaflet'
import { useState } from 'react'
import 'leaflet/dist/leaflet.css'

// Atlanta center coordinates
const ATLANTA_CENTER: [number, number] = [33.7490, -84.3880]

type PlaceCategory = 'restaurant' | 'coffee' | 'shop' | 'bar' | 'kids' | 'all'

interface Place {
  name: string
  coordinates: [number, number]
  category: PlaceCategory
  neighborhood: string
  description: string
  website?: string
}

const PLACES: Place[] = [
  // Restaurants
  {
    name: "Staplehouse",
    coordinates: [33.7589, -84.3647],
    category: 'restaurant',
    neighborhood: "Old Fourth Ward",
    description: "James Beard Award-winning restaurant with seasonal American cuisine. One of Atlanta's best.",
    website: "https://staplehouse.com"
  },
  {
    name: "Miller Union",
    coordinates: [33.7816, -84.4073],
    category: 'restaurant',
    neighborhood: "West Midtown",
    description: "Farm-to-table Southern cuisine in a converted warehouse. Perfect for a special night out.",
    website: "https://millerunion.com"
  },
  {
    name: "The Optimist",
    coordinates: [33.7809, -84.4089],
    category: 'restaurant',
    neighborhood: "West Midtown",
    description: "Upscale seafood in a nautical-inspired space. The lobster rolls are incredible.",
    website: "https://theoptimistrestaurant.com"
  },
  {
    name: "Fox Bros Bar-B-Q",
    coordinates: [33.7724, -84.3516],
    category: 'restaurant',
    neighborhood: "Little Five Points",
    description: "Texas-style BBQ that's become an Atlanta institution. Get the brisket.",
    website: "https://foxbrosbbq.com"
  },
  {
    name: "Bacchanalia",
    coordinates: [33.7808, -84.4102],
    category: 'restaurant',
    neighborhood: "West Midtown",
    description: "Elegant prix-fixe American cuisine. Atlanta's finest dining experience.",
    website: "https://starprovisions.com/bacchanalia"
  },
  {
    name: "Lazy Betty",
    coordinates: [33.7580, -84.3529],
    category: 'restaurant',
    neighborhood: "Edgewood",
    description: "Modern tasting menu in a relaxed atmosphere. Creative and surprising dishes.",
    website: "https://lazybettyatl.com"
  },
  {
    name: "Cooks & Soldiers",
    coordinates: [33.7817, -84.4078],
    category: 'restaurant',
    neighborhood: "West Midtown",
    description: "Spanish Basque cuisine with amazing pintxos. Great for groups.",
    website: "https://cooksandsoldiers.com"
  },
  {
    name: "Gunshow",
    coordinates: [33.7414, -84.3483],
    category: 'restaurant',
    neighborhood: "Glenwood Park",
    description: "Dim sum-style service where chefs bring dishes to your table. Unique experience.",
    website: "https://gunshowatl.com"
  },
  // Coffee Shops
  {
    name: "Revelator Coffee",
    coordinates: [33.7584, -84.3657],
    category: 'coffee',
    neighborhood: "Old Fourth Ward",
    description: "Specialty coffee with a sleek, modern vibe. Their cold brew is perfect.",
    website: "https://revelatorcoffee.com"
  },
  {
    name: "Spiller Park Coffee",
    coordinates: [33.7873, -84.3662],
    category: 'coffee',
    neighborhood: "Ponce City Market",
    description: "Local favorite inside Ponce City Market. Great espresso drinks.",
    website: "https://spillerpark.com"
  },
  {
    name: "Chrome Yellow Trading Co.",
    coordinates: [33.7610, -84.3552],
    category: 'coffee',
    neighborhood: "Inman Park",
    description: "Cozy cafe with excellent pastries and coffee. A neighborhood gem.",
  },
  {
    name: "Octane Coffee",
    coordinates: [33.7723, -84.3665],
    category: 'coffee',
    neighborhood: "Virginia-Highland",
    description: "Atlanta coffee pioneer. Industrial space with serious coffee credentials.",
    website: "https://octanecoffee.com"
  },
  {
    name: "Dancing Goats Coffee",
    coordinates: [33.7753, -84.3837],
    category: 'coffee',
    neighborhood: "Midtown",
    description: "Batdorf & Bronson's Atlanta outpost. Consistently great coffee.",
    website: "https://dancinggoats.com"
  },
  // Shops
  {
    name: "Citizen Supply",
    coordinates: [33.7873, -84.3659],
    category: 'shop',
    neighborhood: "Ponce City Market",
    description: "Curated collection of local makers. Perfect for unique Atlanta gifts.",
    website: "https://citizensupplyatl.com"
  },
  {
    name: "Paris on Ponce",
    coordinates: [33.7728, -84.3501],
    category: 'shop',
    neighborhood: "Poncey-Highland",
    description: "Eclectic antique mall with vintage finds and unique decor pieces.",
    website: "https://parisonponce.com"
  },
  {
    name: "The Merchant",
    coordinates: [33.7495, -84.3898],
    category: 'shop',
    neighborhood: "Castleberry Hill",
    description: "Beautifully curated home goods and lifestyle shop.",
  },
  {
    name: "Worthmore Jewelers",
    coordinates: [33.7587, -84.3635],
    category: 'shop',
    neighborhood: "Old Fourth Ward",
    description: "Custom jewelry and beautiful engagement rings. Local family business.",
    website: "https://worthmorejewelers.com"
  },
  // Bars
  {
    name: "Ticonderoga Club",
    coordinates: [33.7591, -84.3515],
    category: 'bar',
    neighborhood: "Krog Street Market",
    description: "Sophisticated cocktail bar with a vintage vibe. Excellent drinks.",
    website: "https://ticonderogaclub.com"
  },
  {
    name: "Victory Sandwich Bar",
    coordinates: [33.7598, -84.3566],
    category: 'bar',
    neighborhood: "Inman Park",
    description: "Dive bar meets great sandwiches. Casual and fun.",
    website: "https://vfranchise.com"
  },
  {
    name: "Brick Store Pub",
    coordinates: [33.7731, -84.2967],
    category: 'bar',
    neighborhood: "Decatur",
    description: "World-class beer selection in a cozy pub setting. Over 20 years strong.",
    website: "https://brickstorepub.com"
  },
  {
    name: "Sister Louisa's Church",
    coordinates: [33.7605, -84.3484],
    category: 'bar',
    neighborhood: "Edgewood",
    description: "Quirky church-themed bar with live organ music. Truly unique Atlanta experience.",
  },
  // Kid-Friendly
  {
    name: "Fernbank Museum",
    coordinates: [33.7736, -84.3280],
    category: 'kids',
    neighborhood: "Druid Hills",
    description: "Natural history museum with dinosaurs and nature trails. Kids love it.",
    website: "https://fernbankmuseum.org"
  },
  {
    name: "Center for Puppetry Arts",
    coordinates: [33.7901, -84.3849],
    category: 'kids',
    neighborhood: "Midtown",
    description: "World-renowned puppetry museum and theater. Jim Henson collection is amazing.",
    website: "https://puppet.org"
  },
  {
    name: "Piedmont Park",
    coordinates: [33.7879, -84.3733],
    category: 'kids',
    neighborhood: "Midtown",
    description: "Atlanta's beloved urban park. Great playgrounds and green space.",
    website: "https://piedmontpark.org"
  },
  {
    name: "Legoland Discovery Center",
    coordinates: [33.8855, -84.4681],
    category: 'kids',
    neighborhood: "Phipps Plaza",
    description: "Indoor Lego playground and rides. Perfect for rainy days.",
    website: "https://legolanddiscoverycenter.com"
  },
]

const categoryConfig: Record<PlaceCategory, { label: string; emoji: string; color: string }> = {
  restaurant: { label: 'Restaurants', emoji: '🍽️', color: '#D4967D' },
  coffee: { label: 'Coffee', emoji: '☕', color: '#8B7355' },
  shop: { label: 'Shops', emoji: '🛍️', color: '#9CAF88' },
  bar: { label: 'Bars', emoji: '🍸', color: '#7B68EE' },
  kids: { label: 'Kid-Friendly', emoji: '👶', color: '#FF69B4' },
  all: { label: 'All Places', emoji: '📍', color: '#3F4A49' },
}

function createCustomIcon(emoji: string, color: string) {
  return divIcon({
    html: `<div style="
      background-color: ${color};
      width: 36px;
      height: 36px;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 18px;
      box-shadow: 0 2px 8px rgba(0,0,0,0.3);
      border: 2px solid white;
    ">${emoji}</div>`,
    className: 'custom-marker',
    iconSize: [36, 36],
    iconAnchor: [18, 18],
  })
}

export function AtlantaMap() {
  const [activeCategory, setActiveCategory] = useState<PlaceCategory>('all')

  const filteredPlaces = activeCategory === 'all'
    ? PLACES
    : PLACES.filter(place => place.category === activeCategory)

  const categories: PlaceCategory[] = ['all', 'restaurant', 'coffee', 'shop', 'bar', 'kids']

  return (
    <div className="w-full">
      {/* Category Filter */}
      <div className="flex flex-wrap gap-2 mb-6">
        {categories.map((category) => {
          const config = categoryConfig[category]
          const isActive = activeCategory === category
          return (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 flex items-center gap-2 ${
                isActive
                  ? 'bg-coral text-white shadow-md'
                  : 'bg-cream text-sage hover:bg-sand-light'
              }`}
            >
              <span>{config.emoji}</span>
              <span>{config.label}</span>
              {category !== 'all' && (
                <span className={`text-xs ${isActive ? 'text-white/80' : 'text-sage-light'}`}>
                  ({PLACES.filter(p => p.category === category).length})
                </span>
              )}
            </button>
          )
        })}
      </div>

      {/* Map Container */}
      <div className="w-full h-[500px] md:h-[600px] rounded-lg overflow-hidden shadow-soft-lg">
        <MapContainer
          center={ATLANTA_CENTER}
          zoom={12}
          style={{ height: '100%', width: '100%' }}
          scrollWheelZoom={true}
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>'
            url="https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png"
          />
          {filteredPlaces.map((place) => {
            const config = categoryConfig[place.category]
            return (
              <Marker
                key={place.name}
                position={place.coordinates}
                icon={createCustomIcon(config.emoji, config.color)}
              >
                <Popup>
                  <div className="min-w-[200px] p-1">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-lg">{config.emoji}</span>
                      <h3 className="font-serif text-lg text-sage font-medium">{place.name}</h3>
                    </div>
                    <p className="text-xs text-coral font-medium uppercase tracking-wide mb-2">
                      {place.neighborhood}
                    </p>
                    <p className="text-sm text-sage-light leading-relaxed mb-3">
                      {place.description}
                    </p>
                    {place.website && (
                      <a
                        href={place.website}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm text-coral hover:text-coral-dark font-medium"
                      >
                        Visit Website →
                      </a>
                    )}
                  </div>
                </Popup>
              </Marker>
            )
          })}
        </MapContainer>
      </div>

      {/* Legend */}
      <div className="mt-4 text-center text-sm text-sage-light">
        Showing {filteredPlaces.length} of Emily's favorite spots in Metro Atlanta
      </div>
    </div>
  )
}

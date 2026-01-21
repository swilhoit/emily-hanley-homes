'use client'

import { useState } from 'react'
import { Search, Star, CheckCircle, AlertCircle, MessageCircle } from 'lucide-react'

const vendorCategories = [
  {
    name: 'Contractors & Repairs',
    vendors: [
      { category: 'General Contractor', names: ['Arthur Dorsey (MAPHomes)'] },
      { category: 'Handyman', names: ['Mario Murillo', 'Celso'] },
      { category: 'Electric', names: ['Lawrence Sturkey (Community Electric)', 'Chris Long'] },
      { category: 'Plumbing', names: ['Dave Crewey', 'Daniel (Progressive Plumbing)', 'Logan (Slam Plumbing)', 'Atlantis Plumbing', 'True Plumbing', 'Rooter PLUS', 'Tim Connaughton'] },
      { category: 'HVAC', names: ['Hugo', 'Arcadia', 'Estes Heating and Air', 'G.B. Services Inc.'] },
      { category: 'Roofing', names: ['Kyle Ramsey (Ram Roofing)', 'Ben Owens (Rosies Roofing)', 'Colony Roofers', 'Mason', 'Findlay Roofing'] },
      { category: 'Framing', names: ['Ryan (Renovations Reimagined)'] },
    ]
  },
  {
    name: 'Home Maintenance',
    vendors: [
      { category: 'Lawn Care', names: ['Jesse (Georgia Grown Landscaping)', 'Grantlanta Lawn'] },
      { category: 'Gutters', names: ['Stephen Shook (Shook Gutters)', 'Advanced Pressure and Gutter Cleaning', 'Atlanta\'s Best Gutter Cleaners'] },
      { category: 'Chimney', names: ['Advanced Chimney Sweeps', 'Chimney Pro Cleaners'] },
      { category: 'Duct Cleaning', names: ['Abraham', 'The Mad Hatter Air Duct Cleaning'] },
      { category: 'Locksmith', names: ['24/7 Locksmith', 'Nonstop Local Locksmith Atlanta'] },
    ]
  },
  {
    name: 'Flooring & Interior',
    vendors: [
      { category: 'Carpet & Flooring', names: ['Excel Carpet & Flooring', 'Luciano (Hardwood)', 'Paulo (Installation Made Easy)', 'Zero Rez Atlanta', 'Duraclean'] },
      { category: 'Painters', names: ['Ron Scott', 'Orlando Amaya', 'Tony', 'Daypaint Pro', 'James Zuniga', 'Maynor'] },
      { category: 'Closets', names: ['Michelle (UpClosets!)'] },
      { category: 'Designers', names: ['Haven Lane', 'Jim Davis Designs'] },
    ]
  },
  {
    name: 'Exterior & Outdoors',
    vendors: [
      { category: 'Fencing', names: ['Atlanta Decking and Fence', 'Chamblee Fence Company'] },
      { category: 'Driveway/Concrete', names: ['A&A Asphalt and Paving', 'A2 Carved-N-Stone'] },
      { category: 'Retaining Wall', names: ['Joe', 'Retaining Walls of Atlanta'] },
      { category: 'Arborist', names: ['Ty (Atlanta Arbor)', 'Shaun (Total Tree Service)'] },
    ]
  },
  {
    name: 'Inspections & Testing',
    vendors: [
      { category: 'General Inspectors', names: ['Avalon Home Inspections'] },
      { category: 'Appraisers', names: ['Jeremy Conlon', 'Tim Hark', 'D.S. Murphy', 'David Clemons'] },
      { category: 'Structural Engineer', names: ['Knoble Engineering', 'Engineered Solutions'] },
      { category: 'Radon', names: ['Marie Cutcliff (Cutcliff Radon Services)'] },
      { category: 'Asbestos', names: ['Carl Martin (Georgia Environmental)', 'William McLean'] },
      { category: 'Mold', names: ['Greenhome Solutions', 'Biorestore', 'Mark Cordle (Echota Home Inspections)', 'NuTech Mold & Water', 'NoMOLDAtlanta'] },
    ]
  },
  {
    name: 'Moving & Cleaning',
    vendors: [
      { category: 'Movers', names: ['Falcon Moving', 'Atlanta Peach Movers', 'Bobadillos', 'Mark the Mover'] },
      { category: 'Cleaners', names: ['Fico Escalante (Latin Atlanta Cleaning Services)', 'Danielle Wilson'] },
      { category: 'Move In/Out Cleaners', names: ['The Finishing Touch'] },
      { category: 'Junk Removal', names: ['Junk Luggers', 'Joseph\'s Junk Removal', 'Stand Up Guys', 'Dirty Deeds Junk Removal'] },
    ]
  },
  {
    name: 'Pest & Wildlife',
    vendors: [
      { category: 'Rodent Prevention', names: ['Animal B Gone', 'Northwest Exterminators', 'Gillstrap Exterminating', 'Chris Porta (Atlanta Squirrel & Rat)'] },
    ]
  },
  {
    name: 'Real Estate Services',
    vendors: [
      { category: 'Home Warranty', names: ['2-10 Home Warranty', 'ACHOSA'] },
      { category: 'Staging', names: ['Wendy Wilhoit', 'Everly Staging'] },
      { category: 'Septic', names: ['Septic Service Pro', 'Action Septic'] },
    ]
  },
]

export default function VendorsPage() {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null)

  const filteredCategories = vendorCategories.map(cat => ({
    ...cat,
    vendors: cat.vendors.filter(v =>
      v.category.toLowerCase().includes(searchTerm.toLowerCase()) ||
      v.names.some(n => n.toLowerCase().includes(searchTerm.toLowerCase()))
    )
  })).filter(cat =>
    (selectedCategory === null || cat.name === selectedCategory) &&
    cat.vendors.length > 0
  )

  return (
    <div className="pt-16">
      {/* Hero */}
      <section className="section-padding bg-sage">
        <div className="container-width text-center text-white">
          <h1 className="text-4xl md:text-5xl font-serif mb-4">Trusted Vendors</h1>
          <p className="text-xl text-white/80 max-w-2xl mx-auto">
            Vetted from 400+ transactions. If they screw up, they&apos;re off the list.
          </p>
        </div>
      </section>

      {/* Intro */}
      <section className="section-padding bg-cream">
        <div className="container-width">
          <div className="max-w-3xl mx-auto">
            <div className="bg-white p-8 mb-8">
              <h2 className="heading-md mb-4">Why This List Exists</h2>
              <p className="text-sage-light mb-4">
                As part of our goal to &ldquo;be here after closing,&rdquo; we want to make sure you have
                resources for whatever home projects come next. These aren&apos;t random names from Google—
                they&apos;re people we&apos;ve worked with across 400+ transactions.
              </p>
              <div className="grid md:grid-cols-3 gap-4 mt-6">
                <div className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-coral flex-shrink-0 mt-0.5" />
                  <span className="text-sage-light text-sm">Personally vetted through real transactions</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-coral flex-shrink-0 mt-0.5" />
                  <span className="text-sage-light text-sm">Removed if clients have bad experiences</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-coral flex-shrink-0 mt-0.5" />
                  <span className="text-sage-light text-sm">Updated regularly based on feedback</span>
                </div>
              </div>
            </div>

            <div className="bg-coral/10 p-6 rounded-lg flex items-start gap-4">
              <AlertCircle className="h-6 w-6 text-coral flex-shrink-0 mt-0.5" />
              <div>
                <h3 className="font-medium text-sage mb-1">Know Someone Great?</h3>
                <p className="text-sage-light text-sm">
                  If you&apos;ve gotten outstanding service from someone, we want to know about it!
                  Text Emily with your recommendation.
                </p>
                <a
                  href="sms:6787079385?body=Hi Emily! I have a vendor recommendation for your list:"
                  className="text-coral font-medium text-sm mt-2 inline-block hover:text-coral-dark transition-colors"
                >
                  Send a recommendation →
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Search & Filter */}
      <section className="py-8 bg-white border-b border-sand sticky top-16 z-40">
        <div className="container-width">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-sage-light" />
              <input
                type="text"
                placeholder="Search vendors..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-sand focus:border-coral focus:outline-none"
              />
            </div>
            <div className="flex gap-2 flex-wrap">
              <button
                onClick={() => setSelectedCategory(null)}
                className={`px-4 py-2 text-sm transition-colors ${
                  selectedCategory === null
                    ? 'bg-coral text-white'
                    : 'bg-sand text-sage hover:bg-coral/10'
                }`}
              >
                All
              </button>
              {vendorCategories.map((cat) => (
                <button
                  key={cat.name}
                  onClick={() => setSelectedCategory(cat.name)}
                  className={`px-4 py-2 text-sm transition-colors ${
                    selectedCategory === cat.name
                      ? 'bg-coral text-white'
                      : 'bg-sand text-sage hover:bg-coral/10'
                  }`}
                >
                  {cat.name}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Vendor List */}
      <section className="section-padding bg-white">
        <div className="container-width">
          {filteredCategories.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-sage-light">No vendors found matching your search.</p>
            </div>
          ) : (
            <div className="space-y-12">
              {filteredCategories.map((category) => (
                <div key={category.name}>
                  <h2 className="heading-md mb-6 pb-2 border-b border-sand">{category.name}</h2>
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {category.vendors.map((vendor) => (
                      <div key={vendor.category} className="bg-cream p-4">
                        <h3 className="font-medium text-sage mb-2">{vendor.category}</h3>
                        <ul className="space-y-1">
                          {vendor.names.map((name) => (
                            <li key={name} className="text-sage-light text-sm flex items-start gap-2">
                              <Star className="h-3 w-3 text-coral flex-shrink-0 mt-1" />
                              {name}
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-sage">
        <div className="container-width text-center">
          <h2 className="text-3xl font-serif text-white mb-4">Need a Specific Recommendation?</h2>
          <p className="text-white/70 max-w-xl mx-auto mb-8">
            Can&apos;t find what you&apos;re looking for? Text us—we probably know someone.
          </p>
          <a
            href="sms:6787079385?body=Hi Emily! I'm looking for a vendor recommendation for:"
            className="btn-primary inline-flex items-center gap-2"
          >
            <MessageCircle className="h-4 w-4" />
            Text Emily
          </a>
        </div>
      </section>
    </div>
  )
}

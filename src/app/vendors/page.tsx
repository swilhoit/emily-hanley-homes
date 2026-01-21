'use client'

import { useState, useEffect } from 'react'
import { Search, Star, CheckCircle, AlertCircle, MessageCircle, Sparkles, Wrench, Home, PaintBucket, TreePine, ClipboardCheck, Truck, Bug, Building, ArrowRight } from 'lucide-react'

const vendorCategories = [
  {
    name: 'Contractors & Repairs',
    icon: Wrench,
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
    icon: Home,
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
    icon: PaintBucket,
    vendors: [
      { category: 'Carpet & Flooring', names: ['Excel Carpet & Flooring', 'Luciano (Hardwood)', 'Paulo (Installation Made Easy)', 'Zero Rez Atlanta', 'Duraclean'] },
      { category: 'Painters', names: ['Ron Scott', 'Orlando Amaya', 'Tony', 'Daypaint Pro', 'James Zuniga', 'Maynor'] },
      { category: 'Closets', names: ['Michelle (UpClosets!)'] },
      { category: 'Designers', names: ['Haven Lane', 'Jim Davis Designs'] },
    ]
  },
  {
    name: 'Exterior & Outdoors',
    icon: TreePine,
    vendors: [
      { category: 'Fencing', names: ['Atlanta Decking and Fence', 'Chamblee Fence Company'] },
      { category: 'Driveway/Concrete', names: ['A&A Asphalt and Paving', 'A2 Carved-N-Stone'] },
      { category: 'Retaining Wall', names: ['Joe', 'Retaining Walls of Atlanta'] },
      { category: 'Arborist', names: ['Ty (Atlanta Arbor)', 'Shaun (Total Tree Service)'] },
    ]
  },
  {
    name: 'Inspections & Testing',
    icon: ClipboardCheck,
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
    icon: Truck,
    vendors: [
      { category: 'Movers', names: ['Falcon Moving', 'Atlanta Peach Movers', 'Bobadillos', 'Mark the Mover'] },
      { category: 'Cleaners', names: ['Fico Escalante (Latin Atlanta Cleaning Services)', 'Danielle Wilson'] },
      { category: 'Move In/Out Cleaners', names: ['The Finishing Touch'] },
      { category: 'Junk Removal', names: ['Junk Luggers', 'Joseph\'s Junk Removal', 'Stand Up Guys', 'Dirty Deeds Junk Removal'] },
    ]
  },
  {
    name: 'Pest & Wildlife',
    icon: Bug,
    vendors: [
      { category: 'Rodent Prevention', names: ['Animal B Gone', 'Northwest Exterminators', 'Gillstrap Exterminating', 'Chris Porta (Atlanta Squirrel & Rat)'] },
    ]
  },
  {
    name: 'Real Estate Services',
    icon: Building,
    vendors: [
      { category: 'Home Warranty', names: ['2-10 Home Warranty', 'ACHOSA'] },
      { category: 'Staging', names: ['Wendy Wilhoit', 'Everly Staging'] },
      { category: 'Septic', names: ['Septic Service Pro', 'Action Septic'] },
    ]
  },
]

export default function VendorsPage() {
  const [isVisible, setIsVisible] = useState(false)
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null)

  useEffect(() => {
    setIsVisible(true)
  }, [])

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
    <div className="pt-16 overflow-hidden">
      {/* Hero */}
      <section className="relative min-h-[50vh] flex items-center bg-sage overflow-hidden">
        {/* Decorative Elements */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 right-10 w-64 h-64 rounded-full bg-coral blur-3xl" />
          <div className="absolute bottom-10 left-20 w-80 h-80 rounded-full bg-white blur-3xl" />
        </div>

        <div className="container-width px-6 md:px-8 py-20 relative z-10">
          <div className={`max-w-3xl mx-auto text-center transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            <span className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm text-white/90 px-4 py-2 text-sm font-medium tracking-wide uppercase mb-8">
              <Sparkles className="w-4 h-4" />
              Trusted Partners
            </span>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif text-white mb-6 leading-tight">
              Trusted
              <span className="block text-coral">Vendors</span>
            </h1>

            <p className="text-xl text-white/80 max-w-2xl mx-auto">
              Vetted from 400+ transactions. If they screw up, they&apos;re off the list.
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

      {/* Intro */}
      <section className="section-padding bg-cream">
        <div className="container-width px-6 md:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white p-8 md:p-10 shadow-soft mb-8">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-full bg-coral/10 flex items-center justify-center">
                  <CheckCircle className="h-6 w-6 text-coral" />
                </div>
                <h2 className="text-2xl md:text-3xl font-serif text-sage">Why This List Exists</h2>
              </div>
              <p className="text-sage-light mb-6 text-lg">
                As part of our goal to &ldquo;be here after closing,&rdquo; we want to make sure you have
                resources for whatever home projects come next. These aren&apos;t random names from Google—
                they&apos;re people we&apos;ve worked with across 400+ transactions.
              </p>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="flex items-start gap-3 bg-cream p-4">
                  <div className="w-8 h-8 rounded-full bg-coral/10 flex items-center justify-center flex-shrink-0">
                    <CheckCircle className="h-4 w-4 text-coral" />
                  </div>
                  <span className="text-sage-light text-sm">Personally vetted through real transactions</span>
                </div>
                <div className="flex items-start gap-3 bg-cream p-4">
                  <div className="w-8 h-8 rounded-full bg-coral/10 flex items-center justify-center flex-shrink-0">
                    <CheckCircle className="h-4 w-4 text-coral" />
                  </div>
                  <span className="text-sage-light text-sm">Removed if clients have bad experiences</span>
                </div>
                <div className="flex items-start gap-3 bg-cream p-4">
                  <div className="w-8 h-8 rounded-full bg-coral/10 flex items-center justify-center flex-shrink-0">
                    <CheckCircle className="h-4 w-4 text-coral" />
                  </div>
                  <span className="text-sage-light text-sm">Updated regularly based on feedback</span>
                </div>
              </div>
            </div>

            <div className="bg-coral/10 p-6 md:p-8 flex items-start gap-4">
              <div className="w-12 h-12 rounded-full bg-coral/20 flex items-center justify-center flex-shrink-0">
                <AlertCircle className="h-6 w-6 text-coral" />
              </div>
              <div>
                <h3 className="font-serif text-xl text-sage mb-2">Know Someone Great?</h3>
                <p className="text-sage-light mb-3">
                  If you&apos;ve gotten outstanding service from someone, we want to know about it!
                  Text Emily with your recommendation.
                </p>
                <a
                  href="sms:6787079385?body=Hi Emily! I have a vendor recommendation for your list:"
                  className="text-coral font-medium inline-flex items-center gap-2 hover:gap-3 transition-all"
                >
                  Send a recommendation
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Search & Filter */}
      <section className="py-6 md:py-8 bg-white border-b border-sand sticky top-16 z-40">
        <div className="container-width px-6 md:px-8">
          <div className="flex flex-col lg:flex-row gap-4">
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-sage-light" />
              <input
                type="text"
                placeholder="Search vendors..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-4 py-3 border-2 border-sand focus:border-coral focus:outline-none transition-colors bg-cream/50"
              />
            </div>
            <div className="flex gap-2 flex-wrap">
              <button
                onClick={() => setSelectedCategory(null)}
                className={`px-4 py-2.5 text-sm font-medium transition-all duration-300 ${
                  selectedCategory === null
                    ? 'bg-coral text-white'
                    : 'bg-cream text-sage hover:bg-coral/10'
                }`}
              >
                All
              </button>
              {vendorCategories.map((cat) => (
                <button
                  key={cat.name}
                  onClick={() => setSelectedCategory(cat.name)}
                  className={`px-4 py-2.5 text-sm font-medium transition-all duration-300 flex items-center gap-2 ${
                    selectedCategory === cat.name
                      ? 'bg-coral text-white'
                      : 'bg-cream text-sage hover:bg-coral/10'
                  }`}
                >
                  <cat.icon className="w-4 h-4" />
                  <span className="hidden md:inline">{cat.name}</span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Vendor List */}
      <section className="section-padding bg-white">
        <div className="container-width px-6 md:px-8">
          {filteredCategories.length === 0 ? (
            <div className="text-center py-16">
              <div className="w-16 h-16 rounded-full bg-cream flex items-center justify-center mx-auto mb-4">
                <Search className="h-8 w-8 text-sage-light" />
              </div>
              <p className="text-sage-light text-lg">No vendors found matching your search.</p>
              <button
                onClick={() => { setSearchTerm(''); setSelectedCategory(null); }}
                className="text-coral font-medium mt-2 hover:text-coral-dark transition-colors"
              >
                Clear filters
              </button>
            </div>
          ) : (
            <div className="space-y-16">
              {filteredCategories.map((category, categoryIndex) => (
                <div
                  key={category.name}
                  className={`transition-all duration-500 ${
                    isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                  }`}
                  style={{ transitionDelay: `${categoryIndex * 100}ms` }}
                >
                  <div className="flex items-center gap-4 mb-8 pb-4 border-b border-sand">
                    <div className="w-12 h-12 rounded-full bg-sage/10 flex items-center justify-center">
                      <category.icon className="h-6 w-6 text-sage" />
                    </div>
                    <h2 className="text-2xl md:text-3xl font-serif text-sage">{category.name}</h2>
                  </div>

                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {category.vendors.map((vendor, vendorIndex) => (
                      <div
                        key={vendor.category}
                        className="group bg-cream p-6 transition-all duration-300 hover:shadow-soft hover:-translate-y-1"
                      >
                        <h3 className="font-medium text-sage mb-4 flex items-center gap-2">
                          <div className="w-2 h-2 rounded-full bg-coral" />
                          {vendor.category}
                        </h3>
                        <ul className="space-y-2">
                          {vendor.names.map((name) => (
                            <li key={name} className="text-sage-light text-sm flex items-start gap-2">
                              <Star className="h-3.5 w-3.5 text-coral flex-shrink-0 mt-1 fill-coral" />
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
      <section className="relative section-padding bg-sage overflow-hidden">
        {/* Decorative Elements */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-coral blur-3xl" />
          <div className="absolute bottom-0 left-0 w-64 h-64 rounded-full bg-white blur-3xl" />
        </div>

        <div className="container-width px-6 md:px-8 relative z-10">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif text-white mb-6">
              Need a Specific
              <span className="block text-coral">Recommendation?</span>
            </h2>
            <p className="text-xl text-white/70 mb-10">
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
        </div>
      </section>
    </div>
  )
}

'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Search, Users, Home, Calculator, Eye, Camera, FileText, MessageCircle, ArrowRight, Sparkles, ChevronDown, Zap, DollarSign, Clock, Gift } from 'lucide-react'

const stats = [
  {
    icon: Clock,
    value: '2hr',
    label: 'Response Time',
    description: 'In this market, waiting means losing. We don\'t make you wait.'
  },
  {
    icon: DollarSign,
    value: '$8K',
    label: 'Avg Closing Costs Received',
    description: 'We negotiate hard so you keep more money in your pocket.'
  },
  {
    icon: Zap,
    value: '4 Days',
    label: 'Median Days on Market',
    description: 'Our listings move fast because we price and prep them right.'
  },
  {
    icon: Gift,
    value: '$121K',
    label: 'Grants for Clients',
    description: 'We know the programs and help you access free money.'
  }
]

const buyerServices = [
  {
    icon: Search,
    title: 'Personalized Home Search',
    description: 'Customized searches based on your criteria—beds, baths, school district, neighborhood, price. Listings sent to your inbox as soon as they hit the market.',
    highlight: 'Plus: We search for off-market homes that haven\'t hit MLS yet.'
  },
  {
    icon: Users,
    title: 'Buyer Consultation',
    description: 'We\'ll walk through the entire process together—contracts, timeline, associated costs. First-time buyer? We\'ve got a whole book for you. Not your first time? Let\'s talk market specifics and your home goals.',
    highlight: 'No pressure, just information.'
  },
  {
    icon: Eye,
    title: 'Google Street View Pre-Screening',
    description: 'Before we drive out to see a home, we check the neighborhood on Street View. Backs up to a highway? Power lines in the backyard? You\'ll know before we waste your time.',
    highlight: 'We\'ve saved countless hours with this system.'
  },
  {
    icon: Calculator,
    title: 'Preferred Lender Connections',
    description: 'Our lenders offer competitive timelines and contingencies that help your offers win. We\'ll match you with the right one for your situation.',
    highlight: 'Already have a lender? Great—we love meeting other pros.'
  }
]

const sellerServices = [
  {
    icon: Home,
    title: 'Listing Consultation',
    description: 'We\'ll cover what your home is worth, projects that could increase value, where you might move next, and all the logistics. Sometimes the best advice is to wait—we\'ll tell you that too.',
    highlight: 'We want whatever is the best WIN for you.'
  },
  {
    icon: Camera,
    title: 'Market Preparation',
    description: 'Our visual coordinator preps your home for photos. Our photography team gets the ideal angles and lighting. Our listing team writes descriptions that sell.',
    highlight: '4-day median time on market for our listings.'
  },
  {
    icon: FileText,
    title: 'Strategic Pricing',
    description: 'We analyze the market, not just the comps. We know which features buyers will pay extra for and which "upgrades" don\'t actually add value.',
    highlight: '$197K negotiated under ask price for our buyers.'
  }
]

const process = [
  {
    step: 1,
    title: 'Initial Consultation',
    description: 'We meet (coffee shop, office, or video call—your choice) to understand your goals. No sales pitch, just listening.'
  },
  {
    step: 2,
    title: 'Strategy & Search',
    description: 'We create a customized plan. For buyers: personalized search criteria. For sellers: market analysis and prep checklist.'
  },
  {
    step: 3,
    title: 'Active Phase',
    description: 'Showings with real-time feedback. Negotiations handled. 2-hour response time guaranteed.'
  },
  {
    step: 4,
    title: 'Contract to Close',
    description: 'Inspections coordinated. Issues handled. We guide you through every form and deadline.'
  },
  {
    step: 5,
    title: 'Beyond Closing',
    description: 'Need a plumber? Question about that new development? We\'re still here. Send us your holiday cards!'
  }
]

const faqs = [
  {
    question: 'Do I need to be pre-approved before we start looking?',
    answer: 'Not necessarily! We can start exploring to help you understand what\'s out there. But before making an offer, you\'ll need pre-approval. We have great lender connections who can help.'
  },
  {
    question: 'How quickly can you show me a house?',
    answer: 'Usually same-day or next-day. We respond within 2 hours and prioritize getting you into homes fast—this market waits for no one.'
  },
  {
    question: 'What if I\'m relocating from out of state?',
    answer: 'We do this all the time! Video tours, detailed neighborhood info, and we can handle a lot remotely. Several of our clients bought homes before setting foot in them.'
  },
  {
    question: 'Do you work with investors?',
    answer: 'Yes! Whether it\'s your first rental property or your fifteenth, we understand the numbers that matter.'
  }
]

function FAQItem({ faq, isOpen, onClick }: { faq: typeof faqs[0]; isOpen: boolean; onClick: () => void }) {
  return (
    <div className="border-b border-sand last:border-0">
      <button
        onClick={onClick}
        className="w-full py-6 flex items-center justify-between text-left group"
      >
        <h3 className="font-medium text-sage group-hover:text-coral transition-colors pr-4">{faq.question}</h3>
        <ChevronDown className={`w-5 h-5 text-coral flex-shrink-0 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
      </button>
      <div className={`overflow-hidden transition-all duration-300 ${isOpen ? 'max-h-48 pb-6' : 'max-h-0'}`}>
        <p className="text-sage-light">{faq.answer}</p>
      </div>
    </div>
  )
}

export default function ServicesPage() {
  const [isVisible, setIsVisible] = useState(false)
  const [openFaq, setOpenFaq] = useState<number | null>(null)
  const [activeTab, setActiveTab] = useState<'buyers' | 'sellers'>('buyers')

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
              Our Services
            </span>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif text-white mb-6 leading-tight">
              How We Can
              <span className="block text-coral">Help You</span>
            </h1>

            <p className="text-xl text-white/80 max-w-2xl mx-auto">
              Whether you&apos;re buying your first home, selling your fourth, or just exploring
              options—we&apos;ve got systems to set you up for success.
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

      {/* Stats Section */}
      <section className="py-16 md:py-20 bg-cream">
        <div className="container-width px-6 md:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-serif text-sage mb-3">What Makes Us Different</h2>
            <p className="text-sage-light">We&apos;ve sold 400+ homes. Here&apos;s what we&apos;ve learned actually matters.</p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            {stats.map((stat, index) => (
              <div
                key={stat.label}
                className={`group relative bg-white p-6 md:p-8 text-center transition-all duration-500 hover:shadow-soft hover:-translate-y-1 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="w-12 h-12 rounded-full bg-coral/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-coral group-hover:scale-110 transition-all duration-300">
                  <stat.icon className="w-6 h-6 text-coral group-hover:text-white transition-colors" />
                </div>
                <div className="text-3xl md:text-4xl font-serif text-coral mb-2">{stat.value}</div>
                <h3 className="font-medium text-sage mb-2 text-sm md:text-base">{stat.label}</h3>
                <p className="text-sage-light text-xs md:text-sm">{stat.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Tabs */}
      <section className="section-padding bg-white">
        <div className="container-width px-6 md:px-8">
          {/* Tab Buttons */}
          <div className="flex justify-center mb-12">
            <div className="inline-flex bg-cream p-1">
              <button
                onClick={() => setActiveTab('buyers')}
                className={`px-8 py-3 font-medium text-sm uppercase tracking-wider transition-all duration-300 ${
                  activeTab === 'buyers'
                    ? 'bg-coral text-white'
                    : 'text-sage hover:text-coral'
                }`}
              >
                For Buyers
              </button>
              <button
                onClick={() => setActiveTab('sellers')}
                className={`px-8 py-3 font-medium text-sm uppercase tracking-wider transition-all duration-300 ${
                  activeTab === 'sellers'
                    ? 'bg-coral text-white'
                    : 'text-sage hover:text-coral'
                }`}
              >
                For Sellers
              </button>
            </div>
          </div>

          {/* Buyer Services */}
          <div className={`transition-all duration-500 ${activeTab === 'buyers' ? 'opacity-100' : 'opacity-0 hidden'}`}>
            <div className="text-center mb-10">
              <h2 className="text-2xl md:text-3xl font-serif text-sage mb-3">Buyer Services</h2>
              <p className="text-sage-light max-w-2xl mx-auto">First time or fifth time, we make buying a home less stressful.</p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {buyerServices.map((service, index) => (
                <div
                  key={service.title}
                  className="group relative bg-cream p-8 transition-all duration-500 hover:shadow-soft hover:-translate-y-1"
                >
                  <div className="absolute top-0 right-0 w-32 h-32 bg-coral/5 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                  <div className="relative z-10">
                    <div className="w-14 h-14 rounded-full bg-sage/10 flex items-center justify-center mb-6 group-hover:bg-sage transition-colors duration-300">
                      <service.icon className="h-7 w-7 text-sage group-hover:text-white transition-colors duration-300" />
                    </div>
                    <h3 className="text-xl font-serif text-sage mb-3">{service.title}</h3>
                    <p className="text-sage-light mb-4 leading-relaxed">{service.description}</p>
                    <p className="text-coral text-sm font-medium flex items-center gap-2">
                      <Sparkles className="w-4 h-4" />
                      {service.highlight}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Seller Services */}
          <div className={`transition-all duration-500 ${activeTab === 'sellers' ? 'opacity-100' : 'opacity-0 hidden'}`}>
            <div className="text-center mb-10">
              <h2 className="text-2xl md:text-3xl font-serif text-sage mb-3">Seller Services</h2>
              <p className="text-sage-light max-w-2xl mx-auto">We have tried-and-true systems to help you receive top dollar.</p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {sellerServices.map((service, index) => (
                <div
                  key={service.title}
                  className="group relative bg-cream p-8 transition-all duration-500 hover:shadow-soft hover:-translate-y-1"
                >
                  <div className="absolute top-0 right-0 w-32 h-32 bg-coral/5 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                  <div className="relative z-10">
                    <div className="w-14 h-14 rounded-full bg-coral/10 flex items-center justify-center mb-6 group-hover:bg-coral transition-colors duration-300">
                      <service.icon className="h-7 w-7 text-coral group-hover:text-white transition-colors duration-300" />
                    </div>
                    <h3 className="text-xl font-serif text-sage mb-3">{service.title}</h3>
                    <p className="text-sage-light mb-4 leading-relaxed">{service.description}</p>
                    <p className="text-coral text-sm font-medium flex items-center gap-2">
                      <Sparkles className="w-4 h-4" />
                      {service.highlight}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Process Timeline */}
      <section className="relative section-padding bg-sage overflow-hidden">
        {/* Decorative Elements */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 right-20 w-64 h-64 rounded-full bg-coral blur-3xl" />
          <div className="absolute bottom-20 left-10 w-96 h-96 rounded-full bg-white blur-3xl" />
        </div>

        <div className="container-width px-6 md:px-8 relative z-10">
          <div className="text-center mb-16">
            <span className="inline-block bg-white/10 backdrop-blur-sm text-white/90 px-4 py-2 text-sm font-medium tracking-wide uppercase mb-6">
              Simple & Clear
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif text-white mb-4">
              Our Process
            </h2>
            <p className="text-xl text-white/70 max-w-2xl mx-auto">
              Simple, straightforward, no surprises.
            </p>
          </div>

          {/* Desktop Timeline */}
          <div className="hidden md:block max-w-5xl mx-auto">
            <div className="relative">
              {/* Connecting Line */}
              <div className="absolute top-8 left-0 right-0 h-0.5 bg-white/20" />

              <div className="grid grid-cols-5 gap-4">
                {process.map((step, index) => (
                  <div key={step.step} className="relative">
                    {/* Step Circle */}
                    <div className="relative z-10 w-16 h-16 bg-coral rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                      <span className="text-white font-serif text-2xl">{step.step}</span>
                    </div>

                    <div className="text-center">
                      <h3 className="text-lg font-serif text-white mb-2">{step.title}</h3>
                      <p className="text-white/60 text-sm leading-relaxed">{step.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Mobile Timeline */}
          <div className="md:hidden max-w-md mx-auto">
            {process.map((step, index) => (
              <div key={step.step} className="flex gap-6 mb-8 last:mb-0">
                <div className="flex-shrink-0 flex flex-col items-center">
                  <div className="w-12 h-12 bg-coral rounded-full flex items-center justify-center shadow-lg">
                    <span className="text-white font-serif text-xl">{step.step}</span>
                  </div>
                  {index < process.length - 1 && (
                    <div className="w-0.5 flex-1 bg-white/20 mt-2" />
                  )}
                </div>
                <div className="pt-2 pb-8">
                  <h3 className="text-xl font-serif text-white mb-2">{step.title}</h3>
                  <p className="text-white/70">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Wave */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
            <path d="M0 120L60 105C120 90 240 60 360 50C480 40 600 50 720 60C840 70 960 80 1080 80C1200 80 1320 70 1380 65L1440 60V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" fill="white"/>
          </svg>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section-padding bg-white">
        <div className="container-width px-6 md:px-8">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <span className="inline-block bg-coral/10 text-coral px-4 py-2 text-sm font-medium tracking-wide uppercase mb-6">
                Questions?
              </span>
              <h2 className="text-3xl md:text-4xl font-serif text-sage mb-4">Common Questions</h2>
              <p className="text-sage-light">Quick answers to things we hear all the time.</p>
            </div>

            <div className="bg-cream p-6 md:p-8">
              {faqs.map((faq, index) => (
                <FAQItem
                  key={index}
                  faq={faq}
                  isOpen={openFaq === index}
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative section-padding bg-cream overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-0 left-1/4 w-96 h-96 rounded-full bg-coral blur-3xl" />
        </div>

        <div className="container-width px-6 md:px-8 relative z-10">
          <div className="max-w-3xl mx-auto">
            <div className="bg-sage p-8 md:p-12 text-center text-white relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-coral/10 rounded-full blur-3xl" />
              <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/5 rounded-full blur-2xl" />

              <div className="relative z-10">
                <h2 className="text-3xl md:text-4xl font-serif mb-4">
                  Let&apos;s Figure Out
                  <span className="block text-coral">Your Next Move</span>
                </h2>
                <p className="text-white/70 mb-8 max-w-xl mx-auto">
                  No obligation. Just a conversation about what you&apos;re looking for.
                </p>
                <div className="flex flex-col sm:flex-row justify-center gap-4">
                  <a
                    href="sms:6787079385"
                    className="btn-primary inline-flex items-center justify-center gap-2"
                  >
                    <MessageCircle className="h-4 w-4" />
                    Text Emily
                  </a>
                  <Link
                    href="/contact"
                    className="bg-white text-sage px-8 py-4 font-medium tracking-wider text-sm uppercase hover:bg-cream transition-all duration-300 inline-flex items-center justify-center"
                  >
                    Schedule a Consultation
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

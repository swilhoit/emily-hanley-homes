import Link from 'next/link'
import { Search, Users, Home, Calculator, Eye, Camera, FileText, CheckCircle, MessageCircle, ArrowRight } from 'lucide-react'

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

export default function ServicesPage() {
  return (
    <div className="pt-16">
      {/* Hero */}
      <section className="section-padding bg-sage">
        <div className="container-width text-center text-white">
          <h1 className="text-4xl md:text-5xl font-serif mb-4">How We Can Help</h1>
          <p className="text-xl text-white/80 max-w-2xl mx-auto">
            Whether you&apos;re buying your first home, selling your fourth, or just exploring
            options—we&apos;ve got systems to set you up for success.
          </p>
        </div>
      </section>

      {/* What Makes Us Different */}
      <section className="section-padding bg-cream">
        <div className="container-width">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="heading-lg mb-4">What Makes Us Different</h2>
            <p className="body-text">
              We&apos;ve sold 400+ homes. Here&apos;s what we&apos;ve learned actually matters.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-6">
              <div className="text-3xl font-serif text-coral mb-2">2hr</div>
              <h3 className="font-medium text-sage mb-1">Response Time</h3>
              <p className="text-sage-light text-sm">In this market, waiting means losing. We don&apos;t make you wait.</p>
            </div>
            <div className="bg-white p-6">
              <div className="text-3xl font-serif text-coral mb-2">$8K</div>
              <h3 className="font-medium text-sage mb-1">Avg Closing Costs Received</h3>
              <p className="text-sage-light text-sm">We negotiate hard so you keep more money in your pocket.</p>
            </div>
            <div className="bg-white p-6">
              <div className="text-3xl font-serif text-coral mb-2">4 Days</div>
              <h3 className="font-medium text-sage mb-1">Median Days on Market</h3>
              <p className="text-sage-light text-sm">Our listings move fast because we price and prep them right.</p>
            </div>
            <div className="bg-white p-6">
              <div className="text-3xl font-serif text-coral mb-2">$121K</div>
              <h3 className="font-medium text-sage mb-1">Grants for Clients</h3>
              <p className="text-sage-light text-sm">We know the programs and help you access free money.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Buyer Services */}
      <section className="section-padding bg-white">
        <div className="container-width">
          <h2 className="heading-lg mb-2">For Buyers</h2>
          <p className="body-text mb-12 max-w-2xl">
            First time or fifth time, we make buying a home less stressful.
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            {buyerServices.map((service) => (
              <div key={service.title} className="border border-sand p-6">
                <service.icon className="h-8 w-8 text-coral mb-4" />
                <h3 className="text-xl font-serif text-sage mb-2">{service.title}</h3>
                <p className="text-sage-light mb-4">{service.description}</p>
                <p className="text-coral text-sm font-medium">{service.highlight}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Seller Services */}
      <section className="section-padding bg-sand-light">
        <div className="container-width">
          <h2 className="heading-lg mb-2">For Sellers</h2>
          <p className="body-text mb-12 max-w-2xl">
            We have tried-and-true systems to help you receive top dollar.
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            {sellerServices.map((service) => (
              <div key={service.title} className="bg-white p-6">
                <service.icon className="h-8 w-8 text-coral mb-4" />
                <h3 className="text-xl font-serif text-sage mb-2">{service.title}</h3>
                <p className="text-sage-light mb-4">{service.description}</p>
                <p className="text-coral text-sm font-medium">{service.highlight}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Process */}
      <section className="section-padding bg-sage">
        <div className="container-width">
          <h2 className="text-3xl md:text-4xl font-serif text-white text-center mb-4">
            Our Process
          </h2>
          <p className="text-white/70 text-center max-w-2xl mx-auto mb-12">
            Simple, straightforward, no surprises.
          </p>

          <div className="max-w-3xl mx-auto">
            {process.map((step, index) => (
              <div key={step.step} className="flex gap-6 mb-8 last:mb-0">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-coral rounded-full flex items-center justify-center">
                    <span className="text-white font-serif text-xl">{step.step}</span>
                  </div>
                  {index < process.length - 1 && (
                    <div className="w-0.5 h-16 bg-white/20 mx-auto mt-2" />
                  )}
                </div>
                <div className="pt-2">
                  <h3 className="text-xl font-serif text-white mb-2">{step.title}</h3>
                  <p className="text-white/70">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-padding bg-white">
        <div className="container-width">
          <div className="max-w-3xl mx-auto">
            <h2 className="heading-lg text-center mb-12">Common Questions</h2>

            <div className="space-y-6">
              <div className="border-b border-sand pb-6">
                <h3 className="font-medium text-sage mb-2">Do I need to be pre-approved before we start looking?</h3>
                <p className="text-sage-light">
                  Not necessarily! We can start exploring to help you understand what&apos;s out there. But before making an offer,
                  you&apos;ll need pre-approval. We have great lender connections who can help.
                </p>
              </div>
              <div className="border-b border-sand pb-6">
                <h3 className="font-medium text-sage mb-2">How quickly can you show me a house?</h3>
                <p className="text-sage-light">
                  Usually same-day or next-day. We respond within 2 hours and prioritize getting you into homes fast—this market waits for no one.
                </p>
              </div>
              <div className="border-b border-sand pb-6">
                <h3 className="font-medium text-sage mb-2">What if I&apos;m relocating from out of state?</h3>
                <p className="text-sage-light">
                  We do this all the time! Video tours, detailed neighborhood info, and we can handle a lot remotely. Several of our clients bought homes before setting foot in them.
                </p>
              </div>
              <div className="border-b border-sand pb-6">
                <h3 className="font-medium text-sage mb-2">Do you work with investors?</h3>
                <p className="text-sage-light">
                  Yes! Whether it&apos;s your first rental property or your fifteenth, we understand the numbers that matter.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-cream">
        <div className="container-width text-center">
          <h2 className="heading-md mb-4">Let&apos;s Figure Out Your Next Move</h2>
          <p className="body-text max-w-xl mx-auto mb-8">
            No obligation. Just a conversation about what you&apos;re looking for.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="sms:6787079385"
              className="btn-primary inline-flex items-center gap-2"
            >
              <MessageCircle className="h-4 w-4" />
              Text Emily
            </a>
            <Link href="/contact" className="btn-secondary">
              Schedule a Consultation
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

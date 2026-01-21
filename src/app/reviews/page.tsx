import { Star, MessageCircle, Clock, Home, Heart, Trophy } from 'lucide-react'
import Link from 'next/link'

const themes = [
  {
    icon: Clock,
    title: 'Fast & Responsive',
    description: 'Clients consistently mention our quick response times and availability',
    count: '40+'
  },
  {
    icon: Home,
    title: 'Off-Market Access',
    description: 'We help clients find homes before they hit MLS',
    count: '25+'
  },
  {
    icon: Heart,
    title: 'No Pressure',
    description: 'Patient, honest advice—even when it means losing a sale',
    count: '30+'
  },
  {
    icon: Trophy,
    title: 'Won Competitive Offers',
    description: 'Our strategies help clients win in multiple-offer situations',
    count: '35+'
  }
]

const reviews = [
  {
    quote: "I would not have bought my first home if it were not for Lindsay and Emily - They walked me through every step of the process and always had the answer to my many questions! Thank you to you both for all of your help.",
    author: "L. McMullan",
    highlight: "First-time buyer support"
  },
  {
    quote: "Emily is very professional and responsive for her clients. I would highly recommend her. She has appropriate contacts for seamless buying process.",
    author: "J. Wargo",
    highlight: "Professional & connected"
  },
  {
    quote: "Wow! Emily Hanley made selling my condo such a breeze. Under contract in less than a month! She was professional, personable, and had clever problem-solving skills.",
    author: "J.E.",
    highlight: "Fast sale"
  },
  {
    quote: "Lindsay communicates daily, is flexible in schedule, and truly wants all house goals met.",
    author: "C.L.",
    highlight: "Excellent communication"
  },
  {
    quote: "Professional, kind, knowledgeable, responsive, great negotiators and fun to work with.",
    author: "M.W.",
    highlight: "Great negotiators"
  },
  {
    quote: "Emily is resourceful with brokers, inspectors, and contractors to save closing costs.",
    author: "R.H.",
    highlight: "Saves money"
  },
  {
    quote: "Lindsay offered valuable market knowledge, excellent communication, and detailed guidance throughout the entire process.",
    author: "C.F.",
    highlight: "Market expertise"
  },
  {
    quote: "Alicia ensured all questions answered, got best deal, made process seamless.",
    author: "M.C.",
    highlight: "Seamless experience"
  },
  {
    quote: "Lindsay went the extra mile, proactive problem-solving, exceptional communication throughout.",
    author: "N.S.",
    highlight: "Goes above & beyond"
  },
  {
    quote: "Emily sold home for more than expected, responsive and has a positive personality that makes the process enjoyable.",
    author: "C.L.",
    highlight: "Above asking price"
  },
  {
    quote: "Emily thoughtfully researched neighborhoods and helped close on a competitive offer.",
    author: "J.H.",
    highlight: "Neighborhood expert"
  },
  {
    quote: "Team showed great market knowledge, responsive, shared helpful contractor contacts.",
    author: "A.P.",
    highlight: "Full support system"
  },
  {
    quote: "Emily helped negotiate great price on first home in ideal location.",
    author: "M.O.",
    highlight: "First-time success"
  },
  {
    quote: "Emily showed pre-market homes and made competitive offers possible.",
    author: "G.H.",
    highlight: "Off-market access"
  },
  {
    quote: "Professional, timely service with interior designer recommendations and quick sale.",
    author: "D.W.",
    highlight: "Connected network"
  },
  {
    quote: "Emily used connections and made competitive offers resulting in the perfect house.",
    author: "M.T.",
    highlight: "Won competitive offer"
  },
  {
    quote: "Remote service seamless with video showings, knowledgeable and helpful throughout relocation.",
    author: "K.G.",
    highlight: "Remote buying"
  },
  {
    quote: "Patient, kind, video walkthroughs, above-and-beyond service from a great team.",
    author: "A.E.",
    highlight: "Patient & thorough"
  },
  {
    quote: "Knowledgeable, professional, helped secure dream home with multiple offers.",
    author: "M.I.",
    highlight: "Competitive market"
  },
  {
    quote: "Made process fun, found incredible deal, beat 8 other offers.",
    author: "C.L.",
    highlight: "Won against 8 offers"
  },
  {
    quote: "Quick to respond, open and honest, highly recommend to friends and family.",
    author: "E.T.",
    highlight: "Honest advice"
  },
  {
    quote: "Proactive, responsive, attentive, lined up contractors, competitive market expert.",
    author: "E.D.L.",
    highlight: "Full service"
  },
  {
    quote: "Incredibly helpful every step, answered texts immediately, made process less intimidating.",
    author: "S.G.",
    highlight: "Reduced stress"
  },
  {
    quote: "Absolutely incredible every step, the perfect agent for first-time buyers.",
    author: "E.H.",
    highlight: "First-time specialist"
  }
]

export default function ReviewsPage() {
  return (
    <div className="pt-16">
      {/* Hero */}
      <section className="section-padding bg-sage">
        <div className="container-width text-center text-white">
          <h1 className="text-4xl md:text-5xl font-serif mb-4">What Our Clients Say</h1>
          <p className="text-xl text-white/80 max-w-2xl mx-auto mb-6">
            90+ five-star reviews from real clients. Here&apos;s what they have to say.
          </p>
          <div className="flex justify-center gap-1">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="h-8 w-8 text-coral fill-coral" />
            ))}
          </div>
        </div>
      </section>

      {/* Key Themes */}
      <section className="section-padding bg-cream">
        <div className="container-width">
          <h2 className="heading-lg text-center mb-4">What Clients Say Most</h2>
          <p className="body-text text-center max-w-2xl mx-auto mb-12">
            After reading 90+ reviews, these themes come up again and again.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {themes.map((theme) => (
              <div key={theme.title} className="bg-white p-6 text-center">
                <theme.icon className="h-10 w-10 text-coral mx-auto mb-4" />
                <div className="text-3xl font-serif text-sage mb-1">{theme.count}</div>
                <h3 className="font-medium text-sage mb-2">{theme.title}</h3>
                <p className="text-sage-light text-sm">{theme.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Reviews */}
      <section className="section-padding bg-white">
        <div className="container-width">
          <h2 className="heading-lg mb-12">Client Reviews</h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {reviews.map((review, index) => (
              <div key={index} className="bg-cream p-6">
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 text-coral fill-coral" />
                  ))}
                </div>
                <p className="text-sage mb-4 italic">&ldquo;{review.quote}&rdquo;</p>
                <div className="flex items-center justify-between">
                  <span className="text-sage-light text-sm">— {review.author}</span>
                  <span className="text-coral text-xs font-medium bg-coral/10 px-2 py-1">
                    {review.highlight}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-sage">
        <div className="container-width text-center">
          <h2 className="text-3xl font-serif text-white mb-4">Ready to Be Our Next Success Story?</h2>
          <p className="text-white/70 max-w-xl mx-auto mb-8">
            Join 400+ happy clients who found their perfect home with us.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="sms:6787079385"
              className="btn-primary inline-flex items-center gap-2"
            >
              <MessageCircle className="h-4 w-4" />
              Text Emily
            </a>
            <Link
              href="/contact"
              className="bg-white text-sage px-6 py-3 font-medium tracking-wide hover:bg-cream transition-colors"
            >
              Schedule a Consultation
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

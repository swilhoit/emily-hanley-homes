'use client'

import { useState, useEffect } from 'react'
import { Star, MessageCircle, Clock, Home, Heart, Trophy, Quote, Sparkles, ArrowRight } from 'lucide-react'
import Link from 'next/link'

const themes = [
  {
    icon: Clock,
    title: 'Fast & Responsive',
    description: 'Quick response times and always available',
    count: '40+',
    color: 'coral'
  },
  {
    icon: Home,
    title: 'Off-Market Access',
    description: 'Finding homes before they hit MLS',
    count: '25+',
    color: 'sage'
  },
  {
    icon: Heart,
    title: 'No Pressure',
    description: 'Honest advice, even when it means losing a sale',
    count: '30+',
    color: 'coral'
  },
  {
    icon: Trophy,
    title: 'Won Offers',
    description: 'Winning in multiple-offer situations',
    count: '35+',
    color: 'sage'
  }
]

const reviews = [
  {
    quote: "I would not have bought my first home if it were not for Lindsay and Emily - They walked me through every step of the process and always had the answer to my many questions!",
    author: "L. McMullan",
    highlight: "First-time buyer support",
    featured: true
  },
  {
    quote: "Emily is very professional and responsive for her clients. I would highly recommend her. She has appropriate contacts for seamless buying process.",
    author: "J. Wargo",
    highlight: "Professional & connected"
  },
  {
    quote: "Wow! Emily Hanley made selling my condo such a breeze. Under contract in less than a month! She was professional, personable, and had clever problem-solving skills.",
    author: "J.E.",
    highlight: "Fast sale",
    featured: true
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
    highlight: "Market expertise",
    featured: true
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
    highlight: "Full support system",
    featured: true
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
    highlight: "Remote buying",
    featured: true
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
    highlight: "Won against 8 offers",
    featured: true
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

function ReviewCard({ review, index }: { review: typeof reviews[0]; index: number }) {
  const isFeatured = review.featured

  return (
    <div
      className={`group relative ${isFeatured ? 'md:row-span-2' : ''}`}
      style={{ animationDelay: `${index * 50}ms` }}
    >
      <div className={`h-full p-6 md:p-8 transition-all duration-500 ${
        isFeatured
          ? 'bg-sage text-white'
          : 'bg-white hover:shadow-soft hover:-translate-y-1'
      }`}>
        {/* Stars */}
        <div className="flex gap-1 mb-4">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              className={`h-4 w-4 ${isFeatured ? 'text-coral fill-coral' : 'text-coral fill-coral'}`}
            />
          ))}
        </div>

        {/* Quote Icon for Featured */}
        {isFeatured && (
          <Quote className="absolute top-6 right-6 w-12 h-12 text-white/10" />
        )}

        {/* Quote */}
        <p className={`mb-6 leading-relaxed ${
          isFeatured
            ? 'text-lg md:text-xl font-light'
            : 'text-sage-light'
        }`}>
          &ldquo;{review.quote}&rdquo;
        </p>

        {/* Footer */}
        <div className="flex items-center justify-between mt-auto">
          <span className={`text-sm font-medium ${isFeatured ? 'text-white/80' : 'text-sage'}`}>
            — {review.author}
          </span>
          <span className={`text-xs font-medium px-3 py-1 rounded-full ${
            isFeatured
              ? 'bg-coral/20 text-coral'
              : 'bg-coral/10 text-coral'
          }`}>
            {review.highlight}
          </span>
        </div>
      </div>
    </div>
  )
}

export default function ReviewsPage() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <div className="pt-16 overflow-hidden">
      {/* Hero */}
      <section className="relative min-h-[60vh] flex items-center bg-sage overflow-hidden">
        {/* Decorative Elements */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 right-20 w-64 h-64 rounded-full bg-coral blur-3xl" />
          <div className="absolute bottom-10 left-20 w-96 h-96 rounded-full bg-white blur-3xl" />
        </div>

        <div className="container-width px-6 md:px-8 py-20 relative z-10">
          <div className={`max-w-4xl mx-auto text-center transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            <span className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm text-white/90 px-4 py-2 text-sm font-medium tracking-wide uppercase mb-8">
              <Sparkles className="w-4 h-4" />
              90+ Five-Star Reviews
            </span>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif text-white mb-6 leading-tight">
              What Our Clients
              <span className="block text-coral">Have to Say</span>
            </h1>

            <p className="text-xl text-white/80 max-w-2xl mx-auto mb-8">
              Don&apos;t just take our word for it. Here&apos;s what real clients say about working with us.
            </p>

            {/* Star Rating Display */}
            <div className="flex justify-center items-center gap-2">
              <div className="flex gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-8 w-8 text-coral fill-coral" />
                ))}
              </div>
              <span className="text-white/80 text-lg ml-2">5.0 Average Rating</span>
            </div>
          </div>
        </div>

        {/* Bottom Wave */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
            <path d="M0 120L60 105C120 90 240 60 360 50C480 40 600 50 720 60C840 70 960 80 1080 80C1200 80 1320 70 1380 65L1440 60V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" fill="#F5F1EB"/>
          </svg>
        </div>
      </section>

      {/* Key Themes */}
      <section className="py-16 md:py-20 bg-cream">
        <div className="container-width px-6 md:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-serif text-sage mb-3">What Clients Say Most</h2>
            <p className="text-sage-light">Themes that come up again and again in our reviews</p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            {themes.map((theme, index) => (
              <div
                key={theme.title}
                className="group bg-white p-6 md:p-8 text-center hover:shadow-soft transition-all duration-300 hover:-translate-y-1"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className={`w-14 h-14 rounded-full mx-auto mb-4 flex items-center justify-center transition-all duration-300 ${
                  theme.color === 'coral'
                    ? 'bg-coral/10 group-hover:bg-coral'
                    : 'bg-sage/10 group-hover:bg-sage'
                }`}>
                  <theme.icon className={`h-7 w-7 transition-colors duration-300 ${
                    theme.color === 'coral'
                      ? 'text-coral group-hover:text-white'
                      : 'text-sage group-hover:text-white'
                  }`} />
                </div>
                <div className="text-3xl md:text-4xl font-serif text-sage mb-2">{theme.count}</div>
                <h3 className="font-medium text-sage mb-1 text-sm md:text-base">{theme.title}</h3>
                <p className="text-sage-light text-xs md:text-sm">{theme.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Masonry Reviews Grid */}
      <section className="section-padding bg-cream">
        <div className="container-width px-6 md:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-serif text-sage mb-4">Client Stories</h2>
            <p className="text-sage-light max-w-2xl mx-auto">
              Real reviews from real clients who trusted us with their biggest decision.
            </p>
          </div>

          {/* Masonry Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {reviews.map((review, index) => (
              <ReviewCard key={index} review={review} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Video Testimonial Placeholder */}
      <section className="section-padding bg-white">
        <div className="container-width px-6 md:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <span className="inline-block bg-coral/10 text-coral px-4 py-2 text-sm font-medium tracking-wide uppercase mb-6">
              Featured Story
            </span>
            <h2 className="text-3xl md:text-4xl font-serif text-sage mb-6">
              Hear It From Our Clients
            </h2>

            {/* Video Placeholder */}
            <div className="relative aspect-video bg-sage/10 flex items-center justify-center overflow-hidden group cursor-pointer">
              <div className="absolute inset-0 bg-gradient-to-br from-sage/20 to-coral/10" />
              <div className="relative z-10 text-center">
                <div className="w-20 h-20 rounded-full bg-coral flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-8 h-8 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div>
                <p className="text-sage-light">Video testimonials coming soon</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Google Reviews Link */}
      <section className="py-12 bg-cream">
        <div className="container-width px-6 md:px-8">
          <div className="bg-white p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="text-xl md:text-2xl font-serif text-sage mb-2">
                See All Our Reviews on Google
              </h3>
              <p className="text-sage-light">
                90+ verified five-star reviews from real clients
              </p>
            </div>
            <a
              href="https://www.google.com/search?q=emily+hanley+homes+reviews"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-coral font-medium hover:text-coral-dark transition-colors whitespace-nowrap"
            >
              Read on Google
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
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
              Ready to Be Our Next
              <span className="block text-coral">Success Story?</span>
            </h2>
            <p className="text-xl text-white/70 mb-10">
              Join 400+ happy clients who found their perfect home with us.
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
      </section>
    </div>
  )
}

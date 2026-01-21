'use client'

import Link from 'next/link'
import Image from 'next/image'
import { Heart, Home, Clock, Star, MessageCircle, Instagram, Mail, Phone, Quote, ArrowRight, Sparkles } from 'lucide-react'
import { useState, useEffect } from 'react'

const teamMembers = [
  {
    name: 'Emily Hanley',
    role: 'Founder & Lead Agent',
    image: '/images/team-emily.jpg',
    bio: `I grew up in East Cobb, Metro Atlanta, and I'm a proud UGA grad. After years in financial technology sales, I realized I wanted something more personal—a way to actually help people through one of the biggest decisions of their lives.

Six years and 100+ homes later, I still get excited when I find the perfect home for a client. I'll be the first to tell you if a house isn't right—even if it means losing the sale. Your trust matters more than my commission.`,
    highlights: [
      'East Cobb native—I know these neighborhoods inside out',
      'Will text you back within 2 hours (seriously, try me)',
      'Already scoping the neighborhood on Google Street View before we tour',
      'Send me your holiday cards—I actually read them!'
    ],
    funFacts: [
      'Recent adventures: Machu Picchu, Italian Dolomites, Switzerland',
      'Coffee order: Oat milk latte, extra shot',
      'Guilty pleasure: HGTV binges'
    ],
    email: 'emily@emilyhanleyhomes.com',
    instagram: '@emilyhanley_homes',
    phone: '678-707-9385',
    accent: 'coral'
  },
  {
    name: 'Lindsay Young',
    role: 'Lead Agent',
    image: '/images/team-lindsay.jpg',
    bio: `I'm a Chicago transplant who fell in love with Atlanta's neighborhoods and never looked back. With a Finance and Real Estate degree from Alabama (Roll Tide!), I bring 10+ years of Atlanta experience to every showing.

My philosophy? Honesty, integrity, hard work, and patience. I won't rush you into a decision or sugarcoat issues with a property. I'd rather find you the RIGHT home than the RIGHT NOW home.`,
    highlights: [
      '10+ years navigating the Atlanta market',
      'Finance background = I understand the numbers',
      'Pricing, staging, and marketing strategist',
      'Your advocate in competitive offer situations'
    ],
    funFacts: [
      'Proud bulldog mom to Tubs',
      'Fitness enthusiast (ask me about my favorite Atlanta trails)',
      'Will debate Alabama football with anyone'
    ],
    instagram: '@lnyoung1',
    accent: 'sage'
  },
  {
    name: 'Alicia Bechtel',
    role: 'Executive Assistant & Agent',
    image: '/images/team-alicia.jpg',
    bio: `I'm a Georgia native who literally grew up flipping houses with my family—so I've been in this industry since before I knew it was a career. With 200+ transactions under my belt, I'm the one making sure nothing falls through the cracks.

I'm your behind-the-scenes support, keeping the process organized so you can focus on the exciting stuff: finding your dream home.`,
    highlights: [
      'Grew up flipping houses—renovation is in my DNA',
      '200+ transactions of experience',
      'Business management background',
      'The glue that keeps everything running smoothly'
    ],
    funFacts: [
      'Sigma Beta Delta scholar',
      'Organization enthusiast',
      'Probably already sent you the next step before you asked'
    ],
    email: 'alicia@emilyhanleyhomes.com',
    instagram: '@licilauren',
    accent: 'coral'
  }
]

const stats = [
  { value: '400+', label: 'Homes Sold', description: 'Experience you can trust' },
  { value: '21', label: 'Years Combined', description: 'In Atlanta real estate' },
  { value: '2hr', label: 'Response Time', description: 'Guaranteed' },
  { value: '90+', label: 'Five-Star Reviews', description: 'From real clients' },
]

export default function AboutPage() {
  const [activeTeamMember, setActiveTeamMember] = useState(0)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <div className="pt-16 overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center bg-sage overflow-hidden">
        {/* Decorative Elements */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-64 h-64 rounded-full bg-coral blur-3xl" />
          <div className="absolute bottom-20 right-10 w-96 h-96 rounded-full bg-white blur-3xl" />
        </div>

        <div className="container-width px-6 md:px-8 py-20 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              <span className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm text-white/90 px-4 py-2 text-sm font-medium tracking-wide uppercase mb-8">
                <Sparkles className="w-4 h-4" />
                Meet Our Team
              </span>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif text-white mb-6 leading-tight">
                Real People Who
                <span className="block text-coral">Actually Care</span>
              </h1>

              <p className="text-xl md:text-2xl text-white/80 font-light leading-relaxed max-w-2xl mx-auto">
                We&apos;re not a faceless brokerage. We&apos;re three people who will tell you the truth—even when it costs us a sale.
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Wave */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
            <path d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 85C1200 90 1320 90 1380 90L1440 90V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" fill="#FFFBF7"/>
          </svg>
        </div>
      </section>

      {/* Our Philosophy */}
      <section className="section-padding bg-warm-white">
        <div className="container-width">
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-serif text-sage mb-6 leading-tight">
                  Business Relationally,
                  <span className="text-coral block">Not Transactionally</span>
                </h2>

                <div className="space-y-4 text-sage-light leading-relaxed">
                  <p>
                    Buying or selling a home is typically one of the biggest transactions you&apos;ll make
                    in your lifetime. We get that. Which is why we don&apos;t treat you like a number or
                    a commission check.
                  </p>
                  <p>
                    With a combined 21 years in the Atlanta real estate market, we&apos;ve seen it all.
                    The dream homes that turned into nightmares. The &ldquo;fixer-uppers&rdquo; that were actually
                    money pits. The &ldquo;overpriced&rdquo; houses that were actually steals.
                  </p>
                  <p>
                    We want to be your trusted advisor—not just for this transaction, but for all
                    the life that happens after closing.
                  </p>
                </div>
              </div>

              <div className="relative">
                <div className="bg-cream p-8 md:p-10 relative">
                  <Quote className="absolute -top-4 -left-4 w-12 h-12 text-coral/20" />
                  <p className="text-lg md:text-xl font-serif text-sage italic leading-relaxed">
                    &ldquo;Need a plumber? We&apos;ve got one. Wondering about that new development in your neighborhood? Let&apos;s chat. Want to send us your remodeling pics? Please do.&rdquo;
                  </p>
                  <div className="mt-6 flex items-center gap-3">
                    <div className="w-12 h-12 rounded-full bg-coral/10 flex items-center justify-center">
                      <Heart className="w-5 h-5 text-coral" />
                    </div>
                    <div>
                      <p className="font-medium text-sage">Emily Hanley</p>
                      <p className="text-sm text-sage-light">Founder</p>
                    </div>
                  </div>
                </div>
                {/* Decorative corner */}
                <div className="absolute -bottom-3 -right-3 w-full h-full border-2 border-coral/20 -z-10" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-sage">
        <div className="container-width px-6 md:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div
                key={stat.label}
                className="text-center"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="text-4xl md:text-5xl lg:text-6xl font-serif text-coral mb-2">
                  {stat.value}
                </div>
                <div className="text-white font-medium mb-1">{stat.label}</div>
                <div className="text-white/60 text-sm">{stat.description}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="section-padding bg-cream">
        <div className="container-width">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif text-sage mb-4">
              Meet the Team
            </h2>
            <p className="text-lg text-sage-light max-w-2xl mx-auto">
              Real people, real expertise, real commitment to finding you the right home.
            </p>
          </div>

          {/* Team Member Selector - Mobile */}
          <div className="flex justify-center gap-3 mb-12 md:hidden">
            {teamMembers.map((member, index) => (
              <button
                key={member.name}
                onClick={() => setActiveTeamMember(index)}
                className={`w-16 h-16 rounded-full overflow-hidden border-3 transition-all duration-300 ${
                  activeTeamMember === index
                    ? 'border-coral scale-110 shadow-lg'
                    : 'border-transparent opacity-60'
                }`}
              >
                <div className="w-full h-full bg-sage/20 flex items-center justify-center">
                  <span className="text-xl font-serif text-sage">{member.name[0]}</span>
                </div>
              </button>
            ))}
          </div>

          {/* Team Cards */}
          <div className="space-y-24">
            {teamMembers.map((member, index) => (
              <div
                key={member.name}
                className={`grid md:grid-cols-12 gap-8 md:gap-12 items-start ${
                  index % 2 === 1 ? 'md:flex-row-reverse' : ''
                }`}
              >
                {/* Photo Column */}
                <div className={`md:col-span-5 ${index % 2 === 1 ? 'md:order-2' : ''}`}>
                  <div className="relative group">
                    <div className="aspect-[4/5] bg-sage/10 overflow-hidden">
                      <div className="w-full h-full bg-gradient-to-br from-sage/20 to-coral/10 flex items-center justify-center">
                        <span className="text-8xl font-serif text-sage/30">{member.name[0]}</span>
                      </div>
                    </div>
                    {/* Accent bar */}
                    <div className={`absolute -bottom-3 ${index % 2 === 0 ? '-right-3' : '-left-3'} w-2/3 h-3 ${member.accent === 'coral' ? 'bg-coral' : 'bg-sage'}`} />
                  </div>
                </div>

                {/* Content Column */}
                <div className={`md:col-span-7 ${index % 2 === 1 ? 'md:order-1' : ''}`}>
                  <div className="flex items-center gap-3 mb-2">
                    <h3 className="text-3xl md:text-4xl font-serif text-sage">{member.name}</h3>
                  </div>
                  <p className={`text-lg font-medium mb-6 ${member.accent === 'coral' ? 'text-coral' : 'text-sage-light'}`}>
                    {member.role}
                  </p>

                  <div className="text-sage-light whitespace-pre-line mb-8 leading-relaxed">
                    {member.bio}
                  </div>

                  {/* Highlights Grid */}
                  <div className="bg-white p-6 mb-6">
                    <h4 className="text-sm font-medium text-sage uppercase tracking-wider mb-4">
                      What I Bring to the Table
                    </h4>
                    <div className="grid sm:grid-cols-2 gap-3">
                      {member.highlights.map((highlight, i) => (
                        <div key={i} className="flex items-start gap-3">
                          <Star className={`h-4 w-4 flex-shrink-0 mt-1 ${member.accent === 'coral' ? 'text-coral' : 'text-sage'}`} />
                          <span className="text-sage-light text-sm">{highlight}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Fun Facts */}
                  <div className="mb-6">
                    <h4 className="text-sm font-medium text-sage uppercase tracking-wider mb-3">
                      Fun Facts
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {member.funFacts.map((fact, i) => (
                        <span
                          key={i}
                          className="inline-block bg-cream px-4 py-2 text-sage-light text-sm rounded-full"
                        >
                          {fact}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Contact Links */}
                  <div className="flex flex-wrap gap-4">
                    {member.phone && (
                      <a
                        href={`tel:${member.phone}`}
                        className="inline-flex items-center gap-2 text-sage hover:text-coral transition-colors text-sm"
                      >
                        <Phone className="h-4 w-4" />
                        {member.phone}
                      </a>
                    )}
                    {member.email && (
                      <a
                        href={`mailto:${member.email}`}
                        className="inline-flex items-center gap-2 text-sage hover:text-coral transition-colors text-sm"
                      >
                        <Mail className="h-4 w-4" />
                        Email
                      </a>
                    )}
                    {member.instagram && (
                      <a
                        href={`https://instagram.com/${member.instagram.replace('@', '')}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-sage hover:text-coral transition-colors text-sm"
                      >
                        <Instagram className="h-4 w-4" />
                        {member.instagram}
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="section-padding bg-white">
        <div className="container-width">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-serif text-sage mb-4">What We Stand For</h2>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="group">
                <div className="bg-cream p-8 h-full transition-all duration-300 group-hover:shadow-soft group-hover:-translate-y-1">
                  <div className="w-14 h-14 rounded-full bg-coral/10 flex items-center justify-center mb-6 group-hover:bg-coral group-hover:scale-110 transition-all duration-300">
                    <Heart className="h-7 w-7 text-coral group-hover:text-white transition-colors duration-300" />
                  </div>
                  <h3 className="text-xl font-serif text-sage mb-3">We Care Long-Term</h3>
                  <p className="text-sage-light">
                    We&apos;re here after closing. Send us holiday cards. We actually read them.
                    Your home journey doesn&apos;t end at the closing table.
                  </p>
                </div>
              </div>

              <div className="group">
                <div className="bg-cream p-8 h-full transition-all duration-300 group-hover:shadow-soft group-hover:-translate-y-1">
                  <div className="w-14 h-14 rounded-full bg-coral/10 flex items-center justify-center mb-6 group-hover:bg-coral group-hover:scale-110 transition-all duration-300">
                    <Home className="h-7 w-7 text-coral group-hover:text-white transition-colors duration-300" />
                  </div>
                  <h3 className="text-xl font-serif text-sage mb-3">400+ Homes Sold</h3>
                  <p className="text-sage-light">
                    Experience means we spot issues others miss. We&apos;ve seen what goes wrong
                    and know how to protect you from costly mistakes.
                  </p>
                </div>
              </div>

              <div className="group">
                <div className="bg-cream p-8 h-full transition-all duration-300 group-hover:shadow-soft group-hover:-translate-y-1">
                  <div className="w-14 h-14 rounded-full bg-coral/10 flex items-center justify-center mb-6 group-hover:bg-coral group-hover:scale-110 transition-all duration-300">
                    <Clock className="h-7 w-7 text-coral group-hover:text-white transition-colors duration-300" />
                  </div>
                  <h3 className="text-xl font-serif text-sage mb-3">2-Hour Response</h3>
                  <p className="text-sage-light">
                    In this market, speed matters. We deliver. Text us anytime—we&apos;ll
                    get back to you before your coffee gets cold.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Brokerage */}
      <section className="section-padding bg-cream">
        <div className="container-width">
          <div className="max-w-3xl mx-auto">
            <div className="bg-white p-8 md:p-12 text-center relative overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-coral via-sage to-coral" />

              <h2 className="text-2xl md:text-3xl font-serif text-sage mb-4">Proudly With Bolst</h2>
              <p className="text-sage-light mb-6 leading-relaxed">
                Our brokerage, Bolst, is a B Corp that believes in using success in real estate
                to give back to the community. All of our vendor partners donate to local charities
                with every transaction, and our broker, Cathryn Childs, is a licensed attorney
                with years of Atlanta real estate law experience.
              </p>
              <a
                href="https://bolst.homes"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-coral font-medium hover:text-coral-dark transition-colors"
              >
                Learn more about Bolst
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
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

        <div className="container-width relative z-10">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif text-white mb-6">
              Ready to Chat?
            </h2>
            <p className="text-xl text-white/70 mb-10">
              No pressure, no sales pitch. Just real talk about what you&apos;re looking for.
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

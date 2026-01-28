import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight, MessageCircle, Home, Map, Bell, Users, Star, CheckCircle, Sparkles, TrendingUp, Heart, Shield } from 'lucide-react'

const stats = [
  { value: '400+', label: 'Homes Sold', description: 'Metro Atlanta' },
  { value: '$475K+', label: 'Saved for Buyers', description: 'In 2025' },
  { value: '110+', label: '5-Star Google Reviews', description: 'And Counting' },
  { value: '54', label: 'Homes Sold', description: 'In 2025' },
]

const testimonials = [
  {
    quote: "Emily sold my home for more than expected, responsive and has a positive personality that makes the process enjoyable.",
    author: "C.L.",
    type: "Seller"
  },
  {
    quote: "I would not have bought my first home if it were not for Lindsay and Emily - They walked me through every step of the process.",
    author: "L. McMullan",
    type: "First-Time Buyer"
  },
  {
    quote: "Professional, kind, knowledgeable, responsive, great negotiators and fun to work with.",
    author: "M.W.",
    type: "Buyer"
  }
]

const team = [
  {
    name: 'Emily Hanley',
    role: 'Founder & Agent',
    description: 'Over 6 years experience, 100+ homes sold. Your trusted advisor from consult to closing.',
    image: '/images/emily-headshot.jpg',
  },
  {
    name: 'Alicia Bechtel',
    role: 'Executive Assistant & Agent',
    description: 'Georgia native with 200+ transactions. Here to support you every step of the way.',
    image: '/images/alicia-headshot.jpg',
  },
  {
    name: 'Lindsay Young',
    role: 'Lead Agent',
    description: '10+ years Atlanta experience. Finance & Real Estate specialist focused on your WIN.',
    image: '/images/lindsay-headshot.jpg',
  },
]

const features = [
  {
    title: 'Buy or Bye',
    description: 'Swipe through homes to discover your style. Modern? Craftsman? We\'ll learn what makes you say "that\'s the one."',
    icon: Sparkles,
    href: '/buy-or-bye',
    cta: 'Take the Quiz'
  },
  {
    title: '$700K Showdown',
    description: 'Compare 3 homes at the same price in different neighborhoods. Updated quarterly with real listings.',
    icon: TrendingUp,
    href: '/showdown',
    cta: 'See the Showdown'
  },
  {
    title: 'Emily\'s Atlanta Map',
    description: 'My favorite coffee shops, restaurants, kid spots, and hidden gems. The insider\'s guide to Metro Atlanta.',
    icon: Map,
    href: '/neighborhoods',
    cta: 'Explore the Map'
  },
  {
    title: 'Off-Market Alerts',
    description: 'Get homes before they hit MLS. We have access to off-market listings most buyers never see.',
    icon: Bell,
    href: '/off-market',
    cta: 'Sign Up for Alerts'
  },
  {
    title: 'Atlanta Neighborhoods',
    description: 'A breakdown of the different areas around town. Find the neighborhood that fits your lifestyle.',
    icon: Home,
    href: '/neighborhoods',
    cta: 'Explore Areas'
  },
  {
    title: 'Meet the Team',
    description: 'We\'re not a big corporate agency. We\'re three people who genuinely care about getting you into the right home.',
    icon: Heart,
    href: '/about',
    cta: 'About Us'
  },
]

const differentiators = [
  {
    title: 'Google Street View Before Showings',
    description: 'We drive the neighborhood on Street View before you waste time on a showing. If the house backs up to a highway, you\'ll know before we ever get in the car.',
  },
  {
    title: '2-Hour Response Time',
    description: 'In this market, homes go fast. We respond in 2 hours or less—because waiting until Monday might mean losing your dream home.',
  },
  {
    title: 'Honest Advice (Even When It Costs Us)',
    description: 'If a house isn\'t right for you, we\'ll tell you. Even if it means losing the sale. We\'d rather have your trust than your commission.',
  },
  {
    title: 'Off-Market Access',
    description: 'With 400+ transactions, we know people. We can find homes before they hit MLS—giving you a real competitive advantage.',
  },
]

export default function HomePage() {
  return (
    <>
      {/* Hero Section - Full-width Home Image with Overlay */}
      <section className="relative min-h-screen overflow-hidden">
        {/* Background Image - Living Room */}
        <div className="absolute inset-0">
          <Image
            src="/images/living-room.jpg"
            alt="Beautiful Atlanta home interior"
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
          {/* Sophisticated gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-sage/95 via-sage/70 to-sage/30" />
          <div className="absolute inset-0 bg-gradient-to-t from-sage/60 via-transparent to-sage/20" />
        </div>

        <div className="relative z-10 container-width px-6 md:px-8 lg:px-12">
          <div className="min-h-screen flex items-center pt-20 pb-16">
            <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center w-full">

              {/* Left Content - Takes 6 columns */}
              <div className="lg:col-span-6 xl:col-span-5">
                {/* Eyebrow */}
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-12 h-px bg-coral" />
                  <span className="text-coral text-sm tracking-[0.2em] uppercase font-medium">
                    Metro Atlanta Real Estate
                  </span>
                </div>

                {/* Main Headline */}
                <h1 className="text-[2.75rem] md:text-[3.5rem] lg:text-[4rem] xl:text-[4.5rem] font-serif text-white leading-[1.05] mb-8 tracking-[-0.02em]">
                  Find your place in{' '}
                  <span className="text-coral">Atlanta.</span>
                </h1>

                {/* Subheadline */}
                <p className="text-lg md:text-xl text-white/80 leading-relaxed mb-10 max-w-lg">
                  No pressure or sales pitch. Just honest guidance from a team who won&apos;t stop working until you&apos;re where you need to be.
                </p>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 mb-12">
                  <a
                    href="sms:6787079385?body=Hi Emily! Can you check out this home for me?"
                    className="group inline-flex items-center justify-center gap-3 bg-coral text-white px-8 py-4 text-sm font-medium tracking-wider uppercase hover:bg-coral-dark transition-all duration-300"
                  >
                    <MessageCircle className="w-4 h-4" />
                    Get Feedback on a Listing
                  </a>
                  <Link
                    href="/contact"
                    className="group inline-flex items-center justify-center gap-2 px-8 py-4 text-sm font-medium tracking-wider uppercase text-white border-2 border-white/30 hover:bg-white/10 hover:border-white/50 transition-all duration-300"
                  >
                    Get in Touch
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>

                {/* Stats Row */}
                <div className="flex flex-wrap gap-x-8 gap-y-4 pt-8 border-t border-white/20">
                  <div>
                    <span className="block text-3xl md:text-4xl font-serif text-white">400+</span>
                    <span className="text-xs text-white/60 uppercase tracking-wider">Homes Sold</span>
                  </div>
                  <div>
                    <span className="block text-3xl md:text-4xl font-serif text-white">$475K+</span>
                    <span className="text-xs text-white/60 uppercase tracking-wider">Saved for Buyers in 2025</span>
                  </div>
                  <div>
                    <span className="block text-3xl md:text-4xl font-serif text-white">110+</span>
                    <span className="text-xs text-white/60 uppercase tracking-wider">5-Star Google Reviews</span>
                  </div>
                </div>
              </div>

              {/* Right - Team Photo Card */}
              <div className="hidden lg:flex lg:col-span-6 xl:col-span-7 justify-center xl:justify-end items-center">
                <div className="relative w-[460px] xl:w-[500px]">
                  {/* Team Image */}
                  <div className="relative aspect-[1/1] w-full overflow-hidden shadow-2xl">
                    <Image
                      src="/images/team-hero.png"
                      alt="Emily, Alicia, and Lindsay - Your Atlanta real estate team"
                      fill
                      priority
                      sizes="500px"
                      className="object-cover object-[center_20%]"
                    />
                  </div>

                  {/* Floating Card */}
                  <Link
                    href="/about"
                    className="absolute -bottom-4 -left-4 bg-white/95 backdrop-blur-sm px-5 py-3 shadow-soft-lg flex items-center gap-3 hover:bg-white transition-all group"
                  >
                    <div className="w-8 h-8 bg-coral/10 rounded-full flex items-center justify-center">
                      <Users className="w-4 h-4 text-coral" />
                    </div>
                    <span className="text-sage text-sm font-medium">Meet the Team</span>
                    <ArrowRight className="w-3.5 h-3.5 text-coral group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
          <span className="text-white/50 text-xs tracking-widest uppercase">Scroll</span>
          <div className="w-px h-12 bg-gradient-to-b from-white/40 to-transparent" />
        </div>
      </section>

      {/* Approach Section */}
      <section className="section-padding bg-warm-white">
        <div className="container-width">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left Content */}
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="accent-line" />
                <span className="text-coral font-medium tracking-wider uppercase text-sm">
                  Our Approach
                </span>
              </div>
              <h2 className="heading-xl mb-6">
                Business relationally,<br />
                <span className="text-coral">not transactionally.</span>
              </h2>
              <p className="body-large mb-6">
                Working with our team means you&apos;ve always got someone in your corner. Buying or selling solo, with a partner, with your whole family weighing in—we make room for everyone&apos;s voice.
              </p>
              <p className="body-text mb-6">
                We&apos;ve had parents at inspections, coworkers at showings, and spreadsheets full of questions sent from the friend group chat. Your people become our people and we welcome everyone.
              </p>
              <p className="body-text mb-8">
                If you&apos;re nervous about next steps? Don&apos;t be. We&apos;ve done this hundreds of times, we have a trusted vendor for everything, and we know exactly how to walk you through it.
              </p>
              <Link
                href="/about"
                className="inline-flex items-center gap-2 text-coral font-medium hover:gap-3 transition-all duration-300"
              >
                More About Us
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            {/* Right Image */}
            <div className="relative">
              <div className="aspect-[4/5] w-full relative overflow-hidden">
                <Image
                  src="/images/living-room.jpg"
                  alt="Beautiful Atlanta home interior"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>
              {/* Floating Card */}
              <div className="absolute -bottom-8 -left-8 bg-white p-8 shadow-soft-lg max-w-xs">
                <p className="text-sage-light text-sm italic mb-4">
                  &ldquo;We pride ourselves in providing you with an unmatched real estate experience.&rdquo;
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-coral/10 rounded-full flex items-center justify-center">
                    <Shield className="w-5 h-5 text-coral" />
                  </div>
                  <div>
                    <span className="font-medium text-sage text-sm">400+ homes sold</span>
                    <span className="block text-sage-light text-xs">Excellence as our standard</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Banner */}
      <section className="py-20 bg-sage relative overflow-hidden">
        {/* Decorative Elements */}
        <div className="absolute top-0 left-0 w-64 h-64 bg-coral/10 rounded-full -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-coral/5 rounded-full translate-x-1/3 translate-y-1/3" />

        <div className="container-width relative z-10">
          <div className="text-center mb-12">
            <span className="text-coral font-medium tracking-wider uppercase text-sm">
              2025 Numbers That Matter to Us
            </span>
            <h2 className="text-3xl md:text-4xl font-serif text-white mt-4">
              The Numbers Don&apos;t Lie
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-5xl md:text-6xl font-serif text-coral font-light">$3.3M</div>
              <div className="text-sm text-white/70 mt-2 uppercase tracking-wider">Off-Market Sales</div>
              <div className="text-xs text-white/50 mt-1">Before They Hit MLS</div>
            </div>
            <div className="text-center">
              <div className="text-5xl md:text-6xl font-serif text-coral font-light">45K</div>
              <div className="text-sm text-white/70 mt-2 uppercase tracking-wider">Social Media Views</div>
              <div className="text-xs text-white/50 mt-1">On Our Listings</div>
            </div>
            <div className="text-center">
              <div className="text-5xl md:text-6xl font-serif text-coral font-light">54</div>
              <div className="text-sm text-white/70 mt-2 uppercase tracking-wider">Homes Sold</div>
              <div className="text-xs text-white/50 mt-1">This Year</div>
            </div>
            <div className="text-center">
              <div className="text-5xl md:text-6xl font-serif text-coral font-light">$327K</div>
              <div className="text-sm text-white/70 mt-2 uppercase tracking-wider">Negotiated Under</div>
              <div className="text-xs text-white/50 mt-1">Ask Price</div>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Features Grid */}
      <section className="section-padding bg-cream">
        <div className="container-width">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-3 mb-6">
              <div className="accent-line-center" />
            </div>
            <h2 className="heading-xl">Choose Your Own Adventure</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature) => (
              <div key={feature.title} className="feature-item">
                <div className="icon-wrapper mb-6">
                  <feature.icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-serif text-sage mb-3">{feature.title}</h3>
                <p className="text-sage-light text-sm mb-6 leading-relaxed">
                  {feature.description}
                </p>
                <Link
                  href={feature.href}
                  className="inline-flex items-center gap-2 text-coral font-medium text-sm group-hover:gap-3 transition-all duration-300"
                >
                  {feature.cta}
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How We're Different */}
      <section className="section-padding bg-white">
        <div className="container-width">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Left Content */}
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="accent-line" />
                <span className="text-coral font-medium tracking-wider uppercase text-sm">
                  Our Difference
                </span>
              </div>
              <h2 className="heading-xl mb-8">
                We do things<br />
                <span className="text-coral">differently.</span>
              </h2>

              <div className="space-y-8">
                {differentiators.map((item, index) => (
                  <div key={item.title} className="flex gap-5">
                    <div className="w-10 h-10 bg-coral rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-white font-medium text-sm">{index + 1}</span>
                    </div>
                    <div>
                      <h3 className="font-medium text-sage mb-2">{item.title}</h3>
                      <p className="text-sage-light text-sm leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right - What We're Not Card */}
            <div className="lg:mt-20">
              <div className="bg-cream p-10">
                <h3 className="heading-md mb-6">What We&apos;re Not</h3>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <span className="text-coral text-lg">✕</span>
                    <span className="text-sage-light">We&apos;re not pushy salespeople trying to close a deal</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-coral text-lg">✕</span>
                    <span className="text-sage-light">We won&apos;t ghost you after closing</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-coral text-lg">✕</span>
                    <span className="text-sage-light">We don&apos;t do &ldquo;good enough&rdquo;—only the right fit</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-coral text-lg">✕</span>
                    <span className="text-sage-light">We&apos;re not too busy to answer your &ldquo;dumb&rdquo; questions</span>
                  </li>
                </ul>

                <div className="mt-8 pt-8 border-t border-sand">
                  <h4 className="font-medium text-sage mb-3 flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-coral" />
                    What We Are
                  </h4>
                  <p className="text-sage-light text-sm leading-relaxed">
                    Three people who genuinely love helping people find the right home.
                    We&apos;re here for the life that happens after closing—send us your holiday cards!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="section-padding bg-sand-light">
        <div className="container-width">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-3 mb-6">
              <div className="accent-line-center" />
            </div>
            <h2 className="heading-xl mb-4">Meet Your Team</h2>
            <p className="body-large max-w-2xl mx-auto">
              We&apos;re not a corporate machine. We&apos;re real people who remember your name,
              your kids&apos; names, and what matters most to you in a home.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {team.map((member) => (
              <div key={member.name} className="team-member bg-white">
                <div className="relative w-full aspect-[3/4] overflow-hidden bg-sage/5 mb-6">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover object-top"
                  />
                </div>
                <div className="p-8 text-center">
                  <h3 className="text-xl font-serif text-sage mb-1">{member.name}</h3>
                  <p className="text-coral text-sm mb-4">{member.role}</p>
                  <p className="text-sage-light text-sm">{member.description}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link href="/about" className="btn-outline-dark">
              Learn More About Us
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section-padding bg-white">
        <div className="container-width">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-3 mb-6">
              <div className="accent-line-center" />
            </div>
            <h2 className="heading-xl mb-4">What People Say</h2>
            <p className="body-large max-w-2xl mx-auto">
              110+ five-star Google reviews can&apos;t be wrong. Here&apos;s what our clients have to say.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="testimonial-card">
                <div className="flex gap-1 mb-6 relative z-10">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-coral fill-coral" />
                  ))}
                </div>
                <p className="text-sage leading-relaxed mb-6 relative z-10">
                  {testimonial.quote}
                </p>
                <div className="flex items-center gap-3 relative z-10">
                  <div className="w-10 h-10 bg-sage/10 rounded-full flex items-center justify-center">
                    <span className="text-sage font-serif">{testimonial.author.charAt(0)}</span>
                  </div>
                  <div>
                    <span className="block font-medium text-sage text-sm">{testimonial.author}</span>
                    <span className="text-sage-light text-xs">{testimonial.type}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link href="/reviews" className="btn-outline-dark">
              Read All Reviews
            </Link>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 md:py-32 bg-sage relative overflow-hidden">
        {/* Decorative Elements */}
        <div className="absolute inset-0 bg-noise opacity-30" />
        <div className="absolute top-0 right-0 w-96 h-96 bg-coral/10 rounded-full translate-x-1/2 -translate-y-1/2" />

        <div className="container-width text-center relative z-10">
          <span className="text-coral font-medium tracking-wider uppercase text-sm">
            Ready to Get Started?
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif text-white mt-6 mb-6">
            Find Your Place
          </h2>
          <p className="text-white/70 max-w-xl mx-auto mb-10 text-lg">
            Text me a Zillow link. Ask me about that neighborhood you&apos;re curious about.
            No obligation—just real talk about Atlanta real estate.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a
              href="sms:6787079385?body=Hi Emily! I'm interested in buying/selling a home in Atlanta."
              className="btn-primary inline-flex items-center justify-center gap-3"
            >
              <MessageCircle className="w-5 h-5" />
              Text Emily
            </a>
            <Link
              href="/contact"
              className="bg-white text-sage px-8 py-4 font-medium tracking-wider text-sm uppercase hover:bg-cream transition-all duration-300 inline-flex items-center justify-center"
            >
              Schedule a Call
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}

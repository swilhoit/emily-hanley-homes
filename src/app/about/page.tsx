import Link from 'next/link'
import { Users, Heart, Home, Clock, Star, MessageCircle, Instagram, Mail } from 'lucide-react'

const teamMembers = [
  {
    name: 'Emily Hanley',
    role: 'Founder & Agent',
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
    phone: '678-707-9385'
  },
  {
    name: 'Lindsay Young',
    role: 'Lead Agent',
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
    instagram: '@lnyoung1'
  },
  {
    name: 'Alicia Bechtel',
    role: 'Executive Assistant & Agent',
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
    instagram: '@licilauren'
  }
]

export default function AboutPage() {
  return (
    <div className="pt-16">
      {/* Hero */}
      <section className="section-padding bg-sage">
        <div className="container-width text-center text-white">
          <h1 className="text-4xl md:text-5xl font-serif mb-4">Here&apos;s What You Need to Know About Us</h1>
          <p className="text-xl text-white/80 max-w-2xl mx-auto">
            We&apos;re not a faceless brokerage. We&apos;re three people who actually care
            about finding you the right home—not just any home.
          </p>
        </div>
      </section>

      {/* Our Approach */}
      <section className="section-padding bg-white">
        <div className="container-width">
          <div className="max-w-3xl mx-auto">
            <h2 className="heading-lg mb-8 text-center">Business Relationally, Not Transactionally</h2>

            <div className="prose prose-lg text-sage-light mx-auto">
              <p className="text-lg leading-relaxed mb-6">
                Buying or selling a home is typically one of the biggest transactions you&apos;ll make
                in your lifetime. We get that. Which is why we don&apos;t treat you like a number or
                a commission check.
              </p>
              <p className="text-lg leading-relaxed mb-6">
                With a combined 21 years in the Atlanta real estate market, we&apos;ve seen it all.
                The dream homes that turned into nightmares. The &ldquo;fixer-uppers&rdquo; that were actually
                money pits. The &ldquo;overpriced&rdquo; houses that were actually steals.
              </p>
              <p className="text-lg leading-relaxed mb-6">
                We want to be your trusted advisor—not just for this transaction, but for all
                the life that happens after closing. Need a plumber? We&apos;ve got one. Wondering about
                that new development in your neighborhood? Let&apos;s chat. Want to send us your
                remodeling before-and-after pics? Please do.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6 mt-12">
              <div className="bg-cream p-6 text-center">
                <Heart className="h-8 w-8 text-coral mx-auto mb-3" />
                <h3 className="font-medium text-sage mb-2">We Care Long-Term</h3>
                <p className="text-sage-light text-sm">
                  We&apos;re here after closing. Send us holiday cards. We read them.
                </p>
              </div>
              <div className="bg-cream p-6 text-center">
                <Home className="h-8 w-8 text-coral mx-auto mb-3" />
                <h3 className="font-medium text-sage mb-2">400+ Homes Sold</h3>
                <p className="text-sage-light text-sm">
                  Experience means we spot issues others miss.
                </p>
              </div>
              <div className="bg-cream p-6 text-center">
                <Clock className="h-8 w-8 text-coral mx-auto mb-3" />
                <h3 className="font-medium text-sage mb-2">2-Hour Response</h3>
                <p className="text-sage-light text-sm">
                  In this market, speed matters. We deliver.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="section-padding bg-sand-light">
        <div className="container-width">
          <h2 className="heading-lg text-center mb-4">Meet the Team</h2>
          <p className="body-text text-center max-w-2xl mx-auto mb-12">
            Real people, real expertise, real commitment to finding you the right home.
          </p>

          <div className="space-y-16">
            {teamMembers.map((member, index) => (
              <div
                key={member.name}
                className={`grid md:grid-cols-2 gap-12 items-start ${
                  index % 2 === 1 ? 'md:flex-row-reverse' : ''
                }`}
              >
                <div className={index % 2 === 1 ? 'md:order-2' : ''}>
                  <div className="bg-sage/10 aspect-square rounded-lg flex items-center justify-center">
                    <Users className="h-24 w-24 text-sage/30" />
                  </div>
                </div>

                <div className={index % 2 === 1 ? 'md:order-1' : ''}>
                  <h3 className="text-2xl font-serif text-sage mb-1">{member.name}</h3>
                  <p className="text-coral mb-4">{member.role}</p>

                  <div className="text-sage-light whitespace-pre-line mb-6">
                    {member.bio}
                  </div>

                  <div className="mb-6">
                    <h4 className="font-medium text-sage mb-2">What I Bring to the Table</h4>
                    <ul className="space-y-2">
                      {member.highlights.map((highlight, i) => (
                        <li key={i} className="flex items-start gap-2 text-sage-light text-sm">
                          <Star className="h-4 w-4 text-coral flex-shrink-0 mt-0.5" />
                          {highlight}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mb-6">
                    <h4 className="font-medium text-sage mb-2">Fun Facts</h4>
                    <ul className="space-y-1">
                      {member.funFacts.map((fact, i) => (
                        <li key={i} className="text-sage-light text-sm">• {fact}</li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex flex-wrap gap-4">
                    {member.email && (
                      <a
                        href={`mailto:${member.email}`}
                        className="inline-flex items-center gap-2 text-sage hover:text-coral transition-colors text-sm"
                      >
                        <Mail className="h-4 w-4" />
                        {member.email}
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

      {/* Brokerage */}
      <section className="section-padding bg-white">
        <div className="container-width">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="heading-md mb-4">Proudly With Bolst</h2>
            <p className="body-text mb-6">
              Our brokerage, Bolst, is a B Corp that believes in using success in real estate
              to give back to the community. All of our vendor partners donate to local charities
              with every transaction, and our broker, Cathryn Childs, is a licensed attorney
              with years of Atlanta real estate law experience.
            </p>
            <a
              href="https://bolst.homes"
              target="_blank"
              rel="noopener noreferrer"
              className="text-coral font-medium hover:text-coral-dark transition-colors"
            >
              Learn more about Bolst →
            </a>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-sage">
        <div className="container-width text-center">
          <h2 className="text-3xl font-serif text-white mb-4">Ready to Chat?</h2>
          <p className="text-white/70 max-w-xl mx-auto mb-8">
            No pressure, no sales pitch. Just real talk about what you&apos;re looking for.
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

import Link from 'next/link'
import { Instagram, Mail, Phone, MapPin, ArrowUpRight } from 'lucide-react'

const quickLinks = [
  { name: 'About Us', href: '/about' },
  { name: 'Services', href: '/services' },
  { name: 'Neighborhoods', href: '/neighborhoods' },
  { name: 'Vendors', href: '/vendors' },
  { name: 'Reviews', href: '/reviews' },
  { name: 'Contact', href: '/contact' },
]

const resources = [
  { name: 'Budget Calculator', href: '/calculator' },
  { name: '$700K Showdown', href: '/showdown' },
  { name: 'House or Nah Quiz', href: 'https://emilyhanleyhomes.typeform.com/houseornah', external: true },
  { name: 'Off-Market Alerts', href: '/contact?interest=off-market' },
]

export function Footer() {
  return (
    <footer className="bg-sage text-white">
      {/* Main Footer */}
      <div className="container-width section-padding-sm">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8">
          {/* Brand Column */}
          <div className="lg:col-span-4">
            <Link href="/" className="text-2xl font-serif tracking-wide">
              Emily Hanley Homes
            </Link>
            <p className="text-white/60 text-sm leading-relaxed mt-4 max-w-xs">
              From consult to closing, we have a strategy for success.
              We&apos;re here for the life that happens after closing.
            </p>

            {/* Social Links */}
            <div className="flex gap-4 mt-6">
              <a
                href="https://www.instagram.com/emilyhanley_homes/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 border border-white/20 flex items-center justify-center text-white/60 hover:text-coral hover:border-coral transition-all duration-300"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="mailto:emily@emilyhanleyhomes.com"
                className="w-10 h-10 border border-white/20 flex items-center justify-center text-white/60 hover:text-coral hover:border-coral transition-all duration-300"
                aria-label="Email"
              >
                <Mail className="w-4 h-4" />
              </a>
              <a
                href="tel:6787079385"
                className="w-10 h-10 border border-white/20 flex items-center justify-center text-white/60 hover:text-coral hover:border-coral transition-all duration-300"
                aria-label="Phone"
              >
                <Phone className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-2">
            <h4 className="text-coral text-sm font-medium tracking-wider uppercase mb-4">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-white/60 hover:text-white text-sm transition-colors duration-300 inline-flex items-center gap-1"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div className="lg:col-span-2">
            <h4 className="text-coral text-sm font-medium tracking-wider uppercase mb-4">
              Resources
            </h4>
            <ul className="space-y-3">
              {resources.map((link) => (
                <li key={link.name}>
                  {link.external ? (
                    <a
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white/60 hover:text-white text-sm transition-colors duration-300 inline-flex items-center gap-1"
                    >
                      {link.name}
                      <ArrowUpRight className="w-3 h-3" />
                    </a>
                  ) : (
                    <Link
                      href={link.href}
                      className="text-white/60 hover:text-white text-sm transition-colors duration-300"
                    >
                      {link.name}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="lg:col-span-4">
            <h4 className="text-coral text-sm font-medium tracking-wider uppercase mb-4">
              Get in Touch
            </h4>
            <div className="space-y-4">
              <a
                href="tel:6787079385"
                className="flex items-center gap-3 text-white/60 hover:text-white text-sm transition-colors duration-300"
              >
                <div className="w-8 h-8 border border-white/20 flex items-center justify-center flex-shrink-0">
                  <Phone className="w-3.5 h-3.5" />
                </div>
                678-707-9385
              </a>
              <a
                href="mailto:emily@emilyhanleyhomes.com"
                className="flex items-center gap-3 text-white/60 hover:text-white text-sm transition-colors duration-300"
              >
                <div className="w-8 h-8 border border-white/20 flex items-center justify-center flex-shrink-0">
                  <Mail className="w-3.5 h-3.5" />
                </div>
                emily@emilyhanleyhomes.com
              </a>
              <div className="flex items-start gap-3 text-white/60 text-sm">
                <div className="w-8 h-8 border border-white/20 flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-3.5 h-3.5" />
                </div>
                <span>
                  620 Glen Iris Dr NE Unit 1-A<br />
                  Atlanta, GA 30308
                </span>
              </div>
            </div>

            {/* CTA */}
            <div className="mt-8 p-6 bg-white/5 border border-white/10">
              <p className="text-white/80 text-sm mb-4">
                Text Emily a Zillow link and get honest feedback within 2 hours.
              </p>
              <a
                href="sms:6787079385?body=Hi Emily! I'm interested in learning more."
                className="btn-primary inline-flex items-center gap-2 text-xs py-3"
              >
                Text Us Now
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="container-width px-6 md:px-8 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-white/40 text-sm">
              © {new Date().getFullYear()} Emily Hanley Homes. All rights reserved.
            </p>
            <div className="flex items-center gap-2 text-white/40 text-sm">
              <span>Brokered by</span>
              <a
                href="https://bolst.homes"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-coral transition-colors duration-300 font-medium"
              >
                Bolst
              </a>
              <span className="mx-2">|</span>
              <span>B Corp Certified</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

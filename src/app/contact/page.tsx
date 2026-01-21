'use client'

import { useState } from 'react'
import { MessageCircle, Phone, Mail, MapPin, Clock, Instagram, Calendar, CheckCircle } from 'lucide-react'

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    interest: '',
    message: ''
  })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // In production, this would send to a backend
    console.log('Form submitted:', formData)
    setSubmitted(true)
  }

  return (
    <div className="pt-16">
      {/* Hero */}
      <section className="section-padding bg-sage">
        <div className="container-width text-center text-white">
          <h1 className="text-4xl md:text-5xl font-serif mb-4">Let&apos;s Talk</h1>
          <p className="text-xl text-white/80 max-w-2xl mx-auto">
            No pressure. No sales pitch. Just real talk about your home goals.
          </p>
        </div>
      </section>

      {/* Contact Options */}
      <section className="section-padding bg-white">
        <div className="container-width">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Quick Contact */}
            <div>
              <h2 className="heading-md mb-6">Fastest Ways to Reach Me</h2>

              <div className="space-y-6">
                {/* Text */}
                <a
                  href="sms:6787079385"
                  className="flex items-start gap-4 p-6 bg-coral/10 hover:bg-coral/20 transition-colors"
                >
                  <MessageCircle className="h-8 w-8 text-coral flex-shrink-0" />
                  <div>
                    <h3 className="font-medium text-sage mb-1">Text Me (Preferred)</h3>
                    <p className="text-sage-light text-sm mb-2">
                      678-707-9385 • I respond within 2 hours
                    </p>
                    <span className="text-coral text-sm font-medium">
                      Tap to text →
                    </span>
                  </div>
                </a>

                {/* Call */}
                <a
                  href="tel:6787079385"
                  className="flex items-start gap-4 p-6 bg-cream hover:bg-sand-light transition-colors"
                >
                  <Phone className="h-8 w-8 text-sage flex-shrink-0" />
                  <div>
                    <h3 className="font-medium text-sage mb-1">Call Me</h3>
                    <p className="text-sage-light text-sm mb-2">
                      678-707-9385 • Best for urgent matters
                    </p>
                    <span className="text-coral text-sm font-medium">
                      Tap to call →
                    </span>
                  </div>
                </a>

                {/* Email */}
                <a
                  href="mailto:emily@emilyhomes.com"
                  className="flex items-start gap-4 p-6 bg-cream hover:bg-sand-light transition-colors"
                >
                  <Mail className="h-8 w-8 text-sage flex-shrink-0" />
                  <div>
                    <h3 className="font-medium text-sage mb-1">Email Me</h3>
                    <p className="text-sage-light text-sm mb-2">
                      emily@emilyhomes.com
                    </p>
                    <span className="text-coral text-sm font-medium">
                      Tap to email →
                    </span>
                  </div>
                </a>

                {/* Schedule */}
                <a
                  href="https://calendly.com/emily-emilyhanleyhomes"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-4 p-6 bg-cream hover:bg-sand-light transition-colors"
                >
                  <Calendar className="h-8 w-8 text-sage flex-shrink-0" />
                  <div>
                    <h3 className="font-medium text-sage mb-1">Schedule a Call</h3>
                    <p className="text-sage-light text-sm mb-2">
                      Book a time that works for you
                    </p>
                    <span className="text-coral text-sm font-medium">
                      View calendar →
                    </span>
                  </div>
                </a>
              </div>

              {/* Office Info */}
              <div className="mt-8 p-6 bg-sage text-white">
                <h3 className="font-medium mb-4">Office Location</h3>
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <MapPin className="h-5 w-5 flex-shrink-0 mt-0.5" />
                    <div>
                      <p>620 Glen Iris Dr NE Unit 1-A</p>
                      <p>Atlanta, GA 30308</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Clock className="h-5 w-5 flex-shrink-0" />
                    <p>Can&apos;t make it to the office? Let&apos;s meet at your favorite coffee shop!</p>
                  </div>
                </div>
                <div className="mt-4 pt-4 border-t border-white/20">
                  <a
                    href="https://instagram.com/emilyhanley_homes"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-white/80 hover:text-white transition-colors"
                  >
                    <Instagram className="h-5 w-5" />
                    @emilyhanley_homes
                  </a>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <h2 className="heading-md mb-6">Send a Message</h2>

              {submitted ? (
                <div className="bg-green-50 p-8 text-center">
                  <CheckCircle className="h-12 w-12 text-green-600 mx-auto mb-4" />
                  <h3 className="text-xl font-serif text-sage mb-2">Message Received!</h3>
                  <p className="text-sage-light mb-4">
                    I&apos;ll get back to you within 2 hours during business hours.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="text-coral font-medium text-sm"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label className="block text-sage font-medium mb-2">
                      Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 border border-sand focus:border-coral focus:outline-none"
                    />
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sage font-medium mb-2">
                        Email *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-4 py-3 border border-sand focus:border-coral focus:outline-none"
                      />
                    </div>
                    <div>
                      <label className="block text-sage font-medium mb-2">
                        Phone
                      </label>
                      <input
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full px-4 py-3 border border-sand focus:border-coral focus:outline-none"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sage font-medium mb-2">
                      I&apos;m interested in...
                    </label>
                    <select
                      value={formData.interest}
                      onChange={(e) => setFormData({ ...formData, interest: e.target.value })}
                      className="w-full px-4 py-3 border border-sand focus:border-coral focus:outline-none bg-white"
                    >
                      <option value="">Select an option</option>
                      <option value="buying">Buying a home</option>
                      <option value="selling">Selling my home</option>
                      <option value="both">Buying and selling</option>
                      <option value="off-market">Off-market homes</option>
                      <option value="investing">Investment properties</option>
                      <option value="consultation">Just a consultation</option>
                      <option value="other">Something else</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sage font-medium mb-2">
                      Message *
                    </label>
                    <textarea
                      required
                      rows={5}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Tell me a bit about what you're looking for..."
                      className="w-full px-4 py-3 border border-sand focus:border-coral focus:outline-none resize-none"
                    />
                  </div>

                  <button type="submit" className="btn-primary w-full">
                    Send Message
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Off-Market Alert Signup */}
      <section className="section-padding bg-cream">
        <div className="container-width">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="heading-md mb-4">Want Off-Market Alerts?</h2>
            <p className="body-text mb-8">
              Get notified about homes before they hit MLS. Our network of 400+ transactions
              means we often know about listings before they go public.
            </p>
            <a
              href="sms:6787079385?body=Hi Emily! I'd like to sign up for off-market alerts. Here's what I'm looking for:"
              className="btn-primary inline-flex items-center gap-2"
            >
              <MessageCircle className="h-4 w-4" />
              Sign Up for Off-Market Alerts
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}

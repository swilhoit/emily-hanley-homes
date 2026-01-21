'use client'

import { useState, useEffect } from 'react'
import { MessageCircle, Phone, Mail, MapPin, Clock, Instagram, Calendar, CheckCircle, ArrowRight, Sparkles, Send } from 'lucide-react'

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    interest: '',
    message: ''
  })
  const [submitted, setSubmitted] = useState(false)
  const [isVisible, setIsVisible] = useState(false)
  const [focusedField, setFocusedField] = useState<string | null>(null)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
    setSubmitted(true)
  }

  const contactMethods = [
    {
      icon: MessageCircle,
      title: 'Text Me',
      subtitle: 'Preferred & Fastest',
      description: '678-707-9385 • Response within 2 hours',
      href: 'sms:6787079385',
      cta: 'Send a text',
      featured: true
    },
    {
      icon: Phone,
      title: 'Call Me',
      subtitle: 'For urgent matters',
      description: '678-707-9385',
      href: 'tel:6787079385',
      cta: 'Start a call'
    },
    {
      icon: Mail,
      title: 'Email Me',
      subtitle: 'For detailed inquiries',
      description: 'emily@emilyhanleyhomes.com',
      href: 'mailto:emily@emilyhanleyhomes.com',
      cta: 'Send email'
    },
    {
      icon: Calendar,
      title: 'Schedule a Call',
      subtitle: 'Book a time slot',
      description: 'View my availability',
      href: 'https://calendly.com/emily-emilyhanleyhomes',
      cta: 'View calendar',
      external: true
    }
  ]

  return (
    <div className="pt-16 overflow-hidden">
      {/* Hero */}
      <section className="relative min-h-[50vh] flex items-center bg-sage overflow-hidden">
        {/* Decorative Elements */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 right-10 w-64 h-64 rounded-full bg-coral blur-3xl" />
          <div className="absolute bottom-10 left-20 w-96 h-96 rounded-full bg-white blur-3xl" />
        </div>

        <div className="container-width px-6 md:px-8 py-20 relative z-10">
          <div className={`max-w-3xl mx-auto text-center transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            <span className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm text-white/90 px-4 py-2 text-sm font-medium tracking-wide uppercase mb-8">
              <Sparkles className="w-4 h-4" />
              Get in Touch
            </span>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif text-white mb-6 leading-tight">
              Let&apos;s Talk About
              <span className="block text-coral">Your Next Move</span>
            </h1>

            <p className="text-xl text-white/80 max-w-xl mx-auto">
              No pressure. No sales pitch. Just real talk about what you&apos;re looking for.
            </p>
          </div>
        </div>

        {/* Bottom Wave */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
            <path d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 85C1200 90 1320 90 1380 90L1440 90V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" fill="white"/>
          </svg>
        </div>
      </section>

      {/* Contact Options */}
      <section className="section-padding bg-white">
        <div className="container-width px-6 md:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
            {/* Quick Contact Methods */}
            <div>
              <h2 className="text-2xl md:text-3xl font-serif text-sage mb-2">
                Reach Out Directly
              </h2>
              <p className="text-sage-light mb-8">
                Choose your preferred way to connect
              </p>

              <div className="space-y-4">
                {contactMethods.map((method, index) => (
                  <a
                    key={method.title}
                    href={method.href}
                    target={method.external ? '_blank' : undefined}
                    rel={method.external ? 'noopener noreferrer' : undefined}
                    className={`group flex items-start gap-5 p-5 transition-all duration-300 hover:-translate-x-1 ${
                      method.featured
                        ? 'bg-coral/10 hover:bg-coral/20'
                        : 'bg-cream hover:bg-sand-light'
                    }`}
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <div className={`w-14 h-14 rounded-full flex items-center justify-center flex-shrink-0 transition-all duration-300 ${
                      method.featured
                        ? 'bg-coral group-hover:scale-110'
                        : 'bg-sage/10 group-hover:bg-sage'
                    }`}>
                      <method.icon className={`h-6 w-6 ${
                        method.featured
                          ? 'text-white'
                          : 'text-sage group-hover:text-white'
                      }`} />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <h3 className="font-medium text-sage">{method.title}</h3>
                        {method.featured && (
                          <span className="text-xs font-medium text-coral bg-coral/10 px-2 py-0.5 rounded-full">
                            Fastest
                          </span>
                        )}
                      </div>
                      <p className="text-sage-light text-sm mb-2">{method.description}</p>
                      <span className="inline-flex items-center gap-1 text-coral text-sm font-medium group-hover:gap-2 transition-all">
                        {method.cta}
                        <ArrowRight className="w-4 h-4" />
                      </span>
                    </div>
                  </a>
                ))}
              </div>

              {/* Office Info Card */}
              <div className="mt-8 bg-sage p-6 md:p-8 text-white relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-coral/10 rounded-full blur-2xl" />
                <h3 className="font-serif text-xl mb-4 relative z-10">Office Location</h3>
                <div className="space-y-4 relative z-10">
                  <div className="flex items-start gap-3">
                    <MapPin className="h-5 w-5 flex-shrink-0 mt-1 text-coral" />
                    <div>
                      <p className="font-medium">620 Glen Iris Dr NE Unit 1-A</p>
                      <p className="text-white/70">Atlanta, GA 30308</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Clock className="h-5 w-5 flex-shrink-0 mt-1 text-coral" />
                    <p className="text-white/70">
                      Can&apos;t make it to the office? Let&apos;s meet at your favorite coffee shop!
                    </p>
                  </div>
                </div>
                <div className="mt-6 pt-6 border-t border-white/20 relative z-10">
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
              <h2 className="text-2xl md:text-3xl font-serif text-sage mb-2">
                Send a Message
              </h2>
              <p className="text-sage-light mb-8">
                I&apos;ll get back to you within 2 hours during business hours
              </p>

              {submitted ? (
                <div className="bg-green-50 border border-green-200 p-10 text-center">
                  <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-6">
                    <CheckCircle className="h-8 w-8 text-green-600" />
                  </div>
                  <h3 className="text-2xl font-serif text-sage mb-3">Message Received!</h3>
                  <p className="text-sage-light mb-6">
                    Thanks for reaching out. I&apos;ll get back to you within 2 hours during business hours.
                  </p>
                  <button
                    onClick={() => {
                      setSubmitted(false)
                      setFormData({ name: '', email: '', phone: '', interest: '', message: '' })
                    }}
                    className="text-coral font-medium hover:text-coral-dark transition-colors"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Name Field */}
                  <div className="relative">
                    <label
                      className={`absolute left-4 transition-all duration-300 pointer-events-none ${
                        focusedField === 'name' || formData.name
                          ? '-top-2.5 text-xs bg-white px-2 text-coral'
                          : 'top-4 text-sage-light'
                      }`}
                    >
                      Your Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      onFocus={() => setFocusedField('name')}
                      onBlur={() => setFocusedField(null)}
                      className="w-full px-4 py-4 border-2 border-sand focus:border-coral focus:outline-none transition-colors bg-white"
                    />
                  </div>

                  {/* Email & Phone */}
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="relative">
                      <label
                        className={`absolute left-4 transition-all duration-300 pointer-events-none ${
                          focusedField === 'email' || formData.email
                            ? '-top-2.5 text-xs bg-white px-2 text-coral'
                            : 'top-4 text-sage-light'
                        }`}
                      >
                        Email *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        onFocus={() => setFocusedField('email')}
                        onBlur={() => setFocusedField(null)}
                        className="w-full px-4 py-4 border-2 border-sand focus:border-coral focus:outline-none transition-colors bg-white"
                      />
                    </div>
                    <div className="relative">
                      <label
                        className={`absolute left-4 transition-all duration-300 pointer-events-none ${
                          focusedField === 'phone' || formData.phone
                            ? '-top-2.5 text-xs bg-white px-2 text-coral'
                            : 'top-4 text-sage-light'
                        }`}
                      >
                        Phone
                      </label>
                      <input
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        onFocus={() => setFocusedField('phone')}
                        onBlur={() => setFocusedField(null)}
                        className="w-full px-4 py-4 border-2 border-sand focus:border-coral focus:outline-none transition-colors bg-white"
                      />
                    </div>
                  </div>

                  {/* Interest Select */}
                  <div className="relative">
                    <label className="block text-sage font-medium mb-2">
                      I&apos;m interested in...
                    </label>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
                      {[
                        { value: 'buying', label: 'Buying' },
                        { value: 'selling', label: 'Selling' },
                        { value: 'both', label: 'Both' },
                        { value: 'off-market', label: 'Off-Market' },
                        { value: 'investing', label: 'Investing' },
                        { value: 'consultation', label: 'Just Chatting' },
                      ].map((option) => (
                        <button
                          key={option.value}
                          type="button"
                          onClick={() => setFormData({ ...formData, interest: option.value })}
                          className={`px-4 py-3 text-sm font-medium transition-all duration-300 ${
                            formData.interest === option.value
                              ? 'bg-coral text-white'
                              : 'bg-cream text-sage hover:bg-sand-light'
                          }`}
                        >
                          {option.label}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Message */}
                  <div className="relative">
                    <label
                      className={`absolute left-4 transition-all duration-300 pointer-events-none ${
                        focusedField === 'message' || formData.message
                          ? '-top-2.5 text-xs bg-white px-2 text-coral'
                          : 'top-4 text-sage-light'
                      }`}
                    >
                      Tell me about your goals... *
                    </label>
                    <textarea
                      required
                      rows={5}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      onFocus={() => setFocusedField('message')}
                      onBlur={() => setFocusedField(null)}
                      className="w-full px-4 py-4 border-2 border-sand focus:border-coral focus:outline-none resize-none transition-colors bg-white"
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    className="w-full btn-primary flex items-center justify-center gap-2 group"
                  >
                    <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    Send Message
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Off-Market Alert Signup */}
      <section className="relative section-padding bg-cream overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-0 left-1/4 w-96 h-96 rounded-full bg-coral blur-3xl" />
        </div>

        <div className="container-width px-6 md:px-8 relative z-10">
          <div className="max-w-3xl mx-auto">
            <div className="bg-white p-8 md:p-12 text-center shadow-soft">
              <div className="w-16 h-16 rounded-full bg-coral/10 flex items-center justify-center mx-auto mb-6">
                <Sparkles className="w-8 h-8 text-coral" />
              </div>
              <h2 className="text-2xl md:text-3xl font-serif text-sage mb-4">
                Want Off-Market Alerts?
              </h2>
              <p className="text-sage-light mb-8 max-w-xl mx-auto">
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
        </div>
      </section>
    </div>
  )
}

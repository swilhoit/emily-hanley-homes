'use client'

import { useState, useMemo, useEffect } from 'react'
import { Calculator, AlertTriangle, CheckCircle, MessageCircle, Info, DollarSign, Percent, Home, PiggyBank, Shield, Wrench, Building, ChevronDown, Sparkles } from 'lucide-react'
import Link from 'next/link'

export default function CalculatorPage() {
  const [isVisible, setIsVisible] = useState(false)
  const [annualIncome, setAnnualIncome] = useState(100000)
  const [monthlyDebts, setMonthlyDebts] = useState(500)
  const [downPayment, setDownPayment] = useState(50000)
  const [interestRate, setInterestRate] = useState(6.5)
  const [propertyTaxRate, setPropertyTaxRate] = useState(1.1)
  const [showAdvanced, setShowAdvanced] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const calculations = useMemo(() => {
    const monthlyIncome = annualIncome / 12

    // What you QUALIFY for (bank's calculation - 43% DTI max)
    const maxMonthlyPayment43 = (monthlyIncome * 0.43) - monthlyDebts
    const qualifyPrice = calculateHomePrice(maxMonthlyPayment43, downPayment, interestRate, propertyTaxRate)

    // What you SHOULD buy (28% rule - conservative)
    const maxMonthlyPayment28 = monthlyIncome * 0.28
    const comfortablePrice = calculateHomePrice(maxMonthlyPayment28, downPayment, interestRate, propertyTaxRate)

    // What's COMFORTABLE (25% rule - very conservative)
    const maxMonthlyPayment25 = monthlyIncome * 0.25
    const conservativePrice = calculateHomePrice(maxMonthlyPayment25, downPayment, interestRate, propertyTaxRate)

    // Monthly payment breakdown for comfortable price
    const loanAmount = comfortablePrice - downPayment
    const monthlyPrincipalInterest = calculateMonthlyPayment(loanAmount, interestRate)
    const monthlyPropertyTax = (comfortablePrice * (propertyTaxRate / 100)) / 12
    const monthlyInsurance = comfortablePrice * 0.003 / 12
    const totalMonthlyPayment = monthlyPrincipalInterest + monthlyPropertyTax + monthlyInsurance

    return {
      qualifyPrice: Math.round(qualifyPrice),
      comfortablePrice: Math.round(comfortablePrice),
      conservativePrice: Math.round(conservativePrice),
      monthlyPayment: Math.round(totalMonthlyPayment),
      principalInterest: Math.round(monthlyPrincipalInterest),
      propertyTax: Math.round(monthlyPropertyTax),
      insurance: Math.round(monthlyInsurance),
      percentOfIncome: Math.round((totalMonthlyPayment / monthlyIncome) * 100)
    }
  }, [annualIncome, monthlyDebts, downPayment, interestRate, propertyTaxRate])

  function calculateMonthlyPayment(principal: number, annualRate: number): number {
    const monthlyRate = annualRate / 100 / 12
    const numPayments = 30 * 12
    if (monthlyRate === 0) return principal / numPayments
    return principal * (monthlyRate * Math.pow(1 + monthlyRate, numPayments)) /
           (Math.pow(1 + monthlyRate, numPayments) - 1)
  }

  function calculateHomePrice(maxMonthly: number, downPayment: number, rate: number, taxRate: number): number {
    let homePrice = 200000
    for (let i = 0; i < 100; i++) {
      const loanAmount = homePrice - downPayment
      const pi = calculateMonthlyPayment(loanAmount, rate)
      const tax = (homePrice * (taxRate / 100)) / 12
      const insurance = homePrice * 0.003 / 12
      const total = pi + tax + insurance

      if (Math.abs(total - maxMonthly) < 10) break
      homePrice += (maxMonthly - total) * 100
    }
    return Math.max(homePrice, 0)
  }

  const maxPrice = Math.max(calculations.qualifyPrice, calculations.comfortablePrice, calculations.conservativePrice)

  const additionalInfo = [
    {
      icon: DollarSign,
      title: 'Closing Costs',
      description: 'Typically 2-5% of home price. We often negotiate sellers to contribute—we\'ve averaged $8K in closing cost credits for our buyers.'
    },
    {
      icon: Shield,
      title: 'PMI',
      description: 'If putting less than 20% down, add ~0.5-1% annually. There are ways to avoid this—ask me about lender-paid PMI options.'
    },
    {
      icon: Building,
      title: 'HOA Fees',
      description: 'Common in condos and some neighborhoods. Can range from $100 to $1,000+/month. Always factor this in when comparing homes.'
    },
    {
      icon: Wrench,
      title: 'Maintenance',
      description: 'Budget 1-2% of home value annually for repairs and maintenance. Older homes typically need more. We\'ll help you assess condition during showings.'
    }
  ]

  return (
    <div className="pt-16 overflow-hidden">
      {/* Hero */}
      <section className="relative min-h-[50vh] flex items-center bg-sage overflow-hidden">
        {/* Decorative Elements */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 right-20 w-64 h-64 rounded-full bg-coral blur-3xl" />
          <div className="absolute bottom-10 left-10 w-80 h-80 rounded-full bg-white blur-3xl" />
        </div>

        <div className="container-width px-6 md:px-8 py-20 relative z-10">
          <div className={`max-w-3xl mx-auto text-center transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            <span className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm text-white/90 px-4 py-2 text-sm font-medium tracking-wide uppercase mb-8">
              <Calculator className="w-4 h-4" />
              Budget Calculator
            </span>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif text-white mb-6 leading-tight">
              What Can You
              <span className="block text-coral">Actually Afford?</span>
            </h1>

            <p className="text-xl text-white/80 max-w-2xl mx-auto">
              What you can actually afford vs. what the bank says you qualify for.
              The honest numbers most agents won&apos;t tell you.
            </p>
          </div>
        </div>

        {/* Bottom Wave */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
            <path d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 85C1200 90 1320 90 1380 90L1440 90V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" fill="#FEF3EC"/>
          </svg>
        </div>
      </section>

      {/* Important Disclaimer */}
      <section className="py-8 bg-coral/10">
        <div className="container-width px-6 md:px-8">
          <div className="flex items-start gap-4 max-w-3xl mx-auto">
            <div className="w-12 h-12 rounded-full bg-coral/20 flex items-center justify-center flex-shrink-0">
              <AlertTriangle className="h-6 w-6 text-coral" />
            </div>
            <div>
              <h2 className="font-serif text-xl text-sage mb-2">The Truth About Pre-Approval</h2>
              <p className="text-sage-light">
                Banks will often approve you for way more than you should actually spend.
                A $3,000/month mortgage might be &ldquo;approved,&rdquo; but can you still take vacations?
                Save for retirement? Handle emergencies? This calculator shows you the difference.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Calculator */}
      <section className="section-padding bg-white">
        <div className="container-width px-6 md:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
            {/* Inputs */}
            <div>
              <h2 className="text-2xl md:text-3xl font-serif text-sage mb-2">Your Numbers</h2>
              <p className="text-sage-light mb-8">Enter your financial details to see what you can afford.</p>

              <div className="space-y-6">
                {/* Annual Income */}
                <div className="group">
                  <label className="block text-sage font-medium mb-2 flex items-center gap-2">
                    <DollarSign className="w-4 h-4 text-coral" />
                    Annual Household Income
                  </label>
                  <div className="relative">
                    <span className="absolute left-4 top-1/2 -translate-y-1/2 text-sage-light font-medium">$</span>
                    <input
                      type="number"
                      value={annualIncome}
                      onChange={(e) => setAnnualIncome(Number(e.target.value))}
                      className="w-full pl-10 pr-4 py-4 border-2 border-sand focus:border-coral focus:outline-none transition-colors bg-cream/50"
                    />
                  </div>
                  <p className="text-sage-light text-sm mt-2">Before taxes</p>
                </div>

                {/* Monthly Debts */}
                <div className="group">
                  <label className="block text-sage font-medium mb-2 flex items-center gap-2">
                    <DollarSign className="w-4 h-4 text-coral" />
                    Monthly Debt Payments
                  </label>
                  <div className="relative">
                    <span className="absolute left-4 top-1/2 -translate-y-1/2 text-sage-light font-medium">$</span>
                    <input
                      type="number"
                      value={monthlyDebts}
                      onChange={(e) => setMonthlyDebts(Number(e.target.value))}
                      className="w-full pl-10 pr-4 py-4 border-2 border-sand focus:border-coral focus:outline-none transition-colors bg-cream/50"
                    />
                  </div>
                  <p className="text-sage-light text-sm mt-2">Car loans, student loans, credit cards, etc.</p>
                </div>

                {/* Down Payment */}
                <div className="group">
                  <label className="block text-sage font-medium mb-2 flex items-center gap-2">
                    <PiggyBank className="w-4 h-4 text-coral" />
                    Down Payment
                  </label>
                  <div className="relative">
                    <span className="absolute left-4 top-1/2 -translate-y-1/2 text-sage-light font-medium">$</span>
                    <input
                      type="number"
                      value={downPayment}
                      onChange={(e) => setDownPayment(Number(e.target.value))}
                      className="w-full pl-10 pr-4 py-4 border-2 border-sand focus:border-coral focus:outline-none transition-colors bg-cream/50"
                    />
                  </div>
                  <p className="text-sage-light text-sm mt-2">How much you have saved</p>
                </div>

                {/* Advanced Toggle */}
                <button
                  onClick={() => setShowAdvanced(!showAdvanced)}
                  className="flex items-center gap-2 text-coral font-medium group"
                >
                  <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${showAdvanced ? 'rotate-180' : ''}`} />
                  {showAdvanced ? 'Hide' : 'Show'} Advanced Options
                </button>

                {/* Advanced Options */}
                <div className={`overflow-hidden transition-all duration-500 ${showAdvanced ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
                  <div className="space-y-6 pt-4 border-t border-sand">
                    <div>
                      <label className="block text-sage font-medium mb-2 flex items-center gap-2">
                        <Percent className="w-4 h-4 text-coral" />
                        Interest Rate (%)
                      </label>
                      <input
                        type="number"
                        step="0.1"
                        value={interestRate}
                        onChange={(e) => setInterestRate(Number(e.target.value))}
                        className="w-full px-4 py-4 border-2 border-sand focus:border-coral focus:outline-none transition-colors bg-cream/50"
                      />
                    </div>
                    <div>
                      <label className="block text-sage font-medium mb-2 flex items-center gap-2">
                        <Home className="w-4 h-4 text-coral" />
                        Property Tax Rate (%)
                      </label>
                      <input
                        type="number"
                        step="0.1"
                        value={propertyTaxRate}
                        onChange={(e) => setPropertyTaxRate(Number(e.target.value))}
                        className="w-full px-4 py-4 border-2 border-sand focus:border-coral focus:outline-none transition-colors bg-cream/50"
                      />
                      <p className="text-sage-light text-sm mt-2">Georgia average: ~1.1%</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Results */}
            <div>
              <h2 className="text-2xl md:text-3xl font-serif text-sage mb-2">Your Results</h2>
              <p className="text-sage-light mb-8">See the difference between what banks approve and what&apos;s smart.</p>

              {/* Visual Comparison */}
              <div className="mb-8 space-y-4">
                {/* What you qualify for - Warning */}
                <div className="group relative">
                  <div className="bg-red-50 border-2 border-red-200 p-6 transition-all duration-300 hover:shadow-soft">
                    <div className="flex items-start gap-4 mb-4">
                      <div className="w-10 h-10 rounded-full bg-red-100 flex items-center justify-center flex-shrink-0">
                        <AlertTriangle className="h-5 w-5 text-red-500" />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-medium text-sage mb-1">What You Qualify For</h3>
                        <p className="text-sage-light text-sm">Based on 43% debt-to-income ratio</p>
                      </div>
                    </div>
                    <div className="text-3xl md:text-4xl font-serif text-red-600 mb-3">
                      ${calculations.qualifyPrice.toLocaleString()}
                    </div>
                    {/* Visual Bar */}
                    <div className="h-3 bg-red-100 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-red-500 rounded-full transition-all duration-1000"
                        style={{ width: `${(calculations.qualifyPrice / maxPrice) * 100}%` }}
                      />
                    </div>
                    <p className="text-red-600 text-sm mt-3">
                      This is what the bank might approve, but it&apos;s likely too high.
                    </p>
                  </div>
                </div>

                {/* What's comfortable - Recommended */}
                <div className="group relative">
                  <div className="bg-green-50 border-2 border-green-300 p-6 transition-all duration-300 hover:shadow-soft ring-2 ring-green-400 ring-offset-2">
                    <span className="absolute -top-3 left-6 bg-green-500 text-white text-xs font-medium px-3 py-1 rounded-full">
                      Recommended
                    </span>
                    <div className="flex items-start gap-4 mb-4">
                      <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0">
                        <CheckCircle className="h-5 w-5 text-green-600" />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-medium text-sage mb-1">What You Should Buy</h3>
                        <p className="text-sage-light text-sm">Based on 28% of income</p>
                      </div>
                    </div>
                    <div className="text-3xl md:text-4xl font-serif text-green-700 mb-3">
                      ${calculations.comfortablePrice.toLocaleString()}
                    </div>
                    {/* Visual Bar */}
                    <div className="h-3 bg-green-100 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-green-500 rounded-full transition-all duration-1000"
                        style={{ width: `${(calculations.comfortablePrice / maxPrice) * 100}%` }}
                      />
                    </div>
                    <p className="text-green-700 text-sm mt-3">
                      Room for life: vacations, emergencies, retirement savings.
                    </p>
                  </div>
                </div>

                {/* Conservative */}
                <div className="group relative">
                  <div className="bg-cream border-2 border-sand p-6 transition-all duration-300 hover:shadow-soft">
                    <div className="flex items-start gap-4 mb-4">
                      <div className="w-10 h-10 rounded-full bg-sage/10 flex items-center justify-center flex-shrink-0">
                        <Info className="h-5 w-5 text-sage" />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-medium text-sage mb-1">Conservative Option</h3>
                        <p className="text-sage-light text-sm">Based on 25% of income (very safe)</p>
                      </div>
                    </div>
                    <div className="text-3xl md:text-4xl font-serif text-sage mb-3">
                      ${calculations.conservativePrice.toLocaleString()}
                    </div>
                    {/* Visual Bar */}
                    <div className="h-3 bg-sage/10 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-sage rounded-full transition-all duration-1000"
                        style={{ width: `${(calculations.conservativePrice / maxPrice) * 100}%` }}
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* Monthly Breakdown */}
              <div className="bg-sage p-6 md:p-8 text-white relative overflow-hidden">
                <div className="absolute top-0 right-0 w-48 h-48 bg-coral/10 rounded-full blur-3xl" />

                <h3 className="font-serif text-xl mb-2 relative z-10">Monthly Payment Breakdown</h3>
                <p className="text-white/60 text-sm mb-6 relative z-10">
                  For a ${calculations.comfortablePrice.toLocaleString()} home:
                </p>

                <div className="space-y-3 mb-6 relative z-10">
                  <div className="flex justify-between items-center">
                    <span className="text-white/70">Principal & Interest</span>
                    <span className="font-medium">${calculations.principalInterest.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-white/70">Property Tax</span>
                    <span className="font-medium">${calculations.propertyTax.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-white/70">Insurance (est.)</span>
                    <span className="font-medium">${calculations.insurance.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between items-center pt-4 border-t border-white/20">
                    <span className="font-serif text-lg">Total Monthly</span>
                    <span className="font-serif text-2xl text-coral">${calculations.monthlyPayment.toLocaleString()}</span>
                  </div>
                </div>

                <div className="bg-white/10 backdrop-blur-sm px-4 py-3 text-center relative z-10">
                  <span className="text-coral font-medium">{calculations.percentOfIncome}%</span>
                  <span className="text-white/70 ml-2">of your monthly income</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Additional Info */}
      <section className="section-padding bg-cream">
        <div className="container-width px-6 md:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <span className="inline-block bg-coral/10 text-coral px-4 py-2 text-sm font-medium tracking-wide uppercase mb-6">
                Keep in Mind
              </span>
              <h2 className="text-3xl md:text-4xl font-serif text-sage mb-4">What This Calculator Doesn&apos;t Include</h2>
              <p className="text-sage-light">Important costs to factor into your budget.</p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {additionalInfo.map((item, index) => (
                <div
                  key={item.title}
                  className="group bg-white p-6 md:p-8 transition-all duration-300 hover:shadow-soft hover:-translate-y-1"
                >
                  <div className="w-12 h-12 rounded-full bg-coral/10 flex items-center justify-center mb-4 group-hover:bg-coral transition-colors duration-300">
                    <item.icon className="h-6 w-6 text-coral group-hover:text-white transition-colors duration-300" />
                  </div>
                  <h3 className="font-serif text-xl text-sage mb-2">{item.title}</h3>
                  <p className="text-sage-light text-sm leading-relaxed">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Down Payment Help */}
      <section className="section-padding bg-white">
        <div className="container-width px-6 md:px-8">
          <div className="max-w-3xl mx-auto">
            <div className="bg-sage p-8 md:p-12 text-center text-white relative overflow-hidden">
              <div className="absolute top-0 left-0 w-64 h-64 bg-coral/10 rounded-full blur-3xl" />
              <div className="absolute bottom-0 right-0 w-48 h-48 bg-white/5 rounded-full blur-2xl" />

              <div className="relative z-10">
                <div className="w-16 h-16 rounded-full bg-coral/20 flex items-center justify-center mx-auto mb-6">
                  <Sparkles className="w-8 h-8 text-coral" />
                </div>
                <h2 className="text-3xl md:text-4xl font-serif mb-4">
                  Don&apos;t Have 20% Down?
                </h2>
                <p className="text-white/70 mb-8 max-w-xl mx-auto">
                  Most of our first-time buyers put down 3-10%. We&apos;ve helped clients access
                  $121K+ in grants and down payment assistance programs. Let&apos;s talk about your options.
                </p>
                <a
                  href="sms:6787079385?body=Hi Emily! I'm trying to figure out my budget for buying a home. Can we talk about my options?"
                  className="btn-primary inline-flex items-center gap-2"
                >
                  <MessageCircle className="h-4 w-4" />
                  Let&apos;s Talk Numbers
                </a>
              </div>
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

        <div className="container-width px-6 md:px-8 relative z-10">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif text-white mb-6">
              Ready to See
              <span className="block text-coral">What&apos;s Out There?</span>
            </h2>
            <p className="text-xl text-white/70 mb-10">
              Now that you know your budget, let&apos;s find homes that fit.
              I&apos;ll set up a personalized search based on your numbers.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a
                href="sms:6787079385?body=Hi Emily! I used your budget calculator and I'm looking to spend around $___. Can you set up a search for me?"
                className="btn-primary inline-flex items-center justify-center gap-2"
              >
                <MessageCircle className="h-4 w-4" />
                Start My Home Search
              </a>
              <Link
                href="/neighborhoods"
                className="bg-white text-sage px-8 py-4 font-medium tracking-wider text-sm uppercase hover:bg-cream transition-all duration-300 inline-flex items-center justify-center"
              >
                Explore Neighborhoods
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

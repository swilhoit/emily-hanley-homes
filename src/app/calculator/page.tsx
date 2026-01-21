'use client'

import { useState, useMemo } from 'react'
import { Calculator, AlertTriangle, CheckCircle, MessageCircle, Info } from 'lucide-react'
import Link from 'next/link'

export default function CalculatorPage() {
  const [annualIncome, setAnnualIncome] = useState(100000)
  const [monthlyDebts, setMonthlyDebts] = useState(500)
  const [downPayment, setDownPayment] = useState(50000)
  const [interestRate, setInterestRate] = useState(6.5)
  const [propertyTaxRate, setPropertyTaxRate] = useState(1.1) // Georgia average
  const [showAdvanced, setShowAdvanced] = useState(false)

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
    const monthlyInsurance = comfortablePrice * 0.003 / 12 // Estimate 0.3% annually
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
    // Iteratively calculate home price given max monthly payment
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

  return (
    <div className="pt-16">
      {/* Hero */}
      <section className="section-padding bg-sage">
        <div className="container-width text-center text-white">
          <h1 className="text-4xl md:text-5xl font-serif mb-4">Budget Calculator</h1>
          <p className="text-xl text-white/80 max-w-2xl mx-auto">
            What you can actually afford vs. what the bank says you qualify for.
            The honest numbers most agents won&apos;t tell you.
          </p>
        </div>
      </section>

      {/* Important Disclaimer */}
      <section className="py-6 bg-coral/10">
        <div className="container-width">
          <div className="flex items-start gap-4 max-w-3xl mx-auto">
            <AlertTriangle className="h-6 w-6 text-coral flex-shrink-0 mt-0.5" />
            <div>
              <h2 className="font-medium text-sage mb-1">The Truth About Pre-Approval</h2>
              <p className="text-sage-light text-sm">
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
        <div className="container-width">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Inputs */}
            <div>
              <h2 className="heading-md mb-6">Your Numbers</h2>

              <div className="space-y-6">
                <div>
                  <label className="block text-sage font-medium mb-2">
                    Annual Household Income
                  </label>
                  <div className="relative">
                    <span className="absolute left-4 top-1/2 -translate-y-1/2 text-sage-light">$</span>
                    <input
                      type="number"
                      value={annualIncome}
                      onChange={(e) => setAnnualIncome(Number(e.target.value))}
                      className="w-full pl-8 pr-4 py-3 border border-sand focus:border-coral focus:outline-none"
                    />
                  </div>
                  <p className="text-sage-light text-sm mt-1">Before taxes</p>
                </div>

                <div>
                  <label className="block text-sage font-medium mb-2">
                    Monthly Debt Payments
                  </label>
                  <div className="relative">
                    <span className="absolute left-4 top-1/2 -translate-y-1/2 text-sage-light">$</span>
                    <input
                      type="number"
                      value={monthlyDebts}
                      onChange={(e) => setMonthlyDebts(Number(e.target.value))}
                      className="w-full pl-8 pr-4 py-3 border border-sand focus:border-coral focus:outline-none"
                    />
                  </div>
                  <p className="text-sage-light text-sm mt-1">Car loans, student loans, credit cards, etc.</p>
                </div>

                <div>
                  <label className="block text-sage font-medium mb-2">
                    Down Payment
                  </label>
                  <div className="relative">
                    <span className="absolute left-4 top-1/2 -translate-y-1/2 text-sage-light">$</span>
                    <input
                      type="number"
                      value={downPayment}
                      onChange={(e) => setDownPayment(Number(e.target.value))}
                      className="w-full pl-8 pr-4 py-3 border border-sand focus:border-coral focus:outline-none"
                    />
                  </div>
                  <p className="text-sage-light text-sm mt-1">How much you have saved</p>
                </div>

                <button
                  onClick={() => setShowAdvanced(!showAdvanced)}
                  className="text-coral text-sm font-medium"
                >
                  {showAdvanced ? 'Hide' : 'Show'} Advanced Options
                </button>

                {showAdvanced && (
                  <div className="space-y-6 pt-4 border-t border-sand">
                    <div>
                      <label className="block text-sage font-medium mb-2">
                        Interest Rate (%)
                      </label>
                      <input
                        type="number"
                        step="0.1"
                        value={interestRate}
                        onChange={(e) => setInterestRate(Number(e.target.value))}
                        className="w-full px-4 py-3 border border-sand focus:border-coral focus:outline-none"
                      />
                    </div>
                    <div>
                      <label className="block text-sage font-medium mb-2">
                        Property Tax Rate (%)
                      </label>
                      <input
                        type="number"
                        step="0.1"
                        value={propertyTaxRate}
                        onChange={(e) => setPropertyTaxRate(Number(e.target.value))}
                        className="w-full px-4 py-3 border border-sand focus:border-coral focus:outline-none"
                      />
                      <p className="text-sage-light text-sm mt-1">Georgia average: ~1.1%</p>
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Results */}
            <div>
              <h2 className="heading-md mb-6">Your Results</h2>

              <div className="space-y-4 mb-8">
                {/* What you qualify for */}
                <div className="bg-red-50 border border-red-200 p-6">
                  <div className="flex items-start gap-3 mb-2">
                    <AlertTriangle className="h-5 w-5 text-red-500 flex-shrink-0 mt-0.5" />
                    <div>
                      <h3 className="font-medium text-sage">What You Qualify For</h3>
                      <p className="text-sage-light text-sm">Based on 43% debt-to-income ratio</p>
                    </div>
                  </div>
                  <div className="text-3xl font-serif text-red-600">
                    ${calculations.qualifyPrice.toLocaleString()}
                  </div>
                  <p className="text-red-600 text-sm mt-2">
                    This is what the bank might approve, but it&apos;s likely too high.
                  </p>
                </div>

                {/* What's comfortable */}
                <div className="bg-green-50 border border-green-200 p-6">
                  <div className="flex items-start gap-3 mb-2">
                    <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <h3 className="font-medium text-sage">What You Should Buy</h3>
                      <p className="text-sage-light text-sm">Based on 28% of income (recommended)</p>
                    </div>
                  </div>
                  <div className="text-3xl font-serif text-green-700">
                    ${calculations.comfortablePrice.toLocaleString()}
                  </div>
                  <p className="text-green-700 text-sm mt-2">
                    Room for life: vacations, emergencies, retirement savings.
                  </p>
                </div>

                {/* Conservative */}
                <div className="bg-cream p-6">
                  <div className="flex items-start gap-3 mb-2">
                    <Info className="h-5 w-5 text-sage flex-shrink-0 mt-0.5" />
                    <div>
                      <h3 className="font-medium text-sage">Conservative Option</h3>
                      <p className="text-sage-light text-sm">Based on 25% of income (very safe)</p>
                    </div>
                  </div>
                  <div className="text-3xl font-serif text-sage">
                    ${calculations.conservativePrice.toLocaleString()}
                  </div>
                </div>
              </div>

              {/* Monthly Breakdown */}
              <div className="bg-sage p-6 text-white">
                <h3 className="font-medium mb-4">Monthly Payment Breakdown</h3>
                <p className="text-white/70 text-sm mb-4">
                  For a ${calculations.comfortablePrice.toLocaleString()} home:
                </p>
                <div className="space-y-2 mb-4">
                  <div className="flex justify-between">
                    <span className="text-white/70">Principal & Interest</span>
                    <span>${calculations.principalInterest.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-white/70">Property Tax</span>
                    <span>${calculations.propertyTax.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-white/70">Insurance (est.)</span>
                    <span>${calculations.insurance.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between pt-2 border-t border-white/20">
                    <span className="font-medium">Total Monthly</span>
                    <span className="font-medium">${calculations.monthlyPayment.toLocaleString()}</span>
                  </div>
                </div>
                <div className="text-coral text-sm">
                  = {calculations.percentOfIncome}% of your monthly income
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Additional Info */}
      <section className="section-padding bg-cream">
        <div className="container-width">
          <div className="max-w-3xl mx-auto">
            <h2 className="heading-md text-center mb-8">What This Calculator Doesn&apos;t Include</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white p-6">
                <h3 className="font-medium text-sage mb-2">Closing Costs</h3>
                <p className="text-sage-light text-sm">
                  Typically 2-5% of home price. We often negotiate sellers to contribute—we&apos;ve
                  averaged $8K in closing cost credits for our buyers.
                </p>
              </div>
              <div className="bg-white p-6">
                <h3 className="font-medium text-sage mb-2">PMI</h3>
                <p className="text-sage-light text-sm">
                  If putting less than 20% down, add ~0.5-1% annually. There are ways to avoid
                  this—ask me about lender-paid PMI options.
                </p>
              </div>
              <div className="bg-white p-6">
                <h3 className="font-medium text-sage mb-2">HOA Fees</h3>
                <p className="text-sage-light text-sm">
                  Common in condos and some neighborhoods. Can range from $100 to $1,000+/month.
                  Always factor this in when comparing homes.
                </p>
              </div>
              <div className="bg-white p-6">
                <h3 className="font-medium text-sage mb-2">Maintenance</h3>
                <p className="text-sage-light text-sm">
                  Budget 1-2% of home value annually for repairs and maintenance. Older homes
                  typically need more. We&apos;ll help you assess condition during showings.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Down Payment Help */}
      <section className="section-padding bg-white">
        <div className="container-width">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="heading-md mb-4">Don&apos;t Have 20% Down?</h2>
            <p className="body-text mb-6">
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
      </section>

      {/* CTA */}
      <section className="section-padding bg-sage">
        <div className="container-width text-center">
          <h2 className="text-3xl font-serif text-white mb-4">Ready to See What&apos;s Out There?</h2>
          <p className="text-white/70 max-w-xl mx-auto mb-8">
            Now that you know your budget, let&apos;s find homes that fit.
            I&apos;ll set up a personalized search based on your numbers.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="sms:6787079385?body=Hi Emily! I used your budget calculator and I'm looking to spend around $___. Can you set up a search for me?"
              className="btn-primary inline-flex items-center gap-2"
            >
              <MessageCircle className="h-4 w-4" />
              Start My Home Search
            </a>
            <Link
              href="/neighborhoods"
              className="bg-white text-sage px-6 py-3 font-medium tracking-wide hover:bg-cream transition-colors"
            >
              Explore Neighborhoods
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

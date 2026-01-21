'use client'

import { MessageCircle, X } from 'lucide-react'
import { useState, useEffect } from 'react'

export function FloatingSMSButton() {
  const [showTooltip, setShowTooltip] = useState(false)
  const [dismissed, setDismissed] = useState(false)

  useEffect(() => {
    // Show tooltip after 5 seconds
    const timer = setTimeout(() => {
      if (!dismissed) {
        setShowTooltip(true)
      }
    }, 5000)

    return () => clearTimeout(timer)
  }, [dismissed])

  return (
    <div className="fixed bottom-6 right-6 z-50 flex items-end gap-3">
      {/* Tooltip */}
      {showTooltip && !dismissed && (
        <div className="relative bg-white shadow-soft-lg p-4 max-w-[200px] animate-fade-in-up">
          <button
            onClick={() => {
              setShowTooltip(false)
              setDismissed(true)
            }}
            className="absolute -top-2 -right-2 w-6 h-6 bg-sage text-white rounded-full flex items-center justify-center hover:bg-sage-dark transition-colors"
            aria-label="Dismiss"
          >
            <X className="w-3 h-3" />
          </button>
          <p className="text-sage text-sm">
            Text me a Zillow link and I&apos;ll tell you if it&apos;s worth it!
          </p>
          <div className="text-coral text-xs mt-2 font-medium">
            Response within 2 hours
          </div>
          {/* Arrow */}
          <div className="absolute right-6 -bottom-2 w-4 h-4 bg-white transform rotate-45" />
        </div>
      )}

      {/* Button */}
      <a
        href="sms:6787079385?body=Hi Emily! Can you check out this home for me?"
        className="relative bg-coral text-white p-4 rounded-full shadow-glow hover:bg-coral-dark transition-all duration-300 hover:scale-110 sms-pulse group"
        aria-label="Text Emily"
        onMouseEnter={() => !dismissed && setShowTooltip(true)}
      >
        <MessageCircle className="h-6 w-6 transition-transform group-hover:scale-110" />
      </a>
    </div>
  )
}

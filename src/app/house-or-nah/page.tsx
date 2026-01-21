'use client'

import { useState, useCallback } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowLeft, ArrowRight, Heart, X, RotateCcw, MessageCircle, Home, Sparkles } from 'lucide-react'

type HomeStyle = 'modern' | 'craftsman' | 'traditional' | 'contemporary' | 'farmhouse' | 'midcentury'

interface HomeCard {
  id: number
  image: string
  style: HomeStyle
  location: string
  feature: string
}

const homes: HomeCard[] = [
  {
    id: 1,
    image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&q=80',
    style: 'modern',
    location: 'Buckhead',
    feature: 'Floor-to-ceiling windows'
  },
  {
    id: 2,
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80',
    style: 'craftsman',
    location: 'Decatur',
    feature: 'Wraparound porch'
  },
  {
    id: 3,
    image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80',
    style: 'contemporary',
    location: 'Midtown',
    feature: 'Open concept living'
  },
  {
    id: 4,
    image: 'https://images.unsplash.com/photo-1605276374104-dee2a0ed3cd6?w=800&q=80',
    style: 'traditional',
    location: 'Brookhaven',
    feature: 'Classic brick exterior'
  },
  {
    id: 5,
    image: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=800&q=80',
    style: 'farmhouse',
    location: 'Alpharetta',
    feature: 'Modern farmhouse charm'
  },
  {
    id: 6,
    image: 'https://images.unsplash.com/photo-1600573472550-8090b5e0745e?w=800&q=80',
    style: 'midcentury',
    location: 'Virginia Highland',
    feature: 'Retro vibes, updated living'
  },
  {
    id: 7,
    image: 'https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?w=800&q=80',
    style: 'modern',
    location: 'West Midtown',
    feature: 'Minimalist design'
  },
  {
    id: 8,
    image: 'https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=800&q=80',
    style: 'craftsman',
    location: 'Grant Park',
    feature: 'Original hardwoods'
  },
  {
    id: 9,
    image: 'https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=800&q=80',
    style: 'contemporary',
    location: 'Old Fourth Ward',
    feature: 'Rooftop deck'
  },
  {
    id: 10,
    image: 'https://images.unsplash.com/photo-1600607687644-aac4c3eac7f4?w=800&q=80',
    style: 'traditional',
    location: 'Sandy Springs',
    feature: 'Established neighborhood'
  },
]

const styleDescriptions: Record<HomeStyle, { name: string; description: string; neighborhoods: string[] }> = {
  modern: {
    name: 'Modern Minimalist',
    description: 'You love clean lines, open spaces, and letting natural light do the talking. Think floor-to-ceiling windows, floating staircases, and kitchens that belong in a magazine.',
    neighborhoods: ['Buckhead', 'West Midtown', 'Midtown']
  },
  craftsman: {
    name: 'Craftsman Character',
    description: 'You appreciate the details—built-in bookshelves, original hardwoods, and front porches made for sweet tea. Homes with history and soul speak to you.',
    neighborhoods: ['Grant Park', 'Decatur', 'Kirkwood', 'East Atlanta']
  },
  traditional: {
    name: 'Timeless Traditional',
    description: 'You want a home that feels established and elegant. Brick exteriors, formal dining rooms, and tree-lined streets are your jam.',
    neighborhoods: ['Brookhaven', 'Sandy Springs', 'Dunwoody', 'Marietta']
  },
  contemporary: {
    name: 'Contemporary Cool',
    description: 'You want the best of both worlds—modern amenities with livable comfort. Open floor plans, rooftop decks, and walkable neighborhoods call your name.',
    neighborhoods: ['Old Fourth Ward', 'Midtown', 'Inman Park']
  },
  farmhouse: {
    name: 'Modern Farmhouse',
    description: 'Shiplap, barn doors, and big backyards make your heart sing. You want space to spread out without sacrificing style.',
    neighborhoods: ['Alpharetta', 'Milton', 'Roswell', 'Woodstock']
  },
  midcentury: {
    name: 'Mid-Century Maven',
    description: 'You have an eye for design and love homes with character. Vaulted ceilings, unique architecture, and neighborhoods with personality are your thing.',
    neighborhoods: ['Virginia Highland', 'Morningside', 'Druid Hills']
  }
}

export default function HouseOrNahPage() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [votes, setVotes] = useState<Record<HomeStyle, number>>({
    modern: 0,
    craftsman: 0,
    traditional: 0,
    contemporary: 0,
    farmhouse: 0,
    midcentury: 0
  })
  const [swipeDirection, setSwipeDirection] = useState<'left' | 'right' | null>(null)
  const [isAnimating, setIsAnimating] = useState(false)
  const [showResults, setShowResults] = useState(false)

  const currentHome = homes[currentIndex]
  const progress = ((currentIndex) / homes.length) * 100

  const handleVote = useCallback((liked: boolean) => {
    if (isAnimating) return

    setIsAnimating(true)
    setSwipeDirection(liked ? 'right' : 'left')

    if (liked) {
      setVotes(prev => ({
        ...prev,
        [currentHome.style]: prev[currentHome.style] + 1
      }))
    }

    setTimeout(() => {
      if (currentIndex < homes.length - 1) {
        setCurrentIndex(prev => prev + 1)
      } else {
        setShowResults(true)
      }
      setSwipeDirection(null)
      setIsAnimating(false)
    }, 300)
  }, [currentIndex, currentHome, isAnimating])

  const handleRestart = () => {
    setCurrentIndex(0)
    setVotes({
      modern: 0,
      craftsman: 0,
      traditional: 0,
      contemporary: 0,
      farmhouse: 0,
      midcentury: 0
    })
    setShowResults(false)
  }

  const getTopStyles = () => {
    const sorted = Object.entries(votes)
      .sort(([, a], [, b]) => b - a)
      .filter(([, count]) => count > 0)

    if (sorted.length === 0) {
      return [['contemporary', 0] as [string, number]]
    }

    return sorted.slice(0, 2) as [HomeStyle, number][]
  }

  // Keyboard navigation
  if (typeof window !== 'undefined') {
    document.onkeydown = (e) => {
      if (showResults) return
      if (e.key === 'ArrowLeft') handleVote(false)
      if (e.key === 'ArrowRight') handleVote(true)
    }
  }

  if (showResults) {
    const topStyles = getTopStyles()
    const primaryStyle = topStyles[0]?.[0] as HomeStyle || 'contemporary'
    const primaryInfo = styleDescriptions[primaryStyle]

    return (
      <main className="min-h-screen bg-gradient-to-br from-cream via-warm-white to-cream">
        <div className="container-width px-6 py-20 md:py-28">
          {/* Back Link */}
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sage-light hover:text-sage transition-colors mb-12"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </Link>

          <div className="max-w-2xl mx-auto text-center">
            {/* Results Header */}
            <div className="inline-flex items-center gap-2 bg-coral/10 text-coral px-4 py-2 rounded-full text-sm font-medium mb-8">
              <Sparkles className="w-4 h-4" />
              Your Style Results
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif text-sage mb-6">
              You&apos;re a{' '}
              <span className="text-coral">{primaryInfo.name}</span>
            </h1>

            <p className="text-lg text-sage-light leading-relaxed mb-10">
              {primaryInfo.description}
            </p>

            {/* Recommended Neighborhoods */}
            <div className="bg-white p-8 shadow-soft mb-10">
              <h3 className="font-medium text-sage mb-4 flex items-center justify-center gap-2">
                <Home className="w-5 h-5 text-coral" />
                Neighborhoods You&apos;ll Love
              </h3>
              <div className="flex flex-wrap justify-center gap-3">
                {primaryInfo.neighborhoods.map(hood => (
                  <span
                    key={hood}
                    className="px-4 py-2 bg-cream text-sage text-sm rounded-full"
                  >
                    {hood}
                  </span>
                ))}
              </div>
            </div>

            {/* Secondary Style */}
            {topStyles[1] && topStyles[1][1] > 0 && (
              <p className="text-sage-light mb-10">
                You also showed love for{' '}
                <span className="font-medium text-sage">
                  {styleDescriptions[topStyles[1][0] as HomeStyle].name}
                </span>{' '}
                homes!
              </p>
            )}

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <a
                href={`sms:6787079385?body=Hi Emily! I just took the House or Nah quiz and I'm a ${primaryInfo.name}. Can you help me find homes in ${primaryInfo.neighborhoods[0]}?`}
                className="btn-primary inline-flex items-center justify-center gap-2"
              >
                <MessageCircle className="w-4 h-4" />
                Text Emily My Results
              </a>
              <button
                onClick={handleRestart}
                className="btn-outline-dark inline-flex items-center justify-center gap-2"
              >
                <RotateCcw className="w-4 h-4" />
                Take It Again
              </button>
            </div>

            <p className="text-sm text-sage-muted">
              Want to explore homes that match your style? Text me and I&apos;ll send you some listings!
            </p>
          </div>
        </div>
      </main>
    )
  }

  return (
    <main className="min-h-screen bg-gradient-to-br from-sage via-sage-dark to-sage overflow-hidden">
      <div className="container-width px-6 py-8 md:py-12">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-white/70 hover:text-white transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span className="hidden sm:inline">Back</span>
          </Link>

          <h1 className="text-xl md:text-2xl font-serif text-white">House or Nah?</h1>

          <span className="text-white/70 text-sm">
            {currentIndex + 1} / {homes.length}
          </span>
        </div>

        {/* Progress Bar */}
        <div className="w-full h-1 bg-white/20 rounded-full mb-8 overflow-hidden">
          <div
            className="h-full bg-coral transition-all duration-300 ease-out"
            style={{ width: `${progress}%` }}
          />
        </div>

        {/* Card Stack */}
        <div className="relative max-w-lg mx-auto">
          {/* Current Card */}
          <div
            className={`relative aspect-[3/4] rounded-2xl overflow-hidden shadow-2xl transition-all duration-300 ${
              swipeDirection === 'left' ? '-translate-x-full rotate-[-20deg] opacity-0' :
              swipeDirection === 'right' ? 'translate-x-full rotate-[20deg] opacity-0' :
              ''
            }`}
          >
            <Image
              src={currentHome.image}
              alt={`${currentHome.style} home in ${currentHome.location}`}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 512px"
              priority
            />

            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

            {/* Card Content */}
            <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
              <p className="text-sm text-white/80 mb-1">{currentHome.location}</p>
              <p className="text-xl font-medium mb-2">{currentHome.feature}</p>
            </div>

            {/* Swipe Indicators */}
            <div className={`absolute top-6 left-6 px-4 py-2 rounded-lg border-4 border-red-500 text-red-500 font-bold text-2xl rotate-[-20deg] transition-opacity ${
              swipeDirection === 'left' ? 'opacity-100' : 'opacity-0'
            }`}>
              NAH
            </div>
            <div className={`absolute top-6 right-6 px-4 py-2 rounded-lg border-4 border-green-500 text-green-500 font-bold text-2xl rotate-[20deg] transition-opacity ${
              swipeDirection === 'right' ? 'opacity-100' : 'opacity-0'
            }`}>
              YES!
            </div>
          </div>

          {/* Next Card Preview (behind current) */}
          {currentIndex < homes.length - 1 && (
            <div className="absolute inset-0 -z-10 scale-95 opacity-50">
              <div className="relative aspect-[3/4] rounded-2xl overflow-hidden">
                <Image
                  src={homes[currentIndex + 1].image}
                  alt="Next home"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 512px"
                />
              </div>
            </div>
          )}
        </div>

        {/* Action Buttons */}
        <div className="flex items-center justify-center gap-6 mt-8">
          <button
            onClick={() => handleVote(false)}
            disabled={isAnimating}
            className="w-16 h-16 rounded-full bg-white/10 backdrop-blur-sm border-2 border-white/30 flex items-center justify-center text-white hover:bg-red-500/20 hover:border-red-400 hover:text-red-400 transition-all duration-200 disabled:opacity-50"
            aria-label="Nah"
          >
            <X className="w-8 h-8" />
          </button>

          <button
            onClick={() => handleVote(true)}
            disabled={isAnimating}
            className="w-20 h-20 rounded-full bg-coral border-4 border-coral-dark flex items-center justify-center text-white hover:scale-110 hover:shadow-glow transition-all duration-200 disabled:opacity-50"
            aria-label="House!"
          >
            <Heart className="w-10 h-10" />
          </button>
        </div>

        {/* Instructions */}
        <p className="text-center text-white/50 text-sm mt-6">
          Swipe right or press <kbd className="px-2 py-1 bg-white/10 rounded">→</kbd> for homes you love
        </p>
      </div>
    </main>
  )
}

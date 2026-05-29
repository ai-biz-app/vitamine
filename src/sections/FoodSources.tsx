import React, { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

interface FoodTip {
  icon: string
  title: string
  body: string
  accentColor: string
}

const foodTips: FoodTip[] = [
  {
    icon: 'leaf',
    title: 'Pair Fat with Fat-Soluble Vitamins',
    body: 'Add olive oil to spinach salad to boost absorption of vitamins A and K.',
    accentColor: '#4ade80',
  },
  {
    icon: 'droplet',
    title: 'Vitamin C Enhances Iron',
    body: 'Squeeze lemon on lentil dishes or pair bell peppers with iron-rich plant foods.',
    accentColor: '#60a5fa',
  },
  {
    icon: 'sun',
    title: 'Steam, Don\'t Boil',
    body: 'Steaming preserves 60-90% of vitamin C compared to boiling which can destroy over 50%.',
    accentColor: '#facc15',
  },
  {
    icon: 'snowflake',
    title: 'Freeze to Preserve',
    body: 'Frozen vegetables often retain more vitamins than produce stored for weeks in the fridge.',
    accentColor: '#818cf8',
  },
  {
    icon: 'clock',
    title: 'Eat Fresh, Cook Briefly',
    body: 'Microwaving preserves 85-90% of vitamin C — the best cooking method for nutrient retention.',
    accentColor: '#fb923c',
  },
]

function TipIcon({ icon, color }: { icon: string; color: string }) {
  const icons: Record<string, React.ReactNode> = {
    leaf: (
      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M11 20A7 7 0 0 1 9.8 6.9C15.5 5 17 4.5 19 2c1 2 2 4.5 2 8a7 7 0 0 1-10 10Z" />
        <path d="M2 21c0-3 1.8-5.6 4.5-6.8" />
      </svg>
    ),
    droplet: (
      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22a7 7 0 0 0 7-7c0-2-1-3.9-3-7.4C14.8 6.4 13 3 12 3S9.2 6.4 8 7.6C6 11.1 5 13 5 15a7 7 0 0 0 7 7Z" />
      </svg>
    ),
    sun: (
      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="4" />
        <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41" />
      </svg>
    ),
    snowflake: (
      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2v20M2 12h20M4.93 4.93l14.14 14.14M19.07 4.93L4.93 19.07" />
        <path d="M12 5l2-2M12 5l-2-2M12 19l2 2M12 19l-2 2M5 12l-2 2M5 12l-2-2M19 12l2 2M19 12l2-2" />
      </svg>
    ),
    clock: (
      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <path d="M12 6v6l4 2" />
      </svg>
    ),
  }

  return (
    <div
      className="w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0"
      style={{ background: color }}
    >
      {icons[icon]}
    </div>
  )
}

export default function FoodSources() {
  const sectionRef = useRef<HTMLElement>(null)
  const imgRef = useRef<HTMLDivElement>(null)
  const tipsRef = useRef<(HTMLDivElement | null)[]>([])

  useEffect(() => {
    const section = sectionRef.current
    const img = imgRef.current
    if (!section || !img) return

    const ctx = gsap.context(() => {
      gsap.from(img, {
        x: -40,
        opacity: 0,
        duration: 1,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: section,
          start: 'top 75%',
          end: 'top 40%',
          scrub: 1.5,
        },
      })

      tipsRef.current.forEach((tip, i) => {
        if (!tip) return
        gsap.from(tip, {
          x: 40,
          opacity: 0,
          duration: 0.8,
          ease: 'power2.out',
          delay: i * 0.1,
          scrollTrigger: {
            trigger: section,
            start: 'top 75%',
            end: 'top 40%',
            scrub: 1.5,
          },
        })
      })
    }, section)

    return () => ctx.revert()
  }, [])

  return (
    <section
      ref={sectionRef}
      className="w-full section-padding"
      style={{ background: '#f5f5f0' }}
    >
      <div className="content-max px-6">
        <div className="text-center mb-20">
          <span className="label-mono text-[#4a4a4a]">Nutrition</span>
          <h2
            className="text-[#1a1a1a] font-medium mt-3 tracking-[-0.01em]"
            style={{
              fontFamily: "'Geist Sans', sans-serif",
              fontSize: 'clamp(28px, 3.5vw, 40px)',
            }}
          >
            Eat the Rainbow
          </h2>
          <p
            className="text-[#4a4a4a] mt-3 mx-auto"
            style={{
              fontFamily: "'Geist Sans', sans-serif",
              fontSize: 17,
              lineHeight: 1.7,
              maxWidth: 600,
            }}
          >
            A varied diet rich in whole foods provides all essential vitamins.
            Strategic food pairings enhance absorption and bioavailability.
          </p>
        </div>

        <div className="flex flex-col md:flex-row gap-12 md:gap-16 items-start">
          <div ref={imgRef} className="w-full md:w-1/2">
            <img
              src="/sources-meal.jpg"
              alt="Healthy meal with salmon salad"
              className="w-full rounded-lg object-cover"
              style={{ aspectRatio: '3/2' }}
            />
          </div>

          <div className="w-full md:w-1/2 flex flex-col gap-4">
            {foodTips.map((tip, i) => (
              <div
                key={tip.title}
                ref={(el) => { tipsRef.current[i] = el }}
                className="bg-white rounded-lg p-5 flex items-start gap-4"
                style={{
                  borderLeft: `3px solid ${tip.accentColor}`,
                  boxShadow: '0 1px 3px rgba(0,0,0,0.04)',
                }}
              >
                <TipIcon icon={tip.icon} color={tip.accentColor} />
                <div>
                  <h4
                    className="text-[#1a1a1a] font-medium"
                    style={{
                      fontFamily: "'Geist Sans', sans-serif",
                      fontSize: 15,
                    }}
                  >
                    {tip.title}
                  </h4>
                  <p
                    className="text-[#4a4a4a] mt-1"
                    style={{
                      fontFamily: "'Geist Sans', sans-serif",
                      fontSize: 14,
                      lineHeight: 1.5,
                    }}
                  >
                    {tip.body}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

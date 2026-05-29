import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

interface VitaminCard {
  name: string
  subtitle: string
  description: string
  color: string
  bgTint: string
  size: 'large' | 'medium' | 'small'
}

const waterSolubleVitamins: VitaminCard[] = [
  {
    name: 'Vitamin B1',
    subtitle: 'Thiamine',
    description: 'Converts nutrients into energy. Essential for nerve function and muscle contraction. Found in whole grains and pork.',
    color: '#f87171',
    bgTint: 'rgba(248, 113, 113, 0.08)',
    size: 'large',
  },
  {
    name: 'Vitamin B2',
    subtitle: 'Riboflavin',
    description: 'Supports cellular growth and development. Acts as an antioxidant and helps break down nutrients.',
    color: '#60a5fa',
    bgTint: 'rgba(96, 165, 250, 0.08)',
    size: 'large',
  },
  {
    name: 'Vitamin B3',
    subtitle: 'Niacin',
    description: 'Key player in DNA repair and cell signaling. Helps maintain healthy skin and supports digestion.',
    color: '#2dd4bf',
    bgTint: 'rgba(45, 212, 191, 0.08)',
    size: 'large',
  },
  {
    name: 'Vitamin B5',
    subtitle: 'Pantothenic Acid',
    description: 'Critical for fatty acid metabolism and hormone production. Found in almost all foods.',
    color: '#f472b6',
    bgTint: 'rgba(244, 114, 182, 0.08)',
    size: 'medium',
  },
  {
    name: 'Vitamin B6',
    subtitle: 'Pyridoxine',
    description: 'Involved in over 100 enzyme reactions, primarily amino acid metabolism. Supports brain health.',
    color: '#a3e635',
    bgTint: 'rgba(163, 230, 53, 0.08)',
    size: 'medium',
  },
  {
    name: 'Vitamin B7',
    subtitle: 'Biotin',
    description: 'Essential for gene expression regulation and fatty acid synthesis. Supports healthy hair and nails.',
    color: '#34d399',
    bgTint: 'rgba(52, 211, 153, 0.08)',
    size: 'medium',
  },
  {
    name: 'Vitamin B9',
    subtitle: 'Folate',
    description: 'Vital for cell division and DNA synthesis. Critical during pregnancy to prevent neural tube defects.',
    color: '#818cf8',
    bgTint: 'rgba(129, 140, 248, 0.08)',
    size: 'small',
  },
  {
    name: 'Vitamin B12',
    subtitle: 'Cobalamin',
    description: 'Essential for neurological function and red blood cell formation. Found almost exclusively in animal products.',
    color: '#c084fc',
    bgTint: 'rgba(192, 132, 252, 0.08)',
    size: 'small',
  },
  {
    name: 'Vitamin C',
    subtitle: 'Ascorbic Acid',
    description: 'The indispensable antioxidant. Powers collagen synthesis, boosts immunity, and enhances iron absorption.',
    color: '#fb7185',
    bgTint: 'rgba(251, 113, 133, 0.08)',
    size: 'small',
  },
]

export default function WaterSoluble() {
  const sectionRef = useRef<HTMLElement>(null)
  const cardsRef = useRef<(HTMLDivElement | null)[]>([])

  useEffect(() => {
    const section = sectionRef.current
    if (!section) return

    const ctx = gsap.context(() => {
      cardsRef.current.forEach((card, i) => {
        if (!card) return
        gsap.from(card, {
          y: 40,
          x: (Math.random() - 0.5) * 40,
          opacity: 0,
          duration: 0.8,
          ease: 'power3.out',
          delay: i * 0.08,
          scrollTrigger: {
            trigger: section,
            start: 'top 80%',
            toggleActions: 'play none none none',
          },
        })
      })
    }, section)

    return () => ctx.revert()
  }, [])

  const getSizeClasses = (size: string) => {
    switch (size) {
      case 'large':
        return 'col-span-1 md:col-span-1'
      case 'medium':
        return 'col-span-1'
      case 'small':
        return 'col-span-1'
      default:
        return 'col-span-1'
    }
  }

  return (
    <section
      ref={sectionRef}
      id="water-soluble"
      className="w-full section-padding"
      style={{ background: '#f5f5f0' }}
    >
      <div className="content-max px-6">
        <div className="text-center mb-20">
          <span className="label-mono text-[#4a4a4a]">Water-Soluble</span>
          <h2
            className="text-[#1a1a1a] font-medium mt-3 tracking-[-0.01em]"
            style={{
              fontFamily: "'Geist Sans', sans-serif",
              fontSize: 'clamp(28px, 3.5vw, 40px)',
            }}
          >
            Replenish Daily
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
            The B-complex vitamins and vitamin C dissolve in water and must be
            consumed regularly, as your body cannot store them in significant
            amounts.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {waterSolubleVitamins.map((vitamin, i) => (
            <div
              key={vitamin.name}
              ref={(el) => { cardsRef.current[i] = el }}
              className={`rounded-xl p-7 bg-white transition-all duration-300 hover:-translate-y-1 cursor-default ${getSizeClasses(vitamin.size)}`}
              style={{
                background: vitamin.bgTint,
                boxShadow: '0 1px 3px rgba(0,0,0,0.04)',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.boxShadow =
                  '0 8px 24px rgba(0,0,0,0.08)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.boxShadow =
                  '0 1px 3px rgba(0,0,0,0.04)'
              }}
            >
              <div className="flex items-center gap-3 mb-4">
                <div
                  className="w-8 h-8 rounded-full flex items-center justify-center"
                  style={{ background: `${vitamin.color}25` }}
                >
                  <div
                    className="w-3 h-3 rounded-full"
                    style={{ background: vitamin.color }}
                  />
                </div>
                <span
                  className="label-mono text-[#4a4a4a]"
                  style={{ fontSize: 10 }}
                >
                  Water-Soluble
                </span>
              </div>
              <h3
                className="text-[#1a1a1a] font-semibold"
                style={{
                  fontFamily: "'Geist Sans', sans-serif",
                  fontSize: 20,
                }}
              >
                {vitamin.name}
              </h3>
              <p
                className="text-[#4a4a4a] mt-1"
                style={{
                  fontFamily: "'Geist Mono', monospace",
                  fontSize: 12,
                  opacity: 0.7,
                }}
              >
                {vitamin.subtitle}
              </p>
              <p
                className="text-[#4a4a4a] mt-4"
                style={{
                  fontFamily: "'Geist Sans', sans-serif",
                  fontSize: 15,
                  lineHeight: 1.6,
                }}
              >
                {vitamin.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

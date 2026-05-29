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
}

const fatSolubleVitamins: VitaminCard[] = [
  {
    name: 'Vitamin A',
    subtitle: 'Retinol',
    description:
      'Essential for vision, immune function, and cell growth. Found in liver, carrots, and sweet potatoes.',
    color: '#fb923c',
    bgTint: 'rgba(251, 146, 60, 0.08)',
  },
  {
    name: 'Vitamin D',
    subtitle: 'Calciferol',
    description:
      'The sunshine vitamin. Regulates calcium absorption and bone health. Synthesized in skin via UV exposure.',
    color: '#facc15',
    bgTint: 'rgba(250, 204, 21, 0.08)',
  },
  {
    name: 'Vitamin E',
    subtitle: 'Tocopherol',
    description:
      'Primary lipid-soluble antioxidant. Protects cell membranes from oxidative damage. Found in nuts and seeds.',
    color: '#a78bfa',
    bgTint: 'rgba(167, 139, 250, 0.08)',
  },
  {
    name: 'Vitamin K',
    subtitle: 'Phylloquinone',
    description:
      'Critical for blood clotting and bone metabolism. Abundant in leafy greens like kale and spinach.',
    color: '#4ade80',
    bgTint: 'rgba(74, 222, 128, 0.08)',
  },
]

export default function FatSoluble() {
  const sectionRef = useRef<HTMLElement>(null)
  const cardsRef = useRef<(HTMLDivElement | null)[]>([])

  useEffect(() => {
    const section = sectionRef.current
    if (!section) return

    const ctx = gsap.context(() => {
      gsap.from(cardsRef.current.filter(Boolean), {
        y: 50,
        opacity: 0,
        stagger: 0.15,
        duration: 0.8,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: section,
          start: 'top 75%',
          end: 'top 45%',
          scrub: 1.5,
        },
      })
    }, section)

    return () => ctx.revert()
  }, [])

  return (
    <section
      ref={sectionRef}
      id="fat-soluble"
      className="w-full section-padding"
      style={{ background: '#fafaf8' }}
    >
      <div className="content-max px-6">
        <div className="text-center mb-20">
          <span className="label-mono text-[#4a4a4a]">Fat-Soluble</span>
          <h2
            className="text-[#1a1a1a] font-medium mt-3 tracking-[-0.01em]"
            style={{
              fontFamily: "'Geist Sans', sans-serif",
              fontSize: 'clamp(28px, 3.5vw, 40px)',
            }}
          >
            Stored for the Long Term
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
            Vitamins A, D, E, and K dissolve in fat and can be stored in your
            liver and fatty tissues for weeks or months.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {fatSolubleVitamins.map((vitamin, i) => (
            <div
              key={vitamin.name}
              ref={(el) => { cardsRef.current[i] = el }}
              className="rounded-xl p-8 bg-white transition-all duration-300 hover:-translate-y-1 cursor-default"
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
              <div
                className="w-10 h-10 rounded-full mb-5"
                style={{ background: `${vitamin.color}25` }}
              >
                <div
                  className="w-full h-full rounded-full"
                  style={{
                    background: vitamin.color,
                    opacity: 0.6,
                    transform: 'scale(0.5)',
                  }}
                />
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

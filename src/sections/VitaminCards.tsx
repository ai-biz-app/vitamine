import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

interface Vitamin {
  name: string
  subtitle: string
  category: string
  description: string
  color: string
  bgTint: string
}

const vitamins: Vitamin[] = [
  { name: 'Vitamin A', subtitle: 'Retinol', category: 'Fat-Soluble', description: 'Vision, immunity, and cell growth', color: '#fb923c', bgTint: 'rgba(251, 146, 60, 0.1)' },
  { name: 'Vitamin D', subtitle: 'Calciferol', category: 'Fat-Soluble', description: 'Bone health and calcium absorption', color: '#facc15', bgTint: 'rgba(250, 204, 21, 0.1)' },
  { name: 'Vitamin E', subtitle: 'Tocopherol', category: 'Fat-Soluble', description: 'Antioxidant protection for cells', color: '#a78bfa', bgTint: 'rgba(167, 139, 250, 0.1)' },
  { name: 'Vitamin K', subtitle: 'Phylloquinone', category: 'Fat-Soluble', description: 'Blood clotting and bone metabolism', color: '#4ade80', bgTint: 'rgba(74, 222, 128, 0.1)' },
  { name: 'Vitamin B1', subtitle: 'Thiamine', category: 'Water-Soluble', description: 'Energy metabolism and nerve function', color: '#f87171', bgTint: 'rgba(248, 113, 113, 0.1)' },
  { name: 'Vitamin B2', subtitle: 'Riboflavin', category: 'Water-Soluble', description: 'Cellular growth and development', color: '#60a5fa', bgTint: 'rgba(96, 165, 250, 0.1)' },
  { name: 'Vitamin B3', subtitle: 'Niacin', category: 'Water-Soluble', description: 'DNA repair and cell signaling', color: '#2dd4bf', bgTint: 'rgba(45, 212, 191, 0.1)' },
  { name: 'Vitamin B5', subtitle: 'Pantothenic Acid', category: 'Water-Soluble', description: 'Fatty acid metabolism', color: '#f472b6', bgTint: 'rgba(244, 114, 182, 0.1)' },
  { name: 'Vitamin B6', subtitle: 'Pyridoxine', category: 'Water-Soluble', description: 'Amino acid metabolism', color: '#a3e635', bgTint: 'rgba(163, 230, 53, 0.1)' },
  { name: 'Vitamin B7', subtitle: 'Biotin', category: 'Water-Soluble', description: 'Gene expression regulation', color: '#34d399', bgTint: 'rgba(52, 211, 153, 0.1)' },
  { name: 'Vitamin B9', subtitle: 'Folate', category: 'Water-Soluble', description: 'Cell division and DNA synthesis', color: '#818cf8', bgTint: 'rgba(129, 140, 248, 0.1)' },
  { name: 'Vitamin B12', subtitle: 'Cobalamin', category: 'Water-Soluble', description: 'Neurological function', color: '#c084fc', bgTint: 'rgba(192, 132, 252, 0.1)' },
  { name: 'Vitamin C', subtitle: 'Ascorbic Acid', category: 'Water-Soluble', description: 'Collagen synthesis and immunity', color: '#fb7185', bgTint: 'rgba(251, 113, 133, 0.1)' },
]

export default function VitaminCards() {
  const sectionRef = useRef<HTMLElement>(null)
  const cardsContainerRef = useRef<HTMLDivElement>(null)
  const cardRefs = useRef<(HTMLDivElement | null)[]>([])

  useEffect(() => {
    const section = sectionRef.current
    const cardsContainer = cardsContainerRef.current
    if (!section || !cardsContainer) return

    const ctx = gsap.context(() => {
      // Initial staggered entrance animation
      gsap.from(cardRefs.current.filter(Boolean), {
        yPercent: 150,
        opacity: 0,
        stagger: 0.06,
        duration: 1.2,
        ease: 'power4.out',
        scrollTrigger: {
          trigger: section,
          start: 'top 80%',
          toggleActions: 'play none none none',
        },
      })

      // Scroll-driven stacking effect
      const scrollTl = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: 'top 15%',
          end: '+=200%',
          pin: true,
          scrub: 0.8,
          snap: {
            snapTo: (progress) => {
              if (progress < 0.15) return 0
              if (progress > 0.85) return 1
              return 0.5
            },
            duration: { min: 0.2, max: 0.5 },
            ease: 'power2.inOut',
          },
        },
      })

      // Phase 1: Cards fly to center and stack
      cardRefs.current.forEach((card, i) => {
        if (!card) return
        const isLeft = i % 2 === 0
        const targetX = isLeft ? '18vw' : '-18vw'
        const targetY = `${(i - 6) * 8 - 30}px`
        const rotation = (i - 6) * 1.5

        scrollTl.to(
          card,
          {
            x: targetX,
            y: targetY,
            scale: 0.72,
            rotation: rotation,
            duration: 1,
            ease: 'power2.inOut',
          },
          i * 0.04
        )
      })

      // Phase 2: Stack shrinks and rotates away
      scrollTl.to(
        cardsContainer,
        {
          rotationY: -30,
          rotation: 8,
          scale: 0.6,
          x: '-20vw',
          opacity: 0,
          duration: 0.8,
          ease: 'power4.in',
        },
        '>'
      )
    }, section)

    return () => ctx.revert()
  }, [])

  return (
    <section
      ref={sectionRef}
      id="explore"
      className="w-full relative"
      style={{ minHeight: '100vh', perspective: '1000px' }}
    >
      <div className="content-max px-6 pt-16 pb-8 text-center">
        <span className="label-mono text-[#4a4a4a]">Interactive Explorer</span>
        <h2
          className="text-[#1a1a1a] font-medium mt-3 tracking-[-0.01em]"
          style={{
            fontFamily: "'Geist Sans', sans-serif",
            fontSize: 'clamp(28px, 3.5vw, 40px)',
          }}
        >
          Meet All 13 Vitamins
        </h2>
        <p
          className="text-[#4a4a4a] mt-3 mx-auto"
          style={{
            fontFamily: "'Geist Sans', sans-serif",
            fontSize: 17,
            lineHeight: 1.7,
            maxWidth: 500,
          }}
        >
          Scroll to see them stack together — each one plays a unique role in your health.
        </p>
      </div>

      <div
        ref={cardsContainerRef}
        className="relative w-full flex flex-wrap justify-center gap-4 px-6"
        style={{ perspective: '1000px', minHeight: '50vh', paddingBottom: 80 }}
      >
        {vitamins.map((vitamin, i) => (
          <div
            key={vitamin.name}
            ref={(el) => { cardRefs.current[i] = el }}
            className="relative flex-shrink-0 rounded-lg p-5 cursor-default select-none"
            style={{
              width: 'clamp(140px, 18vw, 200px)',
              height: 130,
              background: vitamin.bgTint,
              border: `1px solid ${vitamin.color}20`,
              boxShadow: `0 2px 12px ${vitamin.color}15`,
              willChange: 'transform',
              zIndex: i,
            }}
          >
            <div className="flex items-center gap-2 mb-2">
              <div
                className="w-3 h-3 rounded-full flex-shrink-0"
                style={{ background: vitamin.color }}
              />
              <span
                className="label-mono text-[#4a4a4a]"
                style={{ fontSize: 10 }}
              >
                {vitamin.category}
              </span>
            </div>
            <h3
              className="text-[#1a1a1a] font-semibold"
              style={{
                fontFamily: "'Geist Sans', sans-serif",
                fontSize: 'clamp(16px, 1.5vw, 20px)',
              }}
            >
              {vitamin.name}
            </h3>
            <p
              className="text-[#4a4a4a] mt-0.5"
              style={{
                fontFamily: "'Geist Mono', monospace",
                fontSize: 11,
              }}
            >
              {vitamin.subtitle}
            </p>
            <p
              className="text-[#4a4a4a] mt-2"
              style={{
                fontFamily: "'Geist Sans', sans-serif",
                fontSize: 12,
                lineHeight: 1.4,
                opacity: 0.8,
              }}
            >
              {vitamin.description}
            </p>
            <div
              className="absolute bottom-3 right-3 w-8 h-8 rounded-full"
              style={{ background: `${vitamin.color}30` }}
            />
          </div>
        ))}
      </div>
    </section>
  )
}

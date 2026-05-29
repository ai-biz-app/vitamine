import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

interface DiseaseCard {
  title: string
  subtitle: string
  description: string
  image: string
}

const diseases: DiseaseCard[] = [
  {
    title: 'Scurvy',
    subtitle: 'Vitamin C Deficiency',
    description:
      "The sailor's plague. Caused bleeding gums, loose teeth, and poor wound healing. James Lind's 1747 citrus cure changed naval history.",
    image: '/scurvy-card.jpg',
  },
  {
    title: 'Rickets',
    subtitle: 'Vitamin D Deficiency',
    description:
      'Bone deformities in children from lack of sunlight. Epidemic in 19th-century industrial cities until cod liver oil and fortification.',
    image: '/rickets-card.jpg',
  },
  {
    title: 'Beriberi',
    subtitle: 'Vitamin B1 Deficiency',
    description:
      "Peripheral neuropathy and heart failure from polished white rice diets. Christiaan Eijkman's 1897 discovery led to the Nobel Prize.",
    image: '/beriberi-card.jpg',
  },
  {
    title: 'Pellagra',
    subtitle: 'Vitamin B3 Deficiency',
    description:
      'The four Ds: dermatitis, diarrhea, dementia, death. 100,000+ deaths in the American South before niacin fortification.',
    image: '/pellagra-card.jpg',
  },
]

export default function DeficiencyDiseases() {
  const sectionRef = useRef<HTMLElement>(null)
  const stripRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const section = sectionRef.current
    const strip = stripRef.current
    if (!section || !strip) return

    const ctx = gsap.context(() => {
      // Horizontal scroll effect
      const scrollWidth = strip.scrollWidth - window.innerWidth + 100

      gsap.to(strip, {
        x: -scrollWidth,
        ease: 'none',
        scrollTrigger: {
          trigger: section,
          start: 'top 60%',
          end: 'bottom 20%',
          scrub: true,
        },
      })
    }, section)

    return () => ctx.revert()
  }, [])

  return (
    <section
      ref={sectionRef}
      className="w-full section-padding overflow-hidden"
      style={{ background: '#fafaf8' }}
    >
      <div className="content-max px-6 mb-16">
        <div className="text-center">
          <span className="label-mono text-[#4a4a4a]">Historical Impact</span>
          <h2
            className="text-[#1a1a1a] font-medium mt-3 tracking-[-0.01em]"
            style={{
              fontFamily: "'Geist Sans', sans-serif",
              fontSize: 'clamp(28px, 3.5vw, 40px)',
            }}
          >
            When Vitamins Are Missing
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
            Before vitamins were discovered, deficiency diseases killed millions.
            Understanding these conditions underscores the critical importance of
            proper nutrition.
          </p>
        </div>
      </div>

      <div
        ref={stripRef}
        className="flex gap-6 px-6"
        style={{ width: 'max-content' }}
      >
        {diseases.map((disease) => (
          <div
            key={disease.title}
            className="flex-shrink-0 rounded-xl overflow-hidden bg-white"
            style={{
              width: 300,
              boxShadow: '0 2px 8px rgba(0,0,0,0.06)',
            }}
          >
            <div className="w-full overflow-hidden" style={{ height: 200 }}>
              <img
                src={disease.image}
                alt={disease.title}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-6">
              <h3
                className="text-[#1a1a1a] font-semibold"
                style={{
                  fontFamily: "'Geist Sans', sans-serif",
                  fontSize: 22,
                }}
              >
                {disease.title}
              </h3>
              <p
                className="text-[#4a4a4a] mt-1"
                style={{
                  fontFamily: "'Geist Mono', monospace",
                  fontSize: 12,
                  opacity: 0.7,
                }}
              >
                {disease.subtitle}
              </p>
              <p
                className="text-[#4a4a4a] mt-3"
                style={{
                  fontFamily: "'Geist Sans', sans-serif",
                  fontSize: 14,
                  lineHeight: 1.6,
                }}
              >
                {disease.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

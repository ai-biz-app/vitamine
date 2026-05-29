import { useEffect, useRef, useMemo } from 'react'
import gsap from 'gsap'
import Navigation from '../sections/Navigation'
import Footer from '../sections/Footer'

import { useLanguage } from '../contexts/LanguageContext'
import { diseasesKo } from '../data/deficienciesKo'

interface DiseaseCard {
  id: string
  title: string
  subtitle: string
  vitamin: string
  description: string
  history: string
  symptoms: string[]
  image: string
  accentColor: string
  bgTint: string
}

const diseasesEn: DiseaseCard[] = [
  {
    id: 'scurvy',
    title: 'Scurvy',
    subtitle: "The Sailor's Plague",
    vitamin: 'Vitamin C (Ascorbic Acid)',
    description: 'Scurvy is the clinical syndrome resulting from vitamin C deficiency, characterized by defective collagen synthesis that compromises the structural integrity of connective tissues throughout the body. It killed more than 2 million sailors between 1500 and 1800.',
    history: 'In 1747, Scottish naval surgeon James Lind conducted the first controlled clinical trial, proving citrus fruits cured scurvy. The British Admiralty mandated lemon juice for sailors in 1795. Albert Szent-Györgyi isolated ascorbic acid in 1932 and won the Nobel Prize.',
    symptoms: ['Bleeding gums and loose teeth', 'Poor wound healing and bruising', 'Joint pain and corkscrew hairs'],
    image: '/scurvy-card.jpg',
    accentColor: '#fb7185',
    bgTint: 'rgba(251, 113, 133, 0.06)',
  },
  {
    id: 'rickets',
    title: 'Rickets',
    subtitle: "The English Disease",
    vitamin: 'Vitamin D (Calciferol)',
    description: 'Rickets is the childhood manifestation of vitamin D deficiency, characterized by defective mineralization of the growth plates of long bones, resulting in skeletal deformities. Before fortification, it affected more than 90% of children in some urban areas.',
    history: 'In 1918, Sir Edward Mellanby showed cod liver oil prevented rickets. In 1922, Elmer McCollum isolated the protective factor and named it "vitamin D." The advent of milk fortification in the 1930s essentially eliminated rickets as a public health problem.',
    symptoms: ['Bowed legs or knock-knees', 'Widening of wrists and ankles', 'Bone pain and muscle weakness'],
    image: '/rickets-card.jpg',
    accentColor: '#facc15',
    bgTint: 'rgba(250, 204, 21, 0.06)',
  },
  {
    id: 'beriberi',
    title: 'Beriberi',
    subtitle: 'I Cannot, I Cannot',
    vitamin: 'Vitamin B1 (Thiamine)',
    description: 'Beriberi is the clinical syndrome of thiamine deficiency, manifesting primarily as dysfunction of the cardiovascular and nervous systems. The name derives from the Sinhalese word meaning "I cannot, I cannot" — a reference to the severe weakness.',
    history: 'Beriberi was endemic throughout Asia where polished white rice was the dietary staple. In 1897, Dutch physician Christiaan Eijkman showed chickens fed polished rice developed polyneuritis. He shared the 1929 Nobel Prize for this discovery.',
    symptoms: ['Peripheral neuropathy (dry beriberi)', 'Heart failure and edema (wet beriberi)', 'Muscle wasting and weakness'],
    image: '/beriberi-card.jpg',
    accentColor: '#a78bfa',
    bgTint: 'rgba(167, 139, 250, 0.06)',
  },
  {
    id: 'pellagra',
    title: 'Pellagra',
    subtitle: 'The Four Ds',
    vitamin: 'Vitamin B3 (Niacin)',
    description: 'Pellagra is the clinical syndrome of niacin deficiency, historically associated with diets heavily dependent on corn. It caused more than 100,000 deaths and affected hundreds of thousands in the American South between 1900 and 1940.',
    history: 'Dr. Joseph Goldberger conducted meticulous studies between 1914-1930 proving pellagra was caused by dietary deficiency. The near-elimination of pellagra followed niacin fortification of wheat flour beginning in the early 1940s.',
    symptoms: ['Dermatitis (photosensitive rash)', 'Diarrhea and gastrointestinal issues', 'Dementia and cognitive decline'],
    image: '/pellagra-card.jpg',
    accentColor: '#fb923c',
    bgTint: 'rgba(251, 146, 60, 0.06)',
  },
]

export default function DeficiencyPage() {
  const { t, lang } = useLanguage()
  const cardRefs = useRef<(HTMLDivElement | null)[]>([])
  const headerRef = useRef<HTMLDivElement>(null)

  const diseases = useMemo((): DiseaseCard[] => {
    if (lang === 'en') return diseasesEn
    return diseasesEn.map((d) => {
      const ko = diseasesKo[d.id]
      if (!ko) return d
      return {
        ...d,
        title: ko.title,
        subtitle: ko.subtitle,
        vitamin: ko.vitamin,
        description: ko.description,
        history: ko.history,
        symptoms: ko.symptoms,
      }
    })
  }, [lang])

  useEffect(() => { window.scrollTo(0, 0) }, [])

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (headerRef.current) {
        gsap.from(headerRef.current.children, { y: 30, opacity: 0, stagger: 0.1, duration: 0.8, ease: 'power3.out', delay: 0.2 })
      }
      cardRefs.current.forEach((card, i) => {
        if (!card) return
        gsap.from(card, { y: 50, opacity: 0, duration: 0.8, ease: 'power2.out', delay: i * 0.15,
          scrollTrigger: { trigger: card, start: 'top 85%', toggleActions: 'play none none none' },
        })
      })
    })
    return () => ctx.revert()
  }, [diseases])

  return (
    <div className="relative">
      <Navigation />
      <main style={{ paddingTop: 60 }}>
        <section className="w-full pt-16 pb-12 px-6" style={{ background: '#fafaf8' }}>
          <div className="content-max" ref={headerRef}>
            <span className="label-mono text-[#4a4a4a]">{t('def.label')}</span>
            <h1 className="text-[#1a1a1a] font-semibold mt-3 tracking-[-0.02em]" style={{ fontFamily: "'Geist Sans', sans-serif", fontSize: 'clamp(32px, 5vw, 52px)' }}>
              {t('def.title')}
            </h1>
            <p className="text-[#4a4a4a] mt-4" style={{ fontFamily: "'Geist Sans', sans-serif", fontSize: 17, lineHeight: 1.7, maxWidth: 650 }}>
              {t('def.sub')}
            </p>
          </div>
        </section>

        <section className="w-full pb-24 px-6" style={{ background: '#fafaf8' }}>
          <div className="content-max space-y-12">
            {diseases.map((disease, i) => (
              <div key={disease.id} ref={(el) => { cardRefs.current[i] = el }} className="rounded-2xl overflow-hidden bg-white" style={{ boxShadow: '0 2px 12px rgba(0,0,0,0.05)' }}>
                <div className="grid grid-cols-1 md:grid-cols-2">
                  <div className="relative" style={{ minHeight: 300 }}>
                    <img src={disease.image} alt={disease.title} className="w-full h-full object-cover absolute inset-0" />
                    <div className="absolute inset-0" style={{ background: `linear-gradient(to right, ${disease.bgTint} 0%, transparent 50%)` }} />
                    <div className="absolute bottom-6 left-6">
                      <span className="label-mono px-3 py-1 rounded-full" style={{ fontSize: 10, background: `${disease.accentColor}20`, color: disease.accentColor }}>
                        {disease.vitamin.toUpperCase()}
                      </span>
                    </div>
                  </div>
                  <div className="p-8 md:p-10 flex flex-col justify-center">
                    <h2 className="text-[#1a1a1a] font-semibold" style={{ fontFamily: "'Geist Sans', sans-serif", fontSize: 'clamp(24px, 3vw, 32px)' }}>
                      {disease.title}
                    </h2>
                    <p className="text-[#4a4a4a] mt-1" style={{ fontFamily: "'Geist Mono', monospace", fontSize: 13, opacity: 0.6 }}>{disease.subtitle}</p>
                    <p className="text-[#4a4a4a] mt-4" style={{ fontFamily: "'Geist Sans', sans-serif", fontSize: 15, lineHeight: 1.7 }}>{disease.description}</p>
                    <div className="mt-6">
                      <h4 className="label-mono text-[#4a4a4a] mb-3" style={{ fontSize: 10 }}>{t('def.symptoms')}</h4>
                      <div className="flex flex-wrap gap-2">
                        {disease.symptoms.map((s, j) => (
                          <span key={j} className="px-3 py-1 rounded-full text-[12px]" style={{ fontFamily: "'Geist Sans', sans-serif", background: disease.bgTint, color: '#4a4a4a' }}>{s}</span>
                        ))}
                      </div>
                    </div>
                    <div className="mt-6 pt-6" style={{ borderTop: '1px solid rgba(0,0,0,0.06)' }}>
                      <p className="text-[#4a4a4a] italic" style={{ fontFamily: "'Geist Sans', sans-serif", fontSize: 14, lineHeight: 1.6 }}>
                        <strong className="text-[#1a1a1a] not-italic">{t('def.history')}:</strong> {disease.history}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}

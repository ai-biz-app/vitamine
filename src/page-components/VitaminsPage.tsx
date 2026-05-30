import { useEffect, useRef, useState, useMemo } from 'react'
import Link from 'next/link'
import gsap from 'gsap'
import Navigation from '../sections/Navigation'
import Footer from '../sections/Footer'

import { vitamins } from '../data/vitamins'
import { vitaminsKo } from '../data/vitaminsKo'
import { useLanguage } from '../contexts/LanguageContext'
import SEO from '../components/SEO'
import LastUpdated from '../components/LastUpdated'

export default function VitaminsPage() {
  const { t, lang } = useLanguage()
  const [filter, setFilter] = useState<'all' | 'fat-soluble' | 'water-soluble'>('all')
  const cardRefs = useRef<(HTMLDivElement | null)[]>([])
  const headerRef = useRef<HTMLDivElement>(null)

  const filtered = useMemo(() => {
    const list = filter === 'all' ? vitamins : vitamins.filter((v) => v.category === filter)
    return list.map((v) => {
      const ko = lang === 'ko' ? vitaminsKo[v.id] : null
      return {
        ...v,
        displayName: ko?.name || v.name,
        displaySubtitle: ko?.subtitle || v.subtitle,
        displayCategoryLabel: ko?.categoryLabel || v.categoryLabel,
        displayDescription: ko?.description || v.description,
      }
    })
  }, [filter, lang])

  useEffect(() => { window.scrollTo(0, 0) }, [])

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (headerRef.current) {
        gsap.from(headerRef.current.children, { y: 30, opacity: 0, stagger: 0.1, duration: 0.8, ease: 'power3.out', delay: 0.2 })
      }
    })
    return () => ctx.revert()
  }, [])

  useEffect(() => {
    const ctx = gsap.context(() => {
      cardRefs.current.forEach((card, i) => {
        if (!card) return
        gsap.fromTo(card, { y: 40, opacity: 0 }, {
          y: 0, opacity: 1, duration: 0.6, ease: 'power2.out', delay: i * 0.06,
          scrollTrigger: { trigger: card, start: 'top 90%', toggleActions: 'play none none none' },
        })
      })
    })
    return () => ctx.revert()
  }, [filtered])

  return (
    <div className="relative">
      <SEO
        title={t('vp.title')}
        description={t('vp.sub')}
       
        lang={lang}
      />
      <Navigation />
      <main style={{ paddingTop: 60 }}>
        <section className="w-full pt-16 pb-10 px-6" style={{ background: '#fafaf8' }}>
          <div className="content-max" ref={headerRef}>
            <span className="label-mono text-[#4a4a4a]">{t('label.essentialNutrition')}</span>
            <h1 className="text-[#1a1a1a] font-semibold mt-3 tracking-[-0.02em]" style={{ fontFamily: "'Geist Sans', sans-serif", fontSize: 'clamp(32px, 5vw, 52px)' }}>
              {t('vp.title')}
            </h1>
            <p className="text-[#4a4a4a] mt-4" style={{ fontFamily: "'Geist Sans', sans-serif", fontSize: 17, lineHeight: 1.7, maxWidth: 600 }}>
              {t('vp.sub')}
            </p>
            <div className="flex gap-2 mt-8 flex-wrap">
              {[
                { key: 'all' as const, label: t('vp.filter.all') },
                { key: 'fat-soluble' as const, label: t('vp.filter.fat') },
                { key: 'water-soluble' as const, label: t('vp.filter.water') },
              ].map((tab) => (
                <button
                  key={tab.key}
                  onClick={() => setFilter(tab.key)}
                  className="px-5 py-2 rounded-full text-[13px] font-medium transition-all duration-200"
                  style={{
                    fontFamily: "'Geist Sans', sans-serif",
                    background: filter === tab.key ? '#1a1a1a' : 'rgba(0,0,0,0.04)',
                    color: filter === tab.key ? '#fafaf8' : '#4a4a4a',
                  }}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>
        </section>

        <section className="w-full pb-24 px-6" style={{ background: '#fafaf8' }}>
          <div className="content-max">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
              {filtered.map((vitamin, i) => (
                <div key={vitamin.id} ref={(el) => { cardRefs.current[i] = el }}>
                  <Link
                    href={`/vitamins/${vitamin.id}`}
                    className="group block rounded-xl p-6 h-full transition-all duration-300 hover:-translate-y-1"
                    style={{ background: vitamin.bgTint, border: `1px solid ${vitamin.color}12`, boxShadow: '0 1px 3px rgba(0,0,0,0.03)' }}
                    onMouseEnter={(e) => { e.currentTarget.style.boxShadow = `0 8px 24px ${vitamin.color}18`; e.currentTarget.style.borderColor = `${vitamin.color}30` }}
                    onMouseLeave={(e) => { e.currentTarget.style.boxShadow = '0 1px 3px rgba(0,0,0,0.03)'; e.currentTarget.style.borderColor = `${vitamin.color}12` }}
                  >
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-10 h-10 rounded-full flex items-center justify-center" style={{ background: `${vitamin.color}20` }}>
                        <div className="w-4 h-4 rounded-full" style={{ background: vitamin.color }} />
                      </div>
                      <span className="label-mono text-[#4a4a4a]" style={{ fontSize: 9, color: vitamin.color, opacity: 0.8 }}>
                        {vitamin.displayCategoryLabel.toUpperCase()}
                      </span>
                    </div>
                    <h3 className="text-[#1a1a1a] font-semibold" style={{ fontFamily: "'Geist Sans', sans-serif", fontSize: 20 }}>
                      {vitamin.displayName}
                    </h3>
                    <p className="text-[#4a4a4a] mt-1" style={{ fontFamily: "'Geist Mono', monospace", fontSize: 12, opacity: 0.6 }}>
                      {vitamin.displaySubtitle}
                    </p>
                    <p className="text-[#4a4a4a] mt-4" style={{ fontFamily: "'Geist Sans', sans-serif", fontSize: 14, lineHeight: 1.5 }}>
                      {vitamin.displayDescription}
                    </p>
                    <div className="flex items-center gap-2 mt-5 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                      <span className="text-[13px] font-medium" style={{ fontFamily: "'Geist Sans', sans-serif", color: vitamin.color }}>
                        {t('vp.viewDetails')}
                      </span>
                      <svg width="14" height="14" viewBox="0 0 16 16" fill="none"><path d="M6 12L10 8L6 4" stroke={vitamin.color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
                    </div>
                  </Link>
                </div>
              ))}
            </div>
            <div className="mt-8 flex justify-center">
              <LastUpdated />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}

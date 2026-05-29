import { useEffect, useRef, useMemo } from 'react'
import { useParams, Link, useNavigate } from 'react-router'
import gsap from 'gsap'
import Navigation from '../sections/Navigation'
import Footer from '../sections/Footer'

import { getVitaminById, vitamins } from '../data/vitamins'
import { vitaminsKo } from '../data/vitaminsKo'
import { useLanguage } from '../contexts/LanguageContext'

export default function VitaminDetail() {
  const { id } = useParams<{ id: string }>()
  const navigate = useNavigate()
  const { t, lang } = useLanguage()
  const vitamin = getVitaminById(id || '')
  const contentRef = useRef<HTMLDivElement>(null)

  // Merge Korean data when lang is 'ko'
  const v = useMemo(() => {
    if (!vitamin) return null
    if (lang === 'en') return vitamin
    const ko = vitaminsKo[vitamin.id]
    if (!ko) return vitamin
    return {
      ...vitamin,
      name: ko.name,
      subtitle: ko.subtitle,
      chemicalName: ko.chemicalName,
      categoryLabel: ko.categoryLabel,
      description: ko.description,
      longDescription: ko.longDescription,
      functions: ko.functions,
      foodSources: ko.foodSources,
      rda: ko.rda || vitamin.rda,
      upperLimit: ko.upperLimit !== undefined ? ko.upperLimit : vitamin.upperLimit,
      deficiency: { ...vitamin.deficiency, name: ko.deficiencyName, symptoms: ko.deficiencySymptoms },
      highRiskGroups: ko.highRiskGroups,
      funFact: ko.funFact,
    }
  }, [vitamin, lang])

  useEffect(() => { window.scrollTo(0, 0) }, [id])

  useEffect(() => {
    if (contentRef.current) {
      const ctx = gsap.context(() => {
        gsap.from('.vd-hero', { y: 30, opacity: 0, duration: 0.8, ease: 'power3.out', delay: 0.1 })
        gsap.from('.vd-section', { y: 30, opacity: 0, stagger: 0.12, duration: 0.7, ease: 'power2.out', delay: 0.3 })
      }, contentRef)
      return () => ctx.revert()
    }
  }, [id])

  if (!v || !vitamin) {
    return (
      <div className="relative">
        <Navigation />
        <main style={{ paddingTop: 60 }} className="min-h-[60vh] flex flex-col items-center justify-center px-6">
          <h1 className="text-[#1a1a1a] font-semibold text-2xl">{t('vd.notFound')}</h1>
          <p className="text-[#4a4a4a] mt-2">{t('vd.notFound.sub')}</p>
          <Link to="/vitamins" className="mt-6 px-6 py-2.5 rounded-full text-[14px] font-medium text-white" style={{ background: '#1a1a1a', fontFamily: "'Geist Sans', sans-serif" }}>
            {t('vd.back')}
          </Link>
        </main>
        
      </div>
    )
  }

  const currentIndex = vitamins.findIndex((vi) => vi.id === vitamin.id)
  const prevVitamin = currentIndex > 0 ? vitamins[currentIndex - 1] : null
  const nextVitamin = currentIndex < vitamins.length - 1 ? vitamins[currentIndex + 1] : null

  // Get display names for prev/next in current language
  const getDisplayName = (vid: string) => {
    if (lang === 'en') return vitamins.find((vi) => vi.id === vid)?.name || vid
    return vitaminsKo[vid]?.name || vitamins.find((vi) => vi.id === vid)?.name || vid
  }

  return (
    <div className="relative">
      <Navigation />
      <main style={{ paddingTop: 60 }} ref={contentRef}>
        {/* Hero Banner */}
        <section className="vd-hero w-full pt-16 pb-12 px-6" style={{ background: `linear-gradient(135deg, ${v.bgTint} 0%, #fafaf8 100%)`, borderBottom: `1px solid ${v.color}15` }}>
          <div className="content-max">
            <div className="flex items-center gap-2 mb-8">
              <Link to="/" className="text-[13px] text-[#4a4a4a] hover:text-[#1a1a1a] transition-colors" style={{ fontFamily: "'Geist Sans', sans-serif" }}>{t('nav.home')}</Link>
              <svg width="12" height="12" viewBox="0 0 16 16" fill="none" className="opacity-40"><path d="M6 12L10 8L6 4" stroke="#4a4a4a" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
              <Link to="/vitamins" className="text-[13px] text-[#4a4a4a] hover:text-[#1a1a1a] transition-colors" style={{ fontFamily: "'Geist Sans', sans-serif" }}>{t('nav.vitamins')}</Link>
              <svg width="12" height="12" viewBox="0 0 16 16" fill="none" className="opacity-40"><path d="M6 12L10 8L6 4" stroke="#4a4a4a" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
              <span className="text-[13px] text-[#1a1a1a] font-medium" style={{ fontFamily: "'Geist Sans', sans-serif" }}>{v.name}</span>
            </div>

            <div className="flex items-start gap-6 flex-wrap">
              <div className="w-20 h-20 rounded-2xl flex items-center justify-center flex-shrink-0" style={{ background: `${v.color}20` }}>
                <div className="w-10 h-10 rounded-full" style={{ background: v.color }} />
              </div>
              <div>
                <div className="flex items-center gap-3 mb-2 flex-wrap">
                  <h1 className="text-[#1a1a1a] font-semibold tracking-[-0.02em]" style={{ fontFamily: "'Geist Sans', sans-serif", fontSize: 'clamp(32px, 5vw, 52px)' }}>
                    {v.name}
                  </h1>
                  <span className="label-mono px-3 py-1 rounded-full" style={{ fontSize: 10, background: `${v.color}15`, color: v.color }}>
                    {v.categoryLabel.toUpperCase()}
                  </span>
                </div>
                <p className="text-[#4a4a4a]" style={{ fontFamily: "'Geist Mono', monospace", fontSize: 14, opacity: 0.7 }}>
                  {v.chemicalName}
                </p>
                <p className="text-[#4a4a4a] mt-3" style={{ fontFamily: "'Geist Sans', sans-serif", fontSize: 17, lineHeight: 1.7, maxWidth: 700 }}>
                  {v.longDescription}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Content Grid */}
        <section className="w-full py-16 px-6" style={{ background: '#fafaf8' }}>
          <div className="content-max">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2 space-y-8">
                {/* Functions */}
                <div className="vd-section rounded-xl p-8" style={{ background: v.bgTint, border: `1px solid ${v.color}10` }}>
                  <h2 className="text-[#1a1a1a] font-semibold flex items-center gap-3" style={{ fontFamily: "'Geist Sans', sans-serif", fontSize: 20 }}>
                    <div className="w-8 h-8 rounded-lg flex items-center justify-center" style={{ background: `${v.color}20` }}>
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke={v.color} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h2M18 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41" />
                      </svg>
                    </div>
                    {t('vd.keyFunctions')}
                  </h2>
                  <ul className="mt-5 space-y-3">
                    {v.functions.map((fn, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <div className="w-1.5 h-1.5 rounded-full mt-2 flex-shrink-0" style={{ background: v.color }} />
                        <span className="text-[#4a4a4a]" style={{ fontFamily: "'Geist Sans', sans-serif", fontSize: 15, lineHeight: 1.6 }}>{fn}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Food Sources */}
                <div className="vd-section rounded-xl p-8 bg-white" style={{ boxShadow: '0 1px 3px rgba(0,0,0,0.04)' }}>
                  <h2 className="text-[#1a1a1a] font-semibold flex items-center gap-3" style={{ fontFamily: "'Geist Sans', sans-serif", fontSize: 20 }}>
                    <div className="w-8 h-8 rounded-lg flex items-center justify-center" style={{ background: `${v.color}12` }}>
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke={v.color} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" />
                      </svg>
                    </div>
                    {t('vd.foodSources')}
                  </h2>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {v.foodSources.map((source, i) => (
                      <span key={i} className="px-4 py-2 rounded-full text-[13px] font-medium" style={{ fontFamily: "'Geist Sans', sans-serif", background: v.bgTint, color: '#1a1a1a', border: `1px solid ${v.color}15` }}>
                        {source}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Deficiency */}
                <div className="vd-section rounded-xl p-8 bg-white" style={{ boxShadow: '0 1px 3px rgba(0,0,0,0.04)', borderLeft: '3px solid #fb7185' }}>
                  <h2 className="text-[#1a1a1a] font-semibold flex items-center gap-3" style={{ fontFamily: "'Geist Sans', sans-serif", fontSize: 20 }}>
                    <div className="w-8 h-8 rounded-lg flex items-center justify-center" style={{ background: 'rgba(251, 113, 133, 0.1)' }}>
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#fb7185" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" />
                        <line x1="12" y1="9" x2="12" y2="13" /><line x1="12" y1="17" x2="12.01" y2="17" />
                      </svg>
                    </div>
                    {t('vd.deficiency')}: {v.deficiency.name}
                  </h2>
                  <ul className="mt-5 space-y-3">
                    {v.deficiency.symptoms.map((symptom, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <div className="w-1.5 h-1.5 rounded-full mt-2 flex-shrink-0" style={{ background: '#fb7185' }} />
                        <span className="text-[#4a4a4a]" style={{ fontFamily: "'Geist Sans', sans-serif", fontSize: 15, lineHeight: 1.6 }}>{symptom}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* High Risk Groups */}
                <div className="vd-section rounded-xl p-8 bg-white" style={{ boxShadow: '0 1px 3px rgba(0,0,0,0.04)', borderLeft: `3px solid ${v.color}` }}>
                  <h2 className="text-[#1a1a1a] font-semibold flex items-center gap-3" style={{ fontFamily: "'Geist Sans', sans-serif", fontSize: 20 }}>
                    <div className="w-8 h-8 rounded-lg flex items-center justify-center" style={{ background: `${v.color}12` }}>
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke={v.color} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" />
                      </svg>
                    </div>
                    {t('vd.highRisk')}
                  </h2>
                  <ul className="mt-5 space-y-3">
                    {v.highRiskGroups.map((group, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <div className="w-1.5 h-1.5 rounded-full mt-2 flex-shrink-0" style={{ background: v.color }} />
                        <span className="text-[#4a4a4a]" style={{ fontFamily: "'Geist Sans', sans-serif", fontSize: 15, lineHeight: 1.6 }}>{group}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Right Sidebar */}
              <div className="space-y-6">
                {/* RDA Card */}
                <div className="vd-section rounded-xl p-6" style={{ background: v.bgTint, border: `1px solid ${v.color}10` }}>
                  <h3 className="label-mono text-[#4a4a4a] mb-4" style={{ fontSize: 10 }}>{t('vd.rda')}</h3>
                  <div className="space-y-3">
                    <div>
                      <span className="text-[11px] text-[#4a4a4a] uppercase tracking-wider block" style={{ fontFamily: "'Geist Mono', monospace" }}>{t('vd.rda.men')}</span>
                      <p className="text-[#1a1a1a] font-semibold mt-1" style={{ fontFamily: "'Geist Sans', sans-serif", fontSize: 16 }}>{v.rda.men}</p>
                    </div>
                    <div className="w-full h-px" style={{ background: `${v.color}15` }} />
                    <div>
                      <span className="text-[11px] text-[#4a4a4a] uppercase tracking-wider block" style={{ fontFamily: "'Geist Mono', monospace" }}>{t('vd.rda.women')}</span>
                      <p className="text-[#1a1a1a] font-semibold mt-1" style={{ fontFamily: "'Geist Sans', sans-serif", fontSize: 16 }}>{v.rda.women}</p>
                    </div>
                  </div>
                  {v.upperLimit && (
                    <>
                      <div className="w-full h-px my-4" style={{ background: `${v.color}15` }} />
                      <div>
                        <span className="text-[11px] text-[#4a4a4a] uppercase tracking-wider block" style={{ fontFamily: "'Geist Mono', monospace" }}>{t('vd.upperLimit')}</span>
                        <p className="font-semibold mt-1" style={{ fontFamily: "'Geist Sans', sans-serif", fontSize: 16, color: '#fb7185' }}>{v.upperLimit}</p>
                      </div>
                    </>
                  )}
                </div>

                {/* Fun Fact */}
                <div className="vd-section rounded-xl p-6 bg-white" style={{ boxShadow: '0 1px 3px rgba(0,0,0,0.04)' }}>
                  <h3 className="label-mono text-[#4a4a4a] mb-3" style={{ fontSize: 10 }}>{t('vd.didYouKnow')}</h3>
                  <p className="text-[#4a4a4a] italic" style={{ fontFamily: "'Geist Sans', sans-serif", fontSize: 14, lineHeight: 1.6 }}>
                    {v.funFact}
                  </p>
                </div>

                {/* All Vitamins Mini List */}
                <div className="vd-section rounded-xl p-6 bg-white" style={{ boxShadow: '0 1px 3px rgba(0,0,0,0.04)' }}>
                  <h3 className="label-mono text-[#4a4a4a] mb-4" style={{ fontSize: 10 }}>{t('vd.allVitamins')}</h3>
                  <div className="space-y-1">
                    {vitamins.map((vi) => (
                      <button
                        key={vi.id}
                        onClick={() => navigate(`/vitamins/${vi.id}`)}
                        className="w-full flex items-center gap-3 px-3 py-2 rounded-lg transition-all duration-150 text-left"
                        style={{ background: vi.id === vitamin.id ? `${vi.color}12` : 'transparent' }}
                      >
                        <div className="w-2.5 h-2.5 rounded-full flex-shrink-0" style={{ background: vi.color }} />
                        <span className="text-[13px]" style={{ fontFamily: "'Geist Sans', sans-serif", color: vi.id === vitamin.id ? '#1a1a1a' : '#4a4a4a', fontWeight: vi.id === vitamin.id ? 600 : 400 }}>
                          {getDisplayName(vi.id)}
                        </span>
                        {vi.id === vitamin.id && <svg width="12" height="12" viewBox="0 0 16 16" fill="none" className="ml-auto"><path d="M6 12L10 8L6 4" stroke="#1a1a1a" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Prev / Next */}
        <section className="w-full py-8 px-6" style={{ background: '#fafaf8', borderTop: '1px solid rgba(0,0,0,0.06)' }}>
          <div className="content-max flex justify-between items-center">
            {prevVitamin ? (
              <button onClick={() => navigate(`/vitamins/${prevVitamin.id}`)} className="flex items-center gap-3 group text-left">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="opacity-40 group-hover:opacity-70 transition-opacity"><path d="M10 12L6 8L10 4" stroke="#1a1a1a" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
                <div>
                  <span className="text-[11px] text-[#4a4a4a] uppercase tracking-wider block" style={{ fontFamily: "'Geist Mono', monospace" }}>{t('vd.prev')}</span>
                  <span className="text-[#1a1a1a] font-medium group-hover:opacity-70 transition-opacity" style={{ fontFamily: "'Geist Sans', sans-serif", fontSize: 15 }}>{getDisplayName(prevVitamin.id)}</span>
                </div>
              </button>
            ) : <div />}
            {nextVitamin ? (
              <button onClick={() => navigate(`/vitamins/${nextVitamin.id}`)} className="flex items-center gap-3 group text-right">
                <div>
                  <span className="text-[11px] text-[#4a4a4a] uppercase tracking-wider block" style={{ fontFamily: "'Geist Mono', monospace" }}>{t('vd.next')}</span>
                  <span className="text-[#1a1a1a] font-medium group-hover:opacity-70 transition-opacity" style={{ fontFamily: "'Geist Sans', sans-serif", fontSize: 15 }}>{getDisplayName(nextVitamin.id)}</span>
                </div>
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="opacity-40 group-hover:opacity-70 transition-opacity"><path d="M6 12L10 8L6 4" stroke="#1a1a1a" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
              </button>
            ) : <div />}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}

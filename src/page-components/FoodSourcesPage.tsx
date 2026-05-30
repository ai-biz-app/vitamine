import { useEffect, useRef, useState, useMemo } from 'react'
import Link from 'next/link'
import gsap from 'gsap'
import Navigation from '../sections/Navigation'
import Footer from '../sections/Footer'

import { vitamins, getRdaPercentage, getRdaStatus } from '../data/vitamins'
import { vitaminsKo } from '../data/vitaminsKo'
import { cookingTipsKo } from '../data/foodSourcesKo'
import { useLanguage } from '../contexts/LanguageContext'
import SEO from '../components/SEO'
import LastUpdated from '../components/LastUpdated'
import { foodSourcesItemListSchema } from '../lib/seoSchema'

const cookingTipsEn = [
  { icon: 'leaf', title: 'Pair Fat with Fat-Soluble Vitamins', body: 'Add olive oil to spinach salad to boost absorption of vitamins A and K. Healthy fats are essential for absorbing vitamins A, D, E, and K.', accentColor: '#4ade80' },
  { icon: 'droplet', title: 'Vitamin C Enhances Iron Absorption', body: 'Squeeze lemon on lentil dishes or pair bell peppers with iron-rich plant foods. This combination is especially valuable for vegetarians.', accentColor: '#60a5fa' },
  { icon: 'sun', title: 'Steam, Don\'t Boil', body: 'Steaming preserves 60-90% of vitamin C compared to boiling which can destroy over 50%. Microwaving is even better at 85-90% retention.', accentColor: '#facc15' },
  { icon: 'snowflake', title: 'Freeze to Preserve Nutrients', body: 'Frozen vegetables often retain more vitamins than produce stored for weeks in the fridge. Blanching before freezing inactivates degrading enzymes.', accentColor: '#818cf8' },
  { icon: 'clock', title: 'Cook Briefly, Eat Fresh', body: 'Keep cooking times short. Raw or lightly cooked vegetables preserve the most nutrients. Store cut produce in airtight containers.', accentColor: '#fb923c' },
  { icon: 'shield', title: 'Store Properly', body: 'Vitamin C degrades with light and air. Keep milk opaque, store produce cool, and consume fortified cereals within their best-by date.', accentColor: '#f472b6' },
]

function TipIcon({ icon, color }: { icon: string; color: string }) {
  const icons: Record<string, React.ReactNode> = {
    leaf: <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M11 20A7 7 0 0 1 9.8 6.9C15.5 5 17 4.5 19 2c1 2 2 4.5 2 8a7 7 0 0 1-10 10Z" /><path d="M2 21c0-3 1.8-5.6 4.5-6.8" /></svg>,
    droplet: <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22a7 7 0 0 0 7-7c0-2-1-3.9-3-7.4C14.8 6.4 13 3 12 3S9.2 6.4 8 7.6C6 11.1 5 13 5 15a7 7 0 0 0 7 7Z" /></svg>,
    sun: <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="4" /><path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41" /></svg>,
    snowflake: <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2v20M2 12h20M4.93 4.93l14.14 14.14M19.07 4.93L4.93 19.07" /></svg>,
    clock: <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><path d="M12 6v6l4 2" /></svg>,
    shield: <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /></svg>,
  }
  return <div className="w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0" style={{ background: color }}>{icons[icon]}</div>
}

export default function FoodSourcesPage() {
  const { t, lang } = useLanguage()
  const headerRef = useRef<HTMLDivElement>(null)
  const tipsRef = useRef<HTMLDivElement>(null)
  const tableRef = useRef<HTMLDivElement>(null)
  const [activeVitamin, setActiveVitamin] = useState<string>(vitamins[0].id)

  const cookingTips = useMemo(() => {
    if (lang === 'en') return cookingTipsEn
    return cookingTipsEn.map((tip, i) => {
      const ko = cookingTipsKo[i]
      return ko ? { ...tip, title: ko.title, body: ko.body } : tip
    })
  }, [lang])

  const selectedVitamin = vitamins.find((v) => v.id === activeVitamin) || vitamins[0]

  const displayName = useMemo(() => {
    if (lang === 'en') return selectedVitamin.name
    return vitaminsKo[selectedVitamin.id]?.name || selectedVitamin.name
  }, [selectedVitamin, lang])

  const displayCategory = useMemo(() => {
    if (lang === 'en') return selectedVitamin.categoryLabel
    return vitaminsKo[selectedVitamin.id]?.categoryLabel || selectedVitamin.categoryLabel
  }, [selectedVitamin, lang])

  const displayRda = useMemo(() => {
    if (lang === 'en') return selectedVitamin.rda
    return vitaminsKo[selectedVitamin.id]?.rda || selectedVitamin.rda
  }, [selectedVitamin, lang])

  const displayDetailedSources = useMemo(() => {
    if (lang === 'en') return selectedVitamin.detailedFoodSources
    return vitaminsKo[selectedVitamin.id]?.detailedFoodSources || selectedVitamin.detailedFoodSources
  }, [selectedVitamin, lang])

  const selectedRdaMcg = useMemo(() => {
    if (lang === 'en') return selectedVitamin.rdaMcg
    return vitaminsKo[selectedVitamin.id]?.rdaMcg || selectedVitamin.rdaMcg
  }, [selectedVitamin, lang])

  useEffect(() => { window.scrollTo(0, 0) }, [])

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (headerRef.current) gsap.from(headerRef.current.children, { y: 30, opacity: 0, stagger: 0.1, duration: 0.8, ease: 'power3.out', delay: 0.2 })
      if (tipsRef.current) gsap.from(tipsRef.current.children, { y: 30, opacity: 0, stagger: 0.1, duration: 0.6, ease: 'power2.out', scrollTrigger: { trigger: tipsRef.current, start: 'top 85%' } })
      if (tableRef.current) gsap.from(tableRef.current, { y: 40, opacity: 0, duration: 0.8, ease: 'power2.out', scrollTrigger: { trigger: tableRef.current, start: 'top 85%' } })
    })
    return () => ctx.revert()
  }, [])

  const itemListSchema = useMemo(() => foodSourcesItemListSchema(vitamins), [])

  return (
    <div className="relative">
      <SEO
        title={t('fs.title')}
        description={t('fs.sub')}
       
        lang={lang}
        schema={itemListSchema}
      />
      <Navigation />
      <main style={{ paddingTop: 60 }}>
        <section className="w-full pt-16 pb-12 px-6" style={{ background: '#fafaf8' }}>
          <div className="content-max" ref={headerRef}>
            <span className="label-mono text-[#4a4a4a]">{t('fs.label')}</span>
            <h1 className="text-[#1a1a1a] font-semibold mt-3 tracking-[-0.02em]" style={{ fontFamily: "'Geist Sans', sans-serif", fontSize: 'clamp(32px, 5vw, 52px)' }}>{t('fs.title')}</h1>
            <p className="text-[#4a4a4a] mt-4" style={{ fontFamily: "'Geist Sans', sans-serif", fontSize: 17, lineHeight: 1.7, maxWidth: 650 }}>{t('fs.sub')}</p>
            <div className="mt-4">
              <LastUpdated />
            </div>
          </div>
        </section>

        <section className="w-full pb-8 px-6" style={{ background: '#fafaf8' }}>
          <div className="content-max">
            <Link href="/supplement-guide" className="block rounded-xl p-6 transition-all duration-300 hover:-translate-y-0.5" style={{ background: 'linear-gradient(135deg, rgba(74, 222, 128, 0.08) 0%, rgba(96, 165, 250, 0.08) 100%)', border: '1px solid rgba(74, 222, 128, 0.2)', boxShadow: '0 2px 12px rgba(0,0,0,0.04)' }}>
              <div className="flex items-center justify-between flex-wrap gap-4">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center" style={{ background: 'rgba(74, 222, 128, 0.15)' }}>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#4ade80" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /><path d="M9 12l2 2 4-4" /></svg>
                  </div>
                  <div>
                    <h3 className="text-[#1a1a1a] font-semibold" style={{ fontFamily: "'Geist Sans', sans-serif", fontSize: 16 }}>{t('fs.cta.title')}</h3>
                    <p className="text-[#4a4a4a]" style={{ fontFamily: "'Geist Sans', sans-serif", fontSize: 14 }}>{t('fs.cta.sub')}</p>
                  </div>
                </div>
                <span className="px-5 py-2.5 rounded-full text-[13px] font-medium text-white flex-shrink-0" style={{ fontFamily: "'Geist Sans', sans-serif", background: '#4ade80' }}>{t('fs.cta.btn')} →</span>
              </div>
            </Link>
          </div>
        </section>

        <section className="w-full pb-24 px-6" style={{ background: '#fafaf8' }}>
          <div className="content-max">
            <div className="flex flex-col lg:flex-row gap-12">
              <div className="lg:w-1/2">
                <img src="/sources-meal.jpg" alt="Healthy meal" className="w-full rounded-xl object-cover" style={{ aspectRatio: '4/3', boxShadow: '0 4px 20px rgba(0,0,0,0.08)' }} />
                <p className="text-[#4a4a4a] mt-4 italic" style={{ fontFamily: "'Geist Sans', sans-serif", fontSize: 14 }}>
                  {lang === 'ko' ? '연어, 잎이 많은 채소, 아보칏도, 견과류가 들어간 균형 잡힌 식사는 비타민 A, B, C, D, E, K를 제공합니다.' : 'A balanced meal with salmon, leafy greens, avocado, and nuts provides vitamins A, B, C, D, E, and K.'}
                </p>
              </div>
              <div ref={tipsRef} className="lg:w-1/2 flex flex-col gap-3">
                {cookingTips.map((tip) => (
                  <div key={tip.title} className="bg-white rounded-lg p-5 flex items-start gap-4" style={{ borderLeft: `3px solid ${tip.accentColor}`, boxShadow: '0 1px 3px rgba(0,0,0,0.04)' }}>
                    <TipIcon icon={tip.icon} color={tip.accentColor} />
                    <div>
                      <h4 className="text-[#1a1a1a] font-medium" style={{ fontFamily: "'Geist Sans', sans-serif", fontSize: 15 }}>{tip.title}</h4>
                      <p className="text-[#4a4a4a] mt-1" style={{ fontFamily: "'Geist Sans', sans-serif", fontSize: 14, lineHeight: 1.5 }}>{tip.body}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="w-full section-padding" style={{ background: '#f5f5f0' }}>
          <div className="content-max px-6">
            <div className="text-center mb-6">
              <span className="label-mono text-[#4a4a4a]">{t('label.detailedRef')}</span>
              <h2 className="text-[#1a1a1a] font-medium mt-3 tracking-[-0.01em]" style={{ fontFamily: "'Geist Sans', sans-serif", fontSize: 'clamp(24px, 3vw, 36px)' }}>{t('fs.detailed.title')}</h2>
              <p className="text-[#4a4a4a] mt-3 mx-auto" style={{ fontFamily: "'Geist Sans', sans-serif", fontSize: 15, maxWidth: 600 }}>{t('fs.detailed.sub')}</p>
            </div>

            <div className="flex gap-2 flex-wrap justify-center mb-8">
              {vitamins.map((v) => (
                <button key={v.id} onClick={() => setActiveVitamin(v.id)} className="flex items-center gap-2 px-4 py-2 rounded-full text-[13px] font-medium transition-all duration-200"
                  style={{ fontFamily: "'Geist Sans', sans-serif", background: activeVitamin === v.id ? v.color : `${v.color}10`, color: activeVitamin === v.id ? '#fff' : v.color, border: `1px solid ${activeVitamin === v.id ? v.color : `${v.color}20`}` }}>
                  <div className="w-2 h-2 rounded-full" style={{ background: activeVitamin === v.id ? '#fff' : v.color }} />
                  {(lang === 'ko' ? vitaminsKo[v.id]?.name : undefined) || v.name}
                </button>
              ))}
            </div>

            <div ref={tableRef} className="rounded-xl overflow-hidden bg-white" style={{ boxShadow: '0 2px 12px rgba(0,0,0,0.05)' }}>
              <div className="px-6 py-4 flex items-center justify-between flex-wrap gap-3" style={{ background: selectedVitamin.bgTint }}>
                <div className="flex items-center gap-3">
                  <div className="w-4 h-4 rounded-full" style={{ background: selectedVitamin.color }} />
                  <span className="font-semibold" style={{ fontFamily: "'Geist Sans', sans-serif", fontSize: 16, color: '#1a1a1a' }}>{displayName}</span>
                  <span className="label-mono" style={{ fontSize: 10, color: '#4a4a4a' }}>{displayCategory.toUpperCase()}</span>
                </div>
                <span className="text-[13px] text-[#4a4a4a]" style={{ fontFamily: "'Geist Sans', sans-serif" }}>
                  {t('fs.table.rda')}: {displayRda.men} / {displayRda.women}
                </span>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr style={{ background: '#fafaf8', borderBottom: '1px solid rgba(0,0,0,0.06)' }}>
                      <th className="text-left px-6 py-3 text-[12px] uppercase tracking-wider text-[#4a4a4a]" style={{ fontFamily: "'Geist Mono', monospace", fontWeight: 500 }}>{t('fs.table.food')}</th>
                      <th className="text-left px-6 py-3 text-[12px] uppercase tracking-wider text-[#4a4a4a]" style={{ fontFamily: "'Geist Mono', monospace", fontWeight: 500 }}>{t('fs.table.serving')}</th>
                      <th className="text-left px-6 py-3 text-[12px] uppercase tracking-wider text-[#4a4a4a]" style={{ fontFamily: "'Geist Mono', monospace", fontWeight: 500 }}>{t('fs.table.amount')}</th>
                      <th className="text-left px-6 py-3 text-[12px] uppercase tracking-wider text-[#4a4a4a]" style={{ fontFamily: "'Geist Mono', monospace", fontWeight: 500 }}>{t('fs.table.percentRda')}</th>
                    </tr>
                  </thead>
                  <tbody>
                    {displayDetailedSources.map((source, i) => {
                      const percent = getRdaPercentage(source.amount, selectedRdaMcg, selectedVitamin.id)
                      const status = getRdaStatus(percent, lang as 'en' | 'ko')
                      return (
                        <tr key={source.food} style={{ borderBottom: i < displayDetailedSources.length - 1 ? '1px solid rgba(0,0,0,0.04)' : 'none' }}>
                          <td className="px-6 py-3.5 text-[#1a1a1a] font-medium" style={{ fontFamily: "'Geist Sans', sans-serif", fontSize: 14 }}>{source.food}</td>
                          <td className="px-6 py-3.5 text-[#4a4a4a]" style={{ fontFamily: "'Geist Sans', sans-serif", fontSize: 14 }}>{source.serving}</td>
                          <td className="px-6 py-3.5 font-medium" style={{ fontFamily: "'Geist Mono', monospace", fontSize: 13, color: selectedVitamin.color }}>{source.amount}</td>
                          <td className="px-6 py-3.5">
                            {percent !== null && status ? (
                              <div className="flex items-center gap-2">
                                <span className="font-medium" style={{ fontFamily: "'Geist Mono', monospace", fontSize: 13, color: status.color }}>{percent}%</span>
                                <span className="px-2 py-0.5 rounded-full text-[11px] font-medium" style={{ fontFamily: "'Geist Sans', sans-serif", background: status.bgColor, color: status.color }}>{status.label}</span>
                              </div>
                            ) : (
                              <span className="text-[#4a4a4a]" style={{ fontFamily: "'Geist Sans', sans-serif", fontSize: 13 }}>—</span>
                            )}
                          </td>
                        </tr>
                      )
                    })}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full section-padding" style={{ background: '#fafaf8' }}>
          <div className="content-max px-6">
            <div className="text-center mb-12">
              <span className="label-mono text-[#4a4a4a]">{t('label.quickRef')}</span>
              <h2 className="text-[#1a1a1a] font-medium mt-3 tracking-[-0.01em]" style={{ fontFamily: "'Geist Sans', sans-serif", fontSize: 'clamp(24px, 3vw, 36px)' }}>{t('fs.table.title')}</h2>
            </div>
            <div className="rounded-xl overflow-hidden bg-white" style={{ boxShadow: '0 2px 12px rgba(0,0,0,0.05)' }}>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr style={{ background: '#fafaf8', borderBottom: '1px solid rgba(0,0,0,0.06)' }}>
                      <th className="text-left px-6 py-4 text-[12px] uppercase tracking-wider text-[#4a4a4a]" style={{ fontFamily: "'Geist Mono', monospace", fontWeight: 500 }}>{t('fs.table.food')}</th>
                      <th className="text-left px-6 py-4 text-[12px] uppercase tracking-wider text-[#4a4a4a]" style={{ fontFamily: "'Geist Mono', monospace", fontWeight: 500 }}>{t('fs.table.topSources')}</th>
                      <th className="text-left px-6 py-4 text-[12px] uppercase tracking-wider text-[#4a4a4a]" style={{ fontFamily: "'Geist Mono', monospace", fontWeight: 500 }}>{t('fs.table.rda')}</th>
                      <th className="text-left px-6 py-4 text-[12px] uppercase tracking-wider text-[#4a4a4a] hidden md:table-cell" style={{ fontFamily: "'Geist Mono', monospace", fontWeight: 500 }}>{t('fs.table.type')}</th>
                    </tr>
                  </thead>
                  <tbody>
                    {vitamins.map((v, i) => {
                      const ko = lang === 'ko' ? vitaminsKo[v.id] : null
                      const koName = ko?.name
                      const koCat = ko?.categoryLabel
                      const koFoods = ko?.foodSources
                      const koRda = ko?.rda
                      return (
                        <tr key={v.id} style={{ borderBottom: i < vitamins.length - 1 ? '1px solid rgba(0,0,0,0.04)' : 'none' }}>
                          <td className="px-6 py-4"><Link href={`/vitamins/${v.id}`} className="flex items-center gap-3 group">
                            <div className="w-3 h-3 rounded-full flex-shrink-0" style={{ background: v.color }} />
                            <span className="text-[#1a1a1a] font-medium group-hover:opacity-60 transition-opacity" style={{ fontFamily: "'Geist Sans', sans-serif", fontSize: 14 }}>{koName || v.name}</span>
                          </Link></td>
                          <td className="px-6 py-4 text-[#4a4a4a]" style={{ fontFamily: "'Geist Sans', sans-serif", fontSize: 13 }}>{(koFoods || v.foodSources).slice(0, 3).join(', ')}</td>
                          <td className="px-6 py-4" style={{ fontFamily: "'Geist Mono', monospace", fontSize: 12, color: '#4a4a4a' }}>{(koRda || v.rda).men.split(';')[0]}</td>
                          <td className="px-6 py-4 hidden md:table-cell"><span className="label-mono px-2 py-1 rounded" style={{ fontSize: 9, background: v.bgTint, color: v.color }}>{(koCat || v.categoryLabel).toUpperCase()}</span></td>
                        </tr>
                      )
                    })}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}

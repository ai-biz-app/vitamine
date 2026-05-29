import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router'
import gsap from 'gsap'
import Navigation from '../sections/Navigation'
import Footer from '../sections/Footer'

import { useLanguage } from '../contexts/LanguageContext'
import {
  defaultProfile,
  getRecommendations,
  ageRanges,
  type UserProfile,
  type HealthCondition,
  type Medication,
  type Priority,
} from '../data/supplementEngine'
import { healthConditionLabelsKo, medicationLabelsKo, ageRangeLabelsKo, translateRecommendationsKo } from '../data/supplementGuideKo'

const healthConditionOptions: { value: HealthCondition; label: string }[] = [
  { value: 'celiac', label: 'Celiac Disease' },
  { value: 'crohns', label: "Crohn's Disease" },
  { value: 'ibd', label: 'Inflammatory Bowel Disease (IBD)' },
  { value: 'diabetes-t2', label: 'Type 2 Diabetes' },
  { value: 'osteoporosis', label: 'Osteoporosis / Osteopenia' },
  { value: 'kidney-disease', label: 'Chronic Kidney Disease' },
  { value: 'bariatric', label: 'Post-Bariatric Surgery' },
  { value: 'anemia', label: 'Iron-Deficiency Anemia' },
  { value: 'thyroid', label: 'Thyroid Disorder' },
  { value: 'depression', label: 'Depression / Mood Disorder' },
]

const medicationOptions: { value: Medication; label: string }[] = [
  { value: 'metformin', label: 'Metformin (diabetes)' },
  { value: 'ppi', label: 'Proton Pump Inhibitors (acid reflux)' },
  { value: 'warfarin', label: 'Warfarin (blood thinner)' },
  { value: 'statins', label: 'Statins (cholesterol)' },
  { value: 'anticonvulsants', label: 'Anticonvulsants / Anti-seizure' },
  { value: 'oral-contraceptive', label: 'Oral Contraceptive (birth control)' },
  { value: 'methotrexate', label: 'Methotrexate' },
  { value: 'diuretics', label: 'Diuretics (water pills)' },
  { value: 'levothyroxine', label: 'Levothyroxine (thyroid)' },
  { value: 'antibiotics-long', label: 'Long-term Antibiotics' },
]

function priorityBadge(priority: Priority, t: (k: string) => string) {
  const config: Record<Priority, { bg: string; color: string }> = {
    essential: { bg: 'rgba(251, 113, 133, 0.1)', color: '#e11d48' },
    recommended: { bg: 'rgba(251, 146, 60, 0.1)', color: '#ea580c' },
    consider: { bg: 'rgba(96, 165, 250, 0.1)', color: '#2563eb' },
  }
  const labels: Record<Priority, string> = {
    essential: t('sg.priority.essential'),
    recommended: t('sg.priority.recommended'),
    consider: t('sg.priority.consider'),
  }
  const c = config[priority]
  return (
    <span className="label-mono px-3 py-1 rounded-full" style={{ fontSize: 10, background: c.bg, color: c.color }}>
      {labels[priority].toUpperCase()}
    </span>
  )
}

export default function SupplementGuide() {
  const { t, lang } = useLanguage()
  const [profile, setProfile] = useState<UserProfile>({ ...defaultProfile })
  const [showResults, setShowResults] = useState(false)
  const [expandedCard, setExpandedCard] = useState<string | null>(null)
  const headerRef = useRef<HTMLDivElement>(null)
  const resultsRef = useRef<HTMLDivElement>(null)

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
    if (showResults && resultsRef.current) {
      gsap.from(resultsRef.current.children, { y: 30, opacity: 0, stagger: 0.08, duration: 0.6, ease: 'power2.out', delay: 0.1 })
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }
  }, [showResults])

  const updateField = <K extends keyof UserProfile>(field: K, value: UserProfile[K]) => {
    setProfile((prev) => ({ ...prev, [field]: value }))
  }

  const toggleArrayItem = (field: 'healthConditions' | 'medications', value: string) => {
    setProfile((prev) => {
      const current = prev[field] as string[]
      if (current.includes(value)) return { ...prev, [field]: current.filter((v) => v !== value) }
      const cleaned = value === 'none' ? [value] : current.filter((v) => v !== 'none')
      return { ...prev, [field]: [...cleaned, value] }
    })
  }

  const recommendationsRaw = showResults ? getRecommendations(profile) : []
  const recommendations = lang === 'ko' ? translateRecommendationsKo(recommendationsRaw) : recommendationsRaw

  // Get Korean labels for health conditions and medications
  const getHealthLabel = (opt: typeof healthConditionOptions[0]) => {
    return lang === 'ko' ? healthConditionLabelsKo[opt.value] || opt.label : opt.label
  }

  const getMedLabel = (opt: typeof medicationOptions[0]) => {
    return lang === 'ko' ? medicationLabelsKo[opt.value] || opt.label : opt.label
  }

  const getAgeLabel = (age: typeof ageRanges[0]) => {
    return lang === 'ko' ? ageRangeLabelsKo[age.value] || age.label : age.label
  }

  const formSection = (title: string, subtitle: string, children: React.ReactNode) => (
    <div className="rounded-xl p-6 bg-white" style={{ boxShadow: '0 1px 3px rgba(0,0,0,0.04)' }}>
      <h3 className="text-[#1a1a1a] font-semibold" style={{ fontFamily: "'Geist Sans', sans-serif", fontSize: 16 }}>{title}</h3>
      {subtitle && <p className="text-[#4a4a4a] mt-1 mb-4" style={{ fontFamily: "'Geist Sans', sans-serif", fontSize: 13 }}>{subtitle}</p>}
      {children}
    </div>
  )

  if (showResults) {
    return (
      <div className="relative">
        <Navigation />
        <main style={{ paddingTop: 60 }} ref={resultsRef}>
          <section className="w-full pt-16 pb-10 px-6" style={{ background: '#fafaf8' }}>
            <div className="content-max">
              <div className="flex items-center gap-2 mb-6">
                <button onClick={() => { setShowResults(false); setExpandedCard(null) }} className="text-[13px] text-[#4a4a4a] hover:text-[#1a1a1a] transition-colors flex items-center gap-1" style={{ fontFamily: "'Geist Sans', sans-serif" }}>
                  <svg width="14" height="14" viewBox="0 0 16 16" fill="none"><path d="M10 12L6 8L10 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
                  {t('sg.results.back')}
                </button>
              </div>
              <span className="label-mono text-[#4a4a4a]">{t('label.personalizedTool')}</span>
              <h1 className="text-[#1a1a1a] font-semibold mt-3 tracking-[-0.02em]" style={{ fontFamily: "'Geist Sans', sans-serif", fontSize: 'clamp(28px, 4vw, 44px)' }}>
                {t('sg.results.title')}
              </h1>
              <p className="text-[#4a4a4a] mt-3" style={{ fontFamily: "'Geist Sans', sans-serif", fontSize: 15, lineHeight: 1.6, maxWidth: 600 }}>
                {t('sg.results.sub')}
              </p>
              <div className="flex gap-4 mt-6 flex-wrap">
                {(['essential', 'recommended', 'consider'] as Priority[]).map((p) => {
                  const count = recommendations.filter((r) => r.priority === p).length
                  if (count === 0) return null
                  return (
                    <div key={p} className="flex items-center gap-2 px-4 py-2 rounded-full bg-white" style={{ boxShadow: '0 1px 3px rgba(0,0,0,0.04)' }}>
                      {priorityBadge(p, t)}
                      <span className="text-[#1a1a1a] font-medium" style={{ fontFamily: "'Geist Sans', sans-serif", fontSize: 14 }}>{count}</span>
                    </div>
                  )
                })}
              </div>
            </div>
          </section>

          <section className="w-full pb-24 px-6" style={{ background: '#fafaf8' }}>
            <div className="content-max space-y-4">
              {recommendations.length === 0 ? (
                <div className="text-center py-16">
                  <p className="text-[#4a4a4a]" style={{ fontFamily: "'Geist Sans', sans-serif", fontSize: 16 }}>{t('sg.results.none')}</p>
                </div>
              ) : (
                recommendations.map((rec) => (
                  <div key={rec.vitaminId + rec.priority} className="rounded-xl bg-white overflow-hidden transition-all duration-200" style={{ boxShadow: '0 1px 3px rgba(0,0,0,0.04)', borderLeft: `3px solid ${rec.color}` }}>
                    <button onClick={() => setExpandedCard(expandedCard === rec.vitaminId ? null : rec.vitaminId)} className="w-full flex items-center justify-between px-6 py-5 text-left">
                      <div className="flex items-center gap-4 flex-wrap">
                        <div className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0" style={{ background: `${rec.color}15` }}>
                          <div className="w-4 h-4 rounded-full" style={{ background: rec.color }} />
                        </div>
                        <div>
                          <div className="flex items-center gap-3 flex-wrap">
                            <span className="text-[#1a1a1a] font-semibold" style={{ fontFamily: "'Geist Sans', sans-serif", fontSize: 17 }}>{rec.vitaminName}</span>
                            {priorityBadge(rec.priority, t)}
                          </div>
                          <span className="text-[#4a4a4a]" style={{ fontFamily: "'Geist Mono', monospace", fontSize: 12 }}>{rec.dosage}</span>
                        </div>
                      </div>
                      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="flex-shrink-0 transition-transform duration-200" style={{ transform: expandedCard === rec.vitaminId ? 'rotate(180deg)' : 'rotate(0deg)', opacity: 0.4 }}>
                        <path d="M4 6L8 10L12 6" stroke="#1a1a1a" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </button>

                    {expandedCard === rec.vitaminId && (
                      <div className="px-6 pb-6 pt-2 space-y-4">
                        <div>
                          <h4 className="label-mono text-[#4a4a4a] mb-2" style={{ fontSize: 10 }}>{t('sg.why')}</h4>
                          <p className="text-[#4a4a4a]" style={{ fontFamily: "'Geist Sans', sans-serif", fontSize: 14, lineHeight: 1.6 }}>{rec.why}</p>
                        </div>
                        {rec.form && (
                          <div>
                            <h4 className="label-mono text-[#4a4a4a] mb-2" style={{ fontSize: 10 }}>{t('sg.bestForm')}</h4>
                            <p className="text-[#1a1a1a] font-medium" style={{ fontFamily: "'Geist Sans', sans-serif", fontSize: 14 }}>{rec.form}</p>
                          </div>
                        )}
                        <div>
                          <h4 className="label-mono text-[#4a4a4a] mb-2" style={{ fontSize: 10 }}>{t('fs.table.topSources')}</h4>
                          <p className="text-[#4a4a4a]" style={{ fontFamily: "'Geist Sans', sans-serif", fontSize: 14, lineHeight: 1.6 }}>{rec.source}</p>
                        </div>
                        {rec.timing && (
                          <div>
                            <h4 className="label-mono text-[#4a4a4a] mb-2" style={{ fontSize: 10 }}>{t('sg.when')}</h4>
                            <p className="text-[#4a4a4a]" style={{ fontFamily: "'Geist Sans', sans-serif", fontSize: 14 }}>{rec.timing}</p>
                          </div>
                        )}
                        {rec.cautions && (
                          <div className="rounded-lg p-4" style={{ background: 'rgba(251, 113, 133, 0.06)', border: '1px solid rgba(251, 113, 133, 0.12)' }}>
                            <h4 className="label-mono mb-1" style={{ fontSize: 10, color: '#e11d48' }}>⚠ {t('sg.caution')}</h4>
                            <p style={{ fontFamily: "'Geist Sans', sans-serif", fontSize: 13, color: '#4a4a4a', lineHeight: 1.5 }}>{rec.cautions}</p>
                          </div>
                        )}
                        {rec.vitaminId.startsWith('vitamin-') && (
                          <div className="pt-2">
                            <Link to={`/vitamins/${rec.vitaminId}`} className="inline-flex items-center gap-2 text-[13px] font-medium transition-all hover:gap-3" style={{ fontFamily: "'Geist Sans', sans-serif", color: rec.color }}>
                              {t('sg.learnMore')} {rec.vitaminName}
                              <svg width="14" height="14" viewBox="0 0 16 16" fill="none"><path d="M6 12L10 8L6 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
                            </Link>
                          </div>
                        )}
                      </div>
                    )}
                  </div>
                ))
              )}

              <div className="mt-8 rounded-lg p-5" style={{ background: 'rgba(251, 146, 60, 0.06)', border: '1px solid rgba(251, 146, 60, 0.15)' }}>
                <p className="text-[#4a4a4a]" style={{ fontFamily: "'Geist Sans', sans-serif", fontSize: 13, lineHeight: 1.6 }}>
                  <strong style={{ color: '#1a1a1a' }}>{t('sg.disclaimer')}</strong>
                </p>
              </div>
            </div>
          </section>
        </main>
        <Footer />
      </div>
    )
  }

  // ── FORM VIEW ──
  return (
    <div className="relative">
      <Navigation />
      <main style={{ paddingTop: 60 }}>
        <section className="w-full pt-16 pb-10 px-6" style={{ background: '#fafaf8' }}>
          <div className="content-max" ref={headerRef}>
            <span className="label-mono text-[#4a4a4a]">{t('label.personalizedTool')}</span>
            <h1 className="text-[#1a1a1a] font-semibold mt-3 tracking-[-0.02em]" style={{ fontFamily: "'Geist Sans', sans-serif", fontSize: 'clamp(32px, 5vw, 52px)' }}>
              {t('sg.title')}
            </h1>
            <p className="text-[#4a4a4a] mt-4" style={{ fontFamily: "'Geist Sans', sans-serif", fontSize: 17, lineHeight: 1.7, maxWidth: 650 }}>
              {t('sg.sub')}
            </p>
          </div>
        </section>

        <section className="w-full pb-24 px-6" style={{ background: '#fafaf8' }}>
          <div className="content-max max-w-[800px]">
            <div className="space-y-5">
              {formSection(t('sg.age'), '', (
                <div className="flex flex-wrap gap-2">
                  {ageRanges.map((age) => (
                    <button key={age.value} onClick={() => updateField('age', age.value)} className="px-4 py-2.5 rounded-lg text-[13px] font-medium transition-all duration-150"
                      style={{ fontFamily: "'Geist Sans', sans-serif", background: profile.age === age.value ? '#1a1a1a' : '#f5f5f0', color: profile.age === age.value ? '#fafaf8' : '#4a4a4a' }}>
                      {getAgeLabel(age)}
                    </button>
                  ))}
                </div>
              ))}

              {formSection(t('sg.gender'), '', (
                <div className="flex gap-2">
                  {[
                    { value: 'female' as const, label: t('sg.gender.female') },
                    { value: 'male' as const, label: t('sg.gender.male') },
                    { value: 'other' as const, label: t('sg.gender.other') },
                  ].map((g) => (
                    <button key={g.value} onClick={() => updateField('gender', g.value)} className="px-5 py-2.5 rounded-lg text-[13px] font-medium transition-all duration-150"
                      style={{ fontFamily: "'Geist Sans', sans-serif", background: profile.gender === g.value ? '#1a1a1a' : '#f5f5f0', color: profile.gender === g.value ? '#fafaf8' : '#4a4a4a' }}>
                      {g.label}
                    </button>
                  ))}
                </div>
              ))}

              {profile.gender === 'female' && (profile.age === '19-30' || profile.age === '31-50' || profile.age === '14-18') && (
                formSection(t('sg.pregnancy'), '', (
                  <div className="flex flex-wrap gap-2">
                    {[
                      { value: 'none' as const, label: t('sg.pregnancy.none') },
                      { value: 'planning' as const, label: t('sg.pregnancy.planning') },
                      { value: 'pregnant' as const, label: t('sg.pregnancy.pregnant') },
                      { value: 'breastfeeding' as const, label: t('sg.pregnancy.breastfeeding') },
                    ].map((p) => (
                      <button key={p.value} onClick={() => updateField('pregnancy', p.value)} className="px-4 py-2.5 rounded-lg text-[13px] font-medium transition-all duration-150"
                        style={{ fontFamily: "'Geist Sans', sans-serif", background: profile.pregnancy === p.value ? '#f472b6' : '#fdf2f8', color: profile.pregnancy === p.value ? '#fff' : '#be185d', border: `1px solid ${profile.pregnancy === p.value ? '#f472b6' : '#fbcfe8'}` }}>
                        {p.label}
                      </button>
                    ))}
                  </div>
                ))
              )}

              {formSection(t('sg.diet'), t('sg.diet.sub'), (
                <div className="flex flex-wrap gap-2">
                  {[
                    { value: 'omnivore' as const, label: t('sg.diet.omnivore') },
                    { value: 'pescatarian' as const, label: t('sg.diet.pescatarian') },
                    { value: 'vegetarian' as const, label: t('sg.diet.vegetarian') },
                    { value: 'vegan' as const, label: t('sg.diet.vegan') },
                    { value: 'restrictive' as const, label: t('sg.diet.restrictive') },
                  ].map((d) => (
                    <button key={d.value} onClick={() => updateField('diet', d.value)} className="px-4 py-2.5 rounded-lg text-[13px] font-medium transition-all duration-150"
                      style={{ fontFamily: "'Geist Sans', sans-serif", background: profile.diet === d.value ? '#4ade80' : '#f0fdf4', color: profile.diet === d.value ? '#fff' : '#15803d', border: `1px solid ${profile.diet === d.value ? '#4ade80' : '#bbf7d0'}` }}>
                      {d.label}
                    </button>
                  ))}
                </div>
              ))}

              {formSection(t('sg.sun'), t('sg.sun.sub'), (
                <div className="flex flex-wrap gap-2">
                  {[
                    { value: 'high' as const, label: t('sg.sun.high') },
                    { value: 'moderate' as const, label: t('sg.sun.moderate') },
                    { value: 'low' as const, label: t('sg.sun.low') },
                    { value: 'very-low' as const, label: t('sg.sun.veryLow') },
                  ].map((s) => (
                    <button key={s.value} onClick={() => updateField('sunExposure', s.value)} className="px-4 py-2.5 rounded-lg text-[13px] font-medium transition-all duration-150"
                      style={{ fontFamily: "'Geist Sans', sans-serif", background: profile.sunExposure === s.value ? '#facc15' : '#fefce8', color: profile.sunExposure === s.value ? '#fff' : '#a16207', border: `1px solid ${profile.sunExposure === s.value ? '#facc15' : '#fde047'}` }}>
                      {s.label}
                    </button>
                  ))}
                </div>
              ))}

              {formSection(t('sg.skin'), t('sg.skin.sub'), (
                <div className="flex flex-wrap gap-2">
                  {[
                    { value: 'light' as const, label: t('sg.skin.light') },
                    { value: 'medium' as const, label: t('sg.skin.medium') },
                    { value: 'dark' as const, label: t('sg.skin.dark') },
                  ].map((s) => (
                    <button key={s.value} onClick={() => updateField('skinTone', s.value)} className="px-5 py-2.5 rounded-lg text-[13px] font-medium transition-all duration-150"
                      style={{ fontFamily: "'Geist Sans', sans-serif", background: profile.skinTone === s.value ? '#fb923c' : '#fff7ed', color: profile.skinTone === s.value ? '#fff' : '#c2410c', border: `1px solid ${profile.skinTone === s.value ? '#fb923c' : '#fed7aa'}` }}>
                      {s.label}
                    </button>
                  ))}
                </div>
              ))}

              {formSection(t('sg.activity'), '', (
                <div className="flex flex-wrap gap-2">
                  {[
                    { value: 'sedentary' as const, label: t('sg.activity.sedentary') },
                    { value: 'moderate' as const, label: t('sg.activity.moderate') },
                    { value: 'very-active' as const, label: t('sg.activity.veryActive') },
                    { value: 'athlete' as const, label: t('sg.activity.athlete') },
                  ].map((a) => (
                    <button key={a.value} onClick={() => updateField('activityLevel', a.value)} className="px-4 py-2.5 rounded-lg text-[13px] font-medium transition-all duration-150"
                      style={{ fontFamily: "'Geist Sans', sans-serif", background: profile.activityLevel === a.value ? '#1a1a1a' : '#f5f5f0', color: profile.activityLevel === a.value ? '#fafaf8' : '#4a4a4a' }}>
                      {a.label}
                    </button>
                  ))}
                </div>
              ))}

              {formSection(t('sg.alcohol'), '', (
                <div className="flex flex-wrap gap-2">
                  {[
                    { value: 'none' as const, label: t('sg.alcohol.none') },
                    { value: 'occasional' as const, label: t('sg.alcohol.occasional') },
                    { value: 'regular' as const, label: t('sg.alcohol.regular') },
                    { value: 'heavy' as const, label: t('sg.alcohol.heavy') },
                  ].map((a) => (
                    <button key={a.value} onClick={() => updateField('alcoholUse', a.value)} className="px-4 py-2.5 rounded-lg text-[13px] font-medium transition-all duration-150"
                      style={{ fontFamily: "'Geist Sans', sans-serif", background: profile.alcoholUse === a.value ? '#1a1a1a' : '#f5f5f0', color: profile.alcoholUse === a.value ? '#fafaf8' : '#4a4a4a' }}>
                      {a.label}
                    </button>
                  ))}
                </div>
              ))}

              {formSection(t('sg.smoking'), '', (
                <div className="flex flex-wrap gap-2">
                  {[
                    { value: 'never' as const, label: t('sg.smoking.never') },
                    { value: 'former' as const, label: t('sg.smoking.former') },
                    { value: 'current' as const, label: t('sg.smoking.current') },
                  ].map((s) => (
                    <button key={s.value} onClick={() => updateField('smoking', s.value)} className="px-5 py-2.5 rounded-lg text-[13px] font-medium transition-all duration-150"
                      style={{ fontFamily: "'Geist Sans', sans-serif", background: profile.smoking === s.value ? '#1a1a1a' : '#f5f5f0', color: profile.smoking === s.value ? '#fafaf8' : '#4a4a4a' }}>
                      {s.label}
                    </button>
                  ))}
                </div>
              ))}

              {formSection(t('sg.health'), t('sg.health.sub'), (
                <div className="flex flex-wrap gap-2">
                  {healthConditionOptions.map((c) => (
                    <button key={c.value} onClick={() => toggleArrayItem('healthConditions', c.value)} className="px-4 py-2 rounded-lg text-[13px] font-medium transition-all duration-150"
                      style={{ fontFamily: "'Geist Sans', sans-serif", background: profile.healthConditions.includes(c.value) ? '#fb7185' : '#fff1f2', color: profile.healthConditions.includes(c.value) ? '#fff' : '#be123c', border: `1px solid ${profile.healthConditions.includes(c.value) ? '#fb7185' : '#fecdd3'}` }}>
                      {profile.healthConditions.includes(c.value) && <span className="mr-1">✓</span>}{getHealthLabel(c)}
                    </button>
                  ))}
                </div>
              ))}

              {formSection(t('sg.meds'), t('sg.meds.sub'), (
                <div className="flex flex-wrap gap-2">
                  {medicationOptions.map((m) => (
                    <button key={m.value} onClick={() => toggleArrayItem('medications', m.value)} className="px-4 py-2 rounded-lg text-[13px] font-medium transition-all duration-150"
                      style={{ fontFamily: "'Geist Sans', sans-serif", background: profile.medications.includes(m.value) ? '#818cf8' : '#eef2ff', color: profile.medications.includes(m.value) ? '#fff' : '#4338ca', border: `1px solid ${profile.medications.includes(m.value) ? '#818cf8' : '#c7d2fe'}` }}>
                      {profile.medications.includes(m.value) && <span className="mr-1">✓</span>}{getMedLabel(m)}
                    </button>
                  ))}
                </div>
              ))}

              <div className="pt-4">
                <button onClick={() => setShowResults(true)} className="w-full py-4 rounded-xl text-[16px] font-semibold text-white transition-all duration-200 hover:opacity-90" style={{ fontFamily: "'Geist Sans', sans-serif", background: '#1a1a1a', boxShadow: '0 4px 16px rgba(0,0,0,0.15)' }}>
                  {t('sg.submit')}
                </button>
                <p className="text-center text-[#4a4a4a] mt-4" style={{ fontFamily: "'Geist Sans', sans-serif", fontSize: 13, lineHeight: 1.5 }}>
                  {t('sg.submit.sub')}
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}

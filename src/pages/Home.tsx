import { useEffect, useRef, type RefObject } from 'react'
import { Link } from 'react-router'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Navigation from '../sections/Navigation'
import Footer from '../sections/Footer'
import { useLanguage } from '../contexts/LanguageContext'

gsap.registerPlugin(ScrollTrigger)

const waterSolubleVits = [
  { label: 'B1', path: '/vitamins/vitamin-b1' },
  { label: 'B2', path: '/vitamins/vitamin-b2' },
  { label: 'B3', path: '/vitamins/vitamin-b3' },
  { label: 'B5', path: '/vitamins/vitamin-b5' },
  { label: 'B6', path: '/vitamins/vitamin-b6' },
  { label: 'B7', path: '/vitamins/vitamin-b7' },
  { label: 'B9', path: '/vitamins/vitamin-b9' },
  { label: 'B12', path: '/vitamins/vitamin-b12' },
  { label: 'C', path: '/vitamins/vitamin-c' },
]

const fatSolubleVits = [
  { label: 'A', path: '/vitamins/vitamin-a' },
  { label: 'D', path: '/vitamins/vitamin-d' },
  { label: 'E', path: '/vitamins/vitamin-e' },
  { label: 'K', path: '/vitamins/vitamin-k' },
]

const misconceptions = [
  { num: '1' },
  { num: '2' },
  { num: '3' },
  { num: '4' },
  { num: '5' },
  { num: '6' },
]

export default function Home() {
  const { t, lang } = useLanguage()
  const heroRef = useRef<HTMLDivElement>(null)
  const startRef = useRef<HTMLDivElement>(null)
  const statsRef = useRef<HTMLDivElement>(null)
  const clsRef = useRef<HTMLDivElement>(null)
  const misRef = useRef<HTMLDivElement>(null)
  const ctaRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.hero-label', { opacity: 0, y: 20, duration: 0.8, ease: 'power3.out', delay: 0.2 })
      gsap.from('.hero-title', { opacity: 0, y: 40, duration: 1, ease: 'power3.out', delay: 0.4 })
      gsap.from('.hero-sub', { opacity: 0, y: 30, duration: 0.8, ease: 'power3.out', delay: 0.6 })
      gsap.from('.hero-cta', { opacity: 0, y: 20, duration: 0.6, ease: 'power3.out', delay: 0.8 })
    }, heroRef)
    return () => ctx.revert()
  }, [])

  useEffect(() => {
    const ctx = gsap.context(() => {
      const animateIn = (
        ref: RefObject<HTMLDivElement | null>,
        { y, stagger, duration, delay = 0 }: { y: number; stagger: number; duration: number; delay?: number },
      ) => {
        if (!ref.current) return
        gsap.fromTo(
          ref.current.children,
          { y, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            stagger,
            duration,
            delay,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: ref.current,
              start: 'top 85%',
              toggleActions: 'play none none none',
              once: true,
            },
          },
        )
      }

      animateIn(startRef, { y: 40, stagger: 0.12, duration: 0.7 })
      animateIn(statsRef, { y: 30, stagger: 0.08, duration: 0.6 })
      animateIn(clsRef, { y: 40, stagger: 0.15, duration: 0.8 })
      animateIn(misRef, { y: 30, stagger: 0.1, duration: 0.6 })
      animateIn(ctaRef, { y: 30, stagger: 0.1, duration: 0.8, delay: 0.1 })
    })
    return () => ctx.revert()
  }, [])

  return (
    <div className="relative">
      <Navigation />
      <main>
        {/* ── HERO ── */}
        <section ref={heroRef} className="w-full flex flex-col items-center justify-center text-center px-6" style={{ minHeight: '85vh', paddingTop: 80 }}>
          <span className="hero-label label-mono text-[#4a4a4a] mb-6">
            {t('hero.label')}
          </span>
          <h1
            className="hero-title text-[#1a1a1a] font-semibold leading-[1.1] tracking-[-0.02em]"
            style={{ fontFamily: "'Geist Sans', sans-serif", fontSize: 'clamp(40px, 6vw, 72px)', maxWidth: 750 }}
          >
            {t('hero.title')}
          </h1>
          <p
            className="hero-sub text-[#4a4a4a] font-normal mt-6 mx-auto"
            style={{ fontFamily: "'Geist Sans', sans-serif", fontSize: 18, lineHeight: 1.7, maxWidth: 580 }}
          >
            {t('hero.sub')}
          </p>
          <div className="hero-cta flex gap-4 mt-10 flex-wrap justify-center">
            <Link to="/supplement-guide" className="px-8 py-3.5 rounded-full text-[14px] font-medium text-white transition-all duration-300 hover:opacity-80" style={{ fontFamily: "'Geist Sans', sans-serif", background: '#1a1a1a' }}>
              {t('hero.cta1')} →
            </Link>
          </div>
        </section>

        {/* ── START HERE ── */}
        <section className="w-full section-padding" style={{ background: '#f5f5f0' }}>
          <div className="content-max px-6">
            <div className="text-center mb-12">
              <span className="label-mono text-[#4a4a4a]">{lang === 'ko' ? '시작하기' : 'Start Here'}</span>
            </div>
            <div ref={startRef} className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Card 1: Explore Vitamins */}
              <Link to="/vitamins" className="group block rounded-xl p-8 transition-all duration-300 hover:-translate-y-1" style={{ background: '#ffffff', boxShadow: '0 4px 16px rgba(0,0,0,0.1)', border: '1px solid rgba(0,0,0,0.12)' }}
                onMouseEnter={(e) => { e.currentTarget.style.boxShadow = '0 12px 32px rgba(74,222,128,0.18)'; e.currentTarget.style.borderColor = 'rgba(74,222,128,0.35)' }}
                onMouseLeave={(e) => { e.currentTarget.style.boxShadow = '0 4px 16px rgba(0,0,0,0.1)'; e.currentTarget.style.borderColor = 'rgba(0,0,0,0.12)' }}>
                <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-5" style={{ background: 'rgba(74,222,128,0.12)' }}>
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#22c55e" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M11 20A7 7 0 0 1 9.8 6.9C15.5 5 17 4.5 19 2c1 2 2 4.5 2 8a7 7 0 0 1-10 10Z"/><path d="M2 21c0-3 1.8-5.6 4.5-6.8"/></svg>
                </div>
                <h3 className="text-[#1a1a1a] font-semibold" style={{ fontFamily: "'Geist Sans', sans-serif", fontSize: 18 }}>
                  {t('start.vitamins')}
                </h3>
                <p className="text-[#4a4a4a] mt-2" style={{ fontFamily: "'Geist Sans', sans-serif", fontSize: 14, lineHeight: 1.6 }}>
                  {t('start.vitamins.desc')}
                </p>
                <span className="inline-flex items-center gap-2 mt-5 text-[13px] font-medium transition-all group-hover:gap-3" style={{ fontFamily: "'Geist Sans', sans-serif", color: '#22c55e' }}>
                  {t('ql.explore')} →
                </span>
              </Link>

              {/* Card 2: Supplement Guide */}
              <Link to="/supplement-guide" className="group block rounded-xl p-8 transition-all duration-300 hover:-translate-y-1" style={{ background: '#ffffff', boxShadow: '0 4px 16px rgba(0,0,0,0.1)', border: '1px solid rgba(0,0,0,0.12)' }}
                onMouseEnter={(e) => { e.currentTarget.style.boxShadow = '0 12px 32px rgba(129,140,248,0.18)'; e.currentTarget.style.borderColor = 'rgba(129,140,248,0.35)' }}
                onMouseLeave={(e) => { e.currentTarget.style.boxShadow = '0 4px 16px rgba(0,0,0,0.1)'; e.currentTarget.style.borderColor = 'rgba(0,0,0,0.12)' }}>
                <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-5" style={{ background: 'rgba(129,140,248,0.12)' }}>
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#6366f1" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="m16 12-4-4-4 4"/><path d="M12 16V8"/></svg>
                </div>
                <h3 className="text-[#1a1a1a] font-semibold" style={{ fontFamily: "'Geist Sans', sans-serif", fontSize: 18 }}>
                  {t('start.supplements')}
                </h3>
                <p className="text-[#4a4a4a] mt-2" style={{ fontFamily: "'Geist Sans', sans-serif", fontSize: 14, lineHeight: 1.6 }}>
                  {t('start.supplements.desc')}
                </p>
                <span className="inline-flex items-center gap-2 mt-5 text-[13px] font-medium transition-all group-hover:gap-3" style={{ fontFamily: "'Geist Sans', sans-serif", color: '#6366f1' }}>
                  {lang === 'ko' ? '퀴즈 풀기' : 'Take the Quiz'} →
                </span>
              </Link>

              {/* Card 3: Deficiencies */}
              <Link to="/deficiencies" className="group block rounded-xl p-8 transition-all duration-300 hover:-translate-y-1" style={{ background: '#ffffff', boxShadow: '0 4px 16px rgba(0,0,0,0.1)', border: '1px solid rgba(0,0,0,0.12)' }}
                onMouseEnter={(e) => { e.currentTarget.style.boxShadow = '0 12px 32px rgba(251,113,133,0.18)'; e.currentTarget.style.borderColor = 'rgba(251,113,133,0.35)' }}
                onMouseLeave={(e) => { e.currentTarget.style.boxShadow = '0 4px 16px rgba(0,0,0,0.1)'; e.currentTarget.style.borderColor = 'rgba(0,0,0,0.12)' }}>
                <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-5" style={{ background: 'rgba(251,113,133,0.12)' }}>
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#e11d48" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20"/><path d="M8 7h6"/><path d="M8 11h6"/></svg>
                </div>
                <h3 className="text-[#1a1a1a] font-semibold" style={{ fontFamily: "'Geist Sans', sans-serif", fontSize: 18 }}>
                  {t('start.deficiencies')}
                </h3>
                <p className="text-[#4a4a4a] mt-2" style={{ fontFamily: "'Geist Sans', sans-serif", fontSize: 14, lineHeight: 1.6 }}>
                  {t('start.deficiencies.desc')}
                </p>
                <span className="inline-flex items-center gap-2 mt-5 text-[13px] font-medium transition-all group-hover:gap-3" style={{ fontFamily: "'Geist Sans', sans-serif", color: '#e11d48' }}>
                  {lang === 'ko' ? '더 알아보기' : 'Learn More'} →
                </span>
              </Link>
            </div>
          </div>
        </section>

        {/* ── BY THE NUMBERS ── */}
        <section className="w-full section-padding" style={{ background: '#fafaf8' }}>
          <div className="content-max px-6">
            <div className="text-center mb-12">
              <span className="label-mono text-[#4a4a4a]">{t('stats.label')}</span>
              <h2 className="text-[#1a1a1a] font-medium mt-3 tracking-[-0.01em]" style={{ fontFamily: "'Geist Sans', sans-serif", fontSize: 'clamp(24px, 3vw, 36px)' }}>
                {t('stats.title')}
              </h2>
            </div>
            <div ref={statsRef} className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { num: '13', label: t('stat.essential'), color: '#4ade80' },
                { num: '4', label: t('stat.fat'), color: '#fb923c' },
                { num: '9', label: t('stat.water'), color: '#60a5fa' },
                { num: '1B+', label: t('stat.deficient'), color: '#fb7185' },
              ].map((s) => (
                <div key={s.label} className="text-center rounded-xl p-6 bg-white" style={{ boxShadow: '0 1px 3px rgba(0,0,0,0.04)' }}>
                  <div className="font-semibold" style={{ fontFamily: "'Geist Sans', sans-serif", fontSize: 'clamp(36px, 4vw, 48px)', color: s.color, letterSpacing: '-0.02em' }}>
                    {s.num}
                  </div>
                  <div className="text-[#4a4a4a] mt-2" style={{ fontFamily: "'Geist Sans', sans-serif", fontSize: 13, lineHeight: 1.4 }}>
                    {s.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── TWO FAMILIES ── */}
        <section className="w-full section-padding" style={{ background: '#fafaf8' }}>
          <div className="content-max px-6">
            <div className="text-center mb-12">
              <span className="label-mono text-[#4a4a4a]">{lang === 'ko' ? '분류' : 'Classification'}</span>
              <h2 className="text-[#1a1a1a] font-medium mt-3 tracking-[-0.01em]" style={{ fontFamily: "'Geist Sans', sans-serif", fontSize: 'clamp(24px, 3vw, 36px)' }}>
                {t('cls.label')}
              </h2>
            </div>
            <div ref={clsRef} className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Water-Soluble */}
              <div className="rounded-xl p-8" style={{ background: 'rgba(96, 165, 250, 0.06)', border: '1px solid rgba(96, 165, 250, 0.12)' }}>
                <div className="text-2xl mb-3">💧</div>
                <h3 className="text-[#1a1a1a] font-semibold" style={{ fontFamily: "'Geist Sans', sans-serif", fontSize: 20 }}>
                  {t('cls.water.title')}
                </h3>
                <p className="text-[#4a4a4a] mt-2" style={{ fontFamily: "'Geist Sans', sans-serif", fontSize: 15, lineHeight: 1.7 }}>
                  {t('cls.water.desc')}
                </p>
                <div className="flex flex-wrap gap-2 mt-5">
                  {waterSolubleVits.map((v) => (
                    <Link key={v.label} to={v.path} className="px-3 py-1.5 rounded-lg text-[13px] font-semibold transition-all duration-150 hover:scale-110" style={{ fontFamily: "'Geist Sans', sans-serif", background: 'rgba(96, 165, 250, 0.1)', color: '#3b82f6' }}>
                      {v.label}
                    </Link>
                  ))}
                </div>
              </div>

              {/* Fat-Soluble */}
              <div className="rounded-xl p-8" style={{ background: 'rgba(251, 146, 60, 0.06)', border: '1px solid rgba(251, 146, 60, 0.12)' }}>
                <div className="text-2xl mb-3">🥑</div>
                <h3 className="text-[#1a1a1a] font-semibold" style={{ fontFamily: "'Geist Sans', sans-serif", fontSize: 20 }}>
                  {t('cls.fat.title')}
                </h3>
                <p className="text-[#4a4a4a] mt-2" style={{ fontFamily: "'Geist Sans', sans-serif", fontSize: 15, lineHeight: 1.7 }}>
                  {t('cls.fat.desc')}
                </p>
                <div className="flex flex-wrap gap-2 mt-5">
                  {fatSolubleVits.map((v) => (
                    <Link key={v.label} to={v.path} className="px-3 py-1.5 rounded-lg text-[13px] font-semibold transition-all duration-150 hover:scale-110" style={{ fontFamily: "'Geist Sans', sans-serif", background: 'rgba(251, 146, 60, 0.1)', color: '#ea580c' }}>
                      {v.label}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── 6 THINGS MOST PEOPLE GET WRONG ── */}
        <section className="w-full section-padding" style={{ background: '#f5f5f0' }}>
          <div className="content-max px-6">
            <div className="text-center mb-12">
              <span className="label-mono text-[#4a4a4a]">{lang === 'ko' ? '핵심 인사이트' : 'Key Insights'}</span>
              <h2 className="text-[#1a1a1a] font-medium mt-3 tracking-[-0.01em]" style={{ fontFamily: "'Geist Sans', sans-serif", fontSize: 'clamp(24px, 3vw, 36px)' }}>
                {t('mis.label')}
              </h2>
            </div>
            <div ref={misRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {misconceptions.map((m) => (
                <div key={m.num} className="rounded-xl p-6 bg-white" style={{ boxShadow: '0 1px 3px rgba(0,0,0,0.04)' }}>
                  <span className="label-mono text-[#4a4a4a]" style={{ fontSize: 11, color: '#1a1a1a', opacity: 0.4 }}>#{m.num}</span>
                  <h3 className="text-[#1a1a1a] font-semibold mt-2" style={{ fontFamily: "'Geist Sans', sans-serif", fontSize: 16, lineHeight: 1.4 }}>
                    {t(`mis.${m.num}.title`)}
                  </h3>
                  <p className="text-[#4a4a4a] mt-2" style={{ fontFamily: "'Geist Sans', sans-serif", fontSize: 14, lineHeight: 1.6 }}>
                    {t(`mis.${m.num}.desc`)}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── FINAL CTA ── */}
        <section className="w-full py-24 px-6" style={{ background: '#1a1a1a' }}>
          <div className="content-max text-center" ref={ctaRef}>
            <h2 className="text-[#fafaf8] font-medium tracking-[-0.01em]" style={{ fontFamily: "'Geist Sans', sans-serif", fontSize: 'clamp(28px, 3.5vw, 42px)' }}>
              {t('stats.cta.title')}
            </h2>
            <p className="text-[#fafaf8] mt-4 mx-auto opacity-50" style={{ fontFamily: "'Geist Sans', sans-serif", fontSize: 17, lineHeight: 1.6, maxWidth: 500 }}>
              {t('stats.cta.sub')}
            </p>
            <div className="flex gap-4 justify-center mt-10 flex-wrap">
              <Link to="/supplement-guide" className="px-8 py-3.5 rounded-full text-[14px] font-medium transition-all duration-300 hover:opacity-80" style={{ fontFamily: "'Geist Sans', sans-serif", background: '#fafaf8', color: '#1a1a1a' }}>
                {t('stats.cta.btn')} →
              </Link>
              <Link to="/vitamins" className="px-8 py-3.5 rounded-full text-[14px] font-medium text-white transition-all duration-300 hover:opacity-80" style={{ fontFamily: "'Geist Sans', sans-serif", border: '1px solid rgba(250,250,248,0.3)' }}>
                {t('ql.vitamins')}
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}

import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import Navigation from '../sections/Navigation'
import Footer from '../sections/Footer'
import { useLanguage } from '../contexts/LanguageContext'
import SEO from '../components/SEO'
import LastUpdated from '../components/LastUpdated'

export default function ComparisonB12Forms() {
  const { lang } = useLanguage()
  const headerRef = useRef<HTMLDivElement>(null)
  const tableRef = useRef<HTMLDivElement>(null)

  useEffect(() => { window.scrollTo(0, 0) }, [])

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (headerRef.current) {
        gsap.from(headerRef.current.children, { y: 30, opacity: 0, stagger: 0.1, duration: 0.8, ease: 'power3.out', delay: 0.2 })
      }
      if (tableRef.current) {
        gsap.from(tableRef.current, { y: 40, opacity: 0, duration: 0.8, ease: 'power2.out', delay: 0.3 })
      }
    })
    return () => ctx.revert()
  }, [])

  const isKo = lang === 'ko'

  return (
    <div className="relative">
      <SEO
        title={isKo ? '비타민 B12 형태 비교: 메틸코발라민 vs 시아노코발라민' : 'Vitamin B12 Forms: Methylcobalamin vs Cyanocobalamin'}
        description={isKo
          ? '비타민 B12의 두 가지 주요 형태인 메틸코발라민과 시아노코발라민을 비교합니다. 흡수율, 안정성, 가격, 적합한 대상을 알아보세요.'
          : 'Compare the two main forms of vitamin B12: methylcobalamin and cyanocobalamin. Learn about absorption, stability, cost, and who each form is best for.'
        }
       
        lang={lang}
      />
      <Navigation />
      <main style={{ paddingTop: 60 }}>
        {/* Hero */}
        <section className="w-full pt-16 pb-12 px-6" style={{ background: '#fafaf8' }}>
          <div className="content-max" ref={headerRef}>
            <span className="label-mono text-[#4a4a4a]">Comparison</span>
            <h1
              className="text-[#1a1a1a] font-semibold mt-3 tracking-[-0.02em]"
              style={{ fontFamily: "'Geist Sans', sans-serif", fontSize: 'clamp(32px, 5vw, 52px)' }}
            >
              {isKo ? '비타민 B12 형태 비교' : 'Vitamin B12 Forms'}
            </h1>
            <p
              className="text-[#4a4a4a] mt-4"
              style={{ fontFamily: "'Geist Sans', sans-serif", fontSize: 17, lineHeight: 1.7, maxWidth: 700 }}
            >
              {isKo
                ? '비타민 B12 보충제를 고를 때 가장 흔한 질문: 메틸코발라민과 시아노코발라민 중 어떤 것이 더 나을까요? 두 형태의 차이점과 각자에게 맞는 선택을 알아보세요.'
                : 'The most common question when choosing a B12 supplement: methylcobalamin or cyanocobalamin? Learn the differences and which form is right for you.'}
            </p>
            <div className="mt-4">
              <LastUpdated />
            </div>
          </div>
        </section>

        {/* Quick Answer */}
        <section className="w-full pb-12 px-6" style={{ background: '#fafaf8' }}>
          <div className="content-max">
            <div className="rounded-xl p-6" style={{ background: 'rgba(192, 132, 252, 0.08)', border: '1px solid rgba(192, 132, 252, 0.25)' }}>
              <h2 className="text-[#1a1a1a] font-semibold mb-2" style={{ fontFamily: "'Geist Sans', sans-serif", fontSize: 18 }}>
                {isKo ? '요약' : 'The Short Answer'}
              </h2>
              <p className="text-[#4a4a4a]" style={{ fontFamily: "'Geist Sans', sans-serif", fontSize: 15, lineHeight: 1.7 }}>
                {isKo
                  ? '대부분의 건강한 성인에게는 두 형태 모두 효과적입니다. 시아노코발라민이 더 안정적이고 저렴하며 연구가 많지만, 메틸코발라민은 활성 형태로 직접 사용됩니다. MTHFR 유전자 변이가 있는 사람은 메틸코발라민이 더 적합할 수 있습니다.'
                  : 'For most healthy adults, both forms are effective. Cyanocobalamin is more stable, cheaper, and more studied. Methylcobalamin is the active form and may be preferable for people with MTHFR gene variants.'}
              </p>
            </div>
          </div>
        </section>

        {/* Comparison Table */}
        <section className="w-full pb-16 px-6" style={{ background: '#fafaf8' }}>
          <div className="content-max" ref={tableRef}>
            <h2
              className="text-[#1a1a1a] font-semibold mb-6"
              style={{ fontFamily: "'Geist Sans', sans-serif", fontSize: 'clamp(20px, 2.5vw, 28px)' }}
            >
              {isKo ? '상세 비교' : 'Detailed Comparison'}
            </h2>
            <div className="rounded-xl overflow-hidden bg-white" style={{ boxShadow: '0 2px 12px rgba(0,0,0,0.05)' }}>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr style={{ background: '#fafaf8', borderBottom: '1px solid rgba(0,0,0,0.06)' }}>
                      <th className="text-left px-6 py-4 text-[12px] uppercase tracking-wider text-[#4a4a4a]" style={{ fontFamily: "'Geist Mono', monospace", fontWeight: 500 }}>{isKo ? '특징' : 'Feature'}</th>
                      <th className="text-left px-6 py-4 text-[12px] uppercase tracking-wider" style={{ fontFamily: "'Geist Mono', monospace", fontWeight: 500, color: '#7e22ce' }}>Methylcobalamin</th>
                      <th className="text-left px-6 py-4 text-[12px] uppercase tracking-wider" style={{ fontFamily: "'Geist Mono', monospace", fontWeight: 500, color: '#6b21a8' }}>Cyanocobalamin</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      {
                        feature: isKo ? '형태' : 'Form',
                        methyl: isKo ? '활성 형태 (바로 사용 가능)' : 'Active form (ready to use)',
                        cyano: isKo ? '비활성 형태 (체 내에서 전환 필요)' : 'Inactive form (must be converted)',
                      },
                      {
                        feature: isKo ? '안정성' : 'Stability',
                        methyl: isKo ? '상대적으로 불안정 (빛/습기에 민감)' : 'Less stable (light/moisture sensitive)',
                        cyano: isKo ? '매우 안정함' : 'Highly stable',
                      },
                      {
                        feature: isKo ? '연구 규모' : 'Research Volume',
                        methyl: isKo ? '적음' : 'Smaller body of research',
                        cyano: isKo ? '매우 많음 (대부분의 임상 시험)' : 'Extensive (most clinical trials)',
                      },
                      {
                        feature: isKo ? '가격' : 'Cost',
                        methyl: isKo ? '일반적으로 더 비쌈' : 'Generally more expensive',
                        cyano: isKo ? '더 저렴' : 'Cheaper',
                      },
                      {
                        feature: isKo ? '보관' : 'Shelf Life',
                        methyl: isKo ? '짧음 (냉장 보관 권장)' : 'Shorter (refrigeration recommended)',
                        cyano: isKo ? '김 (실온 보관 가능)' : 'Longer (room temperature stable)',
                      },
                      {
                        feature: isKo ? '신경 보호 효과' : 'Neuroprotective Effects',
                        methyl: isKo ? '연구에서 유망한 결과' : 'Promising in research',
                        cyano: isKo ? '표준적인 효과' : 'Standard effects',
                      },
                      {
                        feature: isKo ? '권장 대상' : 'Best For',
                        methyl: isKo ? 'MTHFR 유전자 변이자, 신경 건강 우려' : 'MTHFR variants, nerve health concerns',
                        cyano: isKo ? '대부분의 사람, 일반 보충' : 'Most people, general supplementation',
                      },
                    ].map((row, i) => (
                      <tr key={i} style={{ borderBottom: i < 6 ? '1px solid rgba(0,0,0,0.04)' : 'none' }}>
                        <td className="px-6 py-4 font-medium text-[#1a1a1a]" style={{ fontFamily: "'Geist Sans', sans-serif", fontSize: 14, background: '#fafaf8' }}>{row.feature}</td>
                        <td className="px-6 py-4 text-[#4a4a4a]" style={{ fontFamily: "'Geist Sans', sans-serif", fontSize: 14, lineHeight: 1.6 }}>{row.methyl}</td>
                        <td className="px-6 py-4 text-[#4a4a4a]" style={{ fontFamily: "'Geist Sans', sans-serif", fontSize: 14, lineHeight: 1.6 }}>{row.cyano}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </section>

        {/* Other Forms */}
        <section className="w-full section-padding" style={{ background: '#f5f5f0' }}>
          <div className="content-max px-6 max-w-[720px]">
            <h2
              className="text-[#1a1a1a] font-semibold mb-6"
              style={{ fontFamily: "'Geist Sans', sans-serif", fontSize: 'clamp(20px, 2.5vw, 28px)' }}
            >
              {isKo ? '다른 B12 형태들' : 'Other B12 Forms'}
            </h2>
            <div className="space-y-6">
              <div className="rounded-xl p-6 bg-white" style={{ boxShadow: '0 1px 3px rgba(0,0,0,0.04)' }}>
                <h3 className="text-[#1a1a1a] font-semibold mb-2" style={{ fontFamily: "'Geist Sans', sans-serif", fontSize: 16 }}>Adenosylcobalamin</h3>
                <p className="text-[#4a4a4a]" style={{ fontFamily: "'Geist Sans', sans-serif", fontSize: 14, lineHeight: 1.6 }}>
                  {isKo
                    ? '미토콘드리아에서 에너지 대사에 사용되는 또 다른 활성 형태입니다. 메틸코발라민과 함께 복합 보충제로 제공되는 경우가 많습니다.'
                    : 'Another active form used in mitochondria for energy metabolism. Often combined with methylcobalamin in complex supplements.'}
                </p>
              </div>
              <div className="rounded-xl p-6 bg-white" style={{ boxShadow: '0 1px 3px rgba(0,0,0,0.04)' }}>
                <h3 className="text-[#1a1a1a] font-semibold mb-2" style={{ fontFamily: "'Geist Sans', sans-serif", fontSize: 16 }}>Hydroxocobalamin</h3>
                <p className="text-[#4a4a4a]" style={{ fontFamily: "'Geist Sans', sans-serif", fontSize: 14, lineHeight: 1.6 }}>
                  {isKo
                    ? '주사 형태로 가장 흔히 사용되며, 시아노코발라민보다 체내에 더 오래 머무릅니다. 일부 유럽 국가에서는 경구 보충제로도 사용됩니다.'
                    : 'Most commonly used in injectable form and stays in the body longer than cyanocobalamin. Also used as an oral supplement in some European countries.'}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Recommendations */}
        <section className="w-full section-padding" style={{ background: '#fafaf8' }}>
          <div className="content-max px-6 max-w-[720px]">
            <h2
              className="text-[#1a1a1a] font-semibold mb-6"
              style={{ fontFamily: "'Geist Sans', sans-serif", fontSize: 'clamp(20px, 2.5vw, 28px)' }}
            >
              {isKo ? '어떤 것을 선택해야 할까요?' : 'Which Should You Choose?'}
            </h2>
            <div className="space-y-4">
              {[
                isKo
                  ? '대부분의 사람: 시아노코발라민이 충분합니다. 더 저렴하고 안정적이며 연구가 많습니다.'
                  : 'For most people: Cyanocobalamin is sufficient. It is cheaper, more stable, and has the most research support.',
                isKo
                  ? 'MTHFR 유전자 변이가 있는 사람: 메틸코발라민이 더 적합할 수 있습니다. 활성 형태로 체내 변환 과정이 필요 없습니다.'
                  : 'If you have MTHFR gene variants: Methylcobalamin may be preferable because it is already in the active form.',
                isKo
                  ? '비건: 두 형태 모두 식물성으로 만들 수 있지만, 메틸코발라민이 더 흔히 비건으로 제공됩니다.'
                  : 'For vegans: Both forms can be vegan, but methylcobalamin is more commonly available as a vegan option.',
                isKo
                  ? '주사 처방이 필요한 경우: 수록소코발라민 주사가 더 오래 지속될 수 있습니다.'
                  : 'If injections are prescribed: Hydroxocobalamin injections may last longer between doses.',
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 rounded-full mt-2 flex-shrink-0" style={{ background: '#c084fc' }} />
                  <p className="text-[#4a4a4a]" style={{ fontFamily: "'Geist Sans', sans-serif", fontSize: 15, lineHeight: 1.7 }}>{item}</p>
                </div>
              ))}
            </div>

            <div className="mt-8 rounded-lg p-5" style={{ background: 'rgba(192, 132, 252, 0.08)', border: '1px solid rgba(192, 132, 252, 0.2)' }}>
              <p className="text-[#4a4a4a]" style={{ fontFamily: "'Geist Sans', sans-serif", fontSize: 13, lineHeight: 1.6 }}>
                <strong style={{ color: '#1a1a1a' }}>{isKo ? '참고:' : 'Note:'}</strong>{' '}
                {isKo
                  ? '이 정보는 교육 목적으로만 제공됩니다. B12 보충제를 시작하기 전에 항상 의료 제공자와 상담하세요.'
                  : 'This information is for educational purposes only. Always consult a healthcare provider before starting B12 supplementation.'}
              </p>
            </div>
          </div>
        </section>

        {/* Sources */}
        <section className="w-full pb-16 px-6" style={{ background: '#fafaf8' }}>
          <div className="content-max max-w-[720px]">
            <h3 className="label-mono text-[#4a4a4a] mb-3" style={{ fontSize: 10 }}>Sources</h3>
            <ul className="space-y-2">
              <li>
                <a href="https://ods.od.nih.gov/factsheets/VitaminB12-HealthProfessional/" target="_blank" rel="noopener noreferrer" className="text-[#3b82f6] hover:underline" style={{ fontFamily: "'Geist Sans', sans-serif", fontSize: 14 }}>
                  NIH Office of Dietary Supplements — Vitamin B12 ↗
                </a>
              </li>
              <li>
                <a href="https://pubmed.ncbi.nlm.nih.gov/21940227/" target="_blank" rel="noopener noreferrer" className="text-[#3b82f6] hover:underline" style={{ fontFamily: "'Geist Sans', sans-serif", fontSize: 14 }}>
                  Obeid R, et al. Vitamin B12 fortification. Public Health Nutr. 2012. ↗
                </a>
              </li>
            </ul>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}

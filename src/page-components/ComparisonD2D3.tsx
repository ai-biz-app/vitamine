import { useEffect, useRef } from 'react'
import Link from 'next/link'
import gsap from 'gsap'
import Navigation from '../sections/Navigation'
import Footer from '../sections/Footer'
import { useLanguage } from '../contexts/LanguageContext'
import SEO from '../components/SEO'
import LastUpdated from '../components/LastUpdated'

export default function ComparisonD2D3() {
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
        title={isKo ? '비타민 D2 vs D3: 어떤 것이 더 좋을까?' : 'Vitamin D2 vs D3: Which Is Better?'}
        description={isKo
          ? '비타민 D2(에르고칼시페롤)와 D3(콜레칼시페롤)의 차이점을 비교합니다. 흡수율, 지속성, 효능, 가격 등을 분석합니다.'
          : 'Compare vitamin D2 (ergocalciferol) and D3 (cholecalciferol). Learn about absorption rates, potency, duration, and which form is best for you.'
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
              {isKo ? '비타민 D2 vs D3' : 'Vitamin D2 vs D3'}
            </h1>
            <p
              className="text-[#4a4a4a] mt-4"
              style={{ fontFamily: "'Geist Sans', sans-serif", fontSize: 17, lineHeight: 1.7, maxWidth: 700 }}
            >
              {isKo
                ? '비타민 D 보충제를 고를 때 D2와 D3 중 어떤 것을 선택해야 할까요? D3가 흡수율과 지속성 면에서 우수하지만, D2도 특정 상황에서 유용한 선택이 될 수 있습니다.'
                : 'When choosing a vitamin D supplement, should you pick D2 or D3? D3 is superior in absorption and duration, but D2 can still be a useful choice in specific situations.'}
            </p>
            <div className="mt-4">
              <LastUpdated />
            </div>
          </div>
        </section>

        {/* Quick Answer */}
        <section className="w-full pb-12 px-6" style={{ background: '#fafaf8' }}>
          <div className="content-max">
            <div className="rounded-xl p-6" style={{ background: 'rgba(250, 204, 21, 0.08)', border: '1px solid rgba(250, 204, 21, 0.25)' }}>
              <h2 className="text-[#1a1a1a] font-semibold mb-2" style={{ fontFamily: "'Geist Sans', sans-serif", fontSize: 18 }}>
                {isKo ? '요약' : 'The Short Answer'}
              </h2>
              <p className="text-[#4a4a4a]" style={{ fontFamily: "'Geist Sans', sans-serif", fontSize: 15, lineHeight: 1.7 }}>
                {isKo
                  ? '대부분의 사람에게 비타민 D3(콜레칼시페롤)가 더 나은 선택입니다. D3는 D2보다 흡수율이 높고 체류 시간이 길며 혈중 비타민 D 농도를 더 효과적으로 높입니다. 그러나 D2(에르고칼시페롤)는 비건을 위한 보충제나 특정 처방 제제에서 여전히 사용됩니다.'
                  : 'For most people, vitamin D3 (cholecalciferol) is the better choice. It is absorbed more efficiently, stays in the body longer, and raises blood vitamin D levels more effectively than D2. However, D2 (ergocalciferol) is still used in vegan supplements and certain prescription formulations.'}
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
                      <th className="text-left px-6 py-4 text-[12px] uppercase tracking-wider" style={{ fontFamily: "'Geist Mono', monospace", fontWeight: 500, color: '#ca8a04' }}>Vitamin D2</th>
                      <th className="text-left px-6 py-4 text-[12px] uppercase tracking-wider" style={{ fontFamily: "'Geist Mono', monospace", fontWeight: 500, color: '#a16207' }}>Vitamin D3</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      {
                        feature: isKo ? '화학명' : 'Chemical Name',
                        d2: 'Ergocalciferol',
                        d3: 'Cholecalciferol',
                      },
                      {
                        feature: isKo ? '출처' : 'Source',
                        d2: isKo ? '효모, 버섯, 강화 식품' : 'Yeast, mushrooms, fortified foods',
                        d3: isKo ? '동물성 식품, 양모 지방(란올린)' : 'Animal products, lanolin (sheep wool)',
                      },
                      {
                        feature: isKo ? '비건 여부' : 'Vegan-Friendly',
                        d2: isKo ? '예 (버섯/효모에서 추출)' : 'Yes (from mushrooms/yeast)',
                        d3: isKo ? '일반적으로 아니오 (란올린). 지버 추출 D3는 예' : 'Usually no (lanolin). Lichen-derived D3 is vegan',
                      },
                      {
                        feature: isKo ? '흡수율' : 'Absorption Efficiency',
                        d2: isKo ? '낮음' : 'Lower',
                        d3: isKo ? '높음 (D2의 약 2배)' : 'Higher (~2x D2)',
                      },
                      {
                        feature: isKo ? '반감기' : 'Half-Life',
                        d2: isKo ? '짧음 (수 일~수 주)' : 'Shorter (days to weeks)',
                        d3: isKo ? '김 (수 주~수 개월)' : 'Longer (weeks to months)',
                      },
                      {
                        feature: isKo ? '혈중 농도 상승' : 'Blood Level Elevation',
                        d2: isKo ? '덜 효과적' : 'Less effective',
                        d3: isKo ? '더 효과적 (약 70-87% 더 높은 농도 유지)' : 'More effective (~70-87% higher levels)',
                      },
                      {
                        feature: isKo ? '가격' : 'Cost',
                        d2: isKo ? '일반적으로 더 저렴' : 'Generally cheaper',
                        d3: isKo ? '약간 더 비쌈' : 'Slightly more expensive',
                      },
                      {
                        feature: isKo ? '권장 대상' : 'Best For',
                        d2: isKo ? '비건(효모 추출), 처방된 50,000 IU 주 1회 복용' : 'Vegans (yeast-derived), prescription 50,000 IU weekly',
                        d3: isKo ? '대부분의 사람, 일반 보충' : 'Most people, general supplementation',
                      },
                    ].map((row, i) => (
                      <tr key={i} style={{ borderBottom: i < 7 ? '1px solid rgba(0,0,0,0.04)' : 'none' }}>
                        <td className="px-6 py-4 font-medium text-[#1a1a1a]" style={{ fontFamily: "'Geist Sans', sans-serif", fontSize: 14, background: '#fafaf8' }}>{row.feature}</td>
                        <td className="px-6 py-4 text-[#4a4a4a]" style={{ fontFamily: "'Geist Sans', sans-serif", fontSize: 14, lineHeight: 1.6 }}>{row.d2}</td>
                        <td className="px-6 py-4 text-[#4a4a4a]" style={{ fontFamily: "'Geist Sans', sans-serif", fontSize: 14, lineHeight: 1.6 }}>{row.d3}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </section>

        {/* Key Differences */}
        <section className="w-full section-padding" style={{ background: '#f5f5f0' }}>
          <div className="content-max px-6 max-w-[720px]">
            <h2
              className="text-[#1a1a1a] font-semibold mb-6"
              style={{ fontFamily: "'Geist Sans', sans-serif", fontSize: 'clamp(20px, 2.5vw, 28px)' }}
            >
              {isKo ? '핵심 차이점' : 'Key Differences Explained'}
            </h2>
            <div className="space-y-8">
              <div>
                <h3 className="text-[#1a1a1a] font-semibold mb-2" style={{ fontFamily: "'Geist Sans', sans-serif", fontSize: 17 }}>
                  {isKo ? '1. 흡수율과 지속성' : '1. Absorption and Duration'}
                </h3>
                <p className="text-[#4a4a4a]" style={{ fontFamily: "'Geist Sans', sans-serif", fontSize: 15, lineHeight: 1.7 }}>
                  {isKo
                    ? '연구에 따르면 D3는 D2보다 혈중 25(OH)D 농도를 약 2배 더 효과적으로 높입니다. D3의 반감기는 수 주에서 수 개월인 반면, D2는 훨씬 짧습니다. 이는 D3가 한 번 복용 후에도 더 오랜 시간 동안 효과를 유지한다는 의미입니다.'
                    : 'Research shows D3 is approximately twice as effective as D2 at raising blood 25(OH)D concentrations. D3 has a half-life of weeks to months, while D2 is much shorter. This means D3 maintains its effect longer between doses.'}
                </p>
              </div>
              <div>
                <h3 className="text-[#1a1a1a] font-semibold mb-2" style={{ fontFamily: "'Geist Sans', sans-serif", fontSize: 17 }}>
                  {isKo ? '2. 비건 옵션' : '2. Vegan Options'}
                </h3>
                <p className="text-[#4a4a4a]" style={{ fontFamily: "'Geist Sans', sans-serif", fontSize: 15, lineHeight: 1.7 }}>
                  {isKo
                    ? '전통적으로 D3는 양모 지방(란올린)에서 추출되어 비건이 아니었습니다. 그러나 최근에는 지버(lichen)에서 추출한 식물성 D3가 시장에 출시되어 비건에게도 D3를 선택할 수 있는 옵션이 생겼습니다.'
                    : 'Traditionally, D3 was extracted from lanolin (sheep wool fat), making it non-vegan. However, recent lichen-derived plant-based D3 supplements are now available, giving vegans a D3 option.'}
                </p>
              </div>
              <div>
                <h3 className="text-[#1a1a1a] font-semibold mb-2" style={{ fontFamily: "'Geist Sans', sans-serif", fontSize: 17 }}>
                  {isKo ? '3. 처방 vs 일반 보충제' : '3. Prescription vs Over-the-Counter'}
                </h3>
                <p className="text-[#4a4a4a]" style={{ fontFamily: "'Geist Sans', sans-serif", fontSize: 15, lineHeight: 1.7 }}>
                  {isKo
                    ? '미국에서 처방되는 고용량 비타민 D(주로 50,000 IU)는 대부분 D2입니다. 그러나 연구 결과 D3가 더 효과적이므로, 가능하다면 D3 처방을 요청하거나 일반 판매 D3 보충제를 고려하는 것이 좋습니다.'
                    : 'In the United States, prescription high-dose vitamin D (typically 50,000 IU) is usually D2. However, since research shows D3 is more effective, ask your doctor about D3 prescriptions or consider over-the-counter D3 supplements.'}
                </p>
              </div>
            </div>

            <div className="mt-8 rounded-lg p-5" style={{ background: 'rgba(250, 204, 21, 0.08)', border: '1px solid rgba(250, 204, 21, 0.2)' }}>
              <p className="text-[#4a4a4a]" style={{ fontFamily: "'Geist Sans', sans-serif", fontSize: 13, lineHeight: 1.6 }}>
                <strong style={{ color: '#1a1a1a' }}>{isKo ? '참고:' : 'Note:'}</strong>{' '}
                {isKo
                  ? '이 정보는 교육 목적으로만 제공됩니다. 비타민 D 보충제를 시작하기 전에 항상 의료 제공자와 상담하세요.'
                  : 'This information is for educational purposes only. Always consult a healthcare provider before starting vitamin D supplementation.'}
              </p>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="w-full py-16 px-6" style={{ background: '#1a1a1a' }}>
          <div className="content-max text-center">
            <h2 className="text-[#fafaf8] font-medium" style={{ fontFamily: "'Geist Sans', sans-serif", fontSize: 'clamp(24px, 3vw, 32px)' }}>
              {isKo ? '비타민 D에 대해 더 알아보기' : 'Learn More About Vitamin D'}
            </h2>
            <div className="flex gap-4 justify-center mt-8 flex-wrap">
              <Link href="/vitamins/vitamin-d" className="px-8 py-3.5 rounded-full text-[14px] font-medium transition-all duration-300 hover:opacity-80" style={{ fontFamily: "'Geist Sans', sans-serif", background: '#fafaf8', color: '#1a1a1a' }}>
                {isKo ? '비타민 D 상세 보기' : 'View Vitamin D Details'} →
              </Link>
              <Link href="/supplement-guide" className="px-8 py-3.5 rounded-full text-[14px] font-medium text-white transition-all duration-300 hover:opacity-80" style={{ fontFamily: "'Geist Sans', sans-serif", border: '1px solid rgba(250,250,248,0.3)' }}>
                {isKo ? '맞춤 추천 받기' : 'Get Personalized Recommendations'}
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}

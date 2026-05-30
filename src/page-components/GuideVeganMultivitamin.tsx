import { useEffect, useRef } from 'react'
import Link from 'next/link'
import gsap from 'gsap'
import Navigation from '../sections/Navigation'
import Footer from '../sections/Footer'
import { useLanguage } from '../contexts/LanguageContext'
import SEO from '../components/SEO'
import LastUpdated from '../components/LastUpdated'

export default function GuideVeganMultivitamin() {
  const { lang } = useLanguage()
  const headerRef = useRef<HTMLDivElement>(null)

  useEffect(() => { window.scrollTo(0, 0) }, [])

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (headerRef.current) {
        gsap.from(headerRef.current.children, { y: 30, opacity: 0, stagger: 0.1, duration: 0.8, ease: 'power3.out', delay: 0.2 })
      }
    })
    return () => ctx.revert()
  }, [])

  const isKo = lang === 'ko'

  return (
    <div className="relative">
      <SEO
        title={isKo ? '비건을 위한 종합비타민 가이드: 꼭 필요한 영양소 7가지' : 'Best Multivitamins for Vegans: 7 Nutrients You Actually Need'}
        description={isKo
          ? '비건 식단에서 부족하기 쉬운 7가지 영양소와 최적의 보충 방법을 알아보세요. B12, D, 오메가-3, 철분, 아연, 요오드, 칼슘.'
          : 'Discover the 7 nutrients most commonly lacking in vegan diets and how to supplement them effectively. B12, D, omega-3, iron, zinc, iodine, calcium.'
        }
       
        lang={lang}
      />
      <Navigation />
      <main style={{ paddingTop: 60 }}>
        {/* Hero */}
        <section className="w-full pt-16 pb-12 px-6" style={{ background: '#fafaf8' }}>
          <div className="content-max" ref={headerRef}>
            <span className="label-mono text-[#4a4a4a]">Guide</span>
            <h1
              className="text-[#1a1a1a] font-semibold mt-3 tracking-[-0.02em]"
              style={{ fontFamily: "'Geist Sans', sans-serif", fontSize: 'clamp(32px, 5vw, 52px)' }}
            >
              {isKo ? '비건 종합비타민 가이드' : 'Vegan Multivitamin Guide'}
            </h1>
            <p
              className="text-[#4a4a4a] mt-4"
              style={{ fontFamily: "'Geist Sans', sans-serif", fontSize: 17, lineHeight: 1.7, maxWidth: 700 }}
            >
              {isKo
                ? '잘 계획된 비건 식단은 대부분의 영양소를 제공하지만, 7가지 영양소는 보충제가 거의 필수적입니다. 이 가이드에서는 각 영양소가 왜 중요한지, 어떤 형태로 보충하는 것이 가장 좋은지 알아보겠습니다.'
                : 'A well-planned vegan diet provides most nutrients, but 7 are nearly essential to supplement. This guide covers why each matters and the best forms to take.'}
            </p>
            <div className="mt-4">
              <LastUpdated />
            </div>
          </div>
        </section>

        {/* Nutrient Cards */}
        <section className="w-full pb-24 px-6" style={{ background: '#fafaf8' }}>
          <div className="content-max max-w-[800px] space-y-6">
            {[
              {
                name: 'Vitamin B12 (Cobalamin)',
                priority: isKo ? '필수' : 'Essential',
                priorityColor: '#e11d48',
                why: isKo
                  ? 'B12는 거의 동물성 식품에만 존재합니다. 비건은 반드시 보충해야 하며, 결핍은 신경 손상을 유발할 수 있습니다.'
                  : 'B12 is found almost exclusively in animal products. Vegans must supplement; deficiency can cause irreversible nerve damage.',
                form: isKo ? '메틸코발라민 또는 시아노코발라민 250–500 mcg/일, 또는 2,500 mcg/주' : 'Methylcobalamin or cyanocobalamin 250–500 mcg/day, or 2,500 mcg/week',
                food: isKo ? '강화 영양효모, 강화 식물성 우유' : 'Fortified nutritional yeast, fortified plant milks',
                link: '/vitamins/vitamin-b12',
              },
              {
                name: 'Vitamin D',
                priority: isKo ? '강력 권장' : 'Strongly Recommended',
                priorityColor: '#ea580c',
                why: isKo
                  ? '비타민 D는 햇빛을 통해 합성되지만, 북쪽 위도나 실내 생활자는 충분히 얻기 어렵습니다. D3가 D2보다 우수합니다.'
                  : 'Vitamin D is synthesized from sunlight, but those at northern latitudes or with indoor lifestyles often don\'t get enough. D3 is superior to D2.',
                form: isKo ? '지버 추출 비타민 D3 1,000–2,000 IU/일' : 'Lichen-derived vitamin D3 1,000–2,000 IU/day',
                food: isKo ? 'UV에 노출된 버섯, 강화 식물성 우유' : 'UV-exposed mushrooms, fortified plant milks',
                link: '/vitamins/vitamin-d',
              },
              {
                name: 'Omega-3 (DHA + EPA)',
                priority: isKo ? '강력 권장' : 'Strongly Recommended',
                priorityColor: '#ea580c',
                why: isKo
                  ? 'ALA(아마씨, 호두)는 체 내에서 DHA/EPA로 효율적으로 전환되지 않습니다(변환율 <5%). 해조류 추출 DHA/EPA 보충이 권장됩니다.'
                  : 'ALA from flax and walnuts converts to DHA/EPA inefficiently (<5% conversion rate). Algae-derived DHA/EPA supplements are recommended.',
                form: isKo ? '해조류 오메가-3 250–300 mg DHA+EPA/일' : 'Algae omega-3 250–300 mg DHA+EPA/day',
                food: isKo ? '아마씨, 치아씨, 호두 (ALA만 제공)' : 'Flaxseed, chia, walnuts (ALA only)',
                link: null,
              },
              {
                name: 'Iron',
                priority: isKo ? '상황에 따라' : 'Conditional',
                priorityColor: '#2563eb',
                why: isKo
                  ? '식물성 철분(비헴철)은 동물성 철분(헴철)보다 흡수율이 낮습니다. 월경 중인 여성은 특히 주의가 필요합니다.'
                  : 'Plant iron (non-heme) is absorbed less efficiently than heme iron from meat. Menstruating women are especially at risk.',
                form: isKo ? '식이로 충분할 수 있음. 보충 시 18 mg 철분(비헴철) + 비타민 C와 함께' : 'May be sufficient from diet. If supplementing: 18 mg non-heme iron with vitamin C',
                food: isKo ? '렌틸콩, 두부, 시금치, 강화 시리얼' : 'Lentils, tofu, spinach, fortified cereals',
                link: null,
              },
              {
                name: 'Zinc',
                priority: isKo ? '상황에 따라' : 'Conditional',
                priorityColor: '#2563eb',
                why: isKo
                  ? '식물성 아연은 피테이트와 결합하여 흡수가 저해될 수 있습니다. 견과류, 씨앗, 콩류로 대부분 충당 가능합니다.'
                  : 'Plant zinc can be bound by phytates, reducing absorption. Most needs can be met through nuts, seeds, and legumes.',
                form: isKo ? '식이로 충분할 수 있음. 보충 시 8–11 mg/일' : 'May be sufficient from diet. If supplementing: 8–11 mg/day',
                food: isKo ? '호박씨, 칙피, 렌틸콩, 귀리' : 'Pumpkin seeds, chickpeas, lentils, oats',
                link: null,
              },
              {
                name: 'Iodine',
                priority: isKo ? '상황에 따라' : 'Conditional',
                priorityColor: '#2563eb',
                why: isKo
                  ? '요오드의 주요 공급원은 해산물과 요오드화 소금입니다. 비건은 요오드화 소금을 사용하거나 해조류 보충제를 고려해야 합니다.'
                  : 'The main sources of iodine are seafood and iodized salt. Vegans should use iodized salt or consider kelp supplements.',
                form: isKo ? '요오드화 소금 사용 또는 해조류 보충제 150 mcg/일' : 'Use iodized salt or kelp supplement 150 mcg/day',
                food: isKo ? '요오드화 소금, 해조류(과다 섭취 주의)' : 'Iodized salt, seaweed (avoid excess)',
                link: null,
              },
              {
                name: 'Calcium',
                priority: isKo ? '상황에 따라' : 'Conditional',
                priorityColor: '#2563eb',
                why: isKo
                  ? '유제품을 제외해도 칼슘은 시금치, 두부, 강화 식물성 우유 등에서 충분히 얻을 수 있습니다. 다만 섭취량을 확인해야 합니다.'
                  : 'Dairy-free diets can still provide calcium from leafy greens, tofu, and fortified plant milks. Monitor intake to ensure adequacy.',
                form: isKo ? '식이로 충분할 수 있음. 보충 시 500 mg/일(식사와 분리)' : 'May be sufficient from diet. If supplementing: 500 mg/day (separate from meals)',
                food: isKo ? '강화 식물성 우유, 두부, 치아씨, 브로콜리' : 'Fortified plant milks, tofu, chia seeds, broccoli',
                link: null,
              },
            ].map((nutrient, i) => (
              <div key={i} className="rounded-xl p-8 bg-white" style={{ boxShadow: '0 1px 3px rgba(0,0,0,0.04)', borderLeft: `3px solid ${nutrient.priorityColor}` }}>
                <div className="flex items-center gap-3 mb-3 flex-wrap">
                  <h3 className="text-[#1a1a1a] font-semibold" style={{ fontFamily: "'Geist Sans', sans-serif", fontSize: 18 }}>
                    {nutrient.name}
                  </h3>
                  <span className="label-mono px-3 py-1 rounded-full" style={{ fontSize: 10, background: `${nutrient.priorityColor}15`, color: nutrient.priorityColor }}>
                    {nutrient.priority.toUpperCase()}
                  </span>
                </div>
                <p className="text-[#4a4a4a] mb-4" style={{ fontFamily: "'Geist Sans', sans-serif", fontSize: 14, lineHeight: 1.6 }}>
                  {nutrient.why}
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="label-mono text-[#4a4a4a] mb-1" style={{ fontSize: 10 }}>{isKo ? '권장 보충' : 'Supplement Form'}</h4>
                    <p className="text-[#1a1a1a] font-medium" style={{ fontFamily: "'Geist Sans', sans-serif", fontSize: 14 }}>{nutrient.form}</p>
                  </div>
                  <div>
                    <h4 className="label-mono text-[#4a4a4a] mb-1" style={{ fontSize: 10 }}>{isKo ? '식품 출처' : 'Food Sources'}</h4>
                    <p className="text-[#4a4a4a]" style={{ fontFamily: "'Geist Sans', sans-serif", fontSize: 14 }}>{nutrient.food}</p>
                  </div>
                </div>
                {nutrient.link && (
                  <div className="mt-4 pt-4" style={{ borderTop: '1px solid rgba(0,0,0,0.04)' }}>
                    <Link href={nutrient.link} className="inline-flex items-center gap-2 text-[13px] font-medium transition-all hover:gap-3" style={{ fontFamily: "'Geist Sans', sans-serif", color: nutrient.priorityColor }}>
                      {isKo ? '더 알아보기' : 'Learn more'} →
                    </Link>
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* Summary Table */}
        <section className="w-full section-padding" style={{ background: '#f5f5f0' }}>
          <div className="content-max px-6">
            <h2
              className="text-[#1a1a1a] font-semibold mb-6 text-center"
              style={{ fontFamily: "'Geist Sans', sans-serif", fontSize: 'clamp(20px, 2.5vw, 28px)' }}
            >
              {isKo ? '한눈에 보기' : 'At a Glance'}
            </h2>
            <div className="rounded-xl overflow-hidden bg-white max-w-[800px] mx-auto" style={{ boxShadow: '0 2px 12px rgba(0,0,0,0.05)' }}>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr style={{ background: '#fafaf8', borderBottom: '1px solid rgba(0,0,0,0.06)' }}>
                      <th className="text-left px-6 py-4 text-[12px] uppercase tracking-wider text-[#4a4a4a]" style={{ fontFamily: "'Geist Mono', monospace", fontWeight: 500 }}>{isKo ? '영양소' : 'Nutrient'}</th>
                      <th className="text-left px-6 py-4 text-[12px] uppercase tracking-wider text-[#4a4a4a]" style={{ fontFamily: "'Geist Mono', monospace", fontWeight: 500 }}>{isKo ? '우선순위' : 'Priority'}</th>
                      <th className="text-left px-6 py-4 text-[12px] uppercase tracking-wider text-[#4a4a4a]" style={{ fontFamily: "'Geist Mono', monospace", fontWeight: 500 }}>{isKo ? '권장 형태' : 'Best Form'}</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      { nutrient: 'Vitamin B12', priority: isKo ? '필수' : 'Essential', form: 'Methyl- or Cyanocobalamin' },
                      { nutrient: 'Vitamin D', priority: isKo ? '강력 권장' : 'Strongly Recommended', form: 'Lichen-derived D3' },
                      { nutrient: 'Omega-3 (DHA/EPA)', priority: isKo ? '강력 권장' : 'Strongly Recommended', form: 'Algae oil' },
                      { nutrient: 'Iron', priority: isKo ? '상황에 따라' : 'Conditional', form: 'Non-heme + Vitamin C' },
                      { nutrient: 'Zinc', priority: isKo ? '상황에 따라' : 'Conditional', form: 'Zinc picolinate or gluconate' },
                      { nutrient: 'Iodine', priority: isKo ? '상황에 따라' : 'Conditional', form: 'Iodized salt or kelp' },
                      { nutrient: 'Calcium', priority: isKo ? '상황에 따라' : 'Conditional', form: 'Calcium citrate' },
                    ].map((row, i) => (
                      <tr key={i} style={{ borderBottom: i < 6 ? '1px solid rgba(0,0,0,0.04)' : 'none' }}>
                        <td className="px-6 py-3.5 text-[#1a1a1a] font-medium" style={{ fontFamily: "'Geist Sans', sans-serif", fontSize: 14 }}>{row.nutrient}</td>
                        <td className="px-6 py-3.5 text-[#4a4a4a]" style={{ fontFamily: "'Geist Sans', sans-serif", fontSize: 14 }}>{row.priority}</td>
                        <td className="px-6 py-3.5 text-[#4a4a4a]" style={{ fontFamily: "'Geist Sans', sans-serif", fontSize: 14 }}>{row.form}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </section>

        {/* Disclaimer */}
        <section className="w-full pb-16 px-6" style={{ background: '#f5f5f0' }}>
          <div className="content-max max-w-[720px]">
            <div className="rounded-lg p-5" style={{ background: 'rgba(74, 222, 128, 0.08)', border: '1px solid rgba(74, 222, 128, 0.2)' }}>
              <p className="text-[#4a4a4a]" style={{ fontFamily: "'Geist Sans', sans-serif", fontSize: 13, lineHeight: 1.6 }}>
                <strong style={{ color: '#1a1a1a' }}>{isKo ? '중요:' : 'Important:'}</strong>{' '}
                {isKo
                  ? '이 가이드는 교육 목적으로만 제공됩니다. 개인의 필요는 건강 상태, 연령, 성별에 따라 다릅니다. 특히 임신 중이거나 기존 질환이 있는 경우, 영양제 복용을 시작하기 전에 반드시 의료 제공자와 상담하세요.'
                  : 'This guide is for educational purposes only. Individual needs vary based on health status, age, and gender. Always consult a healthcare provider before starting supplements, especially if pregnant or managing health conditions.'}
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}

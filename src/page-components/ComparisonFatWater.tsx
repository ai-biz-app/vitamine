import { useEffect, useRef } from 'react'
import Link from 'next/link'
import gsap from 'gsap'
import Navigation from '../sections/Navigation'
import Footer from '../sections/Footer'
import { useLanguage } from '../contexts/LanguageContext'
import SEO from '../components/SEO'
import LastUpdated from '../components/LastUpdated'

const fatSolubleVits = [
  { name: 'Vitamin A', id: 'vitamin-a', color: '#fb923c', key: 'Vision, immunity, cell growth' },
  { name: 'Vitamin D', id: 'vitamin-d', color: '#facc15', key: 'Bone health, calcium absorption' },
  { name: 'Vitamin E', id: 'vitamin-e', color: '#a78bfa', key: 'Antioxidant protection' },
  { name: 'Vitamin K', id: 'vitamin-k', color: '#4ade80', key: 'Blood clotting, bone metabolism' },
]

const waterSolubleVits = [
  { name: 'Vitamin B1 (Thiamine)', id: 'vitamin-b1', color: '#f87171', key: 'Energy metabolism' },
  { name: 'Vitamin B2 (Riboflavin)', id: 'vitamin-b2', color: '#60a5fa', key: 'Cellular growth' },
  { name: 'Vitamin B3 (Niacin)', id: 'vitamin-b3', color: '#2dd4bf', key: 'DNA repair, cell signaling' },
  { name: 'Vitamin B5 (Pantothenic Acid)', id: 'vitamin-b5', color: '#f472b6', key: 'Fatty acid metabolism' },
  { name: 'Vitamin B6 (Pyridoxine)', id: 'vitamin-b6', color: '#a3e635', key: 'Amino acid metabolism' },
  { name: 'Vitamin B7 (Biotin)', id: 'vitamin-b7', color: '#34d399', key: 'Gene expression' },
  { name: 'Vitamin B9 (Folate)', id: 'vitamin-b9', color: '#818cf8', key: 'Cell division, DNA synthesis' },
  { name: 'Vitamin B12 (Cobalamin)', id: 'vitamin-b12', color: '#c084fc', key: 'Neurological function' },
  { name: 'Vitamin C (Ascorbic Acid)', id: 'vitamin-c', color: '#fb7185', key: 'Collagen, immunity' },
]

export default function ComparisonFatWater() {
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
        title={isKo ? '지용성 vs 수용성 비타민: 완벽 비교' : 'Fat-Soluble vs Water-Soluble Vitamins: The Complete Comparison'}
        description={isKo
          ? '지용성 비타민(A, D, E, K)과 수용성 비타민(B군, C)의 차이점을 한눈에 비교하세요. 흡수, 저장, 결핍 증상, 독성 등 모든 것을 알아보세요.'
          : 'Discover the key differences between fat-soluble (A, D, E, K) and water-soluble (B-complex, C) vitamins. Compare absorption, storage, deficiency symptoms, and toxicity risks.'
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
              {isKo ? '지용성 vs 수용성 비타민' : 'Fat-Soluble vs Water-Soluble Vitamins'}
            </h1>
            <p
              className="text-[#4a4a4a] mt-4"
              style={{ fontFamily: "'Geist Sans', sans-serif", fontSize: 17, lineHeight: 1.7, maxWidth: 700 }}
            >
              {isKo
                ? '비타민은 두 개의 계열로 나뉩니다: 체지방에 저장되는 지용성 비타민과 매일 섭취가 필요한 수용성 비타민. 각각의 규칙을 이해하면 영양 결핍을 예방하고 과다 복용의 위험을 피할 수 있습니다.'
                : 'Vitamins fall into two families: fat-soluble vitamins stored in body fat, and water-soluble vitamins that need daily replenishment. Understanding their different rules helps prevent deficiencies and avoid toxicity.'}
            </p>
            <div className="mt-4">
              <LastUpdated />
            </div>
          </div>
        </section>

        {/* Comparison Table */}
        <section className="w-full pb-16 px-6" style={{ background: '#fafaf8' }}>
          <div className="content-max" ref={tableRef}>
            <div className="rounded-xl overflow-hidden bg-white" style={{ boxShadow: '0 2px 12px rgba(0,0,0,0.05)' }}>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr style={{ background: '#fafaf8', borderBottom: '1px solid rgba(0,0,0,0.06)' }}>
                      <th className="text-left px-6 py-4 text-[12px] uppercase tracking-wider text-[#4a4a4a]" style={{ fontFamily: "'Geist Mono', monospace", fontWeight: 500 }}>{isKo ? '특징' : 'Feature'}</th>
                      <th className="text-left px-6 py-4 text-[12px] uppercase tracking-wider text-[#4a4a4a]" style={{ fontFamily: "'Geist Mono', monospace", fontWeight: 500, color: '#ea580c' }}>{isKo ? '지용성 (A, D, E, K)' : 'Fat-Soluble (A, D, E, K)'}</th>
                      <th className="text-left px-6 py-4 text-[12px] uppercase tracking-wider text-[#4a4a4a]" style={{ fontFamily: "'Geist Mono', monospace", fontWeight: 500, color: '#2563eb' }}>{isKo ? '수용성 (B군 + C)' : 'Water-Soluble (B + C)'}</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      {
                        feature: isKo ? '저장 위치' : 'Storage',
                        fat: isKo ? '체지방과 간에 수 주~수 개월 저장' : 'Stored in body fat and liver for weeks to months',
                        water: isKo ? '거의 저장되지 않음 (B12 제외). 매일 섭취 필요' : 'Not stored (except B12). Must be consumed regularly',
                      },
                      {
                        feature: isKo ? '흡수 방식' : 'Absorption',
                        fat: isKo ? '식이 지방과 함께 흡수됨' : 'Absorbed with dietary fat',
                        water: isKo ? '물에 녹아 직접 흡수됨' : 'Dissolves in water and absorbed directly',
                      },
                      {
                        feature: isKo ? '배출' : 'Excretion',
                        fat: isKo ? '배출이 느림. 축적 가능' : 'Slow excretion. Can accumulate',
                        water: isKo ? '과량은 소변으로 배출' : 'Excess excreted in urine',
                      },
                      {
                        feature: isKo ? '독성 위험' : 'Toxicity Risk',
                        fat: isKo ? '높음. 고용량 보충제 시 중독 가능' : 'High. Megadoses can cause toxicity',
                        water: isKo ? '낮음. B6, Niacin 고용량은 예외' : 'Low. Very high B6 or niacin can cause issues',
                      },
                      {
                        feature: isKo ? '결핍 발생 속도' : 'Deficiency Onset',
                        fat: isKo ? '느림 (주~개월)' : 'Slow (weeks to months)',
                        water: isKo ? '빠름 (며칠~주)' : 'Fast (days to weeks)',
                      },
                      {
                        feature: isKo ? '대표 기능' : 'Key Functions',
                        fat: isKo ? '시력, 뼈 건강, 항산화, 혈액 응고' : 'Vision, bone health, antioxidant, blood clotting',
                        water: isKo ? '에너지 대사, 면역, 콜라겐 합성' : 'Energy metabolism, immunity, collagen synthesis',
                      },
                    ].map((row, i) => (
                      <tr key={i} style={{ borderBottom: i < 5 ? '1px solid rgba(0,0,0,0.04)' : 'none' }}>
                        <td className="px-6 py-4 font-medium text-[#1a1a1a]" style={{ fontFamily: "'Geist Sans', sans-serif", fontSize: 14, background: '#fafaf8' }}>{row.feature}</td>
                        <td className="px-6 py-4 text-[#4a4a4a]" style={{ fontFamily: "'Geist Sans', sans-serif", fontSize: 14, lineHeight: 1.6 }}>{row.fat}</td>
                        <td className="px-6 py-4 text-[#4a4a4a]" style={{ fontFamily: "'Geist Sans', sans-serif", fontSize: 14, lineHeight: 1.6 }}>{row.water}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </section>

        {/* Vitamin Lists */}
        <section className="w-full section-padding" style={{ background: '#f5f5f0' }}>
          <div className="content-max px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Fat-Soluble */}
              <div className="rounded-xl p-8 bg-white" style={{ boxShadow: '0 2px 12px rgba(0,0,0,0.05)', borderTop: '3px solid #ea580c' }}>
                <h2 className="text-[#1a1a1a] font-semibold mb-6" style={{ fontFamily: "'Geist Sans', sans-serif", fontSize: 22 }}>
                  {isKo ? '지용성 비타민' : 'Fat-Soluble Vitamins'}
                </h2>
                <div className="space-y-4">
                  {fatSolubleVits.map((v) => (
                    <Link
                      key={v.id}
                      href={`/vitamins/${v.id}`}
                      className="flex items-center gap-4 group p-3 rounded-lg transition-all hover:bg-[#fafaf8]"
                    >
                      <div className="w-3 h-3 rounded-full flex-shrink-0" style={{ background: v.color }} />
                      <div>
                        <span className="text-[#1a1a1a] font-medium block" style={{ fontFamily: "'Geist Sans', sans-serif", fontSize: 15 }}>{v.name}</span>
                        <span className="text-[#4a4a4a]" style={{ fontFamily: "'Geist Sans', sans-serif", fontSize: 13 }}>{v.key}</span>
                      </div>
                      <svg width="14" height="14" viewBox="0 0 16 16" fill="none" className="ml-auto opacity-0 group-hover:opacity-40 transition-opacity">
                        <path d="M6 12L10 8L6 4" stroke="#1a1a1a" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </Link>
                  ))}
                </div>
              </div>

              {/* Water-Soluble */}
              <div className="rounded-xl p-8 bg-white" style={{ boxShadow: '0 2px 12px rgba(0,0,0,0.05)', borderTop: '3px solid #2563eb' }}>
                <h2 className="text-[#1a1a1a] font-semibold mb-6" style={{ fontFamily: "'Geist Sans', sans-serif", fontSize: 22 }}>
                  {isKo ? '수용성 비타민' : 'Water-Soluble Vitamins'}
                </h2>
                <div className="space-y-4">
                  {waterSolubleVits.map((v) => (
                    <Link
                      key={v.id}
                      href={`/vitamins/${v.id}`}
                      className="flex items-center gap-4 group p-3 rounded-lg transition-all hover:bg-[#fafaf8]"
                    >
                      <div className="w-3 h-3 rounded-full flex-shrink-0" style={{ background: v.color }} />
                      <div>
                        <span className="text-[#1a1a1a] font-medium block" style={{ fontFamily: "'Geist Sans', sans-serif", fontSize: 15 }}>{v.name}</span>
                        <span className="text-[#4a4a4a]" style={{ fontFamily: "'Geist Sans', sans-serif", fontSize: 13 }}>{v.key}</span>
                      </div>
                      <svg width="14" height="14" viewBox="0 0 16 16" fill="none" className="ml-auto opacity-0 group-hover:opacity-40 transition-opacity">
                        <path d="M6 12L10 8L6 4" stroke="#1a1a1a" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Key Takeaways */}
        <section className="w-full section-padding" style={{ background: '#fafaf8' }}>
          <div className="content-max px-6 max-w-[720px]">
            <h2 className="text-[#1a1a1a] font-semibold mb-6" style={{ fontFamily: "'Geist Sans', sans-serif", fontSize: 'clamp(24px, 3vw, 32px)' }}>
              {isKo ? '핵심 요약' : 'Key Takeaways'}
            </h2>
            <div className="space-y-4">
              {[
                isKo
                  ? '지용성 비타민은 지방과 함께 섭취해야 흡수되며, 체내에 저장되므로 매일 섭취하지 않아도 됩니다. 그러나 보충제로 과다 복용 시 독성을 일으킬 수 있습니다.'
                  : 'Fat-soluble vitamins need dietary fat to be absorbed and are stored in the body, so you don\'t need them every day. However, megadosing with supplements can cause toxicity.',
                isKo
                  ? '수용성 비타민은 대부분 체내에 저장되지 않으므로 규칙적으로 섭취해야 합니다. 과량은 소변으로 배출되므로 일반적으로 독성 위험이 낮습니다.'
                  : 'Water-soluble vitamins are not stored (with rare exceptions), so they need regular intake. Excess is excreted in urine, making toxicity rare.',
                isKo
                  ? '비타민 D는 햇빛을 통해 피부에서 합성할 수 있어 "햇빛 비타민"으로 불립니다. 이는 다른 비타민과 달리 신체 자체에서 생성될 수 있다는 점에서 독특합니다.'
                  : 'Vitamin D is unique because your skin can synthesize it from sunlight — earning it the nickname "the sunshine vitamin."',
                isKo
                  ? '비타민 B12는 수용성 비타민이지만 간에 수 년간 저장될 수 있어, 결핍 증상이 나타나는 데 오랜 시간이 걸릴 수 있습니다. 비건은 반드시 보충제를 섭취해야 합니다.'
                  : 'Vitamin B12 is water-soluble but can be stored in the liver for years, so deficiency symptoms may take a long time to appear. Vegans must supplement.',
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 rounded-full mt-2 flex-shrink-0" style={{ background: '#1a1a1a' }} />
                  <p className="text-[#4a4a4a]" style={{ fontFamily: "'Geist Sans', sans-serif", fontSize: 15, lineHeight: 1.7 }}>{item}</p>
                </div>
              ))}
            </div>

            <div className="mt-8 rounded-lg p-5" style={{ background: 'rgba(251, 146, 60, 0.06)', border: '1px solid rgba(251, 146, 60, 0.15)' }}>
              <p className="text-[#4a4a4a]" style={{ fontFamily: "'Geist Sans', sans-serif", fontSize: 13, lineHeight: 1.6 }}>
                <strong style={{ color: '#1a1a1a' }}>{isKo ? '참고:' : 'Note:'}</strong>{' '}
                {isKo
                  ? '이 정보는 교육 목적으로만 제공됩니다. 개인의 영양 필요량은 다를 수 있으므로 영양제 복용을 시작하기 전에 항상 의료 제공자와 상담하세요.'
                  : 'This information is for educational purposes only. Individual nutritional needs vary. Always consult a healthcare provider before starting supplements.'}
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}

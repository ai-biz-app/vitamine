import { useEffect } from 'react'
import { Link } from 'react-router'
import Navigation from '../sections/Navigation'
import Footer from '../sections/Footer'
import { useLanguage } from '../contexts/LanguageContext'

export default function TermsOfService() {
  const { lang } = useLanguage()

  useEffect(() => { window.scrollTo(0, 0) }, [])

  const isKo = lang === 'ko'

  return (
    <div className="relative">
      <Navigation />
      <main style={{ paddingTop: 60 }}>
        <section className="w-full pt-16 pb-12 px-6" style={{ background: '#fafaf8' }}>
          <div className="content-max max-w-[720px]">
            <span className="label-mono text-[#4a4a4a]">{isKo ? '법적 고지' : 'Legal'}</span>
            <h1
              className="text-[#1a1a1a] font-semibold mt-3 tracking-[-0.02em]"
              style={{ fontFamily: "'Geist Sans', sans-serif", fontSize: 'clamp(32px, 5vw, 52px)' }}
            >
              {isKo ? '서비스 이용약관' : 'Terms of Service'}
            </h1>
            <p
              className="text-[#4a4a4a] mt-4"
              style={{ fontFamily: "'Geist Sans', sans-serif", fontSize: 15, lineHeight: 1.7 }}
            >
              {isKo
                ? '본 이용약관은 ClearlyVitamins(이하 "본 사이트")를 사용함에 있어 적용되는 조건을 규정합니다.'
                : 'These Terms of Service govern your use of ClearlyVitamins ("this site").'}
            </p>
          </div>
        </section>

        <section className="w-full pb-24 px-6" style={{ background: '#fafaf8' }}>
          <div className="content-max max-w-[720px] space-y-10">
            {/* 1. Acceptance */}
            <div>
              <h2
                className="text-[#1a1a1a] font-semibold mb-3"
                style={{ fontFamily: "'Geist Sans', sans-serif", fontSize: 20 }}
              >
                {isKo ? '1. 약관 동의' : '1. Acceptance of Terms'}
              </h2>
              <p style={{ fontFamily: "'Geist Sans', sans-serif", fontSize: 15, lineHeight: 1.7, color: '#4a4a4a' }}>
                {isKo
                  ? '본 사이트에 접속하고 사용함으로써 귀하는 본 이용약관에 동의하는 것으로 간주됩니다. 동의하지 않으시는 경우 사이트 사용을 자제해 주세요.'
                  : 'By accessing and using this site, you agree to be bound by these Terms of Service. If you do not agree, please do not use the site.'}
              </p>
            </div>

            {/* 2. Not Medical Advice */}
            <div>
              <h2
                className="text-[#1a1a1a] font-semibold mb-3"
                style={{ fontFamily: "'Geist Sans', sans-serif", fontSize: 20 }}
              >
                {isKo ? '2. 의학적 조언 부인' : '2. Not Medical Advice'}
              </h2>
              <p style={{ fontFamily: "'Geist Sans', sans-serif", fontSize: 15, lineHeight: 1.7, color: '#4a4a4a' }}>
                {isKo
                  ? '본 사이트에서 제공하는 모든 정보는 교육 목적으로만 제공되며 의학적 조언을 대체할 수 없습니다. 영양제 복용을 시작하기 전에 항상 의료 제공자나 등록 영양사와 상담하세요. 본 사이트의 정보에 의존하여 취한 조치에 대해 책임을 지지 않습니다.'
                  : 'All information provided on this site is for educational purposes only and does not replace professional medical advice. Always consult a healthcare provider or registered dietitian before starting any supplementation. We are not responsible for actions taken based on information from this site.'}
              </p>
            </div>

            {/* 3. Use of Content */}
            <div>
              <h2
                className="text-[#1a1a1a] font-semibold mb-3"
                style={{ fontFamily: "'Geist Sans', sans-serif", fontSize: 20 }}
              >
                {isKo ? '3. 콘텐츠 사용' : '3. Use of Content'}
              </h2>
              <p style={{ fontFamily: "'Geist Sans', sans-serif", fontSize: 15, lineHeight: 1.7, color: '#4a4a4a' }}>
                {isKo
                  ? '본 사이트의 모든 콘텐츠는 저작권법에 의해 보호됩니다. 개인적이고 비상업적인 목적으로만 사용할 수 있으며 사전 서면 동의 없이 복제, 배포, 수정할 수 없습니다.'
                  : 'All content on this site is protected by copyright law. You may use it for personal, non-commercial purposes only. You may not reproduce, distribute, or modify it without prior written consent.'}
              </p>
            </div>

            {/* 4. Disclaimer of Warranties */}
            <div>
              <h2
                className="text-[#1a1a1a] font-semibold mb-3"
                style={{ fontFamily: "'Geist Sans', sans-serif", fontSize: 20 }}
              >
                {isKo ? '4. 보증 부인' : '4. Disclaimer of Warranties'}
              </h2>
              <p style={{ fontFamily: "'Geist Sans', sans-serif", fontSize: 15, lineHeight: 1.7, color: '#4a4a4a' }}>
                {isKo
                  ? '본 사이트는 "있는 그대로" 제공됩니다. 정보의 정확성, 완전성, 신뢰성에 대해 어떠한 보증도 하지 않습니다. 사이트 사용으로 인한 손해에 대해 책임을 지지 않습니다.'
                  : 'This site is provided "as is." We make no warranties regarding the accuracy, completeness, or reliability of the information. We are not liable for any damages arising from your use of the site.'}
              </p>
            </div>

            {/* 5. External Links */}
            <div>
              <h2
                className="text-[#1a1a1a] font-semibold mb-3"
                style={{ fontFamily: "'Geist Sans', sans-serif", fontSize: 20 }}
              >
                {isKo ? '5. 외부 링크' : '5. External Links'}
              </h2>
              <p style={{ fontFamily: "'Geist Sans', sans-serif", fontSize: 15, lineHeight: 1.7, color: '#4a4a4a' }}>
                {isKo
                  ? '본 사이트에는 제3자 웹사이트로 연결되는 링크가 포함되어 있습니다. 이러한 링크는 편의를 위해 제공되며 해당 사이트의 콘텐츠나 정책에 대해 책임을 지지 않습니다.'
                  : 'This site contains links to third-party websites. These links are provided for convenience, and we are not responsible for the content or policies of those sites.'}
              </p>
            </div>

            {/* 6. Changes to Terms */}
            <div>
              <h2
                className="text-[#1a1a1a] font-semibold mb-3"
                style={{ fontFamily: "'Geist Sans', sans-serif", fontSize: 20 }}
              >
                {isKo ? '6. 약관 변경' : '6. Changes to These Terms'}
              </h2>
              <p style={{ fontFamily: "'Geist Sans', sans-serif", fontSize: 15, lineHeight: 1.7, color: '#4a4a4a' }}>
                {isKo
                  ? '본 이용약관은 수시로 업데이트될 수 있습니다. 변경 사항은 본 페이지에 게시되며 계속해서 사이트를 사용함으로써 변경된 약관에 동의하는 것으로 간주됩니다.'
                  : 'These Terms of Service may be updated from time to time. Changes will be posted on this page, and your continued use of the site constitutes acceptance of the updated terms.'}
              </p>
            </div>

            {/* 7. Governing Law */}
            <div>
              <h2
                className="text-[#1a1a1a] font-semibold mb-3"
                style={{ fontFamily: "'Geist Sans', sans-serif", fontSize: 20 }}
              >
                {isKo ? '7. 준거법' : '7. Governing Law'}
              </h2>
              <p style={{ fontFamily: "'Geist Sans', sans-serif", fontSize: 15, lineHeight: 1.7, color: '#4a4a4a' }}>
                {isKo
                  ? '본 이용약관은 미국 워싱턴주 법률에 따라 해석되고 적용됩니다.'
                  : 'These Terms of Service shall be governed by and construed in accordance with the laws of the State of Washington, USA.'}
              </p>
            </div>

            {/* 8. Contact */}
            <div>
              <h2
                className="text-[#1a1a1a] font-semibold mb-3"
                style={{ fontFamily: "'Geist Sans', sans-serif", fontSize: 20 }}
              >
                {isKo ? '8. 문의' : '8. Contact'}
              </h2>
              <p style={{ fontFamily: "'Geist Sans', sans-serif", fontSize: 15, lineHeight: 1.7, color: '#4a4a4a' }}>
                {isKo
                  ? '이용약관에 대한 문의가 있으시면 '
                  : 'If you have any questions about these Terms of Service, please contact '}
                <a
                  href="mailto:info@koreatous.com"
                  className="text-[#2563eb] hover:underline"
                  style={{ fontFamily: "'Geist Sans', sans-serif" }}
                >
                  info@koreatous.com
                </a>
                {isKo ? '로 연락 주세요.' : '.'}
              </p>
            </div>

            {/* Last updated */}
            <div
              className="pt-6"
              style={{ borderTop: '1px solid rgba(0,0,0,0.06)' }}
            >
              <p
                className="text-[#4a4a4a]"
                style={{ fontFamily: "'Geist Mono', monospace", fontSize: 12 }}
              >
                {isKo ? '최종 업데이트: 2025년 5월 28일' : 'Last updated: May 28, 2025'}
              </p>
            </div>

            <div className="pt-4">
              <Link
                to="/"
                className="inline-flex items-center gap-2 text-[13px] font-medium transition-all hover:gap-3"
                style={{ fontFamily: "'Geist Sans', sans-serif", color: '#1a1a1a' }}
              >
                <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
                  <path d="M10 12L6 8L10 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                {isKo ? '홈으로 돌아가기' : 'Back to Home'}
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}

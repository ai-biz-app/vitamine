import { useEffect } from 'react'
import { Link } from 'react-router'
import Navigation from '../sections/Navigation'
import Footer from '../sections/Footer'
import { useLanguage } from '../contexts/LanguageContext'

export default function PrivacyPolicy() {
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
              {isKo ? '개인정보 처리방침' : 'Privacy Policy'}
            </h1>
            <p
              className="text-[#4a4a4a] mt-4"
              style={{ fontFamily: "'Geist Sans', sans-serif", fontSize: 15, lineHeight: 1.7 }}
            >
              {isKo
                ? '본 개인정보 처리방침은 ClearlyVitamins(이하 "본 사이트")가 수집하는 정보와 그 사용 방법을 설명합니다.'
                : 'This Privacy Policy explains what information ClearlyVitamins ("this site") collects and how it is used.'}
            </p>
          </div>
        </section>

        <section className="w-full pb-24 px-6" style={{ background: '#fafaf8' }}>
          <div className="content-max max-w-[720px] space-y-10">
            {/* 1. Information We Collect */}
            <div>
              <h2
                className="text-[#1a1a1a] font-semibold mb-3"
                style={{ fontFamily: "'Geist Sans', sans-serif", fontSize: 20 }}
              >
                {isKo ? '1. 수집하는 정보' : '1. Information We Collect'}
              </h2>
              <p style={{ fontFamily: "'Geist Sans', sans-serif", fontSize: 15, lineHeight: 1.7, color: '#4a4a4a' }}>
                {isKo
                  ? '본 사이트는 개인을 식별할 수 있는 정보를 수집하지 않습니다. 사용자가 영양제 가이드 퀴즈에 답할 때 입력한 정보(연령, 성별, 식단, 생활 방식 등)는 사용자의 브라우저에만 저장되며 서버로 전송되지 않습니다.'
                  : 'This site does not collect personally identifiable information. Information you enter when answering the supplement guide quiz (age, gender, diet, lifestyle, etc.) is stored only in your browser and is not sent to any server.'}
              </p>
            </div>

            {/* 2. Cookies and Local Storage */}
            <div>
              <h2
                className="text-[#1a1a1a] font-semibold mb-3"
                style={{ fontFamily: "'Geist Sans', sans-serif", fontSize: 20 }}
              >
                {isKo ? '2. 쿠키 및 로컬 스토리지' : '2. Cookies and Local Storage'}
              </h2>
              <p style={{ fontFamily: "'Geist Sans', sans-serif", fontSize: 15, lineHeight: 1.7, color: '#4a4a4a' }}>
                {isKo
                  ? '본 사이트는 언어 설정(영어/한국어)을 저장하기 위해 브라우저의 로컬 스토리지를 사용합니다. 이 데이터는 사용자의 기기에만 저장되며 제3자와 공유되지 않습니다.'
                  : 'This site uses browser local storage to save your language preference (English/Korean). This data is stored only on your device and is not shared with third parties.'}
              </p>
            </div>

            {/* 3. Analytics */}
            <div>
              <h2
                className="text-[#1a1a1a] font-semibold mb-3"
                style={{ fontFamily: "'Geist Sans', sans-serif", fontSize: 20 }}
              >
                {isKo ? '3. 분석 도구' : '3. Analytics'}
              </h2>
              <p style={{ fontFamily: "'Geist Sans', sans-serif", fontSize: 15, lineHeight: 1.7, color: '#4a4a4a' }}>
                {isKo
                  ? '본 사이트는 현재 어떠한 분석 도구나 추적 스크립트도 사용하지 않습니다.'
                  : 'This site does not currently use any analytics tools or tracking scripts.'}
              </p>
            </div>

            {/* 4. Third-Party Links */}
            <div>
              <h2
                className="text-[#1a1a1a] font-semibold mb-3"
                style={{ fontFamily: "'Geist Sans', sans-serif", fontSize: 20 }}
              >
                {isKo ? '4. 제3자 링크' : '4. Third-Party Links'}
              </h2>
              <p style={{ fontFamily: "'Geist Sans', sans-serif", fontSize: 15, lineHeight: 1.7, color: '#4a4a4a' }}>
                {isKo
                  ? '본 사이트에는 외부 웹사이트(예: jsong.ai-biz.app, clearlyreqs.com, amazon.com)로 연결되는 링크가 포함되어 있습니다. 이러한 사이트의 개인정보 처리방침은 본 사이트와 무관하므로 해당 사이트의 정책을 직접 확인하시기 바랍니다.'
                  : 'This site contains links to external websites (e.g., jsong.ai-biz.app, clearlyreqs.com, amazon.com). The privacy policies of those sites are independent of this site; please review their policies directly.'}
              </p>
            </div>

            {/* 5. Data Security */}
            <div>
              <h2
                className="text-[#1a1a1a] font-semibold mb-3"
                style={{ fontFamily: "'Geist Sans', sans-serif", fontSize: 20 }}
              >
                {isKo ? '5. 데이터 보안' : '5. Data Security'}
              </h2>
              <p style={{ fontFamily: "'Geist Sans', sans-serif", fontSize: 15, lineHeight: 1.7, color: '#4a4a4a' }}>
                {isKo
                  ? '본 사이트는 정적 웹사이트로 호스팅되며 서버 측 데이터베이스가 없습니다. 모든 데이터 처리는 사용자의 브라우저에서 이루어집니다.'
                  : 'This site is a static website with no server-side database. All data processing happens in your browser.'}
              </p>
            </div>

            {/* 6. Changes */}
            <div>
              <h2
                className="text-[#1a1a1a] font-semibold mb-3"
                style={{ fontFamily: "'Geist Sans', sans-serif", fontSize: 20 }}
              >
                {isKo ? '6. 정책 변경' : '6. Changes to This Policy'}
              </h2>
              <p style={{ fontFamily: "'Geist Sans', sans-serif", fontSize: 15, lineHeight: 1.7, color: '#4a4a4a' }}>
                {isKo
                  ? '본 개인정보 처리방침은 수시로 업데이트될 수 있습니다. 변경 사항은 본 페이지에 게시됩니다.'
                  : 'This Privacy Policy may be updated from time to time. Changes will be posted on this page.'}
              </p>
            </div>

            {/* 7. Contact */}
            <div>
              <h2
                className="text-[#1a1a1a] font-semibold mb-3"
                style={{ fontFamily: "'Geist Sans', sans-serif", fontSize: 20 }}
              >
                {isKo ? '7. 문의' : '7. Contact'}
              </h2>
              <p style={{ fontFamily: "'Geist Sans', sans-serif", fontSize: 15, lineHeight: 1.7, color: '#4a4a4a' }}>
                {isKo
                  ? '개인정보 처리방침에 대한 문의가 있으시면 '
                  : 'If you have any questions about this Privacy Policy, please contact '}
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

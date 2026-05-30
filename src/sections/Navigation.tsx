import { useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useLanguage } from '../contexts/LanguageContext'

const getNavLinks = (t: (k: string) => string) => [
  { label: t('nav.home'), path: '/' },
  { label: t('nav.vitamins'), path: '/vitamins' },
  { label: t('nav.deficiencies'), path: '/deficiencies' },
  { label: t('nav.foodSources'), path: '/food-sources' },
  { label: t('nav.supplementGuide'), path: '/supplement-guide' },
]

export default function Navigation() {
  const [menuOpen, setMenuOpen] = useState(false)
  const { lang, setLang, t } = useLanguage()
  const router = useRouter()
  const navLinks = getNavLinks(t)

  const toggleLang = () => setLang(lang === 'en' ? 'ko' : 'en')

  return (
    <nav
      className="fixed top-0 left-0 w-full z-[100]"
      style={{
        height: 60,
        background: 'rgba(250, 250, 248, 0.95)',
        backdropFilter: 'blur(10px)',
        borderBottom: '1px solid rgba(0,0,0,0.06)',
      }}
    >
      <div className="content-max h-full flex items-center justify-between px-6">
        <Link
          href="/"
          className="hover:opacity-70 transition-opacity flex items-center"
        >
          <img src="/brand-logo.png" alt="ClearlyVitamins" style={{ height: 32 }} />
        </Link>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-5">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              href={link.path}
              className="text-[13px] font-medium transition-colors duration-200 relative py-1"
              style={{
                fontFamily: "'Geist Sans', sans-serif",
                color: router.pathname === link.path ? '#1a1a1a' : '#4a4a4a',
              }}
            >
              {link.label}
              {router.pathname === link.path && (
                <span className="absolute -bottom-0.5 left-0 w-full h-[2px] rounded-full bg-[#1a1a1a]" />
              )}
            </Link>
          ))}

          {/* Language Toggle */}
          <button
            onClick={toggleLang}
            className="ml-3 flex items-center gap-1.5 px-3 py-1.5 rounded-full text-[12px] font-medium transition-all duration-200"
            style={{
              fontFamily: "'Geist Sans', sans-serif",
              background: '#1a1a1a',
              color: '#fafaf8',
            }}
          >
            <span style={{ opacity: lang === 'en' ? 1 : 0.4 }}>EN</span>
            <span style={{ opacity: 0.3 }}>/</span>
            <span style={{ opacity: lang === 'ko' ? 1 : 0.4 }}>KO</span>
          </button>
        </div>

        {/* Mobile: Lang + Hamburger */}
        <div className="lg:hidden flex items-center gap-2">
          <button
            onClick={toggleLang}
            className="px-3 py-1.5 rounded-full text-[11px] font-medium"
            style={{
              fontFamily: "'Geist Sans', sans-serif",
              background: '#1a1a1a',
              color: '#fafaf8',
            }}
          >
            {lang === 'en' ? 'EN' : 'KO'}
          </button>
          <button
            className="flex flex-col gap-1.5 p-2"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <span className="w-5 h-[2px] bg-[#1a1a1a] transition-all duration-200 origin-center" style={{ transform: menuOpen ? 'rotate(45deg) translate(3px, 3px)' : 'none' }} />
            <span className="w-5 h-[2px] bg-[#1a1a1a] transition-all duration-200" style={{ opacity: menuOpen ? 0 : 1 }} />
            <span className="w-5 h-[2px] bg-[#1a1a1a] transition-all duration-200 origin-center" style={{ transform: menuOpen ? 'rotate(-45deg) translate(3px, -3px)' : 'none' }} />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div
          className="lg:hidden absolute top-[60px] left-0 w-full py-4 px-6 flex flex-col gap-1"
          style={{ background: 'rgba(250, 250, 248, 0.98)', backdropFilter: 'blur(10px)', borderBottom: '1px solid rgba(0,0,0,0.06)' }}
        >
          {navLinks.map((link) => (
            <Link
              key={link.path}
              href={link.path}
              className="py-3 px-4 rounded-lg text-[15px] font-medium transition-colors"
              style={{
                fontFamily: "'Geist Sans', sans-serif",
                color: router.pathname === link.path ? '#1a1a1a' : '#4a4a4a',
                background: router.pathname === link.path ? 'rgba(0,0,0,0.04)' : 'transparent',
              }}
            >
              {link.label}
            </Link>
          ))}
        </div>
      )}
    </nav>
  )
}

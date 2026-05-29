import { useEffect, useRef } from 'react'
import gsap from 'gsap'

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null)
  const labelRef = useRef<HTMLSpanElement>(null)
  const titleRef = useRef<HTMLHeadingElement>(null)
  const subtitleRef = useRef<HTMLParagraphElement>(null)
  const ctaRef = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ delay: 0.3 })
      tl.from(labelRef.current, {
        opacity: 0,
        y: 20,
        duration: 0.8,
        ease: 'power3.out',
      })
      tl.from(
        titleRef.current,
        {
          opacity: 0,
          y: 40,
          duration: 1,
          ease: 'power3.out',
        },
        '-=0.5'
      )
      tl.from(
        subtitleRef.current,
        {
          opacity: 0,
          y: 30,
          duration: 0.8,
          ease: 'power3.out',
        },
        '-=0.6'
      )
      tl.from(
        ctaRef.current,
        {
          opacity: 0,
          y: 20,
          duration: 0.6,
          ease: 'power3.out',
        },
        '-=0.4'
      )
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  const scrollToExplore = () => {
    const el = document.getElementById('explore')
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section
      ref={sectionRef}
      className="w-full flex flex-col items-center justify-center text-center px-6"
      style={{ minHeight: '80vh', paddingTop: 80 }}
    >
      <span
        ref={labelRef}
        className="label-mono text-[#4a4a4a] mb-6"
      >
        Essential Nutrition
      </span>
      <h1
        ref={titleRef}
        className="text-[#1a1a1a] font-semibold leading-[1.1] tracking-[-0.02em]"
        style={{
          fontFamily: "'Geist Sans', sans-serif",
          fontSize: 'clamp(40px, 5vw, 64px)',
          maxWidth: 600,
        }}
      >
        13 Essential Vitamins
      </h1>
      <p
        ref={subtitleRef}
        className="text-[#4a4a4a] font-normal mt-5"
        style={{
          fontFamily: "'Geist Sans', sans-serif",
          fontSize: 17,
          lineHeight: 1.7,
          maxWidth: 520,
        }}
      >
        Discover the micronutrients that power every cell in your body — from
        immune defense to bone formation.
      </p>
      <button
        ref={ctaRef}
        onClick={scrollToExplore}
        className="mt-8 px-7 py-2.5 rounded-full border border-[#1a1a1a] text-[14px] font-medium text-[#1a1a1a] hover:bg-[#1a1a1a] hover:text-[#fafaf8] transition-all duration-300"
        style={{ fontFamily: "'Geist Sans', sans-serif" }}
      >
        Start Exploring
      </button>
    </section>
  )
}

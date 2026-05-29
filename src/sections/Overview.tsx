import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default function Overview() {
  const sectionRef = useRef<HTMLElement>(null)
  const textColRef = useRef<HTMLDivElement>(null)
  const imgColRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const section = sectionRef.current
    const textCol = textColRef.current
    const imgCol = imgColRef.current
    if (!section || !textCol || !imgCol) return

    const ctx = gsap.context(() => {
      gsap.from(textCol, {
        x: -60,
        opacity: 0,
        duration: 1.2,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: section,
          start: 'top 80%',
          end: 'top 50%',
          scrub: 1.5,
        },
      })

      gsap.from(imgCol, {
        x: 60,
        opacity: 0,
        duration: 1.2,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: section,
          start: 'top 80%',
          end: 'top 50%',
          scrub: 1.5,
        },
      })
    }, section)

    return () => ctx.revert()
  }, [])

  return (
    <section
      ref={sectionRef}
      id="learn"
      className="w-full section-padding"
      style={{ background: '#f5f5f0' }}
    >
      <div className="content-max flex flex-col md:flex-row items-center gap-12 md:gap-20 px-6">
        <div ref={textColRef} className="w-full md:w-[45%]">
          <span className="label-mono text-[#4a4a4a]">About Vitamins</span>
          <h2
            className="text-[#1a1a1a] font-medium mt-4 tracking-[-0.01em]"
            style={{
              fontFamily: "'Geist Sans', sans-serif",
              fontSize: 'clamp(28px, 3.5vw, 40px)',
            }}
          >
            The Body's Building Blocks
          </h2>
          <p
            className="text-[#4a4a4a] mt-5"
            style={{
              fontFamily: "'Geist Sans', sans-serif",
              fontSize: 17,
              lineHeight: 1.7,
            }}
          >
            Vitamins are organic micronutrients that your body cannot produce on
            its own — or at least not in sufficient quantities. These remarkable
            compounds function as coenzymes, antioxidants, and metabolic
            regulators, driving thousands of biochemical reactions that power
            everything from energy production and immune defense to blood clotting
            and bone formation.
          </p>
          <p
            className="text-[#4a4a4a] mt-4"
            style={{
              fontFamily: "'Geist Sans', sans-serif",
              fontSize: 17,
              lineHeight: 1.7,
            }}
          >
            There are 13 essential vitamins in total, divided into two distinct
            families: four fat-soluble vitamins stored in your body's fatty
            tissues, and nine water-soluble vitamins that must be replenished
            regularly.
          </p>
          <a
            href="#fat-soluble"
            className="inline-flex items-center gap-2 mt-6 text-[14px] font-medium text-[#1a1a1a] hover:underline transition-all"
            style={{ fontFamily: "'Geist Sans', sans-serif" }}
          >
            Learn More
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path
                d="M6 12L10 8L6 4"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </a>
        </div>

        <div ref={imgColRef} className="w-full md:w-[55%] relative">
          <img
            src="/overview-food.jpg"
            alt="Colorful fresh fruits and vegetables"
            className="w-full rounded-lg object-cover"
            style={{ aspectRatio: '4/3' }}
          />
          <div
            className="absolute -bottom-5 -left-5 w-20 h-10 rounded-full"
            style={{ background: 'rgba(74, 222, 128, 0.3)', zIndex: 2 }}
          />
        </div>
      </div>
    </section>
  )
}

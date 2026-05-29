import { useEffect, useRef, useState } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

interface FAQItem {
  question: string
  answer: string
}

const faqs: FAQItem[] = [
  {
    question: 'Do I need vitamin supplements?',
    answer:
      'For most healthy adults with a varied diet, supplements are unnecessary. Specific populations — pregnant women, adults over 50, vegans, and those with limited sun exposure — may benefit from targeted supplementation.',
  },
  {
    question: 'Can I get too many vitamins?',
    answer:
      'Yes. Fat-soluble vitamins (A, D, E, K) can accumulate to toxic levels. Water-soluble vitamins are generally safer as excess is excreted, though very high doses of B6 or niacin can cause adverse effects.',
  },
  {
    question: 'What\'s the difference between fat-soluble and water-soluble?',
    answer:
      'Fat-soluble vitamins are stored in body fat and liver for weeks or months. Water-soluble vitamins are not stored (except B12) and must be consumed regularly, with excess excreted in urine.',
  },
  {
    question: 'Which vitamins are most commonly deficient?',
    answer:
      'Vitamin D affects an estimated 1 billion people globally. B12 deficiency affects 10-15% of adults over 60. Folate deficiency remains a concern for women of childbearing age.',
  },
  {
    question: 'Does cooking destroy vitamins?',
    answer:
        'Vitamin C and B vitamins are heat-sensitive and can leach into cooking water. Steaming, microwaving, and stir-frying preserve more nutrients than boiling. Some vitamins like lycopene in tomatoes become more bioavailable when cooked.',
  },
  {
    question: 'Can a vegan diet provide all vitamins?',
    answer:
      'A well-planned vegan diet meets most vitamin needs, but vitamin B12 supplementation is essential as it\'s found almost exclusively in animal products. Vegans should also monitor vitamin D and consider D2 or lichen-derived D3.',
  },
]

export default function FAQ() {
  const sectionRef = useRef<HTMLElement>(null)
  const rowsRef = useRef<(HTMLDivElement | null)[]>([])
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  useEffect(() => {
    const section = sectionRef.current
    if (!section) return

    const ctx = gsap.context(() => {
      rowsRef.current.forEach((row, i) => {
        if (!row) return
        gsap.from(row, {
          x: -30,
          opacity: 0,
          duration: 0.6,
          ease: 'power2.out',
          delay: i * 0.1,
          scrollTrigger: {
            trigger: section,
            start: 'top 80%',
            toggleActions: 'play none none none',
          },
        })
      })
    }, section)

    return () => ctx.revert()
  }, [])

  return (
    <section
      ref={sectionRef}
      id="about"
      className="w-full section-padding"
      style={{ background: '#fafaf8' }}
    >
      <div className="max-w-[800px] mx-auto px-6">
        <div className="text-center mb-20">
          <span className="label-mono text-[#4a4a4a]">FAQ</span>
          <h2
            className="text-[#1a1a1a] font-medium mt-3 tracking-[-0.01em]"
            style={{
              fontFamily: "'Geist Sans', sans-serif",
              fontSize: 'clamp(28px, 3.5vw, 40px)',
            }}
          >
            Common Questions
          </h2>
        </div>

        <div>
          {faqs.map((faq, i) => (
            <div
              key={i}
              ref={(el) => { rowsRef.current[i] = el }}
              className="border-b"
              style={{ borderColor: 'rgba(0,0,0,0.08)' }}
            >
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full flex items-center justify-between py-7 text-left"
              >
                <span
                  className="text-[#1a1a1a] font-medium pr-4"
                  style={{
                    fontFamily: "'Geist Sans', sans-serif",
                    fontSize: 17,
                  }}
                >
                  {faq.question}
                </span>
                <span
                  className="flex-shrink-0 w-6 h-6 rounded-full border flex items-center justify-center transition-all duration-200"
                  style={{
                    borderColor:
                      openIndex === i ? '#1a1a1a' : 'rgba(0,0,0,0.2)',
                    background: openIndex === i ? '#1a1a1a' : 'transparent',
                  }}
                >
                  <svg
                    width="10"
                    height="10"
                    viewBox="0 0 10 10"
                    fill="none"
                    className="transition-transform duration-200"
                    style={{
                      transform:
                        openIndex === i ? 'rotate(45deg)' : 'rotate(0deg)',
                    }}
                  >
                    <path
                      d="M5 1v8M1 5h8"
                      stroke={openIndex === i ? '#fafaf8' : '#1a1a1a'}
                      strokeWidth="1.5"
                      strokeLinecap="round"
                    />
                  </svg>
                </span>
              </button>
              <div
                className="overflow-hidden transition-all duration-300 ease-out"
                style={{
                  maxHeight: openIndex === i ? 300 : 0,
                  opacity: openIndex === i ? 1 : 0,
                }}
              >
                <p
                  className="text-[#4a4a4a] pb-7"
                  style={{
                    fontFamily: "'Geist Sans', sans-serif",
                    fontSize: 15,
                    lineHeight: 1.7,
                  }}
                >
                  {faq.answer}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

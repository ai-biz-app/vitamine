const SITE_URL = 'https://vitamin.ai-biz.app'

export function organizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'ClearlyVitamins',
    url: SITE_URL,
    logo: `${SITE_URL}/brand-logo.png`,
    sameAs: [
      'https://www.linkedin.com/in/jaehee-song-happy/',
      'https://github.com/jsong100',
    ],
  }
}

export function websiteSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'ClearlyVitamins',
    url: SITE_URL,
    potentialAction: {
      '@type': 'SearchAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: `${SITE_URL}/vitamins?vitamin={search_term_string}`,
      },
      'query-input': 'required name=search_term_string',
    },
  }
}

export function vitaminPageSchema(vitamin: {
  id: string
  name: string
  subtitle: string
  description: string
  longDescription: string
  category: string
  chemicalName: string
  functions: string[]
  foodSources: string[]
  rda: { men: string; women: string }
  deficiency: { name: string; symptoms: string[] }
  lang?: string
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'MedicalWebPage',
    '@id': `${SITE_URL}/vitamins/${vitamin.id}`,
    url: `${SITE_URL}/vitamins/${vitamin.id}`,
    name: vitamin.name,
    headline: `${vitamin.name} — Functions, Sources, RDA`,
    description: vitamin.description,
    about: {
      '@type': 'MedicalEntity',
      name: vitamin.name,
      alternateName: vitamin.subtitle,
      description: vitamin.longDescription,
      category: vitamin.category,
    },
    inLanguage: vitamin.lang === 'ko' ? 'ko' : 'en',
    dateModified: '2025-05-30',
    author: {
      '@type': 'Organization',
      name: 'ClearlyVitamins',
      url: SITE_URL,
    },
    publisher: {
      '@type': 'Organization',
      name: 'ClearlyVitamins',
      logo: {
        '@type': 'ImageObject',
        url: `${SITE_URL}/brand-logo.png`,
      },
    },
    mainEntity: {
      '@type': 'MedicalEntity',
      name: vitamin.name,
      description: vitamin.longDescription,
      relevantSpecialty: 'Nutrition',
    },
  }
}

export function breadcrumbSchema(items: { name: string; url: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  }
}

export function faqPageSchema(faqs: { question: string; answer: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  }
}

export function howToSupplementGuideSchema(lang: 'en' | 'ko' = 'en') {
  const steps =
    lang === 'ko'
      ? [
          { name: '나이 선택', text: '해당하는 연령대를 선택하세요.' },
          { name: '성별 선택', text: '성별을 선택하세요.' },
          { name: '식단 유형 선택', text: '식단 유형을 선택하세요.' },
          { name: '일광 노출 선택', text: '하루 일광 노출량을 선택하세요.' },
          { name: '피부색 선택', text: '피부색을 선택하세요.' },
          { name: '활동 수준 선택', text: '활동 수준을 선택하세요.' },
          { name: '음주 및 흡연 선택', text: '음주 및 흡연 상태를 선택하세요.' },
          { name: '건강 상태 및 약물 선택', text: '해당하는 건강 상태와 복용 중인 약물을 선택하세요.' },
          { name: '맞춤 추천 결과 확인', text: '프로필에 기반한 맞춤 비타민 추천 결과를 확인하세요.' },
        ]
      : [
          { name: 'Select Age', text: 'Choose your age range.' },
          { name: 'Select Gender', text: 'Choose your gender.' },
          { name: 'Select Diet Type', text: 'Choose your diet type.' },
          { name: 'Select Sun Exposure', text: 'Choose your daily sun exposure level.' },
          { name: 'Select Skin Tone', text: 'Choose your skin tone.' },
          { name: 'Select Activity Level', text: 'Choose your activity level.' },
          { name: 'Select Alcohol & Smoking', text: 'Choose your alcohol consumption and smoking status.' },
          { name: 'Select Health & Medications', text: 'Select any health conditions and medications.' },
          { name: 'View Personalized Results', text: 'Get your personalized vitamin recommendations.' },
        ]

  return {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name:
      lang === 'ko'
        ? '맞춤 비타민 추천 가이드'
        : 'Personalized Vitamin Supplement Guide',
    description:
      lang === 'ko'
        ? '나이, 성별, 식단, 생활 방식, 건강 상태에 기반한 맞춤형 비타민 추천을 받아보세요.'
        : 'Answer a few questions about yourself and get personalized vitamin recommendations based on your age, gender, diet, lifestyle, and health profile.',
    totalTime: 'PT2M',
    step: steps.map((step, index) => ({
      '@type': 'HowToStep',
      position: index + 1,
      name: step.name,
      text: step.text,
    })),
  }
}

export function foodSourcesItemListSchema(
  vitamins: {
    id: string
    name: string
    categoryLabel: string
    foodSources: string[]
    rda: { men: string; women: string }
  }[],
) {
  return {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: 'Best Food Sources for Essential Vitamins',
    itemListElement: vitamins.map((v, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: v.name,
      url: `${SITE_URL}/vitamins/${v.id}`,
      description: `Top sources: ${v.foodSources.slice(0, 3).join(', ')}. RDA: ${v.rda.men}`,
    })),
  }
}

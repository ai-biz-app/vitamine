import { createContext, useContext, useState, useCallback, useEffect } from 'react'

export type Lang = 'en' | 'ko'

interface LanguageContextValue {
  lang: Lang
  setLang: (l: Lang) => void
  t: (key: string) => string
}

const LanguageContext = createContext<LanguageContextValue | null>(null)

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLangState] = useState<Lang>('en')

  useEffect(() => {
    const saved = localStorage.getItem('nutrientflow-lang')
    if (saved === 'ko' || saved === 'en') {
      setLangState(saved)
    }
  }, [])

  const setLang = useCallback((l: Lang) => {
    setLangState(l)
    localStorage.setItem('nutrientflow-lang', l)
  }, [])

  const t = useCallback(
    (key: string) => {
      return translations[lang]?.[key] ?? translations['en']?.[key] ?? key
    },
    [lang]
  )

  return (
    <LanguageContext.Provider value={{ lang, setLang, t }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const ctx = useContext(LanguageContext)
  if (!ctx) throw new Error('useLanguage must be inside LanguageProvider')
  return ctx
}

const translations: Record<Lang, Record<string, string>> = {
  en: {
    // Navigation
    'nav.home': 'Home',
    'nav.vitamins': 'Vitamins',
    'nav.deficiencies': 'Deficiencies',
    'nav.foodSources': 'Food Sources',
    'nav.supplementGuide': 'Supplement Guide',
    'nav.about': 'About',

    // Hero
    'hero.label': 'Essential Nutrition Guide',
    'hero.title': 'Know What Your Body Actually Needs',
    'hero.sub': 'Cut through the supplement noise. Get clear, science-backed answers about the 13 vitamins your body can\'t live without.',
    'hero.cta1': 'Get My Recommendations',
    'hero.cta2': 'Learn More',

    // Start Here
    'start.title': 'Start Here',
    'start.vitamins': 'Explore All 13 Vitamins',
    'start.vitamins.desc': 'What each vitamin does, where to find it, and how much you actually need.',
    'start.supplements': 'Personalized Supplement Guide',
    'start.supplements.desc': 'Answer a few questions. Get recommendations tailored to your age, diet, and lifestyle.',
    'start.deficiencies': 'Deficiency Diseases',
    'start.deficiencies.desc': 'Scurvy. Rickets. Beriberi. Pellagra. The diseases that shaped medicine — and still matter today.',

    // Quick Links
    'ql.title': 'Choose Your Topic',
    'ql.vitamins': 'Explore Vitamins',
    'ql.vitamins.desc': 'Discover all 13 essential vitamins, their functions, sources, and daily requirements.',
    'ql.supplements': 'Supplement Guide',
    'ql.supplements.desc': 'Answer a few questions and get personalized vitamin recommendations for your unique profile.',
    'ql.deficiencies': 'Deficiency Diseases',
    'ql.deficiencies.desc': 'Learn about scurvy, rickets, beriberi, and pellagra — and how they changed history.',
    'ql.food': 'Food Sources',
    'ql.food.desc': 'Find the best dietary sources for each vitamin with serving sizes and nutrient amounts.',
    'ql.explore': 'Explore',

    // Stats
    'stats.label': 'At a Glance',
    'stats.title': 'Vitamins by the Numbers',
    'stats.cta.title': 'Ready to figure out what you actually need?',
    'stats.cta.sub': 'Skip the guesswork. Get a personalized breakdown in under 2 minutes.',
    'stats.cta.btn': 'Start the Supplement Guide',
    'stat.essential': 'Essential vitamins',
    'stat.fat': 'Fat-soluble (A, D, E, K)',
    'stat.water': 'Water-soluble (Bs + C)',
    'stat.deficient': 'People deficient in vitamin D',

    // Classification
    'cls.label': 'Two Families, Very Different Rules',
    'cls.water.title': 'Water-Soluble (B-complex + C)',
    'cls.water.desc': 'Your body uses what it needs and flushes the rest. Excess generally won\'t hurt you — but you need them daily.',
    'cls.fat.title': 'Fat-Soluble (A, D, E, K)',
    'cls.fat.desc': 'Stored in fat and liver for weeks or months. Need dietary fat to absorb — and can build up to toxic levels if you overdo supplements.',

    // Misconceptions
    'mis.label': '6 Things Most People Get Wrong',
    'mis.1.title': 'You need exactly 13 — not 20, not 50.',
    'mis.1.desc': 'Despite what the supplement aisle suggests, only 13 vitamins are truly essential. Everything else is marketing.',
    'mis.2.title': 'Vitamin D isn\'t really a vitamin.',
    'mis.2.desc': 'It acts like a hormone. Your skin makes it from sunlight — which is why deficiency is so common in northern climates and indoor lifestyles.',
    'mis.3.title': 'Humans can\'t make vitamin C.',
    'mis.3.desc': 'A gene mutation millions of years ago left us, other primates, and guinea pigs unable to synthesize it. That\'s why citrus saved sailors from scurvy.',
    'mis.4.title': 'Food beats pills — for most people.',
    'mis.4.desc': 'A varied diet covers most healthy adults. Supplements matter for specific groups: pregnant women, older adults, vegans, people with absorption issues.',
    'mis.5.title': 'More isn\'t better.',
    'mis.5.desc': 'Fat-soluble vitamins can become toxic at high doses. "Mega-dose" is rarely a good word.',
    'mis.6.title': 'The vitamin era is younger than you think.',
    'mis.6.desc': 'The word "vitamin" was coined in 1912. The last vitamin (B12) was isolated in 1948 — within living memory.',

    // Vitamins Page
    'vp.title': 'Browse the Collection',
    'vp.sub': 'Click on any vitamin card to explore its functions, food sources, recommended daily amounts, and deficiency symptoms.',
    'vp.filter.all': 'All Vitamins',
    'vp.filter.fat': 'Fat-Soluble',
    'vp.filter.water': 'Water-Soluble',
    'vp.viewDetails': 'View details',

    // Vitamin Detail
    'vd.keyFunctions': 'Key Functions',
    'vd.foodSources': 'Best Food Sources',
    'vd.deficiency': 'Deficiency',
    'vd.highRisk': 'High-Risk Groups',
    'vd.rda': 'Recommended Daily Amount',
    'vd.rda.men': 'Adult Men',
    'vd.rda.women': 'Adult Women',
    'vd.upperLimit': 'Upper Limit (Tolerable)',
    'vd.didYouKnow': 'Did You Know?',
    'vd.allVitamins': 'All Vitamins',
    'vd.prev': 'Previous',
    'vd.next': 'Next',
    'vd.notFound': 'Vitamin not found',
    'vd.notFound.sub': "The vitamin you're looking for doesn't exist.",
    'vd.back': 'Back to Vitamins',

    // Supplement Guide
    'sg.title': 'Who Should Take What Daily?',
    'sg.sub': 'Answer a few questions about yourself and get personalized vitamin recommendations based on your age, gender, diet, lifestyle, and health profile.',
    'sg.age': 'Your Age',
    'sg.gender': 'Gender',
    'sg.gender.female': 'Female',
    'sg.gender.male': 'Male',
    'sg.gender.other': 'Other',
    'sg.pregnancy': 'Pregnancy / Breastfeeding Status',
    'sg.pregnancy.none': 'Not pregnant / Not planning',
    'sg.pregnancy.planning': 'Planning pregnancy',
    'sg.pregnancy.pregnant': 'Currently pregnant',
    'sg.pregnancy.breastfeeding': 'Breastfeeding',
    'sg.diet': 'Diet Type',
    'sg.diet.sub': 'What best describes your eating pattern?',
    'sg.diet.omnivore': 'Omnivore (meat & plants)',
    'sg.diet.pescatarian': 'Pescatarian (fish, no meat)',
    'sg.diet.vegetarian': 'Vegetarian (no meat/fish)',
    'sg.diet.vegan': 'Vegan (no animal products)',
    'sg.diet.restrictive': 'Very restrictive / Limited variety',
    'sg.sun': 'Sun Exposure',
    'sg.sun.sub': 'How much direct sunlight do you get on skin daily?',
    'sg.sun.high': '20+ minutes (outdoor work/lifestyle)',
    'sg.sun.moderate': '10-20 minutes (some outdoor time)',
    'sg.sun.low': '5-10 minutes (mostly indoors)',
    'sg.sun.veryLow': 'Almost none (office worker, winter)',
    'sg.skin': 'Skin Tone',
    'sg.skin.sub': 'This affects how efficiently your skin produces vitamin D from sunlight.',
    'sg.skin.light': 'Light (burns easily)',
    'sg.skin.medium': 'Medium (tans gradually)',
    'sg.skin.dark': 'Dark (rarely burns)',
    'sg.activity': 'Activity Level',
    'sg.activity.sedentary': 'Sedentary (little exercise)',
    'sg.activity.moderate': 'Moderately active',
    'sg.activity.veryActive': 'Very active',
    'sg.activity.athlete': 'Competitive athlete',
    'sg.alcohol': 'Alcohol Consumption',
    'sg.alcohol.none': 'None',
    'sg.alcohol.occasional': 'Occasional (1-2 drinks/week)',
    'sg.alcohol.regular': 'Regular (3-7 drinks/week)',
    'sg.alcohol.heavy': 'Heavy (8+ drinks/week)',
    'sg.smoking': 'Smoking Status',
    'sg.smoking.never': 'Never smoked',
    'sg.smoking.former': 'Former smoker',
    'sg.smoking.current': 'Current smoker',
    'sg.health': 'Health Conditions',
    'sg.health.sub': 'Select any conditions that apply to you:',
    'sg.meds': 'Medications',
    'sg.meds.sub': 'Select any medications you take regularly:',
    'sg.submit': 'Get My Personalized Recommendations',
    'sg.submit.sub': 'This tool uses evidence-based guidelines from the NIH Office of Dietary Supplements, Harvard School of Public Health, and the Endocrine Society. Always consult your healthcare provider before starting supplements.',
    'sg.results.title': 'Your Vitamin Recommendations',
    'sg.results.sub': 'Based on your profile',
    'sg.results.back': 'Back to Form',
    'sg.results.none': 'Based on your profile, a balanced diet should provide adequate vitamins. Consider a general multivitamin as insurance if desired.',
    'sg.why': 'Why You Need This',
    'sg.bestForm': 'Best Form',
    'sg.when': 'When to Take',
    'sg.caution': 'Caution',
    'sg.learnMore': 'Learn more about',
    'sg.disclaimer': 'Important: This guide is for educational purposes only. Individual needs vary based on genetics, lab results, medications, and overall health. Always consult a healthcare provider or registered dietitian before starting any supplementation, especially if you have existing health conditions or are pregnant.',
    'sg.priority.essential': 'Essential',
    'sg.priority.recommended': 'Recommended',
    'sg.priority.consider': 'Consider',

    // Deficiency Page
    'def.title': 'When Vitamins Are Missing',
    'def.sub': 'Before vitamins were discovered, deficiency diseases killed millions. Understanding these conditions underscores the critical importance of proper nutrition in human history.',
    'def.label': 'Historical Impact',
    'def.symptoms': 'Key Symptoms',
    'def.history': 'History',

    // Food Sources Page
    'fs.title': 'Eat the Rainbow',
    'fs.sub': 'A varied diet rich in whole foods provides all essential vitamins. Strategic food pairings enhance absorption and bioavailability.',
    'fs.label': 'Nutrition Guide',
    'fs.cta.title': 'Not sure which supplements you need?',
    'fs.cta.sub': 'Get personalized recommendations based on your age, gender, diet, and health.',
    'fs.cta.btn': 'Try the Supplement Guide',
    'fs.detailed.title': 'Best Food Sources by Vitamin',
    'fs.detailed.sub': 'Select a vitamin to see top food sources ranked by content per serving. Data is approximate and varies by preparation method.',
    'fs.table.title': 'All Vitamins at a Glance',
    'fs.table.food': 'Food',
    'fs.table.serving': 'Serving Size',
    'fs.table.amount': 'Vitamin Amount',
    'fs.table.percentRda': '% RDA',
    'fs.table.topSources': 'Top Sources',
    'fs.table.rda': 'RDA (Adults)',
    'fs.table.type': 'Type',
    'fs.rda.low': 'Not Enough',
    'fs.rda.ok': 'OK',
    'fs.rda.high': 'Too Much',

    // About Page
    'about.title': 'Understanding Vitamins',
    'about.sub': 'Vitamins are organic micronutrients essential for normal physiological function, growth, and development. Unlike macronutrients, they are required in minute quantities — yet their absence triggers specific deficiency diseases that have shaped human history.',
    'about.label': 'About',
    'about.class.label': 'Classification',
    'about.class.title': 'The Two Families',
    'about.fat.title': 'Fat-Soluble',
    'about.fat.desc': 'Stored in body fat and liver for weeks or months. Can accumulate to toxic levels. Require dietary fat for absorption.',
    'about.water.title': 'Water-Soluble',
    'about.water.desc': 'Not stored in significant amounts (except B12). Excess is excreted in urine. Must be consumed regularly, ideally daily.',
    'about.facts.label': 'Key Insights',
    'about.facts.title': 'What You Should Know',
    'about.cta.title': 'Ready to explore each vitamin in detail?',
    'about.cta.browse': 'Browse All Vitamins',
    'about.cta.def': 'Learn About Deficiencies',

    // Footer
    'footer.tagline': 'Your daily source for nutrition knowledge.',
    'footer.navigate': 'Navigate',
    'footer.copyright': '2025 Jaehee Song. All rights reserved.',
    'footer.builtBy': 'Built by',
    'footer.roles.dataEngineer': 'Data Engineer',
    'footer.roles.aiBuilder': 'AI Solution Builder',
    'footer.roles.educator': 'Educator',
    'footer.roles.forwardDeployed': 'AI Forward Deployed Engineer',
    'footer.roles.writer': 'Writer',
    'footer.legal.privacy': 'Privacy Policy',
    'footer.legal.terms': 'Terms of Service',
    'footer.connect.title': 'Connect',
    'footer.connect.aboutMe': 'About Me',
    'footer.connect.portfolio': 'Portfolio & Projects',

    // Labels
    'label.essentialNutrition': 'Essential Nutrition',
    'label.interactive': 'Interactive Explorer',
    'label.aboutVitamins': 'About Vitamins',
    'label.fatSoluble': 'Fat-Soluble',
    'label.waterSoluble': 'Water-Soluble',
    'label.historical': 'Historical Impact',
    'label.nutrition': 'Nutrition',
    'label.faq': 'FAQ',
    'label.getStarted': 'Get Started',
    'label.atAGlance': 'At a Glance',
    'label.detailedRef': 'Detailed Reference',
    'label.quickRef': 'Quick Reference',
    'label.personalizedTool': 'Personalized Tool',
    'label.supplementation': 'Supplementation',

    // Misc
    'misc.learnMore': 'Learn More',
    'misc.startExploring': 'Start Exploring',
    'misc.commonQuestions': 'Common Questions',
    'misc.foodFirst': 'Food First Approach',
    'misc.foodFirst.desc': 'For most healthy adults, a varied diet provides all needed vitamins. Supplements are only necessary for specific populations — pregnant women, vegans, elderly, and those with limited sun exposure.',
  },
  ko: {
    // Navigation
    'nav.home': '홈',
    'nav.vitamins': '비타민',
    'nav.deficiencies': '결핍증',
    'nav.foodSources': '식품 출처',
    'nav.supplementGuide': '맞춤 영양제',
    'nav.about': '소개',

    // Hero
    'hero.label': '필수 영양 가이드',
    'hero.title': '내 몸이 정말 필요로 하는 것을 아세요',
    'hero.sub': '영양제 홍보를 걸러내세요. 내 몸이 없어서는 안 될 13가지 비타민에 대한 명확하고 과학 근거 있는 정보를 받아보세요.',
    'hero.cta1': '나의 맞춤 추천 받기',
    'hero.cta2': '더 알아보기',

    // Start Here
    'start.title': '시작하기',
    'start.vitamins': '13가지 비타민 모두 보기',
    'start.vitamins.desc': '각 비타민의 기능, 식품 출처, 그리고 실제로 필요한 양.',
    'start.supplements': '맞춤 영양제 가이드',
    'start.supplements.desc': '간단한 질문에 답하고 나이, 식단, 생활 방식에 맞는 추천을 받아보세요.',
    'start.deficiencies': '결핍 질병',
    'start.deficiencies.desc': '나묻못병, 구루병, 각기병, 펠라그라 — 의학을 형성하고 오늘날까지 중요한 질병들.',

    // Quick Links
    'ql.title': '주제 선택',
    'ql.vitamins': '비타민 탐색',
    'ql.vitamins.desc': '13가지 필수 비타민의 기능, 식품 출처, 일일 권장량을 알아보세요.',
    'ql.supplements': '맞춤 영양제 가이드',
    'ql.supplements.desc': '간단한 질문에 답하고 나에게 맞는 영양제를 추천받으세요.',
    'ql.deficiencies': '결핍 질병',
    'ql.deficiencies.desc': '나묻못병, 구루병, 각기병, 펠라그라 — 역사를 바꾼 질병들을 알아보세요.',
    'ql.food': '식품 출처',
    'ql.food.desc': '비타민별 최고의 식품 출처와 1회 제공량, 영양소 함량을 확인하세요.',
    'ql.explore': '탐색',

    // Stats
    'stats.label': '한눈에 보기',
    'stats.title': '숫자로 보는 비타민',
    'stats.cta.title': '정말로 무엇이 필요한지 알아볼 준비가 되셨나요?',
    'stats.cta.sub': '추측하지 마세요. 2분이면 맞춤 분석 결과를 받아볼 수 있습니다.',
    'stats.cta.btn': '영양제 가이드 시작하기',
    'stat.essential': '필수 비타민',
    'stat.fat': '지용성 (A, D, E, K)',
    'stat.water': '수용성 (B군 + C)',
    'stat.deficient': '비타민 D 결핍 인구',

    // Classification
    'cls.label': '두 개의 계열, 완전히 다른 규칙',
    'cls.water.title': '수용성 (B군 + C)',
    'cls.water.desc': '몸은 필요한 만큼 사용하고 나머지는 배출합니다. 과량은 일반적으로 해롭지 않지만 매일 섭취해야 합니다.',
    'cls.fat.title': '지용성 (A, D, E, K)',
    'cls.fat.desc': '체지방과 간에 수 주에서 수 개월간 저장됩니다. 지방과 함께 섭취해야 흡수되며, 과량 복용 시 중독 수준까지 축적될 수 있습니다.',

    // Misconceptions
    'mis.label': '대부분의 사람들이 틀리는 6가지',
    'mis.1.title': '정확히 13가지만 필요합니다 — 20개도, 50개도 아닙니다.',
    'mis.1.desc': '영양제 코너가 암시하는 것과 달리, 진정한 필수 비타민은 13가지뿐입니다. 나머지는 모두 마케팅입니다.',
    'mis.2.title': '비타민 D는 사실 비타민이 아닙니다.',
    'mis.2.desc': '호른몬처럼 작동합니다. 피부가 햇빛으로부터 이를 생성하기 때문에 북쪽 기후와 실내 생활에서 결핍이 흔합니다.',
    'mis.3.title': '인간은 비타민 C를 만들 수 없습니다.',
    'mis.3.desc': '수백만 년 전 유전자 돌연변이로 인해 인간과 다른 영장류, 기니피그는 이를 합성할 수 없게 되었습니다. 그래서 감귤류가 선원들을 나묻못병에서 구했습니다.',
    'mis.4.title': '대부분의 사람에게는 식품이 알약보다 낫습니다.',
    'mis.4.desc': '다양한 식단은 대부분의 건강한 성인을 충족시킵니다. 영양제는 임산부, 노인, 비건, 흡수 장애가 있는 사람 등 특정 그룹에 중요합니다.',
    'mis.5.title': '많을수록 좋은 것은 아닙니다.',
    'mis.5.desc': '지용성 비타민은 고용량에서 독성을 가질 수 있습니다. "메가도스"는 좋은 말이 아닙니다.',
    'mis.6.title': '비타민 시대는 생각보다 짧습니다.',
    'mis.6.desc': '"비타민"이라는 단어는 1912년에 만들어졌습니다. 마지막 비타민(B12)은 1948년에 분리되었습니다 — 기억할 수 있는 역사 내입니다.',

    // Vitamins Page
    'vp.title': '비타민 컬렉션 둘러보기',
    'vp.sub': '비타민 카드를 클릭하면 기능, 식품 출처, 권장 일일 섭취량, 결핍 증상을 상세히 알아볼 수 있습니다.',
    'vp.filter.all': '모든 비타민',
    'vp.filter.fat': '지용성',
    'vp.filter.water': '수용성',
    'vp.viewDetails': '자세히 보기',

    // Vitamin Detail
    'vd.keyFunctions': '주요 기능',
    'vd.foodSources': '최고의 식품 출처',
    'vd.deficiency': '결핍증',
    'vd.highRisk': '고위험 그룹',
    'vd.rda': '권장 일일 섭취량',
    'vd.rda.men': '성인 남성',
    'vd.rda.women': '성인 여성',
    'vd.upperLimit': '상한 섭취량 (허용)',
    'vd.didYouKnow': '알고 계셨나요?',
    'vd.allVitamins': '모든 비타민',
    'vd.prev': '이전',
    'vd.next': '다음',
    'vd.notFound': '비타민을 찾을 수 없습니다',
    'vd.notFound.sub': '찾으시는 비타민이 존재하지 않습니다.',
    'vd.back': '비타민 목록으로 돌아가기',

    // Supplement Guide
    'sg.title': '누가 어떤 비타민을 매일 복용해야 할까요?',
    'sg.sub': '나이, 성별, 식단, 생활 방식, 건강 상태에 기반한 맞춤형 비타민 추천을 받아보세요.',
    'sg.age': '나이',
    'sg.gender': '성별',
    'sg.gender.female': '여성',
    'sg.gender.male': '남성',
    'sg.gender.other': '기타',
    'sg.pregnancy': '임신 / 수유 상태',
    'sg.pregnancy.none': '임신 계획 없음',
    'sg.pregnancy.planning': '임신 계획 중',
    'sg.pregnancy.pregnant': '현재 임신 중',
    'sg.pregnancy.breastfeeding': '수유 중',
    'sg.diet': '식단 유형',
    'sg.diet.sub': '가장 적절한 식습관을 선택하세요:',
    'sg.diet.omnivore': '잡식 (육류 + 채소)',
    'sg.diet.pescatarian': '페스카테리언 (생선, 육류 제외)',
    'sg.diet.vegetarian': '채식 (육류/생선 제외)',
    'sg.diet.vegan': '비건 (동물성 식품 제외)',
    'sg.diet.restrictive': '매우 제한적인 식단',
    'sg.sun': '일광 노출',
    'sg.sun.sub': '피부에 직접 닿는 햇빛을 하루에 얼마나 받으시나요?',
    'sg.sun.high': '20분 이상 (야외 근무/생활)',
    'sg.sun.moderate': '10-20분 (야외 활동 있음)',
    'sg.sun.low': '5-10분 (주로 실내)',
    'sg.sun.veryLow': '거의 없음 (사무실 근무, 겨울철)',
    'sg.skin': '피부색',
    'sg.skin.sub': '피부색은 햇빛으로부터 비타민 D 합성 효율에 영향을 줍니다.',
    'sg.skin.light': '밝은 피부 (쉽게 타는 편)',
    'sg.skin.medium': '중간 피부 (점차 탐)',
    'sg.skin.dark': '어두운 피부 (거의 안 탐)',
    'sg.activity': '활동 수준',
    'sg.activity.sedentary': '주로 정적 (거의 운동 안 함)',
    'sg.activity.moderate': '보통 활동적',
    'sg.activity.veryActive': '매우 활동적',
    'sg.activity.athlete': '경기 운动员',
    'sg.alcohol': '음주 빈도',
    'sg.alcohol.none': '안 함',
    'sg.alcohol.occasional': '가끔 (주 1-2회)',
    'sg.alcohol.regular': '자주 (주 3-7회)',
    'sg.alcohol.heavy': '과음 (주 8회 이상)',
    'sg.smoking': '흡연 상태',
    'sg.smoking.never': '비흡연',
    'sg.smoking.former': '과거 흡연',
    'sg.smoking.current': '현재 흡연',
    'sg.health': '건강 상태',
    'sg.health.sub': '해당되는 질환이 있으면 선택하세요:',
    'sg.meds': '복용 중인 약물',
    'sg.meds.sub': '정기적으로 복용 중인 약물을 선택하세요:',
    'sg.submit': '맞춤 추천 받기',
    'sg.submit.sub': '이 도구는 NIH 식이보충제 정보실, 하버드 공중보걸 대학, 미국 남분비 학회의 근거 기반 가이드라인을 사용합니다. 영양제 복용을 시작하기 전에 항상 의료 제공자와 상담하세요.',
    'sg.results.title': '맞춤 영양제 추천',
    'sg.results.sub': '프로필 기반',
    'sg.results.back': '양식으로 돌아가기',
    'sg.results.none': '프로필에 따륩면 균형 잡힌 식단으로 충분한 비타민을 섭취할 수 있습니다. 원하신다면 종합 비타민을 고려해 보세요.',
    'sg.why': '왜 필요한가',
    'sg.bestForm': '최적의 형태',
    'sg.when': '복용 시간',
    'sg.caution': '주의',
    'sg.learnMore': '더 알아보기',
    'sg.disclaimer': '중요: 이 가이드는 교육 목적으로만 제공됩니다. 개인의 필요는 유전자, 혈액 검사 결과, 약물, 전반적인 건강 상태에 따라 다릅니다. 영양제 복용을 시작하기 전에 항상 의료 제공자나 등록 영양사와 상담하세요.',
    'sg.priority.essential': '필수',
    'sg.priority.recommended': '권장',
    'sg.priority.consider': '고려',

    // Deficiency Page
    'def.title': '비타민이 부족할 때',
    'def.sub': '비타민이 발견되기 전, 결핍 질병으로 수백만 명이 사망했습니다. 이러한 질병을 이해하는 것은 적절한 영양의 중요성을 강조합니다.',
    'def.label': '역사적 영향',
    'def.symptoms': '주요 증상',
    'def.history': '역사',

    // Food Sources Page
    'fs.title': '무지개색 식단',
    'fs.sub': '다양한 자연 식품이 풍부한 식단은 모든 필수 비타민을 제공합니다. 전략적인 식품 조합은 흡수와 생체이용률을 높입니다.',
    'fs.label': '영양 가이드',
    'fs.cta.title': '어떤 영양제가 필요한지 잘 모르시겠나요?',
    'fs.cta.sub': '나이, 성별, 식단, 건강 상태에 기반한 맞춤 추천을 받아보세요.',
    'fs.cta.btn': '영양제 가이드 사용하기',
    'fs.detailed.title': '비타민별 최고 식품 출처',
    'fs.detailed.sub': '비타민을 선택하면 1회 제공량 기준 상위 식품 출처가 표시됩니다. 데이터는 대략적이며 조리 방법에 따라 달라질 수 있습니다.',
    'fs.table.title': '모든 비타민 한눈에 보기',
    'fs.table.food': '식품',
    'fs.table.serving': '1회 제공량',
    'fs.table.amount': '비타민 함량',
    'fs.table.percentRda': '권장량 %',
    'fs.table.topSources': '주요 출처',
    'fs.table.rda': '권장량 (성인)',
    'fs.table.type': '유형',
    'fs.rda.low': '부족',
    'fs.rda.ok': '적정',
    'fs.rda.high': '과다',

    // About Page
    'about.title': '비타민 이해하기',
    'about.sub': '비타민은 정상적인 생리 기능, 성장, 발달에 필수적인 유기 미량 영양소입니다. 대량 영양소와 달리 소량만 필요하지만, 결핍 시 특정 결핍 질병을 유발하여 인류 역사를 형성해왔습니다.',
    'about.label': '소개',
    'about.class.label': '분류',
    'about.class.title': '두 가지 계열',
    'about.fat.title': '지용성',
    'about.fat.desc': '체지방과 간에 수 주에서 수 개월간 저장됩니다. 중독 수준까지 축적될 수 있습니다. 지방과 함께 섭취해야 흡수됩니다.',
    'about.water.title': '수용성',
    'about.water.desc': '상당한 양으로 저장되지 않습니다 (B12 제외). 과량은 소변으로 배출됩니다. 규칙적으로, 이상적으로는 매일 섭취해야 합니다.',
    'about.facts.label': '핵심 통찰',
    'about.facts.title': '알아두어야 할 사항',
    'about.cta.title': '각 비타민을 자세히 탐색할 준비가 되셨나요?',
    'about.cta.browse': '모든 비타민 둘러보기',
    'about.cta.def': '결핍증 알아보기',

    // Footer
    'footer.tagline': '매일 영양 지식의 원천.',
    'footer.navigate': '이동',
    'footer.copyright': '2025 송재희. 모든 권리 보유.',
    'footer.builtBy': '제작',
    'footer.roles.dataEngineer': '데이터 엔지니어',
    'footer.roles.aiBuilder': 'AI 솔루션 빌더',
    'footer.roles.educator': '교육자',
    'footer.roles.forwardDeployed': 'AI Forward Deployed 엔지니어',
    'footer.roles.writer': '작가',
    'footer.legal.privacy': '개인정보 처리방침',
    'footer.legal.terms': '서비스 이용약관',
    'footer.connect.title': '연결',
    'footer.connect.aboutMe': '소개',
    'footer.connect.portfolio': '포트폴리오 & 프로젝트',

    // Labels
    'label.essentialNutrition': '필수 영양',
    'label.interactive': '대화형 탐색기',
    'label.aboutVitamins': '비타민 소개',
    'label.fatSoluble': '지용성',
    'label.waterSoluble': '수용성',
    'label.historical': '역사적 영향',
    'label.nutrition': '영양',
    'label.faq': '자주 묻는 질문',
    'label.getStarted': '시작하기',
    'label.atAGlance': '한눈에 보기',
    'label.detailedRef': '상세 참조',
    'label.quickRef': '간편 참조',
    'label.personalizedTool': '맞춤 도구',
    'label.supplementation': '보충제',

    // Misc
    'misc.learnMore': '더 알아보기',
    'misc.startExploring': '탐색 시작',
    'misc.commonQuestions': '자주 묻는 질문',
    'misc.foodFirst': '식품 우선 접근법',
    'misc.foodFirst.desc': '대부분의 건강한 성인에게 다양한 식단은 필요한 모든 비타민을 제공합니다. 영양제는 임산부, 비건, 노인, 그리고 일광 노출이 제한된 사람들과 같은 특정 인구만 필요합니다.',
  },
}

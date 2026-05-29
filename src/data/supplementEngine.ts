export type AgeRange = '0-1' | '1-3' | '4-8' | '9-13' | '14-18' | '19-30' | '31-50' | '51-70' | '71+'
export type Gender = 'male' | 'female' | 'other'
export type PregnancyStatus = 'none' | 'pregnant' | 'breastfeeding' | 'planning'
export type DietType = 'omnivore' | 'vegetarian' | 'vegan' | 'pescatarian' | 'restrictive'
export type SunExposure = 'high' | 'moderate' | 'low' | 'very-low'
export type SkinTone = 'light' | 'medium' | 'dark'
export type ActivityLevel = 'sedentary' | 'moderate' | 'very-active' | 'athlete'
export type AlcoholUse = 'none' | 'occasional' | 'regular' | 'heavy'
export type SmokingStatus = 'never' | 'former' | 'current'

export type HealthCondition =
  | 'celiac'
  | 'crohns'
  | 'ibd'
  | 'diabetes-t2'
  | 'osteoporosis'
  | 'kidney-disease'
  | 'bariatric'
  | 'anemia'
  | 'thyroid'
  | 'depression'
  | 'none'

export type Medication =
  | 'metformin'
  | 'ppi'
  | 'warfarin'
  | 'statins'
  | 'anticonvulsants'
  | 'antibiotics-long'
  | 'oral-contraceptive'
  | 'isotretinoin'
  | 'methotrexate'
  | 'diuretics'
  | 'levothyroxine'
  | 'none'

export interface UserProfile {
  age: AgeRange
  gender: Gender
  pregnancy: PregnancyStatus
  diet: DietType
  sunExposure: SunExposure
  skinTone: SkinTone
  activityLevel: ActivityLevel
  alcoholUse: AlcoholUse
  smoking: SmokingStatus
  healthConditions: HealthCondition[]
  medications: Medication[]
}

export type Priority = 'essential' | 'recommended' | 'consider'

export interface SupplementRecommendation {
  vitaminId: string
  vitaminName: string
  color: string
  priority: Priority
  dosage: string
  form?: string
  why: string
  source: string
  timing?: string
  cautions?: string
}

export const defaultProfile: UserProfile = {
  age: '19-30',
  gender: 'female',
  pregnancy: 'none',
  diet: 'omnivore',
  sunExposure: 'moderate',
  skinTone: 'medium',
  activityLevel: 'moderate',
  alcoholUse: 'none',
  smoking: 'never',
  healthConditions: ['none'],
  medications: ['none'],
}

const vitaminColors: Record<string, string> = {
  'vitamin-d': '#facc15',
  'vitamin-b12': '#c084fc',
  'folate': '#818cf8',
  'iron': '#fb7185',
  'calcium': '#94a3b8',
  'vitamin-k': '#4ade80',
  'vitamin-b1': '#f87171',
  'vitamin-b6': '#a3e635',
  'vitamin-c': '#fb7185',
  'vitamin-e': '#a78bfa',
  'omega3': '#2dd4bf',
  'iodine': '#60a5fa',
  'zinc': '#fb923c',
  'magnesium': '#34d399',
  'prenatal': '#f472b6',
  'vitamin-a': '#fb923c',
  'choline': '#a3e635',
  'vitamin-b9': '#818cf8',
}

export function getRecommendations(profile: UserProfile): SupplementRecommendation[] {
  const recs: SupplementRecommendation[] = []
  const { age, gender, pregnancy, diet, sunExposure, skinTone, alcoholUse, smoking, healthConditions, medications } = profile

  const hasCondition = (c: HealthCondition) => healthConditions.includes(c)
  const takesMed = (m: Medication) => medications.includes(m)
  const isFemale = gender === 'female'
  const ageNum = parseInt(age.split('-')[0].split('+')[0])
  const isAdult = ageNum >= 19
  const isSenior = age === '51-70' || age === '71+'
  const isTeen = age === '14-18'

  // ── VITAMIN D ──
  const needsD =
    (sunExposure === 'low' || sunExposure === 'very-low') ||
    (skinTone === 'dark' && (sunExposure !== 'high')) ||
    (isSenior) ||
    hasCondition('osteoporosis') ||
    hasCondition('celiac') ||
    hasCondition('crohns') ||
    hasCondition('ibd') ||
    hasCondition('bariatric') ||
    diet === 'vegan' ||
    takesMed('anticonvulsants') ||
    takesMed('statins')

  if (needsD && isAdult) {
    let dosage = '600-1000 IU'
    let why = ''

    if (sunExposure === 'very-low') {
      dosage = '1000-2000 IU'
      why = 'Very limited sun exposure significantly reduces natural vitamin D synthesis.'
    } else if (skinTone === 'dark' && sunExposure === 'low') {
      dosage = '1000-2000 IU'
      why = 'Darker skin produces vitamin D less efficiently (melanin reduces UVB penetration by up to 90%).'
    } else if (isSenior) {
      dosage = '800-2000 IU'
      why = 'Skin vitamin D synthesis declines by up to 70% after age 70, and bone density protection becomes critical.'
    } else if (hasCondition('osteoporosis')) {
      dosage = '1000-2000 IU'
      why = 'Essential for calcium absorption and bone mineralization in osteoporosis management.'
    } else if (hasCondition('bariatric')) {
      dosage = '3000-5000 IU (monitor blood levels)'
      why = 'Malabsorption after bariatric surgery severely impairs fat-soluble vitamin absorption.'
    } else if (diet === 'vegan') {
      why = 'Few vegan food sources contain vitamin D. Choose D3 from lichen or D2 from yeast.'
    } else {
      why = 'Limited sun exposure is the primary risk factor for vitamin D deficiency, affecting 1 billion people globally.'
    }

    recs.push({
      vitaminId: 'vitamin-d',
      vitaminName: 'Vitamin D',
      color: vitaminColors['vitamin-d'],
      priority: isSenior || hasCondition('osteoporosis') || sunExposure === 'very-low' ? 'essential' : 'recommended',
      dosage,
      form: diet === 'vegan' ? 'D2 (vegan) or lichen-derived D3' : 'D3 (cholecalciferol)',
      why,
      source: 'Fortified milk, fatty fish, egg yolks, sunlight (10-30 min daily)',
      timing: 'Take with a fat-containing meal for best absorption.',
      cautions: hasCondition('kidney-disease') ? 'Monitor blood levels regularly with kidney disease.' : undefined,
    })
  }

  // ── VITAMIN B12 ──
  const needsB12 =
    diet === 'vegan' ||
    diet === 'vegetarian' ||
    isSenior ||
    hasCondition('celiac') ||
    hasCondition('crohns') ||
    hasCondition('ibd') ||
    hasCondition('bariatric') ||
    takesMed('metformin') ||
    takesMed('ppi') ||
    takesMed('oral-contraceptive')

  if (needsB12 && (isAdult || isTeen)) {
    let dosage = '25-100 mcg/day or 1000 mcg 2x/week'
    let priority: Priority = 'recommended'
    let why = ''

    if (diet === 'vegan') {
      priority = 'essential'
      why = 'Vitamin B12 exists almost exclusively in animal products. Vegan diets provide essentially zero B12. Deficiency can take 2-5 years to develop but neurological damage may be irreversible.'
    } else if (diet === 'vegetarian') {
      priority = 'recommended'
      why = 'Eggs and dairy provide some B12, but intake is often marginal. Monitoring B12 levels annually is recommended.'
    } else if (takesMed('metformin')) {
      priority = 'essential'
      why = 'Metformin interferes with B12 absorption in the ileum. 10-30% of long-term users develop B12 deficiency. Annual monitoring is recommended.'
    } else if (takesMed('ppi')) {
      priority = 'recommended'
      why = 'Proton pump inhibitors suppress stomach acid, which is needed to release B12 from food protein. Risk increases with duration of use.'
    } else if (isSenior) {
      priority = 'essential'
      why = 'Up to 30% of adults over 50 have atrophic gastritis, which reduces stomach acid and impairs B12 absorption from food. Synthetic B12 in supplements does not require acid.'
    } else if (hasCondition('bariatric')) {
      priority = 'essential'
      dosage = '350-500 mcg/day or injections'
      why = 'Bariatric surgery removes or bypasses the part of the stomach that produces intrinsic factor, which is required for B12 absorption.'
    } else {
      why = 'Factors in your profile increase risk of B12 malabsorption or inadequate intake.'
    }

    recs.push({
      vitaminId: 'vitamin-b12',
      vitaminName: 'Vitamin B12',
      color: vitaminColors['vitamin-b12'],
      priority,
      dosage,
      form: 'Cyanocobalamin or methylcobalamin',
      why,
      source: 'Meat, fish, eggs, dairy, fortified plant milks, nutritional yeast',
      timing: 'Any time of day. Sublingual forms may help if absorption is compromised.',
      cautions: hasCondition('kidney-disease') ? 'Use methylcobalamin instead of cyanocobalamin with kidney disease.' : undefined,
    })
  }

  // ── FOLATE / FOLIC ACID ──
  const needsFolate =
    pregnancy === 'pregnant' ||
    pregnancy === 'planning' ||
    pregnancy === 'breastfeeding' ||
    takesMed('oral-contraceptive') ||
    (isFemale && age === '14-18') ||
    (isFemale && age === '19-30') ||
    hasCondition('celiac') ||
    takesMed('methotrexate')

  if (needsFolate && isFemale) {
    let dosage = '400-800 mcg'
    let priority: Priority = 'recommended'
    let why = ''

    if (pregnancy === 'pregnant') {
      priority = 'essential'
      dosage = '600-800 mcg'
      why = 'During pregnancy, folate needs increase by 50% to support rapid fetal growth and prevent neural tube defects (spina bifida, anencephaly). Required throughout pregnancy.'
    } else if (pregnancy === 'planning') {
      priority = 'essential'
      dosage = '400-800 mcg'
      why = 'The neural tube closes within the first 28 days after conception — often before a woman knows she is pregnant. Starting folate at least 1 month before conception reduces neural tube defect risk by 50-70%.'
    } else if (pregnancy === 'breastfeeding') {
      priority = 'essential'
      dosage = '500 mcg'
      why = 'Breastfeeding increases folate needs to support milk production and replenish maternal stores.'
    } else if (takesMed('oral-contraceptive')) {
      why = 'Oral contraceptives can deplete folate levels over time. Supplementation helps maintain adequate status.'
    } else {
      why = 'Women of childbearing age should ensure adequate folate status even when not actively planning pregnancy, since 50% of pregnancies are unplanned.'
    }

    recs.push({
      vitaminId: 'folate',
      vitaminName: 'Folic Acid (B9)',
      color: vitaminColors['folate'],
      priority,
      dosage,
      form: 'Folic acid or 5-MTHF (methylfolate)',
      why,
      source: 'Leafy greens, legumes, fortified grains, asparagus, avocado',
      timing: 'Take daily. If planning pregnancy, start at least 1 month before conception.',
    })
  }

  // ── IRON ──
  const needsIron =
    (isFemale && pregnancy === 'none' && (age === '14-18' || age === '19-30' || age === '31-50')) ||
    pregnancy === 'pregnant' ||
    pregnancy === 'breastfeeding' ||
    hasCondition('anemia') ||
    hasCondition('bariatric') ||
    diet === 'vegan' ||
    diet === 'vegetarian'

  if (needsIron && (isAdult || isTeen)) {
    let dosage = '18 mg'
    let priority: Priority = 'recommended'
    let why = ''

    if (pregnancy === 'pregnant') {
      priority = 'essential'
      dosage = '27 mg'
      why = 'Iron needs nearly double during pregnancy to support expanded maternal blood volume, fetal blood formation, and placenta development.'
    } else if (isFemale && pregnancy === 'none' && (age === '19-30' || age === '31-50')) {
      priority = 'recommended'
      dosage = '18 mg (or 8 mg if postmenopausal)'
      why = 'Menstrual blood loss averages 30-40 mL per cycle, significantly increasing iron needs in premenopausal women. Many are iron deficient without knowing it.'
    } else if (hasCondition('anemia')) {
      priority = 'essential'
      dosage = 'As prescribed by physician (typically 60-120 mg elemental iron)'
      why = 'Iron-deficiency anemia requires higher therapeutic doses under medical supervision.'
    } else if (diet === 'vegan' || diet === 'vegetarian') {
      why = 'Plant-based iron (non-heme iron) is absorbed at only 2-20% compared to 15-35% for heme iron from meat. Pair with vitamin C to enhance absorption.'
    } else {
      why = 'Your profile indicates elevated iron needs.'
    }

    recs.push({
      vitaminId: 'iron',
      vitaminName: 'Iron',
      color: vitaminColors['iron'],
      priority,
      dosage,
      form: 'Ferrous sulfate, ferrous bisglycinate (gentler on stomach)',
      why,
      source: 'Red meat, liver, lentils, spinach, fortified cereals, pumpkin seeds',
      timing: 'Take on an empty stomach with vitamin C (e.g., orange juice). Avoid taking with calcium, coffee, or tea.',
      cautions: 'Do not take iron unless blood tests confirm deficiency or you are in a high-risk group. Iron overload can be dangerous.',
    })
  }

  // ── CALCIUM ──
  const needsCalcium =
    isTeen ||
    (isFemale && age === '19-30') ||
    (isFemale && age === '31-50') ||
    isSenior ||
    pregnancy === 'pregnant' ||
    pregnancy === 'breastfeeding' ||
    hasCondition('osteoporosis') ||
    hasCondition('bariatric') ||
    diet === 'vegan' ||
    takesMed('levothyroxine') ||
    takesMed('ppi')

  if (needsCalcium && (isAdult || isTeen)) {
    let dosage = '1000 mg'
    let why = ''

    if (isTeen) {
      dosage = '1300 mg'
      why = 'Peak bone mass is built during adolescence. Inadequate calcium intake during this critical window permanently limits bone density.'
    } else if (pregnancy === 'pregnant' || pregnancy === 'breastfeeding') {
      dosage = '1000 mg'
      why = 'Fetal skeleton and tooth formation require substantial calcium. If maternal intake is insufficient, calcium is drawn from maternal bones.'
    } else if (isFemale && (age === '19-30' || age === '31-50')) {
      dosage = '1000 mg'
      why = 'Building and maintaining peak bone mass before menopause is critical for preventing osteoporosis later in life.'
    } else if (isSenior) {
      dosage = '1200 mg'
      why = 'Calcium absorption decreases with age while bone loss accelerates, especially in postmenopausal women.'
    } else if (hasCondition('osteoporosis')) {
      dosage = '1200 mg'
      why = 'Essential component of osteoporosis treatment alongside vitamin D. Calcium citrate is preferred if stomach acid is low.'
    } else if (diet === 'vegan') {
      why = 'Without dairy, vegans must carefully plan calcium intake from fortified plant milks, tofu, and leafy greens.'
    } else {
      why = 'Your profile indicates factors that affect calcium needs or absorption.'
    }

    recs.push({
      vitaminId: 'calcium',
      vitaminName: 'Calcium',
      color: vitaminColors['calcium'],
      priority: isTeen || pregnancy === 'pregnant' || hasCondition('osteoporosis') ? 'essential' : 'recommended',
      dosage,
      form: 'Calcium citrate (better absorbed, especially with low stomach acid) or calcium carbonate',
      why,
      source: 'Dairy, fortified plant milks, sardines with bones, tofu, leafy greens',
      timing: 'Split doses of 500 mg or less for better absorption. Take with meals if using carbonate; citrate can be taken anytime.',
      cautions: 'Do not take more than 500 mg at once. Balance with magnesium. Excess calcium may increase kidney stone risk.',
    })
  }

  // ── OMEGA-3 (DHA/EPA) ──
  const needsOmega3 =
    pregnancy === 'pregnant' ||
    pregnancy === 'breastfeeding' ||
    pregnancy === 'planning' ||
    diet === 'vegan' ||
    hasCondition('depression') ||
    hasCondition('thyroid')

  if (needsOmega3 && isAdult) {
    let dosage = '250-500 mg combined EPA+DHA'
    let priority: Priority = 'consider'
    let why = ''

    if (pregnancy === 'pregnant' || pregnancy === 'planning') {
      priority = 'essential'
      dosage = '200-300 mg DHA specifically'
      why = 'DHA is critical for fetal brain and eye development during the 3rd trimester and early infancy. Low maternal DHA is linked to poorer child neurodevelopment.'
    } else if (pregnancy === 'breastfeeding') {
      priority = 'essential'
      dosage = '200-300 mg DHA'
      why = 'Breast milk DHA content directly reflects maternal intake. Essential for infant brain and visual development.'
    } else if (diet === 'vegan') {
      priority = 'recommended'
      why = 'Omega-3s EPA and DHA are found primarily in fatty fish. Plant-based ALA converts to EPA/DHA at less than 5% efficiency.'
    } else if (hasCondition('depression')) {
      priority = 'recommended'
      why = 'Omega-3s, particularly EPA, have shown benefit as an adjunct treatment for depression in multiple clinical trials.'
    } else {
      why = 'Omega-3 fatty acids support cardiovascular health, brain function, and have anti-inflammatory properties.'
    }

    recs.push({
      vitaminId: 'omega3',
      vitaminName: 'Omega-3 (DHA/EPA)',
      color: vitaminColors['omega3'],
      priority,
      dosage,
      form: diet === 'vegan' ? 'Algae oil (vegan DHA/EPA)' : 'Fish oil or krill oil',
      why,
      source: 'Fatty fish (salmon, sardines, mackerel), algae oil, walnuts, flaxseed (ALA only)',
      timing: 'Take with meals to reduce fishy aftertaste and improve absorption.',
      cautions: 'High doses may increase bleeding risk, especially with warfarin or before surgery.',
    })
  }

  // ── VITAMIN K ──
  if (hasCondition('osteoporosis') && isAdult) {
    recs.push({
      vitaminId: 'vitamin-k',
      vitaminName: 'Vitamin K2 (MK-7)',
      color: vitaminColors['vitamin-k'],
      priority: 'consider',
      dosage: '90-120 mcg MK-7',
      form: 'MK-7 (menaquinone-7)',
      why: 'Vitamin K2 activates osteocalcin, which binds calcium to bone matrix. Research suggests K2 (especially MK-7) may improve bone density and reduce fracture risk when combined with D and calcium.',
      source: 'Natto (fermented soybeans), fermented cheeses, egg yolks, liver',
      timing: 'Take with a fat-containing meal.',
      cautions: takesMed('warfarin') ? 'CRITICAL: Vitamin K interferes with warfarin. Do NOT take without physician guidance.' : undefined,
    })
  }

  // ── THIAMINE (B1) ──
  if ((alcoholUse === 'heavy' || alcoholUse === 'regular') && isAdult) {
    recs.push({
      vitaminId: 'vitamin-b1',
      vitaminName: 'Vitamin B1 (Thiamine)',
      color: vitaminColors['vitamin-b1'],
      priority: alcoholUse === 'heavy' ? 'essential' : 'recommended',
      dosage: '100 mg',
      why: 'Alcohol impairs thiamine absorption, increases excretion, and damages the liver where vitamins are stored. Thiamine deficiency causes Wernicke-Korsakoff syndrome, a serious neurological condition.',
      source: 'Pork, whole grains, legumes, fortified cereals',
      timing: 'Take daily.',
    })
  }

  // ── VITAMIN B6 ──
  if (takesMed('oral-contraceptive') || (isFemale && hasCondition('depression'))) {
    recs.push({
      vitaminId: 'vitamin-b6',
      vitaminName: 'Vitamin B6',
      color: vitaminColors['vitamin-b6'],
      priority: 'consider',
      dosage: '10-25 mg',
      why: takesMed('oral-contraceptive')
        ? 'Oral contraceptives increase vitamin B6 metabolism. Some women experience improved mood with B6 supplementation.'
        : 'Vitamin B6 is a cofactor in serotonin and dopamine synthesis. May support mood regulation as part of a comprehensive approach.',
      source: 'Chicken, fish, potatoes, chickpeas, bananas, fortified cereals',
      timing: 'Morning is best to avoid vivid dreams.',
      cautions: 'Do not exceed 100 mg/day long-term — high doses can cause irreversible nerve damage.',
    })
  }

  // ── VITAMIN C ──
  if (smoking === 'current') {
    recs.push({
      vitaminId: 'vitamin-c',
      vitaminName: 'Vitamin C',
      color: vitaminColors['vitamin-c'],
      priority: 'recommended',
      dosage: '125-200 mg (RDA + 35 mg for smokers)',
      why: 'Smoking generates free radicals that deplete vitamin C stores. Smokers need approximately 35 mg more vitamin C per day than non-smokers.',
      source: 'Citrus fruits, bell peppers, strawberries, broccoli, kiwi',
      timing: 'Take in divided doses — body absorbs only ~200 mg at a time.',
    })
  }

  // ── VITAMIN E ──
  if (diet === 'restrictive' && isAdult) {
    recs.push({
      vitaminId: 'vitamin-e',
      vitaminName: 'Vitamin E',
      color: vitaminColors['vitamin-e'],
      priority: 'consider',
      dosage: '15 mg (22 IU)',
      why: 'Highly restrictive diets may lack adequate vitamin E from nuts, seeds, and vegetable oils.',
      source: 'Almonds, sunflower seeds, wheat germ oil, avocado, spinach',
    })
  }

  // ── IODINE ──
  if (pregnancy === 'pregnant' || pregnancy === 'breastfeeding' || pregnancy === 'planning') {
    recs.push({
      vitaminId: 'iodine',
      vitaminName: 'Iodine',
      color: vitaminColors['iodine'],
      priority: 'essential',
      dosage: '220-290 mcg',
      why: 'Iodine is essential for thyroid hormone production, which regulates fetal brain development. Deficiency during pregnancy is the leading preventable cause of intellectual disability worldwide.',
      source: 'Iodized salt, seafood, dairy, eggs, seaweed',
      timing: 'Include iodized salt in cooking. Avoid excessive seaweed (can provide too much iodine).',
    })
  }

  // ── ZINC ──
  if (pregnancy === 'pregnant' || diet === 'vegan' || diet === 'vegetarian') {
    recs.push({
      vitaminId: 'zinc',
      vitaminName: 'Zinc',
      color: vitaminColors['zinc'],
      priority: pregnancy === 'pregnant' ? 'recommended' : 'consider',
      dosage: pregnancy === 'pregnant' ? '11-12 mg' : '8-11 mg',
      why: pregnancy === 'pregnant'
        ? 'Zinc needs increase during pregnancy to support fetal cell division, DNA synthesis, and immune function.'
        : 'Plant-based diets contain phytates that bind zinc and reduce absorption. Zinc needs may be 50% higher for vegetarians/vegans.',
      source: 'Oysters, beef, pumpkin seeds, chickpeas, fortified cereals',
      timing: 'Take away from iron and calcium supplements, which compete for absorption.',
    })
  }

  // ── MAGNESIUM ──
  if (isSenior || hasCondition('diabetes-t2') || takesMed('diuretics') || takesMed('ppi')) {
    recs.push({
      vitaminId: 'magnesium',
      vitaminName: 'Magnesium',
      color: vitaminColors['magnesium'],
      priority: 'consider',
      dosage: '310-420 mg',
      why: isSenior
        ? 'Magnesium absorption decreases with age, yet it is critical for bone health, blood pressure regulation, and sleep quality.'
        : takesMed('diuretics')
        ? 'Diuretics increase magnesium loss through urine, increasing risk of deficiency.'
        : 'Type 2 diabetes increases magnesium losses through urine. Low magnesium worsens insulin resistance.',
      form: 'Magnesium glycinate or citrate (better absorbed than oxide)',
      source: 'Pumpkin seeds, almonds, spinach, black beans, dark chocolate',
      timing: 'Evening may help with sleep.',
      cautions: 'Reduce dose if diarrhea occurs. Avoid magnesium oxide (poor absorption).',
    })
  }

  // ── CHOLINE ──
  if (pregnancy === 'pregnant' || pregnancy === 'breastfeeding' || pregnancy === 'planning') {
    recs.push({
      vitaminId: 'choline',
      vitaminName: 'Choline',
      color: vitaminColors['choline'],
      priority: 'recommended',
      dosage: '450-550 mg',
      why: 'Choline is essential for fetal brain and spinal cord development. Most prenatal vitamins do not contain adequate choline. 90% of pregnant women do not meet choline requirements through diet alone.',
      source: 'Eggs (1 egg = 147 mg choline), liver, fish, soybeans, wheat germ',
      timing: 'Take with meals.',
    })
  }

  // ── PRENATAL MULTIVITAMIN ──
  if (pregnancy === 'pregnant' || pregnancy === 'planning') {
    recs.push({
      vitaminId: 'prenatal',
      vitaminName: 'Prenatal Multivitamin',
      color: vitaminColors['prenatal'],
      priority: 'essential',
      dosage: '1 daily (verify it contains iron, folate, iodine, and DHA)',
      why: 'A prenatal multivitamin ensures baseline coverage of all essential nutrients during the critical periconceptional period and pregnancy. Not all prenatals are equal — check the label for iron, methylfolate (not just folic acid), iodine, and DHA.',
      source: 'Prenatal multivitamin (prescription or high-quality OTC)',
      timing: 'Take with food to reduce nausea. Split into morning and evening doses if needed.',
      cautions: 'Do not exceed 10,000 IU of preformed vitamin A (retinol) during pregnancy. Choose beta-carotene as the vitamin A source instead.',
    })
  }

  // ── VITAMIN K FOR WARFARIN USERS ──
  if (takesMed('warfarin')) {
    recs.push({
      vitaminId: 'vitamin-k',
      vitaminName: 'Vitamin K — Special Note',
      color: '#fb7185',
      priority: 'essential',
      dosage: 'KEEP VITAMIN K INTAKE CONSISTENT — do not eliminate or megadose',
      form: 'Dietary management, NOT supplementation',
      why: 'Warfarin works by blocking vitamin K recycling. Sudden changes in vitamin K intake (increasing or decreasing) will change warfarin\'s effectiveness and increase bleeding or clotting risk.',
      source: 'Maintain consistent intake of leafy greens. Track daily.',
      cautions: 'CRITICAL: Do NOT start vitamin K supplements or eliminate vitamin K foods without consulting your prescribing physician. INR monitoring is essential.',
    })
  }

  // ── INFANT VITAMIN D ──
  if (age === '0-1') {
    recs.push({
      vitaminId: 'vitamin-d',
      vitaminName: 'Vitamin D for Infants',
      color: vitaminColors['vitamin-d'],
      priority: 'essential',
      dosage: '400 IU (10 mcg) drops daily',
      why: 'Breast milk contains only 25-50 IU of vitamin D per liter — insufficient to meet infant needs. Formula-fed infants receive adequate D from fortified formula. The American Academy of Pediatrics recommends 400 IU daily starting in the first few days of life.',
      source: 'Liquid vitamin D3 drops (infant formulation)',
      timing: 'Give daily. Can place drops directly on nipple, pacifier, or into formula.',
    })
  }

  // Sort: essential first, then recommended, then consider
  const priorityOrder: Record<Priority, number> = { essential: 0, recommended: 1, consider: 2 }
  recs.sort((a, b) => priorityOrder[a.priority] - priorityOrder[b.priority])

  return recs
}

export const ageRanges: { value: AgeRange; label: string }[] = [
  { value: '0-1', label: '0-1 year (Infant)' },
  { value: '1-3', label: '1-3 years (Toddler)' },
  { value: '4-8', label: '4-8 years (Child)' },
  { value: '9-13', label: '9-13 years (Pre-Teen)' },
  { value: '14-18', label: '14-18 years (Teen)' },
  { value: '19-30', label: '19-30 years (Young Adult)' },
  { value: '31-50', label: '31-50 years (Adult)' },
  { value: '51-70', label: '51-70 years (Older Adult)' },
  { value: '71+', label: '71+ years (Senior)' },
]

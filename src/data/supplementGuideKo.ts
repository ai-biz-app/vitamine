export const healthConditionLabelsKo: Record<string, string> = {
  'celiac': '셀리악 병',
  'crohns': '크론병',
  'ibd': '염증성 장병 (IBD)',
  'diabetes-t2': '제2형 당뇨병',
  'osteoporosis': '골다공증 / 골감소증',
  'kidney-disease': '만성 신장 질환',
  'bariatric': '비만 수술 후',
  'anemia': '철결핍성 빈혈',
  'thyroid': '갑상선 질환',
  'depression': '우울증 / 기분 장애',
}

export const medicationLabelsKo: Record<string, string> = {
  'metformin': '메트포륀 (당뇨)',
  'ppi': '양성자 펌프 억제제 (역류성 식도염)',
  'warfarin': '와파린 (항응고제)',
  'statins': '스타틴 (콜레스테롤)',
  'anticonvulsants': '항경련제 / 항발작제',
  'oral-contraceptive': '경구 피임약',
  'methotrexate': '메토트렉세이트',
  'diuretics': '이뇨제 (수분 제거제)',
  'levothyroxine': '레보티록신 (갑상선)',
  'antibiotics-long': '장기 항생제',
}

export const ageRangeLabelsKo: Record<string, string> = {
  '0-1': '0-1세 (영아)',
  '1-3': '1-3세 (유아)',
  '4-8': '4-8세 (어린이)',
  '9-13': '9-13세 (청소년 전기)',
  '14-18': '14-18세 (청소년)',
  '19-30': '19-30세 (청년)',
  '31-50': '31-50세 (성인)',
  '51-70': '51-70세 (중년)',
  '71+': '71세 이상 (노인)',
}

// Supplement recommendation translations
const vitaminNamesKo: Record<string, string> = {
  'Vitamin D': '비타민 D',
  'Vitamin B12': '비타민 B12',
  'Folic Acid (B9)': '엽산 (B9)',
  'Iron': '철분',
  'Calcium': '칼슘',
  'Omega-3 (DHA/EPA)': '오메가-3 (DHA/EPA)',
  'Vitamin K2 (MK-7)': '비타민 K2 (MK-7)',
  'Vitamin K — Special Note': '비타민 K — 특별 주의',
  'Vitamin B1 (Thiamine)': '비타민 B1 (티아민)',
  'Vitamin B6': '비타민 B6',
  'Vitamin C': '비타민 C',
  'Vitamin E': '비타민 E',
  'Iodine': '요오드',
  'Zinc': '아연',
  'Magnesium': '마그네슘',
  'Choline': '콜린',
  'Prenatal Multivitamin': '임산부 종합비타민',
  'Vitamin D for Infants': '영아용 비타민 D',
}

const formsKo: Record<string, string> = {
  'D3 (cholecalciferol)': 'D3 (콜레칼시페롤)',
  'D2 (vegan) or lichen-derived D3': 'D2 (비건) 또는 이끼 유래 D3',
  'Cyanocobalamin or methylcobalamin': '시아노코발라민 또는 메틸코발라민',
  'Folic acid or 5-MTHF (methylfolate)': '엽산 또는 5-MTHF (메틸엽산)',
  'Ferrous sulfate, ferrous bisglycinate (gentler on stomach)': '황산제1철, 비스글리시네이트제1철 (위에 부드러움)',
  'Calcium citrate (better absorbed, especially with low stomach acid) or calcium carbonate': '구연산칼슘 (흡수가 잘 됨, 특히 위산이 적을 때) 또는 탄산칼슘',
  'MK-7 (menaquinone-7)': 'MK-7 (메나퀴논-7)',
  'Algae oil (vegan DHA/EPA)': '조류 오일 (비건 DHA/EPA)',
  'Fish oil or krill oil': '생선 오일 또는 크릴 오일',
  'Magnesium glycinate or citrate (better absorbed than oxide)': '글리시네이트 또는 구연산 마그네슘 (산화물보다 흡수 잘 됨)',
  'Dietary management, NOT supplementation': '식이 관리, 보충제 아님',
  'Prenatal multivitamin (prescription or high-quality OTC)': '임산부 종합비타민 (처방 또는 고품질 일반의약품)',
  'Liquid vitamin D3 drops (infant formulation)': '액상 비타민 D3 방울 (영아용 제형)',
}

const sourcesKo: Record<string, string> = {
  'Fortified milk, fatty fish, egg yolks, sunlight (10-30 min daily)': '강화 우유, 기름진 생선, 노른자, 햇빛 (하루 10-30분)',
  'Meat, fish, eggs, dairy, fortified plant milks, nutritional yeast': '육류, 생선, 달걀, 유제품, 강화 식물성 우유, 영양 효모',
  'Leafy greens, legumes, fortified grains, asparagus, avocado': '잎이 많은 채소, 콩류, 강화 곡물, 아스파라거스, 아보칏도',
  'Red meat, liver, lentils, spinach, fortified cereals, pumpkin seeds': '붉은 육류, 간, 렌틸콩, 시금치, 강화 시리얼, 호박 씨',
  'Dairy, fortified plant milks, sardines with bones, tofu, leafy greens': '유제품, 강화 식물성 우유, 뼈째 정어리, 두부, 잎이 많은 채소',
  'Fatty fish (salmon, sardines, mackerel), algae oil, walnuts, flaxseed (ALA only)': '기름진 생선(연어, 정어리, 고등어), 조류 오일, 호두, 아마 씨(ALA만)',
  'Natto (fermented soybeans), fermented cheeses, egg yolks, liver': '낫또(발효 대두), 발효 치즈, 노른자, 간',
  'Pork, whole grains, legumes, fortified cereals': '돼지고기, 통곡물, 콩류, 강화 시리얼',
  'Chicken, fish, potatoes, chickpeas, bananas, fortified cereals': '닭고기, 생선, 감자, 병아리콩, 바나나, 강화 시리얼',
  'Citrus fruits, bell peppers, strawberries, broccoli, kiwi': '감귤류, 피망, 딸기, 브로콜리, 키위',
  'Almonds, sunflower seeds, wheat germ oil, avocado, spinach': '아몬드, 핫바라기 씨, 밀 배아 기름, 아보칏도, 시금치',
  'Iodized salt, seafood, dairy, eggs, seaweed': '요오드 소금, 해산물, 유제품, 달걀, 해초',
  'Oysters, beef, pumpkin seeds, chickpeas, fortified cereals': '굴, 소고기, 호박 씨, 병아리콩, 강화 시리얼',
  'Pumpkin seeds, almonds, spinach, black beans, dark chocolate': '호박 씨, 아몬드, 시금치, 검은콩, 다크 초콜릿',
  'Eggs (1 egg = 147 mg choline), liver, fish, soybeans, wheat germ': '달걀(1개 = 147mg 콜린), 간, 생선, 대두, 밀 배아',
  'Maintain consistent intake of leafy greens. Track daily.': '잎이 많은 채소의 섭취를 일정하게 유지하세요. 매일 기록하세요.',
  'Prenatal multivitamin (prescription or high-quality OTC)': '임산부 종합비타민 (처방 또는 고품질 일반의약품)',
  'Liquid vitamin D3 drops (infant formulation)': '액상 비타민 D3 방울 (영아용 제형)',
}

const timingsKo: Record<string, string> = {
  'Take with a fat-containing meal for best absorption.': '최고의 흡수를 위해 지방이 포함된 식사와 함께 복용하세요.',
  'Any time of day. Sublingual forms may help if absorption is compromised.': '하루 중 언제든. 흡수가 어려운 경우 설하용 제형이 도움이 될 수 있습니다.',
  'Take daily. If planning pregnancy, start at least 1 month before conception.': '매일 복용. 임신을 계획한다면 수태 최소 1개월 전부터 시작하세요.',
  'Take on an empty stomach with vitamin C (e.g., orange juice). Avoid taking with calcium, coffee, or tea.': '비타민 C(예: 오렌지 주스)와 함께 공복에 복용. 칼슘, 커피, 차와 함께 복용하지 마세요.',
  'Split doses of 500 mg or less for better absorption. Take with meals if using carbonate; citrate can be taken anytime.': '더 나은 흡수를 위해 500mg 이하로 나누어 복용. 탄산칼슘은 식사와 함께; 구연산칼슘은 언제든 가능.',
  'Take with meals to reduce fishy aftertaste and improve absorption.': '생선 비린내를 줄이고 흡수를 높이려면 식사와 함께 복용하세요.',
  'Take with a fat-containing meal.': '지방이 포함된 식사와 함께 복용하세요.',
  'Take daily.': '매일 복용하세요.',
  'Morning is best to avoid vivid dreams.': '생생한 꿈을 피하려면 아침이 가장 좋습니다.',
  'Take in divided doses — body absorbs only ~200 mg at a time.': '나누어 복용하세요 — 인체는 한 번에 약 200mg만 흡수합니다.',
  'Include iodized salt in cooking. Avoid excessive seaweed (can provide too much iodine).': '요리에 요오드 소금을 사용하세요. 과도한 해초는 피하세요(요오드 과다 제공).',
  'Take away from iron and calcium supplements, which compete for absorption.': '흡수 경쟁을 하는 철분 및 칼슘 보충제와 시간을错开하여 복용하세요.',
  'Evening may help with sleep.': '저녁 복용이 수면에 도움이 될 수 있습니다.',
  'Take with meals.': '식사와 함께 복용하세요.',
  'Take with food to reduce nausea. Split into morning and evening doses if needed.': '메스커름을 줄이려면 음식과 함께. 필요하면 아침과 저녁으로 나누어 복용.',
  'Give daily. Can place drops directly on nipple, pacifier, or into formula.': '매일 투여. 유두, 쪽쪽이에 직접 떨어뜨리거나 분유에 섞을 수 있습니다.',
}

const cautionsKo: Record<string, string> = {
  'Monitor blood levels regularly with kidney disease.': '신장 질환이 있는 경우 정기적으로 혈중 농도를 모니터링하세요.',
  'Use methylcobalamin instead of cyanocobalamin with kidney disease.': '신장 질환 시 시아노코발라민 대신 메틸코발라민을 사용하세요.',
  'Do not take iron unless blood tests confirm deficiency or you are in a high-risk group. Iron overload can be dangerous.': '혈액 검사로 결핍이 확인되거나 고위험군이 아니면 철분을 복용하지 마세요. 철분 과다는 위험할 수 있습니다.',
  'Do not take more than 500 mg at once. Balance with magnesium. Excess calcium may increase kidney stone risk.': '한 번에 500mg을 초과하지 마세요. 마그네슘과 균형을 맞추세요. 과도한 칼슘은 신장 결석 위험을 높일 수 있습니다.',
  'CRITICAL: Vitamin K interferes with warfarin. Do NOT take without physician guidance.': '중요: 비타민 K는 와파린을 방해합니다. 의사 지도 없이 복용하지 마세요.',
  'High doses may increase bleeding risk, especially with warfarin or before surgery.': '고용량은 출혈 위험을 높일 수 있으며, 특히 와파린 복용 중이거나 수술 전입니다.',
  'Do not exceed 100 mg/day long-term — high doses can cause irreversible nerve damage.': '장기적으로 100mg/일을 초과하지 마세요 — 고용량은 돌이킬 수 없는 신경 손상을 유발할 수 있습니다.',
  'Reduce dose if diarrhea occurs. Avoid magnesium oxide (poor absorption).': '설사가 발생하면 용량을 줄이세요. 산화마그네슘은 피하세요(흡수가 안 됨).',
  'Do not exceed 10,000 IU of preformed vitamin A (retinol) during pregnancy. Choose beta-carotene as the vitamin A source instead.': '임신 중 미리 형성된 비타민 A(레티놀) 10,000 IU를 초과하지 마세요. 대신 베타카로틴을 비타민 A 원으로 선택하세요.',
  'CRITICAL: Do NOT start vitamin K supplements or eliminate vitamin K foods without consulting your prescribing physician. INR monitoring is essential.': '중요: 처방 의사와 상담 없이 비타민 K 보충제를 시작하거나 비타민 K 식품을 제거하지 마세요. INR 모니터링이 필수적입니다.',
}

function translateString(str: string | undefined, dict: Record<string, string>): string | undefined {
  if (!str) return str
  // Try exact match first
  if (dict[str]) return dict[str]
  // For dynamic strings, try to find partial matches or keep original
  return str
}

import type { SupplementRecommendation } from './supplementEngine'

export function translateRecommendationsKo(recs: SupplementRecommendation[]): SupplementRecommendation[] {
  return recs.map((rec) => ({
    ...rec,
    vitaminName: vitaminNamesKo[rec.vitaminName] || rec.vitaminName,
    dosage: rec.dosage,
    form: translateString(rec.form, formsKo),
    why: rec.why,
    source: translateString(rec.source, sourcesKo) || rec.source,
    timing: translateString(rec.timing, timingsKo),
    cautions: translateString(rec.cautions, cautionsKo),
  }))
}

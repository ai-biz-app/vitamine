export interface DetailedFoodSource {
  food: string
  serving: string
  amount: string
}

export interface SourceCitation {
  text: string
  url: string
}

export interface Vitamin {
  id: string
  name: string
  subtitle: string
  chemicalName: string
  category: 'fat-soluble' | 'water-soluble'
  categoryLabel: string
  description: string
  longDescription: string
  color: string
  bgTint: string
  functions: string[]
  foodSources: string[]
  detailedFoodSources: DetailedFoodSource[]
  rda: { men: string; women: string }
  rdaMcg: number // Adult male RDA in mcg for percentage calculations
  upperLimit?: string
  deficiency: { name: string; symptoms: string[] }
  highRiskGroups: string[]
  funFact: string
  sources?: SourceCitation[]
}

export const vitamins: Vitamin[] = [
  {
    id: 'vitamin-a',
    name: 'Vitamin A',
    subtitle: 'Retinol',
    chemicalName: 'Retinol, Retinal, Retinoic acid, Beta-carotene',
    category: 'fat-soluble',
    categoryLabel: 'Fat-Soluble',
    description: 'Vision, immunity, and cell growth',
    longDescription:
      'Vitamin A is a collective term for a group of structurally related fat-soluble compounds that include retinol, retinal, retinoic acid, and various provitamin A carotenoids such as beta-carotene. It is essential for vision, immune function, and cellular differentiation. The most well-known function is its role in vision — specifically in the process of dark adaptation. Vitamin A also regulates the development and function of various immune cells and maintains epithelial barriers in the skin, respiratory tract, and gastrointestinal tract.',
    color: '#fb923c',
    bgTint: 'rgba(251, 146, 60, 0.08)',
    functions: [
      'Vision and dark adaptation (rhodopsin synthesis)',
      'Immune function and epithelial barrier maintenance',
      'Cell growth and differentiation',
      'Reproduction and embryonic development',
      'Skin health and wound healing',
    ],
    foodSources: [
      'Liver and fish oils',
      'Eggs and dairy products',
      'Carrots and sweet potatoes',
      'Spinach, kale, and leafy greens',
      'Cantaloupe and apricots',
    ],
    detailedFoodSources: [
      { food: 'Beef liver', serving: '3 oz (85g)', amount: '6,582 mcg' },
      { food: 'Sweet potato', serving: '1 medium', amount: '1,403 mcg' },
      { food: 'Carrots', serving: '1/2 cup', amount: '665 mcg' },
      { food: 'Spinach', serving: '1/2 cup cooked', amount: '573 mcg' },
      { food: 'Kale', serving: '1/2 cup cooked', amount: '443 mcg' },
      { food: 'Cod liver oil', serving: '1 tsp', amount: '1,350 mcg' },
      { food: 'Eggs', serving: '2 large', amount: '160 mcg' },
      { food: 'Mango', serving: '1 cup', amount: '89 mcg' },
      { food: 'Cantaloupe', serving: '1 cup', amount: '270 mcg' },
      { food: 'Red bell pepper', serving: '1/2 cup', amount: '117 mcg' },
    ],
    rda: { men: '900 mcg (3,000 IU)', women: '700 mcg (2,333 IU)' },
    rdaMcg: 900,
    upperLimit: '3,000 mcg (10,000 IU)',
    deficiency: {
      name: 'Night Blindness / Xerophthalmia',
      symptoms: [
        'Impaired dark adaptation',
        'Night blindness',
        'Dry eyes (xerophthalmia)',
        'Bitot\'s spots',
        'Corneal ulceration and blindness in severe cases',
      ],
    },
    highRiskGroups: [
      'Young children in developing countries',
      'Those with fat malabsorption',
      'People on restrictive diets',
    ],
    funFact: 'Vitamin A deficiency remains a leading cause of preventable childhood blindness in developing countries.',
  },
  {
    id: 'vitamin-d',
    name: 'Vitamin D',
    subtitle: 'Calciferol',
    chemicalName: 'Cholecalciferol (D3), Ergocalciferol (D2)',
    category: 'fat-soluble',
    categoryLabel: 'Fat-Soluble',
    description: 'Bone health and calcium absorption',
    longDescription:
      'Vitamin D is unique among vitamins because it can be synthesized by the human body through the action of sunlight on skin, earning it the moniker "the sunshine vitamin." It functions as a prohormone — the body converts it into an active hormone (calcitriol) that regulates calcium and phosphate homeostasis. Its classical function is promoting bone mineralization, but vitamin D receptors are expressed in virtually all tissues, suggesting roles in immune function, muscle strength, and cardiovascular health.',
    color: '#facc15',
    bgTint: 'rgba(250, 204, 21, 0.08)',
    functions: [
      'Calcium and phosphorus homeostasis',
      'Bone mineralization and growth',
      'Immune system modulation',
      'Muscle function and strength',
      'Cell growth regulation',
    ],
    foodSources: [
      'Fatty fish (salmon, tuna, mackerel)',
      'Egg yolks',
      'Fortified milk and orange juice',
      'Cod liver oil',
      'UV-exposed mushrooms',
    ],
    detailedFoodSources: [
      { food: 'Cod liver oil', serving: '1 tbsp', amount: '34 mcg (1,360 IU)' },
      { food: 'Salmon (sockeye)', serving: '3 oz (85g)', amount: '14.2 mcg (570 IU)' },
      { food: 'Rainbow trout', serving: '3 oz (85g)', amount: '16.2 mcg (645 IU)' },
      { food: 'Sardines (canned)', serving: '3 oz (85g)', amount: '4.1 mcg (164 IU)' },
      { food: 'Fortified milk', serving: '1 cup', amount: '2.9 mcg (120 IU)' },
      { food: 'Egg yolk', serving: '1 large', amount: '1.0 mcg (41 IU)' },
      { food: 'UV-exposed mushrooms', serving: '1/2 cup', amount: '9.2 mcg (366 IU)' },
      { food: 'Fortified orange juice', serving: '1 cup', amount: '2.5 mcg (100 IU)' },
      { food: 'Tuna (canned)', serving: '3 oz (85g)', amount: '5.7 mcg (228 IU)' },
      { food: 'Sunlight exposure', serving: '10-30 min', amount: 'Varies by skin type' },
    ],
    rda: { men: '15 mcg (600 IU) age 19-70; 20 mcg (800 IU) age 71+', women: 'Same as men' },
    rdaMcg: 15,
    upperLimit: '100 mcg (4,000 IU)',
    deficiency: {
      name: 'Rickets (children) / Osteomalacia (adults)',
      symptoms: [
        'Bone deformities (bowed legs)',
        'Bone pain and tenderness',
        'Muscle weakness',
        'Increased fracture risk',
        'Delayed growth in children',
      ],
    },
    highRiskGroups: [
      'Breastfed infants without supplementation',
      'Elderly adults',
      'Dark-skinned individuals at high latitudes',
      'Those with limited sun exposure',
    ],
    funFact: 'Approximately 1 billion people worldwide have low vitamin D status, making it one of the most common nutritional deficiencies.',
    sources: [
      { text: 'NIH Office of Dietary Supplements — Vitamin D', url: 'https://ods.od.nih.gov/factsheets/VitaminD-HealthProfessional/' },
      { text: 'Holick MF. The vitamin D deficiency pandemic. Rev Endocr Metab Disord. 2017.', url: 'https://pubmed.ncbi.nlm.nih.gov/28555329/' },
    ],
  },
  {
    id: 'vitamin-e',
    name: 'Vitamin E',
    subtitle: 'Tocopherol',
    chemicalName: 'Alpha-tocopherol (and 7 other tocopherols/tocotrienols)',
    category: 'fat-soluble',
    categoryLabel: 'Fat-Soluble',
    description: 'Antioxidant protection for cells',
    longDescription:
      'Vitamin E is the collective name for eight structurally related fat-soluble compounds. Alpha-tocopherol is the most biologically active form in humans. Its predominant physiological function is as a chain-breaking antioxidant that prevents the propagation of lipid peroxidation in cell membranes and plasma lipoproteins. This antioxidant function is especially important in tissues with high metabolic activity and oxygen exposure, such as skeletal muscle, cardiac muscle, and the retina.',
    color: '#a78bfa',
    bgTint: 'rgba(167, 139, 250, 0.08)',
    functions: [
      'Primary lipid-soluble antioxidant in cell membranes',
      'Prevention of lipid peroxidation',
      'Immune function support',
      'Cell membrane protection',
      'Anti-inflammatory effects',
    ],
    foodSources: [
      'Wheat germ oil',
      'Sunflower and safflower oil',
      'Almonds and sunflower seeds',
      'Spinach and avocado',
      'Peanut butter',
    ],
    detailedFoodSources: [
      { food: 'Wheat germ oil', serving: '1 tbsp', amount: '20.3 mg' },
      { food: 'Sunflower seeds', serving: '1 oz (28g)', amount: '7.4 mg' },
      { food: 'Almonds', serving: '1 oz (28g)', amount: '6.8 mg' },
      { food: 'Sunflower oil', serving: '1 tbsp', amount: '5.6 mg' },
      { food: 'Safflower oil', serving: '1 tbsp', amount: '4.6 mg' },
      { food: 'Peanut butter', serving: '2 tbsp', amount: '2.9 mg' },
      { food: 'Spinach', serving: '1/2 cup cooked', amount: '1.9 mg' },
      { food: 'Avocado', serving: '1/2 fruit', amount: '2.1 mg' },
      { food: 'Trout', serving: '3 oz (85g)', amount: '2.4 mg' },
      { food: 'Shrimp', serving: '3 oz (85g)', amount: '1.9 mg' },
    ],
    rda: { men: '15 mg (22 IU)', women: '15 mg (22 IU)' },
    rdaMcg: 15000,
    upperLimit: '1,000 mg (1,500 IU)',
    deficiency: {
      name: 'Vitamin E Deficiency',
      symptoms: [
        'Peripheral neuropathy',
        'Muscle weakness',
        'Impaired immune response',
        'Retinopathy',
        'Hemolytic anemia in premature infants',
      ],
    },
    highRiskGroups: [
      'People with fat malabsorption disorders',
      'Premature infants',
      'Those with Crohn\'s disease or cystic fibrosis',
    ],
    funFact: 'Synthetic vitamin E (dl-alpha-tocopherol) is only half as biologically active as natural vitamin E (d-alpha-tocopherol).',
    sources: [
      { text: 'NIH Office of Dietary Supplements — Vitamin E', url: 'https://ods.od.nih.gov/factsheets/VitaminE-HealthProfessional/' },
    ],
  },
  {
    id: 'vitamin-k',
    name: 'Vitamin K',
    subtitle: 'Phylloquinone',
    chemicalName: 'Phylloquinone (K1), Menaquinones (K2)',
    category: 'fat-soluble',
    categoryLabel: 'Fat-Soluble',
    description: 'Blood clotting and bone metabolism',
    longDescription:
      'Vitamin K encompasses a family of fat-soluble compounds that share a common 2-methyl-1,4-naphthoquinone ring structure. Its canonical function is as an essential cofactor for gamma-glutamyl carboxylase, which activates clotting factors II, VII, IX, and X in the liver. Beyond coagulation, vitamin K-dependent carboxylation is essential for osteocalcin (bone matrix protein) and matrix Gla protein (inhibits soft tissue calcification). Newborn infants are routinely given vitamin K at birth to prevent hemorrhagic disease.',
    color: '#4ade80',
    bgTint: 'rgba(74, 222, 128, 0.08)',
    functions: [
      'Blood clotting (activates coagulation factors)',
      'Bone metabolism (osteocalcin carboxylation)',
      'Inhibition of vascular calcification',
      'Heart health via Matrix Gla Protein',
    ],
    foodSources: [
      'Kale, spinach, and collard greens',
      'Broccoli and Brussels sprouts',
      'Natto (fermented soybeans)',
      'Fermented cheeses',
      'Liver',
    ],
    detailedFoodSources: [
      { food: 'Natto (fermented soy)', serving: '3 oz', amount: '850 mcg' },
      { food: 'Collard greens', serving: '1/2 cup cooked', amount: '530 mcg' },
      { food: 'Turnip greens', serving: '1/2 cup cooked', amount: '426 mcg' },
      { food: 'Spinach', serving: '1/2 cup cooked', amount: '444 mcg' },
      { food: 'Kale', serving: '1/2 cup cooked', amount: '443 mcg' },
      { food: 'Broccoli', serving: '1/2 cup cooked', amount: '110 mcg' },
      { food: 'Soybean oil', serving: '1 tbsp', amount: '25 mcg' },
      { food: 'Edamame', serving: '1/2 cup', amount: '21 mcg' },
      { food: 'Pumpkin', serving: '1/2 cup', amount: '20 mcg' },
      { food: 'Pine nuts', serving: '1 oz (28g)', amount: '15 mcg' },
    ],
    rda: { men: '120 mcg', women: '90 mcg' },
    rdaMcg: 120,
    deficiency: {
      name: 'Vitamin K Deficiency',
      symptoms: [
        'Easy bruising and bleeding',
        'Nosebleeds and bleeding gums',
        'Blood in urine or stool',
        'Heavy menstrual bleeding',
        'Osteoporosis risk',
      ],
    },
    highRiskGroups: [
      'Newborn infants',
      'People on blood thinners (warfarin)',
      'Those with malabsorption disorders',
    ],
    funFact: 'Newborn infants are routinely given vitamin K at birth because vitamin K does not cross the placenta efficiently.',
  },
  {
    id: 'vitamin-b1',
    name: 'Vitamin B1',
    subtitle: 'Thiamine',
    chemicalName: 'Thiamine pyrophosphate (TPP)',
    category: 'water-soluble',
    categoryLabel: 'Water-Soluble',
    description: 'Energy metabolism and nerve function',
    longDescription:
      'Thiamine (vitamin B1) was the first vitamin to be chemically identified and plays a critical role as the coenzyme thiamine pyrophosphate (TPP) in energy metabolism. TPP is an essential cofactor for three key enzymes in glucose metabolism: pyruvate dehydrogenase, alpha-ketoglutarate dehydrogenase, and transketolase. Thiamine also has a physiologically important role in nerve impulse transmission and maintenance of myelin sheaths. The body stores only small amounts (2-4 weeks), making regular dietary intake essential.',
    color: '#f87171',
    bgTint: 'rgba(248, 113, 113, 0.08)',
    functions: [
      'Energy metabolism (pyruvate dehydrogenase)',
      'Nerve conduction and myelin maintenance',
      'Glucose metabolism',
      'Pentose phosphate pathway (generates ribose)',
    ],
    foodSources: [
      'Pork and organ meats',
      'Whole grains and legumes',
      'Fish and seafood',
      'Fortified cereals',
      'Nuts and seeds',
    ],
    detailedFoodSources: [
      { food: 'Pork chop', serving: '3 oz (85g)', amount: '0.5 mg' },
      { food: 'Fortified cereals', serving: '1 cup', amount: '1.5 mg' },
      { food: 'Sunflower seeds', serving: '1 oz (28g)', amount: '0.5 mg' },
      { food: 'White beans', serving: '1/2 cup cooked', amount: '0.3 mg' },
      { food: 'Acorn squash', serving: '1/2 cup cooked', amount: '0.2 mg' },
      { food: 'Trout', serving: '3 oz (85g)', amount: '0.4 mg' },
      { food: 'Black beans', serving: '1/2 cup cooked', amount: '0.2 mg' },
      { food: 'Edamame', serving: '1/2 cup', amount: '0.2 mg' },
      { food: 'Macadamia nuts', serving: '1 oz (28g)', amount: '0.3 mg' },
      { food: 'Green peas', serving: '1/2 cup', amount: '0.2 mg' },
    ],
    rda: { men: '1.2 mg', women: '1.1 mg' },
    rdaMcg: 1200,
    deficiency: {
      name: 'Beriberi',
      symptoms: [
        'Peripheral neuropathy (dry beriberi)',
        'Heart failure and edema (wet beriberi)',
        'Muscle wasting and weakness',
        'Confusion and memory loss',
        'Wernicke-Korsakoff syndrome in alcoholics',
      ],
    },
    highRiskGroups: [
      'Chronic alcoholics',
      'Those on polished rice diets',
      'Bariatric surgery patients',
      'People with hyperemesis gravidarum',
    ],
    funFact: 'The term "beriberi" comes from the Sinhalese word meaning "I cannot, I cannot" — a reference to the severe weakness it causes.',
  },
  {
    id: 'vitamin-b2',
    name: 'Vitamin B2',
    subtitle: 'Riboflavin',
    chemicalName: 'Flavin adenine dinucleotide (FAD), Flavin mononucleotide (FMN)',
    category: 'water-soluble',
    categoryLabel: 'Water-Soluble',
    description: 'Cellular growth and development',
    longDescription:
      'Riboflavin (vitamin B2) serves as the precursor for two essential coenzymes — FAD and FMN — that participate in oxidation-reduction reactions throughout cellular metabolism. These are prosthetic groups for approximately 100 human enzymes (flavoproteins) involved in energy production, antioxidant defense, and fatty acid oxidation. Riboflavin is also required for the conversion of tryptophan to niacin and the activation of vitamin B6.',
    color: '#60a5fa',
    bgTint: 'rgba(96, 165, 250, 0.08)',
    functions: [
      'Energy production via FAD/FMN coenzymes',
      'Antioxidant function (glutathione reductase)',
      'Cellular growth and development',
      'Red blood cell formation',
      'Conversion of B6 and folate to active forms',
    ],
    foodSources: [
      'Dairy products and eggs',
      'Lean meats and organ meats',
      'Almonds and mushrooms',
      'Spinach and fortified grains',
    ],
    detailedFoodSources: [
      { food: 'Beef liver', serving: '3 oz (85g)', amount: '2.9 mg' },
      { food: 'Fortified cereals', serving: '1 cup', amount: '1.3 mg' },
      { food: 'Cottage cheese', serving: '1 cup', amount: '0.4 mg' },
      { food: 'Milk (2%)', serving: '1 cup', amount: '0.4 mg' },
      { food: 'Almonds', serving: '1 oz (28g)', amount: '0.3 mg' },
      { food: 'Beef (ribeye)', serving: '3 oz (85g)', amount: '0.3 mg' },
      { food: 'Eggs', serving: '1 large', amount: '0.2 mg' },
      { food: 'Spinach', serving: '1/2 cup cooked', amount: '0.2 mg' },
      { food: 'White mushrooms', serving: '1/2 cup', amount: '0.2 mg' },
      { food: 'Yogurt', serving: '1 cup', amount: '0.3 mg' },
    ],
    rda: { men: '1.3 mg', women: '1.1 mg' },
    rdaMcg: 1300,
    deficiency: {
      name: 'Ariboflavinosis',
      symptoms: [
        'Cracked lips (cheilitis)',
        'Inflammation of the tongue (glossitis)',
        'Redness at corners of mouth (angular stomatitis)',
        'Sore throat',
        'Sensitivity to light',
      ],
    },
    highRiskGroups: [
      'People on restricted diets',
      'Those with thyroid disorders',
      'Chronic alcoholics',
    ],
    funFact: 'Riboflavin is light-sensitive — milk stored in transparent containers can lose significant riboflavin through photodegradation.',
  },
  {
    id: 'vitamin-b3',
    name: 'Vitamin B3',
    subtitle: 'Niacin',
    chemicalName: 'Nicotinic acid, Nicotinamide, NAD+, NADP+',
    category: 'water-soluble',
    categoryLabel: 'Water-Soluble',
    description: 'DNA repair and cell signaling',
    longDescription:
      'Niacin (vitamin B3) encompasses two biologically active forms: nicotinic acid and nicotinamide. Both serve as precursors for the coenzymes NAD+ and NADP+, which are central to virtually all aspects of cellular energy metabolism. NAD+ functions primarily in catabolic reactions, while NADPH serves as a reducing agent in anabolic reactions. Beyond energy metabolism, NAD+ has emerged as a critical signaling molecule involved in DNA repair and gene expression.',
    color: '#2dd4bf',
    bgTint: 'rgba(45, 212, 191, 0.08)',
    functions: [
      'Energy metabolism (NAD+/NADP+ coenzymes)',
      'DNA repair and cell signaling',
      'Cholesterol synthesis regulation',
      'Skin and digestive system health',
      'Nervous system function',
    ],
    foodSources: [
      'Poultry, beef, and fish',
      'Peanuts and mushrooms',
      'Brown rice and fortified cereals',
      'Liver and organ meats',
    ],
    detailedFoodSources: [
      { food: 'Chicken breast', serving: '3 oz (85g)', amount: '10.3 mg' },
      { food: 'Tuna (light, canned)', serving: '3 oz (85g)', amount: '8.6 mg' },
      { food: 'Turkey breast', serving: '3 oz (85g)', amount: '10.0 mg' },
      { food: 'Salmon', serving: '3 oz (85g)', amount: '8.5 mg' },
      { food: 'Peanuts', serving: '1 oz (28g)', amount: '3.8 mg' },
      { food: 'Fortified cereals', serving: '1 cup', amount: '5.0 mg' },
      { food: 'Brown rice', serving: '1 cup cooked', amount: '2.9 mg' },
      { food: 'White mushrooms', serving: '1/2 cup', amount: '1.7 mg' },
      { food: 'Green peas', serving: '1/2 cup', amount: '1.2 mg' },
      { food: 'Potato (baked)', serving: '1 medium', amount: '2.3 mg' },
    ],
    rda: { men: '16 mg', women: '14 mg' },
    rdaMcg: 16000,
    upperLimit: '35 mg',
    deficiency: {
      name: 'Pellagra',
      symptoms: [
        'Dermatitis (photosensitive rash)',
        'Diarrhea',
        'Dementia and confusion',
        'Death if untreated',
        'The "4 Ds" of niacin deficiency',
      ],
    },
    highRiskGroups: [
      'Populations dependent on corn/maize',
      'Chronic alcoholics',
      'People with carcinoid syndrome',
    ],
    funFact: 'Pellagra killed more than 100,000 Americans between 1900 and 1940 before niacin fortification eliminated it.',
    sources: [
      { text: 'NIH Office of Dietary Supplements — Niacin', url: 'https://ods.od.nih.gov/factsheets/Niacin-HealthProfessional/' },
      { text: 'Cleveland Clinic — Pellagra', url: 'https://my.clevelandclinic.org/health/diseases/22377-pellagra' },
    ],
  },
  {
    id: 'vitamin-b5',
    name: 'Vitamin B5',
    subtitle: 'Pantothenic Acid',
    chemicalName: 'Coenzyme A (CoA), Acyl carrier protein (ACP)',
    category: 'water-soluble',
    categoryLabel: 'Water-Soluble',
    description: 'Fatty acid metabolism',
    longDescription:
      'Pantothenic acid (vitamin B5) is a structural component of coenzyme A (CoA) and the acyl carrier protein (ACP), two molecules absolutely essential for fatty acid metabolism, the Krebs cycle, and the synthesis of cholesterol, steroid hormones, and neurotransmitters. The "acetyl-CoA" molecule that serves as the entry point for the Krebs cycle contains pantothenic acid as its core structural element. Its name derives from the Greek "pantothen" meaning "from everywhere" — deficiency is extremely rare.',
    color: '#f472b6',
    bgTint: 'rgba(244, 114, 182, 0.08)',
    functions: [
      'Fatty acid metabolism',
      'Acetyl-CoA production for Krebs cycle',
      'Hormone and cholesterol synthesis',
      'Neurotransmitter formation',
      'Drug detoxification in liver',
    ],
    foodSources: [
      'Chicken, turkey, and beef',
      'Potatoes and oats',
      'Tomatoes and eggs',
      'Whole grains and legumes',
      'Avocado and mushrooms',
    ],
    detailedFoodSources: [
      { food: 'Chicken breast', serving: '3 oz (85g)', amount: '1.3 mg' },
      { food: 'Beef (ribeye)', serving: '3 oz (85g)', amount: '0.9 mg' },
      { food: 'Shiitake mushrooms', serving: '1/2 cup cooked', amount: '0.9 mg' },
      { food: 'Sunflower seeds', serving: '1 oz (28g)', amount: '1.1 mg' },
      { food: 'Avocado', serving: '1/2 fruit', amount: '1.0 mg' },
      { food: 'Potato (baked)', serving: '1 medium', amount: '0.7 mg' },
      { food: 'Eggs', serving: '1 large', amount: '0.7 mg' },
      { food: 'Brown rice', serving: '1 cup cooked', amount: '0.5 mg' },
      { food: 'Greek yogurt', serving: '1 cup', amount: '0.5 mg' },
      { food: 'Broccoli', serving: '1/2 cup cooked', amount: '0.4 mg' },
    ],
    rda: { men: '5 mg', women: '5 mg' },
    rdaMcg: 5000,
    deficiency: {
      name: 'Pantothenic Acid Deficiency',
      symptoms: [
        'Fatigue and irritability',
        'Numbness and tingling',
        'Muscle cramps',
        'Impaired coordination',
        'Gastroestinal disturbances',
      ],
    },
    highRiskGroups: [
      'People on highly restricted diets',
      'Those with severe malnutrition',
    ],
    funFact: 'Pantothenic acid is so widely distributed in foods that deficiency has only been documented experimentally.',
  },
  {
    id: 'vitamin-b6',
    name: 'Vitamin B6',
    subtitle: 'Pyridoxine',
    chemicalName: 'Pyridoxal 5\'-phosphate (PLP)',
    category: 'water-soluble',
    categoryLabel: 'Water-Soluble',
    description: 'Amino acid metabolism',
    longDescription:
      'Vitamin B6 refers to a group of six related compounds, with pyridoxal 5\'-phosphate (PLP) serving as the biologically active coenzyme. PLP is arguably the most functionally versatile of all vitamin-derived coenzymes, participating in more than 100 enzymatic reactions, predominantly involving amino acid metabolism. PLP-dependent enzymes catalyze transamination, decarboxylation (producing neurotransmitters), and glycogen phosphorylase reactions.',
    color: '#a3e635',
    bgTint: 'rgba(163, 230, 53, 0.08)',
    functions: [
      'Amino acid metabolism (100+ enzymes)',
      'Neurotransmitter synthesis (serotonin, dopamine, GABA)',
      'Glycogen metabolism',
      'Immune function',
      'Hemoglobin formation',
    ],
    foodSources: [
      'Poultry, fish, and organ meats',
      'Potatoes and chickpeas',
      'Bananas and fortified cereals',
      'Nuts and seeds',
    ],
    detailedFoodSources: [
      { food: 'Chickpeas', serving: '1 cup cooked', amount: '1.1 mg' },
      { food: 'Beef liver', serving: '3 oz (85g)', amount: '0.9 mg' },
      { food: 'Yellowfin tuna', serving: '3 oz (85g)', amount: '0.9 mg' },
      { food: 'Salmon', serving: '3 oz (85g)', amount: '0.6 mg' },
      { food: 'Potato', serving: '1 medium', amount: '0.4 mg' },
      { food: 'Banana', serving: '1 medium', amount: '0.4 mg' },
      { food: 'Chicken breast', serving: '3 oz (85g)', amount: '0.5 mg' },
      { food: 'Tofu', serving: '1/2 cup', amount: '0.2 mg' },
      { food: 'Brown rice', serving: '1 cup cooked', amount: '0.3 mg' },
      { food: 'Hazelnuts', serving: '1 oz (28g)', amount: '0.2 mg' },
    ],
    rda: { men: '1.3 mg (ages 19-50)', women: '1.3 mg (ages 19-50)' },
    rdaMcg: 1300,
    upperLimit: '100 mg',
    deficiency: {
      name: 'Vitamin B6 Deficiency',
      symptoms: [
        'Microcytic anemia',
        'Dermatitis (around eyes, nose, mouth)',
        'Depression and confusion',
        'Weakened immune function',
        'Peripheral neuropathy at high doses',
      ],
    },
    highRiskGroups: [
      'Chronic alcoholics',
      'People on isoniazid (TB treatment)',
      'Those with malabsorption syndromes',
      'Elderly adults',
    ],
    funFact: 'Chronic high-dose B6 supplementation (1-6 g/day) can cause sensory neuropathy — a toxicity usually reversible upon discontinuation.',
  },
  {
    id: 'vitamin-b7',
    name: 'Vitamin B7',
    subtitle: 'Biotin',
    chemicalName: 'Biotin-lysine complexes (biocytin)',
    category: 'water-soluble',
    categoryLabel: 'Water-Soluble',
    description: 'Gene expression regulation',
    longDescription:
      'Biotin (vitamin B7) functions as a cofactor for carboxylase enzymes involved in fatty acid synthesis, gluconeogenesis, and the catabolism of branched-chain amino acids. Biotin also regulates gene expression through its binding to histones, where it may influence chromatin structure and DNA repair. The body obtains biotin from dietary sources and from synthesis by bacteria in the large intestine. Raw egg whites contain avidin, a protein that binds biotin and prevents its absorption.',
    color: '#34d399',
    bgTint: 'rgba(52, 211, 153, 0.08)',
    functions: [
      'Fatty acid synthesis',
      'Gluconeogenesis',
      'Amino acid catabolism',
      'Gene expression regulation',
      'DNA repair via histone binding',
    ],
    foodSources: [
      'Egg yolks and liver',
      'Nuts and seeds',
      'Salmon and avocado',
      'Sweet potatoes',
    ],
    detailedFoodSources: [
      { food: 'Beef liver', serving: '3 oz (85g)', amount: '30.8 mcg' },
      { food: 'Egg yolk', serving: '1 whole', amount: '10.0 mcg' },
      { food: 'Sunflower seeds', serving: '1/4 cup', amount: '7.8 mcg' },
      { food: 'Almonds', serving: '1/4 cup', amount: '3.6 mcg' },
      { food: 'Salmon', serving: '3 oz (85g)', amount: '5.0 mcg' },
      { food: 'Avocado', serving: '1/2 fruit', amount: '1.9 mcg' },
      { food: 'Sweet potato', serving: '1 medium', amount: '2.4 mcg' },
      { food: 'Tuna (canned)', serving: '3 oz (85g)', amount: '0.6 mcg' },
      { food: 'Pork chop', serving: '3 oz (85g)', amount: '3.8 mcg' },
      { food: 'Cauliflower', serving: '1 cup raw', amount: '0.2 mcg' },
    ],
    rda: { men: '30 mcg', women: '30 mcg' },
    rdaMcg: 30,
    deficiency: {
      name: 'Biotin Deficiency',
      symptoms: [
        'Hair loss (alopecia)',
        'Scaly red rash (around eyes, nose, mouth)',
        'Conjunctivitis',
        'Depression and lethargy',
        'Neurological symptoms',
      ],
    },
    highRiskGroups: [
      'People consuming raw egg whites regularly',
      'Those on long-term antibiotic therapy',
      'Pregnant and breastfeeding women',
    ],
    funFact: 'Raw egg whites contain avidin, a protein that binds biotin with extremely high affinity. Cooking denatures avidin and eliminates this effect.',
  },
  {
    id: 'vitamin-b9',
    name: 'Vitamin B9',
    subtitle: 'Folate',
    chemicalName: 'Tetrahydrofolate (THF), Folic acid',
    category: 'water-soluble',
    categoryLabel: 'Water-Soluble',
    description: 'Cell division and DNA synthesis',
    longDescription:
      'Folate (vitamin B9) exists naturally in foods as polyglutamate forms, while the synthetic form used in supplements is folic acid. In the body, folic acid is converted to tetrahydrofolate (THF), which serves as a carrier of one-carbon units in biosynthetic reactions essential for DNA, RNA, and amino acid synthesis. Because rapidly dividing cells have high requirements for DNA synthesis, folate is particularly critical during pregnancy to reduce the risk of neural tube defects.',
    color: '#818cf8',
    bgTint: 'rgba(129, 140, 248, 0.08)',
    functions: [
      'DNA and RNA synthesis',
      'Cell division and growth',
      'Amino acid metabolism',
      'Red blood cell formation',
      'Fetal neural tube development',
    ],
    foodSources: [
      'Dark leafy greens (spinach, kale)',
      'Legumes (lentils, chickpeas)',
      'Asparagus and avocado',
      'Fortified grains and cereals',
      'Liver and citrus fruits',
    ],
    detailedFoodSources: [
      { food: 'Beef liver', serving: '3 oz (85g)', amount: '215 mcg' },
      { food: 'Spinach', serving: '1/2 cup cooked', amount: '131 mcg' },
      { food: 'Lentils', serving: '1/2 cup cooked', amount: '181 mcg' },
      { food: 'Asparagus', serving: '4 spears', amount: '89 mcg' },
      { food: 'Fortified cereals', serving: '1 cup', amount: '100-400 mcg' },
      { food: 'Chickpeas', serving: '1/2 cup', amount: '141 mcg' },
      { food: 'Avocado', serving: '1/2 fruit', amount: '81 mcg' },
      { food: 'Broccoli', serving: '1/2 cup cooked', amount: '52 mcg' },
      { food: 'Orange juice (fortified)', serving: '1 cup', amount: '110 mcg' },
      { food: 'Eggs', serving: '1 large', amount: '22 mcg' },
    ],
    rda: { men: '400 mcg', women: '400 mcg; 600 mcg during pregnancy' },
    rdaMcg: 400,
    upperLimit: '1,000 mcg',
    deficiency: {
      name: 'Folate Deficiency',
      symptoms: [
        'Megaloblastic anemia',
        'Fatigue and weakness',
        'Neural tube defects in fetus',
        'Elevated homocysteine levels',
        'Tongue swelling (glossitis)',
      ],
    },
    highRiskGroups: [
      'Women of childbearing age',
      'Pregnant women',
      'People with malabsorption',
      'Chronic alcoholics',
    ],
    funFact: 'Folic acid fortification of grains has reduced neural tube defect incidence by 20-50% in countries that mandate it.',
    sources: [
      { text: 'NIH Office of Dietary Supplements — Folate', url: 'https://ods.od.nih.gov/factsheets/Folate-HealthProfessional/' },
      { text: 'CDC — Folic Acid', url: 'https://www.cdc.gov/ncbddd/folicacid/index.html' },
    ],
  },
  {
    id: 'vitamin-b12',
    name: 'Vitamin B12',
    subtitle: 'Cobalamin',
    chemicalName: 'Methylcobalamin, Adenosylcobalamin',
    category: 'water-soluble',
    categoryLabel: 'Water-Soluble',
    description: 'Neurological function',
    longDescription:
      'Vitamin B12 (cobalamin) is the largest and most chemically complex of all vitamins, containing a cobalt atom at the center of a corrin ring structure. It is synthesized exclusively by bacteria and enters the human food chain through animal products. B12 is unique among vitamins in that its absorption requires intrinsic factor — a glycoprotein secreted by stomach parietal cells. The body stores approximately 2-5 mg in the liver, which can sustain normal function for 2-5 years.',
    color: '#c084fc',
    bgTint: 'rgba(192, 132, 252, 0.08)',
    functions: [
      'DNA synthesis',
      'Red blood cell formation',
      'Neurological function and myelin maintenance',
      'Methylation reactions',
      'Fatty acid metabolism',
    ],
    foodSources: [
      'Meat, poultry, and fish',
      'Eggs and dairy products',
      'Clams and organ meats',
      'Fortified cereals and plant milks',
      'Nutritional yeast',
    ],
    detailedFoodSources: [
      { food: 'Clams', serving: '3 oz (85g)', amount: '84.1 mcg' },
      { food: 'Beef liver', serving: '3 oz (85g)', amount: '70.7 mcg' },
      { food: 'Rainbow trout', serving: '3 oz (85g)', amount: '5.4 mcg' },
      { food: 'Salmon', serving: '3 oz (85g)', amount: '4.8 mcg' },
      { food: 'Tuna (canned)', serving: '3 oz (85g)', amount: '2.5 mcg' },
      { food: 'Beef (ground, 90% lean)', serving: '3 oz (85g)', amount: '2.4 mcg' },
      { food: 'Milk (2%)', serving: '1 cup', amount: '1.2 mcg' },
      { food: 'Eggs', serving: '1 large', amount: '0.6 mcg' },
      { food: 'Chicken breast', serving: '3 oz (85g)', amount: '0.3 mcg' },
      { food: 'Fortified nutritional yeast', serving: '2 tbsp', amount: '8.0 mcg' },
    ],
    rda: { men: '2.4 mcg', women: '2.4 mcg' },
    rdaMcg: 2.4,
    deficiency: {
      name: 'Vitamin B12 Deficiency',
      symptoms: [
        'Megaloblastic anemia',
        'Fatigue and weakness',
        'Numbness and tingling in extremities',
        'Difficulty walking and balance problems',
        'Memory loss and cognitive changes',
      ],
    },
    highRiskGroups: [
      'Vegans and strict vegetarians',
      'Adults over 50',
      'People with pernicious anemia',
      'Those who\'ve had gastric bypass surgery',
      'People taking metformin or PPIs',
    ],
    funFact: 'B12 is found almost exclusively in animal products. Vegans must supplement to avoid deficiency, which can take 2-5 years to develop.',
  },
  {
    id: 'vitamin-c',
    name: 'Vitamin C',
    subtitle: 'Ascorbic Acid',
    chemicalName: 'L-ascorbic acid, L-dehydroascorbic acid',
    category: 'water-soluble',
    categoryLabel: 'Water-Soluble',
    description: 'Collagen synthesis and immunity',
    longDescription:
      'Vitamin C (L-ascorbic acid) is a water-soluble carbohydrate that occupies a singular position in human biochemistry. Humans, along with other primates and guinea pigs, have lost the ability to synthesize vitamin C due to mutations in the GLO gene, making dietary intake absolutely essential. Its most significant role is as a cofactor for prolyl and lysyl hydroxylase enzymes that create collagen\'s triple-helix structure. As an antioxidant, it scavenges reactive oxygen species and regenerates vitamin E.',
    color: '#fb7185',
    bgTint: 'rgba(251, 113, 133, 0.08)',
    functions: [
      'Collagen synthesis (wound healing)',
      'Antioxidant defense',
      'Immune system support',
      'Iron absorption enhancement',
      'Neurotransmitter synthesis (norepinephrine)',
    ],
    foodSources: [
      'Citrus fruits (oranges, lemons, grapefruit)',
      'Strawberries and kiwi',
      'Bell peppers (especially red)',
      'Broccoli and tomatoes',
      'Potatoes and papaya',
    ],
    detailedFoodSources: [
      { food: 'Red bell pepper', serving: '1/2 cup raw', amount: '95 mg' },
      { food: 'Orange juice', serving: '3/4 cup', amount: '93 mg' },
      { food: 'Kiwifruit', serving: '1 fruit', amount: '64 mg' },
      { food: 'Strawberries', serving: '1/2 cup', amount: '49 mg' },
      { food: 'Broccoli', serving: '1/2 cup cooked', amount: '51 mg' },
      { food: 'Orange', serving: '1 medium', amount: '70 mg' },
      { food: 'Grapefruit', serving: '1/2 fruit', amount: '38 mg' },
      { food: 'Tomato', serving: '1 medium raw', amount: '17 mg' },
      { food: 'Potato (baked)', serving: '1 medium', amount: '17 mg' },
      { food: 'Papaya', serving: '1 cup cubed', amount: '88 mg' },
    ],
    rda: { men: '90 mg', women: '75 mg; +35 mg for smokers' },
    rdaMcg: 90000,
    upperLimit: '2,000 mg',
    deficiency: {
      name: 'Scurvy',
      symptoms: [
        'Bleeding gums and loose teeth',
        'Poor wound healing',
        'Bruising and petechiae',
        'Joint pain and corkscrew hairs',
        'Fatigue and depression',
      ],
    },
    highRiskGroups: [
      'Smokers',
      'People with poor fruit/vegetable intake',
      'Those with malabsorption disorders',
      'Elderly individuals',
    ],
    funFact: 'Scurvy killed more than 2 million sailors between 1500 and 1800. British sailors got the nickname "limeys" from citrus juice rations.',
    sources: [
      { text: 'NIH Office of Dietary Supplements — Vitamin C', url: 'https://ods.od.nih.gov/factsheets/VitaminC-HealthProfessional/' },
      { text: 'Bartholomew M. James Lind and scurvy. BMJ. 2002.', url: 'https://pubmed.ncbi.nlm.nih.gov/12130572/' },
    ],
  },
]

export function getVitaminById(id: string): Vitamin | undefined {
  return vitamins.find((v) => v.id === id)
}

/**

 * Parse a food amount string to a numeric value in mcg.
 * Handles formats like: '6,582 mcg', '1,403 mcg', '15 mg', 'Varies by skin type'
 * For Vitamin D IU: 1 IU = 0.025 mcg
 * For Vitamin A IU: 1 IU = 0.3 mcg
 * For Vitamin E IU: 1 IU = 0.67 mg = 670 mcg
 */
export function parseAmountToMcg(amount: string, vitaminId: string): number | null {
  const trimmed = amount.trim().toLowerCase()
  if (trimmed.includes('varies')) return null

  // Extract the first numeric value (handles commas, decimals, ranges like "100-400")
  const match = trimmed.match(/([0-9,]+(?:\.[0-9]+)?)/)
  if (!match) return null

  let value = parseFloat(match[1].replace(/,/g, ''))
  if (isNaN(value)) return null

  // Handle ranges by taking the average (e.g., "100-400 mcg")
  const rangeMatch = trimmed.match(/([0-9,]+(?:\.[0-9]+)?)\s*-\s*([0-9,]+(?:\.[0-9]+)?)/)
  if (rangeMatch) {
    const low = parseFloat(rangeMatch[1].replace(/,/g, ''))
    const high = parseFloat(rangeMatch[2].replace(/,/g, ''))
    if (!isNaN(low) && !isNaN(high)) {
      value = (low + high) / 2
    }
  }

  // Detect unit
  const hasMcg = trimmed.includes('mcg') || trimmed.includes('μg')
  const hasMg = trimmed.includes('mg')
  const hasIU = trimmed.includes('iu')

  if (hasIU) {
    if (vitaminId === 'vitamin-a') {
      value = value * 0.3 // 1 IU = 0.3 mcg retinol
    } else if (vitaminId === 'vitamin-d') {
      value = value * 0.025 // 1 IU = 0.025 mcg
    } else if (vitaminId === 'vitamin-e') {
      value = value * 0.67 * 1000 // 1 IU = 0.67 mg = 670 mcg
    } else {
      return null // Unknown IU conversion
    }
  } else if (hasMg) {
    value = value * 1000 // mg to mcg
  } else if (!hasMcg) {
    return null // Unknown unit
  }

  return value
}

/**
 * Calculate the percentage of adult male RDA for a given food amount.
 * Returns null if parsing fails.
 */
export function getRdaPercentage(amount: string, rdaMcg: number, vitaminId: string): number | null {
  const mcg = parseAmountToMcg(amount, vitaminId)
  if (mcg === null || rdaMcg <= 0) return null
  return Math.round((mcg / rdaMcg) * 100)
}

export interface RdaStatus {
  label: string
  color: string
  bgColor: string
}

/**
 * Get a color-coded status label for a given RDA percentage.
 */
export function getRdaStatus(percent: number | null, lang: 'en' | 'ko' = 'en'): RdaStatus | null {
  if (percent === null) return null
  if (percent < 50) {
    return {
      label: lang === 'ko' ? '부족' : 'Not Enough',
      color: '#3b82f6',
      bgColor: 'rgba(59, 130, 246, 0.1)',
    }
  }
  if (percent <= 100) {
    return {
      label: lang === 'ko' ? '적정' : 'OK',
      color: '#22c55e',
      bgColor: 'rgba(34, 197, 94, 0.1)',
    }
  }
  return {
    label: lang === 'ko' ? '과다' : 'Too Much',
    color: '#ef4444',
    bgColor: 'rgba(239, 68, 68, 0.1)',
  }
}

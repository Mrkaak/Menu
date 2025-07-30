// Menu data structure
export interface MenuItem {
  id: string;
  name: {
    en: string;
    ar: string;
  };
  description: {
    en: string;
    ar: string;
  };
  priceUSD: number;
  priceLBP: number;
  ingredients: {
    en: string;
    ar: string;
  };
  category: 'kaak' | 'beverages' | 'desserts';
  prepTime?: number; // in minutes
  image?: string;
  addOns?: string[];
}

export interface AddOn {
  id: string;
  name: {
    en: string;
    ar: string;
  };
  priceUSD: number;
  priceLBP: number;
}

export const addOns: AddOn[] = [
  {
    id: 'ham',
    name: { en: 'Add Ham', ar: 'إضافة لحم خنزير' },
    priceUSD: 1.0,
    priceLBP: 90000
  },
  {
    id: 'turkey',
    name: { en: 'Add Turkey', ar: 'إضافة ديك رومي' },
    priceUSD: 1.0,
    priceLBP: 90000
  },
  {
    id: 'vegetables',
    name: { en: 'Add Vegetables', ar: 'إضافة خضار' },
    priceUSD: 0.6,
    priceLBP: 54000
  },
  {
    id: 'mozzarella',
    name: { en: 'Add Mozzarella', ar: 'إضافة موزاريلا' },
    priceUSD: 0.8,
    priceLBP: 72000
  },
  {
    id: 'kashkawan',
    name: { en: 'Add Kashkawan', ar: 'إضافة قشقوان' },
    priceUSD: 1.0,
    priceLBP: 90000
  },
  {
    id: 'cheddar',
    name: { en: 'Add Cheddar', ar: 'إضافة شيدر' },
    priceUSD: 1.0,
    priceLBP: 90000
  }
];

export const menuItems: MenuItem[] = [
  {
    id: 'accawi-cheese',
    name: { en: 'Accawi Cheese', ar: 'جبنة عكاوي' },
    description: { en: 'Traditional Lebanese cheese kaak', ar: 'كعك بالجبنة العكاوي التقليدية' },
    priceUSD: 3.0,
    priceLBP: 270000,
    ingredients: { en: 'Accawi cheese', ar: 'جبنة عكاوي' },
    category: 'kaak',
    prepTime: 8,
    addOns: ['vegetables', 'mozzarella', 'kashkawan', 'cheddar', 'ham', 'turkey'],
    // Hardcoded image example
    image: '/kaak-accawi.jpeg'
  },
  {
    id: '4cheese-kaak',
    name: { en: '4 Cheese Kaak', ar: 'كعك أربع أجبان' },
    description: { en: 'Rich blend of four premium cheeses', ar: 'خليط غني من أربعة أجبان فاخرة' },
    priceUSD: 5.0,
    priceLBP: 450000,
    ingredients: { en: 'Accawi, mozzarella, kashkawan, cheddar', ar: 'عكاوي، موزاريلا، قشقوان، شيدر' },
    category: 'kaak',
    prepTime: 10,
    addOns: ['vegetables', 'mozzarella', 'kashkawan', 'cheddar', 'ham', 'turkey'],
    // Dynamic image example
    image: `/4cheese-kaak.png`
  },
  {
    id: 'kafta-cheese',
    name: { en: 'Kafta & Cheese', ar: 'كفتة وجبنة' },
    description: { en: 'Grilled kafta with melted cheese', ar: 'كفتة مشوية مع الجبنة المذابة' },
    priceUSD: 6.5,
    priceLBP: 585000,
    ingredients: { en: 'Kafta, mozzarella cheese (pickles, tomato, mayo)', ar: 'كفتة، جبنة موزاريلا (مخلل، طماطم، مايونيز)' },
    category: 'kaak',
    prepTime: 12,
    addOns: ['vegetables', 'mozzarella', 'kashkawan', 'cheddar', 'ham', 'turkey'],
    image: `/kafta-cheese-kaak.png`
  },
  {
    id: 'cheese-hotdog',
    name: { en: 'Cheese Hotdog', ar: 'هوت دوغ بالجبنة' },
    description: { en: 'Classic hotdog with melted cheese', ar: 'هوت دوغ كلاسيكي مع الجبنة المذابة' },
    priceUSD: 6.0,
    priceLBP: 540000,
    ingredients: { en: 'Hotdog, ketchup, mustard, cheddar', ar: 'هوت دوغ، كاتشب، خردل، شيدر' },
    category: 'kaak',
    prepTime: 8,
    addOns: ['vegetables', 'mozzarella', 'kashkawan', 'cheddar', 'ham', 'turkey'],
    image: `/cheeseHotDog-kaak.jpeg`
  },
  {
    id: 'kashkawan',
    name: { en: 'Kashkawan', ar: 'قشقوان' },
    description: { en: 'Traditional Lebanese kashkawan cheese', ar: 'جبنة قشقوان لبنانية تقليدية' },
    priceUSD: 3.5,
    priceLBP: 315000,
    ingredients: { en: 'Kashkawan cheese', ar: 'جبنة قشقوان' },
    category: 'kaak',
    prepTime: 8,
    addOns: ['vegetables', 'mozzarella', 'kashkawan', 'cheddar', 'ham', 'turkey'],
    image: `/kashkawan-kaak.jpeg`
  },
  {
    id: 'sujok-cheese',
    name: { en: 'Sujok & Cheese', ar: 'سجق وجبنة' },
    description: { en: 'Spicy sujok sausage with cheese', ar: 'سجق حار مع الجبنة' },
    priceUSD: 6.5,
    priceLBP: 585000,
    ingredients: { en: 'Sujok, mozzarella cheese (tomato, pickles, mayo)', ar: 'سجق، جبنة موزاريلا (طماطم، مخلل، مايونيز)' },
    category: 'kaak',
    prepTime: 10,
    addOns: ['vegetables', 'mozzarella', 'kashkawan', 'cheddar', 'ham', 'turkey'],
    image: `/sujok-cheese-kaak.png`
  },
  {
    id: 'halloum',
    name: { en: 'Halloum', ar: 'حلوم' },
    description: { en: 'Fresh halloum cheese with vegetables', ar: 'جبنة حلوم طازجة مع الخضار' },
    priceUSD: 3.5,
    priceLBP: 315000,
    ingredients: { en: 'Halloum Cheese (vegetables)', ar: 'جبنة حلوم (خضار)' },
    category: 'kaak',
    prepTime: 8,
    addOns: ['vegetables', 'mozzarella', 'kashkawan', 'cheddar', 'ham', 'turkey'],
    image: `/halloum-kaak.png`
  },
  {
    id: 'halloum-kashkawan',
    name: { en: 'Halloum Kashkawan', ar: 'حلوم قشقوان' },
    description: { en: 'Perfect blend of halloum and kashkawan', ar: 'خليط مثالي من الحلوم والقشقوان' },
    priceUSD: 4.5,
    priceLBP: 405000,
    ingredients: { en: 'Halloum, Kashkawan', ar: 'حلوم، قشقوان' },
    category: 'kaak',
    prepTime: 9,
    addOns: ['vegetables', 'mozzarella', 'kashkawan', 'cheddar', 'ham', 'turkey'],
    image: `/halloum-kashkawan-kaak.png`
  },
  {
    id: 'halloum-pesto',
    name: { en: 'Halloum Pesto', ar: 'حلوم بيستو' },
    description: { en: 'Halloum cheese with aromatic pesto sauce', ar: 'جبنة حلوم مع صلصة البيستو العطرة' },
    priceUSD: 4.0,
    priceLBP: 360000,
    ingredients: { en: 'Halloum, Pesto Sauce', ar: 'حلوم، صلصة بيستو' },
    category: 'kaak',
    prepTime: 9,
    addOns: ['vegetables', 'mozzarella', 'kashkawan', 'cheddar', 'ham', 'turkey'],
    image: `/halloum-pesto-kaak.png`
  },
  {
    id: 'turkey-cheese',
    name: { en: 'Turkey & Cheese', ar: 'ديك رومي وجبنة' },
    description: { en: 'Sliced turkey with melted cheese', ar: 'شرائح ديك رومي مع الجبنة المذابة' },
    priceUSD: 4.5,
    priceLBP: 405000,
    ingredients: { en: 'Mozzarella cheese, turkey', ar: 'جبنة موزاريلا، ديك رومي' },
    category: 'kaak',
    prepTime: 9,
    addOns: ['vegetables', 'cheddar', 'mozzarella', 'kashkawan', 'ham', 'turkey'],
    image: `/turkeycheese-kaak.jpeg`
  },
  {
    id: 'ham-cheese',
    name: { en: 'Ham & Cheese', ar: 'لحم خنزير وجبنة' },
    description: { en: 'Classic ham and cheese combination', ar: 'مزيج كلاسيكي من اللحم والجبنة' },
    priceUSD: 4.5,
    priceLBP: 405000,
    ingredients: { en: 'Mozzarella cheese, ham', ar: 'جبنة موزاريلا، لحم خنزير' },
    category: 'kaak',
    prepTime: 9,
    addOns: ['vegetables', 'cheddar', 'mozzarella', 'kashkawan', 'ham', 'turkey'],
    image: `/hamcheese-kaak.png`
  },
  {
    id: 'plain-kaak',
    name: { en: 'Plain Kaak', ar: 'كعك سادة' },
    description: { en: 'Traditional 25cm plain kaak', ar: 'كعك سادة تقليدي 25 سم' },
    priceUSD: 0.8,
    priceLBP: 72000,
    ingredients: { en: 'Plain kaak 25cm', ar: 'كعك سادة 25 سم' },
    category: 'kaak',
    prepTime: 5,
    addOns: ['vegetables', 'mozzarella', 'kashkawan', 'cheddar', 'ham', 'turkey'],
    image: `/plain-kaak.jpeg`
  },
  {
    id: 'fajita',
    name: { en: 'Fajita', ar: 'فاهيتا' },
    description: { en: 'Marinated chicken breast with cheese and vegetables', ar: 'صدر دجاج متبل مع الجبنة والخضار' },
    priceUSD: 6.5,
    priceLBP: 585000,
    ingredients: { en: 'Special marinated chicken breast, mozzarella', ar: 'صدر دجاج متبل خاص، موزاريلا' },
    category: 'kaak',
    prepTime: 12,
    addOns: ['vegetables', 'mozzarella', 'kashkawan', 'cheddar', 'ham', 'turkey'],
    image: `/fajita-kaak.png`
  },
  {
    id: 'labneh-kawarma',
    name: { en: 'Labneh & Kawarma', ar: 'لبنة وقاورما' },
    description: { en: 'Creamy labneh with traditional kawarma', ar: 'لبنة كريمية مع القاورما التقليدية' },
    priceUSD: 5.5,
    priceLBP: 495000,
    ingredients: { en: 'Labneh, Kawarma', ar: 'لبنة، قاورما' },
    category: 'kaak',
    prepTime: 10,
    addOns: ['vegetables', 'mozzarella', 'kashkawan', 'cheddar', 'ham', 'turkey'],
    image: `/labneh-kawarma-kaak.png`
  },
  {
    id: 'labneh-makdous',
    name: { en: 'Labneh w Makdous', ar: 'لبنة ومقدوس' },
    description: { en: 'Creamy labneh with pickled baby eggplant', ar: 'لبنة كريمية مع المقدوس' },
    priceUSD: 3.5,
    priceLBP: 315000,
    ingredients: { en: 'Labneh, Makdous', ar: 'لبنة، مقدوس' },
    category: 'kaak',
    prepTime: 8,
    addOns: ['vegetables', 'mozzarella', 'kashkawan', 'cheddar', 'ham', 'turkey'],
    image: `/labneh-makdous-kaak.png`
  },
  {
    id: 'labneh-zaatar',
    name: { en: 'Labneh w Zaatar', ar: 'لبنة وزعتر' },
    description: { en: 'Traditional labneh with aromatic zaatar', ar: 'لبنة تقليدية مع الزعتر العطر' },
    priceUSD: 3.0,
    priceLBP: 270000,
    ingredients: { en: 'Labneh, zaatar (vegetables)', ar: 'لبنة، زعتر (خضار)' },
    category: 'kaak',
    prepTime: 8,
    addOns: ['vegetables', 'mozzarella', 'kashkawan', 'cheddar', 'ham', 'turkey'],
    image: `/labneh-zaatar-kaak.jpeg`
  },
  {
    id: 'kawarma-cheese',
    name: { en: 'Kawarma & Cheese', ar: 'قاورما وجبنة' },
    description: { en: 'Traditional kawarma with melted cheese', ar: 'قاورما تقليدية مع الجبنة المذابة' },
    priceUSD: 6.0,
    priceLBP: 540000,
    ingredients: { en: 'Kawarma, cheese', ar: 'قاورما، جبنة' },
    category: 'kaak',
    prepTime: 11,
    addOns: ['vegetables', 'mozzarella', 'kashkawan', 'cheddar', 'ham', 'turkey'],
    image: `/kawarma-cheese-kaak.png`
  },
  {
    id: 'mix-cheese',
    name: { en: 'Mix Cheese', ar: 'جبنة مشكلة' },
    description: { en: 'Perfect blend of mozzarella and accawi', ar: 'خليط مثالي من الموزاريلا والعكاوي' },
    priceUSD: 3.8,
    priceLBP: 342000,
    ingredients: { en: 'Mozzarella cheese, accawi cheese', ar: 'جبنة موزاريلا، جبنة عكاوي' },
    category: 'kaak',
    prepTime: 9,
    addOns: ['vegetables', 'mozzarella', 'kashkawan', 'cheddar', 'ham', 'turkey'],
    image: `/kashkawan-kaak.jpeg`
  },
  {
    id: 'nutella',
    name: { en: 'Nutella', ar: 'نوتيلا' },
    description: { en: 'Sweet kaak with creamy Nutella', ar: 'كعك حلو مع النوتيلا الكريمية' },
    priceUSD: 3.5,
    priceLBP: 315000,
    ingredients: { en: 'Nutella', ar: 'نوتيلا' },
    category: 'desserts',
    prepTime: 6,
    image: `/nutella-kaak.png`
  },
  {
    id: 'peanut-nutella',
    name: { en: 'Peanut Butter & Nutella', ar: 'زبدة فول سوداني ونوتيلا' },
    description: { en: 'Homemade peanut butter with Nutella', ar: 'زبدة فول سوداني محلية الصنع مع النوتيلا' },
    priceUSD: 4.0,
    priceLBP: 360000,
    ingredients: { en: 'Homemade Peanut butter, nutella', ar: 'زبدة فول سوداني محلية الصنع، نوتيلا' },
    category: 'desserts',
    prepTime: 7,
    image: `/peanut-nutella-kaak.png`
  },
  {
    id: 'choco-mozzarella',
    name: { en: 'Choco Mozzarella', ar: 'شوكولاتة موزاريلا' },
    description: { en: 'Unique blend of Nutella and mozzarella', ar: 'خليط فريد من النوتيلا والموزاريلا' },
    priceUSD: 4.3,
    priceLBP: 387000,
    ingredients: { en: 'Nutella, mozzarella cheese', ar: 'نوتيلا، جبنة موزاريلا' },
    category: 'desserts',
    prepTime: 8,
    image: `/choco-mozzarella-kaak.png`
  },
  {
    id: 'picon',
    name: { en: 'Picon', ar: 'بيكون' },
    description: { en: '4 pieces of crispy picon', ar: '4 قطع بيكون مقرمش' },
    priceUSD: 3.0,
    priceLBP: 270000,
    ingredients: { en: '4 Piece picon', ar: '4 قطع بيكون' },
    category: 'kaak',
    prepTime: 8,
    addOns: ['vegetables', 'mozzarella', 'kashkawan', 'cheddar', 'ham', 'turkey'],
    image: `/picon-kaak.jpeg`
  },
  {
    id: 'picon-kashkawan',
    name: { en: 'Picon Kashkawan', ar: 'بيكون قشقوان' },
    description: { en: '4 pieces picon with kashkawan cheese', ar: '4 قطع بيكون مع جبنة قشقوان' },
    priceUSD: 4.0,
    priceLBP: 360000,
    ingredients: { en: '4 Piece picon, kashkawan cheese', ar: '4 قطع بيكون، جبنة قشقوان' },
    category: 'kaak',
    prepTime: 9,
    addOns: ['vegetables', 'mozzarella', 'kashkawan', 'cheddar', 'ham', 'turkey'],
    image: `/picon-kaak.jpeg`
  },
  {
    id: 'pizza',
    name: { en: 'Pizza', ar: 'بيتزا' },
    description: { en: 'Traditional pizza with premium toppings', ar: 'بيتزا تقليدية مع إضافات فاخرة' },
    priceUSD: 6.5,
    priceLBP: 585000,
    ingredients: { en: 'Pizza sauce, mozzarella cheese, ham, corn, olives', ar: 'صلصة بيتزا، جبنة موزاريلا، لحم خنزير، ذرة، زيتون' },
    category: 'kaak',
    prepTime: 12,
    addOns: ['vegetables', 'mozzarella', 'kashkawan', 'cheddar', 'ham', 'turkey'],
    image: `/pizza-kaak.png`
  },
  // Beverages
  {
    id: 'soft-drinks',
    name: { en: 'Soft Drinks', ar: 'مشروبات غازية' },
    description: { en: 'Refreshing carbonated beverages', ar: 'مشروبات غازية منعشة' },
    priceUSD: 1.11,
    priceLBP: 99900,
    ingredients: { en: 'Carbonated soft drink', ar: 'مشروب غازي' },
    category: 'beverages',
    prepTime: 2,
    image: `/soft-drinks.jpg`
  },
  {
    id: 'ice-tea',
    name: { en: 'Ice Tea', ar: 'شاي مثلج' },
    description: { en: 'Cool and refreshing iced tea', ar: 'شاي مثلج بارد ومنعش' },
    priceUSD: 1.11,
    priceLBP: 99900,
    ingredients: { en: 'Iced tea', ar: 'شاي مثلج' },
    category: 'beverages',
    prepTime: 3,
    image: `/ice-tea.png`
  },
  {
    id: 'xtra-juice',
    name: { en: 'Xtra Juice', ar: 'عصير إكسترا' },
    description: { en: 'Premium fruit juice', ar: 'عصير فواكه فاخر' },
    priceUSD: 0.75,
    priceLBP: 67500,
    ingredients: { en: 'Fruit juice', ar: 'عصير فواكه' },
    category: 'beverages',
    prepTime: 2
  },
  {
    id: 'pyramide',
    name: { en: 'Pyramide', ar: 'بيراميد' },
    description: { en: 'Classic pyramide drink', ar: 'مشروب بيراميد كلاسيكي' },
    priceUSD: 0.33,
    priceLBP: 29700,
    ingredients: { en: 'Pyramide drink', ar: 'مشروب بيراميد' },
    category: 'beverages',
    prepTime: 2
  },
  {
    id: 'mr-juicy',
    name: { en: 'Mr Juicy', ar: 'مستر جوسي' },
    description: { en: 'Refreshing Mr Juicy drink', ar: 'مشروب مستر جوسي منعش' },
    priceUSD: 0.55,
    priceLBP: 49500,
    ingredients: { en: 'Mr Juicy drink', ar: 'مشروب مستر جوسي' },
    category: 'beverages',
    prepTime: 2
  },
  {
    id: 'dark-bleue',
    name: { en: 'Dark Bleue', ar: 'دارك بلو' },
    description: { en: 'Premium Dark Bleue beverage', ar: 'مشروب دارك بلو فاخر' },
    priceUSD: 1.11,
    priceLBP: 99900,
    ingredients: { en: 'Dark Bleue drink', ar: 'مشروب دارك بلو' },
    category: 'beverages',
    prepTime: 2
  },
  {
    id: 'luna-ice-coffee',
    name: { en: 'Luna Ice Coffee', ar: 'قهوة لونا مثلجة' },
    description: { en: 'Refreshing iced coffee', ar: 'قهوة مثلجة منعشة' },
    priceUSD: 1.11,
    priceLBP: 99900,
    ingredients: { en: 'Iced coffee', ar: 'قهوة مثلجة' },
    category: 'beverages',
    prepTime: 4
  },
  {
    id: 'nescafe-3in1',
    name: { en: 'Nescafe 3in1', ar: 'نسكافيه 3 في 1' },
    description: { en: 'Instant coffee with milk and sugar', ar: 'قهوة سريعة مع الحليب والسكر' },
    priceUSD: 0.8,
    priceLBP: 72000,
    ingredients: { en: 'Instant coffee 3in1', ar: 'قهوة سريعة 3 في 1' },
    category: 'beverages',
    prepTime: 3,
    image: `/nescafe-3in1.jpg`
  },
  {
    id: 'nescafe-2in1',
    name: { en: 'Nescafe 2in1', ar: 'نسكافيه 2 في 1' },
    description: { en: 'Instant coffee with milk', ar: 'قهوة سريعة مع الحليب' },
    priceUSD: 0.8,
    priceLBP: 72000,
    ingredients: { en: 'Instant coffee 2in1', ar: 'قهوة سريعة 2 في 1' },
    category: 'beverages',
    prepTime: 3,
    image: `/nescafe-3in1.jpg`
  },
  {
    id: 'cappuccino',
    name: { en: 'Cappuccino', ar: 'كابتشينو' },
    description: { en: 'Rich and creamy cappuccino', ar: 'كابتشينو غني وكريمي' },
    priceUSD: 0.8,
    priceLBP: 72000,
    ingredients: { en: 'Cappuccino', ar: 'كابتشينو' },
    category: 'beverages',
    prepTime: 4
  },
  {
    id: 'soft-drink-glass',
    name: { en: 'Soft Drink Glass', ar: 'مشروب غازي كاس' },
    description: { en: 'Glass bottle soft drink', ar: 'مشروب غازي زجاجة' },
    priceUSD: 0.8,
    priceLBP: 72000,
    ingredients: { en: 'Glass bottle soft drink', ar: 'مشروب غازي زجاجة' },
    category: 'beverages',
    prepTime: 2
  },
  {
    id: 'small-water',
    name: { en: 'Small Water', ar: 'مياه صغيرة' },
    description: { en: 'Small bottle of water', ar: 'زجاجة مياه صغيرة' },
    priceUSD: 0.4,
    priceLBP: 36000,
    ingredients: { en: 'Bottled water', ar: 'مياه معبأة' },
    category: 'beverages',
    prepTime: 1,
    image: `/small-water.jpg`
  }
];
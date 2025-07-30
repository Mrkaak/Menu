import React, { createContext, useContext, useState, ReactNode } from 'react';

export type Language = 'en' | 'ar';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations = {
  en: {
    // Header
    'language.english': 'English',
    'language.arabic': 'العربية',
    
    // Navigation
    'nav.kaak': 'Kaak',
    'nav.desserts': 'Desserts',
    'nav.beverages': 'Beverages',
    'nav.cart': 'Cart',
    
    // Menu
    'menu.title': 'Our Menu',
    'menu.prepTime': 'min',
    'menu.addToCart': 'Add to Cart',
    'menu.viewDetails': 'View Details',
    
    // Product Modal
    'modal.addOns': 'Add-ons',
    'modal.quantity': 'Quantity',
    'modal.total': 'Total',
    'modal.close': 'Close',
    
    // Cart
    'cart.title': 'Your Order',
    'cart.empty': 'Your cart is empty',
    'cart.subtotal': 'Subtotal',
    'cart.total': 'Total',
    'cart.orderWhatsApp': 'Order via WhatsApp',
    'cart.removeItem': 'Remove Item',
    
    // Currency
    'currency.usd': 'USD',
    'currency.lbp': 'LBP',
    
    // Loading
    'loading.title': 'Kaak Shop',
    'loading.subtitle': 'Authentic Lebanese Flavors',
    
    // General
    'general.or': 'or',
    'general.each': 'each'
  },
  ar: {
    // Header
    'language.english': 'English',
    'language.arabic': 'العربية',
    
    // Navigation
    'nav.kaak': 'كعك',
    'nav.desserts': 'حلويات',
    'nav.beverages': 'مشروبات',
    'nav.cart': 'السلة',
    
    // Menu
    'menu.title': 'قائمة الطعام',
    'menu.prepTime': 'دقيقة',
    'menu.addToCart': 'أضف إلى السلة',
    'menu.viewDetails': 'عرض التفاصيل',
    
    // Product Modal
    'modal.addOns': 'الإضافات',
    'modal.quantity': 'الكمية',
    'modal.total': 'المجموع',
    'modal.close': 'إغلاق',
    
    // Cart
    'cart.title': 'طلبك',
    'cart.empty': 'السلة فارغة',
    'cart.subtotal': 'المجموع الفرعي',
    'cart.total': 'المجموع الكلي',
    'cart.orderWhatsApp': 'اطلب عبر واتساب',
    'cart.removeItem': 'إزالة العنصر',
    
    // Currency
    'currency.usd': 'دولار',
    'currency.lbp': 'ل.ل',
    
    // Loading
    'loading.title': 'محل الكعك',
    'loading.subtitle': 'نكهات لبنانية أصيلة',
    
    // General
    'general.or': 'أو',
    'general.each': 'للقطعة'
  }
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('en');

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations['en']] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      <div className={language === 'ar' ? 'rtl' : 'ltr'} dir={language === 'ar' ? 'rtl' : 'ltr'}>
        {children}
      </div>
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
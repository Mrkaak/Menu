import React from 'react';
import { ChefHat, Cookie, Coffee, ShoppingCart, GlassWater } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { useCart } from '../contexts/CartContext';

interface BottomNavigationProps {
  activeCategory: string;
  onCategoryChange: (category: string) => void;
  onCartClick: () => void;
}

const BottomNavigation: React.FC<BottomNavigationProps> = ({
  activeCategory,
  onCategoryChange,
  onCartClick
}) => {
  const { t } = useLanguage();
  const { getCartCount } = useCart();
  const cartCount = getCartCount();

  const navItems = [
    { id: 'kaak', icon: ChefHat, label: t('nav.kaak') },
    { id: 'desserts', icon: Cookie, label: t('nav.desserts') },
    { id: 'beverages', icon: GlassWater, label: t('nav.beverages') },
  ];

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 z-40 shadow-lg">
      <div className="flex items-center justify-around py-2">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = activeCategory === item.id;
          
          return (
            <button
              key={item.id}
              onClick={() => onCategoryChange(item.id)}
              className={`flex flex-col items-center py-2 px-4 rounded-lg transition-all duration-200 ${
                isActive
                  ? 'text-kaakeslime bg-kaakeslime/10'
                  : 'text-gray-600 hover:text-gray-800 hover:bg-gray-50'
              }`}
            >
              <Icon className={`w-6 h-6 mb-1 ${isActive ? 'scale-110' : ''} transition-transform duration-200`} />
              <span className="text-xs font-medium">{item.label}</span>
            </button>
          );
        })}
        
        {/* Cart Button */}
        <button
          onClick={onCartClick}
          className="relative flex flex-col items-center py-2 px-4 rounded-lg transition-all duration-200 text-gray-600 hover:text-gray-800 hover:bg-gray-50"
        >
          <ShoppingCart className="w-6 h-6 mb-1" />
          <span className="text-xs font-medium">{t('nav.cart')}</span>
          {cartCount > 0 && (
            <div className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 text-white text-xs rounded-full flex items-center justify-center animate-pulse">
              {cartCount > 99 ? '99+' : cartCount}
            </div>
          )}
        </button>
      </div>
    </nav>
  );
};

export default BottomNavigation;
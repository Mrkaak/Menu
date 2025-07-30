import React from 'react';
import { Clock, Plus } from 'lucide-react';
import { MenuItem } from '../data/menuData';
import { useLanguage } from '../contexts/LanguageContext';

interface MenuItemCardProps {
  item: MenuItem;
  onAddToCart: (item: MenuItem) => void;
  onViewDetails: (item: MenuItem) => void;
}

const MenuItemCard: React.FC<MenuItemCardProps> = ({ item, onAddToCart, onViewDetails }) => {
  const { language, t } = useLanguage();

  const formatPrice = (usd: number, lbp: number) => {
    return (
      <div className="flex flex-col items-end">
        <div className="bg-kaakeslime text-kaakesbrown font-bold text-lg px-3 py-1 rounded-full mb-1 shadow-sm">
          ${usd.toFixed(2)}
        </div>
        <div className="text-sm text-gray-600">
          {lbp.toLocaleString()} {t('currency.lbp')}
        </div>
      </div>
    );
  };

  return (
    <div 
      className="bg-white rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden cursor-pointer transform hover:scale-[1.02]"
      onClick={() => onViewDetails(item)}
    >
      {/* Item Image or Placeholder */}
      {item.image ? (
        <img
          src={item.image}
          alt={item.name[language]}
          className="w-full h-40 object-cover rounded-t-2xl"
        />
      ) : (
        <div className="h-40 bg-kaakeslime/10 flex items-center justify-center">
          <div className="w-16 h-16 bg-white/30 rounded-full flex items-center justify-center backdrop-blur-sm">
            <span className="text-2xl">🥖</span>
          </div>
        </div>
      )}

      <div className="p-4">
        {/* Header */}
        <div className="flex justify-between items-start mb-2">
          <div className="flex-1">
            <h3 className="text-lg font-semibold text-kaakesbrown mb-1">
              {item.name[language]}
            </h3>
            <p className="text-sm text-gray-600 line-clamp-2">
              {item.description[language]}
            </p>
          </div>
          {formatPrice(item.priceUSD, item.priceLBP)}
        </div>

        {/* Ingredients */}
        <p className="text-xs text-gray-500 mb-3 line-clamp-1">
          {item.ingredients[language]}
        </p>

        {/* Footer */}
        <div className="flex items-center justify-between">
          <div className="flex items-center text-gray-500">
            <Clock className="w-4 h-4 mr-1" />
            <span className="text-sm">{item.prepTime} {t('menu.prepTime')}</span>
          </div>
          
          <button
            onClick={(e) => {
              e.stopPropagation();
              onAddToCart(item);
            }}
            className="w-12 h-12 bg-kaakeslime text-white rounded-full flex items-center justify-center transition-all duration-200 transform hover:scale-110 shadow-md hover:shadow-lg"
            style={{ minWidth: 48, minHeight: 48 }}
          >
            <Plus className="w-6 h-6" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default MenuItemCard;
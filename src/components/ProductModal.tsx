import React, { useState } from 'react';
import { X, Plus, Minus, Clock } from 'lucide-react';
import { MenuItem, AddOn, addOns } from '../data/menuData';
import { useLanguage } from '../contexts/LanguageContext';
import { useCart } from '../contexts/CartContext';

interface ProductModalProps {
  item: MenuItem | null;
  isOpen: boolean;
  onClose: () => void;
}

const ProductModal: React.FC<ProductModalProps> = ({ item, isOpen, onClose }) => {
  const { language, t } = useLanguage();
  const { addToCart } = useCart();
  const [quantity, setQuantity] = useState(1);
  const [selectedAddOns, setSelectedAddOns] = useState<AddOn[]>([]);

  if (!isOpen || !item) return null;

  const availableAddOns = addOns.filter(addOn => 
    item.addOns?.includes(addOn.id)
  );

  const toggleAddOn = (addOn: AddOn) => {
    setSelectedAddOns(prev => {
      const exists = prev.find(a => a.id === addOn.id);
      if (exists) {
        return prev.filter(a => a.id !== addOn.id);
      } else {
        return [...prev, addOn];
      }
    });
  };

  const calculateTotal = () => {
    const basePrice = {
      usd: item.priceUSD,
      lbp: item.priceLBP
    };
    
    const addOnsPrice = selectedAddOns.reduce((total, addOn) => ({
      usd: total.usd + addOn.priceUSD,
      lbp: total.lbp + addOn.priceLBP
    }), { usd: 0, lbp: 0 });
    
    return {
      usd: (basePrice.usd + addOnsPrice.usd) * quantity,
      lbp: (basePrice.lbp + addOnsPrice.lbp) * quantity
    };
  };

  const handleAddToCart = () => {
    addToCart(item, quantity, selectedAddOns);
    setQuantity(1);
    setSelectedAddOns([]);
    onClose();
  };

  const total = calculateTotal();

  return (
    <div className="fixed inset-0 bg-black/50 flex items-end justify-center z-50 animate-fade-in">
      <div className="bg-white rounded-t-3xl w-full max-w-lg max-h-[80vh] flex flex-col animate-slide-up">
        {/* Header */}
        <div className="sticky top-0 bg-white border-b border-gray-200 p-4 flex items-center justify-between rounded-t-3xl z-10">
          <h2 className="text-xl font-bold text-gray-800">
            {item.name[language]}
          </h2>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-full transition-colors duration-200"
          >
            <X className="w-6 h-6 text-gray-600" />
          </button>
        </div>

        {/* Scrollable Content */}
        <div className="p-4 flex-1 overflow-y-auto">
          {/* Image */}
          {item.image ? (
            <img
              src={item.image}
              alt={item.name[language]}
              className="w-full h-48 object-cover rounded-2xl mb-4"
            />
          ) : (
            <div className="h-48 bg-kaakeslime/10 rounded-2xl flex items-center justify-center mb-4">
              <div className="w-20 h-20 bg-white/30 rounded-full flex items-center justify-center backdrop-blur-sm">
                <span className="text-4xl">🥖</span>
              </div>
            </div>
          )}

          {/* Description */}
          <p className="text-gray-700 mb-4">{item.description[language]}</p>
          {/* Ingredients */}
          <div className="bg-gray-50 rounded-lg p-3 mb-4">
            <h4 className="font-semibold text-gray-800 mb-1">المكونات / Ingredients</h4>
            <p className="text-sm text-gray-600">{item.ingredients[language]}</p>
          </div>

          {/* Prep Time */}
          {item.prepTime && (
            <div className="flex items-center text-gray-600 mb-4">
              <Clock className="w-4 h-4 mr-2" />
              <span className="text-sm">{item.prepTime} {t('menu.prepTime')}</span>
            </div>
          )}

          {/* Add-ons */}
          {availableAddOns.length > 0 && (
            <div className="mb-6">
              <h4 className="font-semibold text-gray-800 mb-3">{t('modal.addOns')}</h4>
              <div className="space-y-2">
                {availableAddOns.map((addOn) => {
                  const isSelected = selectedAddOns.find(a => a.id === addOn.id);
                  return (
                    <label
                      key={addOn.id}
                      className={`flex items-center justify-between p-3 rounded-lg border-2 cursor-pointer transition-all duration-200 ${
                        isSelected
                          ? 'border-kaakeslime bg-kaakeslime/10'
                          : 'border-gray-200 hover:border-gray-300'
                      }`}
                    >
                      <div className="flex items-center">
                        <input
                          type="checkbox"
                          checked={!!isSelected}
                          onChange={() => toggleAddOn(addOn)}
                          className="sr-only"
                        />
                        <div className={`w-5 h-5 rounded border-2 flex items-center justify-center mr-3 transition-colors duration-200 ${
                          isSelected
                            ? 'border-kaakeslime bg-kaakeslime'
                            : 'border-gray-300'
                        }`}>
                          {isSelected && <span className="text-white text-xs">✓</span>}
                        </div>
                        <span className="text-gray-800">{addOn.name[language]}</span>
                      </div>
                      <div className="text-right">
                        <div className="text-sm font-semibold text-gray-800">
                          +${addOn.priceUSD.toFixed(2)}
                        </div>
                        <div className="text-xs text-gray-600">
                          {addOn.priceLBP.toLocaleString()} {t('currency.lbp')}
                        </div>
                      </div>
                    </label>
                  );
                })}
              </div>
            </div>
          )}

          {/* Quantity moved to sticky section below */}
        </div>

        {/* Sticky Quantity, Total & Add to Cart Button - Horizontal Layout */}
        <div className="bg-gray-50 rounded-b-3xl p-4 border-t border-gray-200 sticky bottom-0 z-20">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-4">
            <div className="flex w-full items-center gap-4 justify-end">
              {/* Quantity Selector right-aligned */}
              <div className="flex items-center gap-5 bg-white rounded-full px-6 py-2 shadow-md border border-gray-200">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="w-11 h-11 flex items-center justify-center rounded-full hover:bg-kaakeslime/20 active:bg-kaakeslime/30 transition-colors duration-150"
                  aria-label="Decrease quantity"
                >
                  <Minus className="w-6 h-6 text-kaakeslime font-bold" />
                </button>
                <span className="text-2xl font-extrabold text-gray-900 w-10 text-center select-none">
                  {quantity}
                </span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="w-11 h-11 flex items-center justify-center rounded-full hover:bg-kaakeslime/20 active:bg-kaakeslime/30 transition-colors duration-150"
                  aria-label="Increase quantity"
                >
                  <Plus className="w-6 h-6 text-kaakeslime font-bold" />
                </button>
              </div>
              {/* Total on the right */}
              <div className="flex flex-col items-end min-w-[90px]">
                <span className="text-xs font-semibold text-gray-800">{t('modal.total')}</span>
                <div className="text-right">
                  <div className="text-lg font-bold text-gray-800">
                    ${total.usd.toFixed(2)}
                  </div>
                  <div className="text-xs text-gray-600">
                    {total.lbp.toLocaleString()} {t('currency.lbp')}
                  </div>
                </div>
              </div>
            </div>
            {/* Add to Cart Button */}
            <button
              onClick={handleAddToCart}
              className="w-full bg-kaakeslime text-white font-semibold py-3 rounded-lg transition-all duration-200 transform hover:scale-[1.02] shadow-lg hover:shadow-xl mt-2 sm:mt-0"
            >
              {t('menu.addToCart')}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductModal;
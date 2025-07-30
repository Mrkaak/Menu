import React, { useState, useRef, useEffect } from 'react';

// Add-ons with show/hide logic
function CartAddOns({ addOns, language, expanded, onToggle }) {
  const text = addOns.map(addOn => addOn.name[language]).join(', ');
  const ref = useRef(null);
  const [isTruncated, setIsTruncated] = useState(false);

  useEffect(() => {
    if (ref.current) {
      setIsTruncated(ref.current.scrollWidth > ref.current.clientWidth);
    }
  }, [text, expanded]);

  return (
    <div
      className={
        expanded
          ? 'text-sm text-gray-400 flex flex-wrap items-baseline break-words'
          : 'text-sm text-gray-400 flex items-baseline flex-nowrap'
      }
      style={{ wordBreak: 'break-word' }}
    >
      <span className="font-medium text-gray-400 whitespace-nowrap">
        {language === 'ar' ? 'المكونات الإضافية:' : 'Add Extra Ingredients:'}
      </span>
      <span
        ref={ref}
        className={expanded ? '' : 'truncate inline-block max-w-[180px] align-bottom '}
        style={{ verticalAlign: 'bottom' }}
      >
        {text}
      </span>
      {(isTruncated || expanded) && (
        <button
          className=" text-kaakeslime font-semibold hover:underline focus:outline-none align-bottom whitespace-nowrap"
          onClick={onToggle}
        >
          {expanded ? 'Hide' : 'Read more'}
        </button>
      )}
    </div>
  );
}
import { X, Minus, Plus, MessageCircle, Trash2, ShoppingBag } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { useCart } from '../contexts/CartContext';

interface CartProps {
  isOpen: boolean;
  onClose: () => void;
}

const Cart: React.FC<CartProps> = ({ isOpen, onClose }) => {
  const { language, t } = useLanguage();
  const { cartItems, updateQuantity, removeFromCart, getTotalPrice, clearCart } = useCart();

  // Track expanded state for add-ons per cart item
  const [expandedAddOns, setExpandedAddOns] = useState({});
  const handleToggleAddOns = (id) => {
    setExpandedAddOns((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  if (!isOpen) return null;

  const total = getTotalPrice();

  const generateWhatsAppMessage = () => {
    if (cartItems.length === 0) return '';

    let message = `${t('cart.title')}:\n\n`;
    
    cartItems.forEach((cartItem, index) => {
      const itemTotal = {
        usd: (cartItem.item.priceUSD + cartItem.selectedAddOns.reduce((sum, addOn) => sum + addOn.priceUSD, 0)) * cartItem.quantity,
        lbp: (cartItem.item.priceLBP + cartItem.selectedAddOns.reduce((sum, addOn) => sum + addOn.priceLBP, 0)) * cartItem.quantity
      };

      message += `${index + 1}. ${cartItem.item.name[language]} x${cartItem.quantity}\n`;
      
      if (cartItem.selectedAddOns.length > 0) {
        message += `   ${t('modal.addOns')}: ${cartItem.selectedAddOns.map(addOn => addOn.name[language]).join(', ')}\n`;
      }
      
      message += `   $${itemTotal.usd.toFixed(2)} (${itemTotal.lbp.toLocaleString()} ${t('currency.lbp')})\n\n`;
    });

    message += `${t('cart.total')}: $${total.usd.toFixed(2)} (${total.lbp.toLocaleString()} ${t('currency.lbp')})`;
    
    return encodeURIComponent(message);
  };

  const handleWhatsAppOrder = () => {
    const message = generateWhatsAppMessage();
    const phoneNumber = '+961 81047192'; // Updated phone number
    const whatsappUrl = `https://wa.me/${phoneNumber.replace(/\s+/g, '')}?text=${message}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex items-end justify-center z-50 animate-fade-in">
      <div className="bg-white rounded-t-3xl w-full max-w-lg max-h-[80vh] overflow-y-auto animate-slide-up">
        {/* Header */}
        <div className="sticky top-0 bg-white border-b border-gray-200 p-4 flex items-center justify-between rounded-t-3xl">
          <div className="flex items-center gap-2">
            <span className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-kaakeslime/10">
              <ShoppingBag className="w-5 h-5 text-kaakeslime" />
            </span>
            <h2 className="text-xl font-bold text-gray-800">{t('cart.title')}</h2>
          </div>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-full transition-colors duration-200"
          >
            <X className="w-6 h-6 text-gray-600" />
          </button>
        </div>

        <div className="p-4">
          {cartItems.length === 0 ? (
            <div className="text-center py-12">
              <div className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-4xl">🛒</span>
              </div>
              <p className="text-gray-600 text-lg">{t('cart.empty')}</p>
            </div>
          ) : (
            <>
              {/* Cart Items */}
              <div className="space-y-4 mb-6">
                {cartItems.map((cartItem) => {
                  const itemTotal = {
                    usd: (cartItem.item.priceUSD + cartItem.selectedAddOns.reduce((sum, addOn) => sum + addOn.priceUSD, 0)) * cartItem.quantity,
                    lbp: (cartItem.item.priceLBP + cartItem.selectedAddOns.reduce((sum, addOn) => sum + addOn.priceLBP, 0)) * cartItem.quantity
                  };

                  return (
                    <div key={cartItem.id} className="bg-white rounded-xl p-3 flex gap-4 shadow-sm border border-gray-100 relative">
                      {/* Product Image */}
                      <div className="w-16 h-16 flex-shrink-0 rounded-lg overflow-hidden bg-gray-100 flex items-center justify-center">
                        {cartItem.item.image ? (
                          <img src={cartItem.item.image} alt={cartItem.item.name[language]} className="w-full h-full object-cover" />
                        ) : (
                          <span className="text-2xl">🛒</span>
                        )}
                      </div>
                      {/* Main content: name, price, add-ons */}
                      <div className="flex-1 min-w-0 flex flex-col justify-between">
                        {/* Name */}
                        <div className="font-semibold text-gray-900 text-base truncate" style={{lineHeight: '1.2'}}>{cartItem.item.name[language]}</div>
                        {/* Price directly under name */}
                        <div className="text-lg font-bold text-gray-900 mt-1 mb-1">{itemTotal.lbp.toLocaleString()} {t('currency.lbp')}</div>
                        {/* Add-ons row */}
                        <div className="flex-1 min-w-0">
                          {cartItem.selectedAddOns.length > 0 ? (
                            <CartAddOns
                              addOns={cartItem.selectedAddOns}
                              language={language}
                              expanded={!!expandedAddOns[cartItem.id]}
                              onToggle={() => handleToggleAddOns(cartItem.id)}
                            />
                          ) : null}
                        </div>
                      </div>
                      {/* Quantity controls absolutely positioned top right */}
                      <div className="absolute top-3 right-3 flex items-center gap-2">
                        {cartItem.quantity === 1 ? (
                          <button
                            onClick={() => removeFromCart(cartItem.id)}
                            className="w-8 h-8 flex items-center justify-center rounded-full border border-gray-200 bg-white hover:bg-kaakeslime/10 text-kaakeslime text-lg font-bold"
                            aria-label="Remove"
                          >
                            <Trash2 className="w-5 h-5" />
                          </button>
                        ) : (
                          <button
                            onClick={() => updateQuantity(cartItem.id, cartItem.quantity - 1)}
                            className="w-8 h-8 flex items-center justify-center rounded-full border border-gray-200 bg-white hover:bg-gray-100 text-kaakeslime text-lg font-bold"
                            aria-label="Decrease quantity"
                          >
                            <Minus className="w-4 h-4" />
                          </button>
                        )}
                        <span className="text-lg font-bold text-gray-900 w-6 text-center select-none">
                          {cartItem.quantity}
                        </span>
                        <button
                          onClick={() => updateQuantity(cartItem.id, cartItem.quantity + 1)}
                          className="w-8 h-8 flex items-center justify-center rounded-full border border-gray-200 bg-white hover:bg-gray-100 text-kaakeslime text-lg font-bold"
                          aria-label="Increase quantity"
                        >
                          <Plus className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Total */}
              <div className="bg-kaakeslime/10 rounded-lg p-4 mb-4">
                <div className="flex justify-between items-center">
                  <span className="text-xl font-bold text-gray-800">{t('cart.total')}</span>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-gray-800">
                      ${total.usd.toFixed(2)}
                    </div>
                    <div className="text-lg text-gray-700">
                      {total.lbp.toLocaleString()} {t('currency.lbp')}
                    </div>
                  </div>
                </div>
              </div>

              {/* Order Button */}
              <button
                onClick={handleWhatsAppOrder}
                className="w-full bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white font-semibold py-4 rounded-lg transition-all duration-200 transform hover:scale-[1.02] shadow-lg hover:shadow-xl flex items-center justify-center space-x-2"
              >
                <MessageCircle className="w-5 h-5" />
                <span>{t('cart.orderWhatsApp')}</span>
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Cart;
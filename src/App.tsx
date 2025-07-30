import React, { useState, useEffect } from 'react';
import { LanguageProvider } from './contexts/LanguageContext';
import { CartProvider } from './contexts/CartContext';
import Loader from './components/Loader';
import Header from './components/Header';
import BottomNavigation from './components/BottomNavigation';
import MenuItemCard from './components/MenuItemCard';
import ProductModal from './components/ProductModal';
import Cart from './components/Cart';
import { menuItems, MenuItem } from './data/menuData';
import { useLanguage } from './contexts/LanguageContext';
import mustache from '../public/mustache.png';

const AppContent: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [activeCategory, setActiveCategory] = useState('kaak');
  const [selectedItem, setSelectedItem] = useState<MenuItem | null>(null);
  const [isProductModalOpen, setIsProductModalOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const { t } = useLanguage();

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2500);

    return () => clearTimeout(timer);
  }, []);

  const filteredItems = menuItems.filter(item => item.category === activeCategory);

  const handleViewDetails = (item: MenuItem) => {
    setSelectedItem(item);
    setIsProductModalOpen(true);
  };

  const handleAddToCart = (item: MenuItem) => {
    setSelectedItem(item);
    setIsProductModalOpen(true);
  };

  const handleCloseProductModal = () => {
    setIsProductModalOpen(false);
    setSelectedItem(null);
  };

  const handleCartClick = () => {
    setIsCartOpen(true);
  };

  const handleCloseCart = () => {
    setIsCartOpen(false);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Loader isLoading={isLoading} />
      
      {!isLoading && (
        <>
          <Header />
          
          {/* Main Content */}
          <main className="pt-20 pb-24 px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-6">
                <h2 className="text-3xl font-extrabold text-kaakesbrown mb-2">Welcome to Mr. Kaak</h2>
                <img src={mustache} alt="Mr Kaak Mustache" className="mx-auto animate-float" style={{ height: 22, marginTop: 4 }} />
              </div>

              {/* Menu Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {filteredItems.map((item) => (
                  <MenuItemCard
                    key={item.id}
                    item={item}
                    onAddToCart={handleAddToCart}
                    onViewDetails={handleViewDetails}
                  />
                ))}
              </div>

              {filteredItems.length === 0 && (
                <div className="text-center py-12">
                  <div className="w-20 h-20 bg-gray-200 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-4xl">🔍</span>
                  </div>
                  <p className="text-gray-600 text-lg">No items found in this category</p>
                </div>
              )}
            </div>
          </main>

          <BottomNavigation
            activeCategory={activeCategory}
            onCategoryChange={setActiveCategory}
            onCartClick={handleCartClick}
          />

          <ProductModal
            item={selectedItem}
            isOpen={isProductModalOpen}
            onClose={handleCloseProductModal}
          />

          <Cart
            isOpen={isCartOpen}
            onClose={handleCloseCart}
          />
        </>
      )}
    </div>
  );
};

function App() {
  return (
    <LanguageProvider>
      <CartProvider>
        <AppContent />
      </CartProvider>
    </LanguageProvider>
  );
}

export default App;
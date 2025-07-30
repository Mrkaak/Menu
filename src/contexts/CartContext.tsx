import React, { createContext, useContext, useState, ReactNode } from 'react';
import { MenuItem, AddOn } from '../data/menuData';

export interface CartItem {
  id: string;
  item: MenuItem;
  quantity: number;
  selectedAddOns: AddOn[];
}

interface CartContextType {
  cartItems: CartItem[];
  addToCart: (item: MenuItem, quantity: number, addOns: AddOn[]) => void;
  removeFromCart: (itemId: string) => void;
  updateQuantity: (itemId: string, quantity: number) => void;
  clearCart: () => void;
  getTotalPrice: () => { usd: number; lbp: number };
  getCartCount: () => number;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  const addToCart = (item: MenuItem, quantity: number, addOns: AddOn[]) => {
    const cartItemId = `${item.id}-${addOns.map(a => a.id).sort().join('-')}`;
    
    setCartItems(prev => {
      const existingItem = prev.find(cartItem => cartItem.id === cartItemId);
      
      if (existingItem) {
        return prev.map(cartItem =>
          cartItem.id === cartItemId
            ? { ...cartItem, quantity: cartItem.quantity + quantity }
            : cartItem
        );
      } else {
        return [...prev, {
          id: cartItemId,
          item,
          quantity,
          selectedAddOns: addOns
        }];
      }
    });
  };

  const removeFromCart = (itemId: string) => {
    setCartItems(prev => prev.filter(item => item.id !== itemId));
  };

  const updateQuantity = (itemId: string, quantity: number) => {
    if (quantity <= 0) {
      removeFromCart(itemId);
      return;
    }
    
    setCartItems(prev => 
      prev.map(item =>
        item.id === itemId
          ? { ...item, quantity }
          : item
      )
    );
  };

  const clearCart = () => {
    setCartItems([]);
  };

  const getTotalPrice = () => {
    return cartItems.reduce((total, cartItem) => {
      const itemPrice = {
        usd: cartItem.item.priceUSD,
        lbp: cartItem.item.priceLBP
      };
      
      const addOnsPrice = cartItem.selectedAddOns.reduce((addOnTotal, addOn) => ({
        usd: addOnTotal.usd + addOn.priceUSD,
        lbp: addOnTotal.lbp + addOn.priceLBP
      }), { usd: 0, lbp: 0 });
      
      return {
        usd: total.usd + (itemPrice.usd + addOnsPrice.usd) * cartItem.quantity,
        lbp: total.lbp + (itemPrice.lbp + addOnsPrice.lbp) * cartItem.quantity
      };
    }, { usd: 0, lbp: 0 });
  };

  const getCartCount = () => {
    return cartItems.reduce((count, item) => count + item.quantity, 0);
  };

  return (
    <CartContext.Provider value={{
      cartItems,
      addToCart,
      removeFromCart,
      updateQuantity,
      clearCart,
      getTotalPrice,
      getCartCount
    }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};
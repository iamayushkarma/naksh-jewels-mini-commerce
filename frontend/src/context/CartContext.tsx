import { createContext, useState } from "react";
import type { ReactNode } from "react";
import type { CartItem } from "../types/cart";

// Context shape
interface CartContextType {
  cart: CartItem[];
  addToCart: (productId: number, quantity: number) => void;
}
// Create context
const CartContext = createContext<CartContextType | undefined>(undefined);

// Provider component
const CartProvider = ({ children }: { children: ReactNode }) => {
  const [cart, setCart] = useState<CartItem[]>([]);

  const addToCart = (productId: number, quantity: number) => {
    setCart((prev) => {
      const existingItem = prev.find((item) => item.productId === productId);

      if (existingItem) {
        return prev.map((item) => {
          return item.productId === productId
            ? { ...item, quantity: item.quantity + quantity }
            : item;
        });
      }
      return [...prev, { productId, quantity }];
    });
  };

  return (
    <CartContext.Provider value={{ cart, addToCart }}>
      {children}
    </CartContext.Provider>
  );
};

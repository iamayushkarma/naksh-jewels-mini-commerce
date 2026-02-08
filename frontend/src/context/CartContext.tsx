import { createContext, useState } from "react";
import type { ReactNode } from "react";
import type { CartItem } from "../types/cart";

// Context shape
interface CartContextType {
  cart: CartItem[];
  addToCart: (productId: number, quantity: number) => void;
  removeFromCart: (productId: number) => void;
  updateQuantity: (productId: number, quantity: number) => void;
}
// Create context
export const CartContext = createContext<CartContextType | undefined>(
  undefined,
);

// Provider component
export const CartProvider = ({ children }: { children: ReactNode }) => {
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
  const removeFromCart = (productId: number) => {
    setCart((prev) => prev.filter((item) => item.productId !== productId));
  };

  const updateQuantity = (productId: number, quantity: number) => {
    setCart((prev) =>
      prev.map((item) =>
        item.productId === productId ? { ...item, quantity } : item,
      ),
    );
  };

  return (
    <CartContext.Provider
      value={{ cart, addToCart, removeFromCart, updateQuantity }}
    >
      {children}
    </CartContext.Provider>
  );
};

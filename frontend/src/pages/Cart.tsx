import { useEffect, useState } from "react";
import { useCart } from "../hooks/useCart";
import { getProducts } from "../services/api";
import type { Product } from "../types/product";
import "../styles/cart.css";

const Cart = () => {
  const { cart, removeFromCart, updateQuantity } = useCart();
  const [products, setProducts] = useState<Product[]>([]);

  // Fetch product data to match cart items
  useEffect(() => {
    const fetchProducts = async () => {
      const data = await getProducts();
      setProducts(data);
    };
    fetchProducts();
  }, []);

  //  Calculate total cart price
  if (cart.length === 0) {
    return (
      <div className="cart-container">
        <p>Your cart is empty</p>
      </div>
    );
  }

  const totalPrice = cart.reduce((sum, item) => {
    const product = products.find((p) => p.id === item.productId);
    if (!product) return sum;
    return sum + product.price * item.quantity;
  }, 0);

  return (
    <div className="cart-container">
      <h1>Cart</h1>
      {cart.map((item) => {
        const product = products.find((p) => p.id === item.productId);
        if (!product) return null;
        return (
          <div key={item.productId} className="cart-item">
            <img
              src={product.image}
              alt={product.name}
              onError={(e) => {
                (e.target as HTMLImageElement).src =
                  "https://via.placeholder.com/150";
              }}
            />
            <div className="cart-item-details">
              <div>
                <h3>{product.name}</h3>
                <p>₹{product.price}</p>
              </div>
              <div className="cart-item-actions">
                <input
                  type="number"
                  value={item.quantity}
                  min={1}
                  onChange={(e) =>
                    updateQuantity(item.productId, Number(e.target.value))
                  }
                />
                <button onClick={() => removeFromCart(item.productId)}>
                  Remove
                </button>
              </div>
            </div>
          </div>
        );
      })}
      <div className="cart-total">
        <h2>Total: ₹{totalPrice}</h2>
      </div>
    </div>
  );
};

export default Cart;

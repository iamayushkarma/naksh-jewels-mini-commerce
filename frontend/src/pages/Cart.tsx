import { useEffect, useState } from "react";
import { useCart } from "../hooks/useCart";
import { getProducts } from "../services/api";
import type { Product } from "../types/product";

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
    return <p>Your cart is empty</p>;
  }
  const totalPrice = cart.reduce((sum, item) => {
    const product = products.find((p) => p.id === item.productId);

    if (!product) return sum;

    return sum + product.price * item.quantity;
  }, 0);

  return (
    <div>
      <h1>Cart</h1>

      {cart.map((item) => {
        const product = products.find((p) => p.id === item.productId);

        if (!product) return null;

        return (
          <div key={item.productId}>
            <img src={product.image} width={80} />

            <h3>{product.name}</h3>

            <p>₹{product.price}</p>

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
        );
      })}
      <h2>Total: ₹{totalPrice}</h2>
    </div>
  );
};

export default Cart;

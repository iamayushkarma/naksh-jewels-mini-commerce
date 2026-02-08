import type { Product } from "../types/product";
import { useCart } from "../hooks/useCart";
import { addToCartAPI } from "../services/api";
import { useState } from "react";
import Toast from "./Toast";

interface ProductCardProps {
  product: Product;
}
const ProductCard = ({ product }: ProductCardProps) => {
  const { addToCart } = useCart();
  const [isAdding, setIsAdding] = useState(false);
  const [showToast, setShowToast] = useState(false);

  const handleAddToCart = async () => {
    if (isAdding) return;

    try {
      setIsAdding(true);

      addToCart(product.id, 1); // update context
      await addToCartAPI(product.id, 1); // sync backend

      // SHOW toast
      setShowToast(true);

      // hide after 2 seconds
      setTimeout(() => {
        setShowToast(false);
      }, 2000);
    } catch (error) {
      console.error("Failed to add to cart");
    } finally {
      setIsAdding(false);
    }
  };

  return (
    <div style={{ border: "1px solid #ccc", padding: "10px" }}>
      <img src={product.image} width={120} />
      <h3>{product.name}</h3>
      <p>₹{product.price}</p>
      <button onClick={handleAddToCart}>Add to Cart</button>
      {showToast && <Toast message="Added to cart!" />}
    </div>
  );
};

export default ProductCard;

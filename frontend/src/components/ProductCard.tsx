import type { Product } from "../types/product";
import { useCart } from "../hooks/useCart";
import { addToCartAPI } from "../services/api";
import { useState } from "react";

interface ProductCardProps {
  product: Product;
}
const ProductCard = ({ product }: ProductCardProps) => {
  const { addToCart } = useCart();
  const [isAdding, setIsAdding] = useState(false);

  const handleAddToCart = async () => {
    if (isAdding) return; // prevent double click

    try {
      setIsAdding(true);

      addToCart(product.id, 1); // update context
      await addToCartAPI(product.id, 1); // sync backend
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
      <button onClick={handleAddToCart} disabled={isAdding}>
        {isAdding ? "Adding..." : "Add to Cart"}
      </button>
    </div>
  );
};

export default ProductCard;

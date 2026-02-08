import type { Product } from "../types/product";
import { useCart } from "../hooks/useCart";
import { addToCartAPI } from "../services/api";
import { useState } from "react";
import { useToast } from "../hooks/useToast";

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
  const { addToCart } = useCart();
  const { showToast } = useToast();
  const [isAdding, setIsAdding] = useState(false);

  const handleAddToCart = async () => {
    if (isAdding) return;

    try {
      setIsAdding(true);

      addToCart(product.id, 1);
      await addToCartAPI(product.id, 1);

      // Trigger global toast
      showToast("Added to cart!");
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

import type { Product } from "../types/product";
import { useCart } from "../hooks/useCart";
import { addToCartAPI } from "../services/api";

interface ProductCardProps {
  product: Product;
}
const ProductCard = ({ product }: ProductCardProps) => {
  const { addToCart } = useCart();

  const handleAddToCart = async () => {
    try {
      // update frontend state
      addToCart(product.id, 1);

      // sync with backend
      await addToCartAPI(product.id, 1);
    } catch (error) {
      console.error("Failed to add to cart");
    }
  };
  return (
    <div style={{ border: "1px solid #ccc", padding: "10px" }}>
      <img src={product.image} width={120} />
      <h3>{product.name}</h3>
      <p>₹{product.price}</p>
      <button onClick={handleAddToCart}>Add to Cart</button>
    </div>
  );
};

export default ProductCard;

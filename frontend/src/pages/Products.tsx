import { useEffect, useState } from "react";
import { getProducts } from "../services/api";
import type { Product } from "../types/product";
import ProductCard from "../components/ProductCard";
import "../styles/products.css";
import SkeletonCard from "../components/SkeletonCard";

const Products = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const data = await getProducts();
        setProducts(data);
      } catch (error) {
        setError("Failed to load products");
      } finally {
        setLoading(false);
      }
    };
    fetchProduct();
  }, []);
  // Loading state
  if (loading)
    return (
      <div className="product-grid">
        {Array.from({ length: 8 }).map((_, i) => (
          <SkeletonCard key={i} />
        ))}
      </div>
    );
  // Error state
  if (error) return <p>{error}</p>;

  return (
    <div className="product-card">
      <h1>Products</h1>
      <div className="product-grid">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default Products;

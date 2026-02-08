import { useEffect, useState } from "react";
import { getProducts } from "../services/api";
import type { Product } from "../types/product";
import ProductCard from "../components/ProductCard";

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
  if (loading) return <p>Loading products...</p>;
  // Error state
  if (error) return <p>{error}</p>;

  return (
    <div>
      <h1>Products</h1>
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default Products;

import axios from "axios";
import type { Product } from "../types/product";

const api = axios.create({
  baseURL: "http://localhost:3000/api/v1",
});
// Fetch all products
const getProducts = async (): Promise<Product[]> => {
  const res = await api.get("/products");
  return res.data.data; // because backend wraps response
};

// Get cart items

const getCart = async () => {
  const res = await api.get("/cart");
  return res.data.data;
};

// Add item to cart
const addToCartAPI = async (productId: number, quantity: number) => {
  const res = await api.post("/cart", { productId, quantity });
  return res.data.data;
};

export { getProducts, getCart, addToCartAPI };

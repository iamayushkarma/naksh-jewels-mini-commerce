import axios from "axios";
import type { Product } from "../types/product";

const api = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL,
});
// Fetch all products
const getProducts = async (): Promise<Product[]> => {
  const res = await api.get("/products");
  console.log(res);
  return res.data; // because backend wraps response
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
// Delete item from cart
const removeFromCartAPI = async (productId: number) => {
  await api.delete(`/cart/${productId}`);
};

export { getProducts, getCart, addToCartAPI, removeFromCartAPI };

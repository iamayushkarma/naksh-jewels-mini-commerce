import { products } from "../data/products.js";

export const getProducts = (req, res) => {
  res.status(200).json(products);
};

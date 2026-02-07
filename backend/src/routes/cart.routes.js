import express from "express";
import { getCart, addToCart } from "../controllers/cart.controller.js";

const router = express.Router();
// Fetch cart items
router.get("/", getCart);
// Add item to cart
router.post("/", addToCart);

export default router;

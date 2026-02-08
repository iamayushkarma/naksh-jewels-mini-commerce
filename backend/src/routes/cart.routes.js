import express from "express";
import {
  getCart,
  addToCart,
  removeFromCart,
} from "../controllers/cart.controller.js";
import { validateCartRequest } from "../middleware/validation.middleware.js";

const router = express.Router();
// Fetch cart items
router.get("/", getCart);
// Add item to cart
router.post("/", validateCartRequest, addToCart);
// Delete item from cart
router.delete("/:productId", removeFromCart);

export default router;

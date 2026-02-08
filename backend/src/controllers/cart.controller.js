import { ApiResponse } from "../utils/api-response.js";
import asyncHandler from "../utils/asyncHandler.js";

let cart = [];

const getCart = (req, res) => {
  return res
    .status(200)
    .json(new ApiResponse(200, cart, "Cart fetched successfully"));
};

const addToCart = asyncHandler(async (req, res) => {
  const { productId, quantity } = req.body;

  // Check if product already exists in cart
  const existingItem = cart.find((item) => item.productId === productId);
  if (existingItem) {
    // Update quantity if product already in cart
    existingItem.quantity += quantity;
  } else {
    // Add new product to cart
    cart.push({ productId, quantity });
  }
  return res.status(200).json(new ApiResponse(200, cart, "Item added to cart"));
});

const removeFromCart = asyncHandler((req, res) => {
  const productId = Number(req.params.productId);
  cart = cart.filter((item) => item.productId !== productId);
  res.json(cart);
});

export { getCart, addToCart, removeFromCart };

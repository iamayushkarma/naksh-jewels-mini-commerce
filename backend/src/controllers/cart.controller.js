import { ApiResponse } from "../utils/api-response.js";
import { ApiError } from "../utils/api-error.js";
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

export { getCart, addToCart };

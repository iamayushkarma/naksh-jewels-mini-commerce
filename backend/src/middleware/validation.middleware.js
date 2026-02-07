import { ApiError } from "../utils/api-error.js";

const validateCartRequest = (req, res, next) => {
  const { productId, quantity } = req.body;

  // Check required fields
  if (!productId || !quantity) {
    throw new ApiError(400, "productId and quantity are required");
  }
  // Check types
  if (typeof productId !== "number" || typeof quantity !== "number") {
    throw new ApiError(400, "productId and quantity must be numbers");
  }
  // Prevent invalid quantities
  if (quantity <= 0) {
    throw new ApiError(400, "quantity must be greater than zero");
  }
  next();
};

export { validateCartRequest };

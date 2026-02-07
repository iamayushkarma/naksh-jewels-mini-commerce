let cart = [];

const addToCart = (req, res) => {
  const { productId, quantity } = req.body;
  const existingItem = cart.find((item) => item.productId === productId);

  if (existingItem) {
    existingItem.quantity += quantity;
  } else {
    cart.push({ productId, quantity });
  }
  res.status;
};

import { useCart } from "../hooks/useCart";

const Cart = () => {
  const { cart, removeFromCart, updateQuantity } = useCart();

  if (cart.length === 0) {
    return <p>Your cart is empty</p>;
  }

  return (
    <div>
      <h1>Cart</h1>

      {cart.map((item) => (
        <div key={item.productId}>
          <p>Product ID: {item.productId}</p>

          <input
            type="number"
            value={item.quantity}
            min={1}
            onChange={(e) =>
              updateQuantity(item.productId, Number(e.target.value))
            }
          />

          <button onClick={() => removeFromCart(item.productId)}>Remove</button>
        </div>
      ))}
    </div>
  );
};

export default Cart;

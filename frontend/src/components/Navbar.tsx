import { Link } from "react-router-dom";
import { useCart } from "../hooks/useCart";
import "../styles/products.css";

const Navbar = () => {
  const { cart } = useCart();

  // calculate total quantity
  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <nav
      className="navbar"
      style={{ padding: "10px", borderBottom: "1px solid #ccc" }}
    >
      <Link to="/">Products</Link>

      <Link to="/cart" style={{ marginLeft: "20px" }}>
        Cart ({totalItems})
      </Link>
    </nav>
  );
};

export default Navbar;

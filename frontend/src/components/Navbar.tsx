import { Link } from "react-router-dom";
import { useCart } from "../hooks/useCart";
import "../styles/navbar.css";

const Navbar = () => {
  const { cart } = useCart();

  // calculate total quantity
  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <nav className="navbar">
      <Link className="navbar-heading" to="/">
        Products
      </Link>

      <Link className="navbar-heading" to="/cart">
        Cart ({totalItems})
      </Link>
    </nav>
  );
};

export default Navbar;

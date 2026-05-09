import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer>
      <div className="footer-container">
        <div>
          <h2>Aura Bags</h2>
          <p>Your destination for luxury handbags and accessories.</p>
        </div>
        <div>
          <h2>Quick Links</h2>
          <Link to="/">Home</Link>
          <Link to="/shop">Shop</Link>
          <Link to="/contact">Contact Us</Link>
        </div>
        <div>
          <h2>Support</h2>
          <a href="#">FAQ</a>
          <a href="#">Shipping Policy</a>
          <a href="#">Returns</a>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2026 Aura Bags. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;

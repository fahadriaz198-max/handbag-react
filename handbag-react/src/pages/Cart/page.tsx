import { useEffect, useState } from "react";
import Navbar from "../../components/Navbar/page";
import Footer from "../../components/Footer/page";
import { Link } from "react-router-dom";

export default function Cart() {
  useEffect(() => {
    document.body.classList.add("cart-page");
    return () => {
      document.body.classList.remove("cart-page");
    };
  }, []);

  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: "Midnight Noir",
      desc: "Color: Black / Size: Medium",
      price: 250.0,
      qty: 1,
      img: "/images/product1.png",
    },
    {
      id: 2,
      name: "Desert Sand Tote",
      desc: "Color: Beige / Size: Large",
      price: 180.0,
      qty: 2,
      img: "/images/product2.png",
    },
  ]);

  const [removingIds, setRemovingIds] = useState<number[]>([]);

  const handleQtyChange = (id: number, delta: number) => {
    setCartItems((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, qty: Math.max(1, item.qty + delta) } : item
      )
    );
  };

  const handleRemove = (id: number) => {
    setRemovingIds((prev) => [...prev, id]);
    setTimeout(() => {
      setCartItems((prev) => prev.filter((item) => item.id !== id));
      setRemovingIds((prev) => prev.filter((rId) => rId !== id));
    }, 400);
  };

  const subtotal = cartItems.reduce((acc, item) => acc + item.price * item.qty, 0);
  const shippingEstimate = 15.0;
  const tax = subtotal * 0.08;
  const total = subtotal + shippingEstimate + tax;

  return (
    <>
      <Navbar />

      <section className="cart-hero">
        <h1>Your Shopping Bag</h1>
        <p>Review your selected luxury pieces before checkout.</p>
      </section>

      <main className="cart-container">
        {cartItems.length === 0 ? (
          <div className="empty-cart-view cart-glass" style={{ display: "block" }}>
            <svg viewBox="0 0 24 24"><path d="M7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2zM1 2v2h2l3.6 7.59-1.35 2.45c-.16.28-.25.61-.25.96 0 1.1.9 2 2 2h12v-2H7.42c-.14 0-.25-.11-.25-.25l.03-.12.9-1.63h7.45c.75 0 1.41-.41 1.75-1.03l3.58-6.49c.08-.14.12-.31.12-.48 0-.55-.45-1-1-1H5.21l-.94-2H1zm16 16c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 2-.9 2-2-.9-2-2-2z"/></svg>
            <h2>Your bag is empty</h2>
            <p>Explore our exclusive collections and find your perfect accessory.</p>
            <Link to="/shop" className="link-button">Continue Shopping</Link>
          </div>
        ) : (
          <>
            <section className="cart-items-section cart-glass" id="cartItemsContainer">
              <table className="cart-table">
                <thead>
                  <tr>
                    <th>Product Details</th>
                    <th>Price</th>
                    <th>Quantity</th>
                    <th>Total</th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>
                  {cartItems.map((item) => (
                    <tr
                      key={item.id}
                      style={
                        removingIds.includes(item.id)
                          ? { transition: "all 0.4s ease", opacity: "0", transform: "translateX(20px)" }
                          : {}
                      }
                    >
                      <td>
                        <div className="cart-product-info">
                          <img src={item.img} alt={item.name} />
                          <div className="cart-product-details">
                            <h4>{item.name}</h4>
                            <p>{item.desc}</p>
                          </div>
                        </div>
                      </td>
                      <td><strong>${item.price.toFixed(2)}</strong></td>
                      <td>
                        <div className="qty-control">
                          <button className="qty-btn" onClick={() => handleQtyChange(item.id, -1)}>-</button>
                          <input type="number" className="qty-input" value={item.qty} readOnly />
                          <button className="qty-btn" onClick={() => handleQtyChange(item.id, 1)}>+</button>
                        </div>
                      </td>
                      <td><strong>${(item.price * item.qty).toFixed(2)}</strong></td>
                      <td>
                        <button className="remove-btn" title="Remove item" onClick={() => handleRemove(item.id)}>
                          <svg style={{ width: "16px", height: "16px", fill: "currentColor" }} viewBox="0 0 24 24"><path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/></svg>
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </section>

            <aside className="cart-summary cart-glass" id="cartSummaryContainer">
              <h3>Order Summary</h3>
              <div className="summary-row">
                <span>Subtotal</span>
                <strong>${subtotal.toFixed(2)}</strong>
              </div>
              <div className="summary-row">
                <span>Shipping Estimate</span>
                <strong>${shippingEstimate.toFixed(2)}</strong>
              </div>
              <div className="summary-row">
                <span>Tax</span>
                <strong>${tax.toFixed(2)}</strong>
              </div>

              <div className="promo-section">
                <label style={{ fontSize: "0.9rem", color: "#777" }}>Gift Card or Promo Code</label>
                <div className="promo-input-group">
                  <input type="text" className="promo-input" placeholder="Enter code" />
                  <button className="btn-apply">Apply</button>
                </div>
              </div>

              <div className="summary-row total">
                <span>Estimated Total</span>
                <span>${total.toFixed(2)}</span>
              </div>

              <button className="checkout-btn">
                <svg style={{ width: "20px", height: "20px", fill: "currentColor" }} viewBox="0 0 24 24"><path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm-2 16l-4-4 1.41-1.41L10 14.17l6.59-6.59L18 9l-8 8z"/></svg>
                Secure Checkout
              </button>

              <div className="shipping-info">
                <svg style={{ width: "16px", height: "16px", fill: "#d4af37" }} viewBox="0 0 24 24"><path d="M20 8h-3V4H3c-1.1 0-2 .9-2 2v11h2c0 1.66 1.34 3 3 3s3-1.34 3-3h6c0 1.66 1.34 3 3 3s3-1.34 3-3h2v-5l-3-4zM6 18.5c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zm13.5-9l1.96 2.5H17V9.5h2.5zm-1.5 9c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5z"/></svg>
                Complimentary shipping on orders over $500
              </div>
            </aside>
          </>
        )}
      </main>

      <section className="recommended-section">
        <h2>You May Also Like</h2>
        <div className="recommendation-grid">
          <div className="rec-card">
            <img src="/images/product3.png" alt="Crimson Crossbody" />
            <h4>Crimson Crossbody</h4>
            <div className="price">$140.00</div>
            <button className="rec-btn">Add to Bag</button>
          </div>
          <div className="rec-card">
            <img src="/images/hero.png" alt="Ivory Clutch" />
            <h4>Ivory Evening Clutch</h4>
            <div className="price">$195.00</div>
            <button className="rec-btn">Add to Bag</button>
          </div>
          <div className="rec-card">
            <img src="/images/product1.png" alt="Sapphire Satchel" />
            <h4>Sapphire Satchel</h4>
            <div className="price">$280.00</div>
            <button className="rec-btn">Add to Bag</button>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}

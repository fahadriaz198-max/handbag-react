import Navbar from "../../components/Navbar/page";
import Footer from "../../components/Footer/page";

function Cart() {
  return (
    <>
      <Navbar />
      <div className="page">
        <h1>Your Shopping Cart</h1>

        <div className="table-container">
          <table style={{ minWidth: "600px", maxWidth: "100%" }}>
            <thead>
              <tr>
                <th>Product</th>
                <th>Name</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Total</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><img src="/images/product1.png" alt="Black Handbag" className="table-image" /></td>
                <td>Midnight Noir</td>
                <td>$250</td>
                <td>1</td>
                <td>$250</td>
              </tr>
              <tr>
                <td><img src="/images/product2.png" alt="Beige Tote" className="table-image" /></td>
                <td>Desert Sand Tote</td>
                <td>$180</td>
                <td>2</td>
                <td>$360</td>
              </tr>
              <tr>
                <td><img src="/images/product3.png" alt="Red Crossbody" className="table-image" /></td>
                <td>Crimson Crossbody</td>
                <td>$140</td>
                <td>1</td>
                <td>$140</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div style={{ display: "flex", justifyContent: "flex-end", marginTop: "20px" }}>
          <div style={{ textAlign: "right" }}>
            <h3>Subtotal: $750</h3>
            <button className="lg-button">Proceed to Checkout</button>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Cart;

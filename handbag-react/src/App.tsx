import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Link } from "react-router-dom";
import Navbar from "./components/Navbar/page";
import Footer from "./components/Footer/page";
import Login from "./pages/Login/page";
import Signup from "./pages/Signup/page";
import Shop from "./pages/Shop/page";
import Cart from "./pages/Cart/page";
import Dashboard from "./pages/Dashboard/page";
import Contact from "./pages/Contact/page";
import About from "./pages/About/page";

function Home() {
  return (
    <>
      <Navbar />
      <div className="page">
        <section className="hero-section">
          <div className="hero-content">
            <h1>Elegance in Every Stitch</h1>
            <p>
              Discover our exclusive collection of luxury handbags crafted for
              the modern, sophisticated individual. Find your perfect aura.
            </p>
            <Link to="/shop" className="link-button">
              Shop Collection
            </Link>
          </div>
          <div className="hero-image">
            <img src="/images/hero.png" alt="Luxury Handbag Hero" />
          </div>
        </section>

        <h2>Featured Pieces</h2>
        <section className="card-container">
          <div className="card">
            <img src="/images/product1.png" alt="Black Leather Handbag" />
            <h3>Midnight Noir</h3>
            <p>$250</p>
            <button>Add to Cart</button>
          </div>
          <div className="card">
            <img src="/images/product2.png" alt="Beige Tote Bag" />
            <h3>Desert Sand Tote</h3>
            <p>$180</p>
            <button>Add to Cart</button>
          </div>
          <div className="card">
            <img src="/images/product3.png" alt="Red Crossbody Bag" />
            <h3>Crimson Crossbody</h3>
            <p>$140</p>
            <button>Add to Cart</button>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
import Navbar from "../../components/Navbar/page";
import Footer from "../../components/Footer/page";

function Shop() {
  return (
    <>
      <Navbar />
      <div className="page">
        <h1>Our Collection</h1>
        <p>Explore our wide range of elegant handbags perfect for any occasion.</p>

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
          <div className="card">
            <img src="/images/product1.png" alt="Obsidian Clutch" />
            <h3>Obsidian Clutch</h3>
            <p>$120</p>
            <button>Add to Cart</button>
          </div>
          <div className="card">
            <img src="/images/product2.png" alt="Ivory Satchel" />
            <h3>Ivory Satchel</h3>
            <p>$210</p>
            <button>Add to Cart</button>
          </div>
          <div className="card">
            <img src="/images/product3.png" alt="Ruby Weekend Bag" />
            <h3>Ruby Weekend Bag</h3>
            <p>$350</p>
            <button>Add to Cart</button>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
}

export default Shop;

import Navbar from "../../components/Navbar/page";
import Footer from "../../components/Footer/page";

function About() {
  function showInfo() {
    alert("Welcome to Aura Bags! We provide the best handbags for you.");
  }

  return (
    <>
      <Navbar />
      <div className="page">
        <h1>About Aura Bags</h1>

        <p>
          Aura Bags is a modern online handbag store created for people who love fashion and elegance.
          We provide stylish, high-quality handbags that match your personality and lifestyle.
        </p>

        <div style={{ textAlign: "center", margin: "20px 0" }}>
          <img src="/images/product1.png" alt="Aura Bags" style={{ width: "250px" }} />
        </div>

        <h2>Our Mission</h2>
        <p>
          Our mission is to provide premium handbags at affordable prices while maintaining quality and customer satisfaction.
        </p>

        <h2>Why Choose Us?</h2>
        <ul>
          <li>Premium quality products</li>
          <li>Affordable pricing</li>
          <li>Modern designs</li>
          <li>Customer satisfaction first</li>
        </ul>

        <h2>Our Vision</h2>
        <p>
          We aim to become a trusted fashion brand and deliver the best shopping experience to our customers.
        </p>

        <button className="lg-button" onClick={showInfo}>Learn More</button>
      </div>
      <Footer />
    </>
  );
}

export default About;

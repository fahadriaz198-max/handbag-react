import Navbar from "../../components/Navbar/page";
import Footer from "../../components/Footer/page";

function Contact() {
  return (
    <>
      <Navbar />
      <div className="page">
        <div className="form-container">
          <h2 style={{ textAlign: "center", marginTop: 0 }}>Get In Touch</h2>
          <p style={{ textAlign: "center", marginBottom: "30px" }}>
            We'd love to hear from you. Send us a message and we'll respond as soon as possible.
          </p>

          <form action="#" method="POST">
            <div>
              <label htmlFor="name">Full Name</label>
              <input type="text" id="name" name="name" required placeholder="Jane Doe" />
            </div>
            <div>
              <label htmlFor="email">Email Address</label>
              <input type="email" id="email" name="email" required placeholder="you@example.com" />
            </div>
            <div>
              <label htmlFor="subject">Subject</label>
              <select id="subject" name="subject">
                <option value="general">General Inquiry</option>
                <option value="support">Customer Support</option>
                <option value="returns">Returns &amp; Exchanges</option>
                <option value="wholesale">Wholesale</option>
              </select>
            </div>
            <div>
              <label htmlFor="message">Message</label>
              <textarea id="message" name="message" rows={5} required placeholder="How can we help you?" />
            </div>
            <button type="submit" className="lg-button" style={{ width: "100%", marginTop: "10px" }}>
              Send Message
            </button>
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Contact;

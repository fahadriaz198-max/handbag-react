import { Link } from "react-router-dom";
import Navbar from "../../components/Navbar/page";

function Login() {
  return (
    <>
      <Navbar />
      <div className="page">
        <div className="form-container">
          <h2 style={{ textAlign: "center" }}>Login</h2>
          <form>
            <div>
              <label>Email</label>
              <input type="email" required />
            </div>
            <div>
              <label>Password</label>
              <input type="password" required />
            </div>
            <button className="lg-button">Login</button>
          </form>
          <p style={{ textAlign: "center", marginTop: "20px" }}>
            Don't have account? <Link to="/signup">Sign Up</Link>
          </p>
        </div>
      </div>
    </>
  );
}

export default Login;

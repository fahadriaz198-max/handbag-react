import Navbar from "../../components/Navbar/page";

function Signup() {
  return (
    <>
      <Navbar />
      <div className="page">
        <div className="form-container">
          <h2 style={{ textAlign: "center" }}>Create Account</h2>
          <form>
            <div>
              <label>Name</label>
              <input type="text" required />
            </div>
            <div>
              <label>Email</label>
              <input type="email" required />
            </div>
            <div>
              <label>Password</label>
              <input type="password" required />
            </div>
            <button className="lg-button">Sign Up</button>
          </form>
        </div>
      </div>
    </>
  );
}

export default Signup;

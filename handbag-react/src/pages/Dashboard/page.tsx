import Navbar from "../../components/Navbar/page";
import Footer from "../../components/Footer/page";

function Dashboard() {
  return (
    <>
      <Navbar />
      <div className="page">
        <h1>Admin Dashboard</h1>
        <p>Manage your stock and view records</p>

        <section className="card-container">
          <div className="card">
            <h3>View Stock</h3>
            <p>See all products</p>
            <button>View</button>
          </div>
          <div className="card">
            <h3>Delete Stock</h3>
            <p>Remove product</p>
            <button>Delete</button>
          </div>
          <div className="card">
            <h3>Update Stock</h3>
            <p>Edit product details</p>
            <button>Update</button>
          </div>
          <div className="card">
            <h3>Insert Stock</h3>
            <p>Add new product</p>
            <button>Add</button>
          </div>
        </section>

        <h2>Stock Records</h2>
        <div className="table-container">
          <table>
            <thead>
              <tr>
                <th>Product</th>
                <th>Name</th>
                <th>Price</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><img src="/images/product1.png" className="table-image" alt="Midnight Noir" /></td>
                <td>Midnight Noir</td>
                <td>$250</td>
              </tr>
              <tr>
                <td><img src="/images/product2.png" className="table-image" alt="Desert Sand Tote" /></td>
                <td>Desert Sand Tote</td>
                <td>$180</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Dashboard;

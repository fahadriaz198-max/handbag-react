import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Dashboard() {
  const [mounted, setMounted] = useState(false);
  const [activeNav, setActiveNav] = useState("Dashboard");

  useEffect(() => {
    document.body.classList.add("admin-dashboard");
    document.body.setAttribute("data-theme", "dark");
    
    const timer = setTimeout(() => {
      setMounted(true);
    }, 300);

    return () => {
      document.body.classList.remove("admin-dashboard");
      document.body.removeAttribute("data-theme");
      clearTimeout(timer);
    };
  }, []);

  const bars = [
    { height: "40%", val: "$2K" },
    { height: "65%", val: "$4.5K" },
    { height: "50%", val: "$3.2K" },
    { height: "80%", val: "$6K" },
    { height: "45%", val: "$2.8K" },
    { height: "90%", val: "$7.5K" },
    { height: "100%", val: "$8.2K" },
  ];

  return (
    <>
      {/* Modern Sidebar Navigation */}
      <aside className="admin-sidebar">
        <div className="brand gold-gradient-text">AURA</div>
        <nav className="admin-nav">
          <a href="#" className={activeNav === "Dashboard" ? "active" : ""} onClick={(e) => { e.preventDefault(); setActiveNav("Dashboard"); }}>
            <svg viewBox="0 0 24 24"><path d="M3 13h8V3H3v10zm0 8h8v-6H3v6zm10 0h8V11h-8v10zm0-18v6h8V3h-8z"/></svg>
            Dashboard
          </a>
          <a href="#" className={activeNav === "Products" ? "active" : ""} onClick={(e) => { e.preventDefault(); setActiveNav("Products"); }}>
            <svg viewBox="0 0 24 24"><path d="M20 6h-4V4c0-1.11-.89-2-2-2h-4c-1.11 0-2 .89-2 2v2H4c-1.11 0-1.99.89-1.99 2L2 19c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V8c0-1.11-.89-2-2-2zm-6 0h-4V4h4v2z"/></svg>
            Products
          </a>
          <a href="#" className={activeNav === "Orders" ? "active" : ""} onClick={(e) => { e.preventDefault(); setActiveNav("Orders"); }}>
            <svg viewBox="0 0 24 24"><path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z"/></svg>
            Orders
          </a>
          <Link to="/cart" className={activeNav === "Cart" ? "active" : ""} onClick={() => setActiveNav("Cart")}>
            <svg viewBox="0 0 24 24"><path d="M7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2zM1 2v2h2l3.6 7.59-1.35 2.45c-.16.28-.25.61-.25.96 0 1.1.9 2 2 2h12v-2H7.42c-.14 0-.25-.11-.25-.25l.03-.12.9-1.63h7.45c.75 0 1.41-.41 1.75-1.03l3.58-6.49c.08-.14.12-.31.12-.48 0-.55-.45-1-1-1H5.21l-.94-2H1zm16 16c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 2-.9 2-2-.9-2-2-2z"/></svg>
            Cart
          </Link>
          <a href="#" className={activeNav === "Customers" ? "active" : ""} onClick={(e) => { e.preventDefault(); setActiveNav("Customers"); }}>
            <svg viewBox="0 0 24 24"><path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z"/></svg>
            Customers
          </a>
          <a href="#" className={activeNav === "Settings" ? "active" : ""} onClick={(e) => { e.preventDefault(); setActiveNav("Settings"); }}>
            <svg viewBox="0 0 24 24"><path d="M19.14,12.94c0.04-0.3,0.06-0.61,0.06-0.94c0-0.32-0.02-0.64-0.06-0.94l2.03-1.58c0.18-0.14,0.23-0.41,0.12-0.61 l-1.92-3.32c-0.12-0.22-0.37-0.29-0.59-0.22l-2.39,0.96c-0.5-0.38-1.03-0.7-1.62-0.94L14.4,2.81c-0.04-0.24-0.24-0.41-0.48-0.41 h-3.84c-0.24,0-0.43,0.17-0.47,0.41L9.25,5.35C8.66,5.59,8.12,5.92,7.63,6.29L5.24,5.33c-0.22-0.08-0.47,0-0.59,0.22L2.73,8.87 C2.62,9.08,2.66,9.34,2.86,9.48l2.03,1.58C4.84,11.36,4.8,11.69,4.8,12s0.02,0.64,0.06,0.94l-2.03,1.58 c-0.18,0.14-0.23,0.41-0.12,0.61l1.92,3.32c0.12,0.22,0.37,0.29,0.59,0.22l2.39-0.96c0.5,0.38,1.03,0.7,1.62,0.94l0.36,2.54 c0.05,0.24,0.24,0.41,0.48,0.41h3.84c0.24,0,0.43-0.17,0.47-0.41l0.36-2.54c0.59-0.24,1.13-0.56,1.62-0.94l2.39,0.96 c0.22,0.08,0.47,0,0.59-0.22l1.92-3.32c0.12-0.22,0.07-0.49-0.12-0.61L19.14,12.94z M12,15.6c-1.98,0-3.6-1.62-3.6-3.6 s1.62-3.6,3.6-3.6s3.6,1.62,3.6,3.6S13.98,15.6,12,15.6z"/></svg>
            Settings
          </a>
        </nav>
        <div style={{ marginTop: "auto", paddingTop: "20px", borderTop: "1px solid #333" }}>
          <Link to="/" style={{ color: "#aaa", textDecoration: "none", display: "flex", alignItems: "center", gap: "10px" }}>
            <svg style={{ width: "20px", height: "20px", fill: "currentColor" }} viewBox="0 0 24 24"><path d="M10.09 15.59L11.5 17l5-5-5-5-1.41 1.41L12.67 11H3v2h9.67l-2.58 2.59zM19 3H5c-1.11 0-2 .9-2 2v4h2V5h14v14H5v-4H3v4c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z"/></svg>
            View Storefront
          </Link>
        </div>
      </aside>

      {/* Main Content Area */}
      <main className="admin-main">
        {/* Welcome Section */}
        <header className="glass-panel admin-header">
          <div>
            <h1 className="gold-gradient-text">Welcome back, Admin</h1>
            <p>Here's what's happening with Aura Bags today.</p>
          </div>
          <div className="header-actions">
            <button className="premium-btn">+ New Product</button>
            <button className="premium-btn" style={{ background: "transparent", border: "1px solid #d4af37", color: "#d4af37" }}>Download Report</button>
          </div>
        </header>

        {/* Business Statistics */}
        <section className="stats-grid">
          <div className="glass-panel stat-card">
            <div className="stat-icon">
              <svg viewBox="0 0 24 24" style={{ width: "30px", height: "30px", fill: "currentColor" }}><path d="M11.8 10.9c-2.27-.59-3-1.2-3-2.15 0-1.09 1.01-1.85 2.7-1.85 1.78 0 2.44.85 2.5 2.1h2.21c-.07-1.72-1.12-3.3-3.21-3.81V3h-3v2.16c-1.94.42-3.5 1.68-3.5 3.61 0 2.31 1.91 3.46 4.7 4.13 2.5.6 3 1.48 3 2.41 0 .69-.49 1.79-2.7 1.79-2.06 0-2.87-.92-2.98-2.1h-2.2c.12 2.19 1.76 3.42 3.68 3.83V21h3v-2.15c1.95-.37 3.5-1.5 3.5-3.55 0-2.84-2.43-3.81-4.7-4.4z"/></svg>
            </div>
            <div className="stat-info">
              <h3>$42,500</h3>
              <p>Total Revenue (This Month)</p>
            </div>
          </div>
          <div className="glass-panel stat-card">
            <div className="stat-icon">
              <svg viewBox="0 0 24 24" style={{ width: "30px", height: "30px", fill: "currentColor" }}><path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z"/></svg>
            </div>
            <div className="stat-info">
              <h3>128</h3>
              <p>New Orders</p>
            </div>
          </div>
          <div className="glass-panel stat-card">
            <div className="stat-icon">
              <svg viewBox="0 0 24 24" style={{ width: "30px", height: "30px", fill: "currentColor" }}><path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z"/></svg>
            </div>
            <div className="stat-info">
              <h3>3,420</h3>
              <p>Website Visitors</p>
            </div>
          </div>
        </section>

        {/* Inventory Control Cards */}
        <section className="inventory-section">
          <div className="glass-panel inventory-card">
            <svg viewBox="0 0 24 24"><path d="M4 6H2v14c0 1.1.9 2 2 2h14v-2H4V6zm16-4H8c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-1 9h-4v4h-2v-4H9V9h4V5h2v4h4v2z"/></svg>
            <h4>Insert New Stock</h4>
            <p>Add latest collections</p>
          </div>
          <div className="glass-panel inventory-card">
            <svg viewBox="0 0 24 24"><path d="M3 13h8V3H3v10zm0 8h8v-6H3v6zm10 0h8V11h-8v10zm0-18v6h8V3h-8z"/></svg>
            <h4>View All Stock</h4>
            <p>Manage existing items</p>
          </div>
          <div className="glass-panel inventory-card">
            <svg viewBox="0 0 24 24"><path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.39-.39-1.02-.39-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"/></svg>
            <h4>Update Stock</h4>
            <p>Modify pricing & qty</p>
          </div>
          <div className="glass-panel inventory-card">
            <svg viewBox="0 0 24 24"><path d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"/></svg>
            <h4>Delete Stock</h4>
            <p>Remove discontinued items</p>
          </div>
        </section>

        {/* Charts and Timeline Area */}
        <section className="charts-grid">
          <div className="glass-panel chart-panel">
            <h3>Revenue Overview (Last 7 Days)</h3>
            <div className="fake-bar-chart">
              {bars.map((bar, index) => (
                <div 
                  key={index} 
                  className="bar" 
                  style={{ height: mounted ? bar.height : "0" }} 
                  data-val={bar.val}
                ></div>
              ))}
            </div>
          </div>
          
          <div className="glass-panel chart-panel">
            <h3>Recent Activity</h3>
            <ul className="activity-list">
              <li className="activity-item">
                <div className="activity-icon"><svg style={{ width: "20px", height: "20px", fill: "#d4af37" }} viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z"/></svg></div>
                <div className="activity-details">
                  <h5>Stock updated</h5>
                  <p>Midnight Noir qty increased to 15.</p>
                </div>
              </li>
              <li className="activity-item">
                <div className="activity-icon"><svg style={{ width: "20px", height: "20px", fill: "#d4af37" }} viewBox="0 0 24 24"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg></div>
                <div className="activity-details">
                  <h5>New Order #402</h5>
                  <p>Desert Sand Tote sold to Anna M.</p>
                </div>
              </li>
              <li className="activity-item">
                <div className="activity-icon"><svg style={{ width: "20px", height: "20px", fill: "#d4af37" }} viewBox="0 0 24 24"><path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"/></svg></div>
                <div className="activity-details">
                  <h5>Product Added</h5>
                  <p>Ivory Clutch is now live.</p>
                </div>
              </li>
            </ul>
          </div>
        </section>

        {/* Advanced Product Management Table */}
        <section className="glass-panel table-panel">
          <div className="table-header">
            <h3>Inventory Management</h3>
            <div className="search-filter">
              <input type="text" className="search-input" placeholder="Search by name, category..." />
              <select className="search-input" style={{ width: "150px", cursor: "pointer", background: "rgba(0,0,0,0.5)" }}>
                <option value="">All Categories</option>
                <option value="tote">Tote Bags</option>
                <option value="crossbody">Crossbody</option>
                <option value="clutch">Clutches</option>
              </select>
              <button className="premium-btn" style={{ padding: "10px 15px" }}>Filter</button>
            </div>
          </div>
          <div style={{ overflowX: "auto" }}>
            <table className="premium-table">
              <thead>
                <tr>
                  <th>Product</th>
                  <th>Category</th>
                  <th>Price</th>
                  <th>Quantity</th>
                  <th>Status</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <div className="product-cell">
                      <img src="/images/product1.png" alt="Midnight Noir" />
                      <strong>Midnight Noir</strong>
                    </div>
                  </td>
                  <td>Satchel</td>
                  <td>$250.00</td>
                  <td>15</td>
                  <td><span className="status-badge in-stock">In Stock</span></td>
                  <td>
                    <button style={{ background: "transparent", border: "none", color: "#d4af37", cursor: "pointer", marginRight: "10px" }}>Edit</button>
                    <button style={{ background: "transparent", border: "none", color: "#ff4757", cursor: "pointer" }}>Delete</button>
                  </td>
                </tr>
                <tr>
                  <td>
                    <div className="product-cell">
                      <img src="/images/product2.png" alt="Desert Sand Tote" />
                      <strong>Desert Sand Tote</strong>
                    </div>
                  </td>
                  <td>Tote</td>
                  <td>$180.00</td>
                  <td>3</td>
                  <td><span className="status-badge low-stock">Low Stock</span></td>
                  <td>
                    <button style={{ background: "transparent", border: "none", color: "#d4af37", cursor: "pointer", marginRight: "10px" }}>Edit</button>
                    <button style={{ background: "transparent", border: "none", color: "#ff4757", cursor: "pointer" }}>Delete</button>
                  </td>
                </tr>
                <tr>
                  <td>
                    <div className="product-cell">
                      <img src="/images/product3.png" alt="Crimson Crossbody" />
                      <strong>Crimson Crossbody</strong>
                    </div>
                  </td>
                  <td>Crossbody</td>
                  <td>$140.00</td>
                  <td>0</td>
                  <td><span className="status-badge out-stock">Out of Stock</span></td>
                  <td>
                    <button style={{ background: "transparent", border: "none", color: "#d4af37", cursor: "pointer", marginRight: "10px" }}>Edit</button>
                    <button style={{ background: "transparent", border: "none", color: "#ff4757", cursor: "pointer" }}>Delete</button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Minimal footer for admin area */}
        <footer style={{ background: "transparent", borderTop: "1px solid #333", marginTop: "30px", paddingTop: "20px", paddingBottom: "20px", textAlign: "center", color: "#888", fontSize: "0.9rem" }}>
          &copy; 2026 Aura Bags Admin System. All rights reserved. Version 2.4.1 Premium
        </footer>
      </main>
    </>
  );
}

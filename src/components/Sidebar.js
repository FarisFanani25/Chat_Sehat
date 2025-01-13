import React from "react";
import { Nav } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import './Sidebar.css';

const Sidebar = () => {
  // Fungsi untuk logout
  const handleLogout = async () => {
    try {
      // Ambil token yang disimpan di localStorage atau cookie
      const token = localStorage.getItem('token');
      
      // Kirim permintaan logout ke server
      const response = await fetch("http://localhost:8000/api/logout", {
        method: "POST",
        headers: {
          "Authorization": `Bearer ${token}`,
          "Content-Type": "application/json"
        }
      });

      if (response.ok) {
        // Jika logout berhasil, hapus token dari localStorage atau cookie
        localStorage.removeItem('token');

        // Redirect atau lakukan apa pun setelah logout
        window.location.href = "/"; // Atau arahkan ke halaman login
      } else {
        console.error("Logout failed");
      }
    } catch (error) {
      console.error("Error during logout:", error);
    }
  };

  return (
    <div
      style={{
        width: "250px",
        height: "100vh",
        position: "fixed",
        top: 0,
        left: 0,
        backgroundColor: "#fff",
        padding: "20px",
        boxShadow: "2px 0 5px rgba(0,0,0,0.2)",
        transition: "all 0.3s ease",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between", // This will space out the links evenly
      }}
    >
      <div>
        <h2
          style={{
            textAlign: "center",
            marginBottom: "30px",
            fontSize: "1.5rem",
            color: "#00000",
            fontWeight: "bold",
            borderBottom: "2px solid #6c63ff",
            paddingBottom: "40px",
            paddingTop: "30px",
          }}
        >
          HI ADMIN
        </h2>
        <Nav className="flex-column">
          <Nav.Link
            href="/DashboardAdmin"
            style={navLinkStyle}
            className="nav-link"
          >
            Dashboard
          </Nav.Link>
          <Nav.Link
            href="/Usertabel"
            style={navLinkStyle}
            className="nav-link"
          >
            Data Users
          </Nav.Link>
          <Nav.Link
            href="/Artikel"
            style={navLinkStyle}
            className="nav-link"
          >
            Artikel
          </Nav.Link>
        </Nav>
      </div>
      <Nav.Link
        href="#"
        style={{ ...navLinkStyle, marginTop: "auto" }} // This will push it to the bottom
        className="nav-link logout-link"
        onClick={handleLogout} // Menambahkan event handler
      >
        Logout
      </Nav.Link>
    </div>
  );
};

const navLinkStyle = {
  color: "#000",
  fontSize: "1.2rem",
  marginBottom: "15px",
  padding: "10px",
  textAlign: "center",
  borderRadius: "5px",
  textDecoration: "none",
  transition: "all 0.3s ease",
  display: "block",
};

export default Sidebar;

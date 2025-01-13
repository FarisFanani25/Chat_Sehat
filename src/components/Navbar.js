import React, { useState, useEffect } from "react";
import "../components/Navbar.css";
import logo from "../Asset/Logo chatbot.png"; // Sesuaikan dengan lokasi gambar di folder asset

function Navbar() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      setIsLoggedIn(true);
    }
  }, []);

  // Handle logout
  const handleLogout = () => {
    const token = localStorage.getItem("token");
    fetch("http://localhost:8000/api/logout", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    })
      .then((response) => {
        if (response.ok) {
          // Remove the token from localStorage and update the state
          localStorage.removeItem("token");
          setIsLoggedIn(false); // Update login state
          window.location.href = "/"; // Redirect to homepage after logout
        } else {
          alert("Logout failed. Please try again.");
        }
      })
      .catch((error) => {
        console.error("Error during logout:", error);
      });
  };

  return (
    <section className="navbar-area navbar-one">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <nav className="navbar navbar-user navbar-expand-lg navbar-one">
              <a className="navbar-brand d-flex align-items-center" href="/">
                <img src={logo} alt="Logo" className="logo-img" />
                <span className="ms-2 logo-text">ChatSehat</span>
              </a>
              <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarOne"
                aria-controls="navbarOne"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon"></span>
              </button>
              <div
                className="collapse navbar-collapse justify-content-end"
                id="navbarOne"
              >
                <ul className="navbar-nav">
                  <li className="nav-item">
                    <a className="nav-link" href="/">
                      Beranda
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="/About">
                      Tentang
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="/Services">
                      Layanan
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="/Contact">
                      Kontak
                    </a>
                  </li>
                </ul>
                <div className="navbar-btn">
                  {isLoggedIn ? (
                    <button className="btn primary-btn" onClick={handleLogout}>
                      Logout
                    </button>
                  ) : (
                    <a className="btn primary-btn" href="/login">
                      Login
                    </a>
                  )}
                </div>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Navbar;

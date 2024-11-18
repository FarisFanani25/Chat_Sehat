// src/components/Navbar.js
import React from 'react';
import '../components/Navbar.css';
import logo from '../Asset/Logo chatbot.png'; // Sesuaikan dengan lokasi gambar di folder asset

function Navbar() {
  return (
    <section className="navbar-area navbar-one">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <nav className="navbar navbar-expand-lg navbar-one">
              <a className="navbar-brand d-flex align-items-center" href="#">
                <img src={logo} alt="Logo" className="logo-img" />
                <span className="ms-2 logo-text">ChatSehat</span> {/* Teks di samping logo */}
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
              <div className="collapse navbar-collapse justify-content-end" id="navbarOne">
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
                  <a className="btn primary-btn" href="#">
                    Sign In
                  </a>
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

// src/components/HeaderWithNavbar.js
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import '../components/Header.css';
import headerImage from '../Asset/LogoHeader.png'; // Pastikan path ini sesuai

const HeaderUser = () => {
  return (
    <>
      {/* Header Section */}
      <section className="header-area header-one">
        <div className="header-content-area">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-6 col-12">
                <div className="header-wrapper">
                  <div className="header-content">
                    <h1 className="header-title">
                      Solusi Cerdas untuk Pencegahan dan Penanganan Penyalahgunaan Zat
                    </h1>
                    <p className="text-lg">
                      Bergabunglah dengan kami dalam upaya meningkatkan kesadaran dan memberikan dukungan bagi individu yang terpengaruh oleh penyalahgunaan narkotika dan alkohol. Temukan informasi yang Anda butuhkan dan dapatkan bantuan dengan mudah melalui chatbot kami yang siap 24/7.
                    </p>
                    <div className="header-btn rounded-buttons">
                      <a className="btn primary-btn-outline btn-lg" href="/chatbot">
                        LANJUT CHAT
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 col-12">
                <div className="header-image d-none d-lg-block">
                  <div className="image">
                    <img
                      src={headerImage} // Menggunakan gambar dari folder assets
                      alt="Header"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="header-shape">
            <img
              src="https://cdn.ayroui.com/1.0/images/header/header-shape.svg"
              alt="shape"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default HeaderUser;
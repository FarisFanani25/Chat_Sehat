// src/components/Footer.js
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import '../components/Footer.css';
import logo from '../Asset/Logo chatbot.png'; // Sesuaikan dengan lokasi gambar di folder assets

const Footer = () => {
  return (
    <footer className="footer-area footer-one">
      <div className="footer-widget">
        <div className="container">
          <div className="row">
            <div className="col-xl-6 col-lg-4 col-sm-12">
            <div className="f-about d-flex align-items-center flex-column">
  <div className="footer-logo d-flex align-items-center">
    <a href="#">
      <img src={logo} alt="Logo" className="logo-img" />
    </a>
    <span className="ms-2 logo-text">ChatSehat</span>
  </div>
  <p className="text mt-3 text-center">
  Solusi Cerdas untuk Pencegahan dan Penanganan Penyalahgunaan Zat
  </p>
</div>

            </div>
            <div className="col-xl-2 col-lg-2 col-sm-4">
              <div className="footer-link">
                <h6 className="footer-title">Halaman</h6>
                <ul>
                  <li><a href="/">Beranda</a></li>
                  <li><a href="/About">Tentang</a></li>
                  <li><a href="/Services">Layanan</a></li>
                  <li><a href="/Contact">Kontak</a></li>
                </ul>
              </div>
            </div>
            <div className="col-xl-2 col-lg-3 col-sm-4">
              <div className="footer-contact">
                <h6 className="footer-title">Bantuan & Dukungan</h6>
                <ul>
                  <li><i className="lni lni-map-marker"></i> PT.Garapan Indonesia Sukses</li>
                  <li><i className="lni lni-phone-set"></i> 089505385217</li>
                  <li><i className="lni lni-envelope"></i> Garapan_Indonesia_Sukses@gmail.com</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

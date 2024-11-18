import React from 'react';
import './Contact.css'; // Pastikan path ini sesuai dengan lokasi file CSS
import Navbar from '../../components/Navbar'; // Pastikan path ini sesuai dengan lokasi file Navbar
import Footer from '../../components/Footer'; // Pastikan path ini sesuai dengan lokasi file Footer

const Contact = () => {
  return (
    <div>
      <Navbar />
      <section className="call-action-area call-action-one">
        <div className="container">
          <div className="row align-items-center call-action-content">
            <div className="col-xl-8 col-lg-8">
              <div className="call-action-text">
                <h2 className="action-title">
                  Butuh bantuan? <br /> Hubungi kami sekarang!
                </h2>
                <p className="text-lg">
                  Kami siap membantu Anda, jangan ragu untuk menghubungi tim kami untuk informasi lebih lanjut atau bantuan langsung.
                </p>
              </div>
            </div>
            <div className="col-xl-4 col-lg-4">
              <div className="call-action-btn rounded-buttons text-lg-end">
                <a href="mailto:info@yourwebsite.com" className="btn primary-btn rounded-full">
                  Hubungi Kami
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Contact;

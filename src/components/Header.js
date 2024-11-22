import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import '../components/Header.css';
import headerImage from '../Asset/LogoHeader.png'; // Pastikan path ini sesuai
import Chatbot from '../pages/user/Chatbot'; // Import komponen Chatbot
import ChatbotIframe from '../pages/user/ChatbotComponen'; // Import komponen chatbot iframe

const HeaderUser = () => {
  const [isChatbotVisible, setIsChatbotVisible] = useState(false);

  const handleChatbotToggle = () => {
    setIsChatbotVisible(!isChatbotVisible); // Menyalakan/mematikan pop-up chatbot
  };

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
                      <button className="btn primary-btn-outline btn-lg" onClick={handleChatbotToggle}>
                        LANJUT CHAT
                      </button>
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

      {/* Chatbot Pop-up */}
      {isChatbotVisible && (
        <div className="chatbot-popup">
          {/* Menampilkan Chatbot atau Iframe tergantung kebutuhan */}
          {/* Gunakan ChatbotIframe untuk chatbot berbasis iframe */}
          <ChatbotIframe /> 
          {/* Atau jika Anda lebih suka menampilkan Chatbot secara langsung */}
          {/* <Chatbot /> */}
          <button className="close-chatbot" onClick={handleChatbotToggle}>X</button> {/* Tombol untuk menutup chatbot */}
        </div>
      )}
    </>
  );
};

export default HeaderUser;

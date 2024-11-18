// src/pages/user/About.js
import React from "react";
import "../user/About.css";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

// Import gambar dari folder assets
import digitalMarketingImage from "../../Asset/pesan1.png";
import consultingServicesImage from "../../Asset/pesan2.png";
import businessSolutionsImage from "../../Asset/pesan3.png";

function About() {
  return (
    <div>
      <Navbar />
      <section className="about-area about-one">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="about-title text-center">
                <h2 className="about-title fw-bold">Tentang Kami</h2>
                <h3 className="about-description">
                  Kami adalah tim yang berkomitmen untuk mencegah dan menangani
                  penyalahgunaan zat, termasuk narkotika dan alkohol. Melalui
                  sistem informasi dan chatbot, kami menyediakan sumber daya,
                  dukungan, dan informasi yang berguna untuk membantu individu
                  dan komunitas dalam menghadapi tantangan ini. Misi kami adalah
                  meningkatkan kesadaran dan memberikan solusi yang efektif
                  untuk kesehatan mental dan kesejahteraan.
                </h3>
              </div>
            </div>
          </div>
          {/* <!-- row --> */}
          <div className="row justify-content-center">
            {/* Digital Marketing */}
            <div className="col-md-4 col-sm-8">
              <div className="single-about-items">
                <div className="items-icon">
                  <img
                    src={digitalMarketingImage}
                    alt="Digital Marketing"
                    className="items-image"
                  />
                </div>
                <div className="items-content">
                  <h4 className="items-title">Pengantar</h4>
                  <p className="text">
                    Kami adalah sebuah tim yang berdedikasi untuk mencegah dan
                    menangani penyalahgunaan zat, termasuk narkotika dan
                    alkohol. Melalui platform inovatif kami, kami menyediakan
                    informasi, sumber daya, dan dukungan yang diperlukan untuk
                    membantu individu dan komunitas dalam mengatasi tantangan
                    ini. Kami percaya bahwa dengan pengetahuan dan bantuan yang
                    tepat, setiap orang dapat mengambil langkah positif menuju
                    pemulihan.
                  </p>
                </div>
              </div>
            </div>
            {/* Consulting Services */}
            <div className="col-md-4 col-sm-8">
              <div className="single-about-items">
                <div className="items-icon">
                  <img
                    src={consultingServicesImage}
                    alt="Consulting Services"
                    className="items-image"
                  />
                </div>
                <div className="items-content">
                  <h4 className="items-title">Visi dan Misi</h4>
                  <p className="text">
                    Visi: Menjadi sumber terpercaya dalam pencegahan dan
                    penanganan penyalahgunaan zat, serta meningkatkan kualitas
                    hidup masyarakat. Misi: Meningkatkan kesadaran masyarakat
                    tentang bahaya penyalahgunaan zat. Menyediakan informasi
                    yang akurat dan mudah diakses mengenai pencegahan dan
                    penanganan. Mengembangkan chatbot dan sistem informasi yang
                    responsif untuk memberikan dukungan langsung. Berkolaborasi
                    dengan lembaga terkait untuk menyebarluaskan pengetahuan dan
                    sumber daya.
                  </p>
                </div>
              </div>
            </div>
            {/* Business Solutions */}
            <div className="col-md-4 col-sm-8">
              <div className="single-about-items">
                <div className="items-icon">
                  <img
                    src={businessSolutionsImage}
                    alt="Business Solutions"
                    className="items-image"
                  />
                </div>
                <div className="items-content">
                  <h4 className="items-title">Latar Belakang</h4>
                  <p className="text">
                    Penyalahgunaan zat, termasuk narkotika dan alkohol,
                    merupakan masalah serius yang berdampak pada kesehatan fisik
                    dan mental individu serta kesejahteraan masyarakat secara
                    keseluruhan. Data menunjukkan bahwa penyalahgunaan ini dapat
                    menyebabkan gangguan kesehatan, masalah sosial, dan bahkan
                    kematian. Oleh karena itu, penting untuk memiliki pendekatan
                    yang komprehensif dalam pencegahan dan penanganan masalah
                    ini. Dengan memanfaatkan teknologi dan informasi, kami
                    berusaha untuk memberikan solusi yang efektif dan
                    berkelanjutan bagi mereka yang membutuhkan.
                  </p>
                </div>
              </div>
            </div>
          </div>
          {/* <!-- row --> */}
        </div>
        {/* <!-- container --> */}
      </section>
      <Footer />
    </div>
  );
}

export default About;

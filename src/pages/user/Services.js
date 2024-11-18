import React from 'react';
import './Services.css'; // Pastikan path ini sesuai dengan lokasi file CSS
import Navbar from '../../components/Navbar'; // Pastikan path ini sesuai dengan lokasi file Navbar
import Footer from '../../components/Footer'; // Pastikan path ini sesuai dengan lokasi file Footer

const Services = () => {
  const services = [
    {
      title: "Sistem Informasi",
      description: "Kami menyediakan akses ke database informasi yang komprehensif mengenai penyalahgunaan zat. Pengguna dapat menemukan artikel, panduan, dan sumber daya yang relevan untuk memahami dan menangani masalah ini.",
      icon: "fas fa-user-md",
    },
    {
      title: "Chatbot Interaktif",
      description: "Chatbot kami menawarkan interaksi langsung untuk menjawab pertanyaan seputar penyalahgunaan zat dan memberikan dukungan emosional. Tersedia 24 jam untuk mengakomodasi kebutuhan pengguna.",
      icon: "fas fa-book",
    },
    {
      title: "Jaringan Dukungan Komunitas",
      description: "Kami membangun jaringan dukungan yang menghubungkan individu yang terpengaruh oleh penyalahgunaan zat dengan kelompok dan organisasi lokal, untuk mendorong kolaborasi dan saling dukung.",
      icon: "fas fa-hands-helping",
    },
  ];

  return (
    <div>
      <Navbar /> {/* Komponen Navbar akan ditampilkan di atas */}
      <div className="services">
        <h2 className="services-title">Layanan Kami</h2>
        <div className="services-list">
          {services.map((service, index) => (
            <div className="service-item" key={index}>
              <i className={service.icon}></i>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </div>
          ))}
        </div>
      </div>
      <Footer /> {/* Komponen Footer akan ditampilkan di bawah */}
    </div>
  );
};

export default Services;

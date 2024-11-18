// src/pages/user/Dashboard.js
import React from 'react';
import { Link } from 'react-router-dom';
import Blog from './Blog';
import Navbar from '../../components/Navbar';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import './Dashboard.css';
import dashboardImage from '../../Asset/Chatbot.jpg'; // Import gambar dari folder assets

const Dashboard = () => {
  return (
    <div className="dashboard-wrapper">
      <Navbar /> {/* Menampilkan Navbar */}
      <Header /> {/* Menampilkan Header */}
      <div className="container-fluid mt-4">
        <div className="dashboard-content">
          <div className="row">
            <div className="col-md-6">
              <h2>Informasi dan Dukungan</h2>
              <p>
                Di sini, kami menyediakan berbagai alat dan sumber daya untuk
                membantu Anda dan orang-orang terdekat dalam menghadapi masalah
                penyalahgunaan zat. Kami memahami bahwa isu ini kompleks dan
                menantang.
              </p>
              <Link to="/DetailPage" className="btn btn-primary">Lihat Lebih Lanjut</Link>
            </div>
            <div className="col-md-6">
              <img 
                src={dashboardImage} 
                alt="Deskripsi Gambar" 
                className="img-fluid"
              />
            </div>
          </div>
          {/* Render Blog di bawah konten dashboard */}
          <Blog />
        </div>
      </div>
      <Footer /> {/* Menampilkan Footer */}
    </div>
  );
};

export default Dashboard;

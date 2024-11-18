import React from 'react';
import { Link } from 'react-router-dom'; // Pastikan Anda menggunakan react-router-dom untuk navigasi
import './DetailPage.css'; // Jika Anda ingin menambahkan CSS khusus

const DetailPage = () => {
  return (
    <div className="detail-page">
      <h1>Detail Informasi dan Dukungan</h1>
      <p>
        Di sini, kami menyediakan berbagai alat dan sumber daya yang dirancang untuk membantu Anda dan orang-orang terdekat dalam menghadapi masalah penyalahgunaan zat. Kami memahami bahwa penyalahgunaan narkotika dan alkohol adalah isu yang kompleks dan seringkali menantang. Oleh karena itu, kami berkomitmen untuk memberikan informasi yang akurat dan relevan untuk mendukung pemulihan. Anda dapat menemukan panduan, artikel, dan materi edukasi yang menjelaskan berbagai jenis penyalahgunaan zat, tanda-tanda peringatan, dan cara mencari bantuan. Selain itu, chatbot kami yang tersedia 24/7 siap membantu menjawab pertanyaan Anda, memberikan dukungan emosional, dan mengarahkan Anda ke layanan profesional yang diperlukan. Kami di sini untuk memastikan bahwa Anda tidak sendirian dalam perjalanan ini dan memiliki akses ke dukungan yang Anda butuhkan.
      </p>
      <Link to="/" className="btn btn-secondary">Kembali ke Dashboard</Link>
    </div>
  );
};

export default DetailPage;
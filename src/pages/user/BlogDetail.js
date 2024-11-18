import React from 'react';
import { useParams } from 'react-router-dom';
import '../user/BlogDetail.css'
import blogImage1 from "../../Asset/Blog1.jpeg";
import blogImage2 from "../../Asset/Blog2.jpeg";
import blogImage3 from "../../Asset/Blog3.jpeg";

const blogData = {
  1: {
    title: "Empat Pengedar-Pemakai Narkoba di Buleleng Ditangkap Polisi",
    date: "7/10/2024",
    comments: 24,
    image: blogImage1,
    category: "Berita",
    content: `
      Sebanyak empat pelaku penyalahgunaan narkoba berinisial AM (21), MM (27), KF (29), dan IM (29) ditangkap 
      Satuan Reserse (Satres) Narkoba Polres Buleleng, Bali. MM dan KF ditangkap sebagai pengguna, sementara AM 
      dan IM dibekuk dalam statusnya sebagai pengedar narkoba. Kapolres Buleleng, AKBP Ida Bagus Widwan Sutadi, 
      menjelaskan AM ditangkap pada Kamis (26/9/2024) di parkiran minimarket wilayah Lovina, Desa Kalibukbuk, 
      Kecamatan Buleleng. Polisi menyita barang bukti berupa tujuh paket sabu siap edar seberat 1,18 gram saat 
      menangkap AM. Selanjutnya, MM ditangkap pada hari yang sama di sebuah rumah Banjar Dinas Bunut Panggang, 
      Desa Kaliasem, Kecamatan Banjar. MM kedapatan menyimpan dua pipet kaca berisi residu sabu dengan berat 
      total 2,81 gram. MM kepada polisi mengaku membeli barang haram tersebut dari AM. Kemudian, KF ditangkap 
      juga ditangkap pada hari yang sama di sebuah kos Jalan Resimuka Barat Gang Merpati VII Nomor 12, Desa 
      Tegal Kertha, Kecamatan Denpasar Barat. Dari hasil penggeledahan, ditemukan barang bukti berupa lima 
      paket pipet plastik warna hijau yang berisi sabu seberat 0,79 gram. Widwan mengungkapkan KF sebelumnya 
      masuk daftar pencarian orang (DPO) Polres Buleleng. Polres Buleleng sebelumnya sempat menangkap tersangka 
      berinisial FM di Kelurahan Kampung Kajanan, Singaraja, pada 7 Maret 2024. Saat itu ditemukan barang bukti 
      lima paket sabu. Menurut FM, barang tersebut milik kakaknya KF yang sudah terlebih dahulu melarikan diri 
      sebelum polisi datang. Terakhir, IM ditangkap di sebuah kos Desa Panji, Kecamatan Sukasada, Buleleng, pada 
      Selasa (1/10/2024). Dari hasil penggeledahan, polisi menemukan 29 paket sabu siap edar dengan berat 6,28 
      gram. IM mengakui puluhan paket sabu tersebut merupakan miliknya. Ia mengaku mendapatkan barang tersebut 
      dari seorang lelaki berinisial YS asal Denpasar. Atas perbuatannya, AM dan IM dijerat dengan Pasal 114 ayat 
      (1) Undang-Undang (UU) Nomor 35 tentang Narkotika dengan pidana pidana paling singkat lima tahun paling 
      lama 20 tahun penjara. Sementara KF dan FM dijerat dengan Pasal 112 ayat (1) UU Nomor 35 tentang Narkotika 
      dengan ancaman pidana paling singkat empat tahun dan paling lama 12 tahun. Widwan menegaskan akan terus 
      menangkap pengguna maupun pengedar narkoba yang masih berkeliaran di Buleleng. Ia mengungkapkan sudah ada 
      lebih dari 100 pelaku penyalahgunaan narkoba ditangkap di Buleleng. "Saya ingatkan kepada pengedar maupun 
      pengguna agar segera berhenti karena saya dengan seluruh anggota Polres Buleleng bersemangat memerangi 
      para pengedar," kata Widwan, Senin (7/10/2024).
    `,
  },
  2: {
    title: "Analisis Fenomena Penyalahgunaan Narkoba pada Remaja",
    date: "14/04/2024",
    comments: 15,
    image: blogImage2,
    category: "Jurnal",
    content: `
      Penyalahgunaan narkoba menjadi masalah sosial yang melibatkan berbagai kalangan di masyarakat termasuk 
      remaja. Fenomena ini menimbulkan berbagai dampak yang buruk bukan hanya pada individu namun juga lingkungan 
      sekitarnya. Kasus penyalahgunaan terus mengalami peningkatan sehingga diperlukan perhatian dari berbagai 
      elemen yang ada di masyarakat. Remaja memiliki rentang usia di mana mereka mencari identitas dan jati diri. 
      Kondisi remaja di fase ini sangat mungkin dipengaruhi oleh hubungannya dengan lingkungan sekitar. Faktor 
      teman atau kelompok sebaya, keluarga, pola asuh, bahkan situasi yang berubah melatarbelakangi remaja rentan 
      terhadap penyalahgunaan narkoba. Penelitian ini akan mengkaji peristiwa penyalahgunaan narkoba yang dilakukan 
      oleh remaja menggunakan teori sistem ekologi Bronfenbrenner (1979). Peneliti akan mencoba untuk menggambarkan 
      dan memahami bagaimana faktor-faktor lingkungan berperan dalam penyalahgunaan narkoba pada remaja. Teori ini 
      memandang individu sebagai bagian dari sistem ekologi yang melibatkan mikrosistem, mesosistem, eksosistem, 
      makrosistem, dan kronosistem. Analisis meliputi pengaruh keluarga, teman sebaya, sekolah, media, dan faktor 
      budaya terhadap keputusan remaja dalam penyalahgunaan narkoba. Dengan pemahaman yang mendalam tentang pengaruh 
      lingkungan terhadap penyalahgunaan narkoba, upaya pencegahan dan intervensi yang tepat dapat dirancang untuk 
      membantu remaja tidak menjadi korban penyalahgunaan narkoba. Masalah ini bukan hanya masalah individu, tetapi 
      juga mencerminkan hasil interaksi dalam lingkungan yang lebih luas sehingga memerlukan solusi yang holistik.
    `,
  },
  3: {
    title: "Pedoman Pencegahan Penyalahgunaan Narkoba Bagi Remaja",
    date: "05/10/2014",
    comments: 18,
    image: blogImage3,
    category: "Buku",
    content: `
      Penyalahgunaan dan pengedaran gelap narkoba dewasa ini sudah menjadi ancaman serius terhadap berbagai aspek 
      kehidupan, bahkan terhadap kelangsungan hidup bangsa. Para remaja pada khususnya dan generasi muda pada umumnya 
      merupakan aset yang amat berharga bagi kelangsungan hidup bangsa, namun pada waktu yang sama, merupakan kelompok 
      yang paling rentan terhadap penyalahgunaan narkoba. Menyikapi hal ini, tidak ada pilihan lain, kecuali pemerintah 
      secara bersama-sama dengan segenap lapisan masyarakat harus saling bahu membahu melakukan upaya pemberantasan 
      penyalahgunaan dan peredaran gelap narkoba. Penerbitan buku ini, dimaksudkan sebagai penambahan dan pengkayaan 
      bahan pendidikan pencegahan dan penyadaran akan bahaya penyalahgunaan narkoba khususnya bagi para remaja, serta 
      bertujuan agar mengerti dan dapat berperan aktif dalam penanggulangannya.
    `,
  },
};

function BlogDetail() {
  const { id } = useParams();
  const blog = blogData[id];

  if (!blog) {
    return <div>Artikel tidak ditemukan.</div>;
  }

  return (
    <div className="container">
      <div className="single-blog">
        <img src={blog.image} alt={blog.title} className="img-fluid" />
        <h2>{blog.title}</h2>
        <p><i className="lni lni-calendar"></i> {blog.date}</p>
        <p><i className="lni lni-comments-alt"></i> {blog.comments} Komen</p>
        <div className="category">{blog.category}</div>
        <p>{blog.content}</p>
      </div>
    </div>
  );
}

export default BlogDetail;

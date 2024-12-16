// Import yang diperlukan
import React, { useState } from 'react';
import axios from 'axios';
import './Add_aerikel.css'

const Artikel = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [role, setRole] = useState('berita'); // Default role
  const [author, setAuthor] = useState('');
  const [image, setImage] = useState(null);
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!title || !content || !role || !author) {
      setMessage('Semua field wajib diisi!');
      return;
    }

    const formData = new FormData();
    formData.append('title', title);
    formData.append('content', content);
    formData.append('role', role);
    formData.append('author', author);
    formData.append('image', image);

    try {
      const response = await axios.post('https://example.com/api/articles', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      if (response.status === 201) {
        setMessage('Artikel berhasil ditambahkan!');
        setTitle('');
        setContent('');
        setRole('berita');
        setAuthor('');
        setImage(null);
      } else {
        setMessage('Gagal menambahkan artikel.');
      }
    } catch (error) {
      console.error(error);
      setMessage('Terjadi kesalahan. Silakan coba lagi nanti.');
    }
  };

  const handleImageChange = (e) => {
    setImage(e.target.files[0]);
  };

  return (
    <div className="add-article-container">
      <h1>Tambah Artikel Baru</h1>
      {message && <p className="message">{message}</p>}
      <form onSubmit={handleSubmit} className="add-article-form">
        <div className="form-group">
          <label htmlFor="title">Judul</label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Masukkan judul artikel"
          />
        </div>
        <div className="form-group">
          <label htmlFor="content">Konten</label>
          <textarea
            id="content"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            placeholder="Masukkan konten artikel"
          ></textarea>
        </div>
        <div className="form-group">
          <label htmlFor="role">Role</label>
          <select
            id="role"
            value={role}
            onChange={(e) => setRole(e.target.value)}
          >
            <option value="berita">Berita</option>
            <option value="jurnal">Jurnal</option>
            <option value="buku">Buku</option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="author">Penulis</label>
          <input
            type="text"
            id="author"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
            placeholder="Masukkan nama penulis"
          />
        </div>
        <div className="form-group">
          <label htmlFor="image">Gambar</label>
          <input
            type="file"
            id="image"
            accept="image/*"
            onChange={handleImageChange}
          />
        </div>
        <button type="submit" className="submit-button">Simpan Artikel</button>
      </form>
    </div>
  );
};

export default Artikel;

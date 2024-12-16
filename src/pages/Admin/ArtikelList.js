import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './styles/ArticlesList.css'; // Tambahkan file CSS untuk styling

const ArticlesList = () => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  // Ambil data artikel dari backend
  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const response = await axios.get('https://example.com/api/articles');
        setArticles(response.data); // Set data artikel
        setLoading(false);
      } catch (err) {
        setError('Gagal memuat artikel. Silakan coba lagi.');
        setLoading(false);
      }
    };

    fetchArticles();
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <div className="articles-list-container">
      <h1>Daftar Artikel</h1>
      <table className="articles-table">
        <thead>
          <tr>
            <th>No</th>
            <th>Judul</th>
            <th>Role</th>
            <th>Penulis</th>
            <th>Aksi</th>
          </tr>
        </thead>
        <tbody>
          {articles.map((article, index) => (
            <tr key={article.id_artikel}>
              <td>{index + 1}</td>
              <td>{article.title}</td>
              <td>{article.role}</td>
              <td>{article.author}</td>
              <td>
                {/* Tombol Aksi */}
                <button
                  onClick={() => handleView(article.id_artikel)}
                  className="view-button"
                >
                  Lihat
                </button>
                <button
                  onClick={() => handleDelete(article.id_artikel)}
                  className="delete-button"
                >
                  Hapus
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );

  // Fungsi untuk melihat artikel (redirect atau tampilkan detail)
  const handleView = (id) => {
    window.location.href = `/articles/${id}`; // Redirect ke halaman detail artikel
  };

  // Fungsi untuk menghapus artikel
  const handleDelete = async (id) => {
    if (window.confirm('Apakah Anda yakin ingin menghapus artikel ini?')) {
      try {
        await axios.delete(`https://example.com/api/articles/${id}`);
        setArticles(articles.filter((article) => article.id_artikel !== id));
        alert('Artikel berhasil dihapus!');
      } catch (err) {
        console.error(err);
        alert('Gagal menghapus artikel.');
      }
    }
  };
};

export default ArticlesList;

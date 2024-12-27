import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import NavbarAdmin from "../../components/NavbarAdmin";
import "./Artikelist.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Swal from "sweetalert2";
import EditArticleModal from "./EditArticleModal";
import CreateArticleModal from "./CreateArticleModal";

const ArticlesPage = () => {
  const [articles, setArticles] = useState([]);
  const [error, setError] = useState("");
  const [showCreateModal, setShowCreateModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [newArticle, setNewArticle] = useState({
    title: "",
    content: "",
    author: "",
    role: "berita",
    image: null,
  });
  const [editArticle, setEditArticle] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const token = localStorage.getItem("token");
        const response = await axios.get("http://localhost:8000/api/articles", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
          withCredentials: true,
        });
        setArticles(response.data);

        Swal.fire({
          title: "Berhasil!",
          text: "Artikel berhasil dimuat!",
          icon: "success",
          timer: 1500,
          showConfirmButton: false,
        });
      } catch (err) {
        console.error(err);
        setError("Gagal memuat artikel. Silakan coba lagi nanti.");
        Swal.fire({
          title: "Gagal!",
          text: "Tidak dapat memuat artikel!",
          icon: "error",
          timer: 1500,
          showConfirmButton: false,
        });
      }
    };
    fetchArticles();
  }, []);

  const handleDelete = async (id) => {
    Swal.fire({
      title: "Hapus Artikel?",
      text: "Apakah Anda yakin ingin menghapus artikel ini?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Ya, Hapus!",
      cancelButtonText: "Batal",
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          const token = localStorage.getItem("token");
          await axios.delete(`http://localhost:8000/api/articles/${id}`, {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          });
          setArticles((prev) =>
            prev.filter((article) => article.id_artikel !== id)
          );
          Swal.fire({
            title: "Berhasil!",
            text: "Artikel berhasil dihapus.",
            icon: "success",
            timer: 1500,
            showConfirmButton: false,
          });
        } catch (err) {
          console.error(err);
          Swal.fire({
            title: "Gagal!",
            text: "Tidak dapat menghapus artikel.",
            icon: "error",
            timer: 1500,
            showConfirmButton: false,
          });
        }
      }
    });
  };

  const handleAddArticle = async (e) => {
    e.preventDefault();
  
    // Memeriksa format gambar
    if (newArticle.image && !["image/jpeg", "image/png", "image/jpg", "image/gif"].includes(newArticle.image.type)) {
      Swal.fire({
        title: "Gagal!",
        text: "File gambar harus berformat JPG, JPEG, PNG, atau GIF.",
        icon: "error",
        timer: 1500,
        showConfirmButton: false,
      });
      return;
    }
  
    try {
      const token = localStorage.getItem("token");
      const formData = new FormData();
Object.keys(editArticle).forEach((key) => {
  formData.append(key, editArticle[key]);
});

await axios.put(`http://localhost:8000/api/articles/${editArticle.id_artikel}`, formData, {
  headers: {
    "Content-Type": "multipart/form-data",
  },
});

  
      const response = await axios.post(
        "http://localhost:8000/api/articles",
        formData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "multipart/form-data",
          },
        }
      );
  
      setArticles((prev) => [...prev, response.data.article]);
      setShowCreateModal(false);
  
      Swal.fire({
        title: "Berhasil!",
        text: "Artikel berhasil ditambahkan!",
        icon: "success",
        timer: 1500,
        showConfirmButton: false,
      });
    } catch (err) {
      console.error(err);
      Swal.fire({
        title: "Gagal!",
        text: "Tidak dapat menambahkan artikel.",
        icon: "error",
        timer: 1500,
        showConfirmButton: false,
      });
    }
  };  

  const handleUpdateArticle = async (e) => {
    e.preventDefault();
    try {
      const token = localStorage.getItem("token");
      const formData = new FormData();
  
      // Tambahkan semua field ke FormData
      Object.entries(editArticle).forEach(([key, value]) => {
        if (key === "image" && value instanceof File) {
          formData.append(key, value); // Upload file jika ada
        } else {
          formData.append(key, value);
        }
      });
  
      // Kirim request menggunakan metode PUT
      const response = await axios.put(
        `http://localhost:8000/api/articles/${editArticle.id_artikel}`,
        formData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "multipart/form-data",
          },
        }
      );
  
      setArticles((prev) =>
        prev.map((item) =>
          item.id_artikel === response.data.article.id_artikel
            ? response.data.article
            : item
        )
      );
  
      setShowEditModal(false);
      setEditArticle(null);
  
      Swal.fire({
        title: "Berhasil!",
        text: "Artikel berhasil diperbarui!",
        icon: "success",
        timer: 1500,
        showConfirmButton: false,
      });
    } catch (err) {
      console.error(err);
      Swal.fire({
        title: "Gagal!",
        text: "Tidak dapat memperbarui artikel.",
        icon: "error",
        timer: 1500,
        showConfirmButton: false,
      });
    }
  };  

  return (
    <div>
      <NavbarAdmin />
      <div className="container-fluid">
        <div className="row">
          <nav className="col-md-2 d-none d-md-block bg-light sidebar">
            <div className="sidebar-sticky">
              <ul className="nav flex-column">
                <li className="nav-item">
                  <Link className="nav-link" to="/DashboardAdmin">
                    Dashboard
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link active" to="/articles">
                    Artikel
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/manage-users">
                    Daftar User
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/settings">
                    Settings
                  </Link>
                </li>
              </ul>
            </div>
          </nav>

          <main className="main-content col-md-9 ml-sm-auto col-lg-10 px-4">
            <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
              <h1 className="h2">Manajemen Artikel</h1>
              <button
                className="btn btn-primary"
                onClick={() => setShowCreateModal(true)}
              >
                Tambah Artikel
              </button>
            </div>

            {error && <div className="alert alert-danger">{error}</div>}

            <table className="table table-bordered">
              <thead>
                <tr>
                  <th>#</th>
                  <th>Judul</th>
                  <th>Konten</th>
                  <th>Penulis</th>
                  <th>Gambar</th>
                  <th>Aksi</th>
                </tr>
              </thead>
              <tbody>
                {articles.map((article, index) => (
                  <tr key={article.id_artikel}>
                    <td>{index + 1}</td>
                    <td>{article.title}</td>
                    <td>{article.content}</td>
                    <td>{article.author}</td>
                    <td>
                      {article.image ? (
                        <img
                          src={`http://localhost:8000/storage/${article.image}`}
                          alt="Artikel"
                          style={{ width: "100px", height: "auto" }}
                        />
                      ) : (
                        "Tidak ada gambar"
                      )}
                    </td>
                    <td>
                      <button
                        className="btn btn-warning me-2"
                        onClick={() => {
                          setEditArticle(article);
                          setShowEditModal(true);
                        }}
                      >
                        Edit
                      </button>
                      <button
                        className="btn btn-danger"
                        onClick={() => handleDelete(article.id_artikel)}
                      >
                        Hapus
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </main>
        </div>
      </div>

      {/* Create Modal */}
      <CreateArticleModal
  showModal={showCreateModal}
  handleClose={() => setShowCreateModal(false)}
  setArticles={setArticles}
  setShowCreateModal={setShowCreateModal}
/>

      {/* Edit Modal */}
      {editArticle && (
        <EditArticleModal
          showModal={showEditModal}
          handleClose={() => setShowEditModal(false)}
          handleSubmit={handleUpdateArticle}
          editArticle={editArticle}
          handleInputChange={(e) =>
            setEditArticle({ ...editArticle, [e.target.name]: e.target.value })
          }
        />
      )}
    </div>
  );
};

export default ArticlesPage;
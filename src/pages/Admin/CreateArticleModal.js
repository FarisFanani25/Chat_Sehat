import React, { useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";

const CreateArticleModal = ({ showModal, handleClose, setArticles, setShowCreateModal }) => {
    const [newArticle, setNewArticle] = useState({
      title: "",
      content: "",
      author: "",
      role: "berita",
      image: null,
    });
  
    const handleInputChange = (e) => {
        const { name, value, files } = e.target;
        setNewArticle((prev) => ({
          ...prev,
          [name]: files ? files[0] : value,
        }));
      };
  
    const handleSubmit = async (e) => {
  e.preventDefault();

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

  const formData = new FormData();
  Object.entries(newArticle).forEach(([key, value]) => {
    if (key === "image" && value instanceof File) {
      formData.append(key, value); // Tambahkan file gambar
    } else {
      formData.append(key, value);
    }
  });

  try {
    const token = localStorage.getItem("token");
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

    setArticles((prev) => [...prev, response.data.article]); // Update state dengan artikel baru
    setShowCreateModal(false);

    // Reset form state
    setNewArticle({
      title: "",
      content: "",
      author: "",
      role: "berita",
      image: null,
    });

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

  
    return (
      showModal && (
        <div className="modal d-block" tabIndex="-1">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Tambah Artikel</h5>
                <button
                  type="button"
                  className="btn-close"
                  onClick={handleClose}
                ></button>
              </div>
              <form onSubmit={handleSubmit}>
                <div className="modal-body">
                  <div className="mb-3">
                    <label className="form-label">Judul</label>
                    <input
                      type="text"
                      className="form-control"
                      name="title"
                      value={newArticle.title}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  <div className="mb-3">
                    <label className="form-label">Konten</label>
                    <textarea
                      className="form-control"
                      name="content"
                      value={newArticle.content}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  <div className="mb-3">
                    <label className="form-label">Penulis</label>
                    <input
                      type="text"
                      className="form-control"
                      name="author"
                      value={newArticle.author}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  <div className="mb-3">
                    <label className="form-label">Jenis Artikel</label>
                    <select
                      className="form-control"
                      name="role"
                      value={newArticle.role}
                      onChange={handleInputChange}
                      required
                    >
                      <option value="berita">Berita</option>
                      <option value="jurnal">Jurnal</option>
                      <option value="majalah">Majalah</option>
                    </select>
                  </div>
                  <div className="mb-3">
                    <label className="form-label">Gambar</label>
                    <input
                      type="file"
                      className="form-control"
                      name="image"
                      onChange={handleInputChange}
                    />
                  </div>
                </div>
                <div className="modal-footer">
                  <button
                    type="button"
                    className="btn btn-secondary"
                    onClick={handleClose}
                  >
                    Batal
                  </button>
                  <button type="submit" className="btn btn-primary">
                    Simpan
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )
    );
  };
  
  export default CreateArticleModal;
  
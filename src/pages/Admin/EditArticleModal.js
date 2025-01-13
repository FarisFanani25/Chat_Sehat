import React from "react";

const EditArticleModal = ({ showModal, handleClose, handleSubmit, editArticle, handleInputChange }) => {
  const handleFormSubmit = (e) => {
    e.preventDefault();

    // Debug untuk melihat data editArticle
    console.log("editArticle data:", editArticle);

    const articleId = editArticle?.id_artikel || editArticle?.id;
    if (!articleId) {
      console.error("ID artikel tidak ditemukan. Pastikan data editArticle dikirim dengan benar.");
      return;
    }

    const formData = new FormData();

    // Masukkan semua field ke dalam FormData
    for (const key in editArticle) {
      if (key === "image" && editArticle[key] instanceof File) {
        formData.append(key, editArticle[key]);
      } else {
        formData.append(key, editArticle[key] || "");
      }
    }

    handleSubmit(formData); // Kirim FormData ke handler submit
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    handleInputChange({
      target: { name: e.target.name, value: file },
    });
  };

  return (
    <div className={`modal ${showModal ? "show" : ""}`} tabIndex="-1" style={{ display: showModal ? "block" : "none" }}>
      <div className="modal-dialog">
        <div className="modal-content">
          <form onSubmit={handleFormSubmit}>
            <div className="modal-header">
              <h5 className="modal-title">Edit Artikel</h5>
              <button type="button" className="close" onClick={handleClose}>
                <span>&times;</span>
              </button>
            </div>
            <div className="modal-body">
              {/* Form untuk mengedit artikel */}
              <div className="form-group">
                <label htmlFor="title">Judul</label>
                <input
                  type="text"
                  className="form-control"
                  id="title"
                  name="title"
                  value={editArticle?.title || ""}
                  onChange={handleInputChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="content">Konten</label>
                <textarea
                  className="form-control"
                  id="content"
                  name="content"
                  value={editArticle?.content || ""}
                  onChange={handleInputChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="author">Penulis</label>
                <input
                  type="text"
                  className="form-control"
                  id="author"
                  name="author"
                  value={editArticle?.author || ""}
                  onChange={handleInputChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="image">Gambar</label>
                <input
                  type="file"
                  className="form-control"
                  id="image"
                  name="image"
                  onChange={handleFileChange}
                />
                {editArticle?.image && !(editArticle?.image instanceof File) && (
                  <img
                    src={`http://localhost:8000/storage/${editArticle.image}`}
                    alt="Preview"
                    style={{ width: "100px", height: "auto" }}
                  />
                )}
              </div>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" onClick={handleClose}>
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
  );
};

export default EditArticleModal;

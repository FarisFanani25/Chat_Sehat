import React from "react";

const EditArticleModal = ({
  showModal,
  handleClose,
  handleSubmit,
  editArticle,
  handleInputChange,
}) => {
  return (
    showModal && (
      <div className="modal d-block" tabIndex="-1">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Edit Artikel</h5>
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
                    value={editArticle.title}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label">Konten</label>
                  <textarea
                    className="form-control"
                    name="content"
                    value={editArticle.content}
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
                    value={editArticle.author}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label">Role</label>
                  <select
                    className="form-control"
                    name="role"
                    value={editArticle.role}
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
                  {editArticle.image && (
                    <img
                      src={`http://localhost:8000/storage/${editArticle.image}`}
                      alt="Artikel"
                      style={{
                        width: "100px",
                        height: "auto",
                        marginTop: "10px",
                      }}
                    />
                  )}
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
                  Simpan Perubahan
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    )
  );
};

export default EditArticleModal;

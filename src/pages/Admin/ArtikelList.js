import React, { useEffect, useState } from "react";
import axios from "axios";
import { Modal, Button, Form } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import Swal from "sweetalert2";
import Sidebar from "../../components/Sidebar";
import { Container } from "react-bootstrap"

const CrudArticles = () => {
  const [articles, setArticles] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [currentArticle, setCurrentArticle] = useState(null);
  const [formData, setFormData] = useState({
    title: "",
    content: "",
    role: "",
    author: "",
    image: null,
  });

  const token = localStorage.getItem("token");

  useEffect(() => {
    fetchArticles();
  }, []);

  const fetchArticles = async () => {
    try {
      const response = await axios.get("http://localhost:8000/api/artikel", {
        headers: { Authorization: `Bearer ${token}` },
      });
      setArticles(response.data);
    } catch (error) {
      Swal.fire("Error", "Gagal memuat artikel", "error");
      console.error("Error fetching articles:", error);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e) => {
    setFormData({ ...formData, image: e.target.files[0] });
  };

  const handleSubmit = async () => {
    const form = new FormData();
    form.append("title", formData.title);
    form.append("content", formData.content);
    form.append("role", formData.role);
    form.append("author", formData.author);
    if (formData.image) form.append("image", formData.image);

    try {
      if (currentArticle) {
        // Update
        await axios.post(
          `http://localhost:8000/api/artikel/${currentArticle.id_artikel}`,
          form,
          {
            headers: { Authorization: `Bearer ${token}` },
          }
        );
        Swal.fire("Berhasil", "Artikel berhasil diperbarui", "success");
      } else {
        // Create
        await axios.post("http://localhost:8000/api/artikel", form, {
          headers: { Authorization: `Bearer ${token}` },
        });
        Swal.fire("Berhasil", "Artikel berhasil ditambahkan", "success");
      }
      fetchArticles();
      setShowModal(false);
      setFormData({ title: "", content: "", role: "", author: "", image: null });
      setCurrentArticle(null);
    } catch (error) {
      Swal.fire("Error", "Gagal menyimpan artikel", "error");
      console.error("Error saving article:", error);
    }
  };

  const handleEdit = (article) => {
    setCurrentArticle(article);
    setFormData({
      title: article.title,
      content: article.content,
      role: article.role,
      author: article.author,
      image: null,
    });
    setShowModal(true);
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:8000/api/artikel/${id}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      Swal.fire("Berhasil", "Artikel berhasil dihapus", "success");
      fetchArticles();
    } catch (error) {
      Swal.fire("Error", "Gagal menghapus artikel", "error");
      console.error("Error deleting article:", error);
    }
  };

  return (
    <div style={{ display: "flex" }}>
      <Sidebar /> {/* Sidebar di sebelah kiri */}
      <Container style={{ marginLeft: "250px", padding: "20px" }}>
      <h1>DATA Artikel</h1>
      <Button variant="primary" onClick={() => setShowModal(true)}>
        Tambah Artikel
      </Button>
      <table className="table mt-3">
        <thead>
          <tr>
            <th>#</th>
            <th>Title</th>
            <th>Role</th>
            <th>Author</th>
            <th>Image</th>
            <th>Actions</th>
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
                <Button
                  variant="warning"
                  onClick={() => handleEdit(article)}
                  className="me-2"
                >
                  Edit
                </Button>
                <Button
                  variant="danger"
                  onClick={() => handleDelete(article.id_artikel)}
                >
                  Delete
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <Modal show={showModal} onHide={() => setShowModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>{currentArticle ? "Edit Artikel" : "Tambah Artikel"}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3">
              <Form.Label>Title</Form.Label>
              <Form.Control
                type="text"
                name="title"
                value={formData.title}
                onChange={handleInputChange}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Content</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                name="content"
                value={formData.content}
                onChange={handleInputChange}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Role</Form.Label>
              <Form.Select
                name="role"
                value={formData.role}
                onChange={handleInputChange}
              >
                <option value="">Pilih Role</option>
                <option value="berita">Berita</option>
                <option value="jurnal">Jurnal</option>
                <option value="majalah">Majalah</option>
              </Form.Select>
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Author</Form.Label>
              <Form.Control
                type="text"
                name="author"
                value={formData.author}
                onChange={handleInputChange}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Image</Form.Label>
              <Form.Control
                type="file"
                name="image"
                onChange={handleFileChange}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowModal(false)}>
            Close
          </Button>
          <Button variant="primary" onClick={handleSubmit}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
      </Container>
    </div>
  );
};

export default CrudArticles;
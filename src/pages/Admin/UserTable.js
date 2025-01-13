import React, { useState, useEffect } from "react";
import axios from "axios";
import { Container } from "react-bootstrap"
import Sidebar from "../../components/Sidebar"; // Pastikan Sidebar sudah ada
import Swal from "sweetalert2"; // Import SweetAlert2
import UserFormPopup from "./UserFormPopup"; // Import UserFormPopup untuk form tambah/edit
import "bootstrap/dist/css/bootstrap.min.css";

const UserTable = () => {
  const [users, setUsers] = useState([]); // Inisialisasi dengan array kosong
  const [loading, setLoading] = useState(true); // State untuk loading
  const [error, setError] = useState(""); // State untuk pesan error
  const [showForm, setShowForm] = useState(false); // State untuk menampilkan form tambah/edit
  const [selectedUser, setSelectedUser] = useState(null); // Untuk menyimpan user yang dipilih untuk edit

  // Fungsi untuk memuat data pengguna
  const fetchUsers = async () => {
    try {
      const token = localStorage.getItem("token");
      const response = await axios.get("http://localhost:8000/api/users", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
        withCredentials: true,
      });

      if (Array.isArray(response.data.users)) {
        setUsers(response.data.users); // Jika respons memiliki properti "users"
      } else {
        setUsers([]); // Jika tidak ada data array
      }
    } catch (err) {
      console.error("Gagal memuat data pengguna:", err);
      setError("Gagal memuat data pengguna. Silakan coba lagi nanti.");
      Swal.fire({
        title: "Gagal!",
        text: "Tidak dapat memuat data pengguna.",
        icon: "error",
        timer: 1500,
        showConfirmButton: false,
        toast: true,
        position: "top-end",
      });
    } finally {
      setLoading(false); // Set loading ke false setelah data selesai dimuat
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  // Fungsi untuk menghapus user
  const handleDelete = async (id) => {
    try {
      const token = localStorage.getItem("token");
      await axios.delete(`http://localhost:8000/api/users/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      // Hapus user dari state
      setUsers((prevUsers) => prevUsers.filter((user) => user.id !== id));

      Swal.fire({
        title: "Berhasil!",
        text: "Pengguna berhasil dihapus.",
        icon: "success",
        timer: 1500,
        showConfirmButton: false,
        toast: true,
        position: "top-end",
      });
    } catch (err) {
      console.error("Gagal menghapus pengguna:", err);

      Swal.fire({
        title: "Gagal!",
        text: "Gagal menghapus pengguna. Silakan coba lagi.",
        icon: "error",
        timer: 1500,
        showConfirmButton: false,
        toast: true,
        position: "top-end",
      });
    }
  };

  // Fungsi untuk menambah/edit pengguna
  const handleAddEditUser = (user = null) => {
    setSelectedUser(user); // Jika user ada, set data untuk edit, jika tidak berarti tambah
    setShowForm(true); // Tampilkan form
  };

  // Menutup modal form
  const closeForm = () => {
    setShowForm(false);
    setSelectedUser(null); // Reset user yang dipilih setelah form ditutup
  };

  // Fungsi untuk menangani hasil submit dari UserFormPopup
  const handleFormSubmit = async (formData, isEdit) => {
    try {
      const token = localStorage.getItem("token");
      if (isEdit) {
        // Update user
        await axios.put(`http://localhost:8000/api/users/${formData.id}`, formData, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        Swal.fire({
          title: "Berhasil!",
          text: "Pengguna berhasil diperbarui.",
          icon: "success",
          timer: 1500,
          showConfirmButton: false,
          toast: true,
          position: "top-end",
        });
      } else {
        // Tambah user baru
        await axios.post("http://localhost:8000/api/users", formData, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        Swal.fire({
          title: "Berhasil!",
          text: "Pengguna berhasil ditambahkan.",
          icon: "success",
          timer: 1500,
          showConfirmButton: false,
          toast: true,
          position: "top-end",
        });
      }

      closeForm();
      fetchUsers(); // Memuat ulang data pengguna setelah operasi sukses
    } catch (err) {
      console.error("Gagal menyimpan data pengguna:", err);
      Swal.fire({
        title: "Gagal!",
        text: "Gagal menyimpan data pengguna. Silakan coba lagi.",
        icon: "error",
        timer: 1500,
        showConfirmButton: false,
        toast: true,
        position: "top-end",
      });
    }
  };

  return (
    <div style={{ display: "flex" }}>
      <Sidebar /> {/* Sidebar di sebelah kiri */}
      <Container style={{ marginLeft: "250px", padding: "20px" }}>
        <h1>DATA Users</h1>
        <button
          className="btn btn-primary"
          onClick={() => handleAddEditUser()} // Tampilkan form untuk tambah user baru
        >
          Tambah Pengguna
        </button>
        
        {/* Tampilkan pesan loading */}
        {loading && <div className="alert alert-info">Memuat data...</div>}
  
        {/* Tampilkan pesan error */}
        {error && <div className="alert alert-danger">{error}</div>}
  
        {/* Tabel data pengguna */}
        {!loading && users.length > 0 ? (
          <table className="table table-bordered">
            <thead>
              <tr>
                <th>No</th>
                <th>Nama</th>
                <th>Email</th>
                <th>Role</th>
                <th>Status Verifikasi</th>
                <th>Aksi</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user, index) => (
                <tr key={user.id}>
                  <td>{index + 1}</td>
                  <td>{user.name}</td>
                  <td>{user.email}</td>
                  <td>{user.role}</td>
                  <td>
                    {user.verification_token === null ? (
                      <span className="badge bg-success">Terverifikasi</span>
                    ) : (
                      <span className="badge bg-danger">Belum Terverifikasi</span>
                    )}
                  </td>
                  <td>
                    <button
                      className="btn btn-warning mr-2"
                      onClick={() => handleAddEditUser(user)} // Tampilkan form untuk edit user
                    >
                      Edit
                    </button>
                    <button
                      className="btn btn-danger"
                      onClick={() => handleDelete(user.id)}
                    >
                      Hapus
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          !loading && (
            <div className="alert alert-warning">Tidak ada data pengguna.</div>
          )
        )}
      </Container> {/* Pastikan menutup Container */}
      
      {/* Modal Form Tambah/Edit Pengguna */}
      {showForm && (
        <UserFormPopup
          user={selectedUser}
          onClose={closeForm}
          onSubmit={handleFormSubmit}
        />
      )}
    </div>
  ); 
};

export default UserTable;
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Swal from "sweetalert2"; // Import SweetAlert2
import "./Register.css"; // File CSS khusus untuk halaman Register

const Register = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Kirim data register ke backend
      const response = await axios.post("http://127.0.0.1:8000/api/register", {
        name: formData.name,
        email: formData.email,
        password: formData.password,
        role: "user", // Default role
      });

      console.log("Register successful:", response.data);

      // Tampilkan pesan sukses dengan SweetAlert2
      Swal.fire({
        title: "Registrasi Berhasil!",
        text: "Akun Anda berhasil dibuat. Silakan login.",
        icon: "success",
        confirmButtonText: "OK",
      }).then(() => {
        // Redirect ke halaman login setelah klik OK
        navigate("/verify-token");
      });
    } catch (error) {
      console.error("Register failed:", error.response?.data?.message || error.message);

      // Tampilkan pesan error dengan SweetAlert2
      Swal.fire({
        title: "Registrasi Gagal!",
        text: error.response?.data?.message || "Terjadi kesalahan. Silakan coba lagi.",
        icon: "error",
        confirmButtonText: "OK",
      });
    }
  };

  return (
    <div className="register-one">
      <div className="container">
        <div className="register-form">
          <h2 className="text-center">Register</h2>
          <form onSubmit={handleSubmit}>
            <div className="form-input">
              <label htmlFor="name">Name</label>
              <div className="input-items">
                <i className="fas fa-user"></i>
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Enter your name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>
            <div className="form-input">
              <label htmlFor="email">Email</label>
              <div className="input-items">
                <i className="fas fa-envelope"></i>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Enter your email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>
            <div className="form-input">
              <label htmlFor="password">Password</label>
              <div className="input-items">
                <i className="fas fa-lock"></i>
                <input
                  type="password"
                  id="password"
                  name="password"
                  placeholder="Enter your password"
                  value={formData.password}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>
            <div className="rounded-buttons">
              <button type="submit" className="primary-btn">
                Register
              </button>
            </div>
            <div className="form-input text">
              Already have an account? <a href="/login">Login</a>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;

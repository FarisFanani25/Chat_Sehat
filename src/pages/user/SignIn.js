import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Swal from "sweetalert2"; // Import SweetAlert2
import "./SignIn.css"; // File CSS untuk styling tambahan
import logo from '/Project MBKM/chat_bot/src/Asset/Logo chatbot.png'; // Atur path relatif yang benar

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      // Kirim data login ke API
      const response = await axios.post("http://127.0.0.1:8000/api/login", {
        email,
        password,
      });

      const { access_token, user } = response.data;

      // Simpan token dan data user di localStorage
      localStorage.setItem("token", access_token);
      localStorage.setItem("user", JSON.stringify(user));

      // Tampilkan SweetAlert2 dengan nama user
      Swal.fire({
        title: `Selamat datang, ${user.name}!`,
        text: "Login berhasil. Anda akan diarahkan ke halaman dashboard.",
        icon: "success",
        confirmButtonText: "OK",
      }).then(() => {
        // Arahkan ke halaman sesuai role
        if (user.role === "admin") {
          navigate("/admin");
        } else {
          navigate("/");
        }
      });
    } catch (error) {
      // Tangkap error dan tampilkan pesan kesalahan
      setError(
        error.response?.data?.message || "Login gagal. Silakan coba lagi."
      );
    }
  };

  return (
    <section className="signin-area signin-one">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-5">
            {/* Tambahkan Logo dan Nama di Sampingnya */}
            <div className="form-logo text-center">
              <div className="logo-container">
                <img src={logo} alt="Logo" className="form-logo-image" />
                <span className="logo-name">Chatbot</span>
              </div>
            </div>
            <form onSubmit={handleLogin}>
              <div className="signin-form form-style-two rounded-buttons">
                <div className="row">
                  {/* Input Email */}
                  <div className="col-md-12">
                    <div className="form-input">
                      <label>Your account will be under this email</label>
                      <div className="input-items default">
                        <input
                          type="text"
                          placeholder="Email"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                        />
                        <i className="lni lni-envelope"></i>
                      </div>
                    </div>
                  </div>

                  {/* Input Password */}
                  <div className="col-md-12">
                    <div className="form-input">
                      <label>Password for your account</label>
                      <div className="input-items default">
                        <input
                          type="password"
                          placeholder="Password"
                          value={password}
                          onChange={(e) => setPassword(e.target.value)}
                        />
                        <i className="lni lni-key"></i>
                      </div>
                    </div>
                  </div>

                  {/* Tampilkan Error Jika Login Gagal */}
                  {error && (
                    <div className="col-md-12">
                      <p style={{ color: "red", textAlign: "center" }}>{error}</p>
                    </div>
                  )}

                  {/* Tombol Sign In */}
                  <div className="col-md-6">
                    <div className="form-input rounded-buttons">
                      <button
                        className="btn primary-btn rounded-full"
                        type="submit"
                      >
                        Sign In!
                      </button>
                    </div>
                  </div>

                  {/* Link ke Register */}
                  <div className="col-md-12">
                    <div className="form-input text-center">
                      <p className="text">
                        Don't have an account?{" "}
                        <a href="/register">Register here</a>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SignIn;

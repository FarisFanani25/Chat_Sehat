import React, { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import axios from "axios";
import "./VerifyToken.css";

const VerifyToken = () => {
    const navigate = useNavigate();
    const [token, setToken] = useState(Array(6).fill(""));
    const inputsRef = useRef([]);

    const handleChange = (index, value) => {
        if (/^[0-9]*$/.test(value)) {
            const newToken = [...token];
            newToken[index] = value;
            setToken(newToken);

            // Pindah fokus ke input berikutnya jika ada
            if (value && index < 5) {
                inputsRef.current[index + 1].focus();
            }
        }
    };

    const handleBackspace = (index, value) => {
        if (!value && index > 0) {
            inputsRef.current[index - 1].focus();
        }
    };

    const handleVerify = async () => {
        try {
            const response = await axios.post("http://127.0.0.1:8000/api/verify-token", {
                token: token.join(""), // Gabungkan angka menjadi string
            });

            Swal.fire({
                title: "Verifikasi Berhasil!",
                text: "Email Anda berhasil diverifikasi.",
                icon: "success",
                confirmButtonText: "OK",
            }).then(() => {
                navigate("/login");
            });
        } catch (error) {
            Swal.fire({
                title: "Verifikasi Gagal!",
                text: error.response?.data?.message || "Token tidak valid.",
                icon: "error",
                confirmButtonText: "OK",
            });
        }
    };

    return (
        <div className="verify-token-container">
            <h2>Verifikasi Email</h2>
            <div className="token-inputs">
                {token.map((digit, index) => (
                    <input
                        key={index}
                        type="text"
                        maxLength="1"
                        value={digit}
                        onChange={(e) => handleChange(index, e.target.value)}
                        onKeyDown={(e) => {
                            if (e.key === "Backspace") handleBackspace(index, e.target.value);
                        }}
                        ref={(el) => (inputsRef.current[index] = el)} // Simpan referensi input
                    />
                ))}
            </div>
            <button onClick={handleVerify} className="verify-btn">
                Verifikasi
            </button>
        </div>
    );
};

export default VerifyToken;
import React from "react";
import { Link } from "react-router-dom";
import NavbarAdmin from "../../components/NavbarAdmin"; // Import NavbarAdmin
import "bootstrap/dist/css/bootstrap.min.css";
import "./DashboardAdmin.css";
import { Line } from "react-chartjs-2"; // Import Line chart from react-chartjs-2
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

// Register the necessary components of Chart.js
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const DashboardAdmin = () => {
  // Example data for the chart (could be dynamic from your API)
  const data = {
    labels: ["Minggu 1", "Minggu 2", "Minggu 3", "Minggu 4", "Minggu 5"], // Time labels
    datasets: [
      {
        label: "Pengunjung ChatBot",
        data: [50, 150, 100, 200, 250], // Jumlah pengguna yang mengunjungi ChatBot
        fill: false,
        borderColor: "#007bff",
        tension: 0.1,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      title: {
        display: true,
        text: "Kunjungan Pengguna ke ChatBot (5 Minggu Terakhir)", // Title of the chart
      },
    },
  };

  return (
    <div>
      <NavbarAdmin /> {/* Menambahkan Navbar */}
      <div className="container-fluid">
        <div className="row">
          {/* Sidebar */}
          <nav className="col-md-2 d-none d-md-block bg-light sidebar">
            <div className="sidebar-sticky">
              <ul className="nav flex-column">
                <li className="nav-item">
                  <Link className="nav-link active" to="/dashboard">
                    Dashboard
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/manage-users">
                    Daftar User
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/orders">
                    Artikel
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

          {/* Main Content */}
          <main
            role="main"
            className="main-content col-md-9 ml-sm-auto col-lg-10 px-4"
          >
            <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
              <h1 className="h2">Dashboard</h1>
            </div>

            {/* Stats Section */}
            <div className="row">
              <div className="col-lg-3 col-md-6 mb-4">
                <div className="card text-white bg-primary">
                  <div className="card-body">
                    <h5 className="card-title">Total Users</h5>
                    <p className="card-text">1500</p>
                  </div>
                </div>
              </div>

              <div className="col-lg-3 col-md-6 mb-4">
                <div className="card text-white bg-success">
                  <div className="card-body">
                    <h5 className="card-title">Berita</h5>
                    <p className="card-text">250</p>
                  </div>
                </div>
              </div>

              <div className="col-lg-3 col-md-6 mb-4">
                <div className="card text-white bg-danger">
                  <div className="card-body">
                    <h5 className="card-title">Jurnal</h5>
                    <p className="card-text">30</p>
                  </div>
                </div>
              </div>

              <div className="col-lg-3 col-md-6 mb-4">
                <div className="card text-white bg-warning">
                  <div className="card-body">
                    <h5 className="card-title">Buku</h5>
                    <p className="card-text">120</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Kunjungan Pengguna ke ChatBot (5 Minggu Terakhir) */}
            <div className="card mb-4">
              <div className="card-header">
                Kunjungan Pengguna ke ChatBot (5 Minggu Terakhir)
              </div>
              <div className="card-body">
                <Line data={data} options={options} /> {/* Render the chart */}
              </div>
            </div>

            {/* Recent Activity */}
            <div className="card">
              <div className="card-header">Aktivitas Baru</div>
              <div className="card-body">
                <ul>
                  <li>New order placed by User #120</li>
                  <li>Product #45 updated</li>
                  <li>User #87 updated their profile</li>
                </ul>
              </div>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
};

export default DashboardAdmin;

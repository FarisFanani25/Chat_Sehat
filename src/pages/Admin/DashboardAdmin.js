import React, { useState, useEffect } from "react";
import axios from "axios";
import { Container, Row, Col, Card } from "react-bootstrap";
import Sidebar from "../../components/Sidebar"; // Pastikan Sidebar sudah ada
import { Line } from "react-chartjs-2"; // Import Line dari react-chartjs-2
import "bootstrap/dist/css/bootstrap.min.css";
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from "chart.js";

// Mendaftarkan chart.js untuk digunakan
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const Dashboard = () => {
  const [userCount, setUserCount] = useState(0); // Data count User
  const [beritaCount, setBeritaCount] = useState(0); // Data count Berita
  const [jurnalCount, setJurnalCount] = useState(0); // Data count Jurnal
  const [bukuCount, setBukuCount] = useState(0); // Data count Buku
  const [dailyCounts, setDailyCounts] = useState({
    labels: [],
    pengguna: [],
    berita: [],
    jurnal: [],
    buku: [],
  }); // Data count per hari

  // Fungsi untuk mengambil data dari API
  const fetchDashboardData = async () => {
    try {
      const response = await axios.get('http://localhost:8000/api/dashboard');
      setUserCount(response.data.userCount);
      setBeritaCount(response.data.beritaCount);
      setJurnalCount(response.data.jurnalCount);
      setBukuCount(response.data.bukuCount);

      // Ambil data dailyCounts untuk semua kategori
      setDailyCounts({
        labels: response.data.dailyUserCounts.labels, // Labels untuk tanggal
        pengguna: response.data.dailyUserCounts.data, // Jumlah pengguna per hari
        berita: response.data.dailyArticleCounts.berita.data, // Jumlah artikel berita per hari
        jurnal: response.data.dailyArticleCounts.jurnal.data, // Jumlah artikel jurnal per hari
        buku: response.data.dailyArticleCounts.buku.data, // Jumlah artikel buku per hari
      });
    } catch (error) {
      console.error('Error fetching dashboard data:', error);
    }
  };

  useEffect(() => {
    fetchDashboardData();
  }, []);

  // Data untuk grafik
  const chartData = {
    labels: dailyCounts.labels, // Tanggal dari data API
    datasets: [
      {
        label: "Jumlah Pengguna Per Hari",
        data: dailyCounts.pengguna, // Jumlah pengguna per hari
        borderColor: "rgba(75, 192, 192, 1)",
        backgroundColor: "rgba(75, 192, 192, 0.2)",
        fill: true,
      },
      {
        label: "Artikel Berita Per Hari",
        data: dailyCounts.berita, // Jumlah artikel berita per hari
        borderColor: "rgba(255, 99, 132, 1)",
        backgroundColor: "rgba(255, 99, 132, 0.2)",
        fill: true,
      },
      {
        label: "Artikel Jurnal Per Hari",
        data: dailyCounts.jurnal, // Jumlah artikel jurnal per hari
        borderColor: "rgba(54, 162, 235, 1)",
        backgroundColor: "rgba(54, 162, 235, 0.2)",
        fill: true,
      },
      {
        label: "Artikel Buku Per Hari",
        data: dailyCounts.buku, // Jumlah artikel buku per hari
        borderColor: "rgba(153, 102, 255, 1)",
        backgroundColor: "rgba(153, 102, 255, 0.2)",
        fill: true,
      },
    ],
  };

  const chartOptions = {
    responsive: true,
    plugins: {
      title: {
        display: true,
        text: "Jumlah Pengguna dan Artikel Per Hari",
      },
      tooltip: {
        mode: "index",
        intersect: false,
      },
    },
  };

  return (
    <div style={{ display: "flex" }}>
      <Sidebar /> {/* Sidebar di sebelah kiri */}
      <Container style={{ marginLeft: "250px", padding: "20px" }}>
        <h1>Dashboard</h1>

        <Row>
          {/* Kotak untuk data User */}
          <Col md={3} sm={6} className="mb-4">
            <Card>
              <Card.Body>
                <Card.Title>Data User</Card.Title>
                <Card.Text>{userCount} Pengguna</Card.Text>
              </Card.Body>
            </Card>
          </Col>

          {/* Kotak untuk data Berita */}
          <Col md={3} sm={6} className="mb-4">
            <Card>
              <Card.Body>
                <Card.Title>Data Berita</Card.Title>
                <Card.Text>{beritaCount} Berita</Card.Text>
              </Card.Body>
            </Card>
          </Col>

          {/* Kotak untuk data Jurnal */}
          <Col md={3} sm={6} className="mb-4">
            <Card>
              <Card.Body>
                <Card.Title>Data Jurnal</Card.Title>
                <Card.Text>{jurnalCount} Jurnal</Card.Text>
              </Card.Body>
            </Card>
          </Col>

          {/* Kotak untuk data Buku */}
          <Col md={3} sm={6} className="mb-4">
            <Card>
              <Card.Body>
                <Card.Title>Data Buku</Card.Title>
                <Card.Text>{bukuCount} Buku</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        {/* Grafik Data Pengguna dan Artikel per Hari */}
        <Row>
          <Col md={12} className="mb-4">
            <Card>
              <Card.Body>
                <Card.Title>Grafik Jumlah Pengguna dan Artikel Per Hari</Card.Title>
                <Line data={chartData} options={chartOptions} />
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Dashboard;
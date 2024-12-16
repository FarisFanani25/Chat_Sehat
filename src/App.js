import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Dashboard from './pages/user/Dashboard';
import About from './pages/user/About';
import Services from './pages/user/Services';
import Contact from './pages/user/Contact';
import DetailPage from './pages/user/DetailPage';
import BlogDetail from './pages/user/BlogDetail';
import SignIn from './pages/user/SignIn';
import Register from './pages/user/Register';
import DashboardAdmin from './pages/Admin/DashboardAdmin';
import Artikel from './pages/Admin/Add_artikel';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Dashboard />} /> 
        <Route path="/login" element={<SignIn />} />
        <Route path="/register" element={<Register />} />
        <Route path="/About" element={<About />} /> 
        <Route path="/Services" element={<Services />} /> 
        <Route path="/Contact" element={<Contact />} />
        <Route path="/DetailPage" element={<DetailPage />} />
        <Route path="/blog/:id" element={<BlogDetail />} />
        
        //Admin
        <Route path="/DashboardAdmin" element={<DashboardAdmin />} />
        <Route path="/Artikel" element={<Artikel />} />

      </Routes>
    </Router>
  );
}

export default App;

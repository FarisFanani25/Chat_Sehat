import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Dashboard from './pages/user/Dashboard';
import About from './pages/user/About';
import Chatbot from './pages/user/Chatbot';
import Services from './pages/user/Services';
import Contact from './pages/user/Contact';
import DetailPage from './pages/user/DetailPage';
import BlogDetail from './pages/user/BlogDetail';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Dashboard />} /> 
        <Route path="/About" element={<About />} /> 
        <Route path="/chatbot" element={<Chatbot />} /> 
        <Route path="/Services" element={<Services />} /> 
        <Route path="/Contact" element={<Contact />} />
        <Route path="/DetailPage" element={<DetailPage />} />
        <Route path="/blog/:id" element={<BlogDetail />} />
      </Routes>
    </Router>
  );
}

export default App;

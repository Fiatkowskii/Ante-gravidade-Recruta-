import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainLayout from './components/layout/MainLayout';
import Home from './pages/Home';
import Services from './pages/Services';
import Candidates from './pages/Candidates';
import Contact from './pages/Contact';
import { HelmetProvider } from 'react-helmet-async';
import './index.css';

function App() {
  return (
    <HelmetProvider>
      <Router>
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route index element={<Home />} />
            <Route path="servicos" element={<Services />} />
            <Route path="candidatos" element={<Candidates />} />
            <Route path="contato" element={<Contact />} />
          </Route>
        </Routes>
      </Router>
    </HelmetProvider>
  );
}

export default App;

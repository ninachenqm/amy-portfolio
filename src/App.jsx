// src/App.jsx
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
// import AboutPage from './pages/AboutPage'; // 不再需要导入
import DanceGalleryPage from './pages/DanceGalleryPage';
import ArtGalleryPage from './pages/ArtGalleryPage';
import SpeechesPage from './pages/SpeechesPage';

function App() {
  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground">
      <Navbar />
      <main className="flex-grow"> {/* 移除了 container 和 padding，让页面组件自己控制 */}
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/dance" element={<DanceGalleryPage />} />
          <Route path="/art" element={<ArtGalleryPage />} />
          <Route path="/speeches" element={<SpeechesPage />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;

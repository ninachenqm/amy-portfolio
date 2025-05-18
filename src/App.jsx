// src/App.jsx
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import DanceGalleryPage from './pages/DanceGalleryPage';
import ArtGalleryPage from './pages/ArtGalleryPage';
import SpeechesPage from './pages/SpeechesPage';
import DanceEventDetailPage from './pages/DanceEventDetailPage';
import DrawingDetailPage from './pages/DrawingDetailPage'; // 1. 导入画作详情页面组件

function App() {
  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground">
      <Navbar />
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/dance" element={<DanceGalleryPage />} />
          <Route path="/dance/events/:eventId" element={<DanceEventDetailPage />} />
          <Route path="/art" element={<ArtGalleryPage />} />
          <Route path="/art/drawings/:drawingId" element={<DrawingDetailPage />} />
          <Route path="/speeches" element={<SpeechesPage />} /> {/* 2. 添加路由 */}        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;

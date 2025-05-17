// src/App.jsx
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import DanceGalleryPage from './pages/DanceGalleryPage';
import ArtGalleryPage from './pages/ArtGalleryPage';
// import SpeechesPage from './pages/SpeechesPage'; // 如果你创建了这个页面
import DanceEventDetailPage from './pages/DanceEventDetailPage'; // 1. 导入活动详情页面组件

function App() {
  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground">
      <Navbar />
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/dance" element={<DanceGalleryPage />} />
          {/* 2. 添加动态路由，:eventId 是一个参数 */}
          <Route path="/dance/events/:eventId" element={<DanceEventDetailPage />} />
          <Route path="/art" element={<ArtGalleryPage />} />
          {/* <Route path="/speeches" element={<SpeechesPage />} /> */}
          {/* 你可以添加一个 404 页面 */}
          {/* <Route path="*" element={<NotFoundPage />} /> */}
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;

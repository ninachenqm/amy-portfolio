// src/App.jsx
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import DanceGalleryPage from './pages/DanceGalleryPage';
import ArtGalleryPage from './pages/ArtGalleryPage';
import SpeechesPage from './pages/SpeechesPage';
import DrawingDetailPage from './pages/DrawingDetailPage';
import ScrollToTopButton from './components/ScrollToTopButton';
import ScrollToTop from './components/ScrollToTop';
import ExperiencesPage from './pages/ExperiencesPage';
import WorkExperiencePage from './pages/WorkExperiencePage';



function App() {
  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground">
      <ScrollToTop />
      <Navbar />
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/dance" element={<DanceGalleryPage />} />
          <Route path="/art" element={<ArtGalleryPage />} />
          <Route path="/art/drawings/:drawingId" element={<DrawingDetailPage />} />
          <Route path="/speeches" element={<SpeechesPage />} />
          <Route path="/experiences" element={<ExperiencesPage />} />
          <Route path="/work-experience" element={<WorkExperiencePage />} />

        </Routes>
      </main>
      <Footer />
      <ScrollToTopButton />
    </div>
  );
}

export default App;

import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import DanceGalleryPage from './pages/DanceGalleryPage';
import ArtGalleryPage from './pages/ArtGalleryPage';
import SpeechesPage from './pages/SpeechesPage'; 

function App() {
  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground">
      <Navbar />
      <main className="flex-grow container mx-auto px-4 py-8"> 
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/dance" element={<DanceGalleryPage />} />
          <Route path="/art" element={<ArtGalleryPage />} />
          <Route path="/speeches" element={<SpeechesPage />} />
          {/* later add a 404 Page */}
          {/* <Route path="*" element={<NotFoundPage />} /> */}
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;

// src/pages/DanceGalleryPage.jsx
import React, { useState } from 'react'; 
import DanceEventsGrid from '../components/DanceEventsGrid';
import { allDanceEvents } from '../data/danceData';

function DanceGalleryPage() {

  const [selectedImg, setSelectedImg] = useState(null);


  const eventsByYear = allDanceEvents.reduce((acc, event) => {
    const year = event.year;
    if (!acc[year]) {
      acc[year] = [];
    }
    acc[year].push(event);
    return acc;
  }, {});


  const sortedYears = Object.keys(eventsByYear).sort((a, b) => b - a);

  return (
    <div className="container mx-auto px-4 py-8 md:py-12">
      <div className="text-center mb-10 md:mb-16">
        <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-primary gradient-text animate-in" style={{ animationDelay: '0.2s' }}>
          Dance Showcase
        </h1>
        <p className="mt-4 text-lg text-muted-foreground max-w-xl mx-auto animate-in" style={{ animationDelay: '0.4s' }}>
        Capture every spectacular dance moment. Click on the image to view the full-screen preview.
        </p>

        <ul className="mt-6 text-lg text-muted-foreground space-y-2 text-left max-w-md mx-auto list-disc list-inside">
          <li>1 National Championship</li>
          <li>7 State Championships</li>
          <li>25+ Local championships</li>
          <li>Solo State Championship</li>
          <li>Duo State Championship</li>
          <li>4 Community service parades</li>
          <li>Practiced for 585 consecutive days, transforming from a novice into a core member of the competition team. </li>
        </ul>
      </div>

      {sortedYears.length > 0 ? (
        <div className="space-y-12 md:space-y-16">
          {sortedYears.map(year => (
            <section key={year}>
              <DanceEventsGrid
                yearTitle={year}
                events={eventsByYear[year]}
                onImageClick={setSelectedImg}
              />
            </section>
          ))}
        </div>
      ) : (
        <p className="text-center text-muted-foreground text-xl py-10">
          Dance event photos are currently being organized—stay tuned!
        </p>
      )}

      {/* full-screen image preview */}
      {selectedImg && (
        <div
          className="fixed inset-0 bg-black/90 flex items-center justify-center z-50 cursor-pointer"
          onClick={() => setSelectedImg(null)}
        >
          <img
            src={selectedImg}
            alt="Full size preview"
            className="max-h-[90%] max-w-[90%] object-contain"
          />
          <button
            className="absolute top-4 right-4 text-white text-3xl font-bold"
            onClick={() => setSelectedImg(null)}
          >
            &times;
          </button>
        </div>
      )}
    </div>
  );
}

export default DanceGalleryPage;

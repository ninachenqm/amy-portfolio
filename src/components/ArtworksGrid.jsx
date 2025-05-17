// src/components/ArtworksGrid.jsx
import React from 'react';
import DrawingCard from './DrawingCard'; // We created this in the previous step

// Define the props for ArtworksGrid
// interface ArtworksGridProps {
//   yearTitle: string | number; // e.g., "2024" or "Recent Works"
//   description?: string; // Optional description for the year/section
//   artworks: Array<{ // Array of drawing objects
//     id: string;
//     title: string;
//     imageUrl: string;
//     materials?: string;
//     detailPageUrl: string;
//     // Add any other props DrawingCard needs, like 'year' if you want to pass it down
//   }>;
// }

export default function ArtworksGrid({ yearTitle, description, artworks }) {
  if (!artworks || artworks.length === 0) {
    return (
      <div className="py-8 text-center">
        <p className="text-lg text-muted-foreground">
          No artworks to display for {yearTitle}.
        </p>
      </div>
    );
  }

  return (
    <section className="w-full py-10 md:py-12 lg:py-16"> {/* Section for each year's grid */}
      <div className="container mx-auto px-4 md:px-6">
        {/* Year Title and Optional Description */}
        <div className="mb-8 md:mb-10">
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-left text-foreground">
            {yearTitle}
          </h2>
          {description && (
            <p className="mt-2 text-md text-left text-muted-foreground max-w-3xl">
              {description}
            </p>
          )}
        </div>

        {/* Responsive Grid for Drawing Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8 place-items-stretch">
          {/* 'place-items-stretch' will make grid items (our cards) stretch to fill the cell height if their content is different.
            Combined with h-full on the card itself, this helps create a uniform look.
          */}
          {artworks.map((artwork) => (
            <DrawingCard
              key={artwork.id} // Crucial for React lists
              id={artwork.id}
              title={artwork.title}
              imageUrl={artwork.imageUrl}
              materials={artwork.materials}
              detailPageUrl={artwork.detailPageUrl}
              // Pass down any other necessary props to DrawingCard
            />
          ))}
        </div>
      </div>
    </section>
  );
}

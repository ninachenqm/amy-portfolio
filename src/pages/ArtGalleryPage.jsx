// src/pages/ArtGalleryPage.jsx
import React from 'react';
import ArtworksGrid from '../components/ArtworksGrid'; // Import the grid component
import { allArtworks, normalizeType } from '../data/artData'; // Import shared data

function ArtGalleryPage() {
  const artworksByType = allArtworks.reduce((acc, artwork) => {
    const category = normalizeType(artwork.type);
    if (!acc[category]) acc[category] = [];
    acc[category].push({
      ...artwork,
      detailPageUrl: `/art/drawings/${artwork.id}`,
    });
    return acc;
  }, {});

  const categoryOrder = ['Oil', 'Colored Pencil', 'Acrylic', 'Graphite Pencil'];
  const sortedCategories = categoryOrder
    .filter(cat => artworksByType[cat])
    .concat(
      Object.keys(artworksByType).filter(cat => !categoryOrder.includes(cat))
    );

  return (
    <div className="container mx-auto px-4 py-8 md:py-12">
      <div className="text-center mb-10 md:mb-16">
        <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-primary gradient-text animate-in" style={{ animationDelay: '0.1s' }}>
          Artwork Portfolio
        </h1>
        <p className="mt-4 text-lg text-muted-foreground max-w-xl mx-auto animate-in" style={{ animationDelay: '0.2s' }}>
          Amy's paintings are displayed according to media classification, recording her growth and exploration.
        </p>
        <p className="mt-4 text-lg text-muted-foreground max-w-xl mx-auto animate-in" style={{ animationDelay: '0.2s' }}>
          Click on the image to see details.
        </p>
      </div>

      {sortedCategories.length > 0 ? (
        <div className="space-y-12 md:space-y-16">
          {sortedCategories.map(category => (
            <section key={category}>

              <ArtworksGrid
                yearTitle={category}
                artworks={artworksByType[category]}
              />
            </section>
          ))}
        </div>
      ) : (
        <p className="text-center text-muted-foreground text-xl py-10">
          绘画作品正在整理中，敬请期待！
        </p>
      )}
    </div>
  );
}

export default ArtGalleryPage;
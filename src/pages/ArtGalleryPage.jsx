// src/pages/ArtGalleryPage.jsx
import React from 'react';
import ArtworksGrid from '../components/ArtworksGrid'; // Import the grid component

// --- SAMPLE DRAWING DATA ---
// Replace this with Amy's actual drawing data.
// Ensure images are in your public folder (e.g., public/images/art/)
// or hosted online, and update the URLs accordingly.
const allArtworks = [
  {
    id: 'dreamscape-2024',
    title: 'Dreamscape Reality',
    year: 2024,
    imageUrl: 'https://placehold.co/400x533/a78bfa/f5f3ff?text=Dreamscape+2024', // Thumbnail
    largeImageUrl: 'https://placehold.co/1200x1600/a78bfa/f5f3ff?text=Dreamscape+2024+Large', // Detail page image
    materials: 'Digital Painting (Procreate)',
    description: 'An exploration of surreal landscapes and subconscious thoughts.',
  },
  {
    id: 'portrait-of-a-friend-2024',
    title: 'Portrait of a Friend',
    year: 2024,
    imageUrl: 'https://placehold.co/400x533/facc15/fffbeb?text=Portrait+2024',
    largeImageUrl: 'https://placehold.co/1200x1600/facc15/fffbeb?text=Portrait+2024+Large',
    materials: 'Graphite on Bristol Paper',
    description: 'A study in capturing expression and light.',
  },
  {
    id: 'still-life-apples-2023',
    title: 'Still Life with Apples',
    year: 2023,
    imageUrl: 'https://placehold.co/400x533/fb923c/fff7ed?text=Apples+2023',
    largeImageUrl: 'https://placehold.co/1200x1600/fb923c/fff7ed?text=Apples+2023+Large',
    materials: 'Oil on Canvas',
    description: 'Classic still life focusing on texture and color.',
  },
  {
    id: 'abstract-flow-2023',
    title: 'Abstract Flow',
    year: 2023,
    imageUrl: 'https://placehold.co/400x533/60a5fa/eff6ff?text=Abstract+2023',
    largeImageUrl: 'https://placehold.co/1200x1600/60a5fa/eff6ff?text=Abstract+2023+Large',
    materials: 'Acrylic Pour on Wood Panel',
    description: 'Experimenting with fluid dynamics and color interaction.',
  },
  {
    id: 'mountain-sketch-2022',
    title: 'Mountain Sketch Study',
    year: 2022,
    imageUrl: 'https://placehold.co/400x533/78716c/f5f5f4?text=Mountain+2022',
    largeImageUrl: 'https://placehold.co/1200x1600/78716c/f5f5f4?text=Mountain+2022+Large',
    materials: 'Charcoal on Sketch Paper',
    description: 'Plein air sketch capturing the majesty of the mountains.',
  },
  // Add more of Amy's artworks here...
];
// --- END OF SAMPLE DRAWING DATA ---

function ArtGalleryPage() {
  // Group artworks by year
  const artworksByYear = allArtworks.reduce((acc, artwork) => {
    const year = artwork.year;
    if (!acc[year]) {
      acc[year] = [];
    }
    // Add a detailPageUrl to each artwork object
    acc[year].push({
      ...artwork,
      detailPageUrl: `/art/drawings/${artwork.id}` // Construct the URL
    });
    return acc;
  }, {});

  // Get sorted years (most recent first)
  const sortedYears = Object.keys(artworksByYear).sort((a, b) => b - a);

  return (
    <div className="container mx-auto px-4 py-8 md:py-12">
      <div className="text-center mb-10 md:mb-16">
        <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-primary gradient-text " style={{animationDelay: '0.1s'}}>
          绘画作品集 (Artwork Portfolio)
        </h1>
        <p className="mt-4 text-lg text-muted-foreground max-w-xl mx-auto " style={{animationDelay: '0.2s'}}>
          这里展示了 Amy 多年来的绘画创作，记录了她的成长与探索。点击图片查看详情。
        </p>
      </div>

      {sortedYears.length > 0 ? (
        <div className="space-y-12 md:space-y-16">
          {sortedYears.map((year, index) => (
            <div key={year}  style={{animationDelay: `${(index * 0.1) + 0.3}s`}}>
              <ArtworksGrid
                yearTitle={year.toString()} // Pass the year as the title for the grid section
                // description={`A collection of works from ${year}`} // Optional description
                artworks={artworksByYear[year]}
              />
            </div>
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

// src/pages/ArtGalleryPage.jsx
import React from 'react';
import ArtworksGrid from '../components/ArtworksGrid'; // Import the grid component

// --- SAMPLE DRAWING DATA ---
// Replace this with Amy's actual drawing data.
// Ensure images are in your public folder (e.g., public/images/art/)
// or hosted online, and update the URLs accordingly.
// Now using a single 'imageUrl' for both card and detail view.
const allArtworks = [
  {
    id: 'dreamscape-2024',
    title: 'Dreamscape Reality',
    year: 2024,
    imageUrl: '/Amy_drawings_pics/2025-01-17_23-28-56_546.png', // 使用这张图片同时作为卡片图和详情页大图
    materials: 'Digital Painting (Procreate)',
    description: 'An exploration of surreal landscapes and subconscious thoughts.',
  },
  {
    id: 'portrait-of-a-friend-2024',
    title: 'Portrait of a Friend',
    year: 2022,
    imageUrl: '/Amy_drawings_pics/2025-01-17_23-31-33_820.png', // 假设文件名是这个
    materials: 'Graphite on Bristol Paper',
    description: 'A study in capturing expression and light.',
  },
  // ... 其他画作 ...
  // 确保你的 imageUrl 指向 public 文件夹中真实存在的图片文件路径
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
        <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-primary gradient-text animate-in" style={{animationDelay: '0.1s'}}>
          Artwork Portfolio
        </h1>
        <p className="mt-4 text-lg text-muted-foreground max-w-xl mx-auto animate-in" style={{animationDelay: '0.2s'}}>
          这里展示了 Amy 多年来的绘画创作，记录了她的成长与探索。
        </p>
        <p className="mt-4 text-lg text-muted-foreground max-w-xl mx-auto animate-in" style={{animationDelay: '0.2s'}}>
          点击图片查看详情。
        </p>
      </div>

      {sortedYears.length > 0 ? (
        <div className="space-y-12 md:space-y-16">
          {sortedYears.map((year) => (
            <div key={year}  >
              <ArtworksGrid
                yearTitle={year.toString()}
                artworks={artworksByYear[year]} // artworksByYear[year] 已经包含了 imageUrl
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

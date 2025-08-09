// src/pages/ArtGalleryPage.jsx
import React from 'react';
import ArtworksGrid from '../components/ArtworksGrid'; // Import the grid component
import { allArtworks, normalizeType } from '../data/artData'; // Import shared data

// --- SAMPLE DRAWING DATA ---
// Replace this with Amy's actual drawing data.
// Ensure images are in your public folder (e.g., public/images/art/)
// or hosted online, and update the URLs accordingly.
// Now using a single 'imageUrl' for both card and detail view.

// 将各种写法标准化为统一的媒介分类标题
// const normalizeType = (type) => {
//   if (!type) return 'Uncategorized';
//   const key = type.toLowerCase().trim();
//   switch (key) {
//     case 'oil':
//       return 'Oil';
//     case 'colored pencil':
//       return 'Colored Pencil';
//     case 'acrylic':
//       return 'Acrylic';
//     case 'graphite pencil':
//       return 'Graphite Pencil';
//     default:
//       // 把首字母大写，其余小写
//       return type.charAt(0).toUpperCase() + type.slice(1).toLowerCase();
//   }
// };

// const allArtworks = [
//   // Ketchup in progress
//   {
//     id: 'ketchup-in-progress',
//     title: 'Ketchup in progress',
//     year: 2025,
//     type: 'Acrylic',            // 请根据实际媒介更新
//     imageUrl: '/Amy_drawings_pics/2025-01-17_23-28-56_546.png',
//     materials: '',             // Amy 来补充材料信息
//     description: '',           // Amy 来补充描述信息
//   },
//   // Fuji Mount
//   {
//     id: 'fuji-mount',
//     title: 'Fuji Mount',
//     year: 2025,
//     type: 'Graphite Pencil',
//     imageUrl: '/Amy_drawings_pics/2025-01-17_23-31-33_820.png',
//     materials: '',
//     description: '',
//   },
//   // 香蕉杯子
//   {
//     id: 'banana-cup',
//     title: 'Banana Cup',
//     year: 2025,
//     type: 'Oil',
//     imageUrl: '/Amy_drawings_pics/2025-01-17_23-42-43_387.png',
//     materials: '',
//     description: '',
//   },
//   // Wooden spoons
//   {
//     id: 'wooden-spoons',
//     title: 'Wooden Spoons',
//     year: 2025,
//     type: 'Graphite Pencil',
//     imageUrl: '/Amy_drawings_pics/2025-01-20_11-53-03_042 (2025-01-20T19_45_30.608).png',
//     materials: '',
//     description: '',
//   },
//   // Cat sitting under stars and sakura tree
//   {
//     id: 'Cat-sitting-under-stars-and-sakura-tree',
//     title: 'Cat sitting under stars and sakura tree',
//     year: 2025,
//     type: 'Graphite Pencil',
//     imageUrl: '/Amy_drawings_pics/2025-01-20_11-55-48_421.png',
//     materials: '',
//     description: '',
//   },
//   // Stars
//   {
//     id: 'Stars',
//     title: 'Stars',
//     year: 2025,
//     type: 'Graphite Pencil',
//     imageUrl: '/Amy_drawings_pics/2025-01-20_12-12-31_453.png',
//     materials: '',
//     description: '',
//   },
//   // Dog and Cat
//   {
//     id: 'Dog-and-Cat',
//     title: 'Dog and Cat',
//     year: 2025,
//     type: 'Graphite Pencil',
//     imageUrl: '/Amy_drawings_pics/2025-01-20_12-21-21_992.png',
//     materials: '',
//     description: '',
//   },
//   // a woman with braided hair
//   {
//     id: 'a-woman-with-braided-hair',
//     title: 'A woman with braided hair',
//     year: 2025,
//     type: 'Graphite Pencil',
//     imageUrl: '/Amy_drawings_pics/2025-01-20_12-28-28_831.png',
//     materials: '',
//     description: '',
//   },
//   // Two garlics
//   {
//     id: 'Two-garlics',
//     title: 'Two garlics',
//     year: 2025,
//     type: 'Graphite Pencil',
//     imageUrl: '/Amy_drawings_pics/2025-01-20_12-32-05_143.png',
//     materials: '',
//     description: '',
//   },
//   // a cat
//   {
//     id: 'a-cat',
//     title: 'A cat',
//     year: 2025,
//     type: 'Graphite Pencil',
//     imageUrl: '/Amy_drawings_pics/2025-01-20_12-35-02_682.png',
//     materials: '',
//     description: '',
//   },
//   // a white women with huh face
//   {
//     id: 'a-white-women-with-huh-face',
//     title: 'A white women with huh face',
//     year: 2025,
//     type: 'Graphite Pencil',
//     imageUrl: '/Amy_drawings_pics/2025-01-20_12-38-03_787 (2025-01-20T19_40_27.083).png',
//     materials: '',
//     description: '',
//   },
//   // a black woman
//   {
//     id: 'a-black-woman',
//     title: 'A black woman',
//     year: 2025,
//     type: 'Graphite Pencil',
//     imageUrl: '/Amy_drawings_pics/2025-01-20_12-41-25_805.png',
//     materials: '',
//     description: '',
//   },
//   // a little girl smelling a flower
//   {
//     id: 'a-little-girl-smelling-a-flower',
//     title: 'A little girl smelling a flower',
//     year: 2025,
//     type: 'Graphite Pencil',
//     imageUrl: '/Amy_drawings_pics/2025-01-20_12-43-53_803.png',
//     materials: '',
//     description: '',
//   },
// ];

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
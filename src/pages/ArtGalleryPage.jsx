// src/pages/ArtGalleryPage.jsx
import React from 'react';
import ArtworksGrid from '../components/ArtworksGrid'; // Import the grid component

// --- SAMPLE DRAWING DATA ---
// Replace this with Amy's actual drawing data.
// Ensure images are in your public folder (e.g., public/images/art/)
// or hosted online, and update the URLs accordingly.
// Now using a single 'imageUrl' for both card and detail view.

// 将各种写法标准化为统一的媒介分类标题
const normalizeType = (type) => {
  if (!type) return 'Uncategorized';
  const key = type.toLowerCase().trim();
  switch (key) {
    case 'oil':
      return 'Oil';
    case 'colored pencil':
      return 'Colored Pencil';
    case 'acrylic':
      return 'Acrylic';
    case 'graphite pencil':
      return 'Graphite Pencil';
    default:
      // 把首字母大写，其余小写
      return type.charAt(0).toUpperCase() + type.slice(1).toLowerCase();
  }
};

// const allArtworks = [
//   {// Sliced Tomatos
//     materials: 'Digital Painting (Procreate)',
//     id: 'dreamscape-2024',
//     title: 'Dreamscape Reality',
//     year: 2024,
//     imageUrl: '/Amy_drawings_pics/2025-01-17_23-28-56_546.png',
//     materials: 'Digital Painting (Procreate)',
//     description: 'An exploration of surreal landscapes and subconscious thoughts.',
//   },
//   {// Fuji Mount
//     id: 'portrait-of-a-friend-2024',
//     title: 'Portrait of a Friend',
//     year: 2022,
//     imageUrl: '/Amy_drawings_pics/2025-01-17_23-31-33_820.png', // Fuji Mount
//     materials: 'Graphite on Bristol Paper',
//     description: 'A study in capturing expression and light.',
//   },
//   {// 香蕉杯子
//     id: 'portrait-of-a-friend-2024',
//     title: 'Portrait of a Friend',
//     year: 2022,
//     imageUrl: '/Amy_drawings_pics/2025-01-17_23-42-43_387.png', // 香蕉杯子
//     materials: 'Graphite on Bristol Paper',
//     description: 'A study in capturing expression and light.',
//   },
//   {// Wooden spoons
//     id: 'portrait-of-a-friend-2024',
//     title: 'Portrait of a Friend',
//     year: 2022,
//     imageUrl: '/Amy_drawings_pics/2025-01-20_11-53-03_042 (2025-01-20T19_45_30.608).png',
//     materials: 'Graphite on Bristol Paper',
//     description: 'A study in capturing expression and light.',
//   },
//   {// Cat sitting under stars and sakura tree
//     id: 'portrait-of-a-friend-2024',
//     title: 'Portrait of a Friend',
//     year: 2022,
//     imageUrl: '/Amy_drawings_pics/2025-01-20_11-55-48_421.png',
//     materials: 'Graphite on Bristol Paper',
//     description: 'A study in capturing expression and light.',
//   },
//   {// Stars
//     id: 'portrait-of-a-friend-2024',
//     title: 'Portrait of a Friend',
//     year: 2022,
//     imageUrl: '/Amy_drawings_pics/2025-01-20_12-12-31_453.png',
//     materials: 'Graphite on Bristol Paper',
//     description: 'A study in capturing expression and light.',
//   },
//   {// Dog and Cat
//     id: 'portrait-of-a-friend-2024',
//     title: 'Portrait of a Friend',
//     year: 2022,
//     imageUrl: '/Amy_drawings_pics/2025-01-20_12-21-21_992.png',
//     materials: 'Graphite on Bristol Paper',
//     description: 'A study in capturing expression and light.',
//   },
//   {// a woman with braided hair
//     id: 'portrait-of-a-friend-2024',
//     title: 'Portrait of a Friend',
//     year: 2022,
//     imageUrl: '/Amy_drawings_pics/2025-01-20_12-28-28_831.png',
//     materials: 'Graphite on Bristol Paper',
//     description: 'A study in capturing expression and light.',
//   },
//   {// two garlics
//     id: 'portrait-of-a-friend-2024',
//     title: 'Portrait of a Friend',
//     year: 2022,
//     imageUrl: '/Amy_drawings_pics/2025-01-20_12-32-05_143.png',
//     materials: 'Graphite on Bristol Paper',
//     description: 'A study in capturing expression and light.',
//   },
//   {// a cat
//     id: 'portrait-of-a-friend-2024',
//     title: 'Portrait of a Friend',
//     year: 2022,
//     imageUrl: '/Amy_drawings_pics/2025-01-20_12-35-02_682.png',
//     materials: 'Graphite on Bristol Paper',
//     description: 'A study in capturing expression and light.',
//   },
//   {// a white women with huh face
//     id: 'portrait-of-a-friend-2024',
//     title: 'Portrait of a Friend',
//     year: 2022,
//     imageUrl: '/Amy_drawings_pics/2025-01-20_12-38-03_787 (2025-01-20T19_40_27.083).png',
//     materials: 'Graphite on Bristol Paper',
//     description: 'A study in capturing expression and light.',
//   },
//   {// a black woman
//     id: 'portrait-of-a-friend-2024',
//     title: 'Portrait of a Friend',
//     year: 2022,
//     imageUrl: '/Amy_drawings_pics/2025-01-20_12-41-25_805.png',
//     materials: 'Graphite on Bristol Paper',
//     description: 'A study in capturing expression and light.',
//   },
//   {// a little girl smelling a flower
//     id: 'portrait-of-a-friend-2024',
//     title: 'Portrait of a Friend',
//     year: 2022,
//     imageUrl: '/Amy_drawings_pics/2025-01-20_12-43-53_803.png',
//     materials: 'Graphite on Bristol Paper',
//     description: 'A study in capturing expression and light.',
//   },
//   {// a man wearing a hat
//     id: 'portrait-of-a-friend-2024',
//     title: 'Portrait of a Friend',
//     year: 2022,
//     imageUrl: '/Amy_drawings_pics/2025-01-20_12-48-14_132.jpeg',
//     materials: 'Graphite on Bristol Paper',
//     description: 'A study in capturing expression and light.',
//   },
//   {// a young girl's face
//     id: 'portrait-of-a-friend-2024',
//     title: 'Portrait of a Friend',
//     year: 2022,
//     imageUrl: '/Amy_drawings_pics/2025-01-20_12-51-23_913.jpeg',
//     materials: 'Graphite on Bristol Paper',
//     description: 'A study in capturing expression and light.',
//   },
//   {// a little girl's smiling
//     id: 'portrait-of-a-friend-2024',
//     title: 'Portrait of a Friend',
//     year: 2022,
//     imageUrl: '/Amy_drawings_pics/2025-01-20_12-53-42_198.jpeg',
//     materials: 'Graphite on Bristol Paper',
//     description: 'A study in capturing expression and light.',
//   },
//   {// three green onions
//     id: 'portrait-of-a-friend-2024',
//     title: 'Portrait of a Friend',
//     year: 2022,
//     imageUrl: '/Amy_drawings_pics/2025-01-20_12-58-59_950.jpeg',
//     materials: 'Graphite on Bristol Paper',
//     description: 'A study in capturing expression and light.',
//   },
//   {// 红色跑车
//     id: 'portrait-of-a-friend-2024',
//     title: 'Portrait of a Friend',
//     year: 2022,
//     imageUrl: '/Amy_drawings_pics/2025-01-20_13-02-10_388.jpeg',
//     materials: 'Graphite on Bristol Paper',
//     description: 'A study in capturing expression and light.',
//   },
//   {// 黑色跑车
//     id: 'portrait-of-a-friend-2024',
//     title: 'Portrait of a Friend',
//     year: 2022,
//     imageUrl: '/Amy_drawings_pics/2025-01-20_13-08-13_762.jpeg',
//     materials: 'Graphite on Bristol Paper',
//     description: 'A study in capturing expression and light.',
//   },
//   {// 素描白女瞪眼照
//     id: 'portrait-of-a-friend-2024',
//     title: 'Portrait of a Friend',
//     year: 2022,
//     imageUrl: '/Amy_drawings_pics/2025-01-20_13-10-07_393.jpeg',
//     materials: 'Graphite on Bristol Paper',
//     description: 'A study in capturing expression and light.',
//   },
//   {// 玻璃水杯和柠檬
//     id: 'portrait-of-a-friend-2024',
//     title: 'Portrait of a Friend',
//     year: 2022,
//     imageUrl: '/Amy_drawings_pics/2025-01-20_13-11-49_877.jpeg',
//     materials: 'Graphite on Bristol Paper',
//     description: 'A study in capturing expression and light.',
//   },
//   {// 可爱小狐狸
//     id: 'portrait-of-a-friend-2024',
//     title: 'Portrait of a Friend',
//     year: 2022,
//     imageUrl: '/Amy_drawings_pics/2025-01-20_13-16-13_523.jpeg',
//     materials: 'Graphite on Bristol Paper',
//     description: 'A study in capturing expression and light.',
//   },
//   {// 好多雏菊🌼好多叶子🍃
//     id: 'portrait-of-a-friend-2024',
//     title: 'Portrait of a Friend',
//     year: 2022,
//     imageUrl: '/Amy_drawings_pics/2025-01-20_13-23-32_888.jpeg',
//     materials: 'Graphite on Bristol Paper',
//     description: 'A study in capturing expression and light.',
//   },
//   {// seaside and a tree
//     id: 'portrait-of-a-friend-2024',
//     title: 'Portrait of a Friend',
//     year: 2022,
//     imageUrl: '/Amy_drawings_pics/2025-01-20_13-29-54_364.jpeg',
//     materials: 'Graphite on Bristol Paper',
//     description: 'A study in capturing expression and light.',
//   },
//   {// 农村和蓝天白云
//     id: 'portrait-of-a-friend-2024',
//     title: 'Portrait of a Friend',
//     year: 2022,
//     imageUrl: '/Amy_drawings_pics/2025-01-20_13-35-51_090.jpeg',
//     materials: 'Graphite on Bristol Paper',
//     description: 'A study in capturing expression and light.',
//   },
//   {// 雪山
//     id: 'portrait-of-a-friend-2024',
//     title: 'Portrait of a Friend',
//     year: 2022,
//     imageUrl: '/Amy_drawings_pics/2025-01-20_13-37-22_061.jpeg',
//     materials: 'Graphite on Bristol Paper',
//     description: 'A study in capturing expression and light.',
//   },
//   {// 海边和一些石头
//     id: 'portrait-of-a-friend-2024',
//     title: 'Portrait of a Friend',
//     year: 2022,
//     imageUrl: '/Amy_drawings_pics/2025-01-20_13-38-36_253.jpeg',
//     materials: 'Graphite on Bristol Paper',
//     description: 'A study in capturing expression and light.',
//   },
//   {// 叶子都要掉光的树
//     id: 'portrait-of-a-friend-2024',
//     title: 'Portrait of a Friend',
//     year: 2022,
//     imageUrl: '/Amy_drawings_pics/2025-01-20_13-39-52_440.jpeg',
//     materials: 'Graphite on Bristol Paper',
//     description: 'A study in capturing expression and light.',
//   },
//   {// 池塘里有浮萍和小金鱼
//     id: 'portrait-of-a-friend-2024',
//     title: 'Portrait of a Friend',
//     year: 2022,
//     imageUrl: '/Amy_drawings_pics/2025-01-20_13-41-01_411.jpeg',
//     materials: 'Graphite on Bristol Paper',
//     description: 'A study in capturing expression and light.',
//   },
//   {// 丁达尔效应1
//     id: 'portrait-of-a-friend-2024',
//     title: 'Portrait of a Friend',
//     year: 2022,
//     imageUrl: '/Amy_drawings_pics/2025-01-20_13-42-01_334.jpeg',
//     materials: 'Graphite on Bristol Paper',
//     description: 'A study in capturing expression and light.',
//   },
//   {// 窗外看雪山
//     id: 'portrait-of-a-friend-2024',
//     title: 'Portrait of a Friend',
//     year: 2022,
//     imageUrl: '/Amy_drawings_pics/2025-01-20_13-43-18_979.jpeg',
//     materials: 'Graphite on Bristol Paper',
//     description: 'A study in capturing expression and light.',
//   },
//   {// 两条海豚
//     id: 'portrait-of-a-friend-2024',
//     title: 'Portrait of a Friend',
//     year: 2022,
//     imageUrl: '/Amy_drawings_pics/2025-01-20_13-44-29_167.jpeg',
//     materials: 'Graphite on Bristol Paper',
//     description: 'A study in capturing expression and light.',
//   },
//   {// 一家四口
//     id: 'portrait-of-a-friend-2024',
//     title: 'Portrait of a Friend',
//     year: 2022,
//     imageUrl: '/Amy_drawings_pics/2025-01-20_13-45-33_537.jpeg',
//     materials: 'Graphite on Bristol Paper',
//     description: 'A study in capturing expression and light.',
//   },
//   {// 一只狮子
//     id: 'portrait-of-a-friend-2024',
//     title: 'Portrait of a Friend',
//     year: 2022,
//     imageUrl: '/Amy_drawings_pics/2025-01-20_13-51-16_278.jpeg',
//     materials: 'Graphite on Bristol Paper',
//     description: 'A study in capturing expression and light.',
//   },
//   {// 一只鸟
//     id: 'portrait-of-a-friend-2024',
//     title: 'Portrait of a Friend',
//     year: 2022,
//     imageUrl: '/Amy_drawings_pics/2025-01-20_13-53-35_525.jpeg',
//     materials: 'Graphite on Bristol Paper',
//     description: 'A study in capturing expression and light.',
//   },
//   {// Shinobu
//     id: 'portrait-of-a-friend-2024',
//     title: 'Portrait of a Friend',
//     year: 2022,
//     imageUrl: '/Amy_drawings_pics/2025-01-20_14-01-21_164.jpeg',
//     materials: 'Graphite on Bristol Paper',
//     description: 'A study in capturing expression and light.',
//   },
//   {// Tanjiro 
//     id: 'portrait-of-a-friend-2024',
//     title: 'Portrait of a Friend',
//     year: 2022,
//     imageUrl: '/Amy_drawings_pics/2025-01-20_14-02-39_777.jpeg',
//     materials: 'Graphite on Bristol Paper',
//     description: 'A study in capturing expression and light.',
//   },
//   {// 夕阳下一个人的背影
//     id: 'portrait-of-a-friend-2024',
//     title: 'Portrait of a Friend',
//     year: 2022,
//     imageUrl: '/Amy_drawings_pics/2025-01-20_14-03-41_391.jpeg',
//     materials: 'Graphite on Bristol Paper',
//     description: 'A study in capturing expression and light.',
//   },
//   {// 狼爪子(白)
//     id: 'portrait-of-a-friend-2024',
//     title: 'Portrait of a Friend',
//     year: 2022,
//     imageUrl: '/Amy_drawings_pics/2025-01-20_14-11-26_651.jpeg',
//     materials: 'Graphite on Bristol Paper',
//     description: 'A study in capturing expression and light.',
//   },
//   {// 狼爪子(黑)
//     id: 'portrait-of-a-friend-2024',
//     title: 'Portrait of a Friend',
//     year: 2022,
//     imageUrl: '/Amy_drawings_pics/2025-01-20_14-12-40_800.jpeg',
//     materials: 'Graphite on Bristol Paper',
//     description: 'A study in capturing expression and light.',
//   },
//   {// 几何图案(星星)
//     id: 'portrait-of-a-friend-2024',
//     title: 'Portrait of a Friend',
//     year: 2022,
//     imageUrl: '/Amy_drawings_pics/2025-01-20_14-13-37_899.jpeg',
//     materials: 'Graphite on Bristol Paper',
//     description: 'A study in capturing expression and light.',
//   },
//   {// 熊猫
//     id: 'portrait-of-a-friend-2024',
//     title: 'Portrait of a Friend',
//     year: 2022,
//     imageUrl: '/Amy_drawings_pics/2025-01-20_14-14-46_887.jpeg',
//     materials: 'Graphite on Bristol Paper',
//     description: 'A study in capturing expression and light.',
//   },
//   {// 月亮
//     id: 'portrait-of-a-friend-2024',
//     title: 'Portrait of a Friend',
//     year: 2022,
//     imageUrl: '/Amy_drawings_pics/2025-01-20_14-16-35_996.jpeg',
//     materials: 'Graphite on Bristol Paper',
//     description: 'A study in capturing expression and light.',
//   },
//   {// one piece
//     id: 'portrait-of-a-friend-2024',
//     title: 'Portrait of a Friend',
//     year: 2022,
//     imageUrl: '/Amy_drawings_pics/2025-01-20_14-20-17_641.jpeg',
//     materials: 'Graphite on Bristol Paper',
//     description: 'A study in capturing expression and light.',
//   },
//   {// 雾里有一颗光秃秃的树
//     id: 'portrait-of-a-friend-2024',
//     title: 'Portrait of a Friend',
//     year: 2022,
//     imageUrl: '/Amy_drawings_pics/2025-01-20_14-21-12_178.jpeg',
//     materials: 'Graphite on Bristol Paper',
//     description: 'A study in capturing expression and light.',
//   },
//   {// 一个女孩抱着一个海豚
//     id: 'portrait-of-a-friend-2024',
//     title: 'Portrait of a Friend',
//     year: 2022,
//     imageUrl: '/Amy_drawings_pics/2025-01-20_14-23-59_607.jpeg',
//     materials: 'Graphite on Bristol Paper',
//     description: 'A study in capturing expression and light.',
//   },
//   {// 蓝黑白
//     id: 'portrait-of-a-friend-2024',
//     title: 'Portrait of a Friend',
//     year: 2022,
//     imageUrl: '/Amy_drawings_pics/2025-01-20_14-26-45_079.jpeg',
//     materials: 'Graphite on Bristol Paper',
//     description: 'A study in capturing expression and light.',
//   },
//   {// 星空下的秋千
//     id: 'portrait-of-a-friend-2024',
//     title: 'Portrait of a Friend',
//     year: 2022,
//     imageUrl: '/Amy_drawings_pics/2025-01-20_14-28-15_888.jpeg',
//     materials: 'Graphite on Bristol Paper',
//     description: 'A study in capturing expression and light.',
//   },
//   {// 星空和晚霞
//     id: 'portrait-of-a-friend-2024',
//     title: 'Portrait of a Friend',
//     year: 2022,
//     imageUrl: '/Amy_drawings_pics/2025-01-20_14-30-20_787.jpeg',
//     materials: 'Graphite on Bristol Paper',
//     description: 'A study in capturing expression and light.',
//   },
//   {// 蓝色
//     id: 'portrait-of-a-friend-2024',
//     title: 'Portrait of a Friend',
//     year: 2022,
//     imageUrl: '/Amy_drawings_pics/2025-01-20_14-32-08_322.jpeg',
//     materials: 'Graphite on Bristol Paper',
//     description: 'A study in capturing expression and light.',
//   },
//   {// 海边和椰子树
//     id: 'portrait-of-a-friend-2024',
//     title: 'Portrait of a Friend',
//     year: 2022,
//     imageUrl: '/Amy_drawings_pics/2025-01-20_14-33-09_050.jpeg',
//     materials: 'Graphite on Bristol Paper',
//     description: 'A study in capturing expression and light.',
//   },

// ];

const allArtworks = [
  // Sliced Tomatoes
  {
    id: 'sliced-tomatoes',
    title: 'Sliced Tomatoes',
    year: 2025,
    type: 'Acrylic',            // 请根据实际媒介更新
    imageUrl: '/Amy_drawings_pics/2025-01-17_23-28-56_546.png',
    materials: '',             // Amy 来补充材料信息
    description: '',           // Amy 来补充描述信息
  },
  // Fuji Mount
  {
    id: 'fuji-mount',
    title: 'Fuji Mount',
    year: 2025,
    type: 'Graphite Pencil',
    imageUrl: '/Amy_drawings_pics/2025-01-17_23-31-33_820.png',
    materials: '',
    description: '',
  },
  // 香蕉杯子
  {
    id: 'banana-cup',
    title: 'Banana Cup',
    year: 2025,
    type: 'Oil',
    imageUrl: '/Amy_drawings_pics/2025-01-17_23-42-43_387.png',
    materials: '',
    description: '',
  },
  // Wooden spoons
  {
    id: 'wooden-spoons',
    title: 'Wooden Spoons',
    year: 2025,
    type: 'Graphite Pencil',
    imageUrl: '/Amy_drawings_pics/2025-01-20_11-53-03_042 (2025-01-20T19_45_30.608).png',
    materials: '',
    description: '',
  },
  // 更多作品请依此格式补全，确保每个对象只含一个 materials 字段
];

function ArtGalleryPage() {
  // 根据标准化后的 type 分组
  const artworksByType = allArtworks.reduce((acc, artwork) => {
    const category = normalizeType(artwork.type);
    if (!acc[category]) acc[category] = [];
    acc[category].push({
      ...artwork,
      detailPageUrl: `/art/drawings/${artwork.id}`,
    });
    return acc;
  }, {});

  // 媒介展示顺序
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
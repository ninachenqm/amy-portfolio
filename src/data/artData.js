// src/data/artData.js
// Shared artwork data for both ArtGalleryPage and DrawingDetailPage

export const allArtworks = [
  // Ketchup in progress
  {
    id: 'ketchup-in-progress',
    title: 'Ketchup in progress',
    year: 2025,
    type: 'Oil',
    imageUrl: '/Amy_drawings_pics/2025-01-17_23-28-56_546.png',
    materials: '',
    description: 'Hyperrealistic of three tomatoes, two whole smooth and plump. Between them sits the third that is sliced open, revealing the interior.',
  },
  // Fuji Mount
  {
    id: 'eternal-fuji',
    title: 'Eternal Fuji',
    year: 2025,
    type: 'Oil',
    imageUrl: '/Amy_drawings_pics/2025-01-17_23-31-33_820.png',
    materials: '',
    description: 'Rising above the clouds, Mount Fuji shows this serene portrayal. Snow capped summit gleams from the sun. This drawing draws viewers into Japan\'s landscapes, where nature inspired poets, artists and pilgrims for centuries.',
  },
  // 香蕉杯子
  {
    id: 'distorted-sweetness',
    title: 'Distorted Sweetness',
    year: 2025,
    type: 'Oil',
    imageUrl: '/Amy_drawings_pics/2025-01-17_23-42-43_387.png',
    materials: '',
    description: 'A banana is placed in a glass of water, creating a distorted reflection. The banana is sliced in half, revealing the interior. The water is clear, and the banana is slightly yellow. The glass is slightly blurred, creating a sense of depth and perspective.',
  },
  // Wooden spoons
  {
    id: 'monochrome-morning',
    title: 'Monochrome Morning',
    year: 2025,
    type: 'Oil',
    imageUrl: '/Amy_drawings_pics/2025-01-20_11-53-03_042 (2025-01-20T19_45_30.608).png',
    materials: '',
    description: 'A photorealistic still life art work that is rendered in grayscale. A jar that holds three wooden spoons, and to the left two eggs rest on the table. Potentially offering a contract to the vertical stiffness of the jar.',
  },
  // Cat sitting under stars and sakura tree
  {
    id: 'Cat-sitting-under-stars-and-sakura-tree',
    title: 'Cat sitting under stars and sakura tree',
    year: 2025,
    type: 'Graphite Pencil',
    imageUrl: '/Amy_drawings_pics/2025-01-20_11-55-48_421.png',
    materials: '',
    description: '',
  },
  // Stars
  {
    id: 'Stars',
    title: 'Stars',
    year: 2025,
    type: 'Graphite Pencil',
    imageUrl: '/Amy_drawings_pics/2025-01-20_12-12-31_453.png',
    materials: '',
    description: '',
  },
  // Dog and Cat
  {
    id: 'Dog-and-Cat',
    title: 'Dog and Cat',
    year: 2025,
    type: 'Graphite Pencil',
    imageUrl: '/Amy_drawings_pics/2025-01-20_12-21-21_992.png',
    materials: '',
    description: '',
  },
  // a woman with braided hair
  {
    id: 'a-woman-with-braided-hair',
    title: 'A woman with braided hair',
    year: 2025,
    type: 'Graphite Pencil',
    imageUrl: '/Amy_drawings_pics/2025-01-20_12-28-28_831.png',
    materials: '',
    description: '',
  },
  // Two garlics
  {
    id: 'Two-garlics',
    title: 'Two garlics',
    year: 2025,
    type: 'Graphite Pencil',
    imageUrl: '/Amy_drawings_pics/2025-01-20_12-32-05_143.png',
    materials: '',
    description: '',
  },
  // a cat
  {
    id: 'a-cat',
    title: 'A cat',
    year: 2025,
    type: 'Graphite Pencil',
    imageUrl: '/Amy_drawings_pics/2025-01-20_12-35-02_682.png',
    materials: '',
    description: '',
  },
  // a white women with huh face
  {
    id: 'a-white-women-with-huh-face',
    title: 'A white women with huh face',
    year: 2025,
    type: 'Graphite Pencil',
    imageUrl: '/Amy_drawings_pics/2025-01-20_12-38-03_787 (2025-01-20T19_40_27.083).png',
    materials: '',
    description: '',
  },
  // a black woman
  {
    id: 'a-black-woman',
    title: 'A black woman',
    year: 2025,
    type: 'Graphite Pencil',
    imageUrl: '/Amy_drawings_pics/2025-01-20_12-41-25_805.png',
    materials: '',
    description: '',
  },
  // a little girl smelling a flower
  {
    id: 'a-little-girl-smelling-a-flower',
    title: 'A little girl smelling a flower',
    year: 2025,
    type: 'Graphite Pencil',
    imageUrl: '/Amy_drawings_pics/2025-01-20_12-43-53_803.png',
    materials: '',
    description: '',
  },
];

// Helper function to normalize type
export const normalizeType = (type) => {
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
      return type.charAt(0).toUpperCase() + type.slice(1).toLowerCase();
  }
};
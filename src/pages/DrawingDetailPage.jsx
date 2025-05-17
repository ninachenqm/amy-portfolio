// src/pages/DrawingDetailPage.jsx
import React from 'react';
import { useParams, Link } from 'react-router-dom';

// --- 示例画作详情数据 ---
// 这个对象的 key 应该与 ArtGalleryPage.jsx 中每幅画作的 id 对应
// 你之后需要用 Amy 的真实数据替换这里
const artworksDetailsData = {
    'dreamscape-2024': { // 这个 ID 应该和 ArtGalleryPage.jsx 中的画作 ID 匹配
        title: 'Dreamscape Reality',
        year: 2024,
        largeImageUrl: 'https://placehold.co/1200x1600/a78bfa/f5f3ff?text=Dreamscape+2024+Large', // 大图 URL
        materials: 'Digital Painting (Procreate)',
        description: 'An exploration of surreal landscapes and subconscious thoughts. This piece aims to evoke a sense of wonder and introspection, playing with light and shadow to create a dreamlike atmosphere.',
    },
    'portrait-of-a-friend-2024': {
        title: 'Portrait of a Friend',
        year: 2024,
        largeImageUrl: 'https://placehold.co/1200x1600/facc15/fffbeb?text=Portrait+2024+Large',
        materials: 'Graphite on Bristol Paper',
        description: 'A study in capturing expression and light. The focus was on rendering the subtle nuances of the subject\'s personality through their gaze and posture.',
    },
    'still-life-apples-2023': {
        title: 'Still Life with Apples',
        year: 2023,
        largeImageUrl: 'https://placehold.co/1200x1600/fb923c/fff7ed?text=Apples+2023+Large',
        materials: 'Oil on Canvas',
        description: 'Classic still life focusing on texture, color, and the interplay of light on form. Each apple was painted with attention to its unique characteristics.',
    },
    // 你需要为 ArtGalleryPage.jsx 中的每个画作 ID 都在这里添加对应的详情
};
// --- 示例画作详情数据结束 ---

function DrawingDetailPage() {
    const { drawingId } = useParams(); // 从 URL 中获取 drawingId 参数
    const artwork = artworksDetailsData[drawingId]; // 根据 drawingId 查找画作数据

    if (!artwork) {
        return (
            <div className="container mx-auto px-4 py-10 text-center">
                <h2 className="text-2xl font-semibold text-destructive ">画作未找到</h2>
                <p className="mt-4 text-muted-foreground " style={{ animationDelay: '0.1s' }}>
                    你所查找的画作信息不存在或已被移动。
                </p>
                <Link
                    to="/art"
                    className="mt-8 inline-flex items-center justify-center rounded-md bg-primary px-6 py-2.5 text-sm font-medium text-primary-foreground shadow-sm transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 "
                    style={{ animationDelay: '0.2s' }}
                >
                    &larr; 返回绘画作品集
                </Link>
            </div>
        );
    }

    return (
        <div className="container mx-auto px-4 py-8 md:py-12">
            {/* 返回链接 */}
            <div className="mb-6 md:mb-8 ">
                <Link
                    to="/art"
                    className="text-sm font-medium text-primary hover:text-primary/80 transition-colors flex items-center"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-1.5"><path d="m15 18-6-6 6-6" /></svg>
                    返回作品集
                </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
                {/* 大图显示区域 */}
                <div className="md:col-span-2 bg-muted/50 rounded-xl shadow-xl overflow-hidden " style={{ animationDelay: '0.1s' }}>
                    <img
                        src={artwork.largeImageUrl}
                        alt={`大幅画作 - ${artwork.title}`}
                        className="w-full h-auto object-contain max-h-[80vh] mx-auto p-2 md:p-4" // object-contain 保证图片完整显示，max-h 限制最大高度
                        onError={(e) => { e.currentTarget.src = 'https://placehold.co/1200x800/7f1d1d/fecaca?text=图片加载失败'; e.currentTarget.alt = '图片加载失败'; }}
                    />
                </div>

                {/* 画作信息区域 */}
                <div className="md:col-span-1 space-y-4 " style={{ animationDelay: '0.2s' }}>
                    <h1 className="text-3xl sm:text-4xl font-bold text-primary leading-tight">{artwork.title}</h1>

                    <div className="text-md text-muted-foreground">
                        <p><span className="font-semibold text-foreground">创作年份：</span>{artwork.year}</p>
                        {artwork.materials && (
                            <p><span className="font-semibold text-foreground">所用材料：</span>{artwork.materials}</p>
                        )}
                    </div>

                    {artwork.description && (
                        <div>
                            <h2 className="text-xl font-semibold text-foreground mb-2">作品描述</h2>
                            <p className="text-base text-foreground/80 leading-relaxed whitespace-pre-line">
                                {artwork.description}
                            </p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}

export default DrawingDetailPage;

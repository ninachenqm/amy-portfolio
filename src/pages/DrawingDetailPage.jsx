// src/pages/DrawingDetailPage.jsx
import React from 'react';
import { useParams, Link, useLocation } from 'react-router-dom'; // Import useLocation

// --- 示例画作详情数据 ---
// 现在我们假设这个数据会从 ArtGalleryPage 通过路由状态传递，或者我们从一个统一的数据源获取
// 为了演示，我们仍然使用一个本地数据对象，但确保它与 ArtGalleryPage 中的数据结构一致
// 并且图片URL使用 imageUrl
const artworksDetailsData = {
    'dreamscape-2024': {
        title: 'Dreamscape Reality',
        year: 2024,
        imageUrl: '/Amy_drawings_pics/2025-01-17_23-28-56_546.png', // 使用与卡片相同的图片URL
        materials: 'Digital Painting (Procreate)',
        description: 'An exploration of surreal landscapes and subconscious thoughts. This piece aims to evoke a sense of wonder and introspection, playing with light and shadow to create a dreamlike atmosphere.',
    },
    'portrait-of-a-friend-2024': {
        title: 'Portrait of a Friend',
        year: 2024,
        imageUrl: '/Amy_drawings_pics/2025-01-17_23-31-33_820.png',
        materials: 'Graphite on Bristol Paper',
        description: 'A study in capturing expression and light. The focus was on rendering the subtle nuances of the subject\'s personality through their gaze and posture.',
    },
    // 你需要为 ArtGalleryPage.jsx 中的每个画作 ID 都在这里添加对应的详情
    // 或者，更好的做法是从一个统一的数据源获取这些信息
};
// --- 示例画作详情数据结束 ---


function DrawingDetailPage() {
    const { drawingId } = useParams();
    const location = useLocation(); // Get location state

    // 优先从路由状态获取数据 (如果从 ArtGalleryPage 传递了)
    // 否则，回退到本地的 artworksDetailsData (作为示例或备用)
    const artworkFromState = location.state?.artwork;
    const artwork = artworkFromState || artworksDetailsData[drawingId];

    if (!artwork) {
        return (
            <div className="container mx-auto px-4 py-10 text-center">
                <h2 className="text-2xl font-semibold text-destructive animate-in">画作未找到</h2>
                <p className="mt-4 text-muted-foreground animate-in" style={{ animationDelay: '0.1s' }}>
                    你所查找的画作信息不存在或已被移动。
                </p>
                <Link
                    to="/art"
                    className="mt-8 inline-flex items-center justify-center rounded-md bg-primary px-6 py-2.5 text-sm font-medium text-primary-foreground shadow-sm transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 animate-in"
                    style={{ animationDelay: '0.2s' }}
                >
                    &larr; 返回绘画作品集
                </Link>
            </div>
        );
    }

    return (
        <div className="container mx-auto px-4 py-8 md:py-12">
            <div className="mb-6 md:mb-8 animate-in">
                <Link
                    to="/art"
                    className="text-sm font-medium text-primary hover:text-primary/80 transition-colors flex items-center"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-1.5"><path d="m15 18-6-6 6-6" /></svg>
                    返回作品集
                </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
                <div className="md:col-span-2 bg-muted/50 rounded-xl shadow-xl overflow-hidden animate-in" style={{ animationDelay: '0.1s' }}>
                    <img
                        src={artwork.imageUrl}
                        alt={`大幅画作 - ${artwork.title}`}
                        className="w-full h-auto object-contain max-h-[80vh] mx-auto p-2 md:p-4"
                        onError={(e) => { e.currentTarget.src = 'https://placehold.co/1200x800/7f1d1d/fecaca?text=图片加载失败'; e.currentTarget.alt = '图片加载失败'; }}
                    />
                </div>

                <div className="md:col-span-1 space-y-4 animate-in" style={{ animationDelay: '0.2s' }}>
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

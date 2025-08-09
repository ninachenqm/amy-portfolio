// src/pages/DrawingDetailPage.jsx
import React from 'react';
import { useParams, Link, useLocation } from 'react-router-dom'; // Import useLocation
import { allArtworks } from '../data/artData'; // Import shared artwork data


function DrawingDetailPage() {
    const { drawingId } = useParams();
    const location = useLocation(); // Get location state

    // Find artwork from shared data
    const artworkFromState = location.state?.artwork;
    const artwork = artworkFromState || allArtworks.find(art => art.id === drawingId);

    if (!artwork) {
        return (
            <div className="container mx-auto px-4 py-10 text-center">
                <h2 className="text-2xl font-semibold text-destructive animate-in">Painting not found</h2>
                <p className="mt-4 text-muted-foreground animate-in" style={{ animationDelay: '0.1s' }}>
                    The painting information you are looking for does not exist or has been moved.
                </p>
                <Link
                    to="/art"
                    className="mt-8 inline-flex items-center justify-center rounded-md bg-primary px-6 py-2.5 text-sm font-medium text-primary-foreground shadow-sm transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 animate-in"
                    style={{ animationDelay: '0.2s' }}
                >
                    &larr; Return
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
                    Return
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
                        

                    </div>
                    {artwork.description && (
                        <div>
                            <h2 className="text-xl font-semibold text-foreground mb-2">Artwork Description</h2>
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

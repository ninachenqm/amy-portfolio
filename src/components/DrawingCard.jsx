// src/components/DrawingCard.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import { cn } from '../lib/utils'; // Assuming utils.js is in src/lib/

// Define the props for a DrawingCard
// interface DrawingCardProps {
//   id: string; // Unique ID for the drawing, used for the key and link
//   title: string;
//   year: number | string;
//   imageUrl: string;
//   materials?: string; // Optional
//   detailPageUrl: string;
// }

export default function DrawingCard({
    id,
    title,
    // year, // Year will be displayed as a section title in the grid
    imageUrl,
    materials,
    detailPageUrl,
}) {
    return (
        <Link
            to={detailPageUrl}
            className="block group w-full focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 rounded-2xl"
            aria-label={`View details for ${title}`}
        >
            <div
                className={cn(
                    "relative overflow-hidden rounded-2xl h-full", // Ensure card takes full height if grid forces it
                    "bg-card/80 dark:bg-card/80", // Use theme colors
                    "backdrop-blur-lg", // Slight blur for a modern effect
                    "border border-border/50",
                    "shadow-md dark:shadow-xl", // Adjusted shadow for theme
                    "transition-all duration-300 ease-in-out",
                    "hover:shadow-lg dark:hover:shadow-2xl",
                    "hover:border-border/70 dark:hover:border-border/70",
                    "hover:-translate-y-1" // Slight lift on hover
                )}
            >
                {/* Image Container */}
                <div className="relative w-full aspect-[3/4] overflow-hidden"> {/* Aspect ratio for consistency */}
                    <img
                        src={imageUrl}
                        alt={title || 'Artwork'}
                        // Instead of Next.js Image 'fill', we use Tailwind for object-cover
                        className="w-full h-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-105"
                        loading="lazy" // Lazy load images
                        onError={(e) => {
                            e.currentTarget.src = 'https://placehold.co/400x533/7f1d1d/fecaca?text=Image+Error';
                            e.currentTarget.alt = 'Error loading image';
                        }}
                    />
                </div>

                {/* Gradient overlay for text readability on image */}
                <div
                    className={cn(
                        "absolute inset-0",
                        "bg-gradient-to-t from-black/70 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    )}
                />

                {/* Content absolutely positioned at the bottom */}
                <div className="absolute bottom-0 left-0 right-0 p-4 md:p-5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-4 group-hover:translate-y-0">
                    <div className="flex items-end justify-between gap-3">
                        <div className="space-y-1">
                            <h3 className="text-lg font-semibold text-white leading-snug tracking-tight">
                                {title}
                            </h3>
                            {materials && (
                                <p className="text-xs text-gray-200 dark:text-gray-300 line-clamp-1 tracking-tight">
                                    {materials}
                                </p>
                            )}
                        </div>
                        <div
                            className={cn(
                                "p-2 rounded-full",
                                "bg-white/20 dark:bg-zinc-800/60", // Adjusted for better contrast on hover overlay
                                "backdrop-blur-sm",
                                "group-hover:bg-white/30 dark:group-hover:bg-zinc-700/60",
                                "transition-colors duration-300"
                            )}
                        >
                            <ArrowUpRight className="w-4 h-4 text-white transition-transform duration-300 group-hover:-rotate-12" />
                        </div>
                    </div>
                </div>
            </div>
        </Link>
    );
}

// src/components/ImageCarousel.jsx
import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

function ImageCarousel({ images }) {
    const [currentIndex, setCurrentIndex] = useState(0);

    const goToPrevious = () => {
        const isFirstImage = currentIndex === 0;
        const newIndex = isFirstImage ? images.length - 1 : currentIndex - 1;
        setCurrentIndex(newIndex);
    };

    const goToNext = () => {
        const isLastImage = currentIndex === images.length - 1;
        const newIndex = isLastImage ? 0 : currentIndex + 1;
        setCurrentIndex(newIndex);
    };

    if (!images || images.length === 0) {
        return <div>No images to display.</div>;
    }

    return (
        <div className="relative w-full h-full group">
            <div className="w-full h-full rounded-xl overflow-hidden shadow-lg">
                <img
                    src={images[currentIndex].src}
                    alt={images[currentIndex].alt}
                    className="w-full h-full object-cover transition-transform duration-500 ease-in-out"
                />
            </div>
            <div className="absolute inset-0 flex items-center justify-between p-4">
                <button
                    onClick={goToPrevious}
                    className="p-2 rounded-full bg-black/30 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:bg-black/50"
                >
                    <ChevronLeft size={24} />
                </button>
                <button
                    onClick={goToNext}
                    className="p-2 rounded-full bg-black/30 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:bg-black/50"
                >
                    <ChevronRight size={24} />
                </button>
            </div>
            <div className="absolute bottom-4 left-0 right-0 flex justify-center space-x-2">
                {images.map((_, index) => (
                    <div
                        key={index}
                        onClick={() => setCurrentIndex(index)}
                        className={`h-2 w-2 rounded-full cursor-pointer transition-colors duration-300 ${currentIndex === index ? 'bg-white' : 'bg-white/50'
                            }`}
                    ></div>
                ))}
            </div>
        </div>
    );
}

export default ImageCarousel;

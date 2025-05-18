// src/components/SpeechImageCarousel.jsx
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';

// 接收一个图片对象数组作为 props
// 每个图片对象可以包含 src, alt, 和可选的 caption
export default function SpeechImageCarousel({ images }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  if (!images || images.length === 0) {
    return null; // 如果没有图片则不渲染
  }

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  // Framer Motion 动画变体
  const variants = {
    enter: (direction) => {
      return {
        x: direction > 0 ? 1000 : -1000, // 从右侧或左侧进入
        opacity: 0,
      };
    },
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
    },
    exit: (direction) => {
      return {
        zIndex: 0,
        x: direction < 0 ? 1000 : -1000, // 向右侧或左侧退出
        opacity: 0,
      };
    },
  };

  // 用于判断滑动方向，以便 AnimatePresence 正确应用动画
  // （这里我们通过按钮点击来改变 currentIndex，所以方向是固定的）
  // 如果有拖拽功能，这里的 direction 会更复杂
  const [direction, setDirection] = useState(0);

  const paginate = (newDirection) => {
    setDirection(newDirection);
    if (newDirection > 0) {
      goToNext();
    } else {
      goToPrevious();
    }
  };

  return (
    <div className="relative w-full max-w-4xl lg:max-w-5xl mx-auto overflow-hidden rounded-lg shadow-2xl bg-card border border-border">
      {/* 图片容器，aspect-video 保持16:9的宽高比，可以根据图片调整 */}
      <div className="relative aspect-video">
        <AnimatePresence initial={false} custom={direction} mode="wait">
          <motion.img
            key={currentIndex} // 关键：当 key 改变时，AnimatePresence 会触发动画
            src={images[currentIndex].src}
            alt={images[currentIndex].alt || `Speech highlight ${currentIndex + 1}`}
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              x: { type: 'spring', stiffness: 300, damping: 30 },
              opacity: { duration: 0.2 },
            }}
            className="absolute w-full h-full object-cover"
            onError={(e) => { 
              e.currentTarget.src = 'https://placehold.co/1280x720/7f1d1d/fecaca?text=图片加载失败'; 
              e.currentTarget.alt = '图片加载失败';
            }}
          />
        </AnimatePresence>
      </div>

      {/* 上一张按钮 */}
      <button
        onClick={() => paginate(-1)}
        className="absolute top-1/2 left-2 sm:left-4 transform -translate-y-1/2 bg-black/40 hover:bg-black/60 text-white p-2 sm:p-3 rounded-full focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-black/50 transition-colors z-10"
        aria-label="上一张图片"
      >
        <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
      </button>

      {/* 下一张按钮 */}
      <button
        onClick={() => paginate(1)}
        className="absolute top-1/2 right-2 sm:right-4 transform -translate-y-1/2 bg-black/40 hover:bg-black/60 text-white p-2 sm:p-3 rounded-full focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-black/50 transition-colors z-10"
        aria-label="下一张图片"
      >
        <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
      </button>

      {/* (可选) 图片标题/描述 - 放在图片下方或叠加在图片上 */}
      {images[currentIndex].caption && (
        <div className="absolute bottom-0 left-0 right-0 p-3 sm:p-4 bg-gradient-to-t from-black/70 to-transparent text-center">
          <p className="text-white text-sm sm:text-base drop-shadow-md">{images[currentIndex].caption}</p>
        </div>
      )}

      {/* (可选) 点状导航器 */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2 z-10">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => {
              setDirection(index > currentIndex ? 1 : -1);
              setCurrentIndex(index);
            }}
            className={`w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full transition-colors ${
              currentIndex === index ? 'bg-primary' : 'bg-white/50 hover:bg-white/80'
            }`}
            aria-label={`跳转到图片 ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}

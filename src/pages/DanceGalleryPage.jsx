// src/pages/DanceGalleryPage.jsx
import React from 'react';
import InteractiveCardStack from '../components/InteractiveCardStack'; // 1. 导入组件

// 你可以在这里定义或从其他地方导入 Amy 的舞蹈活动数据
// const amySpecificDanceEvents = [
//   { id: 'unique-event-1', title: 'Amy的特别演出', date: '2025年1月1日', coverImageUrl: '...', eventPageUrl: '/dance/events/unique-event-1', description: '...' },
//   // ...更多活动
// ];

function DanceGalleryPage() {
  return (
    <div className="container mx-auto px-4 py-8 md:py-12">
      <div className="text-center mb-10 md:mb-16">
        <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-primary gradient-text animate-in" style={{animationDelay: '0.1s'}}>
          舞蹈风采
        </h1>
        <p className="mt-4 text-lg text-muted-foreground max-w-xl mx-auto animate-in" style={{animationDelay: '0.2s'}}>
          这里记录了每一次精彩的舞蹈瞬间和表演。点击卡片查看更多活动照片。
        </p>
      </div>

      {/* 将卡片堆叠居中显示 */}
      <div className="flex justify-center items-start min-h-[60vh] md:min-h-[70vh]">
        <InteractiveCardStack /* eventsInput={amySpecificDanceEvents} */ /> {/* 2. 使用组件，如果需要传递特定数据，取消注释并传入 */}
      </div>
    </div>
  );
}

export default DanceGalleryPage;

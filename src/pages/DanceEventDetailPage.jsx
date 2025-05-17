// src/pages/DanceEventDetailPage.jsx
import React from 'react';
import { useParams, Link } from 'react-router-dom';

// Amy说根据花絮/practice/competition来分
// 示例活动详情数据 (I need Amy 's info)
// 这个数据的 key 应该与 InteractiveCardStack.jsx 中每个活动的 id 对应
const eventDetailsData = {
  'spring-recital-2024': {
    title: '2024 春季汇演',
    date: '2024年5月15日',
    images: [ // 这个活动的图片URL数组
      'https://placehold.co/800x600/fca5a5/450a0a?text=汇演照片1',
      'https://placehold.co/800x600/fca5a5/450a0a?text=汇演照片2',
      'https://placehold.co/800x600/fca5a5/450a0a?text=汇演照片3',
      'https://placehold.co/800x600/fca5a5/450a0a?text=汇演照片4',
    ],
    description: '年度春季舞蹈展示，包含了芭蕾、爵士和现代舞等多种风格的精彩节目。同学们都表现得非常出色！'
  },
  'national-competition-2023': {
    title: '2023 全国舞蹈比赛',
    date: '2023年7月22日',
    images: [
      'https://placehold.co/800x600/86efac/14532d?text=比赛照片1',
      'https://placehold.co/800x600/86efac/14532d?text=比赛照片2',
    ],
    description: '团队在全国舞蹈比赛中全力以赴，最终获得了团体二等奖的好成绩，是一次宝贵的经历。'
  },
  'winter-showcase-2023': {
    title: '2023 冬季表演',
    date: '2023年12月10日',
    images: [
        'https://placehold.co/800x600/93c5fd/1e3a8a?text=冬季表演照片1',
        'https://placehold.co/800x600/93c5fd/1e3a8a?text=冬季表演照片2',
        'https://placehold.co/800x600/93c5fd/1e3a8a?text=冬季表演照片3',
    ],
    description: '充满节日气氛的冬季表演，我们用舞蹈点亮了整个舞台。'
    },
  // 你需要为 InteractiveCardStack.jsx 中的每个活动ID都在这里添加对应的详情
};

function DanceEventDetailPage() {
  const { eventId } = useParams(); // 从URL中获取 eventId 参数
  const event = eventDetailsData[eventId]; // 根据 eventId 查找活动数据

  if (!event) {
    return (
      <div className="container mx-auto px-4 py-10 text-center">
        <h2 className="text-2xl font-semibold text-destructive">未找到活动信息</h2>
        <p className="mt-4 text-muted-foreground">
          你所查找的舞蹈活动不存在或已被移动。
        </p>
        <Link to="/dance" className="mt-6 inline-block text-primary hover:underline">
          &larr; 返回舞蹈风采页面
        </Link>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8 md:py-12">
      <div className="mb-8 md:mb-12 text-center">
        <h1 className="text-3xl sm:text-4xl font-bold text-primary">{event.title}</h1>
        <p className="text-md text-muted-foreground mt-2">{event.date}</p>
        {event.description && (
          <p className="mt-4 text-lg text-foreground max-w-2xl mx-auto">{event.description}</p>
        )}
      </div>

      {/* 图片画廊 */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
        {event.images.map((imgSrc, index) => (
          <div key={index} className="aspect-w-1 aspect-h-1 bg-muted rounded-lg overflow-hidden shadow-lg transition-transform duration-300 hover:scale-105">
            {/* aspect-w-1 aspect-h-1 可以帮助保持图片比例，但需要安装 @tailwindcss/aspect-ratio 插件 */}
            {/* 如果不使用插件，可以直接用 aspect-[1/1] 或 aspect-square (Tailwind v3.0+) */}
            <img
              src={imgSrc}
              alt={`${event.title} - 照片 ${index + 1}`}
              className="w-full h-full object-cover"
              onError={(e) => { e.currentTarget.src = 'https://placehold.co/600x400/7f1d1d/fecaca?text=图片加载失败'; e.currentTarget.alt = '图片加载失败'; }}
            />
          </div>
        ))}
      </div>

      <div className="text-center mt-12">
        <Link 
          to="/dance" 
          className="inline-flex items-center justify-center rounded-md bg-primary px-6 py-2.5 text-sm font-medium text-primary-foreground shadow-sm transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
        >
          &larr; 返回所有舞蹈活动
        </Link>
      </div>
    </div>
  );
}

export default DanceEventDetailPage;

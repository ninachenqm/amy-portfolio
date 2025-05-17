
// src/components/InteractiveCardStack.jsx
import React, { useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

// 示例舞蹈活动数据 (你需要用 Amy 的真实数据替换)
const defaultDanceEvents = [
  {
    id: 'spring-recital-2024',
    title: '2024 春季汇演',
    date: '2024年5月15日',
    coverImageUrl: 'https://placehold.co/600x400/fca5a5/450a0a?text=春季汇演封面',
    eventPageUrl: '/dance/events/spring-recital-2024',
    description: '年度春季舞蹈展示，包含多种舞蹈风格。',
  },
  {
    id: 'national-competition-2023',
    title: '2023 全国舞蹈比赛',
    date: '2023年7月22日',
    coverImageUrl: 'https://placehold.co/600x400/86efac/14532d?text=全国比赛封面',
    eventPageUrl: '/dance/events/national-competition-2023',
    description: '代表团队参加全国级比赛并获得佳绩。',
  },
  {
    id: 'winter-showcase-2023',
    title: '2023 冬季表演',
    date: '2023年12月10日',
    coverImageUrl: 'https://placehold.co/600x400/93c5fd/1e3a8a?text=冬季表演封面',
    eventPageUrl: '/dance/events/winter-showcase-2023',
    description: '庆祝冬季的节日主题舞蹈表演。',
  },
  {
    id: 'community-performance-2023',
    title: '社区公益演出',
    date: '2023年9月5日',
    coverImageUrl: 'https://placehold.co/600x400/fcd34d/b45309?text=社区演出封面',
    eventPageUrl: '/dance/events/community-performance-2023',
    description: '为本地社区献上的精彩舞蹈。',
  },
  {
    id: 'dance-workshop-2024',
    title: '现代舞工作坊',
    date: '2024年3月10日',
    coverImageUrl: 'https://placehold.co/600x400/c4b5fd/4c1d95?text=工作坊封面',
    eventPageUrl: '/dance/events/dance-workshop-2024',
    description: '参与大师级现代舞工作坊，提升技巧。',
  }
];

// 单个卡片组件
function EventCard({ card, index, onCardClick, onCycleCard, totalVisibleCards }) {
  const yOffsetPerCard = 15;
  const scalePerCard = 0.04;
  const rotatePerCard = -2.0;

  const currentY = index * yOffsetPerCard;
  const currentScale = 1 - index * scalePerCard;
  const currentRotateZ = index * rotatePerCard;

  // 当卡片被“循环”掉时的退出动画目标
  // 我们让它向下移动并缩小，模拟落到堆叠底部的感觉
  const exitY = currentY + yOffsetPerCard * (totalVisibleCards - index + 1); // 移动到比当前可见堆叠更靠后的位置
  const exitScale = currentScale * 0.8; // 进一步缩小
  const exitRotate = currentRotateZ;


  return (
    <motion.div
      layout
      key={card.id}
      initial={{ opacity: 0, y: currentY + 60, scale: currentScale * 0.8, rotateZ: currentRotateZ }}
      animate={{ opacity: 1, y: currentY, scale: currentScale, rotateZ: currentRotateZ }}
      exit={{ // 卡片被循环掉时的动画
        opacity: 0.5, // 半透明
        scale: exitScale,
        y: exitY, // 向下移动
        rotateZ: exitRotate, // 保持或调整旋转
        transition: { duration: 0.4, ease: "circOut" }
      }}
      transition={{ type: 'spring', stiffness: 260, damping: 30, mass: 0.7 }}
      style={{ zIndex: totalVisibleCards - index }}
      className="absolute left-0 top-0 h-full w-full cursor-grab overflow-hidden rounded-2xl bg-card shadow-xl hover:shadow-2xl border border-border active:cursor-grabbing"
      onClick={() => index === 0 && onCardClick(card.eventPageUrl)}
      
      drag={index === 0} // 顶层卡片可以向任意方向拖拽
      dragConstraints={{ top: 0, left: 0, right: 0, bottom: 0 }} // 卡片会试图回到原点
      dragElastic={0.2} // 拖拽弹性，0表示无弹性，1表示完全弹性
      
      onDragEnd={(_, info) => {
        if (index === 0) {
          const dragThreshold = 100; // 拖拽超过这个距离则视为有效 (任意方向)
          const offsetX = info.offset.x;
          const offsetY = info.offset.y;
          const distance = Math.sqrt(offsetX * offsetX + offsetY * offsetY);

          if (distance > dragThreshold) {
            onCycleCard(); // 调用父组件的循环卡片函数
          }
        }
      }}
      whileHover={index === 0 ? { scale: currentScale + 0.03, y: currentY - 8, rotateZ: 0 } : {}}
      whileTap={index === 0 ? { scale: currentScale - 0.02 } : {}}
    >
      {/* 卡片内部结构 */}
      <div className="relative flex h-full flex-col overflow-hidden rounded-2xl text-card-foreground">
        <div className="relative h-3/5 w-full overflow-hidden">
          <img
            src={card.coverImageUrl}
            alt={card.title}
            className="h-full w-full object-cover"
            onError={(e) => { e.currentTarget.src = 'https://placehold.co/600x400/7f1d1d/fecaca?text=图片加载失败'; e.currentTarget.alt = '图片加载失败'; }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent"></div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 p-4 md:p-5 bg-gradient-to-t from-card via-card/95 to-transparent pt-12">
          <h2 className="text-xl md:text-2xl font-bold text-foreground">{card.title}</h2>
          <p className="text-sm text-muted-foreground mt-1">{card.date}</p>
          {card.description && (
            <p className="text-xs text-muted-foreground mt-2 hidden sm:block">
              {card.description.substring(0, 70)}{card.description.length > 70 ? '...' : ''}
            </p>
          )}
        </div>
        {index === 0 && (
          <div className="absolute top-3 right-3 p-2 bg-primary/80 text-primary-foreground rounded-full backdrop-blur-sm shadow-md">
            <ArrowUpRight className="h-5 w-5" />
          </div>
        )}
      </div>
    </motion.div>
  );
}

// 卡片堆叠主组件
export default function InteractiveCardStack({ eventsInput = defaultDanceEvents }) {
  const [activeCards, setActiveCards] = useState(eventsInput);
  const navigate = useNavigate();

  const handleCardClick = (url) => {
    navigate(url);
  };

  const cycleTopCard = useCallback(() => {
    setActiveCards((prevCards) => {
      if (prevCards.length <= 1) return prevCards;
      const topCard = prevCards[0];
      const remainingCards = prevCards.slice(1);
      return [...remainingCards, topCard];
    });
  }, []);

  const visibleCardsCount = Math.min(activeCards.length, 4);

  if (!activeCards || activeCards.length === 0) {
    return <div className="text-center py-10 text-muted-foreground">暂无舞蹈活动信息。</div>;
  }

  return (
    <div className="relative h-[400px] w-full max-w-xs sm:max-w-sm md:h-[450px] md:max-w-md lg:h-[500px] lg:max-w-lg mx-auto">
      <AnimatePresence mode="sync" initial={false}>
        {activeCards.slice(0, visibleCardsCount).map((card, index) => (
          <EventCard
            key={card.id}
            card={card}
            index={index}
            onCardClick={handleCardClick}
            onCycleCard={cycleTopCard}
            totalVisibleCards={visibleCardsCount}
          />
        ))}
      </AnimatePresence>
    </div>
  );
}

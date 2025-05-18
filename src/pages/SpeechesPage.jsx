// src/pages/SpeechesPage.jsx
import React from 'react';
import SpeechEntry from '../components/SpeechEntry'; // 导入 SpeechEntry 组件

// 将你整理好的 speechesData 放在这里或从外部导入
const speechesData = [
  // ... 示例数据或 Amy 的真实数据，按日期倒序排列 ...
  // 例如:
  { id: 'speech31', date: '2021-02-14', topic: '如何在旅行中确保安全', source: '自主调研', forum: '家庭分享会' }, // 建议日期用 YYYY-MM-DD 格式方便排序和处理
  { id: 'speech30', date: '2021-02-07', topic: '让我们走过一生', source: '自主调研', forum: '家庭分享会' },
  { id: 'speech2', date: '2020-07-26', topic: '微笑服务', source: 'N/A', forum: 'TED ED CLUB' },
  { id: 'speech1', date: '2020-07-19', topic: '疫情下的我的生活', source: '自主调研', forum: '家庭分享会' },
  // 确保所有31条记录都添加进来
];

// 辅助函数：格式化日期 (可选)
function formatDate(dateString) {
  const options = { year: 'numeric', month: 'long', day: 'numeric' };
  return new Date(dateString).toLocaleDateString('zh-CN', options); // 使用中文日期格式
}

function SpeechesPage() {
  // 按年份分组演讲数据
  const speechesByYear = speechesData.reduce((acc, speech) => {
    const year = speech.date.substring(0, 4); // 从 YYYY-MM-DD 中提取年份
    if (!acc[year]) {
      acc[year] = [];
    }
    acc[year].push(speech);
    return acc;
  }, {});

  // 获取排序后的年份列表 (最新的在前)
  const sortedYears = Object.keys(speechesByYear).sort((a, b) => b - a);

  return (
    <div className="container mx-auto px-4 py-8 md:py-12">
      <div className="text-center mb-10 md:mb-16">
        <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-primary gradient-text animate-in" style={{animationDelay: '0.2s'}}>
          演讲与分享
        </h1>
        <p className="mt-4 text-lg text-muted-foreground max-w-xl mx-auto animate-in" style={{animationDelay: '0.4s'}}>
          记录每一次思考的火花与公开表达的历程。
        </p>
      </div>

      {sortedYears.length > 0 ? (
        <div className="space-y-12 md:space-y-16">
          {sortedYears.map((year, idx) => (
            <section key={year} >
              <h2 className="text-2xl sm:text-3xl font-semibold text-foreground mb-6 md:mb-8 border-b-2 border-primary/30 pb-2">
                {year}年
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                {speechesByYear[year].map((speech) => (
                  <SpeechEntry
                    key={speech.id}
                    date={formatDate(speech.date)} // 格式化日期
                    topic={speech.topic}
                    source={speech.source}
                    forum={speech.forum}
                  />
                ))}
              </div>
            </section>
          ))}
        </div>
      ) : (
        <p className="text-center text-muted-foreground text-xl py-10">
          演讲记录正在整理中...
        </p>
      )}
    </div>
  );
}

export default SpeechesPage;

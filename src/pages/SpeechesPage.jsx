// src/pages/SpeechesPage.jsx
import React from 'react';
import SpeechEntry from '../components/SpeechEntry'; // 导入 SpeechEntry 组件

// 将你整理好的 speechesData 放在这里或从外部导入
const speechesData = [
  { id: 'speech141', date: '2025-05-03', topic: 'SAT Improvement plan', source: 'self research', forum: 'family Meeting' },
  { id: 'speech140', date: '2025-04-19', topic: 'NanoOne Bio', source: 'self research', forum: 'family Meeting' },
  { id: 'speech139', date: '2025-03-22', topic: 'braver than a bee', source: 'self research', forum: 'family Meeting' },
  { id: 'speech138', date: '2025-03-09', topic: 'college summariies', source: 'self research', forum: 'family Meeting' },
  { id: 'speech137', date: '2025-03-01', topic: 'The science of fear', source: 'self research', forum: 'family Meeting' },
  { id: 'speech136', date: '2025-02-22', topic: 'Balatro', source: 'self research', forum: 'family Meeting' },
  { id: 'speech135', date: '2025-02-08', topic: 'How to dress, top 8 styles among Teens', source: 'self research', forum: 'family Meeting' },
  { id: 'speech134', date: '2025-02-02', topic: 'My 1st practice for car oil change', source: 'self research', forum: 'family Meeting' },
  { id: 'speech133', date: '2025-01-11', topic: 'How does weight loss work', source: 'self research', forum: 'Family Meeting' },
  { id: 'speech132', date: '2024-12-28', topic: 'Summer Program Plan', source: 'Self research', forum: 'Family Meeting' },
  { id: 'speech131', date: '2024-12-17', topic: 'Winter break plan', source: 'Self research', forum: 'Family Meeting' },
  { id: 'speech130', date: '2024-11-30', topic: 'Shall death penality be allowed?', source: 'self search, table topic', forum: 'Family Meeting' },
  { id: 'speech129', date: '2024-11-23', topic: 'Diabetes', source: 'self research', forum: 'Family Meeting' },
  { id: 'speech128', date: '2024-10-26', topic: 'Ethics', source: 'self research', forum: 'Family Meeting' },
  { id: 'speech127', date: '2024-10-19', topic: 'Canada winter trip plan', source: 'self research', forum: 'Family Meeting' },
  { id: 'speech126', date: '2024-10-12', topic: 'Cashless effect', source: 'self research', forum: 'Family Meeting' },
  { id: 'speech125', date: '2024-09-28', topic: 'color theory', source: 'self research', forum: 'Family Meeting' },
  { id: 'speech124', date: '2024-09-21', topic: '7 weird diseases', source: 'self research', forum: 'Family Meeting' },
  { id: 'speech123', date: '2024-09-07', topic: 'body language', source: 'self research', forum: 'Family Meeting' },
  { id: 'speech122', date: '2024-09-01', topic: 'Ethics', source: 'self research', forum: 'Family Meeting' },
  { id: 'speech121', date: '2024-08-25', topic: '1st week in the new school', source: 'self research', forum: 'Family Meeting' },
  { id: 'speech120', date: '2024-08-10', topic: 'plan for the new school in CA', source: 'self research', forum: 'Family Meeting' },
  { id: 'speech119', date: '2024-08-03', topic: 'Things I have learned', source: 'self research', forum: 'Family Meeting' },
  { id: 'speech118', date: '2024-07-27', topic: 'Gen Z humor', source: 'self research', forum: 'Family Meeting' },
  { id: 'speech117', date: '2024-07-13', topic: 'AIM High summer school summary', source: 'self research', forum: 'Family Meeting' },
  { id: 'speech116', date: '2024-07-06', topic: 'blowing candle', source: 'self research', forum: 'Family Meeting' },
  { id: 'speech115', date: '2024-06-29', topic: 'heart diseases', source: 'self research', forum: 'Family Meeting' },
  { id: 'speech114', date: '2024-06-15', topic: 'Pink tax', source: 'self research', forum: 'Family Meeting' },
  { id: 'speech113', date: '2024-06-01', topic: 'Immune system', source: 'self research', forum: 'Family Meeting' },
  { id: 'speech112', date: '2024-05-18', topic: 'brother in my eye', source: 'self research', forum: 'Family Meeting' },
  { id: 'speech111', date: '2024-05-04', topic: 'Summer Plan', source: 'self research', forum: 'Family Meeting' },
  { id: 'speech110', date: '2024-04-16', topic: 'Clinical Psychology', source: 'self research', forum: 'Family Meeting' },
  { id: 'speech109', date: '2024-04-06', topic: 'Brain', source: 'self research', forum: 'Family Meeting' },
  { id: 'speech108', date: '2024-04-01', topic: 'psych', source: 'self research', forum: 'Family Meeting' },
  { id: 'speech107', date: '2024-03-31', topic: 'Infectious diseases', source: 'self research', forum: 'Family Meeting' },
  { id: 'speech106', date: '2024-03-23', topic: 'Enzyme', source: 'self research', forum: 'Family Meeting' },
  { id: 'speech105', date: '2024-03-10', topic: 'gas exchange system', source: 'self research', forum: 'Family Meeting' },
  { id: 'speech104', date: '2024-03-02', topic: 'MESH and personality', source: 'self research', forum: 'Family Meeting' },
  { id: 'speech103', date: '2024-02-04', topic: 'Cardivascular system', source: 'self research', forum: 'Family Meeting' },
  { id: 'speech102', date: '2024-01-04', topic: '2023 summary', source: 'self research', forum: 'Family Meeting' },
  { id: 'speech101', date: '2023-12-16', topic: 'The social psychology experiments', source: 'self research', forum: 'Family Meeting' },
  { id: 'speech100', date: '2023-12-09', topic: 'Stanford Prisoner Experiment', source: 'self research', forum: 'Family Meeting' },
  { id: 'speech99', date: '2023-12-02', topic: 'Mid term exam prep calendar', source: 'self research', forum: 'Family Meeting' },
  { id: 'speech98', date: '2023-11-25', topic: 'Manage Stress', source: 'self research', forum: 'Family Meeting' },
  { id: 'speech97', date: '2023-11-18', topic: 'Learning mechanism part 2', source: 'self research', forum: 'Family Meeting' },
  { id: 'speech96', date: '2023-11-11', topic: 'Learning mechanism', source: 'self research', forum: 'Family Meeting' },
  { id: 'speech95', date: '2023-10-28', topic: 'passion project about first aid education on social media', source: 'Self research', forum: 'Family Meeting' },
  { id: 'speech94', date: '2023-10-21', topic: 'steep stage & disorder', source: 'Self research', forum: 'Family Meeting' },
  { id: 'speech93', date: '2023-10-14', topic: 'The endocrine system', source: 'Self research', forum: 'Family Meeting' },
  { id: 'speech92', date: '2023-09-30', topic: 'about the memories', source: 'Self research', forum: 'Family Meeting' },
  { id: 'speech91', date: '2023-08-12', topic: 'Myopia', source: 'Self research', forum: 'Family Meeting' },
  { id: 'speech90', date: '2023-08-05', topic: 'the positive and negative of social media', source: 'Self research', forum: 'Family Meeting' },
  { id: 'speech89', date: '2023-05-13', topic: 'Life Game', source: 'Self research', forum: 'Family Meeting' },
  { id: 'speech88', date: '2023-05-06', topic: 'Nutrition 101 - part 2', source: 'Self research', forum: 'Family Meeting' },
  { id: 'speech87', date: '2023-04-15', topic: 'Nutrition 101', source: 'Self research', forum: 'Family Meeting' },
  { id: 'speech86', date: '2023-04-08', topic: 'Integumentary System', source: 'Self research', forum: 'Family Meeting' },
  { id: 'speech85', date: '2023-04-01', topic: 'Manipulation Tactics', source: 'Self research', forum: 'Family Meeting' },
  { id: 'speech84', date: '2023-03-18', topic: 'Immune System', source: 'Self research', forum: 'Family Meeting' },
  { id: 'speech83', date: '2023-02-25', topic: 'Benign violation theory', source: 'Self research', forum: 'Family Meeting' },
  { id: 'speech82', date: '2023-02-11', topic: 'Classical VS Operant', source: 'Self research', forum: 'Family Meeting' },
  { id: 'speech81', date: '2023-01-28', topic: 'Study Tips', source: 'Self research', forum: 'Family Meeting' },
  { id: 'speech80', date: '2023-01-21', topic: 'How to study better', source: 'Self research', forum: 'Family Meeting' },
  { id: 'speech79', date: '2023-01-07', topic: 'Gut Feeling Moral Dumbfounding', source: 'Self research', forum: 'Family Meeting' },
  { id: 'speech78', date: '2022-12-10', topic: 'How is the internet changing our decision making', source: 'Self research', forum: 'Family Meeting' },
  { id: 'speech77', date: '2022-11-19', topic: 'Attention', source: 'Self research', forum: 'Family Meeting' },
  { id: 'speech76', date: '2022-11-05', topic: 'Decoy Effect', source: 'Self research', forum: 'Family Meeting' },
  { id: 'speech75', date: '2022-10-22', topic: 'How to sell things', source: 'Self research', forum: 'Family Meeting' },
  { id: 'speech74', date: '2022-10-15', topic: 'Integumentary System', source: 'Self research', forum: 'Family Meeting' },
  { id: 'speech73', date: '2022-10-08', topic: 'Adolescence', source: 'Self research', forum: 'Family Meeting' },
  { id: 'speech72', date: '2022-10-01', topic: 'Circus', source: 'Self research', forum: 'Family Meeting' },
  { id: 'speech71', date: '2022-09-24', topic: 'Choices', source: 'Self research', forum: 'Family Meeting' },
  { id: 'speech70', date: '2022-09-04', topic: 'PSAT Study Plan', source: 'Self research', forum: 'Family Meeting' },
  { id: 'speech69', date: '2022-08-27', topic: 'HTCP', source: 'Self research', forum: 'Family Meeting' },
  { id: 'speech68', date: '2022-08-14', topic: 'Questions', source: 'Self research', forum: 'Family Meeting' },
  { id: 'speech67', date: '2022-06-11', topic: '8th grade summary', source: 'Self research', forum: 'Family Meeting' },
  { id: 'speech66', date: '2022-06-04', topic: 'Ways to study', source: 'Self research', forum: 'Family Meeting' },
  { id: 'speech65', date: '2022-05-28', topic: 'Personality Styles', source: 'Self research', forum: 'Family Meeting' },
  { id: 'speech64', date: '2022-05-09', topic: 'Korea Mythology', source: 'Self research', forum: 'Family Meeting' },
  { id: 'speech63', date: '2022-05-07', topic: 'My Mom', source: 'Self research', forum: 'Family Meeting' },
  { id: 'speech62', date: '2022-04-30', topic: 'Genetics', source: 'Self research', forum: 'Family Meeting' },
  { id: 'speech61', date: '2022-04-16', topic: 'How to survive nuclear bomb', source: 'Self research', forum: 'Family Meeting' },
  { id: 'speech60', date: '2022-04-13', topic: 'Raw Diets and Kibbles', source: 'Self research', forum: 'Family Meeting' },
  { id: 'speech59', date: '2022-03-26', topic: 'Writing Math Solution', source: 'Self research', forum: 'Family Meeting' },
  { id: 'speech58', date: '2022-03-05', topic: 'Positive Competition', source: 'Self research', forum: 'Family Meeting' },
  { id: 'speech57', date: '2022-02-12', topic: 'The difference between Gen X and Gen Z', source: 'Self research', forum: 'Family Meeting' },
  { id: 'speech56', date: '2022-02-05', topic: 'Improptu speech', source: 'Self research', forum: 'Family Meeting' },
  { id: 'speech55', date: '2022-01-29', topic: 'Improptu speech', source: 'Self research', forum: 'Family Meeting' },
  { id: 'speech54', date: '2022-01-08', topic: 'Dreams', source: 'Self research', forum: 'Family Meeting' },
  { id: 'speech53', date: '2021-12-26', topic: '2021 summary and 2022 resolution', source: 'Self research', forum: 'Family Meeting' },
  { id: 'speech52', date: '2021-11-20', topic: 'How to develop confidence', source: 'Self research', forum: 'Family Meeting' },
  { id: 'speech51', date: '2021-11-14', topic: 'Your kid got bullied, tell the teacher or tell them to hit them back', source: 'Self research', forum: 'Family Meeting' },
  { id: 'speech50', date: '2021-08-29', topic: 'The first Americans', source: 'Self research', forum: 'Family Meeting' },
  { id: 'speech49', date: '2021-08-22', topic: 'The new 7 Wonders', source: 'Self research', forum: 'Family Meeting' },
  { id: 'speech48', date: '2021-08-15', topic: 'the right pareting from a kid view', source: 'Self research', forum: 'Family Meeting' },
  { id: 'speech47', date: '2021-06-13', topic: 'My Dream world', source: 'Self research', forum: 'Family Meeting' },
  { id: 'speech46', date: '2021-06-06', topic: 'Auroras', source: 'Self research', forum: 'Family Meeting' },
  { id: 'speech45', date: '2021-05-30', topic: 'Apollo', source: 'Self research', forum: 'Family Meeting' },
  { id: 'speech44', date: '2021-05-23', topic: 'Cyclops cave in the Odyssey', source: 'Self research', forum: 'Family Meeting' },
  { id: 'speech43', date: '2021-05-09', topic: 'Zeus', source: 'Self research', forum: 'Family Meeting' },
  { id: 'speech42', date: '2021-05-02', topic: 'Greek mythology', source: 'Self research', forum: 'Family Meeting' },
  { id: 'speech41', date: '2021-04-25', topic: 'Ecology', source: 'Self research', forum: 'Family Meeting' },
  { id: 'speech40', date: '2021-04-18', topic: 'Study Tips', source: 'Self research', forum: 'Family Meeting' },
  { id: 'speech39', date: '2021-04-11', topic: 'Body organization', source: 'Self research', forum: 'Family Meeting' },
  { id: 'speech38', date: '2021-04-04', topic: 'Classification of Life', source: 'Self research', forum: 'Family Meeting' },
  { id: 'speech37', date: '2021-03-28', topic: 'Heredity - Genetic and Probability', source: 'Self research', forum: 'Family Meeting' },
  { id: 'speech36', date: '2021-03-21', topic: 'Vegetable Cruelty', source: 'Self research', forum: 'Family Meeting' },
  { id: 'speech35', date: '2021-03-14', topic: 'Life and body series - Brain', source: 'Self research', forum: 'Family Meeting' },
  { id: 'speech34', date: '2021-03-07', topic: 'Life and body series - Blood', source: 'Self research', forum: 'Family Meeting' },
  { id: 'speech33', date: '2021-02-28', topic: 'Life and body series - Bones', source: 'Self research', forum: 'Family Meeting' },
  { id: 'speech32', date: '2021-02-21', topic: 'Life and body series - Surgeon Path', source: 'Self research', forum: 'Family Meeting' },
  { id: 'speech31', date: '2021-02-14', topic: 'How to be safe during traveling', source: 'Self research', forum: 'Family Meeting' },
  { id: 'speech30', date: '2021-02-07', topic: 'Let us walk through lifetime', source: 'Self research', forum: 'Family Meeting' },
  { id: 'speech29', date: '2021-01-31', topic: 'How to control your emotion', source: 'Self research', forum: 'Family Meeting' },
  { id: 'speech28', date: '2021-01-24', topic: 'Negative and positive discrimination', source: 'Self research', forum: 'Family Meeting' },
  { id: 'speech27', date: '2021-01-17', topic: 'Distraction in technology time', source: 'self research', forum: 'Family Meeting' },
  { id: 'speech26', date: '2021-01-10', topic: 'The good, bad and ugly of social media', source: 'self research', forum: 'Family Meeting' },
  { id: 'speech25', date: '2021-01-03', topic: 'What is the purpose of life', source: 'self research', forum: 'Family Meeting' },
  { id: 'speech24', date: '2020-12-27', topic: 'how to avoid embarrasing silence during conversation', source: 'self research', forum: 'Family Meeting' },
  { id: 'speech23', date: '2020-12-20', topic: 'How to read 3x faster', source: '《Triple Your Reading Speed》', forum: 'Family Meeting' },
  { id: 'speech22', date: '2020-12-13', topic: 'What should school actually teach you?', source: 'Self research', forum: 'Family Meeting' },
  { id: 'speech21', date: '2020-12-06', topic: 'What will happen after you die', source: 'Self research', forum: 'Family Meeting' },
  { id: 'speech20', date: '2020-11-29', topic: 'Story about Mayflower', source: 'Self research', forum: 'Family Meeting' },
  { id: 'speech19', date: '2020-11-22', topic: 'Plymouth Colony', source: 'Self research', forum: 'Family Meeting' },
  { id: 'speech18', date: '2020-11-15', topic: 'Digit Art', source: 'Self research', forum: 'Family Meeting' },
  { id: 'speech17', date: '2020-11-08', topic: 'TED Talk Chapter 2', source: 'TED TALKS', forum: 'Family Meeting' },
  { id: 'speech16', date: '2020-11-01', topic: 'Fear in public speak', source: 'TED TALKS', forum: 'Family Meeting' },
  { id: 'speech15', date: '2020-10-25', topic: 'How to prepare a good speech', source: 'TED TALKS', forum: 'Family Meeting' },
  { id: 'speech14', date: '2020-10-18', topic: 'Education System Difference for US and China', source: 'Self research', forum: 'Family Meeting' },
  { id: 'speech13', date: '2020-10-11', topic: 'Who moved my cheese Part 2', source: 'Who Moved My Cheese', forum: 'Family Meeting' },
  { id: 'speech12', date: '2020-10-04', topic: 'Who moved my cheese Part 1', source: 'Who Moved My Cheese', forum: 'Family Meeting' },
  { id: 'speech11', date: '2020-09-27', topic: 'How to make effective personal plan', source: 'Self research', forum: 'Family Meeting' },
  { id: 'speech10', date: '2020-09-20', topic: '7 Habits Summary Talk', source: '7 Habits of Effective Teens', forum: 'Family Meeting' },
  { id: 'speech9', date: '2020-09-13', topic: 'Habit 7 - Sharpen the saw', source: '7 Habits of Effective Teens', forum: 'Family Meeting' },
  { id: 'speech8', date: '2020-09-06', topic: 'Habit 6 - Synergize', source: '7 Habits of Effective Teens', forum: 'Family Meeting' },
  { id: 'speech7', date: '2020-08-30', topic: 'Habit 5 - Seek first to undertand, then to be understood', source: '7 Habits of Effective Teens', forum: 'Family Meeting' },
  { id: 'speech6', date: '2020-08-23', topic: 'Habit 4 - Think win-win', source: '7 Habits of Effective Teens', forum: 'Family Meeting' },
  { id: 'speech5', date: '2020-08-16', topic: 'Habit 3 - Put 1st thing 1st', source: '7 Habits of Effective Teens', forum: 'Family Meeting' },
  { id: 'speech4', date: '2020-08-09', topic: 'Habit 2 - Begin with end in mind', source: '7 Habits of Effective Teens', forum: 'Family Meeting' },
  { id: 'speech3', date: '2020-08-02', topic: 'Habit 1 - Be Proactive', source: '7 Habits of Effective Teens', forum: 'Family Meeting' },
  { id: 'speech2', date: '2020-07-26', topic: 'Service for Smile', source: 'N/A', forum: 'TED ED CLUB' },
  { id: 'speech1', date: '2020-07-19', topic: 'My life under pandemic', source: 'Self research', forum: 'Family Meeting' },
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
        <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-primary gradient-text animate-in" style={{ animationDelay: '0.2s' }}>
          演讲与分享
        </h1>
        <p className="mt-4 text-lg text-muted-foreground max-w-xl mx-auto animate-in" style={{ animationDelay: '0.4s' }}>
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

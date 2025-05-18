// src/pages/SpeechesPage.jsx
import React from 'react';
import SpeechEntry from '../components/SpeechEntry';
import HostedEventCard from '../components/HostedEventCard'; // Assuming you have this component from previous steps

// Data provided by the user (141 entries)
// This should be Amy's actual data, sorted by date descending if not already.
// The convertDate function is no longer strictly needed here if dates are already YYYY-MM-DD
// but the formatDate function below will handle the display.

const speechesData = [
  { id: 'speech141', date: '2025-05-03', topic: 'Sat Improvement Plan', source: 'Self Research', forum: 'Family Meeting', type: 'individual' },
  { id: 'speech140', date: '2025-04-19', topic: 'NanoOne Bio', source: 'Self Research', forum: 'Family Meeting', type: 'individual' },
  { id: 'speech139', date: '2025-03-22', topic: 'Braver Than A Bee', source: 'Self Research', forum: 'Family Meeting', type: 'individual' },
  { id: 'speech138', date: '2025-03-09', topic: 'College Summariies', source: 'Self Research', forum: 'Family Meeting', type: 'individual' },
  { id: 'speech137', date: '2025-03-01', topic: 'The Science Of Fear', source: 'Self Research', forum: 'Family Meeting', type: 'individual' },
  { id: 'speech136', date: '2025-02-22', topic: 'Balatro', source: 'Self Research', forum: 'Family Meeting', type: 'individual' },
  { id: 'speech135', date: '2025-02-08', topic: 'How To Dress, Top 8 Styles Among Teens', source: 'Self Research', forum: 'Family Meeting', type: 'individual' },
  { id: 'speech134', date: '2025-02-02', topic: 'My 1St Practice For Car Oil Change', source: 'Self Research', forum: 'Family Meeting', type: 'individual' },
  { id: 'speech133', date: '2025-01-11', topic: 'How Does Weight Loss Work', source: 'Self Research', forum: 'Family Meeting', type: 'individual' },
  { id: 'speech132', date: '2024-12-28', topic: 'Summer Program Plan', source: 'Self Research', forum: 'Family Meeting', type: 'individual' },
  { id: 'speech131', date: '2024-12-17', topic: 'Winter Break Plan', source: 'Self Research', forum: 'Family Meeting', type: 'individual' },
  { id: 'speech130', date: '2024-11-30', topic: 'Shall Death Penality Be Allowed?', source: 'self search, table topic', forum: 'Family Meeting', type: 'individual' },
  { id: 'speech129', date: '2024-11-23', topic: 'Diabetes', source: 'Self Research', forum: 'Family Meeting', type: 'individual' },
  { id: 'speech128', date: '2024-10-26', topic: 'Ethics', source: 'Self Research', forum: 'Family Meeting', type: 'individual' },
  { id: 'speech127', date: '2024-10-19', topic: 'Canada Winter Trip Plan', source: 'Self Research', forum: 'Family Meeting', type: 'individual' },
  { id: 'speech126', date: '2024-10-12', topic: 'Cashless Effect', source: 'Self Research', forum: 'Family Meeting', type: 'individual' },
  { id: 'speech125', date: '2024-09-28', topic: 'Color Theory', source: 'Self Research', forum: 'Family Meeting', type: 'individual' },
  { id: 'speech124', date: '2024-09-21', topic: '7 Weird Diseases', source: 'Self Research', forum: 'Family Meeting', type: 'individual' },
  { id: 'speech123', date: '2024-09-07', topic: 'Body Language', source: 'Self Research', forum: 'Family Meeting', type: 'individual' },
  { id: 'speech122', date: '2024-09-01', topic: 'Ethics', source: 'Self Research', forum: 'Family Meeting', type: 'individual' },
  { id: 'speech121', date: '2024-08-25', topic: '1St Week In The New School', source: 'Self Research', forum: 'Family Meeting', type: 'individual' },
  { id: 'speech120', date: '2024-08-10', topic: 'Plan For The New School In Ca', source: 'Self Research', forum: 'Family Meeting', type: 'individual' },
  { id: 'speech119', date: '2024-08-03', topic: 'Things I Have Learned', source: 'Self Research', forum: 'Family Meeting', type: 'individual' },
  { id: 'speech118', date: '2024-07-27', topic: 'Gen Z Humor', source: 'Self Research', forum: 'Family Meeting', type: 'individual' },
  { id: 'speech117', date: '2024-07-13', topic: 'Aim High Summer School Summary', source: 'Self Research', forum: 'Family Meeting', type: 'individual' },
  { id: 'speech116', date: '2024-07-06', topic: 'Blowing Candle', source: 'Self Research', forum: 'Family Meeting', type: 'individual' },
  { id: 'speech115', date: '2024-06-29', topic: 'Heart Diseases', source: 'Self Research', forum: 'Family Meeting', type: 'individual' },
  { id: 'speech114', date: '2024-06-15', topic: 'Pink Tax', source: 'Self Research', forum: 'Family Meeting', type: 'individual' },
  { id: 'speech113', date: '2024-06-01', topic: 'Immune System', source: 'Self Research', forum: 'Family Meeting', type: 'individual' },
  { id: 'speech112', date: '2024-05-18', topic: 'Brother In My Eye', source: 'Self Research', forum: 'Family Meeting', type: 'individual' },
  { id: 'speech111', date: '2024-05-04', topic: 'Summer Plan', source: 'Self Research', forum: 'Family Meeting', type: 'individual' },
  { id: 'speech110', date: '2024-04-16', topic: 'Clinical Psychology', source: 'Self Research', forum: 'Family Meeting', type: 'individual' },
  { id: 'speech109', date: '2024-04-06', topic: 'Brain', source: 'Self Research', forum: 'Family Meeting', type: 'individual' },
  { id: 'speech108', date: '2024-04-01', topic: 'Psych', source: 'Self Research', forum: 'Family Meeting', type: 'individual' },
  { id: 'speech107', date: '2024-03-31', topic: 'Infectious Diseases', source: 'Self Research', forum: 'Family Meeting', type: 'individual' },
  { id: 'speech106', date: '2024-03-23', topic: 'Enzyme', source: 'Self Research', forum: 'Family Meeting', type: 'individual' },
  { id: 'speech105', date: '2024-03-10', topic: 'Gas Exchange System', source: 'Self Research', forum: 'Family Meeting', type: 'individual' },
  { id: 'speech104', date: '2024-03-02', topic: 'Mesh And Personality', source: 'Self Research', forum: 'Family Meeting', type: 'individual' },
  { id: 'speech103', date: '2024-02-04', topic: 'Cardivascular System', source: 'Self Research', forum: 'Family Meeting', type: 'individual' },
  { id: 'speech102', date: '2024-01-04', topic: '2023 Summary', source: 'Self Research', forum: 'Family Meeting', type: 'individual' },
  { id: 'speech101', date: '2023-12-16', topic: 'The Social Psychology Experiments', source: 'Self Research', forum: 'Family Meeting', type: 'individual' },
  { id: 'speech100', date: '2023-12-09', topic: 'Stanford Prisoner Experiment', source: 'Self Research', forum: 'Family Meeting', type: 'individual' },
  { id: 'speech99', date: '2023-12-02', topic: 'Mid Term Exam Prep Calendar', source: 'Self Research', forum: 'Family Meeting', type: 'individual' },
  { id: 'speech98', date: '2023-11-25', topic: 'Manage Stress', source: 'Self Research', forum: 'Family Meeting', type: 'individual' },
  { id: 'speech97', date: '2023-11-18', topic: 'Learning Mechanism Part 2', source: 'Self Research', forum: 'Family Meeting', type: 'individual' },
  { id: 'speech96', date: '2023-11-11', topic: 'Learning Mechanism', source: 'Self Research', forum: 'Family Meeting', type: 'individual' },
  { id: 'speech95', date: '2023-10-28', topic: 'Passion Project About First Aid Education On Social Media', source: 'Self Research', forum: 'Family Meeting', type: 'individual' },
  { id: 'speech94', date: '2023-10-21', topic: 'Steep Stage & Disorder', source: 'Self Research', forum: 'Family Meeting', type: 'individual' },
  { id: 'speech93', date: '2023-10-14', topic: 'The Endocrine System', source: 'Self Research', forum: 'Family Meeting', type: 'individual' },
  { id: 'speech92', date: '2023-09-30', topic: 'About The Memories', source: 'Self Research', forum: 'Family Meeting', type: 'individual' },
  { id: 'speech91', date: '2023-08-12', topic: 'Myopia', source: 'Self Research', forum: 'Family Meeting', type: 'individual' },
  { id: 'speech90', date: '2023-08-05', topic: 'The Positive And Negative Of Social Media', source: 'Self Research', forum: 'Family Meeting', type: 'individual' },
  { id: 'speech89', date: '2023-05-13', topic: 'Life Game', source: 'Self Research', forum: 'Family Meeting', type: 'individual' },
  { id: 'speech88', date: '2023-05-06', topic: 'Nutrition 101 - Part 2', source: 'Self Research', forum: 'Family Meeting', type: 'individual' },
  { id: 'speech87', date: '2023-04-15', topic: 'Nutrition 101', source: 'Self Research', forum: 'Family Meeting', type: 'individual' },

  // { id: 'speech86', date: '2023-04-08', topic: 'Integumentary System', source: 'Self Research', forum: 'Family Meeting', type: 'individual' }, // This date matches the hosted event, ensure IDs are unique if they are separate entries
  { id: 'speech85', date: '2023-04-01', topic: 'Manipulation Tactics', source: 'Self Research', forum: 'Family Meeting', type: 'individual' },
  { id: 'speech84', date: '2023-03-18', topic: 'Immune System', source: 'Self Research', forum: 'Family Meeting', type: 'individual' },
  { id: 'speech83', date: '2023-02-25', topic: 'Benign Violation Theory', source: 'Self Research', forum: 'Family Meeting', type: 'individual' },
  { id: 'speech82', date: '2023-02-11', topic: 'Classical Vs Operant', source: 'Self Research', forum: 'Family Meeting', type: 'individual' },
  { id: 'speech81', date: '2023-01-28', topic: 'Study Tips', source: 'Self Research', forum: 'Family Meeting', type: 'individual' },
  { id: 'speech80', date: '2023-01-21', topic: 'How To Study Better', source: 'Self Research', forum: 'Family Meeting', type: 'individual' },
  { id: 'speech79', date: '2023-01-07', topic: 'Gut Feeling Moral Dumbfounding', source: 'Self Research', forum: 'Family Meeting', type: 'individual' },
  { id: 'speech78', date: '2022-12-10', topic: 'How Is The Internet Changing Our Decision Making', source: 'Self Research', forum: 'Family Meeting', type: 'individual' },
  { id: 'speech77', date: '2022-11-19', topic: 'Attention', source: 'Self Research', forum: 'Family Meeting', type: 'individual' },
  { id: 'speech76', date: '2022-11-05', topic: 'Decoy Effect', source: 'Self Research', forum: 'Family Meeting', type: 'individual' },
  { id: 'speech75', date: '2022-10-22', topic: 'How To Sell Things', source: 'Self Research', forum: 'Family Meeting', type: 'individual' },
  { id: 'speech74', date: '2022-10-15', topic: 'Integumentary System', source: 'Self Research', forum: 'Family Meeting', type: 'individual' },
  { id: 'speech73', date: '2022-10-08', topic: 'Adolescence', source: 'Self Research', forum: 'Family Meeting', type: 'individual' },
  { id: 'speech72', date: '2022-10-01', topic: 'Circus', source: 'Self Research', forum: 'Family Meeting', type: 'individual' },
  { id: 'speech71', date: '2022-09-24', topic: 'Choices', source: 'Self Research', forum: 'Family Meeting', type: 'individual' },
  { id: 'speech70', date: '2022-09-04', topic: 'Psat Study Plan', source: 'Self Research', forum: 'Family Meeting', type: 'individual' },
  { id: 'speech69', date: '2022-08-27', topic: 'Htcp', source: 'Self Research', forum: 'Family Meeting', type: 'individual' },
  { id: 'speech68', date: '2022-08-14', topic: 'Questions', source: 'Self Research', forum: 'Family Meeting', type: 'individual' },
  { id: 'speech67', date: '2022-06-11', topic: '8Th Grade Summary', source: 'Self Research', forum: 'Family Meeting', type: 'individual' },
  { id: 'speech66', date: '2022-06-04', topic: 'Ways To Study', source: 'Self Research', forum: 'Family Meeting', type: 'individual' },
  { id: 'speech65', date: '2022-05-28', topic: 'Personality Styles', source: 'Self Research', forum: 'Family Meeting', type: 'individual' },
  { id: 'speech64', date: '2022-05-09', topic: 'Korea Mythology', source: 'Self Research', forum: 'Family Meeting', type: 'individual' },
  { id: 'speech63', date: '2022-05-07', topic: 'My Mom', source: 'Self Research', forum: 'Family Meeting', type: 'individual' },
  { id: 'speech62', date: '2022-04-30', topic: 'Genetics', source: 'Self Research', forum: 'Family Meeting', type: 'individual' },
  { id: 'speech61', date: '2022-04-16', topic: 'How To Survive Nuclear Bomb', source: 'Self Research', forum: 'Family Meeting', type: 'individual' },
  { id: 'speech60', date: '2022-04-13', topic: 'Raw Diets And Kibbles', source: 'Self Research', forum: 'Family Meeting', type: 'individual' },
  { id: 'speech59', date: '2022-03-26', topic: 'Writing Math Solution', source: 'Self Research', forum: 'Family Meeting', type: 'individual' },
  { id: 'speech58', date: '2022-03-05', topic: 'Positive Competition', source: 'Self Research', forum: 'Family Meeting', type: 'individual' },
  { id: 'speech57', date: '2022-02-12', topic: 'The Difference Between Gen X And Gen Z', source: 'Self Research', forum: 'Family Meeting', type: 'individual' },
  { id: 'speech56', date: '2022-02-05', topic: 'Improptu Speech', source: 'Self Research', forum: 'Family Meeting', type: 'individual' },
  { id: 'speech55', date: '2022-01-29', topic: 'Improptu Speech', source: 'Self Research', forum: 'Family Meeting', type: 'individual' },
  { id: 'speech54', date: '2022-01-08', topic: 'Dreams', source: 'Self Research', forum: 'Family Meeting', type: 'individual' },
  { id: 'speech53', date: '2021-12-26', topic: '2021 Summary And 2022 Resolution', source: 'Self Research', forum: 'Family Meeting', type: 'individual' },
  { id: 'speech52', date: '2021-11-20', topic: 'How To Develop Confidence', source: 'Self Research', forum: 'Family Meeting', type: 'individual' },
  { id: 'speech51', date: '2021-11-14', topic: 'Your Kid Got Bullied, Tell The Teacher Or Tell Them To Hit Them Back', source: 'Self Research', forum: 'Family Meeting', type: 'individual' },
  { id: 'speech50', date: '2021-08-29', topic: 'The First Americans', source: 'Self Research', forum: 'Family Meeting', type: 'individual' },
  { id: 'speech49', date: '2021-08-22', topic: 'The New 7 Wonders', source: 'Self Research', forum: 'Family Meeting', type: 'individual' },
  { id: 'speech48', date: '2021-08-15', topic: 'The Right Pareting From A Kid View', source: 'Self Research', forum: 'Family Meeting', type: 'individual' },
  { id: 'speech47', date: '2021-06-13', topic: 'My Dream World', source: 'Self Research', forum: 'Family Meeting', type: 'individual' },
  { id: 'speech46', date: '2021-06-06', topic: 'Auroras', source: 'Self Research', forum: 'Family Meeting', type: 'individual' },
  { id: 'speech45', date: '2021-05-30', topic: 'Apollo', source: 'Self Research', forum: 'Family Meeting', type: 'individual' },
  { id: 'speech44', date: '2021-05-23', topic: 'Cyclops Cave In The Odyssey', source: 'Self Research', forum: 'Family Meeting', type: 'individual' },
  { id: 'speech43', date: '2021-05-09', topic: 'Zeus', source: 'Self Research', forum: 'Family Meeting', type: 'individual' },
  { id: 'speech42', date: '2021-05-02', topic: 'Greek Mythology', source: 'Self Research', forum: 'Family Meeting', type: 'individual' },
  { id: 'speech41', date: '2021-04-25', topic: 'Ecology', source: 'Self Research', forum: 'Family Meeting', type: 'individual' },
  { id: 'speech40', date: '2021-04-18', topic: 'Study Tips', source: 'Self Research', forum: 'Family Meeting', type: 'individual' },
  { id: 'speech39', date: '2021-04-11', topic: 'Body Organization', source: 'Self Research', forum: 'Family Meeting', type: 'individual' },
  { id: 'speech38', date: '2021-04-04', topic: 'Classification Of Life', source: 'Self Research', forum: 'Family Meeting', type: 'individual' },
  { id: 'speech37', date: '2021-03-28', topic: 'Heredity - Genetic And Probability', source: 'Self Research', forum: 'Family Meeting', type: 'individual' },
  { id: 'speech36', date: '2021-03-21', topic: 'Vegetable Cruelty', source: 'Self Research', forum: 'Family Meeting', type: 'individual' },
  { id: 'speech35', date: '2021-03-14', topic: 'Life And Body Series - Brain', source: 'Self Research', forum: 'Family Meeting', type: 'individual' },
  { id: 'speech34', date: '2021-03-07', topic: 'Life And Body Series - Blood', source: 'Self Research', forum: 'Family Meeting', type: 'individual' },
  { id: 'speech33', date: '2021-02-28', topic: 'Life And Body Series - Bones', source: 'Self Research', forum: 'Family Meeting', type: 'individual' },
  { id: 'speech32', date: '2021-02-21', topic: 'Life And Body Series - Surgeon Path', source: 'Self Research', forum: 'Family Meeting', type: 'individual' },
  { id: 'speech31', date: '2021-02-14', topic: 'How To Be Safe During Traveling', source: 'Self Research', forum: 'Family Meeting', type: 'individual' },
  { id: 'speech30', date: '2021-02-07', topic: 'Let Us Walk Through lifetime', source: 'Self Research', forum: 'Family Meeting', type: 'individual' },
  { id: 'speech29', date: '2021-01-31', topic: 'How To Control Your Emotion', source: 'Self Research', forum: 'Family Meeting', type: 'individual' },
  { id: 'speech28', date: '2021-01-24', topic: 'Negative And Positive Discrimination', source: 'Self Research', forum: 'Family Meeting', type: 'individual' },
  { id: 'speech27', date: '2021-01-17', topic: 'Distraction In Technology Time', source: 'Self Research', forum: 'Family Meeting', type: 'individual' },
  { id: 'speech26', date: '2021-01-10', topic: 'The Good, Bad And Ugly Of Social Media', source: 'Self Research', forum: 'Family Meeting', type: 'individual' },
  { id: 'speech25', date: '2021-01-03', topic: 'What Is The Purpose Of Life', source: 'Self Research', forum: 'Family Meeting', type: 'individual' },
  { id: 'speech24', date: '2020-12-27', topic: 'How To Avoid Embarrasing Silence During Conversation', source: 'Self Research', forum: 'Family Meeting', type: 'individual' },
  { id: 'speech23', date: '2020-12-20', topic: 'How To Read 3X Faster', source: '《Triple Your Reading Speed》', forum: 'Family Meeting', type: 'individual' },
  { id: 'speech22', date: '2020-12-13', topic: 'What Should School Actually Teach You?', source: 'Self Research', forum: 'Family Meeting', type: 'individual' },
  { id: 'speech21', date: '2020-12-06', topic: 'What Will Happen After You Die', source: 'Self Research', forum: 'Family Meeting', type: 'individual' },
  { id: 'speech20', date: '2020-11-29', topic: 'Story About Mayflower', source: 'Self Research', forum: 'Family Meeting', type: 'individual' },
  { id: 'speech19', date: '2020-11-22', topic: 'Plymouth Colony', source: 'Self Research', forum: 'Family Meeting', type: 'individual' },
  { id: 'speech18', date: '2020-11-15', topic: 'Digit Art', source: 'Self Research', forum: 'Family Meeting', type: 'individual' },
  { id: 'speech17', date: '2020-11-08', topic: 'Ted Talk Chapter 2', source: 'TED TALKS', forum: 'Family Meeting', type: 'individual' },
  { id: 'speech16', date: '2020-11-01', topic: 'Fear In Public Speak', source: 'TED TALKS', forum: 'Family Meeting', type: 'individual' },
  { id: 'speech15', date: '2020-10-25', topic: 'How To Prepare A Good Speech', source: 'TED TALKS', forum: 'Family Meeting', type: 'individual' },
  { id: 'speech14', date: '2020-10-18', topic: 'Education System Difference For Us And China', source: 'Self Research', forum: 'Family Meeting', type: 'individual' },
  { id: 'speech13', date: '2020-10-11', topic: 'Who Moved My Cheese Part 2', source: 'Who Moved My Cheese', forum: 'Family Meeting', type: 'individual' },
  { id: 'speech12', date: '2020-10-04', topic: 'Who Moved My Cheese Part 1', source: 'Who Moved My Cheese', forum: 'Family Meeting', type: 'individual' },
  { id: 'speech11', date: '2020-09-27', topic: 'How To Make Effective Personal Plan', source: 'Self Research', forum: 'Family Meeting', type: 'individual' },
  { id: 'speech10', date: '2020-09-20', topic: '7 Habits Summary Talk', source: '7 Habits of Effective Teens', forum: 'Family Meeting', type: 'individual' },
  { id: 'speech9', date: '2020-09-13', topic: 'Habit 7 - Sharpen The Saw', source: '7 Habits of Effective Teens', forum: 'Family Meeting', type: 'individual' },
  { id: 'speech8', date: '2020-09-06', topic: 'Habit 6 - Synergize', source: '7 Habits of Effective Teens', forum: 'Family Meeting', type: 'individual' },
  { id: 'speech7', date: '2020-08-30', topic: 'Habit 5 - Seek First To Undertand, Then To Be Understood', source: '7 Habits of Effective Teens', forum: 'Family Meeting', type: 'individual' },
  { id: 'speech6', date: '2020-08-23', topic: 'Habit 4 - Think Win-Win', source: '7 Habits of Effective Teens', forum: 'Family Meeting', type: 'individual' },
  { id: 'speech5', date: '2020-08-16', topic: 'Habit 3 - Put 1St Thing 1St', source: '7 Habits of Effective Teens', forum: 'Family Meeting', type: 'individual' },
  { id: 'speech4', date: '2020-08-09', topic: 'Habit 2 - Begin With End In Mind', source: '7 Habits of Effective Teens', forum: 'Family Meeting', type: 'individual' },
  { id: 'speech3', date: '2020-08-02', topic: 'Habit 1 - Be Proactive', source: '7 Habits of Effective Teens', forum: 'Family Meeting', type: 'individual' },
  { id: 'speech2', date: '2020-07-26', topic: 'Service For Smile', source: 'N/A', forum: 'TED ED CLUB', type: 'individual' },
  { id: 'speech1', date: '2020-07-19', topic: 'My Life Under Pandemic', source: 'Self Research', forum: 'Family Meeting', type: 'individual' },
  // Remember to add the hosted event data here if it's not already included
  // and ensure the entire list is sorted by date descending.

  
  {
    id: 'hosted-event-2023-04-08',
    type: 'hostedEvent',
    date: '2023-04-08',
    amySpeechTopic: 'Integumentary system',
    forum: 'Zimeng\'s Hosting Friends\' Sharing Session',
    participants: [
      { name: 'Harry', topic: 'What if' },
      { name: 'Alina', topic: 'Dolphin Watching' },
      { name: 'Stephanie', topic: 'My Wonderful Trip to Disney Cruise' },
      { name: 'Tiffany', topic: 'Self Made Mideo Introduction' },
    ],
    highlights: 'Zimeng starts to exercise time control.'
  }
  
].sort((a,b) => new Date(b.date) - new Date(a.date)); // Ensure sorting if mixing with hosted event later


function formatDateToUS(dateString) {
  if (!dateString || dateString.toLowerCase() === 'n/a') {
    return 'Date N/A';
  }

  const [year, month, day] = dateString.split('-');
  const date = new Date(Number(year), Number(month) - 1, Number(day)); // Month is 0-indexed

  const options = { year: 'numeric', month: 'long', day: 'numeric', timeZone: 'UTC' }; // Added timeZone: 'UTC'
  return date.toLocaleDateString('en-US', options);
}

function SpeechesPage() {
  const speechesByYear = speechesData.reduce((acc, speech) => {
    if (!speech.date || speech.date.toLowerCase() === 'n/a') { // Skip entries with invalid dates
        return acc;
    }
    const year = speech.date.substring(0, 4); 
    if (!acc[year]) {
      acc[year] = [];
    }
    // Add type if missing, default to 'individual'
    acc[year].push({ ...speech, type: speech.type || 'individual' });
    return acc;
  }, {});


  const sortedYears = Object.keys(speechesByYear).sort((a, b) => b - a);

  return (
    <div className="container mx-auto px-4 py-8 md:py-12">
      <div className="text-center mb-10 md:mb-16">
        <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-primary gradient-text animate-in" style={{ animationDelay: '0.2s' }}>
          Speeches & Presentations
        </h1>
        <p className="mt-4 text-lg text-muted-foreground max-w-xl mx-auto animate-in" style={{ animationDelay: '0.4s' }}>
          A record of thoughts, explorations, and public speaking engagements.
        </p>
      </div>

      {sortedYears.length > 0 ? (
        <div className="space-y-12 md:space-y-16">
          {sortedYears.map((year, idx) => (
            <section key={year} className="" style={{animationDelay: `${(idx * 0.1) + 0.3}s`}}>
              <h2 className="text-2xl sm:text-3xl font-semibold text-foreground mb-6 md:mb-8 border-b-2 border-primary/30 pb-2">
                Year {year}
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 items-start">
                {speechesByYear[year].map((speech) => {
                  // Conditional rendering based on speech.type
                  if (speech.type === 'hostedEvent') {
                    return (
                      <div key={speech.id} className="md:col-span-2"> {/* Hosted event spans more columns */}
                        <HostedEventCard event={speech} />
                      </div>
                    );
                  } else {
                    return (
                      <SpeechEntry
                        key={speech.id}
                        date={formatDateToUS(speech.date)} // Use the new US date formatting function
                        topic={speech.topic}
                        source={speech.source}
                        forum={speech.forum}
                      />
                    );
                  }
                })}
              </div>
            </section>
          ))}
        </div>
      ) : (
        <p className="text-center text-muted-foreground text-xl py-10">
          Speech records are being organized...
        </p>
      )}
    </div>
  );
}

export default SpeechesPage;

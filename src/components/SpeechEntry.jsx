// src/components/SpeechEntry.jsx
import React from 'react';
import { MessageSquareText, BookOpen, Users, CalendarDays } from 'lucide-react'; // 示例图标

export default function SpeechEntry({ date, topic, source, forum }) {
  return (
    <div className="bg-card p-4 sm:p-6 rounded-lg shadow-md border border-border transition-all duration-300 hover:shadow-lg hover:border-primary/50">
      <h3 className="text-lg sm:text-xl font-semibold text-primary mb-2">{topic}</h3>
      <div className="space-y-1.5 text-sm text-muted-foreground">
        <div className="flex items-center">
          <CalendarDays className="w-4 h-4 mr-2 text-primary/80 flex-shrink-0" />
          <span>{date}</span>
        </div>
        <div className="flex items-center">
          <Users className="w-4 h-4 mr-2 text-primary/80 flex-shrink-0" />
          <span>Forum: {forum}</span>
        </div>
        {source && source !== 'N/A' && (
          <div className="flex items-center">
            <BookOpen className="w-4 h-4 mr-2 text-primary/80 flex-shrink-0" />
            <span>Book or Source: {source}</span>
          </div>
        )}
      </div>
    </div>
  );
}

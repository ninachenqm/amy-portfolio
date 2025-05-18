// src/components/HostedEventCard.jsx
import React from 'react';
import { Users, Presentation, Link as LinkIcon, Star, CalendarDays } from 'lucide-react';

export default function HostedEventCard({ event }) {
  // Helper to format date to US English style (e.g., "May 3, 2025")
  // This function can be moved to a utils file if used elsewhere
  const formatDateToUS = (dateString) => {
    if (!dateString || dateString.toLowerCase() === 'n/a') {
      return 'Date N/A';
    }
    const [year, month, day] = dateString.split('-');
    const date = new Date(Number(year), Number(month) - 1, Number(day));
    const options = { year: 'numeric', month: 'long', day: 'numeric', timeZone: 'UTC' };
    return date.toLocaleDateString('en-US', options);
  };

  return (
    <div className="bg-card p-5 sm:p-6 rounded-xl shadow-lg border-2 border-primary/70 relative overflow-hidden h-full flex flex-col"> {/* Added h-full and flex flex-col for better height consistency if in a grid */}


      <div className="mt-2 flex-grow"> {/* Added flex-grow to allow content to expand */}
        {/* Main Title: Amy's Speech Topic */}
        {event.amySpeechTopic && (
          <h3 className="text-xl sm:text-2xl font-semibold text-primary mb-3 leading-tight">
            {event.amySpeechTopic}
          </h3>
        )}

        {/* Event Info: Date and Forum Name */}
        <div className="space-y-1.5 text-sm text-muted-foreground mb-4">
          <div className="flex items-center">
            <CalendarDays className="w-4 h-4 mr-2 text-primary/80 flex-shrink-0" />
            <span>{formatDateToUS(event.date)}</span>
          </div>
          {event.forum && (
            <div className="flex items-center">
              <Users className="w-4 h-4 mr-2 text-primary/80 flex-shrink-0" />
              <span>Forum: {event.forum}</span>
            </div>
          )}
          {event.learningSpeechUrl && (
            <div className="flex items-center">
               <LinkIcon className="w-4 h-4 mr-2 text-primary/80 flex-shrink-0" />
              <a
                href={event.learningSpeechUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline"
              >
                View Learning Material
              </a>
            </div>
          )}
        </div>

        {/* Other Participants */}
        {event.participants && event.participants.length > 0 && (
          <div className="mb-4">
            <h4 className="text-md font-semibold text-foreground mb-2 flex items-center">
              <Presentation className="w-5 h-5 mr-2 text-primary/90" />
              Other Speakers:
            </h4>
            <ul className="list-disc list-inside space-y-1 pl-2 text-sm text-muted-foreground">
              {event.participants.map((participant, index) => (
                <li key={index}>
                  <strong>{participant.name}:</strong> {participant.topic}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div> {/* End of flex-grow content area */}

      {/* Highlights (at the bottom) */}
      {event.highlights && (
        <div className="mt-auto pt-4 border-t border-border/50"> {/* mt-auto pushes to bottom if card has extra space */}
          <h4 className="text-md font-semibold text-foreground mb-1 flex items-center">
            <Star className="w-5 h-5 mr-2 text-yellow-500" />
            Event Highlights:
          </h4>
          <p className="text-sm text-muted-foreground italic">{event.highlights}</p>
        </div>
      )}
    </div>
  );
}

// src/components/DanceEventsGrid.jsx
import React from 'react';
import { motion } from 'framer-motion';


const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};


const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: 'spring',
      stiffness: 100,
    },
  },
};


function DanceEventCard({ event, onImageClick }) {
  return (

    <motion.div
      variants={itemVariants}
      className="group relative cursor-pointer"
      onClick={() => onImageClick(event.coverImageUrl)} 
    >
      <div className="aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-lg bg-muted xl:aspect-w-7 xl:aspect-h-8 shadow-lg">
        <img
          src={event.coverImageUrl}
          alt={event.title}
          className="h-full w-full object-cover object-center transition-transform duration-300 ease-in-out group-hover:scale-105"
          onError={(e) => { e.currentTarget.src = 'https://placehold.co/600x400/7f1d1d/fecaca?text=Image+not+found'; e.currentTarget.alt = 'Image not found'; }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent"></div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 p-4">
        <h3 className="mt-1 text-lg font-bold text-white">{event.title}</h3>
      </div>
    </motion.div>
  );
}

function DanceEventsGrid({ yearTitle, events, onImageClick }) {
  return (
    <div>
      <h2 className="text-3xl font-bold tracking-tight text-primary sm:text-4xl mb-6 md:mb-8 gradient-text">
        {yearTitle}
      </h2>
      <motion.div
        className="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        {events.map((event) => (
          <DanceEventCard key={event.id} event={event} onImageClick={onImageClick} />
        ))}
      </motion.div>
    </div>
  );
}

export default DanceEventsGrid;

// src/components/ExperienceCard.jsx
import React from "react";

/** One-side timeline card (left-side rail) */
const ExperienceCard = ({ exp, animationDelay = "0s" }) => (
    <div
        className="relative animate-in slide-in-from-bottom-8 fade-in duration-500"
        style={{ animationDelay }}
    >
        {/* Timeline dot aligned to left rail (rail is at left: 0.75rem from wrapper start) */}
        <div className="absolute -left-6 top-8 w-4 h-4 rounded-full bg-primary border-2 border-background shadow" />

        <div className="bg-card text-card-foreground rounded-lg shadow-lg border border-border overflow-hidden transition-all duration-300 hover:shadow-xl">
            <div className="p-6">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-3">
                    {/* Left: Title & Organization */}
                    <div className="mb-2 md:mb-0">
                        <h3 className="text-xl lg:text-2xl font-bold text-foreground leading-tight">
                            {exp.title}
                        </h3>
                        <p className="text-md text-muted-foreground mt-0.5">
                            {exp.organization}
                        </p>
                    </div>

                    {/* Right: Period & Location */}
                    <div className="mt-1 md:mt-0 flex flex-col items-start md:items-end md:text-right">
                        <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold bg-secondary text-secondary-foreground mb-1 whitespace-nowrap">
                            {exp.period}
                        </span>
                        {exp.location && (
                            <span className="text-sm text-muted-foreground">{exp.location}</span>
                        )}
                    </div>
                </div>

                {/* Description Points */}
                <ul className="mt-4 space-y-2">
                    {exp.descriptionPoints?.map((point, i) => (
                        <li key={i} className="flex items-start text-sm text-muted-foreground">
                            <span className="mr-2 mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary" />
                            <span>{point}</span>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    </div>
);

export default ExperienceCard;
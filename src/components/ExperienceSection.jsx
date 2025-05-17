// src/components/ExperienceSection.jsx
import React from 'react';


const experiencesData = [
    {
        id: 'exp1',
        title: 'role/postion1',
        organization: 'organization/company/event 1',
        period: 'when',
        location: 'where',
        descriptionPoints: [
            'bullet points',
        ],
    },
    {
        id: 'exp2',
        title: 'role/postion2',
        organization: 'organization/company/event 2',
        period: 'when',
        location: 'where',
        descriptionPoints: [
            'bullet points',
        ],
    },

];

function ExperienceSection() {
    return (
        <section id="experiences" className="py-16 md:py-20 bg-muted/30"> {/* Using bg-muted/30 like the About section */}
            <div className="container mx-auto px-4 md:px-6">
                <div className="text-center mb-12 md:mb-16">
                    <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl " style={{ animationDelay: '0.1s' }}>
                        Experiences
                    </h2>

                </div>

                {/* Timeline container */}
                <div className="relative max-w-3xl mx-auto space-y-10 md:space-y-12"> {/* Added relative for potential absolute positioning of a global timeline line if desired later */}
                    {experiencesData.length > 0 ? (
                        experiencesData.map((exp, index) => (
                            <div
                                key={exp.id}
                                className="timeline-item "
                                style={{ animationDelay: `${(index * 0.1) + 0.3}s` }}
                            >
                                {/* Card styling directly on a div */}
                                <div className="bg-card text-card-foreground rounded-lg shadow-lg border border-border overflow-hidden transition-all duration-300 hover:shadow-xl border-l-4 border-l-primary">
                                    <div className="p-6"> {/* CardContent equivalent padding */}
                                        <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-3">
                                            {/* Left side: Title and Organization */}
                                            <div className="mb-2 md:mb-0">
                                                <h3 className="text-xl lg:text-2xl font-bold text-foreground">{exp.title}</h3>
                                                <p className="text-md text-muted-foreground">{exp.organization}</p>
                                            </div>
                                            {/* Right side: Period and Location */}
                                            <div className="mt-1 md:mt-0 flex flex-col items-start md:items-end md:text-right">
                                                <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold bg-secondary text-secondary-foreground mb-1 whitespace-nowrap"> {/* Badge-like styling */}
                                                    {exp.period}
                                                </span>
                                                {exp.location && (
                                                    <span className="text-sm text-muted-foreground">{exp.location}</span>
                                                )}
                                            </div>
                                        </div>

                                        {/* Achievements / Description Points */}
                                        <ul className="mt-4 space-y-2">
                                            {exp.descriptionPoints.map((point, i) => (
                                                <li key={i} className="flex items-start text-sm text-muted-foreground">
                                                    <span className="mr-2 mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary"></span> {/* Bullet point */}
                                                    <span>{point}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        ))
                    ) : (
                        <p className="text-center text-muted-foreground">Getting my experiences...</p>
                    )}
                </div>

            </div>
        </section>
    );
}

export default ExperienceSection;

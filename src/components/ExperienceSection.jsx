// src/components/ExperienceSection.jsx
import React from 'react';

// Data for the main experiences section
const experiencesData = [
    {
        id: 'exp-ca-mentor',
        title: 'Peer Mentor',
        organization: 'College Academy',
        period: '12th Grade',
        location: null,
        descriptionPoints: [
            'Guided incoming students, providing support and resources to ease their transition into the academy.',
        ],
    },
    {
        id: 'exp-ai-medicine',
        title: 'AI in Medicine Research',
        organization: 'Independent Project',
        period: '11th - 12th Grade',
        location: 'Remote',
        descriptionPoints: [
            'Conducted independent research and authored comprehensive reports on the applications of AI in medicine.',
            'Presented findings to Nova Southeastern University (NSU) staff, the College Academy principal, and counselors.',
            'Connected with the "Hello Robot" company to gain industry insights and explore real-world applications.',
        ],
    },
    {
        id: 'exp-pediatrician',
        title: 'Pediatrician Shadowing',
        organization: 'Memorial Hospital',
        period: '10th - 12th Grade',
        location: 'Florida',
        descriptionPoints: [
            'Observed the complete patient care process, from diagnosis to the creation of treatment plans.',
            'Learned effective techniques for communicating complex medical information to patients in simple, understandable terms.',
            'Expanded medical knowledge through direct clinical exposure.',
        ],
    },
    {
        id: 'exp-tiktok',
        title: 'First-Aid Education Content Creator',
        organization: 'TikTok Passion Project (@Yolkifirstaid)',
        period: '9th - 12th Grade',
        location: 'Online',
        descriptionPoints: [
            'Created and managed a TikTok channel to educate the public on first-aid procedures using original illustrations.',
            'Produced over 10 videos, growing the account to 350+ followers, 13,000+ likes, and 215,000+ total views.',
            'Merged a passion for medicine with a hobby in digital art to create engaging educational content.',
        ],
    },
    {
        id: 'exp-baton',
        title: 'Competitive Baton Twirler',
        organization: 'Community Competition Team',
        period: '4th - 12th Grade',
        location: 'Florida',
        descriptionPoints: [
            'Achieved 1 National Championship, 7 State Championships, and over 25 local competition titles.',
            'Won both Solo and Duo State Championships, showcasing individual and collaborative excellence.',
            'Demonstrated extreme dedication by practicing for 585 consecutive days to earn a spot on the competition team.',
        ],
    },
    {
        id: 'exp-tedx',
        title: 'TEDx Community Organizer & Speaker',
        organization: 'Local TEDx Initiative',
        period: '2nd - 12th Grade',
        location: 'Community-based',
        descriptionPoints: [
            'Co-hosted local TEDx events, inviting speakers from top-20 universities to share their ideas.',
            'Delivered over 200 public speeches and actively participated in TEDx Youth events.',
            'Contributed to a community program that has positively impacted over 100 families and 200 individuals.',
        ],
    },
    {
        id: 'exp-art',
        title: 'Artist',
        organization: 'Formal Art Training',
        period: '1st - 12th Grade',
        location: null,
        descriptionPoints: [
            'Committed to weekly art classes for over a decade, producing hundreds of pieces of artwork.',
            'Received two local awards in recognition of artistic skill and creativity.',
        ],
    },
];

// Data for the volunteering and work experience section
const volunteeringData = [
    {
        id: 'work-private-tutor',
        title: 'Tutor',
        organization: 'Private Company',
        period: '12th Grade',
        location: null,
        descriptionPoints: [
            'Recruited for a tutoring role based on academic performance and teaching abilities (starting soon).',
        ],
    },
    {
        id: 'work-barista',
        title: 'Barista',
        organization: 'Tealicious',
        period: '11th Grade',
        location: null,
        descriptionPoints: [
            'Delivered high-quality customer service in a fast-paced environment.',
            'Mastered the ability to remain calm and efficient during peak business hours.',
        ],
    },
    {
        id: 'work-schoolhouse',
        title: 'SAT Tutor',
        organization: 'Schoolhouse.world',
        period: 'Summer after 11th Grade',
        location: 'Online',
        descriptionPoints: [
            'Led an SAT prep bootcamp, teaching 9 comprehensive lessons to students.',
            'Designed and implemented personalized lesson plans to adapt to each student’s unique learning style.',
            'Effectively coached students, resulting in significant score increases by the end of the bootcamp.',
        ],
    },
    {
        id: 'work-mathnasium',
        title: 'Math Instructor',
        organization: 'Mathnasium',
        period: '10th - 11th Grade',
        location: null,
        descriptionPoints: [
            'Tutored up to 6 students simultaneously in various math subjects.',
            'Cultivated patience and empathy to effectively guide students through challenging concepts.',
        ],
    },
    {
        id: 'work-motorola',
        title: 'Engineering Intern',
        organization: 'Motorola Solutions Inc.',
        period: '9th - 11th Grade',
        location: null,
        descriptionPoints: [
            'Led a team of 20 students to design and develop a novel engineering project from concept to completion.',
            'Pitched the final project to a "Shark Tank"-style panel of executives and won first place.',
            'Gained hands-on experience with soldering, programming, and circuit board design.',
            'Developed leadership, collaboration, and public speaking skills in a professional corporate setting.',
        ],
    },
    {
        id: 'work-nsu-intern',
        title: 'Medical Intern',
        organization: 'NSU AIM High Program',
        period: '10th Grade',
        location: null,
        descriptionPoints: [
            'Acquired hands-on experience with suturing, CPR, patient check-ups, and other foundational clinical skills.',
            'Learned essential medical terminology, safety protocols, and the importance of teamwork in a clinical environment.',
        ],
    },
    {
        id: 'work-cashier',
        title: 'Cashier',
        organization: 'Enson Market',
        period: '10th Grade',
        location: null,
        descriptionPoints: [
            'Enhanced customer service and communication skills in a retail setting.',
            'Managed financial transactions with accuracy and accountability.',
        ],
    },
];

// A reusable card component for displaying an experience
const ExperienceCard = ({ exp, animationDelay }) => (
    <div
        className="timeline-item"
        style={{ animationDelay }}
    >
        <div className="bg-card text-card-foreground rounded-lg shadow-lg border border-border overflow-hidden transition-all duration-300 hover:shadow-xl border-l-4 border-l-primary">
            <div className="p-6">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-3">
                    {/* Left side: Title and Organization */}
                    <div className="mb-2 md:mb-0">
                        <h3 className="text-xl lg:text-2xl font-bold text-foreground">{exp.title}</h3>
                        <p className="text-md text-muted-foreground">{exp.organization}</p>
                    </div>
                    {/* Right side: Period and Location */}
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
                    {exp.descriptionPoints.map((point, i) => (
                        <li key={i} className="flex items-start text-sm text-muted-foreground">
                            <span className="mr-2 mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary"></span>
                            <span>{point}</span>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    </div>
);


function ExperienceSection() {
    return (
        <section id="experiences" className="py-16 md:py-20 bg-muted/30">
            <div className="container mx-auto px-4 md:px-6">
                {/* Main Title */}
                <div className="text-center mb-12 md:mb-16">
                    <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl" style={{ animationDelay: '0.1s' }}>
                        Experiences
                    </h2>
                </div>

                {/* Experiences Timeline */}
                <div className="relative max-w-3xl mx-auto space-y-10 md:space-y-12">
                    {experiencesData.length > 0 ? (
                        experiencesData.map((exp, index) => (
                            <ExperienceCard
                                key={exp.id}
                                exp={exp}
                                animationDelay={`${(index * 0.1) + 0.3}s`}
                            />
                        ))
                    ) : (
                        <p className="text-center text-muted-foreground">Loading experiences...</p>
                    )}
                </div>

                {/* Volunteering / Work Subtitle */}
                <div className="text-center mt-20 mb-12 md:mb-16">
                    <h3 className="text-3xl font-bold tracking-tighter sm:text-4xl" style={{ animationDelay: '0.2s' }}>
                        Volunteering / Work
                    </h3>
                </div>

                {/* Volunteering & Work Timeline */}
                <div className="relative max-w-3xl mx-auto space-y-10 md:space-y-12">
                    {volunteeringData.length > 0 ? (
                        volunteeringData.map((exp, index) => (
                            <ExperienceCard
                                key={exp.id}
                                exp={exp}
                                // Continue animation delay from the previous list
                                animationDelay={`${((experiencesData.length + index) * 0.1) + 0.3}s`}
                            />
                        ))
                    ) : (
                        <p className="text-center text-muted-foreground">Loading work history...</p>
                    )}
                </div>

            </div>
        </section>
    );
}

export default ExperienceSection;

// src/components/ExperienceSection.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { Briefcase, HeartHandshake, ArrowRight } from 'lucide-react';

function ExperienceSection() {
    return (
        <section id="experiences" className="py-16 md:py-24 bg-muted/30">
            <div className="container mx-auto px-4 md:px-6">
                {/* Updated title section to match "A Glimpse into My Passions" */}
                <div className="max-w-2xl mx-auto text-center mb-12 md:mb-20">
                    <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-foreground">
                        My Journey
                    </h2>
                    <p className="mt-4 text-lg text-muted-foreground">
                        Dive deeper into my professional background and personal growth experiences.
                    </p>
                </div>

                {/* Replaced old buttons with new content sections */}
                <div className="grid gap-16">
                    {/* Experiences Section */}
                    <div className="max-w-3xl mx-auto text-center">
                        <h3 className="text-3xl font-bold mb-4 text-foreground flex items-center justify-center gap-2">
                            <HeartHandshake className="inline-block h-5 w-5" />
                            Experiences
                        </h3>
                        <p className="text-muted-foreground mb-6">
                            A journey of growth through mentorship, research, and passion projects.
                        </p>
                        <Link
                            to="/experiences"
                            className="inline-flex items-center justify-center rounded-md bg-primary px-6 py-3 text-sm font-medium text-primary-foreground shadow-sm transition-colors hover:bg-primary/90"
                        >
                            Explore Experiences <ArrowRight className="ml-2 h-4 w-4" />
                        </Link>
                    </div>

                    {/* Work & Volunteering Section */}
                    <div className="max-w-3xl mx-auto text-center">
                        <h3 className="text-3xl font-bold mb-4 text-foreground flex items-center justify-center gap-2">
                            <Briefcase className="inline-block h-5 w-5" />
                            Work & Volunteering
                        </h3>
                        <p className="text-muted-foreground mb-6">
                            Applying skills and gaining new perspectives through professional and volunteer roles.
                        </p>
                        <Link
                            to="/work-experience"
                            className="inline-flex items-center justify-center rounded-md bg-secondary px-6 py-3 text-sm font-medium text-secondary-foreground shadow-sm transition-colors hover:bg-secondary/90"
                        >
                           View Work & Volunteering <ArrowRight className="ml-2 h-4 w-4" />
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default ExperienceSection;
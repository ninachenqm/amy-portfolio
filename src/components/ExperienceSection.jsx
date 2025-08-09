// src/components/ExperienceSection.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { Briefcase, HeartHandshake } from 'lucide-react';

function ExperienceSection() {
    return (
        <section id="experiences" className="py-16 md:py-24 bg-muted/30">
            <div className="container mx-auto px-4 md:px-6">
                <div className="text-center mb-10 md:mb-12">
                    <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                        My Journey
                    </h2>
                    <p className="mt-4 text-lg text-muted-foreground max-w-xl mx-auto">
                        Dive deeper into my professional background and personal growth experiences.
                    </p>
                </div>

                <div className="flex flex-col sm:flex-row justify-center items-center gap-6">
                    <Link
                        to="/experiences"
                        className="inline-flex items-center justify-center w-full sm:w-auto rounded-md bg-primary px-8 py-3 text-base font-medium text-primary-foreground shadow-sm transition-transform hover:scale-105"
                    >
                        <HeartHandshake className="mr-2 h-5 w-5" />
                        Explore Experiences
                    </Link>
                    <Link
                        to="/work-experience"
                        className="inline-flex items-center justify-center w-full sm:w-auto rounded-md bg-secondary px-8 py-3 text-base font-medium text-secondary-foreground shadow-sm transition-transform hover:scale-105"
                    >
                        <Briefcase className="mr-2 h-5 w-5" />
                        View Work & Volunteering
                    </Link>
                </div>
            </div>
        </section>
    );
}

export default ExperienceSection;

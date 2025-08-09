// src/pages/WorkExperiencePage.jsx
import React from "react";
import { volunteeringData } from "../data/experienceData";
import ExperienceCard from "../components/ExperienceCard";

/**
 * Work & Volunteering page using the same one-side timeline layout
 */
function WorkExperiencePage() {
    return (
        <section className="container mx-auto px-4 py-16 md:py-24">
            <div className="text-center mb-12 md:mb-16">
                <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-primary gradient-text animate-in">
                    Volunteering & Work
                </h1>
                <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto animate-in" style={{ animationDelay: "0.1s" }}>
                    Applying skills and gaining new perspectives through professional and volunteer roles.
                </p>
            </div>

            {/* Timeline wrapper: left rail + cards on one side */}
            <div className="relative max-w-3xl mx-auto pl-6 space-y-10 md:space-y-12">
                {/* Vertical timeline rail */}
                <div className="pointer-events-none absolute top-0 left-3 w-0.5 bg-border h-full" />

                {volunteeringData.map((exp, index) => (
                    <ExperienceCard
                        key={exp.id ?? index}
                        exp={exp}
                        animationDelay={`${index * 0.1 + 0.2}s`}
                    />
                ))}
            </div>
        </section>
    );
}

export default WorkExperiencePage;


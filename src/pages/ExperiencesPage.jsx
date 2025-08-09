// src/pages/ExperiencesPage.jsx
import React from "react";
import { experiencesData } from "../data/experienceData";
import ExperienceCard from "../components/ExperienceCard";

/** One-side vertical timeline page */
function ExperiencesPage() {
    return (
        <section className="container mx-auto px-4 py-16 md:py-24">
            {/* Header */}
            <div className="text-center mb-12 md:mb-16">
                <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-primary gradient-text animate-in">
                    Experiences
                </h1>
                <p
                    className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto animate-in"
                    style={{ animationDelay: "0.1s" }}
                >
                    A journey of growth through mentorship, research, and passion projects.
                </p>
            </div>

            {/* Timeline wrapper */}
            <div className="relative max-w-3xl mx-auto pl-6 space-y-10 md:space-y-12">
                {/* Vertical timeline rail */}
                <div className="pointer-events-none absolute top-0 left-3 w-0.5 bg-border h-full" />

                {experiencesData.map((exp, index) => (
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

export default ExperiencesPage;

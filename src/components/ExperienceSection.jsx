// src/components/ExperienceSection.jsx
import React from 'react';


const experiencesData = [
  {
    id: 'exp1',
    title: 'role/postion1', 
    organization: 'organization/company/event 1', 
    period: 'time',
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
    // id="experiences" 
    <section id="experiences" className="py-16 md:py-20 bg-background"> 
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Experience
          </h2>
          <p className="mt-3 text-lg text-muted-foreground max-w-2xl mx-auto">
            My professional journey and key accomplishments
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-8">
          {experiencesData.length > 0 ? (
            experiencesData.map((exp) => (

              <div key={exp.id} className="p-6 border border-border rounded-lg shadow-lg bg-card text-card-foreground">
                <div className="flex flex-col sm:flex-row justify-between sm:items-center mb-2">
                  <h3 className="text-xl font-semibold text-primary">{exp.title}</h3>
                  <p className="text-sm text-muted-foreground mt-1 sm:mt-0">{exp.period}</p>
                </div>
                <p className="text-md font-medium text-foreground mb-1">{exp.organization}</p>
                {exp.location && <p className="text-sm text-muted-foreground mb-3">{exp.location}</p>}
                <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                  {exp.descriptionPoints.map((point, index) => (
                    <li key={index}>{point}</li>
                  ))}
                </ul>
              </div>
            ))
          ) : (
            <p className="text-center text-muted-foreground">经历信息正在整理中...</p>
          )}
        </div>
      </div>
    </section>
  );
}

export default ExperienceSection;

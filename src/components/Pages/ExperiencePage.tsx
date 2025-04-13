'use client';

import Section from '@/components/common/Section';
import ExperienceItem from '@/components/Experience/ExperienceItem';
import type { Experience } from '@/types';

interface ExperiencePageProps {
  experienceData: Experience[];
}

export default function ExperiencePage({ experienceData }: ExperiencePageProps) {
  return (
    <Section
      title="Work Experience"
      subtitle="My professional journey and career highlights"
    >
      {experienceData.map((exp, index) => (
        <ExperienceItem key={exp.id} experience={exp} index={index} />
      ))}
    </Section>
  );
} 
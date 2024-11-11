import React, { ReactNode } from 'react';

interface SectionProps {
  id: string;
  icon: ReactNode;
  title: string;
  children: ReactNode;
}

const Section: React.FC<SectionProps> = ({ id, icon, title, children }) => {
  return (
    <section id={id} className="py-16">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-center gap-2 mb-12">
          <span className="text-blue-400">{icon}</span>
          <h2 className="text-3xl font-bold text-center">{title}</h2>
        </div>
        {children}
      </div>
    </section>
  );
};

export default Section;
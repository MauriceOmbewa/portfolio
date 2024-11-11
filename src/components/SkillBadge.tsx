import React from 'react';

interface SkillBadgeProps {
  title: string;
  level: number;
}

const SkillBadge: React.FC<SkillBadgeProps> = ({ title, level }) => {
  return (
    <div className="bg-gray-800 p-4 rounded-lg">
      <div className="flex justify-between items-center mb-2">
        <span className="font-medium">{title}</span>
        <span className="text-sm text-blue-400">{level}%</span>
      </div>
      <div className="h-2 bg-gray-700 rounded-full overflow-hidden">
        <div
          className="h-full bg-gradient-to-r from-blue-500 to-blue-400 transition-all duration-500"
          style={{ width: `${level}%` }}
        />
      </div>
    </div>
  );
};

export default SkillBadge;
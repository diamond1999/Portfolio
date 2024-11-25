import React from 'react';
import Header from "../components/Header";
import { DoubleRightOutlined } from "@ant-design/icons";

interface SkillsProps {}

const Skills: React.FC<SkillsProps> = () => {
  // Helper function to render a skills section
  const renderSkillSection = (title: string, skills: string[]): JSX.Element => (
    <div className="mt-8">
      <div className="mx-4 sm:mx-8 md:mx-16 lg:mx-28">
        <p className="text-xl flex items-center gap-2 text-green-400">
          <DoubleRightOutlined className="text-green-400" />
          {title}
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mx-4 sm:mx-8 md:mx-16 lg:mx-28 mt-4 rounded-lg bg-gray-800 p-6">
        {skills.map((skill, index) => (
          <div key={index} className="flex justify-center items-center rounded-full bg-gray-700">
            <p className="text-xl font-medium capitalize">{skill}</p>
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <div className="text-white">
      <Header />

      <div className="mt-4">
        {/* Languages Section */}
        {renderSkillSection("Languages", ["HTML", "JavaScript", "TypeScript", "Node.js"])}

        {/* Styling Section */}
        {renderSkillSection("Styling", ["CSS", "Sass", "Tailwind CSS", "AntD"])}

        {/* Frameworks Section */}
        {renderSkillSection("Frameworks", ["React.js"])}

        {/* Design Section */}
        {renderSkillSection("Design", ["Figma", "Adobe XD"])}
      </div>
    </div>
  );
};

export default Skills;

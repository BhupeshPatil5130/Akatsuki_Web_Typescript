import React from 'react';
import teamMembers from '../Data/teamMembers';

// Define the TeamMember interface
interface TeamMember {
  name: string;
  role: string;
  image: string;
  linkedin?: string;
  github?: string;
}

const TeamSection: React.FC = () => {
  return (
    <div className="w-full py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="max-w-7xl mx-auto text-xl md:text-5xl font-bold text-black font-sans">
            Meet our <span className="text-red-500">Core Team</span>
          </h2>
          <p className="text-lg text-gray-600 mt-4">
            "The core team behind Akatsuki"
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {teamMembers.map((member: TeamMember, index: number) => (
            <div
              key={index}
              className="bg-white p-8 rounded-lg shadow-md hover:bg-gray-100 transition duration-300"
            >
              <div className="flex flex-col items-center">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-48 h-48 rounded-full object-cover mb-6"
                />
                <h3 className="text-2xl font-semibold text-gray-800 mb-2">{member.name}</h3>
                <h4 className="text-lg text-gray-600 mb-4">{member.role}</h4>
                <div className="flex space-x-6 mt-4">
                  {member.linkedin && (
                    <a
                      href={member.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-500 hover:text-gray-700"
                      aria-label={`${member.name} LinkedIn`}
                    >
                      <i className="fab fa-linkedin fa-2x"></i>
                    </a>
                  )}
                  {member.github && (
                    <a
                      href={member.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-500 hover:text-gray-700"
                      aria-label={`${member.name} GitHub`}
                    >
                      <i className="fab fa-github fa-2x"></i>
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TeamSection;

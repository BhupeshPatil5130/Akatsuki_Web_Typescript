import React from 'react';
import leaders from '../Data/leaders';

// Define the Leader type
interface Leader {
  name: string;
  role: string;
  image: string;
  linkedin?: string;
  github?: string;
}

const LeadershipSection: React.FC = () => {
  return (
    <div className="w-full py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="max-w-7xl mx-auto text-3xl md:text-5xl font-bold text-black font-sans">
            Meet the  
            <span className="text-red-500">{" "}President{" "}</span> 
            and 
            <span className="text-red-500">{" "}Vice President</span>
          </h2>
          <p className="text-lg text-gray-600 mt-4">Leadership unveiled</p>
        </div>
        <div className="flex flex-wrap justify-center gap-6">
          {leaders.map((leader: Leader, index: number) => (
            <div
              key={index}
              className="w-full max-w-md p-8 rounded-lg shadow-md hover:shadow-lg hover:bg-gray-300 transition duration-300 transform hover:scale-105 flex flex-col items-center text-center"
            >
              <div className="w-full mb-6 flex justify-center">
                <img
                  src={leader.image}
                  alt={`${leader.name} profile`}
                  className="w-48 h-48 object-cover rounded-full"
                />
              </div>
              <div className="text-center">
                <h3 className="text-2xl font-semibold text-gray-800 mb-2">{leader.name}</h3>
                <h4 className="text-xl text-gray-600 mb-4">{leader.role}</h4>
                <div className="flex space-x-6 justify-center">
                  {leader.linkedin && (
                    <a
                      href={leader.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-500 hover:text-gray-700"
                      aria-label={`${leader.name} LinkedIn`}
                    >
                      <i className="fab fa-linkedin fa-3x"></i>
                    </a>
                  )}
                  {leader.github && (
                    <a
                      href={leader.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-500 hover:text-gray-700"
                      aria-label={`${leader.name} GitHub`}
                    >
                      <i className="fab fa-github fa-3x"></i>
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

export default LeadershipSection;

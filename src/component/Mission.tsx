import React from 'react';
import missionData from '../Data/missionData';

// Define the MissionItem type
interface MissionItem {
  title: string;
  description: string;
  iconClass: string;
}

const Mission: React.FC = () => {
  return (
    <section id="services" className="py-12 bg-gray-100">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="max-w-7xl mx-auto text-4xl md:text-5xl font-bold text-black font-sans">
            Vision & <span className="text-red-500">Mission</span>
          </h2>
          <p className="text-lg text-gray-600 mt-4">"Of the Students For the Student and By the Students"</p>
        </div>

        <div className="flex flex-wrap -mx-4">
          {missionData.map((item: MissionItem, index: number) => (
            <div
              key={index}
              className="w-full md:w-1/2 lg:w-1/4 px-4 mb-8 flex items-stretch"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <div className="relative bg-white p-8 rounded-lg shadow-lg flex flex-col justify-between min-h-[300px] overflow-hidden group">
                {/* Animated background */}
                <div className="absolute inset-0 bg-black transition-transform duration-500 transform translate-y-full group-hover:translate-y-0"></div>
                
                {/* Card content */}
                <div className="relative z-10 flex flex-col items-center justify-center h-full">
                  <div className="text-white text-5xl mb-4">
                    <i className={` ${item.iconClass}`}></i>
                  </div>
                  <h4 className="text-3xl font-bold mb-3 text-center text-black group-hover:text-white">
                    <a href="#" className="hover:text-white">{item.title}</a>
                  </h4>
                  <p className="text-gray-600 text-lg text-center group-hover:text-white">
                    {item.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Mission;

import React from 'react';

const About: React.FC = () => {
  return (
    <section
      id="about"
      className="relative py-20 bg-cover bg-center text-gray-800"
      data-aos="fade-up"
      data-aos-duration="1000"
    >
      <div className="absolute inset-0 bg-gray-100 bg-opacity-20 z-10"></div>
      <div className="relative z-20 container mx-auto px-4 py-20">
        <div className="text-center">
          <h2 className="max-w-7xl mx-auto text-4xl md:text-5xl font-bold text-black font-sans">
            About <span className="text-red-500">Us</span>
          </h2>
        </div>
        <div className="flex items-center gap-4 justify-center py-10">
          <a href="/">
            <img
              src="../images/rcpitlogo2.jpg"
              alt="About Us Logo"
              className="max-w-lg max-h-60 h-24 md:h-32"
            />
          </a>
          <a href="/">
            <img
              src="/logo2.jpg"
              alt="About Us Logo"
              className="max-w-lg max-h-60 h-32 md:h-40"
            />
          </a>
        </div>
        <div className="text-center max-w-8xl mx-auto">
          <p className="text-[22px] text-wrap text-gray-600 font-normal px-6">
            <span className="font-medium">
              Akatsuki Coding Club
            </span>{" "}
            was founded in 2021 by a group of passionate 
            {" "}<span className="italic">Computer Engineering</span>{" "} students, driven by the vision to create a
            vibrant and collaborative environment for coding
            enthusiasts. With support from faculty and juniors, the
            club helps students enhance their technical skills
            through workshops, coding challenges, and mentorship.
            Akatsuki serves as a hub for learning, innovation, and
            connecting with seniors and alumni, empowering members
            to grow and excel in the tech world.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;

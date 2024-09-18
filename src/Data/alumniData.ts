// Define the AlumniMember interface
interface AlumniMember {
    name: string;
    role: string;
    company: string[];
    image: string;
  }
  
  // Create the alumni2023 array with typed data
  export const alumni2023: AlumniMember[] = [
    {
      name: 'Shivang Vora',
      role: 'Founder',
      company: ['General Aeronautics', 'Capgemini - 7.5 LPA', 'Hexaware - 4 LPA'],
      image: '../images/Alumni/shivang.jpg',
    },
    {
      name: 'Shubham Vora',
      role: 'Co-Founder',
      company: ['Infosys - 9.5 LPA', 'BetterCommerce - 9 LPA', 'Capgemini - 7.5 LPA', 'Hexaware - 6.5 LPA'],
      image: '../images/Alumni/shubham.jpg',
    },
    {
      name: 'Mangesh Sonawane',
      role: 'Core Team Member',
      company: ['TCS - 7 LPA', 'Reliance Jio - 6 LPA', 'Cybage Software - 4.5 LPA'],
      image: '../images/Alumni/mangesh.jpg',
    },
    {
      name: 'Tarun Kukreja',
      role: 'Core Team Member',
      company: ['Cybage Software - 4 LPA', 'TCS - 3.6 LPA'],
      image: '../images/Alumni/tarun.jpg',
    },
    {
      name: 'Shreya Shinde',
      role: 'Core Team Member',
      company: ['TCS (Ninja) - 3.36 LPA', 'Capgemini - 4.25 LPA', 'Cybage Software - 4.5 LPA'],
      image: '../images/Alumni/shreya.jpg',
    },
    {
      name: 'Rohan Badgujar',
      role: 'Core Team Member',
      company: ['Reliance Jio - 7 LPA'],
      image: '../images/Alumni/rohan.jpg',
    },
    {
      name: 'Ritisha Tare',
      role: 'Core Team Member',
      company: ['Infosys - 3.6 LPA', 'TCS - 3.36 LPA'],
      image: '../images/Alumni/ritisha.jpg',
    },
    {
      name: 'Hardik Poriya',
      role: 'Core Team Member',
      company: ['Digitalatto - 6LPA', 'Clone Futura - 4.5LPA'],
      image: '../images/Alumni/hardik.jpg',
    },
    {
      name: 'Rishika Sharma',
      role: 'Core Team Member',
      company: ['TCS - 7 LPA', 'Hexaware - 4 LPA'],
      image: '../images/Alumni/rishika.jpg',
    },
  ];
  
  // Uncomment and use for alumni2024 if needed in the future
  // export const alumni2024: AlumniMember[] = [ ... ];
  
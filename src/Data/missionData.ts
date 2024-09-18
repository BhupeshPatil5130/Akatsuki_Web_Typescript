// Define the Mission interface
interface Mission {
    iconClass: string;
    title: string;
    description: string;
  }
  
  // Create the mission data array with typed data
  const missionData: Mission[] = [
    {
      iconClass: 'bx bx-coding', // Replace with actual icon class
      title: '1.',
      description: 'Our mission is to establish a coding culture in our students and inculcate the coding habits necessary to crack product-based companies.',
    },
    {
      iconClass: 'bx bx-lightbulb', // Replace with actual icon class
      title: '2.',
      description: 'To spark a flame of innovation and positive change in the students, giving them all the necessary tools to transform their lives and achieve a bright future.',
    },
    {
      iconClass: 'bx bx-brain', // Replace with actual icon class
      title: '3.',
      description: 'To cultivate curiosity, encourage experimentation, and prepare students for success in an interconnected world through a transdisciplinary, non-hierarchical learning environment.',
    },
    {
      iconClass: 'bx bx-heart', // Replace with actual icon class
      title: '4.',
      description: 'To inspire confidence and curiosity by eliminating coding phobia from students, fostering a passion for coding and problem-solving.',
    }
  ];
  
  export default missionData;
  
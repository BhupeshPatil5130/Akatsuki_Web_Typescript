// Define the Leader interface
interface Leader {
    name: string;
    role: string;
    image: string;
    linkedin: string;
    github: string;
  }
  
  // Create the leaders array with typed data
  const leaders: Leader[] = [
    {
      name: 'Pruthviraj Chaudhari',
      role: 'President',
      image: '../images/members/pruthviraj.png',
      linkedin: 'https://www.linkedin.com/in/mangesh-bide/',
      github: 'https://github.com/1Mangesh1'
    },
    {
      name: 'Sanika Joshi',
      role: 'Vice President',
      image: '../images/members/sanika.jpg',
      linkedin: 'https://www.linkedin.com/in/sakshi-kukreja-b67952217/',
      github: ''
    }
  ];
  
  export default leaders;
  
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Header: React.FC = () => {
  const [scrolled, setScrolled] = useState<boolean>(false);

  const handleScroll = () => {
    if (window.scrollY > 50) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-in-out ${scrolled ? 'bg-black/70' : 'bg-transparent'} h-[80px]`}>
      <div className="container mx-auto flex items-center justify-between h-full px-6 py-[10px] md:py-[20px]">
        <div className="logo flex items-center space-x-4">
          <Link to="/" className="flex items-center">
            <img 
              src="../images/akatsukilogo.png" 
              alt="Akatsuki Logo"
              className="mr-2"
              style={{ maxHeight: '40px' }} 
            />
            <span className="text-white text-3xl font-bold">AKATSUKI</span> 
          </Link>
        </div>
        <nav className="hidden md:flex">
          <ul className="flex space-x-8">
            <li>
              <a className="text-white text-lg font-semibold hover:text-red-500 transition-all duration-300" href="#hero">Home</a>
            </li>
            <li>
              <a className="text-white text-lg font-semibold hover:text-red-500 transition-all duration-300" href="#about">About Us</a>
            </li>
            <li>
              <a className="text-white text-lg font-semibold hover:text-red-500 transition-all duration-300" href="#services">Mission & Vision</a>
            </li>
            <li className="relative">
              <a className="text-white text-lg font-semibold hover:text-red-500 transition-all duration-300" href="#">
                Events <i className="bi bi-chevron-down"></i>
              </a>
              <ul className="absolute left-0 mt-2 w-48 bg-white shadow-lg opacity-0 invisible transition-opacity duration-300 ease-in-out group-hover:opacity-100 group-hover:visible">
                <li><a className="block px-4 py-2 text-gray-800 hover:bg-red-100" href="hackyholi.html">Hacky Holi</a></li>
                <li><a className="block px-4 py-2 text-gray-800 hover:bg-red-100" href="#">Deep Drop Down 1</a></li>
              </ul>
            </li>
            <li>
              <a className="text-white text-lg font-semibold hover:text-red-500 transition-all duration-300" href="#portfolio">Gallery</a>
            </li>
            <li>
              <a className="text-white text-lg font-semibold hover:text-red-500 transition-all duration-300" href="#contact">Contact Us</a>
            </li>
          </ul>
        </nav>
        <button className="text-white text-lg font-semibold md:hidden mobile-nav-toggle">
          <i className="bi bi-list"></i>
        </button>
      </div>
    </header>
  );
};

export default Header;

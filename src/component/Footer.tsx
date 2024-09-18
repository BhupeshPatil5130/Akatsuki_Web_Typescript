
import React from "react";

const Footer: React.FC = () => {
  return (
    <footer id="footer" className="bg-black bg-opacity-70 text-white py-16">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-center">

          <div className="w-full lg:w-1/3 mb-8 lg:mb-0 flex justify-center">
            <div className="bg-white text-gray-800 p-8 rounded-lg shadow-md relative">
              <div className="absolute top-0 left-0 w-full h-2 bg-red-600 rounded-t-lg"></div>
              <div className="pt-10">
                <h3 className="text-4xl font-bold mb-8 text-center text-black">Akatsuki</h3>
                <p className="mb-8 text-lg italic text-center text-black">
                  Shirpur Education Society's R. C. Patel Institute of Technology, Shirpur
                </p>
                <p className="text-lg text-center text-black">
                  Near Nimzari Naka, Shahada Road, Shirpur Dist. Dhule (M.S.) Maharashtra, <br />
                  India - 425405<br /><br />
                  <strong>Phone:</strong> +91 8080511069<br />
                  <strong>Email:</strong> akatsuki@rcpit.ac.in<br />
                </p>
                <div className="flex justify-center space-x-4 mt-8">
                  <a href="#" className="bg-blue-700 text-white p-3 rounded-full hover:bg-blue-600">
                    <i className="bx bxl-twitter text-2xl"></i>
                  </a>
                  <a href="https://www.instagram.com/akatsuki_codingclub/" className="bg-pink-500 text-white p-3 rounded-full hover:bg-pink-400">
                    <i className="bx bxl-instagram text-2xl"></i>
                  </a>
                  <a href="https://www.linkedin.com/company/akatsuki-coding-club/" className="bg-blue-900 text-white p-3 rounded-full hover:bg-blue-800">
                    <i className="bx bxl-linkedin text-2xl"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Useful Links */}
          <div className="w-full lg:w-1/6 mb-8 lg:mb-0 flex justify-center">
            <div>
              <h4 className="text-2xl font-semibold mb-8 text-center">Useful Links</h4>
              <ul>
                <li className="mb-4"><a href="#" className="hover:text-red-500 text-xl">Home</a></li>
                <li className="mb-4"><a href="#" className="hover:text-red-500 text-xl">About us</a></li>
                <li className="mb-4"><a href="#" className="hover:text-red-500 text-xl">Services</a></li>
                <li className="mb-4"><a href="#" className="hover:text-red-500 text-xl">Terms of service</a></li>
                <li className="mb-4"><a href="#" className="hover:text-red-500 text-xl">Privacy policy</a></li>
              </ul>
            </div>
          </div>

          {/* Our Services */}
          <div className="w-full lg:w-1/6 mb-8 lg:mb-0 flex justify-center">
            <div>
              <h4 className="text-2xl font-semibold mb-8 text-center">Our Services</h4>
              <ul>
                <li className="mb-4"><a href="#" className="hover:text-red-500 text-xl">Alumni Seminars</a></li>
                <li className="mb-4"><a href="#" className="hover:text-red-500 text-xl">Web Development</a></li>
                <li className="mb-4"><a href="#" className="hover:text-red-500 text-xl">Counselling</a></li>
                <li className="mb-4"><a href="#" className="hover:text-red-500 text-xl">Club Exclusive Events</a></li>
                <li className="mb-4"><a href="#" className="hover:text-red-500 text-xl">Coding Competitions</a></li>
              </ul>
            </div>
          </div>

          {/* Newsletter */}
          <div className="w-full lg:w-1/3 flex justify-center">
            <div>
              <h4 className="text-2xl font-semibold mb-8 text-center">Get Updated</h4>
              <p className="mb-8 text-lg text-center">Provide your E-mail address to get frequent updates about events and about the club.</p>
              <form action="" method="post" className="flex flex-col lg:flex-row items-center">
                <input
                  type="email"
                  name="email"
                  className="p-4 border border-gray-300 rounded-lg w-full lg:w-auto lg:mr-2 text-lg"
                  placeholder="Enter your email"
                />
                <input
                  type="submit"
                  value="Subscribe"
                  className="bg-red-600 text-white p-4 rounded-lg cursor-pointer hover:bg-red-700 text-lg mt-2 lg:mt-0"
                />
              </form>
            </div>
          </div>

        </div>
      </div>
      <div className="container mx-auto px-4 mt-12 text-center">
        <p className="text-lg text-light-gray">
          Developed by <a href="https://www.instagram.com/akatsuki_codingclub/" className="text-white hover:text-red-500">Akatsuki Development Team</a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;

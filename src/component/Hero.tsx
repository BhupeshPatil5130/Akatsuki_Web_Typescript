import { ChevronsDown } from "lucide-react";

const Hero: React.FC = () => {
  return (
    <section className="relative w-full h-screen bg-cover bg-center">
     
      <div
        className="absolute inset-0 bg-black bg-opacity-50"
        style={{ zIndex: 1 }} 
      ></div>

      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url("/brandnew.png")`,
          backgroundSize: 'cover', 
          backgroundPosition: 'center top', 
          zIndex: 0, 
        }}
      ></div>

      {/* Text Content */}
      <div className="relative flex flex-col items-center justify-center text-center text-white px-4 pt-40 md:pt-32 lg:pt-36 z-20">
        <h1 className="text-3xl md:text-4xl lg:text-6xl font-bold uppercase mb-2">
          Welcome to Akatsuki
        </h1>
        <h2 className="text-xl md:text-xl lg:text-xl font-bold uppercase mb-12">
          The Coding Club of R.C.Patel Institute of Technology
        </h2>
        <a
          href="#about"
          className="inline-flex items-center justify-center w-16 h-16 text-2xl font-medium text-white border-2 border-white rounded-full transition-all duration-300 ease-in-out hover:bg-white hover:bg-opacity-10"
        >
          <ChevronsDown className="w-8 h-8 mt-2 animate-bounce" />
        </a>
      </div>
    </section>
  );
};

export default Hero;

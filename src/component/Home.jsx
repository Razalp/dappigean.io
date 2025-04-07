import HomeImage from '../assets/HomeImage.jpg';

const Home = () => {
  return (
    <div className="relative w-screen h-screen overflow-hidden text-white">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${HomeImage})` }}
      ></div>

      {/* Dark Blue Overlay */}
      <div className="absolute inset-0 bg-blue-950 opacity-80"></div>

      {/* Content Wrapper */}
      <div className="relative z-10 flex flex-col justify-between h-full p-6">
        {/* Top Bar */}
        <div className="flex justify-between items-center">
          {/* Logo */}
          <h1 className="text-white text-xl font-bold">
            B&B CONCRETE <span className="text-xs bg-white text-black px-1 py-0.5 rounded">BUILD WITH US</span>
          </h1>

          {/* Contact Button */}
          <button className="bg-red-600 hover:bg-red-700 px-5 py-2 rounded text-sm font-semibold">
            CONTACT US
          </button>
        </div>

        {/* Centered Hero Section */}
        <div className="flex flex-col justify-center items-start h-full max-w-4xl mx-auto px-6">
          <h2 className="text-5xl sm:text-6xl font-extrabold leading-tight mb-6">
            Building Strength, <br /> One Foundation at a Time
          </h2>
          <div className="flex flex-wrap gap-4">
            <button className="bg-red-600 hover:bg-red-700 px-6 py-3 rounded font-semibold text-white">
              GET A FREE CONSULTATION
            </button>
            <button className="bg-transparent border border-white hover:bg-white hover:text-blue-950 px-6 py-3 rounded font-semibold">
              EXPLORE OUR PROJECTS
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;

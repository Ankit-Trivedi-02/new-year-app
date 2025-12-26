const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 w-full z-40 backdrop-blur-md bg-white/30 border-b border-white/20">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <h1 className="text-xl md:text-2xl font-extrabold text-indigo-700">
          🎆 NewYear Card
        </h1>

        <ul className="hidden md:flex gap-6 text-gray-800 font-medium">
          <li className="hover:text-indigo-600 cursor-pointer transition-colors duration-200">
            Customize
          </li>
          <li className="hover:text-indigo-600 cursor-pointer transition-colors duration-200">
            Preview
          </li>
          <li className="hover:text-indigo-600 cursor-pointer transition-colors duration-200">
            Share
          </li>
        </ul>

        <button className="md:hidden text-xl">☰</button>
      </div>
    </nav>
  );
};

export default Navbar;

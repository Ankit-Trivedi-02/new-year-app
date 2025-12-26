const Footer = () => {
  return (
    <footer className="w-full mt-12 backdrop-blur-md bg-white/30 border-t border-white/20 py-6">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center text-gray-700 text-sm gap-4 md:gap-0">
        {/* Project Info */}
        <p>🎆 NewYear Card Project</p>

        {/* Docker notice */}
        <p className="text-gray-500 md:text-center">
          ⚠️ For learning Docker, testing & deployment only
        </p>

        {/* Social Links */}
        <div className="flex gap-4">
          <a
            href="https://www.linkedin.com/in/ankittrivedi02"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-500 transition-colors duration-200"
          >
            LinkedIn
          </a>
          <a
            href="https://github.com/Ankit-Trivedi-02"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-900 transition-colors duration-200"
          >
            GitHub
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

import React, { useState } from "react";
import { FaArrowDown, FaBars, FaTimes } from "react-icons/fa";
import { FiDownload } from "react-icons/fi";

const HeroSection = () => {
  const [navOpen, setNavOpen] = useState(false);

  const toggleNavbar = () => {
    setNavOpen(!navOpen);
  };

  // Scroll to Contact Section
  const handleScrollToContact = () => {
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Scroll to the next section
  const handleScrollDown = () => {
    const nextSection = document.getElementById("next-section");
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="bg-[#121212] text-white min-h-screen scroll-smooth">
      {/* Navbar */}
      <nav className="flex justify-between items-center px-8 py-4 md:px-24 relative">
        {/* Logo */}
        <div>
          <img src="/Logos.jpg" alt="Logo" className="h-10 w-auto" />
        </div>

        {/* Regular Navbar Links */}
        <ul className="hidden md:flex space-x-8">
          {["Home", "About", "Work", "Reviews"].map((item) => (
            <li key={item}>
              <a
                href={`#${item.toLowerCase()}`}
                className="text-gray-400 hover:bg-white hover:text-black px-4 py-2 rounded-full transition-colors duration-300"
              >
                {item}
              </a>
            </li>
          ))}
        </ul>

        {/* Contact Me Button (Desktop) */}
        <button
          onClick={handleScrollToContact}
          className="hidden md:block bg-white text-black px-4 py-2 rounded-full hover:bg-gray-200 transition"
        >
          Contact Me
        </button>

        {/* Hamburger Menu Button */}
        <div className="md:hidden flex items-center">
          <button onClick={toggleNavbar} className="text-white text-2xl">
            {navOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>

        {/* Mobile Dropdown Menu */}
        <ul
          className={`absolute bg-[#121212] w-full flex flex-col items-center space-y-6 py-8 top-[4.5rem] left-0 transition-all duration-500 ease-in-out md:hidden ${
            navOpen ? "block opacity-100" : "hidden opacity-0"
          }`}
        >
          {["Home", "About", "Work", "Reviews"].map((item) => (
            <li key={item}>
              <a
                href={`#${item.toLowerCase()}`}
                onClick={toggleNavbar}
                className="text-gray-300 hover:bg-white hover:text-black px-4 py-2 rounded-full transition-colors duration-300"
              >
                {item}
              </a>
            </li>
          ))}
          <li>
            <button
              onClick={() => {
                toggleNavbar();
                handleScrollToContact();
              }}
              className="bg-white text-black px-4 py-2 rounded-full hover:bg-gray-200 transition"
            >
              Contact Me
            </button>
          </li>
        </ul>
      </nav>

      {/* Hero Section */}
      <section
        id="home"
        className="flex flex-col-reverse md:flex-row items-center justify-center text-center md:text-left px-8 md:px-24 py-16 min-h-[80vh] space-y-8 md:space-y-0"
      >
        {/* Left Text Content */}
        <div className="space-y-6 md:w-1/2">
          <span className="text-green-400 font-semibold block text-sm">
            ✅ Available for work
          </span>
          <h1 className="text-4xl md:text-6xl font-bold leading-tight">
            Building <span className="text-gray-300">Scalable</span> Modern Websites
            <br />
            for the Future
          </h1>
          {/* Buttons */}
          <div className="flex justify-center md:justify-start space-x-4">
            <button className="bg-blue-500 text-white px-6 py-2 rounded-lg flex items-center hover:bg-blue-600 transition">
              <FiDownload className="mr-2" />
              Download CV
            </button>
            <button
              onClick={handleScrollDown}
              className="bg-gray-700 text-white px-6 py-2 rounded-lg flex items-center hover:bg-gray-600 transition"
            >
              <FaArrowDown className="mr-2" />
              Scroll down
            </button>
          </div>
        </div>

        {/* Right Image */}
        <div className="flex justify-center md:w-1/2">
          <img
            src="/Portfolio-Picture.jpg"
            alt="Portfolio owner"
            className="w-72 h-72 rounded-[30px] object-cover"
          />
        </div>
      </section>
    </div>
  );
};

export default HeroSection;

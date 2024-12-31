import React, { useEffect, useRef, useState } from "react";

const ToolsSection = () => {
  const toolsRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  // Intersection Observer for Animation
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2 }
    );

    if (toolsRef.current) {
      observer.observe(toolsRef.current);
    }
  }, []);

  return (
    <section
      ref={toolsRef}
      id="tools"
      className="bg-[#121212] text-white py-16 px-8 md:px-24 min-h-[60vh] text-center transition-all duration-1000"
    >
      {/* Heading */}
      <div
        className={`transition-all duration-1000 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        <h2 className="text-3xl md:text-4xl font-bold">Essential Tools I use</h2>
        <p className="text-gray-400 mt-4">
          Discover the powerful tools and technologies I use to create
          exceptional, high-performing websites & applications.
        </p>
      </div>

      {/* Tools Grid */}
      <div
        className={`grid grid-cols-2 md:grid-cols-4 gap-6 mt-10 transition-all duration-1000 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        {/* Firebase */}
        <div className="bg-[#1e1e1e] p-6 rounded-lg flex flex-col items-center text-center transition-transform hover:bg-[#ffca28] hover:scale-105 hover:shadow-lg">
          <img
            src="/Firebase.jpg"
            alt="Firebase"
            className="h-12 w-12 mb-4"
          />
          <h3 className="text-lg font-semibold">Firebase</h3>
          <p className="text-gray-400 text-sm mt-2">Backend-as-a-Service</p>
        </div>

        {/* CSS */}
        <div className="bg-[#1e1e1e] p-6 rounded-lg flex flex-col items-center text-center transition-transform hover:bg-blue-500 hover:scale-105 hover:shadow-lg">
          <img
            src="/CSS.jpg"
            alt="CSS"
            className="h-12 w-12 mb-4"
          />
          <h3 className="text-lg font-semibold">CSS</h3>
          <p className="text-gray-400 text-sm mt-2">User Interface</p>
        </div>

        {/* JavaScript */}
        <div className="bg-[#1e1e1e] p-6 rounded-lg flex flex-col items-center text-center transition-transform hover:bg-yellow-400 hover:scale-105 hover:shadow-lg">
          <img
            src="/Javascript.jpg"
            alt="JavaScript"
            className="h-12 w-12 mb-4"
          />
          <h3 className="text-lg font-semibold">JavaScript</h3>
          <p className="text-gray-400 text-sm mt-2">Interaction</p>
        </div>

        {/* Node.js */}
        <div className="bg-[#1e1e1e] p-6 rounded-lg flex flex-col items-center text-center transition-transform hover:bg-green-500 hover:scale-105 hover:shadow-lg">
          <img
            src="/NodeJS.jpg"
            alt="Node.js"
            className="h-12 w-12 mb-4"
          />
          <h3 className="text-lg font-semibold">Node.js</h3>
          <p className="text-gray-400 text-sm mt-2">Web Server</p>
        </div>

        {/* Express.js */}
        <div className="bg-[#1e1e1e] p-6 rounded-lg flex flex-col items-center text-center transition-transform hover:bg-gray-500 hover:scale-105 hover:shadow-lg">
          <img
            src="/ExpressJS.jpg"
            alt="Express.js"
            className="h-12 w-12 mb-4"
          />
          <h3 className="text-lg font-semibold">Express.js</h3>
          <p className="text-gray-400 text-sm mt-2">Node Framework</p>
        </div>

        {/* MongoDB */}
        <div className="bg-[#1e1e1e] p-6 rounded-lg flex flex-col items-center text-center transition-transform hover:bg-green-600 hover:scale-105 hover:shadow-lg">
          <img
            src="/MongoDB.jpg"
            alt="MongoDB"
            className="h-12 w-12 mb-4"
          />
          <h3 className="text-lg font-semibold">MongoDB</h3>
          <p className="text-gray-400 text-sm mt-2">Database</p>
        </div>

        {/* React */}
        <div className="bg-[#1e1e1e] p-6 rounded-lg flex flex-col items-center text-center transition-transform hover:bg-blue-400 hover:scale-105 hover:shadow-lg">
          <img
            src="/React.jpg"
            alt="React"
            className="h-12 w-12 mb-4"
          />
          <h3 className="text-lg font-semibold">React</h3>
          <p className="text-gray-400 text-sm mt-2">Framework</p>
        </div>

        {/* TailwindCSS */}
        <div className="bg-[#1e1e1e] p-6 rounded-lg flex flex-col items-center text-center transition-transform hover:bg-teal-400 hover:scale-105 hover:shadow-lg">
          <img
            src="/Tailwind.jpg"
            alt="TailwindCSS"
            className="h-12 w-12 mb-4"
          />
          <h3 className="text-lg font-semibold">TailwindCSS</h3>
          <p className="text-gray-400 text-sm mt-2">User Interface</p>
        </div>
      </div>
    </section>
  );
};

export default ToolsSection;

import React, { useEffect, useRef, useState } from "react";
import { FiArrowUpRight } from "react-icons/fi";

const Projects = () => {
  const projectsRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  // Intersection Observer for animation
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

    if (projectsRef.current) {
      observer.observe(projectsRef.current);
    }
  }, []);

  const projects = [
    {
      title: "Blog Website",
      description: "Front end, Backend, Database",
      image: "/BlogWebsite.png",
      link: "https://nex-media.vercel.app/",
    },
    {
      title: "Landing Page",
      description: "Front end, Deployed, Team collaboration",
      image: "/LandingPage.png",
      link: "https://kennedy200.github.io/Launch-Waitlist/",
    },
    {
      title: "CV Analyser App",
      description: "AI Models, Backend, In Progress",
      image: "/CVAnalyser.png",
      link: "https://your-cv-analyser-link.com",
    },
    {
      title: "Portfolio Website",
      description: "Front end , Deployed",
      image: "/Portfolio.png",
      link: "https://your-portfolio-website-link.com",
    },
    {
      title: "Eloni E-COMMERCE Website",
      description: "Backend, Team collaboration, In progress",
      image: "/ECommerceWebsite.png",
      link: "https://eloni-ecommerce.vercel.app/",
    },
    {
      title: "Quote Generator website",
      description: "Front end, API",
      image: "/Quote-Genertaor.png",
      link: "https://twt-quote-generator.vercel.app",
    },
    {
        title: "Tesla Landing Page",
        description: "Front end, Web design, Futuristic",
        image: "/Tesla.png",
        link: "https://tesla-psi-seven.vercel.app/",
    },
    {
        title: "Palette Pro (Color Picker) Website",
        description: "Front end, Web design, React",
        image: "/Palette-pro.png",
        link: "https://palette-pro-kappa.vercel.app/",
    },
  ];

  return (
    <section
      ref={projectsRef}
      id="projects"
      className="bg-[#121212] text-white py-16 px-8 md:px-24 text-center transition-all duration-1000"
    >
      {/* Heading */}
      <div
        className={`transition-all duration-1000 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        <h2 className="text-3xl md:text-4xl font-bold">My Portfolio Highlights</h2>
        <p className="text-gray-400 mt-4">
          Explore some of the exciting projects I’ve worked on. Click the arrow to learn more.
        </p>
      </div>

      {/* Projects Grid */}
      <div
        className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-10 transition-all duration-1000 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        {projects.map((project, index) => (
          <div
            key={index}
            className="relative bg-[#1e1e1e] p-4 rounded-lg overflow-hidden group"
          >
            {/* Project Image */}
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-48 object-cover rounded-lg"
            />

            {/* Overlay Hover */}
            <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex justify-center items-center">
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-500 text-white p-2 rounded-full hover:bg-blue-600 transition"
              >
                <FiArrowUpRight className="text-2xl" />
              </a>
            </div>

            {/* Project Info */}
            <div className="mt-4">
              <h3 className="text-lg font-semibold">{project.title}</h3>
              <p className="text-gray-400 text-sm mt-2">{project.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;

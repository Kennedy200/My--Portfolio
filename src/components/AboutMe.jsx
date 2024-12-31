import React, { useState, useEffect, useRef } from "react";

const AboutMe = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

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
      { threshold: 0.2 } // Trigger when 20% of the section is visible
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
  }, []);

  return (
    <section
      ref={sectionRef}
      id="about"
      className={`bg-[#121212] text-white px-8 md:px-24 py-16 flex justify-center transition-all duration-1000 ${
        isVisible
          ? "opacity-100 translate-y-0"
          : "opacity-0 translate-y-10"
      }`}
    >
      <div className="max-w-4xl bg-[#1E1E1E] p-8 md:p-12 rounded-lg shadow-lg text-center space-y-6">
        {/* About Me Text */}
        <p className="text-gray-300 leading-relaxed text-lg">
          Welcome! I'm Kennedy, a professional Fullstack developer with a knack for
          crafting visually stunning and highly functional websites. Combining
          creativity and technical expertise, I transform your vision into
          digital masterpiece that excels in both appearance and performance.
        </p>

        {/* Stats Section */}
        <div className="flex justify-center items-center space-x-12 text-center">
          {/* Projects */}
          <div>
            <h2 className="text-4xl font-bold text-white">
              10<span className="text-blue-400">+</span>
            </h2>
            <p className="text-gray-400">Projects done</p>
          </div>

          {/* Experience */}
          <div>
            <h2 className="text-4xl font-bold text-white">
              4<span className="text-blue-400">+</span>
            </h2>
            <p className="text-gray-400">Years of experience</p>
          </div>

          {/* Certificates */}
          <div>
            <h2 className="text-4xl font-bold text-white">
              6<span className="text-blue-400">+</span>
            </h2>
            <p className="text-gray-400">Certificates</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;

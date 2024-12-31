import React from "react";
import { FaGithub, FaLinkedin, FaInstagram, FaFacebook } from "react-icons/fa";

const Contact = () => {
  return (
    <section 
      id="contact" 
      className="bg-[#0d0d0d] text-white py-20 px-5 sm:px-8 md:px-16 lg:px-32 relative overflow-hidden"
    >
      {/* Gradient Background for Flair */}
      <div className="absolute -top-40 left-1/2 transform -translate-x-1/2 w-[600px] h-[600px] bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 opacity-20 blur-3xl pointer-events-none"></div>

      {/* Grid Layout for Form and Text */}
      <div className="grid md:grid-cols-2 gap-12 max-w-screen-lg mx-auto relative z-10">
        
        {/* Contact Form Section */}
        <div className="w-full">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-6 tracking-wide leading-tight">
            Let's Collaborate
          </h2>
          <p className="mb-8 text-gray-400 leading-relaxed">
            Reach out today to discuss your project needs and let's build something amazing together!
          </p>

          <form 
            action="https://formsubmit.co/kennedychigozie883@gmail.com" 
            method="POST" 
            className="space-y-6"
          >
            <div>
              <label htmlFor="name" className="block mb-2 text-gray-300">
                Name
              </label>
              <input 
                type="text" 
                id="name" 
                name="name" 
                required 
                className="w-full p-4 rounded-lg bg-[#1a1a1a] border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label htmlFor="email" className="block mb-2 text-gray-300">
                Email
              </label>
              <input 
                type="email" 
                id="email" 
                name="email" 
                required 
                className="w-full p-4 rounded-lg bg-[#1a1a1a] border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label htmlFor="message" className="block mb-2 text-gray-300">
                Message
              </label>
              <textarea 
                id="message" 
                name="message" 
                required 
                className="w-full p-4 rounded-lg bg-[#1a1a1a] border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 h-36"
              ></textarea>
            </div>

            <button 
              type="submit" 
              className="w-full bg-gradient-to-r from-blue-500 to-purple-500 hover:from-purple-500 hover:to-pink-500 text-white font-bold py-4 rounded-lg shadow-lg transform hover:scale-105 transition-all duration-300"
            >
              Send Message
            </button>
          </form>
        </div>

        {/* Call to Action & Social Links */}
        <div className="text-left flex flex-col justify-center">
          <h1 className="text-5xl font-extrabold mb-6 leading-tight">
            Let's build something amazing!
          </h1>

          <a 
            href="https://linkedin.com/in/kennedy-gabriel-b69159338?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-block bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-indigo-600 hover:to-pink-500 text-white px-8 py-4 rounded-lg mt-6 shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
          >
            Start Project →
          </a>

          {/* Social Media Links */}
          <div className="flex items-center gap-8 mt-12">
            {[
              { icon: FaGithub, link: "https://github.com/Kennedy200", label: "GitHub" },
              { icon: FaLinkedin, link: "https://linkedin.com/in/kennedy-gabriel-b69159338", label: "LinkedIn" },
              { icon: FaInstagram, link: "https://instagram.com/life.withkennedyy", label: "Instagram" },
              { icon: FaFacebook, link: "https://facebook.com/profile.php?id=100074868560128", label: "Facebook" },
            ].map((social, index) => (
              <a 
                key={index} 
                href={social.link} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="group relative"
              >
                <div className="w-14 h-14 rounded-full bg-[#1a1a1a] flex items-center justify-center shadow-lg transform group-hover:scale-110 transition">
                  <social.icon className="text-2xl text-white" />
                </div>
                <span className="absolute -bottom-8 text-gray-400 text-sm opacity-0 group-hover:opacity-100 transition">
                  {social.label}
                </span>
              </a>
            ))}
          </div>

          <p className="text-gray-500 mt-16">
            © 2025 Kennedy Gabriel
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;

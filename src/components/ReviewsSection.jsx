import React, { useEffect, useRef, useState } from "react";
import { FaStar } from "react-icons/fa";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

const ReviewsSection = () => {
  const reviewsRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

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

    if (reviewsRef.current) {
      observer.observe(reviewsRef.current);
    }
  }, []);

  const reviews = [
    {
      name: "Ethan Caldwell",
      company: "NextWave",
      review:
        "Impressive work! Fast loading times, intuitive design, and flawless backend integration. Highly recommend.",
      image: "/ethan.jpg",
    },
    {
      name: "Liam Bennett",
      company: "CodeCraft",
      review:
        "Outstanding developer! Built a robust site with perfect functionality. Efficient and detail-oriented.",
      image: "/liam.jpg",
    },
    {
      name: "Noah Williams",
      company: "BrightWeb",
      review:
        "Creative and skilled! Produced a modern, user-friendly site that exceeded expectations. Great communication.",
      image: "/noah.jpg",
    },
    {
      name: "Ava Thompson",
      company: "TechMosaic",
      review:
        "Professional work! Delivered on time, with polished design and smooth user experience. Top-notch developer.",
      image: "/ava.jpg",
    },
    {
      name: "Lucas Reed",
      company: "Innovatech",
      review:
        "Exceptional developer! Delivered a seamless website with top-tier performance and user experience. Highly skilled and reliable.",
      image: "/lucas.jpg",
    },
    {
      name: "Sophia Clarke",
      company: "WebNova",
      review:
        "Top-quality work! Built a site that is not only beautiful but also highly intuitive. Attention to detail is outstanding.",
      image: "/sophia.jpg",
    },
    {
      name: "Benjamin Lee",
      company: "NextGen Apps",
      review:
        "Brilliant work! Developed a site with impeccable design and functionality. Extremely knowledgeable and thorough.",
      image: "/benjamin.jpg",
    },
    {
      name: "Olivia Martinez",
      company: "NexusMedia",
      review:
        "Exceeded our expectations! Built a website that’s both efficient and aesthetically pleasing. Great problem-solving skills.",
      image: "/olivia.jpg",
    },
    {
      name: "Daniel Scott",
      company: "DevSpark",
      review:
        "Fantastic developer! Produced a sleek, professional site with excellent user engagement. Very communicative and responsive.",
      image: "/daniel.jpg",
    },
    {
      name: "Emma White",
      company: "CreateHub",
      review:
        "Highly efficient! Developed a fast, responsive site with superb backend functionality. Always a pleasure to work with.",
      image: "/emma.jpg",
    },
  ];

  const handlePrev = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? reviews.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const handleNext = () => {
    const isLastSlide = currentIndex === reviews.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  return (
    <section
      ref={reviewsRef}
      id="reviews"
      className="bg-[#121212] text-white py-16 px-8 md:px-24 text-center transition-all duration-1000"
    >
      {/* Heading */}
      <div
        className={`transition-all duration-1000 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        <h2 className="text-3xl md:text-4xl font-bold">What Our Customers Say</h2>
        <p className="text-gray-400 mt-4">
          Hear from some of the clients I’ve had the pleasure to work with.
        </p>
      </div>

      {/* Reviews Slideshow */}
      <div
        className={`relative mt-12 max-w-4xl mx-auto overflow-hidden transition-all duration-1000 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        {/* Reviews Container */}
        <div
          className="flex transition-transform duration-500"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {reviews.map((review, index) => (
            <div
              key={index}
              className="w-full min-w-full bg-[#1e1e1e] p-8 rounded-lg shadow-lg"
            >
              <div className="flex items-center justify-center mb-6">
                {[...Array(5)].map((_, i) => (
                  <FaStar key={i} className="text-yellow-400 text-xl" />
                ))}
              </div>
              <p className="text-gray-300 text-lg mb-6">{review.review}</p>
              <div className="flex items-center justify-center">
                <img
                  src={review.image}
                  alt={review.name}
                  className="w-12 h-12 rounded-full mr-4"
                />
                <div>
                  <h4 className="font-semibold">{review.name}</h4>
                  <p className="text-gray-400 text-sm">{review.company}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Navigation Buttons */}
        <button
          className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-gray-800 p-3 rounded-full hover:bg-gray-700 transition"
          onClick={handlePrev}
        >
          <FiChevronLeft className="text-2xl" />
        </button>
        <button
          className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-gray-800 p-3 rounded-full hover:bg-gray-700 transition"
          onClick={handleNext}
        >
          <FiChevronRight className="text-2xl" />
        </button>
      </div>
    </section>
  );
};

export default ReviewsSection;

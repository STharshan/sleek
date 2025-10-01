import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const testimonials = [
  {
    quote:
      " The best car cleaning and detailing business around, you won't find anyone who puts as much effort into cleaning your car as these guys! ",
    author: "Alan H",
  },
  {
    quote:
      "I've had my car done by a few local 'detailers' and safe to say Sleek Detailing is easily up there with the best around, would and already have recommended to everyone I know.",
    author: "Saul D",
  },
  {
    quote: " I have used Sleek Detailing a few times now and honestly is the best clean my car has had! I have dogs and I know how hard it is to remove dog hairs from fabric but Rhys knows how to remove every one! Also so polite, kind and more importantly professional!",
    author: "Sian D",
  },

];

const ScrollingTestimonials = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: true,
    });
  }, []);

  return (
    <section
      className="bg-overlay py-16 overflow-hidden"
      data-aos="fade-up"
      data-aos-delay="200"
    >
      <div className="w-[200%] animate-scroll flex space-x-6">
        {[...testimonials, ...testimonials].map((t, index) => (
          <div
            key={index}
            className="min-w-[300px] sm:min-w-[350px] md:min-w-[400px] bg-white text-black dark:bg-black dark:text-white p-6 rounded shadow-md"
          >
            {/* Quote */}
            <p className="text-sm mb-4">"{t.quote}"</p>

            {/* Author */}
            <p className="font-bold text-sm uppercase">
              {t.author}
            </p>

            {/* Source */}
            <p className="text-xs">Google Reviews</p>
          </div>
        ))}
      </div>

      {/* Scrolling Animation */}
      <style jsx="true">{`
        @keyframes scroll {
          0% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-scroll {
          animation: scroll 30s linear infinite;
        }
      `}</style>
    </section>
  );
};

export default ScrollingTestimonials;

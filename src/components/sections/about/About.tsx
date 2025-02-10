import React from 'react';
import Image from 'next/image';

const About = () => {
  return (
    <section className="relative h-screen py-16 px-4 bg-white">
      <h2 className="text-4xl font-bold text-center mb-8 relative z-10">
        About Me
      </h2>

      <div className="max-w-4xl mx-auto space-y-8 flex items-center justify-center">
        <div
          className="mx-auto w-full max-w-md transition-opacity duration-5000 ease-out"
          style={{ 
            animation: 'fadeIn 5s ease-out forwards'
          }}
        >
          <style jsx>{`
            @keyframes fadeIn {
              from {
                opacity: 0;
              }
              to {
                opacity: 1;
              }
            }
          `}</style>
          <Image
            src="/images/Stylesbytds-owner-tiffany.jpg"
            alt="Owner Photo"
            width={300}
            height={300}
            className="rounded-lg shadow-lg"
          />
        </div>
        <div className="text-center px-4">
          <h3 className="text-2xl font-semibold text-black mb-4">
            Meet The Stylist <span className="text-customGold">Tiffany Seaward</span>
          </h3>
          <p className="text-gray-700 leading-relaxed">
            Tiffany Seaward is a renowned stylist with over a decade of experience in the beauty industry. Known for her innovative techniques and personalized approach, Tiffany has transformed the looks of countless clients, helping them to express their unique style and confidence. Her passion for hair styling and dedication to her craft make her a sought-after stylist in the DMV area.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
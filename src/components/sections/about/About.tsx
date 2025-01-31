import React from 'react';
import Image from 'next/image';

const About = () => {
  return (
    <section className="relative flex flex-col items-center justify-center py-16 bg-white my-10">
      <h2 className="text-4xl font-bold text-center mb-8 relative z-10">
        About Me
      </h2>
      <div className="relative w-full max-w-4xl mx-auto flex flex-col lg:flex-row items-center lg:items-start">
        <div className="relative w-full lg:w-1/2 mb-8 lg:mb-0">
          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/4 z-20">
            <Image
              src="/path/to/owner-photo.jpg"
              alt="Owner Photo"
              width={200}
              height={200}
              className="rounded-full shadow-lg"
            />
          </div>
        </div>
        <div className="w-full lg:w-1/2 text-center lg:text-left px-4 lg:px-8">
          <h3 className="text-2xl font-semibold text-black mb-4">
            Meet The Stylist <span className="text-customGold">Tiffany Seaward</span>
          </h3>
          <p className="text-gray-700">
            Tiffany Seaward is a renowned stylist with over a decade of experience in the beauty industry. Known for her innovative techniques and personalized approach, Tiffany has transformed the looks of countless clients, helping them to express their unique style and confidence. Her passion for hair styling and dedication to her craft make her a sought-after stylist in the DMV area.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
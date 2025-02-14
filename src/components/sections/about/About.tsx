import React from 'react';
import Image from 'next/image';

const About = () => {
  return (
    <section className="relative min-h-screen py-16 px-2 bg-gradient-to-r from-stone-100 to-neutral-200 mb-20">
      <h1 className="text-5xl text-customGold important-font font-bold text-center mb-10 relative z-10">
        About Me      
      </h1>

      <div className="max-w-4xl mx-auto px-1 flex flex-col md:flex-row items-start justify-between gap-10">
        <div
          className="w-full md:w-1/3 transition-opacity duration-3000 ease-out mb-8 md:mb-0"
          style={{ 
            animation: 'fadeIn 3s ease-out forwards'
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
          <div className="relative w-2/3 sm:w-full aspect-[3/4] mx-auto shadow-lg">
            <Image
              src="/images/Stylesbytds-owner-tiffany.jpg"
              alt="Owner Photo"
              fill
              className="rounded-lg shadow-lg border-2 border-customGold object-cover"
            />
          </div>
        </div>
        <div className="w-full md:w-2/3 text-left">
          <h3 className="text-2xl font-semibold text-black mb-4">
            Meet The Stylist <span className="text-customGold text-3l important-font">Tiffany Seaward</span>
          </h3>
          <p className="text-gray-700 leading-relaxed mb-4">
            Tiffany is a renowned stylist with over a decade of experience in the beauty industry. Known for her innovative techniques and personalized approach, Tiffany has transformed the looks of countless clients, helping them to express their unique style and confidence. Her passion for hair styling and dedication to her craft make her a sought-after stylist in the DMV area.

          </p>
          <p className="text-gray-700 leading-relaxed">
          As a mother herself, Tiffany understands the importance of creating a welcoming and comfortable environment for clients of all ages. She takes pride in providing a safe and nurturing space where children can feel at ease while getting their hair styled. Whether you&apos;re looking for a fresh style for your little one or seeking expert hair care for yourself, Tiffany&apos;s gentle approach and professional expertise make her the perfect choice for the whole family.

          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
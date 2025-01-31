import React from 'react';
import Image from 'next/image';

interface TestimonialCardProps {
  photo: string;
  name: string;
  testimonial: string;
  author: string;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ photo, name, testimonial, author }) => {
  return (
    <div className="relative group w-full h-full overflow-hidden rounded-lg shadow-lg">
      <div className="relative w-full h-full">
        <Image
          src={photo}
          alt={name}
          layout="fill"
          objectFit="cover"
          className="transition-opacity duration-300 group-hover:opacity-30"
        />
      </div>
      <div className="absolute inset-0 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-white bg-opacity-75 p-4">
        <p className="text-black text-center italic mb-2">&quot;{testimonial}&quot;</p>
        <span className="text-black font-semibold">{author}</span>
      </div>
    </div>
  );
};

export default TestimonialCard;
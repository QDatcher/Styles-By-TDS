import React from 'react';
import Image from 'next/image';
import { colors } from '@/styles/colors';
import styled from 'styled-components';
import { FaStar } from 'react-icons/fa';

const StarsContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 4px;
  margin-bottom: 1rem;
`;

interface TestimonialCardProps {
  photo: string;
  name: string;
  testimonial: string;
  author: string;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ photo, name, testimonial, author }) => {
  return (
    <div className="relative group h-80 rounded-lg overflow-hidden">
      <div className="relative w-full h-full rounded-lg overflow-hidden">
        <Image
          src={photo}         
          alt={name}
          layout="fill"
          objectFit="cover"
          className="transition-opacity duration-300 group-hover:opacity-30"
        />
      </div>
      <div className="TestimonialContent absolute inset-0 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-white bg-opacity-75 p-4">
        <StarsContainer>
          {[...Array(5)].map((_, index) => (
            <FaStar key={index} size={20} color={colors.gold} />
          ))}
        </StarsContainer>
        <p className="text-black text-center italic mb-2">&quot;{testimonial}&quot;</p>
        <span className="text-black font-semibold">{author}</span>
      </div>
    </div>
  );
};

export default TestimonialCard;
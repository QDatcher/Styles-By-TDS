"use client";
import styled from 'styled-components';
import { cn } from "../../../lib/utils";

interface CardDemoProps {
  photo: string;
  name: string;
  testimonial: string;
  author: string;
}

const CardContainer = styled.div<{ bgImage: string }>`
  background-image: url('/${props => props.bgImage}');
  background-size: cover;
  background-position: center;
`;

export function CardDemo({ photo, name, testimonial, author }: CardDemoProps) {
  return (
    <div className="max-w-xs w-full">
      <CardContainer
        bgImage={photo}
        className={cn(
          "group w-full cursor-pointer overflow-hidden relative card h-96 rounded-md shadow-xl mx-auto flex flex-col justify-end p-4 border border-transparent dark:border-neutral-800",
          "hover:after:content-[''] hover:after:absolute hover:after:inset-0 hover:after:bg-black hover:after:opacity-50",
          "transition-all duration-500"
        )}
      >
        <div className="text relative z-50 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
          <p className="font-normal text-lg text-gray-50 relative my-4 italic">
            &quot;{testimonial}&quot;
          </p>
          <h3 className="font-bold text-xl text-gray-50 relative">
            {author}
          </h3>
        </div>
      </CardContainer>
    </div>
  );
}

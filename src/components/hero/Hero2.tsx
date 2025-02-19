import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import { images } from '@/data/imageUrl';
import Link from 'next/link';

interface Hero2Props {
  scrollY?: number;
}

const HeroContainer = styled.div<{ transform?: string }>`
  height: 100vh;
  width: 100%;
  position: relative;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  transform: ${props => props.transform || 'none'};
`;

const BackgroundImage = styled(motion.div)`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(2, 1fr);
  gap: 10px;
  padding: 10px;
`;

const ImageWrapper = styled(motion.div)`
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;
  opacity: 0.6;
`;

const ContentContainer = styled.div<{ transform?: string }>`
  position: relative;
  z-index: 2;
  text-align: center;
  padding: 2rem;
  transform: ${props => props.transform || 'none'};
`;

const Logo = styled.div`
  position: relative;
  width: 300px;
  height: 300px;
  margin: 0 auto 2rem;
`;

const Tagline = styled.h2`
  color: white;
  font-size: 1.2rem;
  margin-bottom: 2rem;
  font-family: var(--font-geist);
`;


const slideVariants = {
  enterRight: {
    x: '100%',
    opacity: 0
  },
  enterLeft: {
    x: '-100%',
    opacity: 0
  },
  enterUp: {
    y: '100%',
    opacity: 0
  },
  center: {
    x: 0,
    y: 0,
    opacity: 0.6
  },
  exitRight: {
    x: '100%',
    opacity: 0
  },
  exitLeft: {
    x: '-100%',
    opacity: 0
  },
  exitUp: {
    y: '-100%',
    opacity: 0
  }
};

const Hero2 = ({ scrollY = 0 }: Hero2Props) => {
  const [visibleImages, setVisibleImages] = useState<number[]>([]);
  const [direction, setDirection] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [parallaxStyle, setParallaxStyle] = useState('');
  const [contentParallaxStyle, setContentParallaxStyle] = useState('');

  useEffect(() => {
    const updateParallaxStyles = () => {
      setParallaxStyle(`translateY(${window.innerWidth > 1024 ? scrollY * 0.5 : scrollY * 0.3}px)`);
      setContentParallaxStyle(`translateY(${window.innerWidth > 1024 ? -scrollY * 0.2 : -scrollY * 0.1}px)`);
    };

    updateParallaxStyles();
    window.addEventListener('resize', updateParallaxStyles);

    return () => window.removeEventListener('resize', updateParallaxStyles);
  }, [scrollY]);

  useEffect(() => {
    const updateImages = async () => {
      setIsTransitioning(true);
      
      // Wait for exit animations
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      const newIndices: number[] = [];
      while (newIndices.length < 6) {
        const randomIndex = Math.floor(Math.random() * images.length);
        if (!newIndices.includes(randomIndex)) {
          newIndices.push(randomIndex);
        }
      }
      setDirection(Math.floor(Math.random() * 3));
      setVisibleImages(newIndices);
      setIsTransitioning(false);
    };

    // Initial load
    updateImages();
    const timer = setInterval(updateImages, 7000); // Increased interval to account for sequential animations
    return () => clearInterval(timer);
  }, []);

  const getInitialAnimation = () => {
    switch(direction) {
      case 0:
        return "enterRight";
      case 1:
        return "enterLeft";
      case 2:
        return "enterUp";
      default:
        return "enterRight";
    }
  };

  const getExitAnimation = () => {
    switch(direction) {
      case 0:
        return "exitLeft";
      case 1:
        return "exitRight";
      case 2:
        return "exitUp";
      default:
        return "exitLeft";
    }
  };

  return (
    <HeroContainer transform={parallaxStyle}>
      <BackgroundImage>
        <AnimatePresence mode='wait'>
          {!isTransitioning && visibleImages.map((imageIndex, gridPosition) => (
            <ImageWrapper
              key={`${gridPosition}-${imageIndex}`}
              variants={slideVariants}
              initial={getInitialAnimation()}
              animate="center"
              exit={getExitAnimation()}
              transition={{ 
                duration: 1.2,
                ease: [0.4, 0, 0.2, 1]
              }}
            >
              <Image
                src={images[imageIndex].src}
                alt={images[imageIndex].alt}
                fill
                style={{ objectFit: 'cover' }}
                priority
              />
            </ImageWrapper>
          ))}
        </AnimatePresence>
      </BackgroundImage>

      <ContentContainer transform={contentParallaxStyle}>
        <Logo>
          <Image
            src="/TDS.png"
            alt="Styles By TDS Logo"
            fill
            style={{ objectFit: 'contain' }}
            priority
          />
        </Logo>
        <Tagline className='text-white text-base sm:text-md md:text-lg font-light mb-2 leading-relaxed'>
          Experience the best in hair styling and extensions in the DMV
        </Tagline>
        <div className="flex justify-center w-full">
            <Link 
              href="https://www.instagram.com/styles_by_tds/" 
              className="w-32 sm:w-36 px-4 sm:px-6 py-2 bg-transparent border-2 border-white 
                text-white font-bold rounded text-xs sm:text-sm hover:border-customGold hover:bg-customGold  
                transition duration-300 text-center touch-manipulation active:bg-white/90 
                active:text-black active:scale-[0.98]"
            >
              Book An Appointment
            </Link>
          </div>
      </ContentContainer>
    </HeroContainer>
  );
};

export default Hero2;
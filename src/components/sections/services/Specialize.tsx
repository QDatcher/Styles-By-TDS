"use client";

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import styled from 'styled-components';
import { colors } from '../../../styles/colors';
import { motion, AnimatePresence } from 'framer-motion';

const SpecializeSection = styled.section`
  background-color: ${colors.black};
  padding: 6rem 2rem;
  position: relative;
  z-index: 10;
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 3rem;
  
  @media (min-width: 768px) {
    grid-template-columns: 1fr 1fr;
    align-items: center;
  }
`;

const Content = styled.div`
  text-align: center;
  
  @media (min-width: 768px) {
    text-align: left;
  }
`;

const AnimatedTitle = styled(motion.h2)`
  color: ${colors.gold};
  font-size: 2.5rem;
  margin-bottom: 1.5rem;
  font-family: DancingScript;
`;

const AnimatedDescription = styled(motion.p)`
  color: white;
  font-size: 1.2rem;
  line-height: 1.8;
  margin-bottom: 2rem;
`;

const ImageContainer = styled.div`
  position: relative;
  width: 100%;
  height: 400px;
`;

const StyledImage = styled(motion.div)`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`;

const images = [
  {
    src: "/images/transparent/stylesbytds-little-girl-back.png",
    alt: "Child hairstyling example 1"
  },
  {
    src: "/images/transparent/little-girl-hair.png",
    alt: "Child hairstyling example 2"
  },
  {
    src: "/images/transparent/stylesbytds-little-girl-front.png",
    alt: "Child hairstyling example 3"
  },
  {
    src: "/images/transparent/stylesbytds-little-girl-transparent.png",
    alt: "Child hairstyling example 4"
  }
];

const Specialize = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 4000);

    return () => clearInterval(timer);
  }, []);

  return (
    <SpecializeSection>
      <Container>
        <Grid>
          <Content>
            <AnimatedTitle
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              viewport={{ once: true, margin: "-100px" }}
              className='CedarvilleCursive'
            >
              Specializing in Kids Hair
            </AnimatedTitle>
            <AnimatedDescription
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
              viewport={{ once: true, margin: "-100px" }}
            >
              At Styles By TDS, we take pride in our expertise with children&apos;s hair care
              and intricate braiding techniques. Our gentle approach ensures kids feel
              comfortable and confident, while our skilled braiding and crocheting
              services create stunning, long-lasting styles that celebrate your natural beauty.
            </AnimatedDescription>
            <AnimatedDescription
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
              viewport={{ once: true, margin: "-100px" }}
            >
              As a mother myself, I&apos;ve created a safe and nurturing environment where children 
              can relax and be themselves. To help your child feel most comfortable and 
              independent during their styling session, I recommend a quick drop-off service. 
              This approach often helps children settle in better and enjoy their hair 
              experience more fully. Rest assured, I&apos;ll keep you updated with photos of 
              their progress!
            </AnimatedDescription>
          </Content>
          
          <ImageContainer>
            <AnimatePresence mode='wait'>
              <StyledImage
                key={currentIndex}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 1 }}
              >
                <Image
                  src={images[currentIndex].src}
                  alt={images[currentIndex].alt}
                  fill
                  style={{ 
                    objectFit: 'contain',
                    objectPosition: 'center'
                  }}
                />
              </StyledImage>
            </AnimatePresence>
          </ImageContainer>
        </Grid>
      </Container>
    </SpecializeSection>
  );
};

export default Specialize;
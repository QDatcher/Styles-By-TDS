"use client";

import React from 'react';
import styled from 'styled-components';
import { colors } from '../../../styles/colors';
import { FaBrush, FaLeaf, FaSmile, FaUser } from 'react-icons/fa';
import { GiHairStrands, GiComb } from 'react-icons/gi';
import ServiceCard from './ServiceCard';
import { motion } from 'framer-motion';


const Container = styled.div`
  min-height: 100vh;
  padding: 4rem 2rem;
  background-color: white;
  position: relative;
  z-index: 10;
`;

const ContentWrapper = styled.div`
  max-width: 1400px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 3rem;

  @media (min-width: 1024px) {
    flex-direction: row;
    align-items: center;
  }
`;

const TextContent = styled.div`
  @media (min-width: 1024px) {
    flex: 1;
    padding-right: 3rem;
  }
`;

const Title = styled(motion.h2)`
  color: ${colors.gold};
  font-size: 3rem;
  margin-bottom: 1.5rem;
  font-family: var(--font-geist-sans);
  line-height: 1.2;
`;


const Subtitle = styled(motion.p)`
  color: ${colors.black};
  font-size: 1.2rem;
  line-height: 1.8;
  margin-bottom: 2rem;
`;

const ServicesGrid = styled.div`
  @media (min-width: 1024px) {
    flex: 2;
  }

  display: grid;
  grid-template-columns: 1fr;
  gap: 1.5rem;
  
  @media (min-width: 640px) {
    grid-template-columns: repeat(2, 1fr);
  }
  
  @media (min-width: 1154px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

export default function ServicesContainer() {
  return (   
    <Container>
      <ContentWrapper>
        <TextContent>
          <Title
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Get The Quality Service You Deserve
          </Title>
          <Subtitle
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            With over a decade of experience, I specialize in creating beautiful, 
            long-lasting styles that enhance your natural beauty. Each service is 
            personally crafted to match your unique style and preferences.
          </Subtitle>
        </TextContent>

        <ServicesGrid>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <ServiceCard
              icon={<GiComb />}
              title="Expert Styling"
              description="I create stunning braided and crochet styles tailored to your preferences."
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <ServiceCard
              icon={<GiHairStrands />}
              title="Hair Maintenance"
              description="I'll help you maintain and style your locs with expert care."
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <ServiceCard
              icon={<FaBrush />}
              title="Crochet Styling"
              description="Beautiful crochet styles installed with precision and care."
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <ServiceCard
              icon={<FaLeaf />}
              title="Natural Hair Care"
              description="I use quality products to protect and nourish your natural hair."
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            viewport={{ once: true }}
          >
            <ServiceCard
              icon={<FaSmile />}
              title="Kids' Styles"
              description="Gentle, patient styling services for your little ones."
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            viewport={{ once: true }}
          >
            <ServiceCard
              icon={<FaUser />}
              title="Personal Consultations"
              description="Let's discuss your vision and create your perfect style."
            />
          </motion.div>
        </ServicesGrid>
      </ContentWrapper>
    </Container>
  );
}
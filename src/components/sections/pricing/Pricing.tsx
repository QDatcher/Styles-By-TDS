"use client";

import React from 'react';
import styled from 'styled-components';
import { colors } from '../../../styles/colors';
import { motion } from 'framer-motion';

const PricingSection = styled.section`
  background-color: ${colors.black};
  padding: 6rem 2rem;
  position: relative;
  z-index: 10;
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

const Header = styled.div`
  text-align: center;
  margin-bottom: 4rem;
`;

const Title = styled(motion.h2)`
  color: ${colors.gold};
  font-size: 3rem;
  margin-bottom: 1rem;
  font-family: Caslon;
`;

const Subtitle = styled(motion.p)`
  color: white;
  font-size: 1.2rem;
  max-width: 600px;
  margin: 0 auto;
  line-height: 1.6;
`;

const PricingGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  gap: 2rem;
  margin-bottom: 3rem;
  
  @media (min-width: 640px) {
    grid-template-columns: repeat(2, 1fr);
  }
  
  @media (min-width: 1030px) {
    grid-template-columns: repeat(4, 1fr);
  }
`;

const PricingCard = styled(motion.div)`
  background: rgba(255, 255, 255, 0.05);
  border: 2px solid ${colors.teal};
  border-radius: 12px;
  padding: 2rem;
  text-align: center;
  transition: transform 0.3s ease;
  width: 100%;

  &:hover {
    transform: translateY(-5px);
  }
`;

const ServiceTitle = styled.h3`
  color: ${colors.gold};
  font-size: 1.5rem;
  margin-bottom: 1rem;
  font-family: 'DancingScript';
`;

const Price = styled.p`
  color: white;
  font-size: 1.8rem;
  font-weight: bold;
  margin-bottom: 1.5rem;
`;

const CTAContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  align-items: center;
  margin-top: 3rem;

  @media (min-width: 640px) {
    flex-direction: row;
    justify-content: center;
  }
`;

const Button = styled.a`
  display: inline-block;
  padding: 1rem 2rem;
  border-radius: 50px;
  font-weight: bold;
  text-align: center;
  transition: all 0.3s ease;
  cursor: pointer;
`;

const PrimaryButton = styled(Button)`
  background-color: ${colors.gold};
  color: ${colors.black};
  
  &:hover {
    background-color: ${colors.teal};
    transform: translateY(-2px);
  }
`;

const SecondaryButton = styled(Button)`
  background-color: transparent;
  color: ${colors.gold};
  border: 2px solid ${colors.gold};
  
  &:hover {
    background-color: ${colors.gold};
    color: ${colors.black};
    transform: translateY(-2px);
  }
`;

export default function Pricing() {
  return (
    <PricingSection>
      <Container>
        <Header>
          <Title
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Pricing
          </Title>
          <Subtitle
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Experience personalized hair care with my signature services. 
            Each style is crafted with attention to detail and customized to your unique preferences.
          </Subtitle>
        </Header>

        <PricingGrid>
          <PricingCard
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <ServiceTitle>Braids/Cornrows</ServiceTitle>
            <Price>$40 & up</Price>
            <p style={{ color: colors.teal }}>Your natural hair, expertly braided</p>
          </PricingCard>

          <PricingCard
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <ServiceTitle>Braids/Cornrows</ServiceTitle>
            <Price>$100 & up</Price>
            <p style={{ color: colors.teal }}>Extensions included for fuller styles</p>
          </PricingCard>

          <PricingCard
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <ServiceTitle>Crochet Styles</ServiceTitle>
            <Price>$60 & up</Price>
            <p style={{ color: colors.teal }}>Professional Installation</p>
          </PricingCard>

          <PricingCard
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <ServiceTitle>Loc Retwist</ServiceTitle>
            <Price>$90 & up</Price>
            <p style={{ color: colors.teal }}>Maintain your locs with care</p>
          </PricingCard>
        </PricingGrid>

        <CTAContainer>
          <PrimaryButton href="/book">Book Appointment</PrimaryButton>
          <SecondaryButton href="https://www.instagram.com/styles_by_tds/">Contact for Special Requests</SecondaryButton>
        </CTAContainer>
      </Container>
    </PricingSection>
  );
}

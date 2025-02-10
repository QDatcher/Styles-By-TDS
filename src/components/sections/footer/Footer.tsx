"use client";

import React from 'react';
import styled from 'styled-components';
import { colors } from '@/styles/colors';
import Link from 'next/link';
import Image from 'next/image';
import { FaInstagram, FaEnvelope } from 'react-icons/fa';

const FooterContainer = styled.footer`
  background-color: ${colors.black};
  padding: 2rem 2rem 1rem;
  color: ${colors.teal};
  position: relative;
  z-index: 10;
`;

const FooterContent = styled.div`
  max-width: 1400px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;
  align-items: center;
  
  @media (min-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

const LogoSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  
  @media (min-width: 768px) {
    align-items: flex-start;
  }
`;

const BookingSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.5rem;
  text-align: center;
`;

const BookingText = styled.h3`
  color: ${colors.gold};
  font-size: 1.8rem;
  font-family: var(--font-geist-sans);
  margin-bottom: 0.5rem;
`;

const BookButton = styled(Link)`
  background-color: ${colors.gold};
  color: ${colors.black};
  padding: 1rem 2rem;
  border-radius: 50px;
  text-decoration: none;
  font-weight: bold;
  font-size: 1.1rem;
  transition: all 0.3s ease;
  
  &:hover {
    background-color: ${colors.teal};
    transform: translateY(-2px);
  }
`;

const ContactSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  
  @media (min-width: 768px) {
    align-items: flex-end;
  }
`;

const ContactTitle = styled.h3`
  color: ${colors.gold};
  margin-bottom: 1rem;
  text-align: center;
  
  @media (min-width: 768px) {
    text-align: right;
  }
`;

const EmailText = styled.p`
  color: ${colors.teal};
  margin-top: 0.5rem;
`;

const Copyright = styled.div`
  text-align: center;
  margin-top: 3rem;
  padding-top: 2rem;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  font-size: 0.9rem;
  color: ${colors.teal};
`;

const PoweredBy = styled.a`
  color: ${colors.gold};
  text-decoration: none;
  transition: color 0.3s ease;
  
  &:hover {
    color: ${colors.teal};
  }
`;

const SocialLink = styled.a`
  color: ${colors.teal};
  font-size: 1.5rem;
  transition: color 0.3s ease;
  
  &:hover {
    color: ${colors.gold};
  }
`;

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <FooterContainer>
      <FooterContent>
        <LogoSection>
          <Image
            src="/TDS.png"
            alt="Styles By TDS Logo"
            width={150}
            height={150}
            style={{ marginBottom: '1rem' }}
          />
        </LogoSection>

        <BookingSection>
          <BookingText>Let&apos;s Get You Booked</BookingText>
          <BookButton href="/book">Book Now</BookButton>
        </BookingSection>

        <ContactSection>
          <ContactTitle>Have a Question? <br /> Get In Touch With Me</ContactTitle>
          <EmailText>stylesbytds@gmail.com</EmailText>
          <div style={{ display: 'flex', gap: '1rem', marginTop: '0.5rem' }}>
            <SocialLink 
              href="https://www.instagram.com/styles_by_tds/" 
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram />
            </SocialLink>
            <SocialLink 
              href="mailto:stylesbytds@gmail.com"
            >
              <FaEnvelope />
            </SocialLink>
          </div>
        </ContactSection>
      </FooterContent>

      <Copyright>
        © {currentYear} Styles By TDS. All rights reserved. <br />
        Powered by{' '}
        <PoweredBy 
          href="https://qdatcher.com" 
          target="_blank" 
          rel="noopener noreferrer"
        >
          Quentin Datcher
        </PoweredBy>
      </Copyright>
    </FooterContainer>
  );
}

"use client";

import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { colors } from '../../../styles/colors';

const NavbarContainer = styled.nav<{ isScrolled: boolean }>`
  position: fixed;
  top: 0;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
  background-color: ${({ isScrolled }) => (isScrolled ? colors.teal : 'transparent')};
  transition: background-color 0.3s ease;
  z-index: 1000;
`;

const Logo = styled.div`
  font-size: 1.5rem;
  font-weight: bold;
  color: ${colors.gold};
`;

const NavLinks = styled.div`
  display: flex;
  gap: 20px;
`;

const NavLink = styled.a`
  color: ${colors.gold};
  text-decoration: none;
  font-size: 1rem;
  &:hover {
    text-decoration: underline;
  }
`;

const BookButton = styled.button`
  background-color: ${colors.gold};
  color: ${colors.black};
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
  font-size: 1rem;
  &:hover {
    background-color: ${colors.teal};
    color: ${colors.gold};
  }
`;

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <NavbarContainer isScrolled={isScrolled}>
      <Logo>Salon Logo</Logo>
      <NavLinks>
        <NavLink href="#about">About</NavLink>
        <NavLink href="#services">Services</NavLink>
        <NavLink href="#gallery">Gallery</NavLink>
      </NavLinks>
      <BookButton>Book Now</BookButton>
    </NavbarContainer>
  );
}
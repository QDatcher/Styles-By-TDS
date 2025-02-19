"use client";

import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { colors } from '../../../styles/colors';
import Link from 'next/link';

const NavbarContainer = styled.nav<{ $isScrolled: boolean }>`
  position: fixed;
  top: 0;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
  background-color: ${({ $isScrolled }) => ($isScrolled ? colors.teal : 'transparent')};
  transition: background-color 0.3s ease;
  z-index: 1000;
`;

const Logo = styled.div`
  font-family: 'DancingScript';
  font-size: 1.7rem;
  font-weight: 700;
  color: ${colors.gold};
`;

const NavLinks = styled.div`
  display: flex;
  gap: 20px;

  @media (max-width: 768px) {
    display: none;
  }
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

  @media (max-width: 768px) {
    display: none;
  }
`;

const HamburgerButton = styled.button`
  display: none;
  background: none;
  border: none;
  cursor: pointer;
  padding: 10px;
  color: ${colors.gold};
  font-size: 1.5rem;

  @media (max-width: 768px) {
    display: block;
  }
`;

const MobileNav = styled.div<{ $isOpen: boolean }>`
  position: fixed;
  top: 0;
  right: ${({ $isOpen }) => ($isOpen ? '0' : '-100%')};
  width: 70%;
  height: 100vh;
  background-color: ${colors.black};
  padding: 20px;
  transition: right 0.3s ease;
  z-index: 1001;
  display: flex;
  flex-direction: column;
`;

const MobileNavHeader = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-bottom: 40px;
`;

const CloseButton = styled.button`
  background: none;
  border: none;
  color: ${colors.gold};
  font-size: 1.5rem;
  cursor: pointer;
  padding: 10px;
`;

const MobileNavLinks = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  align-items: center;
  margin-top: 40px;
`;

const MobileNavLink = styled(NavLink)`
  font-size: 1.2rem;
`;

const MobileBookButton = styled(BookButton)`
  display: block;
  width: 80%;
  margin: auto auto 40px auto;
`;

const Overlay = styled.div<{ $isOpen: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
  display: ${({ $isOpen }) => ($isOpen ? 'block' : 'none')};
  z-index: 1000;
`;

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMobileNav = () => {
    setIsMobileNavOpen(!isMobileNavOpen);
    document.body.style.overflow = !isMobileNavOpen ? 'hidden' : 'auto';
  };

  const closeMobileNav = () => {
    setIsMobileNavOpen(false);
    document.body.style.overflow = 'auto';
  };

  return (
    <>
      <NavbarContainer $isScrolled={isScrolled}>
        <Link href="/">
          <Logo>
            Styles By TDS
          </Logo>
        </Link>
        <NavLinks>
          <NavLink href="/about">About</NavLink>
          <NavLink href="/gallery">Gallery</NavLink>
        </NavLinks>
        <BookButton><Link href="https://www.instagram.com/styles_by_tds/">Book Now</Link></BookButton>
        <HamburgerButton onClick={toggleMobileNav}>☰</HamburgerButton>
      </NavbarContainer>

      <Overlay $isOpen={isMobileNavOpen} onClick={closeMobileNav} />
      
      <MobileNav $isOpen={isMobileNavOpen}>
        <MobileNavHeader>
          <CloseButton onClick={closeMobileNav}>×</CloseButton>
        </MobileNavHeader>
        <MobileNavLinks>
          <MobileNavLink href="/about" onClick={closeMobileNav}>About</MobileNavLink>
          <MobileNavLink href="/gallery" onClick={closeMobileNav}>Gallery</MobileNavLink>
        </MobileNavLinks>
        <MobileBookButton onClick={closeMobileNav}>Book Now</MobileBookButton>
      </MobileNav>
    </>
  );
}
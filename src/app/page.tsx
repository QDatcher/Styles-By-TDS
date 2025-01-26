'use client';
import Hero from '../components/Hero';
import Services from '../components/sections/services/Services';
import Gallery from '../components/sections/gallery/Gallery';
import { useState, useEffect } from 'react';

export default function Home() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  return (
    <div>
      <Hero scrollY={scrollY} />
      <Services />
      <Gallery />
    </div>
  );
}
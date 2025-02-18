'use client';
import Hero from '../components/hero/Hero';
// import Hero2 from '../components/hero/Hero2';
import Services from '../components/sections/services/Services';
import { useState, useEffect } from 'react';
import Testimonials from '@/components/Testimonials/Testimonials';
import Pricing from '@/components/sections/pricing/Pricing';

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
      {/* <Hero2 scrollY={scrollY} /> */}
      <Services />
      <Pricing />
      <Testimonials />
    </div>
  );
}
"use client";

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { colors } from '../styles/colors';
interface Hero {
  scrollY: number;
  videoSrc?: string;
  fallbackImageSrc?: string;
}

const Hero = ({ 
  scrollY, 
  videoSrc = '/background.mp4',
  fallbackImageSrc = '/images/Frateli-Visual-Centerpiece.jpg' 
}: MainVisualProps) => {
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);
  const [parallaxStyle, setParallaxStyle] = useState({});
  const [contentParallaxStyle, setContentParallaxStyle] = useState({});

  useEffect(() => {
    const updateParallaxStyles = () => {
      setParallaxStyle({
        transform: `translateY(${window.innerWidth > 1024 ? scrollY * 0.5 : scrollY * 0.3}px)`
      });
      
      setContentParallaxStyle({
        transform: `translateY(${window.innerWidth > 1024 ? -scrollY *.2 : -scrollY * 0.1}px)`
      });
    };

    updateParallaxStyles();
    window.addEventListener('resize', updateParallaxStyles);

    return () => window.removeEventListener('resize', updateParallaxStyles);
  }, [scrollY]);

  useEffect(() => {
    const video = document.createElement('video');
    video.preload = 'auto';
    video.src = videoSrc;
    
    const handleLoad = () => setIsVideoLoaded(true);
    const handleError = () => setIsVideoLoaded(false);
    
    video.addEventListener('loadeddata', handleLoad);
    video.addEventListener('error', handleError);
    
    return () => {
      video.removeEventListener('loadeddata', handleLoad);
      video.removeEventListener('error', handleError);
    };
  }, [videoSrc]);

  return (
    <section 
      className="relative w-full min-h-[100svh] lg:h-screen overflow-hidden"
      style={parallaxStyle}
      aria-label="Welcome to Styles By TDS"
    >
      {isVideoLoaded ? (
        <video
          autoPlay
          muted
          loop
          playsInline
          poster={fallbackImageSrc}
          aria-hidden="true"
          className="absolute top-0 left-0 w-full h-full object-cover z-0"
        >
          <source src={videoSrc} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      ) : (
        <Image
          src={fallbackImageSrc}
          alt="Styles By TDS Salon Ambiance"
          priority
          layout="fill"
          objectFit="cover"
          className="z-0"
        />
      )}
      
      <div className="absolute inset-0 bg-black opacity-60 lg:opacity-50 z-10"></div>
      
      <div
        className="relative z-20 h-full flex flex-col items-center justify-center px-4 mt-64 lg:mt-0"
        style={contentParallaxStyle}
      >
        <div className="text-center max-w-xl translate-y-12 lg:translate-y-0" role="banner">
          <div className="mb-3">
            <Image
              src="/TDS.png"
              alt="Styles By TDS Logo"
              width={280}
              height={130}
              className="w-auto h-auto max-w-[160px] sm:max-w-[200px] md:max-w-[220px] lg:max-w-[280px] mx-auto"
            />
          </div>
          
          <h1 className="text-white text-base sm:text-lg md:text-lg font-light mb-2 leading-relaxed">
            Experience the best in hair styling and extensions in the DMV
          </h1>
          
          <p className="text-white text-sm sm:text-base mb-4 text-center">
            410 Van Dorn St. Alexandria, VA 22304
          </p>
          
          <div className="flex justify-center w-full">
            <Link 
              href="/order" 
              className="w-32 sm:w-36 px-4 sm:px-6 py-2 bg-transparent border-2 border-white 
                text-white font-bold rounded text-xs sm:text-sm hover:border-customGold hover:bg-customGold  
                transition duration-300 text-center touch-manipulation active:bg-white/90 
                active:text-black active:scale-[0.98]"
            >
              Book An Appointment
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
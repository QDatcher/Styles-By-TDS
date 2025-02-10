import React from 'react';
import ServicesContainer from './ServicesContainer';
import Specialize from './Specialize';


const ServicesSection = () => {
  return (
      <section className="py-16 bg-black relative z-10">
       
        <Specialize />
        <ServicesContainer />
      </section>
  );
};

export default ServicesSection;
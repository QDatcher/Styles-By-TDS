import React from 'react';
import ServiceCard from './ServiceCard';
import { FaCut, FaPalette, FaBrush, FaSpa, FaLeaf, FaGem, FaSmile, FaUser } from 'react-icons/fa'; // Example icons
// import { colors } from '@/utils/colors';
const ServicesSection = () => {
  return (
    <section className="py-16 bg-customTeal">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-customGold mb-2">Our Services</h2>
        <p className="text-lg text-black">Get The Quality Treatment You Deserve</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 px-10">
        <ServiceCard
          icon={<FaCut />}
          title="Haircut"
          description="Professional haircut services tailored to your style."
        />
        <ServiceCard
          icon={<FaPalette />}
          title="Coloring"
          description="Expert coloring services to give you a fresh new look."
        />
        <ServiceCard
          icon={<FaBrush />}
          title="Styling"
          description="Get styled by our top professionals for any occasion."
        />
        <ServiceCard
          icon={<FaSpa />}
          title="Spa Treatment"
          description="Relax and rejuvenate with our spa services."
        />
        <ServiceCard
          icon={<FaLeaf />}
          title="Organic Products"
          description="Experience the best with our organic product line."
        />
        <ServiceCard
          icon={<FaGem />}
          title="Luxury Packages"
          description="Indulge in our exclusive luxury packages."
        />
        <ServiceCard
          icon={<FaSmile />}
          title="Customer Care"
          description="We prioritize your satisfaction with top-notch service."
        />
        <ServiceCard
          icon={<FaUser />}
          title="Personal Consultation"
          description="Get personalized advice from our expert stylists."
        />
      </div>
    </section>
  );
};

export default ServicesSection;
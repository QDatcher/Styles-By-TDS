import React from 'react';
import Slider from 'react-slick';
import TestimonialCard from './TestimonialCard';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import styled from 'styled-components';
import { colors } from '@/styles/colors';
import { motion } from 'framer-motion';

const TestimonialsSection = styled.section`
  padding: 6rem 2rem;
  background-color: white;
  position: relative;
  z-index: 10;
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

const Title = styled.h2`
  text-align: center;
  color: ${colors.gold};
  font-size: 3rem;
  margin-bottom: 1rem;
  font-family: Caslon;
`;

const Subtitle = styled.p`
  text-align: center;
  color: ${colors.teal};
  font-size: 1.2rem;
  margin-bottom: 3rem;
  font-family: var(--font-geist-sans);
`;

const StyledSlider = styled(Slider)`
  .slick-track {
    display: flex !important;
    gap: 1.5rem;
    padding: 1rem 0;
  }

  .slick-slide {
    height: inherit !important;
    > div {
      height: 100%;
      padding: 0 0.5rem;
    }
  }

  .slick-dots li button:before {
    color: ${colors.gold};
  }

  .slick-dots li.slick-active button:before {
    color: ${colors.teal};
  }
`;

const Testimonials = () => {
  const testimonials = [
    {
      photo: '/images/Tenia.png',
      name: 'Tenia Askew',
      testimonial: 'This is an amazing service!',
      author: 'Tenia Askew',
    },
    {
      photo: '/images/stylesbytds-jenette-front.jpg',
      name: 'Jennete Askew',
      testimonial: 'I loved the experience!',
      author: 'Jennete Askew',
    },
    {
      photo: '/images/stylesbytds-kid2-crochet.jpg',
      name: 'Tiffany Seaward',
      testimonial: 'My Daughter Loved It!',
      author: 'Tiffany Seaward',
    },

    // Add more testimonials as needed
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    autoplay: true,
    autoplaySpeed: 5000,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        }
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      }
    ]
  };

  return (
    <TestimonialsSection>
      <Container>
        <Title>Testimonials</Title>
        <Subtitle>See What My Clients Think</Subtitle>
        <StyledSlider {...settings}>
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
            >
              <TestimonialCard
                photo={testimonial.photo}
                name={testimonial.name}
                testimonial={testimonial.testimonial}
                author={testimonial.author}
              />
            </motion.div>
          ))}
        </StyledSlider>
      </Container>
    </TestimonialsSection>
  );
};

export default Testimonials;
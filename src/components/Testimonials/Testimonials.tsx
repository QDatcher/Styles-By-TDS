import React from 'react';
import Slider from 'react-slick';
import TestimonialCard from './TestimonialCard';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Testimonials = () => {
  const testimonials = [
    {
      photo: '/images/Tenia.png',
      name: 'Tenia Askew',
      testimonial: 'This is an amazing service!',
      author: 'Tenia Askew',
    },
    {
      photo: '/images/Jennete.png',
      name: 'Jennete Askew',
      testimonial: 'I loved the experience!',
      author: 'Jennete Askew',
    },
    {
      photo: '/images/girl.png',
      name: 'Tiffany Seaward',
      testimonial: 'I loved the experience!',
      author: 'Tiffany Seaward',
    },
    // Add more testimonials as needed
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <section className="py-16 bg-gray-100">
      <h2 className="text-3xl font-bold text-center mb-8">Testimonials</h2>
      <Slider {...settings}>
        {testimonials.map((testimonial, index) => (
          <TestimonialCard
            key={index}
            photo={testimonial.photo}
            name={testimonial.name}
            testimonial={testimonial.testimonial}
            author={testimonial.author}
          />
        ))}
      </Slider>
    </section>
  );
};

export default Testimonials;
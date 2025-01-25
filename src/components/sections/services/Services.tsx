"use client";
import styled from 'styled-components';
import { colors } from '../../../styles/colors';

const ServicesContainer = styled.div`
  padding: 50px 20px;
  text-align: center;
  background-color: ${colors.teal};
  color: ${colors.gold};
`;

const ServiceItem = styled.div`
  margin: 20px 0;
`;

export default function Services() {
  return (
    <ServicesContainer>
      <h2>Our Services</h2>
      <ServiceItem>Haircuts</ServiceItem>
      <ServiceItem>Coloring</ServiceItem>
      <ServiceItem>Styling</ServiceItem>
      <ServiceItem>Extensions</ServiceItem>
    </ServicesContainer>
  );
}
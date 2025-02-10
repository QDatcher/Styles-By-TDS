import React from 'react';
import styled from 'styled-components';
import { colors } from '@/styles/colors';

interface ServiceCardProps {
  icon: React.ReactNode; // You can use a React component for the icon
  title: string;
  description: string;
}

const Card = styled.div`
  background-color: rgba(255, 255, 255, 0.05);
  border: 2px solid ${colors.teal};
  border-radius: 12px;
  padding: 2rem;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-5px);
  }
`;

const IconWrapper = styled.div`
  color: ${colors.gold};
  font-size: 2.5rem;
  margin-bottom: 1rem;
`;

const Title = styled.h3`
  color: ${colors.gold};
  font-size: 1.5rem;
  margin-bottom: 1rem;
  font-family: 'CedarvilleCursive', cursive;
`;


const Description = styled.p`
  color: ${colors.teal};
  font-size: 1rem;
  line-height: 1.6;
  flex-grow: 1;
  display: flex;
  align-items: center;
`;

const ServiceCard: React.FC<ServiceCardProps> = ({ icon, title, description }) => {
  return (
    <Card>
      <IconWrapper>{icon}</IconWrapper>
      <Title>{title}</Title>
      <Description>{description}</Description>
    </Card>
  );
};

export default ServiceCard;
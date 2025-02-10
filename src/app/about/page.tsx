"use client";

import React from 'react';
import About from '@/components/sections/about/About';
import styled from 'styled-components';
import { colors } from '@/styles/colors';

const PageContainer = styled.div`
  min-height: 100vh;
  padding-top: 80px; // Space for navbar
  background-color: ${colors.black};
`;


export default function AboutPage() {
  return (
    <PageContainer>
      <About />
    </PageContainer>
  );
}
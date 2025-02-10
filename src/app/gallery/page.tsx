"use client";

import React from 'react';
import Gallery from '@/components/sections/gallery/Gallery';
import PageTransition from '@/components/transitions/PageTransition';
import styled from 'styled-components';
import { colors } from '@/styles/colors';

const GalleryContainer = styled.main`
  min-height: 100vh;
  background-color: ${colors.black};
  padding-top: 80px;
`;

const Header = styled.header`
  text-align: center;
  padding: 2rem 1rem;
  margin-bottom: 2rem;
`;

const Title = styled.h1`
  font-size: 3rem;
  color: ${colors.gold};
  margin-bottom: 1rem;
  font-family: 'Cedarville Cursive', cursive;
`;


export default function GalleryPage() {
  return (
    <PageTransition>
      <GalleryContainer>
        <Header>
          <Title className="important-font CedarvilleCursive">Gallery</Title>
        </Header>
        <Gallery />
      </GalleryContainer>
    </PageTransition>
  );
}
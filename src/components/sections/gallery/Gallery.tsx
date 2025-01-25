"use client";

import styled from 'styled-components';
import { colors } from '../../../styles/colors';

const GalleryContainer = styled.div`
  padding: 50px 20px;
  text-align: center;
  background-color: ${colors.black};
  color: ${colors.gold};
`;

const GalleryGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 20px;
`;

const GalleryItem = styled.img`
  width: 100%;
  height: auto;
  border-radius: 8px;
  border: 2px solid ${colors.teal};
`;

export default function Gallery() {
  return (
    <GalleryContainer>
      <h2>Our Gallery</h2>
      <GalleryGrid>
        <GalleryItem src="/path-to-image1.jpg" alt="Hairstyle 1" />
        <GalleryItem src="/path-to-image2.jpg" alt="Hairstyle 2" />
        <GalleryItem src="/path-to-image3.jpg" alt="Hairstyle 3" />
        {/* Add more images as needed */}
      </GalleryGrid>
    </GalleryContainer>
  );
}
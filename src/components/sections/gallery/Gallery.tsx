"use client";

import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Modal from 'react-modal';
import { useSwipeable } from 'react-swipeable';
import { colors } from '../../../styles/colors';
import { images } from '../../../data/imageUrl';

const PageContainer = styled.div`
  min-height: 100vh;
  background-color: ${colors.black};
  padding: 20px;
`;

const GalleryContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
  background-color: ${colors.black};
  border: 2px solid ${colors.teal};
  border-radius: 12px;
  overflow: hidden;
`;

const GalleryGrid = styled.div<{ $isLoading: boolean }>`

  display: ${props => props.$isLoading ? 'none' : 'grid'};
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  grid-auto-rows: 1px;
  gap: 12px;
  padding: 12px;
  opacity: ${props => props.$isLoading ? 0 : 1};
  transition: opacity 0.3s ease;
`;

const GalleryItem = styled.div`
  position: relative;
  overflow: hidden;
  border-radius: 8px;
  border: 2px solid ${colors.teal};
  transition: transform 0.3s ease;
  cursor: pointer;
  grid-row-end: span 15;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
    visibility: hidden;
    &.loaded {
      visibility: visible;
    }
  }

  &:nth-child(3n) {
    grid-row-end: span 20; // Reduced from 55
  }

  &:nth-child(5n) {
    grid-row-end: span 12; // Reduced from 35
  }
`;

const ModalImage = styled.img`
  max-width: 100%;
  height: auto;
  max-height: 60vh;
  border-radius: 8px;
`;

const ArrowButton = styled.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  font-size: 2rem;
  color: ${colors.gold};
  background: none;
  border: none;
  cursor: pointer;
  z-index: 1000;
  padding: 20px;
  transition: color 0.3s ease;

  &:hover {
    color: ${colors.teal};
  }
`;

const LeftArrow = styled(ArrowButton)`
  left: 10px;
`;

const RightArrow = styled(ArrowButton)`
  right: 10px;
`;

const ModalContent = styled.div`
  position: relative;
  top: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  gap: 20px;
  padding: 10px;
  z-index: 10000;
  margin: 1vh auto;
`;


const CloseButton = styled.button`
  margin: 0 auto;
  padding: 10px 20px;
  font-size: 1rem;
  color: ${colors.black};
  background-color: ${colors.gold};
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: all 0.3s ease;
  display: block;

  &:hover {
    background-color: ${colors.teal};
    color: ${colors.gold};
  }
`;

export default function Gallery() {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState<number | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [loadedImages, setLoadedImages] = useState<Set<number>>(new Set());

  useEffect(() => {
    // Prevent any content from showing initially
    setIsLoading(true);
    document.body.style.visibility = 'hidden';

    const imageLoadPromises = images.map((image, index) => {
      return new Promise((resolve) => {
        const img = new Image();
        img.src = image.src;
        img.onload = () => {
          setLoadedImages(prev => new Set(prev).add(index));
          resolve(null);
        };
      });
    });

    Promise.all(imageLoadPromises).then(() => {
      setIsLoading(false);
      document.body.style.visibility = 'visible';
    });

    return () => {
      setLoadedImages(new Set());
      document.body.style.visibility = 'visible';
    };
  }, []);

  const openModal = (index: number) => {
    setCurrentIndex(index);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
    setCurrentIndex(null);
  };

  const nextImage = () => {
    if (currentIndex !== null) {
      setCurrentIndex((currentIndex + 1) % images.length);
    }
  };

  const prevImage = () => {
    if (currentIndex !== null) {
      setCurrentIndex((currentIndex - 1 + images.length) % images.length);
    }
  };

  const handlers = useSwipeable({
    onSwipedLeft: nextImage,
    onSwipedRight: prevImage,
    trackMouse: true,
  });

  return (
    <PageContainer>
      <GalleryContainer>
        <GalleryGrid $isLoading={isLoading}>
          {images.map((image, index) => (
            <GalleryItem key={index} onClick={() => openModal(index)}>
              <img 
                src={image.src} 
                alt={image.alt}
                className={loadedImages.has(index) ? 'loaded' : ''}
              />
            </GalleryItem>
          ))}
        </GalleryGrid>
        <Modal
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          contentLabel="Image Modal"
          style={{
            overlay: {
              backgroundColor: 'rgba(0, 0, 0, 0.75)',
              zIndex: 9999,
            },
            content: {
              top: '50%',
              left: '50%',
              right: 'auto',
              bottom: 'auto',
              marginRight: '-50%',
              transform: 'translate(-50%, -50%)',
              backgroundColor: colors.black,
              border: `2px solid ${colors.teal}`,
              borderRadius: '8px',
              padding: '20px',
              overflow: 'hidden',
              width: '40%',
              position: 'relative',
              zIndex: 10000,
            },
          }}
        >
          {currentIndex !== null && (
            <ModalContent {...handlers}>
              <ModalImage src={images[currentIndex].src} alt={images[currentIndex].alt} />
              <CloseButton onClick={closeModal}>Close</CloseButton>
              <LeftArrow onClick={prevImage}>&#10094;</LeftArrow>
              <RightArrow onClick={nextImage}>&#10095;</RightArrow>
            </ModalContent>
          )}
        </Modal>
      </GalleryContainer>
    </PageContainer>
  );
}
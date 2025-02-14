"use client";

import { useState, useEffect } from "react";
import { Geist, Geist_Mono } from "next/font/google";
import Navbar from "./sections/navbar/Navbar";
import Footer from "./sections/footer/Footer";
import StyledComponentsRegistry from '../lib/registry';
import { AnimatePresence } from "framer-motion";
import { colors } from "@/styles/colors";
import styled from "styled-components";
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});
const LoadingOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: ${colors.black};
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9999;
  transition: opacity 0.5s ease-in-out;
`;

const LoadingContent = styled.div`
  text-align: center;
  color: ${colors.gold};
`;

const LoadingSpinner = styled.div`
  border: 4px solid ${colors.teal};
  border-top: 4px solid ${colors.gold};
  border-radius: 50%;
  width: 40px;
  height: 40px;
  margin: 0 auto 1rem;
  animation: spin 1s linear infinite;

  @keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }
`;
    

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(false);

    // Load Zapier chat widget script
    const script = document.createElement('script');
    script.type = 'module';
    script.src = 'https://interfaces.zapier.com/assets/web-components/zapier-interfaces/zapier-interfaces.esm.js';
    script.async = true;
    document.head.appendChild(script);

    // Add chatbot element
    const chatbotElement = document.createElement('zapier-interfaces-chatbot-embed');
    chatbotElement.setAttribute('is-popup', 'true');
    chatbotElement.setAttribute('chatbot-id', 'cm6ytxc2s005bgjlogo3ygtuz');
    document.body.appendChild(chatbotElement);

    return () => {
      // Cleanup
      const existingScript = document.head.querySelector('script[src*="zapier-interfaces"]');
      const existingChatbot = document.querySelector('zapier-interfaces-chatbot-embed');
      if (existingScript) document.head.removeChild(existingScript);
      if (existingChatbot) document.body.removeChild(existingChatbot);
    };
  }, []);

  return (
    <div className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      style={{ visibility: isLoading ? 'hidden' : 'visible' }}
    >
      <StyledComponentsRegistry>
        {isLoading && (
          <LoadingOverlay>
            <LoadingContent>
              <LoadingSpinner />
              <h2 className="text-2xl font-semibold">Styles By TDS</h2>
            </LoadingContent>
          </LoadingOverlay>
        )}
        <Navbar />
        <AnimatePresence mode="wait">
          {children}
        </AnimatePresence>
        <Footer />
      </StyledComponentsRegistry>
    </div>
  );
} 
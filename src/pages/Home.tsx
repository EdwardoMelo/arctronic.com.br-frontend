import React from 'react';
import { Box } from '@mui/material';
import HomeSection from '../components/sections/HomeSection';
import ServicesSection from '../components/sections/ServicesSection';
import ContactSection from '../components/sections/ContactSection';
import AboutSection from '../components/sections/AboutSection';

const Home: React.FC = () => {
  return (
    <Box>
      <HomeSection />
      <AboutSection />
      <ServicesSection />
      {/* <PortfolioSection /> */}
      <ContactSection />
    </Box>
  );
};

export default Home;
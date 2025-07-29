import React from 'react';
import { Box, Container, Typography } from '@mui/material';
import AboutSection from '../components/sections/AboutSection';

const About: React.FC = () => {
  return (
    <Box
      sx={{
        py: 8,
        minHeight: "calc(100vh - 200px)",
        background: "#181818",
      }}
    >
      <AboutSection />
    </Box>
  );
};

export default About;
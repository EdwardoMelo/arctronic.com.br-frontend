import React from 'react';
import { Box, Container, Typography } from '@mui/material';
import ServicesSection from '../components/sections/ServicesSection';

const Services: React.FC = () => {
  return (
    <Box sx={{ py: 8, minHeight: 'calc(100vh - 200px)', background: '#181818' }}>
      <ServicesSection  />
    </Box>
  );
};

export default Services;
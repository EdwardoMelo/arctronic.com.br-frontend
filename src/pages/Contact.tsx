import React from 'react';
import { Box, Container, Typography } from '@mui/material';
import ContactSection from '../components/sections/ContactSection';

const Contact: React.FC = () => {
  return (
    <Box sx={{ py: 8, minHeight: 'calc(100vh - 200px)', background: '#181818' }}>
      <ContactSection />
    </Box>
  );
};

export default Contact;
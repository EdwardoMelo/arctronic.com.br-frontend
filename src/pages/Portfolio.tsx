import React from 'react';
import { Box, Container, Typography } from '@mui/material';

const Portfolio: React.FC = () => {
  return (
    <Box sx={{ py: 8, minHeight: 'calc(100vh - 200px)' }}>
      <Container maxWidth="lg">
        <Typography variant="h3" component="h1" gutterBottom>
          Portfolio Page
        </Typography>
        <Typography variant="body1" color="text.secondary" paragraph>
          This is the dedicated Portfolio page. Showcase projects, case studies,
          and work samples in a gallery or grid layout.
        </Typography>
        
        <Box sx={{ mt: 6, p: 4, border: 1, borderColor: 'divider', borderStyle: 'dashed' }}>
          <Typography variant="h6" gutterBottom>
            Content Wrapper
          </Typography>
          <Typography variant="body2" color="text.secondary">
            This wrapper Box can contain project galleries, case study cards, 
            testimonials, or any other portfolio-specific components.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Portfolio;
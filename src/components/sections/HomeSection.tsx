import React from 'react';
import { Box, Button, Container, Stack, Typography } from '@mui/material';
import GlassMorphismCard from '../ui/GlassMorphismCard';
import GrayButton from '../ui/GrayButton';
import Hero from '../../assets/hero.jpg';
import { whatsAppLink } from '../../utils';
import { useNavigate } from 'react-router-dom';

const HomeSection: React.FC = () => {

  const navigate = useNavigate();

  return (
    <Box
      sx={{
        py: 8,
        minHeight: "400px",
        backgroundImage: `url(${Hero})`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundSize: "cover",
        position: "relative"
        //  background: "linear-gradient(to bottom, black 50%, #181818 90%)",
      }}
    >
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundColor: "rgba(30,0, 0, 0.4)",
          zIndex: 0,
        }}
      />
      <Container
        maxWidth="lg"
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "start",
          gap: 2,
        }}
      >
        <Box sx={{ zIndex: 1 }}>
          <Typography
            variant="h1"
            sx={{
              fontSize: { xs: "3rem", sm: "4rem", md: "8rem" },
            }}
            fontWeight="semibold"
            color="white"
            gutterBottom
          >
            ARCTRONIC
          </Typography>
          <Typography sx={{ fontSize: { xs: "1.2rem", sm: "1.5rem", md: "2rem" } }} color="white">
            Um novo conceito de eletrônica para o seu mundo
          </Typography>
          <Box
            sx={{
              mt: 4,
              p: 2,
              borderColor: "divider",
              display: "flex",
              flexDirection: "column",
              gap: 6,
              alignItems: "start",
            }}
          >
            {/* Botoes */}
            <Stack direction={{ xs: "column", sm: "row" }} gap={2}>
              {" "}
              <GrayButton onClick={() => navigate('/services')} variant="contained">Cases de suceso</GrayButton>
              <Button
                sx={{
                  background: "rgba(255, 255, 255, 0.1)",
                  backdropFilter: "blur(5px)",
                  borderRadius: "0px",
                  boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
                  color: "white",
                  fontFamily: "Roboto",
                  "&:hover": {
                    background: "rgba(255, 255, 255, 0.2)",
                    borderRadius: "16px",
                    scale: "1.1",
                    transition: "all 0.3s ease-in-out",
                    color: 'orange',
                    letterSpacing: '1px'
                  },
                }}
                onClick={() => {
                  window.open(whatsAppLink);
                }}
                variant="contained"
              >
                Faça seu orçamento
              </Button>
            </Stack>
            {/* Conteúdo adicional */}
            <Stack direction="column" gap={4} >
              <GlassMorphismCard
                styles={{ borderRadius: "3rem", width: { xs: "250px", sm: "500px" }, height: { xs: "50px", sm: "60px" } }}
                text="Eletrônica inteligente para soluções reais"
                fontSize="14px"
              />
              <Stack direction={{ xs: "column", md: "row" }} gap={1}>
                <GlassMorphismCard
                  styles={{ borderRadius: "3rem", width: { xs: "250px", sm: "400px" }, height: { xs: "50px", sm: "60px", ml: 2 } }}
                  text="Personalização Total do Projeto"
                  fontSize="14px"
                />
                <GlassMorphismCard
                  styles={{ borderRadius: "3rem" }}
                  text="Garantia e confiabilidade"
                  width="250px"
                  height="40px"
                  fontSize="14px"
                />
              </Stack>
            </Stack>
          </Box>
        </Box>

        {/* <Box>
          <GlassMorphismCard
            text="Dê vida ao seu projeto"
            width="300px"
            height="60px"
            styles={{borderRadius: '0px', fontWeight: 'bold'}}
          />
        </Box> */}
      </Container>
    </Box>
  );
};

export default HomeSection;
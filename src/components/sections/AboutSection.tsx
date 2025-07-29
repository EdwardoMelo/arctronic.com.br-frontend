import React from 'react';
import { Box, Container, Typography } from '@mui/material';
import aboutImage from '../../assets/about.jpg';
import CircleIcon from "@mui/icons-material/Circle";
import { motion } from 'framer-motion';


const services = [
  "Levantamento das necessidades, sob a especificação do cliente",
  "Definição do produto",
  "Cronograma de atividades",
  "Desenvolvimento do hardware",
  "Criação de estrutura de produto",
  "Desenvolvimento de software (firmware)",
  "Montagem e testes de protótipos",
  "Projetos adequados às normas de qualidade",
  "Desenvolvimento e adequação de layouts e PCIs",
  "Desenvolvimento de jigas de teste",
  "Geração de documentação de projeto",
  "Utilização de tecnologia de ponta priorizando a qualidade do produto a custos adequados",
];
const AboutSection: React.FC = () => (
  <Box
    sx={{
      py: 8,
      minHeight: {
        xs: "1400px",
        sm: "1200px",
        md: "900px",
        lg: "600px",
      },
      background: "#181818",
    }}
  >
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.8,
        ease: "easeInOut",
        delayChildren: 0.5,
        staggerChildren: 0.5,
      }}
    >
      <Container maxWidth="lg">
        <Typography
          textAlign="center"
          color="white"
          fontWeight="600"
          sx={{ fontSize: { xs: "1.5rem", md: "3rem" } }}
          gutterBottom
        >
          Inovação que entrega resultados
        </Typography>

        <Box
          sx={{
            mt: 4,
            position: "relative",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Box
            component="img"
            src={aboutImage}
            alt="Imagem de fundo"
            sx={{
              zIndex: 0,
              height: "100%",
              widt: "100%",
              objectFit: "cover",
              borderRadius: 4,
              border: "1px solid rgba(255, 255, 255, 0.2)",
            }}
          />
          <Box
            sx={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              backgroundColor: "rgba(0, 0, 0, 0)",
              zIndex: 10,
              borderRadius: 4,
            }}
          ></Box>

          <Box
            sx={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              minHeight: "600px",
              display: "flex",
              flexWrap: "wrap",
              gap: 4,
              backgroundImage: `url(${aboutImage})`,
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
              backgroundSize: "cover",
              alignItems: "center",
              justifyContent: "space-between",
              padding: {
                xs: 1,
                md: 4,
              },
              zIndex: 20,
            }}
          >
            <Box
              sx={{
                width: {
                  xs: "100%",
                  md: "50%",
                },
                background: "rgba(0, 0, 0, 0.5)",
                backdropFilter: "blur(10px)",
                borderRadius: "16px",
                border: "1px solid rgba(255, 255, 255, 0.2)",
                boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
                padding: {
                  xs: 1,
                  md: 2,
                },
                display: "flex",
                alignItems: "center",
                jusitifyContent: "center",
              }}
            >
              <Typography fontSize="1.2rem" color="white">
                Fundada em 2003, a ArcTronic é especializada no desenvolvimento
                de projetos eletrônicos microcontrolados, atuando de forma
                integrada em hardware e software. Também oferece serviços de
                consultoria em Engenharia Eletrônica. Com uma equipe de
                engenheiros que somam mais de 30 anos de experiência, a empresa
                se dedica a entregar soluções sob medida, com foco em atender
                rigorosamente às especificações técnicas e às expectativas de
                seus clientes.
              </Typography>
            </Box>

            <Box
              sx={{
                width: {
                  xs: "100%",
                  md: "40%",
                },
                background: "rgba(0, 0, 0, 0.5)",
                backdropFilter: "blur(10px)",
                borderRight: "1px solid orange",
                borderTop: "1px solid orange",
                boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
                padding: 4,
                display: "flex",
                flexDirection: "column",
                alignItems: "start",
                jusitifyContent: "center",
                position: "relative",
                gap: 2,
              }}
            >
              <CircleIcon
                sx={{
                  fontSize: "2rem",
                  color: "orange",
                  position: "absolute",
                  top: 0,
                  left: 0,
                  mt: -2,
                }}
              />
              <Typography
                fontSize="1.4rem"
                color="white"
                textAlign="left"
                fontWeight="semibold"
              >
                Engenharia e desenvolvimento de projetos eletrônicos em todas as
                etapas:
              </Typography>
              <Box
                component="ul"
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  gap: 1,
                  listStyle: "none",
                  padding: 0,
                }}
              >
                {services.map((item, index) => (
                  <Box
                    component="li"
                    key={index}
                    sx={{ display: "flex", alignItems: "center", gap: 1 }}
                  >
                    <CircleIcon sx={{ fontSize: "0.5rem", color: "white" }} />
                    <Typography variant="body2" fontSize='1rem' color="white" textAlign="left">
                      {item}
                    </Typography>
                  </Box>
                ))}
              </Box>
            </Box>
          </Box>
        </Box>
      </Container>
    </motion.div>
  </Box>
);

export default AboutSection;
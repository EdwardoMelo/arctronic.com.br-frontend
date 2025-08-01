import React from "react";
import { Box, Container, Typography, Grid } from "@mui/material";
import alarme from '../../assets/services/alarme.jpg'
import bluetooth from "../../assets/services/bluetooth.jpg";
import controle from "../../assets/services/controle.jpg";
import Ethernet from "../../assets/services/Ethernet.jpg";
import IoT from "../../assets/services/IOT.jpg";
import telemetria from "../../assets/services/telemetria.jpg";
import rastreamento from "../../assets/services/restramento.jpg";
import levantadorVidro from "../../assets/services/levantador_vidro.jpg";
import alarmeAutomotivo from "../../assets/services/alarme_automotivo.jpg";
import vendingMachine from "../../assets/services/vending_machine.jpg";
import holtekSemicond from "../../assets/brands/holtek-semiconductor-logo-png-transparent.png";
// import nordicSemiconductor from "../../assets/brands/nor";
import nxp from "../../assets/brands/nxp.png";
import siliconLabs from "../../assets/brands/Silicon_Labs_2015.svg.png";
import renesas from "../../assets/brands/renesas.png";
import stMicroelectroni from "../../assets/brands/st-microelectronics.svg";
import texasInstruments from "../../assets/brands/Texas-Instruments-Logo.png";
import { motion } from "framer-motion";


const brands = [
  holtekSemicond,
  // nordicSemiconductor,
  nxp,
  siliconLabs,
  renesas,
  stMicroelectroni,
  texasInstruments
];



const cards = [
  {
    title: "Sistemas de alarme",
    description: "Segurança e conforto",
    image: alarme,
  },
  {
    title: "Produtos com interface Bluetooth",
    description: "Conectividade sem fio",
    image: bluetooth,
  },
  {
    title: "Controles remotos personalizados",
    description: "Comandos personalizados",
    image: controle,
  },
  {
    title: "Produtos com interface Ethernet",
    description: "Conexão de alta velocidade",
    image: Ethernet,
  },
  {
    title: "Produtos de IoT",
    description: "Soluções inteligentes",
    image: IoT,
  },
  {
    title: "Produtos para telemetria (rádio, celular ou linha telefônica)",
    description: "Monitoramento em tempo real",
    image: telemetria,
  },
  {
    title: "Rastreador veicular",
    description: "Localização precisa",
    image: rastreamento,
  },
  {
    title: "Levantador de vidros para veículos",
    description: "Automação veicular",
    image: levantadorVidro,
  },
  {
    title: "Alarme automotivo (carros e motos)",
    description: "Segurança total",
    image: alarmeAutomotivo,
  },
  {
    title: "Central de controle para Vending Machines",
    description: "Controle eficiente",
    image: vendingMachine,
  },
];



const ServicesSection: React.FC = () => {
  return (
    <Box
      sx={{
        py: 8,
        minHeight: "400px",
        backgroundColor: "#1a1a1a",
        color: "white",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: 8,
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
            fontSize={{ xs: "2rem", md: "2rem" }}
            component="h2"
            gutterBottom
            sx={{ fontWeight: "bold" }}
          >
            Nossos serviços
          </Typography>
          <Typography
            gutterBottom
            sx={{ mb: 4, fontSize: { xs: "1.2rem", md: "1.5rem" } }}
          >
            Algumas das áreas em que já nos destacamos por nossa qualidade,
            experiência e inovação.
          </Typography>

          <Grid container spacing={4}>
            {cards.map((card, index) => (
              <Grid size={{ xs: 12, md: 4 }} key={index}>
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    background: "rgba(0, 0, 0, 0.5)",
                    backdropFilter: "blur(10px)",
                    border: "1px solid rgba(255, 255, 255, 0.2)",
                    boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
                    padding: 2,
                  }}
                >
                  <img
                    src={card.image}
                    alt={card.title}
                    style={{
                      width: "100%",
                      marginBottom: "1rem",
                    }}
                  />
                  <Typography
                    variant="h6"
                    gutterBottom
                    sx={{ fontWeight: "bold" }}
                  >
                    {card.title}
                  </Typography>
                  {/* <Typography variant="body1">{card.description}</Typography> */}
                </Box>
              </Grid>
            ))}
          </Grid>
        </Container>
      </motion.div>

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
        {" "}
        <Container sx={{display: "flex", flexDirection: "column", alignItems: "center", gap: 4}}>
          <Typography
            textAlign="center"
            gutterBottom
            sx={{ fontWeight: "bold", fontSize: { xs: "1.5rem", md: "2rem" } }}
          >
            Desenvolvemos com microcontroladores de diversos fabricantes
          </Typography>
          <Grid container spacing={4} sx={{ mt: 4 }}>
            {brands.map((brand, index) => (
              <Grid
                size={{ xs: 6, md: 2 }}
                key={index}
                sx={{
                  backgroundColor: "white",
                  borderRadius: "16px",
                  padding: 1,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <img
                  src={brand}
                  alt={brand}
                  style={{ width: "100%", marginBottom: "1rem" }}
                />
              </Grid>
            ))}
          </Grid>

          <Typography
            textAlign="center"
            gutterBottom
            sx={{ fontWeight: "bold", fontSize: { xs: "1.5rem", md: "1rem" } }}
          >
            Programação Bare Metal ou com RTOS (Zephyr, FreeRTOS, TI-RTOS)
          </Typography>
        </Container>
      </motion.div>
    </Box>
  );
};

export default ServicesSection;

import React from "react";
import {
  Box,
  Container,
  Typography,
  useTheme,
  useMediaQuery,
  CircularProgress,
  Button,
} from "@mui/material";
import contact from "../../assets/contact.jpg";
import { sendEmail } from "../../utils";
import GrayButton from "../ui/GrayButton";
import { motion } from "framer-motion";

const ContactSection: React.FC = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm")); // Breakpoint for mobile (< 600px)
  const isTablet = useMediaQuery(theme.breakpoints.between("sm", "md")); // Breakpoint for tablet (600px - 960px)
  const [message, setMessage] = React.useState("");
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [phone, setPhone] = React.useState("");
  const [subject, setSubject] = React.useState("");
  const [loading, setLoading] = React.useState(false);

  const handleSendMessage =  async (e : React.FormEvent ) => {
    e.preventDefault(); 
    setLoading(true);
    const responseStatus = await sendEmail(name, email, phone, subject, message);
    setLoading(false);
    if (responseStatus === 200) {
      alert("Mensagem enviada com sucesso!");
      setName("");
      setEmail("");
      setPhone("");
      setSubject("");
      setMessage("");
    }
  }
  return (
    <Box
      sx={{
        py: { xs: 4, sm: 6, md: 8 }, // Responsive padding
        minHeight: { xs: "300px", sm: "350px", md: "400px" }, // Smaller height on mobile
        position: "relative",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        backgroundImage: `url(${contact})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        gap: { xs: 2, sm: 3, md: 4 }, // Responsive gap
      }}
    >
      <Box
        sx={{
          backgroundImage:
            "linear-gradient(to right, #1a1a1a, rgba(0,0,0,0.5))",
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
        }}
      />
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
        <Typography
          variant={isMobile ? "h4" : isTablet ? "h3" : "h2"} // Responsive typography
          component="h2"
          gutterBottom
          sx={{ fontWeight: "bold", zIndex: 1, textAlign: "center" }}
          color="white"
        >
          Entre em contato
        </Typography>
        <Typography
          variant={isMobile ? "body1" : "h6"} // Smaller text on mobile
          color="white"
          gutterBottom
          sx={{ mb: { xs: 2, md: 4 }, zIndex: 1, textAlign: "center", px: 2 }}
        >
          Nossa equipe irá lhe retornar o mais breve possível, fique à vontade
          para solicitar um orçamento ou saber mais detalhes!
        </Typography>
        <Container maxWidth="lg" sx={{ zIndex: 1 }}>
          <Box
            sx={{
              display: "flex",
              flexDirection: { xs: "column", md: "row" }, // Stack vertically on mobile
              gap: { xs: 2, sm: 3, md: 4 }, // Responsive gap
              alignItems: "center",
              background: "rgba(0, 0, 0, 0.5)",
              backdropFilter: "blur(10px)",
              borderRadius: "16px",
              border: "1px solid rgba(255, 255, 255, 0.2)",
              boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
              padding: { xs: 2, sm: 3, md: 4 }, // Responsive padding
            }}
          >
            {loading && (
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  width: "100%",
                }}
              >
                <CircularProgress />
              </Box>
            )}
            {!loading && (
              <Box
                component="form"
                onSubmit={(e) => handleSendMessage(e)}
                autoComplete="off"
                sx={{
                  mt: { xs: 2, md: 3 },
                  width: "100%",
                  maxWidth: { xs: "100%", sm: 500, md: 600 }, // Responsive form width
                }}
              >
                <Box sx={{ mb: 2 }}>
                  <Typography variant="body1" color="white">
                    Nome
                  </Typography>
                  <input
                    type="text"
                    placeholder="Seu Nome"
                    required
                    onChange={(e) => setName(e.target.value)}
                    style={{
                      width: "100%",
                      padding: isMobile ? "8px" : "10px", // Smaller padding on mobile
                      borderRadius: "8px",
                      outline: "none",
                      fontSize: isMobile ? "0.9rem" : "1rem", // Responsive font size
                    }}
                  />
                </Box>
                <Box sx={{ mb: 2 }}>
                  <Typography variant="body1" color="white">
                    Email
                  </Typography>
                  <input
                    type="email"
                    required
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Seu Email"
                    style={{
                      width: "100%",
                      outline: "none",

                      padding: isMobile ? "8px" : "10px",
                      borderRadius: "8px",
                      border: "1px solid rgba(255, 255, 255, 0.3)",
                      fontSize: isMobile ? "0.9rem" : "1rem",
                    }}
                  />
                </Box>
                <Box sx={{ mb: 2 }}>
                  <Typography variant="body1" color="white">
                    Número para contato
                  </Typography>
                  <input
                    type="phone"
                    required
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="Seu Telefone"
                    style={{
                      width: "100%",
                      outline: "none",

                      padding: isMobile ? "8px" : "10px",
                      borderRadius: "8px",
                      border: "1px solid rgba(255, 255, 255, 0.3)",
                      fontSize: isMobile ? "0.9rem" : "1rem",
                    }}
                  />
                </Box>
                <Box sx={{ mb: 2 }}>
                  <Typography variant="body1" color="white">
                    Mensagem
                  </Typography>
                  <textarea
                    placeholder="Sua Mensagem"
                    required
                    onChange={(e) => setMessage(e.target.value)}
                    rows={isMobile ? 3 : 4} // Fewer rows on mobile
                    style={{
                      width: "100%",
                      outline: "none",

                      padding: isMobile ? "8px" : "10px",
                      borderRadius: "8px",
                      border: "1px solid rgba(255, 255, 255, 0.3)",
                      fontSize: isMobile ? "0.9rem" : "1rem",
                    }}
                  />
                </Box>
                <GrayButton type="submit">Enviar Mensagem</GrayButton>
              </Box>
            )}

            <Box sx={{ borderRadius: "16px", width: "100%" }}>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3454.7115501668086!2d-51.15722642465618!3d-30.016437874937658!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x951977a0bfe2198d%3A0x44966603aca39fe1!2sR.%20Dom%20Diogo%20de%20Souza%2C%20649%20-%20Cristo%20Redentor%2C%20Porto%20Alegre%20-%20RS%2C%2091350-000!5e0!3m2!1spt-BR!2sbr!4v1753642094242!5m2!1spt-BR!2sbr"
                width="100%" // Full width for responsiveness
                height={isMobile ? "250" : isTablet ? "350" : "450"} // Responsive height
                style={{ border: "0", borderRadius: "16px" }}
                loading="lazy"
              ></iframe>
            </Box>
          </Box>
        </Container>
      </motion.div>
    </Box>
  );
};

export default ContactSection;

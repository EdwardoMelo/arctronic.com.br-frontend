import React from "react";
import { Box, Container, Typography, Grid, Link } from "@mui/material";
import { address, contactNumber, email } from "../utils";
import { navigationItems } from "./Navbar";
import logo from "../assets/logo.png"
import blackLogo from '../assets/black-logo.png'
const Footer: React.FC = () => {
  return (
    <Box
      component="footer"
      sx={{
        py: 4,
        backgroundColor: "white",
        color: "#fff",
        borderTop: "1px solid rgba(255, 255, 255, 0.1)",
      }}
    >
      <Container maxWidth="lg">
        <Grid
          container
          spacing={4}
          justifyContent="space-between"
          alignItems="center"
        >
          {/* Logo Section */}
          <Grid
            size={{ xs: 12, md: 4 }}
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Box
              sx={{
                backgroundColor: "white",
                borderRadius: "50%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <img src={blackLogo} alt="Logo" style={{ maxWidth: "200px" }} />
            </Box>
            <Typography
              variant="h6"
              component="div"
              sx={{ fontWeight: "bold", letterSpacing: 1 }}
            >
              ARCTRONIC
            </Typography>
            <Typography variant="body2" sx={{ mt: 1, opacity: 0.7 }}>
              Um novo conceito de eletrônica para o seu mundo
            </Typography>
          </Grid>

          {/* Navigation Links */}
          <Grid size={{ xs: 12, md: 4 }}>
            <Typography
              variant="h6"
              gutterBottom
              sx={{ color: "black", fontWeight: "bold" }}
            >
              Navegação
            </Typography>
            {navigationItems.map((item) => (
              <Link
                key={item.label}
                href={item.path}
                color="inherit"
                underline="hover"
                sx={{ display: "block", my: 1, opacity: 0.9, color: "#1a1a1a", fontWeight: '600' }}
              >
                {item.label}
              </Link>
            ))}
          </Grid>

          {/* Contact Information */}
          <Grid size={{ xs: 12, md: 4 }}>
            <Typography variant="body2" sx={{ my: 1, color: "#1a1a1a" }}>
              <strong>Email:</strong> {email}
            </Typography>
            <Typography variant="body2" sx={{ my: 1, color: "#1a1a1a" }}>
              <strong>Endereço:</strong> {address}
            </Typography>
          </Grid>
        </Grid>

        {/* Footer Bottom */}
        <Box
          sx={{
            mt: 4,
            textAlign: "center",
            borderTop: "1px solid rgba(255, 255, 255, 0.1)",
            pt: 2,
          }}
        >
          <Typography variant="body2" sx={{ opacity: 0.6, color: "#1a1a1a" }}>
            © {new Date().getFullYear()} ARCTRONIC. Todos os direitos
            reservados.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;

import React, { useState } from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Box,
  useTheme,
  useMediaQuery,
  Stack,
} from '@mui/material';
import { Menu as MenuIcon } from '@mui/icons-material';
import { Link, useLocation } from 'react-router-dom';
import logo from "../assets/black-logo.png";
import { primaryBackground, primaryOrange } from '../utils';

export const navigationItems = [
  { label: 'Home', path: '/' },
  { label: 'Sobre nós', path: '/about' },
  { label: 'Serviços', path: '/services' },
  // { label: 'Portfolio', path: '/portfolio' },
  { label: 'Contato', path: '/contact' },
];

const Navbar: React.FC = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const location = useLocation();

  const handleDrawerToggle = () => {
    setDrawerOpen(!drawerOpen);
  };

  const drawer = (
    <Box sx={{ width: 250, backgroundColor: 'white', height: '100%' }} role="presentation" >
      <Box sx={{ display: 'flex', justifyContent: 'center', mt: 2 }}>
        <img src={logo} alt="Logo" style={{ maxWidth: '200px' }} />
      </Box>
      <List>
        {navigationItems.map((item) => (
          <ListItem key={item.label} disablePadding>
            <ListItemButton
              component={Link}
              to={item.path}
              onClick={handleDrawerToggle}
              selected={location.pathname === item.path}
            >
              <ListItemText sx={{letterSpacing: '1px', color: 'black', fontWeight: '600'}} primary={item.label} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <>
      <AppBar
        position="static"
        color="default"
        sx={{
          // backgroundColor: "#1a1a1a",
          background: "white",
          backdropFilter: "blur(2px)",
          borderRadius: "0px",
          position: "sticky",
          display: "flex",
          top: 0,
          zIndex: 100,
        }}
        elevation={1}
      >
        <Toolbar
          sx={{
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <Stack direction="row" alignItems="center">
            <img
              src={logo}
              alt="Logo"
              style={{ maxWidth: "60px", height: "60px" }}
            />
            <Typography
              variant="h6"
              component={Link}
              to="/"
              sx={{
                flexGrow: 1,
                textDecoration: "none",
                color: "white",
                fontWeight: "bold",
              }}
            >
              ARCTRONIC
            </Typography>
          </Stack>

          {isMobile ? (
            <IconButton
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ color: "white" }}
            >
              <MenuIcon />
            </IconButton>
          ) : (
            <Box sx={{ display: "flex", gap: 2 }}>
              {navigationItems.map((item) => (
                <Button
                  key={item.label}
                  component={Link}
                  to={item.path}
                  sx={{
                    letterSpacing: "1.5px",
                    border: "none",
                    color: "black",
                    borderRadius: "18px",
                    fontWeight: "600",
                    "&:hover": {
                      color: primaryOrange,
                      scale: "1.1",
                      letterSpacing: "1.5px",
                      borderRadius: "18px",
                      backgroundColor: primaryBackground,
                      transition: "all 0.3s ease-in-out",
                    },
                  }}
                  variant={
                    location.pathname === item.path ? "outlined" : "text"
                  }
                >
                  {item.label}
                </Button>
              ))}
            </Box>
          )}
        </Toolbar>
      </AppBar>

      <Drawer
        variant="temporary"
        anchor="right"
        open={drawerOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true,
        }}
      >
        {drawer}
      </Drawer>
    </>
  );
};

export default Navbar;
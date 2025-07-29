import React from "react";
import { Card, CardContent, Button, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";

const GlassCard = styled(Card)(({ theme }) => ({
  background: "rgba(255, 255, 255, 0.1)",
  backdropFilter: "blur(5px)",
  borderRadius: "16px",
  border: "1px solid rgba(255, 255, 255, 0.2)",
  boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
  color: "#fff",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  padding: theme.spacing(2),
}));

const OrangeButton = styled(Button)(({ theme }) => ({
  backgroundColor: "#f28c38",
  "&:hover": {
    backgroundColor: "#e67e22",
  },

  width: "40px",
  height: "40px",
  minWidth: "40px",
  borderRadius: "8px",
}));

interface props { 
  text?: string,
  width?: string
  height?: string
  fontSize?: string;
  styles? : any
}

const GlassMorphismCard = ({ text, width, height, fontSize, styles }: props) => {
  return (
    <GlassCard sx={{ width: width, height: height, ...styles  }}>
      <CardContent>
        <Typography sx={{ fontSize: fontSize, textAlign: "center" }}>{text}</Typography>
      </CardContent>
      <div>
        {/* <Button aria-label="up" style={{ color: "#fff" }}>
          ↑
        </Button> */}
        
      </div>
    </GlassCard>
  );
};

export default GlassMorphismCard;

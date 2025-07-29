import styled from "@emotion/styled";
import { Button } from "@mui/material";
import { primaryOrange } from "../../utils";

const GrayButton = styled(Button)(({ theme }) => ({
  backgroundColor: primaryOrange,
  color: "black",
  fontFamily: 'Roboto',
  fontWeight: 'bold',
  borderRadius: "20px",
  padding: "8px 16px",
  "&:hover": {
    backgroundColor: "orange",
    borderRadius: '0px',
    scale: '1.1',
    transition: 'all 0.3s ease-in-out',
    letterSpacing: '1px',
  },
  textTransform: "capitalize"
}));
export default GrayButton;
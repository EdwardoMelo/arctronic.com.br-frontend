import { Button, styled } from "@mui/material";

const OrangeButton = styled(Button)(({ theme }) => ({
  // backgroundColor: "#FB9906",
  backgroundColor: "#e67e22",

  color: "#000",
  borderRadius: "20px",
  padding: "8px 16px",
  marginLeft: theme.spacing(2),
  "&:hover": {
    backgroundColor: "#FB9906",
  },
  fontWeight: "bold",
}));

export default OrangeButton;
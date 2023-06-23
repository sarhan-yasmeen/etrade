import { createTheme } from "@mui/material";

export const theme = createTheme({
  // palette values for light mode
  palette: {
    primary: {
      main: "rgb(255, 73, 124)",
      contrastText: "rgb(248, 215, 217)",
    },
    secondary: {
      main: "rgb(120, 86, 255)",
      contrastText: "rgb(255, 255, 255)",
    },
  },
});

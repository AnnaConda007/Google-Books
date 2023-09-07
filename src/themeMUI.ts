import { createTheme } from "@mui/material/styles";

const themeMUI = createTheme({
  components: {
    MuiSelect: {
      styleOverrides: {
        root: {},
        select: {
          padding: "5px",
          backgroundColor: "white",
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          backgroundColor: "#f5f5f5",
        },
      },
    },
    MuiCardMedia: {
      styleOverrides: {
        root: {
          boxShadow: "3px 2px 15px ",
        },
      },
    },
  },
});

export default themeMUI;

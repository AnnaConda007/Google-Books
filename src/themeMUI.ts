import { createTheme } from '@mui/material/styles';

const themeMUI = createTheme({
  components: {
    MuiSelect: {
      styleOverrides: {
        root: {},
        select: {  
          padding: '5px',
          backgroundColor: "white", 
        }
      },
    },
  },
});

export default themeMUI;
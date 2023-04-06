import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { createTheme } from "@mui/material";

export const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    background: {
      default: '#000',
    },
    secondary: {
      main: '#19857b',
    },
    error: {
      main: '#f44336',
    }
  },
  components: {
    
  }
});
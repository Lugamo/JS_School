import { createMuiTheme } from '@material-ui/core/styles'; 

const dark = createMuiTheme({
  palette: {
    primary: {
      main: '#212121', // 282828
    },
    secondary: {
      main: '#ff0000',
    },
    /*
    background: {
      default: '#757575',
    },
    text: {
      primary: '#ffffff',
    }
    */
  },
  typography: { useNextVariants: true },
});

export default dark;
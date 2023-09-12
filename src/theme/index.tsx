import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
// import { orange, green, purple, blue, red, grey, blueGrey, deepOrange, amber } from '@mui/material/colors';
import { grey } from '@mui/material/colors';
import { useSelector , RootStateOrAny} from "react-redux";
import { PaletteOptions } from "@mui/material/styles/createPalette";

const darkPalette : PaletteOptions | undefined = {
  mode: 'dark',

  primary: {
    main: '#b82b2b'
    // main: '#44446E'
  },

  text: {
    primary: grey[200],
    // link: blue[400],
    // matchedValue : 'rgb(63 116 95)',
  },

//   card: {
//     queue: '#121212',
//     in_group: green[900],

//     matched: blue[900],
//     imported: green[900],
//     hold: deepOrange[900],
//     trash: red[900],
//     blocked: blueGrey[900],
//   },

//   buttons: {
//     join: blue[600],

//     // group buttons   
//     match: blue[600],
//     delete: grey[600],
//     leave: purple[600],
//     update: orange[600],

//     // common buttons
//     create: green[600],
//     hold: orange[600],
//     trash: red[600],
//   },

  background: {
    default: '#000',
    paper: '#121212'
  }
}

const lightPalette : PaletteOptions | undefined = {
    mode: 'light',

    primary: {
    //   main: '#b82b2b'
      main: '#44446E'
    },

    text: {
    //   link: blue[900],
    //   matchedValue : 'rgb(18, 224, 142)',
    },

    // card: {
    //   queue: 'aliceblue',
    //   in_group: green[500],

    //   matched: blue[400],
    //   imported: green[500],
    //   hold: amber[400],
    //   trash: red[400],
    //   blocked: blueGrey[400],
    // },

    // buttons: {
    //   join: blue[600],

    //   // group buttons   
    //   match: blue[600],
    //   delete: grey[600],
    //   leave: purple[600],
    //   update: orange[600],

    //   // common buttons
    //   create: green[600],
    //   hold: orange[600],
    //   trash: red[600],
    // },

    background: {
      default: '#fff',
      paper: 'aliceblue'
    },

    // typography: {
    //     fontFamily: [
    //       'DM Sans',
    //     ].join(','),
    //   },
}


export default function Theme({children} : any) {
  const isDarkMode = useSelector((state : RootStateOrAny) => state.themeReducer.isDarkMode)

  const palette = isDarkMode ? darkPalette : lightPalette;

//   palette.primary.main = primaryColor;

  const theme = createTheme({ palette })
    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            {children}
        </ThemeProvider>
    )
}
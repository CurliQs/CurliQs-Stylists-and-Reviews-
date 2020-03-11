import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core';
import {cyan, deepOrange, lightBlue, blueGrey, teal, amber} from '@material-ui/core/colors'
import * as serviceWorker from './serviceWorker';

const theme = createMuiTheme({
    palette: {
        primary: {
            main: cyan[300],
            light: cyan[100],
            dark: lightBlue[900],
        },
        secondary: {
            main: deepOrange[300], 
            light: deepOrange[100],
            dark: deepOrange.A400,
            contrastText: blueGrey[900]
            // (https://material-ui.com/customization/color/#color)
        }, 
        error: {
            main: deepOrange.A700,
            light: deepOrange.A400,
            dark: deepOrange.A700,
            
        },
        warning: {
            main: amber[300],
            light: amber[100],
            dark: amber[800],
        },
        success: {
            main: teal[500],
            light: teal[900],
            dark: teal[100],
        },
        
    },
    typography: {
        fontFamily: [
            'Pacifico', //headers
            'PT Serif', //sub headers
            'Josefin Sans', // sub header non san
            'Open Sans Condensed', // body
          'Roboto',
           'serif',
          'sans-serif',
          '"Apple Color Emoji"',
          '"Segoe UI Emoji"',
          '"Segoe UI Symbol"',
        ].join(','),
      }
})
const darkTheme = createMuiTheme({
    palette: {
        type: 'dark',
    }
})
ReactDOM.render(
    <MuiThemeProvider theme={theme} dark={darkTheme}>
    <App />
    </MuiThemeProvider>,
    document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

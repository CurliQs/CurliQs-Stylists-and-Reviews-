import React from "react";
import ReactDOM from "react-dom";

import store from "./redux/store";
import { Provider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";

import App from "./App";

import { MuiThemeProvider, createMuiTheme } from "@material-ui/core";
import {
	cyan,
	deepOrange,
	lightBlue,
	blueGrey,
	teal,
	amber
} from "@material-ui/core/colors";

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
            dark: deepOrange.A200,
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


const rootElement = document.getElementById("root");

ReactDOM.render(
	<Provider store={store}>
		<Router>
			<MuiThemeProvider theme={theme}>
				<App />
			</MuiThemeProvider>
			,
		</Router>
	</Provider>,
	rootElement
);

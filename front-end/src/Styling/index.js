import { createMuiTheme, withStyles, makeStyles, ThemeProvider } from '@material-ui/core/styles';
import {Button, Card } from '@material-ui/core';

export const secondaryCTA = createMuiTheme({
  MuiButton: {
    // Name of the rule
    text: {
      fontFamily: 'Open Sans Condensed',
      background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
      borderRadius: 3,
      border: 0,
      color: 'white',
      height: 48,
      padding: '0 30px',
      boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    },
  },
})(Button)
//orange gradient button
export const primaryCTA = createMuiTheme({
  MuiButton: {
    // Name of the rule
    text: {
      fontFamily: 'Open Sans Condensed',
      background: 'linear-gradient(45deg, #4DD0E1 90%, #01579B 70%)',
      borderRadius: 3,
      border: 0,
      color: 'white',
      height: 48,
      padding: '0 30px',
      boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    },
  },
})(Button)
// teal gradient button

export const productCard = (theme) => withStyles({
    root: {
        margin: 'auto',
        borderRadius: spacing(2), // 16px
        transition: '0.3s',
        boxShadow: '0px 14px 80px rgba(64, 93, 128, 0.2)',
        position: 'relative',
        maxWidth: 500,
        marginLeft: 'auto',
        overflow: 'initial',
        background: '#ffffff',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        paddingBottom: spacing(2),
        [breakpoints.up('md')]: {
          flexDirection: 'row',
          flexWrap: 'wrap',
          paddingTop: spacing(2),
        },
      },
      media: {
        width: '88%',
        marginLeft: 'auto',
        marginRight: 'auto',
        marginTop: spacing(-3),
        height: 0,
        paddingBottom: '48%',
        borderRadius: spacing(2),
        backgroundColor: '#fff',
        position: 'relative',
        [breakpoints.up('md')]: {
          width: '100%',
          marginLeft: spacing(-3),
          marginTop: 0,
          transform: 'translateX(-8px)',
        },
        '&:after': {
          content: '" "',
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          backgroundImage: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
          borderRadius: spacing(2), // 16
          opacity: 0.5,
        },
      },
      content: {
        padding: 24,
      },
      cta: {
        marginTop: 24,
        textTransform: 'initial',
      },
    })(Card);
// orange primary card setup

export const portfolioCard =(theme) => withStyles({
  root: {
      margin: 'auto',
      borderRadius: spacing(2), // 16px
      transition: '0.3s',
      boxShadow: '0px 14px 80px rgba(64, 93, 128, 0.2)',
      position: 'relative',
      maxWidth: 500,
      marginLeft: 'auto',
      overflow: 'initial',
      background: '#ffffff',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      paddingBottom: spacing(2),
      [breakpoints.up('md')]: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        paddingTop: spacing(2),
      },
    },
    media: {
      width: '88%',
      marginLeft: 'auto',
      marginRight: 'auto',
      marginTop: spacing(-3),
      height: 0,
      paddingBottom: '48%',
      borderRadius: spacing(2),
      backgroundColor: '#fff',
      position: 'relative',
      [breakpoints.up('md')]: {
        width: '100%',
        marginLeft: spacing(-3),
        marginTop: 0,
        transform: 'translateX(-8px)',
      },
      '&:after': {
        content: '" "',
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        backgroundImage: 'linear-gradient(45deg, #4DD0E1 90%, #01579B 70%)',
        borderRadius: spacing(2), // 16
        opacity: 0.5,
      },
    },
    content: {
      padding: 24,
    },
    cta: {
      marginTop: 24,
      textTransform: 'initial',
    },
  })(Card);

  // teal stylist style port card




import React from 'react'
import { Avatar, Button, CssBaseline, Container, TextField, FormControlLabel, Checkbox, Link, CardMedia, Card, Grid, Typography, CardActions, CardContent } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import ExNav from './ExNav'
import CN from '../../img/CurlNames.jpg'
   
const useStyles = makeStyles(theme => ({
  
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
    
  }));

const useStyles = makeStyles(theme => ({
  icon: {
    marginRight: theme.spacing(2)
  },
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6)
  },
  heroButtons: {
    marginTop: theme.spacing(4)
  },
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8)
  },
  card: {
    height: "100%",
    display: "flex",
    flexDirection: "column"
  },
  cardMedia: {
    paddingTop: "56.25%" // 16:9
  },
  cardContent: {
    flexGrow: 1
  }
}));

const Marketing = () => {
  const classes = useStyles();
  return (
    <div>
      <ExNav />
      <CssBaseline />
      <main>
        <div className={classes.heroContent}>
<<<<<<< HEAD
          <Container maxWidth="md">
            <Typography
              component="h1"
              variant="h2"
              align="center"
              color="textPrimary"
              gutterBottom
            >
              Craft your coils ... Suit your Style
=======
        <Typography component="h1" variant="h6" color="inherit" align='center'className={classes.title}>
            <img src={CN}/>
          </Typography>

          <Container>
            <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
            Craft your Coils ... 
            Suit your Style
>>>>>>> 796566bb50e838dcc40feabec1675657d9f20b4f
            </Typography>
            <Typography
              variant="h5"
              align="center"
              color="textSecondary"
              paragraph
            >
              Here at Curli~Q Style'n'Reviews we care about every aspect of your
              coils. We know how hard it is to remember the perfect order of
              product to get the lucious bouncin' style. We know knowledgeable
              stylists are the key to maintinin' that do! We can help you with
              all of it!
            </Typography>
            <div className={classes.heroButtons}>
              <Grid container spacing={2} justify="center">
                <Grid item>
                  
                </Grid>
              </Grid>
            </div>
          </Container>
        </div>
        <Container className={classes.cardGrid} maxWidth="md">
<<<<<<< HEAD
          <Grid container spacing={4}>
            <Grid item xs={12} sm={6} md={4}>
              <Card className={classes.card}>
                <CardContent className={classes.cardContent}>
                  <Typography gutterBottom variant="h5" component="h2">
                    Meet Our Stylists
                  </Typography>
                  <Typography>
                    They are near you * They know your curl type * They have
                    products for you to use
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <Card>
                <CardContent className={classes.cardContent}>
                  <Typography gutterBottom variant="h5" component="h2">
                    Become a Culi~Q
                  </Typography>
                  <Typography>
                    Care for your hair * Share the products that are working *
                    Save Products to try next time
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
=======
          <Grid container spacing={6} align="center">
              <Grid item  xs={12} sm={6} md={6}>
                <Card className={classes.card}>

                  <CardContent className={classes.cardContent}>
                    <Typography gutterBottom variant="h5" component="h2">
                      Meet Our Stylists
                    </Typography>
                    <Typography>
                      <li> They are near you</li>
                      <li> They know your curl type</li>
                      <li> They have products for you to use</li> 
                    </Typography>
                    <Button variant="contained" color="secondary">
                    Become a Curli Sylist
                    </Button>
                  </CardContent>
                </Card>
              </Grid>
              <Grid item  xs={12} sm={6} md={6}>
              <Card>
                <CardContent className={classes.cardContent}>
                    <Typography gutterBottom variant="h5" component="h2">
                      Become a Culi~Q
                    </Typography>
                    <Typography>
                      <li>Care for your hair</li>
                      <li>Share the products that are working</li>
                      <li>Save products to try next time</li>
                    </Typography>
                    <Button variant="contained" color="primary">
                      Become a Curli~Q
                      </Button>
                  </CardContent>
                </Card>
              </Grid>
>>>>>>> 796566bb50e838dcc40feabec1675657d9f20b4f
          </Grid>
        </Container>
      </main>
    </div>
  );
};

export default Marketing;

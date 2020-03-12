import React from 'react'
import { Avatar, Button, CssBaseline, Container, TextField, FormControlLabel, Checkbox, Link, CardMedia, Card, Grid, Typography, CardActions, CardContent } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import ExNav from './ExNav'
import CN from '../../img/CurlNames.jpg'
   
const useStyles = makeStyles(theme => ({
    icon: {
      marginRight: theme.spacing(2),
    },
    heroContent: {
      backgroundColor: theme.palette.background.paper,
      padding: theme.spacing(8, 0, 6),
    },
    heroButtons: {
      marginTop: theme.spacing(4),
    },
    cardGrid: {
      paddingTop: theme.spacing(8),
      paddingBottom: theme.spacing(8),
    },
    card: {
      height: '100%',
      display: 'flex',
      flexDirection: 'column',
    },
    cardMedia: {
      paddingTop: '56.25%', // 16:9
    },
    cardContent: {
      flexGrow: 1,
    },
    
  }));


const Marketing = () => {

    const classes = useStyles();
    return (
        <div>
                <ExNav/>
            <CssBaseline />
      <main>
        {/* Hero unit */}
        <div className={classes.heroContent}>
          <Container maxWidth="md">
            <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
            Craft your coils ... 
            Suit your Style
            </Typography>
            <Typography variant="h5" align="center" color="textSecondary" paragraph>
              Here at Curli~Q Style'n'Reviews we care about every aspect of your coils. We know how hard it is to remember the perfect order of product to get the lucious bouncin' style. We know knowledgeable stylists are the key to maintinin' that do! We can help you with all of it!
            </Typography>
            <div className={classes.heroButtons}>
              <Grid container spacing={2} justify="center">
                <Grid item>
                  <Button variant="contained" color="secondary">
                    Become A Curli~Q
                  </Button>
                </Grid>
              </Grid>
            </div>
          </Container>
        </div>
        <Container className={classes.cardGrid} maxWidth="md">
          <Grid container spacing={4}>
              <Grid item  xs={12} sm={6} md={4}>
                <Card className={classes.card}>

                  <CardContent className={classes.cardContent}>
                    <Typography gutterBottom variant="h5" component="h2">
                      Meet Our Stylists
                    </Typography>
                    <Typography>
                    They are near you * They know your curl type * They have products for you to use
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
              <Grid item  xs={12} sm={6} md={4}>
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
          </Grid>
        </Container>
      </main>
      </div>
    )
}

export default Marketing

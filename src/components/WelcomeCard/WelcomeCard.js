import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import ImageAvatars from '../Avatar/Avatar';
import Rating from '../Rating/Rating'

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    width: '36%',
    height: '22%',
    position: "absolute",
    top: "14%",
    right: "2%",
    
  },
  details: {
    display: 'flex',
    flexDirection: 'column',
  },
  content: {
    flex: '1 0 auto',
  },
  cover: {
    width: 151,
  },
  controls: {
    display: 'flex',
    alignItems: 'center',
    paddingLeft: theme.spacing(1),
    paddingBottom: theme.spacing(1),
  },
  playIcon: {
    height: 38,
    width: 38,
  },
  color:{
    color: '#fff'
  }
}));

export default function WelcomeCard() {
  const classes = useStyles();
  const theme = useTheme();

  return (
    <Card className={classes.root} style={{backgroundImage:"linear-gradient(110.3deg, rgb(255, 222, 122) 20.2%, rgb(255, 230, 153) 41.5%, rgb(255, 225, 133) 85.9%)"}}>
      <div className={classes.details}>
        <CardContent className={classes.content}>
          <Typography component="h5" variant="h5">
           Welcome Your Dashboard
          </Typography>
          <Typography variant="subtitle1" color="textSecondary">
            Macy Miller
          </Typography>
          <ImageAvatars/>
          <Rating/>
        </CardContent>
        <br />
        <br />
        
      </div>
      <CardMedia
        className={classes.cover}
        image="/static/images/cards/live-from-space.jpg"
        title="Live from space album cover"
      />
    </Card>
  );
}

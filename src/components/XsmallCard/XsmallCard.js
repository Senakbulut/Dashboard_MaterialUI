import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import SkipPreviousIcon from '@material-ui/icons/SkipPrevious';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import SkipNextIcon from '@material-ui/icons/SkipNext';
import { useEffect, useState } from 'react';
import PauseCircleOutlineOutlinedIcon from '@material-ui/icons/PauseCircleOutlineOutlined';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    width: 345,
    position: "absolute",
    bottom: "1.5%",
    left: "31%",
    marginLeft: "2%",
    backgroundImage:"linear-gradient(to right, rgb(28, 216, 210), rgb(147, 237, 199))"
  },
  details: {
    display: 'flex',
    flexDirection: 'column',
  },
  content: {
    flex: '1 0 auto',
  },
  cover: {
    marginLeft:"8%",
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
const useAudio = url => {
  url="https://firebasestorage.googleapis.com/v0/b/dashboard-materialui.appspot.com/o/Coldplay-Paradise.mp3?alt=media&token=272d8211-e70b-46f9-9c36-f00d65970f8d";
  const [audio] = useState(new Audio(url));
  const [playing, setPlaying] = useState(false);

  const toggle = () => setPlaying(!playing);

  useEffect(() => {
      playing ? audio.play() : audio.pause();
    },
    [playing]
  );

  useEffect(() => {
    audio.addEventListener('ended', () => setPlaying(false));
    return () => {
      audio.removeEventListener('ended', () => setPlaying(false));
    };
  }, []);

  return [playing, toggle];
};

const XsmallCard = ({url}) => {
  const classes = useStyles();
  const theme = useTheme();
  const [playing, toggle] = useAudio(url);

  return (
    <div>
       
    <Card className={classes.root}>
      <div className={classes.details}>
        <CardContent className={classes.content}>
          <Typography component="h5" variant="h5" className={classes.color} >
           Paradise
          </Typography>
          <br />
          <Typography variant="subtitle1"className={classes.color} >
           Coldplay
          </Typography>
        </CardContent>
        <div className={classes.controls}>
          <IconButton aria-label="previous">
            {theme.direction === 'rtl' ? <SkipNextIcon /> : <SkipPreviousIcon />}
          </IconButton>
          <IconButton aria-label="play/pause" onClick={toggle}>
          {playing ? <PauseCircleOutlineOutlinedIcon className={classes.playIcon}  /> : <PlayArrowIcon className={classes.playIcon}  />}
            
          </IconButton>
          <IconButton aria-label="next">
            {theme.direction === 'rtl' ? <SkipPreviousIcon /> : <SkipNextIcon />}
          </IconButton>
        </div>
    
      </div>
      <CardMedia
        className={classes.cover}
        image="images/paradise.jpeg"
        title="Live from space album cover"
      />
    </Card>
    </div>
   
  );
}
export default XsmallCard;
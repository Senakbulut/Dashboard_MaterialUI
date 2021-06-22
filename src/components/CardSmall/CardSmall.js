import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import CardLarge from '../CardLarge/CardLarge';
import './CardSmall.css'
import List from '../List/List'
import CalendarR from '../Calendar/CalendarR';

const useStyles = makeStyles({
  root: {
    maxWidth: "28%",
    maxHeight: "31%",
    marginLeft: "2%",
    
  },
  media: {
    height: 100,
  },
});

export default function CardSmall() {
  const classes = useStyles();

  return (
      <div  >
          <br />
          <br />
      <Card className={classes.root} >
      
       <CardActionArea>
       
       <List/>
      </CardActionArea>
  
      
    </Card>
    <br />
    <Card className={classes.root}>
      <br />
       <CalendarR/>
       <br />
    </Card>
    <CardLarge className="LCard"/>
    
      </div>
    
    
  );
}

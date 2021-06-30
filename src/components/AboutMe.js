import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import { CloudDownload } from '@material-ui/icons';

import MyAvatar from './MyAvatar'
import MyCV from '../images/CV_Rizwan.pdf' 

const useStyles = makeStyles({
  root: {
    maxWidth: 975,
  },
  media: {
    height: 180,
    display:'flex',
    alignItems:'center',
    justifyContent:'center',
  },
  cardActions: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  cvDownload: {
    width: '200px',
  },
  topPanel: {
      display: 'flex',
  }
});

export default function AboutMe() {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      
        
            {/* <MyAvatar/> */}
        
        
       
        {/* <Typography component={'span'} gutterBottom variant="h5">
          Rizwan Mushtaq
        </Typography>
        <Typography component={'span'} gutterBottom variant="h6">
          Front End Web Developer
        </Typography>
        <Typography component={'span'} variant="body2" color="textSecondary">
          Passionate about developing a successfull Web Application
        </Typography>
        
      
        <Typography component={'span'}>
            I am front end Web Developer based in Munich Germany.jjjjjjjjjjjjjjjjjjjjjjjjjjj
        </Typography>

      
        <Button 
        size="small" 
        color="primary" 
        variant="contained"
        className={classes.cvDownload}
        startIcon={<CloudDownload />}
        onClick={()=>window.open(MyCV, '_blank')}>
          CV
        </Button> */}

    </Card>
  );
}
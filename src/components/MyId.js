import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import MyAvatar from './MyAvatar'


const useStyles = makeStyles({
  root: {
    maxWidth: 245,
  },
  media: {
    height: 180,
    display:'flex',
    alignItems:'center',
    justifyContent:'center',
  },
});

export default function MyId() {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>

        {/* <CardMedia
          className={classes.media}
          image={MyPic}
          title="Rizwan"
        /> */}
        <div className={classes.media}>
            <MyAvatar/>
        </div>
        
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Rizwan Mushtaq
          </Typography>
          <Typography gutterBottom variant="h6" component="h4">
            Front End Web Developer
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Passionate about developing a successfull Web Application
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          CV
        </Button>
        <Button size="small" color="primary">
          Learn More
        </Button>
      </CardActions>
    </Card>
  );
}
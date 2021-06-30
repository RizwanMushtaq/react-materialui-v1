import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import clsx from 'clsx';
import IconButton from '@material-ui/core/IconButton';
import { red } from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Collapse from '@material-ui/core/Collapse';

import printMyTweetImage from '../images/printmytweet.png'

const useStyles = makeStyles( (theme) => ({
  root: {
    maxWidth: 975,
    marginBottom: 16,
  },
  media: {
    height: 200,
  },
  title: {
    margin: 0,
    padding: 0,
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },

}));

export default function MyProject() {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card className={classes.root}>

        <Typography gutterBottom variant="h5" component="h2">
            Print My Tweet App
        </Typography>
        <CardActions className={classes.title}>
        <Button size="small" color="primary" onClick={()=>window.open('https://rizwanmushtaq.github.io/PrintMyTweet/', '_blank')}>
            Live Demo
        </Button>
        <Button size="small" color="primary" onClick={()=>window.open('https://github.com/RizwanMushtaq/PrintMyTweet/tree/main', '_blank')}>
            Code
        </Button>
        </CardActions>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={printMyTweetImage}
          title="Print My Tweet App Img"
        />
        {/* <CardContent> */}
          {/* <Typography gutterBottom variant="h5" component="h2">
            Lizard
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
            across all continents except Antarctica
            
          </Typography> */}


      <CardActions disableSpacing className={classes.title}>
        {/* <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton> */}
        <IconButton
          className={clsx(classes.expand, {
            [classes.expandOpen]: expanded,
          })}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </IconButton>
      </CardActions>


        <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>Techinical Details:</Typography>
          <Typography paragraph>App Features</Typography>
          <Typography paragraph>Credits</Typography>
        </CardContent>
        </Collapse> 

        {/* </CardContent> */}
      </CardActionArea>
      
    </Card>
  );
}
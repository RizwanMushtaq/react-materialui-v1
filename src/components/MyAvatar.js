import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';

import MyPic from '../images/my-pic.png'

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    '& > *': {
      margin: theme.spacing(1),
    },
  },
  small: {
    width: theme.spacing(3),
    height: theme.spacing(3),
  },
  large: {
    width: theme.spacing(18),
    height: theme.spacing(18),
  },
}));

export default function ImageAvatars() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      {/* <Avatar alt="Remy Sharp" src={MyPic} className={classes.small} />
      <Avatar alt="Remy Sharp" src={MyPic} /> */}
      <Avatar alt="Remy Sharp" src={MyPic} className={classes.large} />
    </div>
  );
}
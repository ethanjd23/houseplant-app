import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ImageCard from './HomeImageCard';
import places from '../static/plants';
import useWindowPosition from '../hook/useWindowPosition';
const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    [theme.breakpoints.down('md')]: {
      flexDirection: 'column',
    },
  },
}));
export default function HomePlantInfo () {
  const classes = useStyles();
  const checked = useWindowPosition('header');
  return (
    <div className={classes.root} id="place-to-visit">
      <ImageCard place={places[1]} checked={checked} />
      <ImageCard place={places[0]} checked={checked} />
    </div>
  );
}

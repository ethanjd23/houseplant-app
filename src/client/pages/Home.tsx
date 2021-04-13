import React from 'react';
import { RouteComponentProps, Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import HomeHeader from '../components/HomeHeader';
import HomeImageCard from '../components/HomeImageCard';
import HomePlantInfo from '../components/HomePlantInfo';
import Navbar from '../components/Navbar';
import useWindowPosition from '../hook/useWindowPosition';

const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundImage: `url('/assets/homepic3.jpg')`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    [theme.breakpoints.down('md')]: {
      flexDirection: 'column',
    },

  },
}));

const Home: React.FunctionComponent = (props) => {
  const checked = useWindowPosition('header');
  const classes = useStyles();

  return (
    <>
      <Navbar />
    <div className={classes.root}>
      <HomeHeader />
      <HomePlantInfo />      
    </div>
    </>
  )
}

interface HomeProps extends RouteComponentProps {
  userid: number;
}

export default Home;

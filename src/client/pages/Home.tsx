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
    [theme.breakpoints.down('md')]: {
      flexDirection: 'column',
    },
  },
}));

const Home: React.FunctionComponent = (props) => {
  const checked = useWindowPosition('header');
  const classes = useStyles();

  const [places, setPlaces] = React.useState([
    {
      title: 'Chinese Money Plant',
      description:
        " The Chinese Money Plant is a rare and very hard-to-find indoor plant native to southern China. Known for its round pancake-shaped green leaves, the Chinese Money Plant is very popular in modern decor and has become a staple for well-designed interiors.",
      imageUrl: '/assets/ChineseMoneyPlant.jpg',
      time: 1500,
    },
    {
      title: 'Calthea Orbifolia',
      description:
        'Calathea Orbifolia is an indoor tropical plant known for its stunning striped, olive green leaves that can grow up to six inches wide. The distinguishing features of the thick foliage are patterned leaves with strong light green stripes and a more rounded shape than other Calatheas. This house plant has broad foliage with a rippled effect that gives it an exotic look. It does exceptionally well in low light areas and in order to prevent scorching leaves, it should not be placed in direct sunlight. Calathea orbifolia brings personality and color to any space indoors.',
      imageUrl: '/assets/Calthea-Orbifolia-.jpg',
      time: 1500,
    },
  ]);

  return (
    <>
      <Navbar />
      <HomeHeader />
      <div className={classes.root} id="place-to-visit">

        <HomeImageCard place={places[1]} checked={checked} />
        <HomeImageCard place={places[0]} checked={checked} />
      </div>
      <HomePlantInfo />
      <div className='home'>
        <h1>Home</h1>
      </div>
    </>
  )
}

interface HomeProps extends RouteComponentProps {
  userid: number;
}

export default Home;

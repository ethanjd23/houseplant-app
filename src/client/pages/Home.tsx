import React from 'react';
import { RouteComponentProps, Link } from 'react-router-dom';
import HomeHeader from '../components/HomeHeader';
import HomeImageCard from '../components/HomeImageCard';
import HomePlantInfo from '../components/HomePlantInfo';
import Navbar from '../components/Navbar';



const Home: React.FunctionComponent = (props) => {
  return (
    <>
    <Navbar />
    <HomeHeader />
    <HomeImageCard />
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

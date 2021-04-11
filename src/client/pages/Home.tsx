import React from 'react';
import { RouteComponentProps, Link } from 'react-router-dom';

import Navbar from '../components/Navbar';

const Home: React.FunctionComponent = (props) => {
  return (
    <>
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

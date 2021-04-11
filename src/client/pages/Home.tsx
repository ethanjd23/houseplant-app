import React from 'react';
import { RouteComponentProps, Link } from 'react-router-dom';

import Navbar from '../components/Navbar';

const Home: React.FunctionComponent = (props) => {

  if(props.match.params.userid){
  return (
    <>    
    <div className='home'>
      <h1>Home</h1>
    </div>
    <Link to={`/myPlants/${props.match.params.userid}`}>Got to my plants</Link>
    </>
  );
} else {
  return (
    <>
    <div className='home'>
      <h1>Home</h1>
    </div>
    </>
  )
}
}

interface HomeProps extends RouteComponentProps {
  userid: number;
}

export default Home;

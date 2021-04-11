import React, { useEffect, useState } from 'react';
import fetch from 'node-fetch';
import { RouteComponentProps } from 'react-router-dom';
import Navbar from '../components/Navbar';

import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import UserPlantCard from '../components/UserPlantCard';

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
});

const UserPlants: React.FunctionComponent = ({match}) => {
  const classes = useStyles();

  const [userPlants, setUserPlants] = useState([]);

    useEffect(() => {
        getUserPlants();
    }, [])

    async function getUserPlants() {
        let userPlantsRes = await fetch(`/api/userplants/${match.params.userid}`);
        let userPlants: Promise<[{}]> = userPlantsRes.json();
        setUserPlants(await userPlants);
    }

  return (
    <>
    {userPlants.map(plant => (
        <UserPlantCard plant={plant} />
    ))}
    <h1>End of cards</h1>
    </>
  );
}

interface UserPlantsProps extends RouteComponentProps {
    userid: number;
}

interface UserPlant {
    plant_name: string;
    name: string;
    username: string;
    water: number;
    sunlight: string;
}


export default UserPlants

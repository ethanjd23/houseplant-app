import React, { useEffect, useState } from 'react';
import fetch from 'node-fetch';
import { RouteComponentProps } from 'react-router-dom';

const UserPlants: React.FunctionComponent<UserPlantsProps> = (props) => {
    const [userPlants, setUserPlants] = useState([]);

    useEffect(() => {
        getUserPlants();
    }, [])

    async function getUserPlants() {
        let userPlantsRes = await fetch(`/api/userplants/${props.match.params.userid}`);
        let userPlants = userPlantsRes.json();
        setUserPlants(await userPlants);
    }

    return (
        <>
        {userPlants.map(plant => (
          <div className="card" style={{ width: "18rem" }} key={String(plant.plantid)}>
            <div className="card-body">
              <h5 className="card-title">{plant.plant_name}</h5>
              <h6 className="card-subtitle mb-2 text-muted">{plant.userid}</h6>
            </div>
          </div>
        ))}
      </>
    )
}

interface UserPlantsProps extends RouteComponentProps {
    userid: number;
}


export default UserPlants

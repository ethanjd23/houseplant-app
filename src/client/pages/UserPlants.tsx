import React, { useEffect, useState } from 'react';
import fetch from 'node-fetch';

const UserPlants: React.FunctionComponent<UserPlantsProps> = (props) => {
    const [userPlants, setUserPlants] = useState([]);

    useEffect(() => {
        getUserPlants();
    })

    async function getUserPlants() {
        let userPlantsRes = await fetch(`/api/userplants/${props.userid}`);
        let userPlants = userPlantsRes.json();
        setUserPlants(await userPlants);
    }

    return (
        <div>
            
        </div>
    )
}

interface UserPlantsProps {
    userid: number;
}


export default UserPlants

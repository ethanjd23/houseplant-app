import React, { FunctionComponent, useState } from 'react'

const plantDetails: FunctionComponent<plantDetailsProps> = props => {
    const [plant, setPlant] = useState({})

    function getPlant () {
        let plantInfo = fetch("")
    }

    return (
        <div>
            
        </div>
    )
}

export default plantDetails

interface plantDetailsProps {
    userid: number;
    plantid: number;

}
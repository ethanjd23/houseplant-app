import React, { FunctionComponent, useEffect, useState } from "react";

const plantDetails: FunctionComponent = (props) => {
  const [plant, setPlant] = useState("");

  useEffect(() => {
    getPlant();
  });

  return (
    <>
      <h1>{plant}</h1>
    </>
  );
};

export default plantDetails;

interface plantDetailsProps {
  userid: number;
  plantid: number;
  plant_name: string;
}

interface plantInfoFromSQL extends Response {
  id: number;
  name: string;
  water: string;
  sunlight: number;
}

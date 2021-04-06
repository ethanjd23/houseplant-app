import React, { FunctionComponent, useEffect, useState } from "react";

const plantDetails: FunctionComponent<plantDetailsProps> = (props) => {
  const [plant, setPlant] = useState("");

  useEffect(() => {
    getPlant();
  });

  async function getPlant() {
    let localPlantInfoRes = await fetch(`/api/plants/${props.plantid}`);
    let treflePlantInfo = await fetch(
      `https://trefle.io/api/v1/plants/search?token=FZ-NNMVZIvfyiwe_kiwEn_hRBG8PDOmNQx1myC2KeGs&q=${
        localPlantInfoRes.name.split(" ")[0]
      }`
    );
    setPlant(treflePlantInfo);
  }

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

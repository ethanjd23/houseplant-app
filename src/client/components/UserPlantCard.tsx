import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { convertTypeAcquisitionFromJson } from "typescript";

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
});

const PlantCard = ({ plant }) => {
  const classes = useStyles();

  const [trefleData, setTrefleData] = useState({});

  useEffect(() => {
      getTrefleData();
  }, [])

  async function getTrefleData() {
    let result = await fetch(`/trefle/${plant.name}`);
    console.log(await result);
    let plantInfo = await result.json();
    console.log(plantInfo);
    setTrefleData(await plantInfo.data[0]);
    console.log(trefleData);
  }

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={trefleData.image_url}
          title={trefleData.common_name}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {plant.plant_name}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {plant.name}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Share
        </Button>
        <Button size="small" color="primary">
          Learn More
        </Button>
      </CardActions>
    </Card>
  );
};

interface UserPlantCardProps {
  plant: {
    plant_name: string; // plant's nickname the user set
    name: string; // plant's actual name
    username: string;
    water: number;
    sunlight: string;
  };
}

export default PlantCard;

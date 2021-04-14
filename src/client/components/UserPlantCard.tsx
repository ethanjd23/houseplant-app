import React, { useEffect, useState } from "react";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import ClearIcon from "@material-ui/icons/Clear";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import DeleteIcon from "@material-ui/icons/Delete";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    media: {
      height: 280,
    },
    icon: {
      position: "absolute",
      justify: "flex-end",
    },
    modal: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    },
    paper: {
      backgroundColor: theme.palette.background.paper,
      border: "2px solid #000",
      boxShadow: theme.shadows[5],
      padding: theme.spacing(2, 4, 3),
    },
    button: {
      margin: theme.spacing(1),
    },
  })
);

const PlantCard: React.FunctionComponent<UserPlantCardProps> = ({ plant }) => {
  const classes = useStyles();

  const [trefleData, setTrefleData] = useState({});
  const [open, setOpen] = useState(false);

  useEffect(() => {
    getTrefleData();
  }, []);

  return (
    <Grid item xs={5}>
    <Card className={classes.root} key={plant.nickname}>
      <CardActionArea>
        <button type="button" onClick={handleOpen} className={classes.icon}>
          <ClearIcon />
        </button>
        <CardMedia
          className={classes.media}
          image={trefleData.image_url}
          title={trefleData.common_name}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {plant.nickname}
          </Typography>
          <Typography variant="overline" color="textSecondary" component="p">
            {plant.name}
          </Typography>
          <Typography variant="subtitle1" color="textSecondary" component="p">
            {plant.notes}
          </Typography>          
          <Typography variant="subtitle2" component="p">
            I need {plant.sunlight} sunlight
          </Typography>
          <Typography variant="subtitle2" component="p">
            {waterGrammar()}
          </Typography>
        </CardContent>
      </CardActionArea>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <div className={classes.paper}>
            <h2 id="transition-modal-title">
              Are you sure you want to delete {plant.nickname}?
            </h2>
            <Button
              variant="contained"
              color="primary"
              className={classes.button}
              onClick={handleClose}              
            >
              No, keep it
            </Button>
            <Button
              variant="contained"
              color="secondary"
              className={classes.button}
              startIcon={<DeleteIcon />}
              onClick={handleDestroy}
            >
              Delete
            </Button>
          </div>
        </Fade>
      </Modal>
    </Card>
    </Grid>
  );

  function handleOpen() {
    setOpen(true);
  };

  function handleClose() {
    setOpen(false);
  };

  async function handleDestroy() {
    let plantToDestroy = {userid: plant.userid, plantid: plant.plantid }
    $.ajax({
      type: "DELETE",
      url: `/api/userplants`,
      data: JSON.stringify(plantToDestroy),
      contentType: "application/json" 
    }).then(response => {
      console.log(response);
      window.location.reload();
      handleClose();
    })
  }

  async function getTrefleData() {
    let result = await fetch(`/trefle/${plant.name}`);    
    let plantInfo = await result.json();
    if (!plantInfo.data[0]) {
      let searchWordArray = plant.name.split(" ");
      let result = await fetch(`/trefle/${searchWordArray[0]}`);
      let plantInfo = await result.json();
      setTrefleData(plantInfo.data[0]);
    } else {
      setTrefleData(await plantInfo.data[0]);
    }
  }

  function waterGrammar() {
    if (plant.water == 1) {
      return "I need to be watered every day";
    } else {
      return `I need to be watered every ${plant.water} days`;
    }
  }
};

interface UserPlantCardProps {
  plant: {
    nickname: string; // plant's nickname the user set
    name: string; // plant's actual name
    username: string;
    userid: number; //users id
    water: number;
    sunlight: string;
    plantid: number;
    notes: string;
  };
}

export default PlantCard;

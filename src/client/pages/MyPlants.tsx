import React, { useEffect, useState } from "react";
import fetch from "node-fetch";
import { Link, RouteComponentProps } from "react-router-dom";

import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";

import UserPlantCard from "../components/UserPlantCard";
import Navbar from "../components/Navbar";
import Grid from "@material-ui/core/Grid";
const useStyles = makeStyles((theme) => ({  
  gridRoot: {
    flexGrow: 1,
    marginTop: 2,
    marginLeft: 20,
    marginRight: 25,
  },
  button: {
    display: "block",
    marginTop: theme.spacing(2),
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  addButton: {
    color: "#F50057",
  }
}));

const MyPlants: React.FunctionComponent<UserPlantsProps> = ({ match }) => {
  const classes = useStyles();

  const [userPlants, setUserPlants] = useState([]);
  const [plantOptions, setPlantOptions] = useState([]);
  const [dialogOpen, setDialogOpen] = useState(false);
  const [plantType, setPlantType] = useState("");
  const [selectOpen, setSelectOpen] = useState(false);
  const [newNickname, setNewNickname] = useState("");
  const [newNote, setNewNote] = useState("");

  const handleSelectChange = (event) => {
    setPlantType(event.target.value);
  };

  const handleSelectClose = () => {
    setSelectOpen(false);
  };

  const handleSelectOpen = () => {
    setSelectOpen(true);
  };

  const handleDialogOpen = () => {
    setDialogOpen(true);
  };

  const handleDialogClose = () => {
    setDialogOpen(false);
  };

  const handleSubmit = async () => {
    let newPlant = {
      userid: match.params.userid,
      plantid: plantType,
      plant_name: newNickname,
      notes: newNote
    };
    console.log(newPlant);
    $.ajax({
      type: "POST",
      url: `/api/userplants/${match.params.userid}`,
      data: JSON.stringify(newPlant),
      contentType: "application/json",
    }).then(() => {
      getUserPlants();
      handleDialogClose();
    });
  };

  useEffect(() => {
    getUserPlants();
    getPlantOptions();
  }, []);

  async function getUserPlants() {
    let userPlantsRes = await fetch(`/api/userplants/${match.params.userid}`);
    let userPlants: Promise<[{}]> = userPlantsRes.json();
    setUserPlants(await userPlants);
  }

  async function getPlantOptions() {
    let results = await fetch(`/api/plants`);
    let options = await results.json();
    setPlantOptions(options);
  }

  return (
    <>
      <Navbar />      
      <Grid container className={classes.gridRoot} spacing={3} justify="center">
        {userPlants.map((plant) => (
          <UserPlantCard plant={plant} />
        ))}
        <Grid container justify="center">
          <Button
            variant="contained"
            className={classes.addButton}
            onClick={handleDialogOpen}
          >
            ADD NEW PLANT
          </Button>
          <Link to={`/forum`}>Go to forum</Link>
        </Grid>
      </Grid>
      <Dialog
        open={dialogOpen}
        onClose={handleDialogClose}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">New Plant</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Please choose the type of plant and its nickname.
          </DialogContentText>
          <div>
            <FormControl className={classes.formControl}>
              <InputLabel id="demo-controlled-open-select-label">
                Type
              </InputLabel>
              <Select
                labelId="demo-controlled-open-select-label"
                id="demo-controlled-open-select"
                open={selectOpen}
                onClose={handleSelectClose}
                onOpen={handleSelectOpen}
                value={plantType}
                onChange={handleSelectChange}
              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                {plantOptions.map((option) => (
                  <MenuItem key={option.id} value={option.id}>
                    {option.name}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </div>
          <TextField
            autoFocus
            margin="dense"
            id="Nickname"
            label="Nickname"
            type="text"
            fullWidth
            onChange={(e) => setNewNickname(e.target.value)}
          />
          <TextField
            autoFocus
            margin="dense"
            id="Notes"
            label="Notes"
            type="text"
            fullWidth
            onChange={(e) => setNewNote(e.target.value)}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleDialogClose} color="primary">
            Cancel
          </Button>
          <Button onClick={handleSubmit} color="primary">
            Submit
          </Button>
        </DialogActions>
      </Dialog>      
    </>
  );
};

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

export default MyPlants;

import React, { useEffect, useState } from "react";
import ForumPostCard from "../components/forum page/forumPostCard";
import Navbar from "../components/Navbar";
import {
  Button,
  Container,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  FormControl,
  Grid,
  InputLabel,
  makeStyles,
  MenuItem,
  Select,
  TextField,
} from "@material-ui/core";
import {
  RouteComponentProps,
  useHistory,
  useLocation,
  useParams,
} from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  gridRoot: {
    marginTop: 2,
    marginLeft: 20,
    marginRight: 25,
    justifyContent: "center",
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
    marginTop: 10,
    marginBottom: 10,
  },
  buttonContainer: {
    display: "flex",
    justifyContent: "center"
  }
}));

const Forum2: React.FunctionComponent<RouteComponentProps> = ({ match }) => {
  const classes = useStyles();

  const [posts, setPosts] = useState([]);
  const [open, setOpen] = useState(false);
  const [plantOptions, setPlantOptions] = useState([]);
  const [selectOpen, setSelectOpen] = useState(false);
  const [plantType, setPlantType] = useState("");
  const [newTitle, setNewTitle] = useState("");
  const [newContent, setNewContent] = useState("");

  const handleSelectChange = (event) => {
    setPlantType(event.target.value);
  };

  const handleSelectClose = () => {
    setSelectOpen(false);
  };

  const handleSelectOpen = () => {
    setSelectOpen(true);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  useEffect(() => {
    getPosts();
    getPlantOptions();
  }, []);

  return (
    <>
      <Navbar />
      <Container className={classes.buttonContainer}>
        <Button
          onClick={handleOpen}
          variant="contained"
          className={classes.addButton}
        >
          Make New Post
        </Button>
      </Container>
      <Grid container className={classes.gridRoot} spacing={10} justify="center">
        {posts.map((post) => (
          <ForumPostCard userid={match.params.userid} post={post} />
        ))}
      </Grid>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">New Post</DialogTitle>
        <DialogContent>
          <DialogContentText>What plant is your post about?</DialogContentText>
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
            id="title"
            label="Title"
            type="text"
            fullWidth
            onChange={(e) => setNewTitle(e.target.value)}
          />
          <TextField
            autoFocus
            margin="dense"
            id="content"
            label="Content"
            type="text"
            fullWidth
            onChange={(e) => setNewContent(e.target.value)}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={makePost} color="primary">
            Submit
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );

  async function makePost() {
    let newPost = {
      userid: match.params.userid,
      plantid: plantType,
      title: newTitle,
      content: newContent,
    };
    $.ajax({
      method: "POST",
      url: `/forum/posts/`,
      data: JSON.stringify(newPost),
      contentType: "application/json",
    }).then((response) => {
      console.log(response);
      getPosts();
      handleClose();
    });
  }

  async function getPosts() {
    let postRes = await fetch(`/forum/posts/`);
    let post = await postRes.json();    
    setPosts(post);
  }

  async function getPlantOptions() {
    let results = await fetch(`/api/plants`);
    let options = await results.json();
    setPlantOptions(options);
  }
};

export default Forum2;

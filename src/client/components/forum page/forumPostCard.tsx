import {
  Button,
  Card,
  CardContent,
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
  TextField,
  Typography,
} from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { RouteComponentProps } from "react-router-dom";
import Reply from "./reply";

const useStyles = makeStyles((theme) => ({
  postCard: {
    flexGrow: 1,    
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
  },
  forumPostCard: {
    maxWidth: "30em",
    margin: "1em 0",    
  },
}));

const ForumPostCard: React.FunctionComponent<ForumPostProps> = (props) => {
  const classes = useStyles();
  const [replies, setReplies] = useState([]);
  const [open, setOpen] = useState(false);
  const [newContent, setNewContent] = useState("");

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  useEffect(() => {
    getReplies();
  }, []);

  return (
    <>
      <Grid item xs={12} className={classes.forumPostCard}>
        <Card className={classes.postCard} key={String(props.post.id)}>
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              {props.post.title}
              <span className="badge badge-success">{props.post.name}</span>
            </Typography>
            <Typography variant="overline" color="textSecondary" component="p">
              {props.post.username}
            </Typography>
            <Typography variant="h6" component="h2">
              {props.post.content}
            </Typography>
            <Typography variant="subtitle2" color="textSecondary" component="p">
              {props.post._created}
            </Typography>
          </CardContent>
          <Button variant="contained" onClick={handleOpen}>
            Reply to post
          </Button>

          {replies.map((reply) => (
            <Reply reply={reply} />
          ))}
        </Card>
      </Grid>

      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">New Reply</DialogTitle>
        <DialogContent>
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
          <Button onClick={makeReply} color="primary">
            Submit
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );

  async function getReplies() {
    let result = await fetch(`/forum/replies/${props.post.id}`);
    let replies = await result.json();
    setReplies(replies);
  }

  async function makeReply() {
    let newReply = { userid: props.userid, content: newContent };
    console.log(newReply);
    $.ajax({
      method: "POST",
      url: `/forum/replies/${props.post.id}`,
      data: JSON.stringify(newReply),
      contentType: "application/json",
    }).then((response) => {
      console.log(response);
      getReplies();
      handleClose();
    });
  }
};

interface ForumPostProps {
  post: {
    id: number;
    username: string;
    name: string;
    title: string;
    content: string;
    _created: Date;
  };
  userid: number;
}

export default ForumPostCard;

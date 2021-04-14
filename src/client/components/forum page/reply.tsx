import {
  Card,
  CardContent,
  Grid,
  makeStyles,
  Typography,
} from "@material-ui/core";
import React from "react";

const useStyles = makeStyles((theme) => ({
  replyCard: {
    flexGrow: 1,
    backgroundColor: "#FCF8EC",
  },
}));

const Reply: React.FunctionComponent<ReplyProps> = ({ reply }) => {
  const classes = useStyles();
  return (
    <>
      <Grid item xs={12}>
        <Card className={classes.replyCard} key={String(reply.id)}>
         <CardContent>
        <Typography variant="h6" component="h2">
          {reply.content}
        </Typography>
        <Typography variant="overline" color="textSecondary" component="p">
          {reply.username}
        </Typography>
        <Typography variant="subtitle2" color="textSecondary" component="p">
          {reply._created}
        </Typography>
        </CardContent>           
         </Card>
      </Grid>
    </>
  );
};

interface ReplyProps {
  reply: {
    id: number;
    userid: number;
    content: string;
    _created: Date;
    username: string;
  };
}

export default Reply;

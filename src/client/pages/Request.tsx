import React, { useReducer, useEffect, useState } from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import CardHeader from '@material-ui/core/CardHeader';
import Button from '@material-ui/core/Button';
import $ from 'jquery';
import { Link, RouteComponentProps } from 'react-router-dom';
import Popper from '@material-ui/core/Popper';
import Navbar from '../components/Navbar';





const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    container: {
      display: 'flex',
      flexWrap: 'wrap',
      width: 400,
      margin: `${theme.spacing(0)} auto`
    },
    loginBtn: {
      marginTop: theme.spacing(2),
      flexGrow: 1
    },
    header: {
      textAlign: 'center',
      background: '#FCF8EC',
      color: '#5B744F'
      
    },
    card: {
      marginTop: theme.spacing(10)
    },
    paper: {
        border: '1px solid',
        padding: theme.spacing(1),
        backgroundColor: theme.palette.background.paper,
      },
  })
);

const Request: React.FunctionComponent<RouteComponentProps> = (props) => {
  const classes = useStyles();
  const [plantRequest, setPlantRequest] = useState("")
  

  return (
    <>
    <Navbar />
    <form className={classes.container} noValidate autoComplete="off">
      <Card className={classes.card}>
        <CardHeader className={classes.header} title="Request Plant" />
        <CardContent>
          <div>
            <TextField
              fullWidth
              id="request=field"
              type="text"
              label="Plant Name"
              placeholder="Name"
              margin="normal"              
              onChange={e => setPlantRequest(e.target.value)}              
            />
          </div>
        </CardContent>
        <CardActions>
          <Button
            variant="contained"
            size="large"
            color="secondary"
            className={classes.loginBtn}
            onClick={handleSubmit}>
            Submit Request
          </Button>
        </CardActions>
      </Card>
    </form>
    </>
  );


  async function handleSubmit() {
      let newRequest = {request: plantRequest};
      $.ajax({
          method: 'POST',
          url: '/api/request',
          data: JSON.stringify(newRequest),
          contentType: 'application/json'
      }).then(response => {
          console.log(response);
          props.history.push('/')
      })
  }
}

export default Request;
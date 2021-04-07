import React from 'react'
import PropTypes from 'prop-types'
import { makeStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'
import Card from '@material-ui/core/Card'
import CardActionArea from '@material-ui/core/CardActionArea'
import CardContent from '@material-ui/core/CardContent'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'

const useStyles = makeStyles({
  card: {
    display: 'flex',
  },
  cardDetails: {
    flex: 1,
  },
  cardMedia: {
    width: 160,
  },
})

export default function Question (props) {
  const classes = useStyles()
  const { question } = props

  return (
    
    
    
    
    
    <Grid item sm={12} md={12}>
      <CardActionArea component="a" href={`/${question.Topic.title}/${question.id}`}>
        <Card className={classes.card}>
          <div className={classes.cardDetails}>
            <CardContent>
              <Typography component="h2" variant="h5">
                {question.title} - {question.User.username}
              </Typography>
              <Typography variant="subtitle1" color="textSecondary">
                {question.createdAt}
              </Typography>
              <Typography variant="subtitle1" paragraph>
                {question.description}
              </Typography>
              <Typography variant="subtitle1" color="primary">
                {question.answerCount} Answer
              </Typography>
            </CardContent>
          </div>
        </Card>
      </CardActionArea>
    </Grid>
  )
}

Question.propTypes = {
  question: PropTypes.object
}

const useStyles = makeStyles(theme => ({
    offset: theme.mixins.toolbar,
  }))
  
  function App() {
    const classes = useStyles();
    return (
      <React.Fragment>
        <AppBar position="fixed">
          <Toolbar>{"Forum"}</Toolbar>
        </AppBar>
        <div className={classes.offset} />
      </React.Fragment>
    )
  };



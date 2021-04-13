import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { IconButton, Collapse } from '@material-ui/core';
import SortIcon from '@material-ui/icons/Sort';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { Link as Scroll } from 'react-scroll';




const useStyles = makeStyles({
  root: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    fontFamily: 'Nunito',
  },
  icon: {
    color: '#fff',
    fontSize: '2rem',
  },
  colorText: {
    color: '#006400',
  },
  container: {
    textAlign: 'center',
  },
  title: {
    color: 'white',
    fontSize: '4.5rem',
  },
  goDown: {
    color: 'white',
    fontSize: '4rem',
  },
  subtitle: {
    color: 'white',
    fontSize: '1.5rem'
  }
});
export default function Header() {
  const classes = useStyles();
  const [checked, setChecked] = useState(false);
  useEffect(() => {
    setChecked(true);
  }, []);
  return (
    <div className={classes.root} id="header">
      
          <h1 className={classes.appbarTitle}>
            <span className={classes.colorText}></span>
          </h1>
          
      

      <Collapse
        in={checked}
        {...(checked ? { timeout: 1000 } : {})}
        collapsedHeight={50}
      >
        <div className={classes.container}>
          <h1 className={classes.title}>
            Welcome to <br />
            House<span className={classes.colorText}>Plant.</span>
          </h1>
          <h3 className={classes.subtitle}>A interactive website that helps you become a better house plant owner.</h3>
          <Scroll to="place-to-visit" smooth={true}>
            <IconButton>
              <ExpandMoreIcon className={classes.goDown} />
            </IconButton>
          </Scroll>
        </div>
      </Collapse>
    </div>
  );
}
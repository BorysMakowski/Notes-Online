import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

export default function Appbar() {
  const classes = useStyles();

  const logout=(e)=>{
    window.sessionStorage.setItem("USERID", 0);
    window.sessionStorage.setItem("USERLVL", 0)
    window.location.reload();
}

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          
        <Typography variant="h6" className="tittle">
          {window.sessionStorage.getItem("USERID")==0?"":window.sessionStorage.getItem("USERNAME")}
          </Typography>
          
          <Typography variant="h6" className={classes.title}>
            Notes online 
          </Typography>
          {window.sessionStorage.getItem("USERID")==0?null:<Button onClick={logout} color="inherit">Logout</Button>}
          {window.sessionStorage.getItem("USERLVL")==1?<Button href="/Admin" color="inherit">Admin panel</Button>:null}
          {window.sessionStorage.getItem("USERLVL")==1?<Button href="/Notes" color="inherit">Your notes</Button>:null}

         
        </Toolbar>
      </AppBar>
    </div>
  );
}



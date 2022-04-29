import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import { Container ,Paper,Button} from '@material-ui/core';
import {Navigate} from "react-router-dom"

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
     
    },
  },
}));

export default function User() {
    const paperStyle={padding:'50px 20px', width:600,margin:"20px auto"}
    const[name,setName]=useState('')
    const[password,setPassword]=useState('')
    const[repeatpassword,setRepeatPassword]=useState('')
    const[users,setUsers]=useState([])
     const classes = useStyles();
  const handleClick=(e)=>{
    window.sessionStorage.setItem("USERID", 0);
    window.sessionStorage.setItem("USERNAME", 0);
    window.sessionStorage.setItem("USERLVL", 0);
    users.forEach(function(value,key){
        if (name == value.name && password == value.password)
        {
            console.log("found")
            window.sessionStorage.setItem("USERID", value.id);
            window.sessionStorage.setItem("USERNAME", value.name);
            window.sessionStorage.setItem("USERLVL", value.userlvl);
            window.location.reload();
        }

    })

}

useEffect(()=>{
  fetch("http://localhost:8080/user/getAll")
  .then(res=>res.json())
  .then((result)=>{
    setUsers(result);
  }
)
},[])
  return (
    
    <Container>
        {window.sessionStorage.getItem("USERID")==0?null:<Navigate to="/Notes" replace={true} />}
        <Paper elevation={3} style={paperStyle}>
            <h1 style={{color:"blue"}}>Login</h1>

    <form className={classes.root} noValidate autoComplete="off">
    
      <TextField id="outlined-basic" label="Name" variant="outlined" fullWidth 
      value={name}
      onChange={(e)=>setName(e.target.value)}
      />
      <TextField id="outlined-basic" label="Password" variant="outlined" type="password" fullWidth
      value={password}
      onChange={(e)=>setPassword(e.target.value)}
      />
      <Button variant="contained" color="primary" onClick={handleClick}>
  Login
</Button>
<p class="card-text">Or <a href="/User" class="text-decoration-none">make a new account</a> instead</p>
    </form>
    </Paper>
   



    </Container>
    

    
  );

}
console.log(window.sessionStorage.getItem("USERID"))
console.log(window.sessionStorage.getItem("USERNAME"))
console.log("AAAAAAAA")
console.log(window.sessionStorage.getItem("USERLVL"))
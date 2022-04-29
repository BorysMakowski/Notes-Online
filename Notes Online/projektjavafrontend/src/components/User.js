import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import { Container ,Paper,Button} from '@material-ui/core';

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
      if (password==repeatpassword){
        e.preventDefault()
        const user={name,password}
        console.log(user)
        fetch("http://localhost:8080/user/add",{
          method:"POST",
          headers:{"Content-Type":"application/json"},
          body:JSON.stringify(user)
    
      }).then(()=>{
        console.log("New User added")
        window.location.href = 'Login'
      })
      }
      else{
        console.log("Passwords dont match")
      }

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
        <Paper elevation={3} style={paperStyle}>
            <h1 style={{color:"blue"}}>Register</h1>

    <form className={classes.root} noValidate autoComplete="off">
    
      <TextField id="outlined-basic" label="Name" variant="outlined" fullWidth 
      value={name}
      onChange={(e)=>setName(e.target.value)}
      />
      <TextField id="outlined-basic" label="Password" variant="outlined" type="password" fullWidth
      value={password}
      onChange={(e)=>setPassword(e.target.value)}
      />
    <TextField id="outlined-basic" label="Repeat Password" variant="outlined" type="password" fullWidth
      value={repeatpassword}
      onChange={(e)=>setRepeatPassword(e.target.value)}
      />

      <Button variant="contained" color="primary" onClick={handleClick}>
  Register
</Button>
<p class="card-text">Or <a href="/Login" class="text-decoration-none">log in</a> instead</p>
    </form>

    </Paper>



    </Container>
  );
}
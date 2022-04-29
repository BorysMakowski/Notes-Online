import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import { Container ,Paper,Button, Grid} from '@material-ui/core';
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
    var date
    var userid
    const[users,setUsers]=useState([])
    const classes = useStyles();


    var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0'); 
    var yyyy = today.getFullYear();
    today = dd + '/' + mm + '/' + yyyy;






function handleDelete(id){
  fetch("http://localhost:8080/user/delete/" + id,{
    method:"DELETE"
  })
window.location.reload();
}

useEffect(()=>{
  console.log(parseInt(window.sessionStorage.getItem("USERID")))
  fetch("http://localhost:8080/user/getAll")
  .then(res=>res.json())
  .then((result)=>{
    setUsers(result);
  }
)
},[])
  return (

    <Container>
      {window.sessionStorage.getItem("USERID")==null?window.sessionStorage.setItem("USERID", 0):null}
        {window.sessionStorage.getItem("USERID")==0?<Navigate to="/" replace={true} />:null}
        

        <Paper elevation={3} style={paperStyle}>
            <h1 style={{color:"blue"}}>ADMIN PANEL</h1>

    </Paper>

    <h1>User accounts::</h1>

    <Paper elevation={3} style={paperStyle}>

      {users.map(user=>(
        <Paper elevation={6} style={{margin:"10px",padding:"15px", textAlign:"left"}} key={user.id}>
        <table width="100%">
        <tr width="100%">
        <td >
        Username: {user.name}<br/>
        UserID: {user.id}
        </td>
        <td>
        <Button variant="outlined" color="error" onClick={() => handleDelete(user.id)} style={{float:"right", display:"inline-block"}}>   
           Delete
        </Button>
      </td></tr>
      </table>
        </Paper>
      ))
}


    </Paper>



    </Container>
  );
}
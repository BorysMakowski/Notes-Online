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

export default function Note() {
    const paperStyle={padding:'50px 20px', width:600,margin:"20px auto"}
    const[title,setTitle]=useState('')
    const[content,setContent]=useState('')
    var date
    var userid
    const[notes,setNotes]=useState([])
    const classes = useStyles();


    var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0'); 
    var yyyy = today.getFullYear();
    today = dd + '/' + mm + '/' + yyyy;




  const handleClick=(e)=>{
        e.preventDefault()

        console.log(today)

        date = today
        userid = window.sessionStorage.getItem("USERID")
        const note={content,date,title,date,userid}
        console.log(note)
        fetch("http://localhost:8080/note/add",{
          method:"POST",
          headers:{"Content-Type":"application/json"},
          body:JSON.stringify(note)
    
      }).then(()=>{
        console.log("New Note added")
      })
      window.location.reload();
}

function handleDelete(id){
  fetch("http://localhost:8080/note/delete/" + id,{
    method:"DELETE"
  })
window.location.reload();
}

useEffect(()=>{
  console.log(parseInt(window.sessionStorage.getItem("USERID")))
  fetch("http://localhost:8080/note/getForUser/" + window.sessionStorage.getItem("USERID"))
  .then(res=>res.json())
  .then((result)=>{
    setNotes(result);
  }
)
},[])
  return (

    <Container>
      {window.sessionStorage.getItem("USERID")==null?window.sessionStorage.setItem("USERID", 0):null}
        {window.sessionStorage.getItem("USERID")==0?<Navigate to="/" replace={true} />:null}
        

        <Paper elevation={3} style={paperStyle}>
            <h1 style={{color:"blue"}}>New note:</h1>

    <form className={classes.root} noValidate autoComplete="off">
    
      <TextField id="outlined-basic" label="Note title" variant="outlined" fullWidth 
      value={title}
      onChange={(e)=>setTitle(e.target.value)}
      />
      <TextField id="outlined-basic" label="Note content" variant="outlined"  fullWidth
      value={content}
      onChange={(e)=>setContent(e.target.value)}
      />

      <Button variant="contained" color="primary" onClick={handleClick}>
  Submit
</Button>
    </form>

    </Paper>

    <h1>Your notes:</h1>

    <Paper elevation={3} style={paperStyle}>

      {notes.map(note=>(
        <Paper elevation={6} style={{margin:"10px",padding:"15px", textAlign:"left"}} key={note.id}>
        <table width="100%">
        <tr width="100%">
        <td >
        Date: {note.date}<br/>
        Tittle: {note.title}<br/>
        Content: {note.content}
        </td>
        <td>
        <Button variant="outlined" color="error" onClick={() => handleDelete(note.id)} style={{float:"right", display:"inline-block"}}>   
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
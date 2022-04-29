
import './App.css';
import Appbar from './components/Appbar'
import User from './components/User'
import Login from './components/Login'
import Notes from './components/Notes'
import Admin from './components/Admin'
import React, {Component} from "react"
import {BrowserRouter, Routes, Route} from "react-router-dom"

function App() {
  return (
    <div className="App">
      <Appbar/>
    <BrowserRouter>
        <Routes>
            <Route path="*" element={<Login/>}/>    
            <Route path="/Notes" element={<Notes/>} />          
            <Route path="/User" element={<User/>} />   
            <Route path="/Admin" element={<Admin/>} />   
        </Routes>
    </BrowserRouter>
    </div>
  )
}

export default App;
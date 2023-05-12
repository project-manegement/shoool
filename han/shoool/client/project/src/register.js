
import React, { useState } from 'react'
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'
import Card from '@mui/material/Card'
import CardMedia from '@mui/material/CardMedia';
import Myimage from './assets/login.jpg'
import axios from 'axios';
import { useNavigate } from "react-router-dom";


export default function Register() {
    const[email,setEmail]=useState('')
    const[password,setPassword]=useState('')
    const navigate = useNavigate();

   const  onclickButton=()=>{
         console.log(email,password)
         axios.post('http://localhost:3000/enregister',{
             username:email,
             password:password
         }).then(function (response) {
            
            navigate('/')
           })
           .catch(function (error) {
             console.log(error);
           });
     }
 
     return (
       <form style={{width:"35%",alignItems:'center',justifyContent:'center',}}>
         
         <Card sx={{ display: 'flex' }} >
         <div style={{justifyContent:'center',alignItems:'center'}}>
         <div className="mb-3">
           <TextField id="outlined-basic" label="Email" variant="outlined" style={{marginBottom:10,marginTop:10,left:10}} value={email}
            onChange={(e)=>{
             const {value}=e.target;
            setEmail(value)}}/>
         </div>
         <div className="mb-3" >
           
           <TextField id="outlined-basic" label="Password" variant="outlined"  style={{marginBottom:20,marginTop:10,left:10}} value={password} 
           onChange={(e)=>{
             const {value}=e.target;
             setPassword(value)}} />
         </div>
         <div className="d-grid">
         <Button variant="contained" style={{marginBottom:10}} onClick={onclickButton}>Sign Up</Button>
         </div>
         </div>
        
         <div style={{left:20}}> 
         <CardMedia
         component="img"
         sx={{ width:200 ,}}
         image={Myimage}
         alt="Live from space album cover"
         
         style={{left:16}}
       />
       </div>
         </Card>
       </form>
     )
   
 }
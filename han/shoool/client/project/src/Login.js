import React, { useState } from 'react'
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'
import Card from '@mui/material/Card'
import CardMedia from '@mui/material/CardMedia';
import Myimage from './assets/login.jpg'
import axios from 'axios';

import { Link } from 'react-router-dom'; 
import { useNavigate } from "react-router-dom";
 const  Login =()=>  {
   const[email,setEmail]=useState('')
   const[password,setPassword]=useState('')
   const[error,setError]=useState(null)
   const navigate = useNavigate();
//    const user={}

  const  onclickButton=()=>{
        console.log(email,password)
        axios.post('http://localhost:3000/login',{
          username:email,
          password:password
      }).then(function (response) {
            console.log(response.data);
            navigate("/home")
          })
          .catch(function (error) {
            setError('password or email not found')
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
        <Button variant="contained" style={{marginBottom:10}} onClick={onclickButton}>Sign In</Button>
        </div>
        {error &&<text style={{color:'red'}}>{error}</text>}
        <br></br>
        <text>dont have accont?<Link to='/register'>Sign Up</Link></text>
       
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

  
  export default Login;
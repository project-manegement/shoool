import React from "react";
import ReactDOM from "react-dom";
import axios from "axios";
import { BrowserRouter as Router, Route, useNavigate } from 'react-router-dom';
import { useState } from "react";
import './Create.css'
import Swal from 'sweetalert2';


function Create(){
  const navig= useNavigate()
   
  const [name, setName] = useState('');
  const [subject, setSubject] = useState('');
  const [hour, setHour] = useState(0);
  const [course,setCourse]=useState([])
        
        const Alert=()=>{
          Swal.fire('haw c bon')
        }
        const Alertini=()=>{
          Swal.fire('arjaa bina')
        }
        
        const displaaay=()=>{
          console.log(name)
          var obj={
            name:name,
            subject:subject,
            hour:hour,
          }
          console.log(obj)
        
          axios.post('http://localhost:4000/create', {
               name: name,
               subject: subject,
               hour: hour
               }).then((response) => {
                  setCourse([...course, response.data]);
                     }).catch((error) => {
                        console.log(error);
         });
        
        }




        return(
           
          <div className="toutou">
            <h1>Create a specifique course</h1> 
      <div className='information'>
      <label>name:</label>
     <input type='text'  onChange={(event)=>{setName(event.target.value)}}/>
     <label>subject:</label>
     <input type='text'  onChange={(event)=>{setSubject(event.target.value)}}/>
     <label>hour:</label>
     <input type='number' onChange={(event)=>{setHour(event.target.value)}}/>
    <br/>
    <button onClick={() => {
    displaaay();
    Alert();
}}>Add course</button><br/>
     <button className="batouna" onClick={()=>{navig('/')
    Alertini()
    }} >Go Back</button>
            </div>
            </div>
        )

}

export default Create;

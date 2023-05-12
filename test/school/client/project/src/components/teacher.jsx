import React from "react"
import axios from 'axios'
import './teacher.css'
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, useNavigate } from 'react-router-dom';
import Create from "./Create";
import Delete from "./Delete";
import SeeAll from "./SeeAll";
import Swal from 'sweetalert2';

function Teacher(){
   const navig= useNavigate()

   const messaget=()=>{
    Swal.fire('nabdew')
  }

  const messaget2=()=>{
    Swal.fire('ija tfarj')
  }
  
    return(
        <div className="prof">
            <div className="prof__img">
           <br></br> <h3>Teacher's space</h3>
            <div className="hola">
            <button className="batouna"  id="loula" onClick={()=>{navig('/Create')
                messaget()}} >Create Course</button>
            <button className="batouna" onClick={()=>{navig('/SeeAll')
                messaget2()}} >See all Courses</button>
            <button className="batouna" onClick={()=>{navig('/Delete')}} >Delete Course</button>
            </div>
            </div>
            
         </div>
    )
}

export default Teacher
import React from "react";
import './Delete.css'
import axios from "axios";
import SeeAll from "./SeeAll";
import { useState } from "react";
import { BrowserRouter as Router, Route, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
function Delete(){
    const [courses, setCourses] = useState([]);
  const [showCourses, setShowCourses] = useState(false);
  const [data, setData] = useState([]);
    const navig= useNavigate()

    const alertini1=()=>{
        Swal.fire('a5tar w fasakh')
      }

      const back=()=>{
        Swal.fire('arjaa')
      }
      const handleFetchCourses = () => {
        axios.get('http://localhost:4000/use').then(res => {
          setCourses(res.data);
          setShowCourses(true);
        }).catch(err => console.log(err));
      };
      
      const handleDelete = (idcourses) => {
        console.log('id:', idcourses); 
        axios
          .delete(`http://localhost:4000/course/${idcourses}`)
          .then(() => {
            setData((prevData) => prevData.filter((item) => item.idcourses !== idcourses));
          })
          .catch((error) => {
            console.error(error);
          });
      };


   return(
    <div className="toutou">
    <h1>Delete the course</h1><br></br>
    <button className="batouna" onClick={()=>{handleFetchCourses()
    alertini1()
    }}>have a look</button>
    {showCourses && (
        <div className='course'>
          <h4>This is the list:</h4>
          <ul>
            {courses.map(course => (
              <li key={course.id}>
                <p className='box'>{course.name}<span><button className="fasa5" onClick={() => handleDelete(course.id)}>Delete</button></span></p>
              </li>
            ))}
          </ul>
                  
          <ul>
      {data.map((course) => (
        <li key={course.id}>
          <span>{course.name}</span>
        </li>
      ))}
    </ul>

        </div>
      )}
    <button className="batouna" onClick={()=>{navig('/')
          back()}} >Go Back</button>

    </div>
   )
}

export default Delete      
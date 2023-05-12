import React, { useState } from 'react';
import axios from 'axios';
import './SeeAll.css'
import { BrowserRouter as Router, Route, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import Delete from './Delete';

const SeeAll = (props) => {
  const navig= useNavigate()
  const [courses, setCourses] = useState([]);
  const [showCourses, setShowCourses] = useState(false);
  

  const handleFetchCourses = () => {
    axios.get('http://localhost:4000/use').then(res => {
      setCourses(res.data);
      setShowCourses(true);
    }).catch(err => console.log(err));
  };

  const Alert1=()=>{
    Swal.fire('Tfarj ay')
  }
  const Alerty=()=>{
    Swal.fire('arjaa bina')
  }

  return (
    <div className="toutou">
            <br></br><h1>See all our courses</h1> 
      <button className="batouna" onClick={()=>{handleFetchCourses()}
    }>Fetch Courses</button>
      {showCourses && (
        <div className='course'>
          <h4>All Courses:</h4>
          <ul>
            {courses.map(course => (
              <li key={course.id}>
                <p className='box'>{course.name}</p>
              </li>
            ))}
          </ul>
        </div>
      )}
      <button className="batouna" onClick={()=>{navig('/')
    Alerty()
    }} >Go Back</button>
    </div>
  );
};

export default SeeAll;
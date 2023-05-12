import React from 'react';
import { Routes , Route } from 'react-router-dom';
import Teacher from './components/teacher';
import './App.css';
import ReactDOM from "react-dom";
import Create from './components/Create';
import Delete from './components/Delete';
import SeeAll from './components/SeeAll';

function App() {
  
    return (
    <div className="App">
      <Teacher />
      <Routes>
      
      <Route path="/create" element={<Create />} />
      <Route path="/SeeAll" element={<SeeAll />} />
      <Route path="/delete" element={<Delete />} />
     
    </Routes>
    </div>
  );
}

export default App;

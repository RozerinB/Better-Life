import React from 'react';
import {  Route, Routes , useNavigate} from 'react-router-dom';
import './App.css';
import MentalHealthSymptoms from './mentalHealthSymptoms';
import PhysicalSymptoms from './physicalSymptoms';

function App() {

  return (
    <div>  
    <div >
      <h1>BetterLife</h1>
    </div>
    <div> 
    <button >Mental Health</button>
    <button>Physical Health</button>


    </div>
    </div>
  );
}

export default App;
import React from 'react';
import {  Route, Routes , useNavigate} from 'react-router-dom';
import './App.css';
import MentalHealthSymptoms from './mentalHealthSymptoms';
import PhysicalSymptoms from './physicalSymptoms';

function App() {

  return (
    <div>  
    <div >
      
      <h1>What would you like to check ?</h1>
    </div>
    <div> 
    <div class="flex">
    <button>Mental Health</button>

    <button>Physical Health</button>
    </div>

    </div>
    </div>
  );
}

export default App;
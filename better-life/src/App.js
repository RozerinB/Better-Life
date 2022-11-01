import React from 'react';
import {  Route, Routes , useNavigate} from 'react-router-dom';
import './App.css';
import MentalHealthSymptoms from './mentalHealthSymptoms';
import PhysicalSymptoms from './physicalSymptoms';

function App() {
  const navigate = useNavigate();

  const navigateToMentalHealthPage = () => {
      // 👇️ navigate to /mentalHealth
      navigate('/mentalHealth');
  };
  return (
    <div>  
    <div >
      <h1>BetterLife</h1>
    </div>
    <div> 
    <button  onClick={navigateToMentalHealthPage} >Mental Health</button>
    <button>Physical Health</button>

    <Routes>
        <Route path="/mentalHealth" element={ <MentalHealthSymptoms /> } />
        <Route path="/physicalHealth" element={  <PhysicalSymptoms /> } />
        </Routes>
    </div>
    </div>
  );
}

export default App;
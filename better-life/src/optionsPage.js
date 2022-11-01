import React from 'react'
import {Routes, Route, useNavigate} from 'react-router-dom';
import MentalHealthSymptoms from './mentalHealthSymptoms'
import PhysicalSymptoms from './physicalSymptoms';

const OptionsPage = () => {

    const navigate = useNavigate();

    const navigateToMentalHealthPage = () => {
        // 👇️ navigate to /mentalHealth
        navigate('/mentalHealth');
    };
    
    const navigatePhsyicalSymptomPage = () => {
        // 👇️ navigate to /physicalHealth
        navigate('/physicalHealth');
    };
    

return (
    <div>
        
    <h1> Better Life</h1>

    <div> 
        <button onClick={navigateToMentalHealthPage} > Mental Health </button>
        <button onClick={navigatePhsyicalSymptomPage} > Physical Symptoms </button>

        <Routes>
        <Route path="/mentalHealth" element={ <MentalHealthSymptoms /> } />
        <Route path="/physicalHealth" element={  <PhysicalSymptoms /> } />
        </Routes>

    </div>


    </div>

)

}

export default OptionsPage
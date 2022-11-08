import React from 'react'
import { Route, useHistory} from 'react-router-dom';
import MentalHealthSymptoms from './mentalHealthSymptoms'
import PhysicalSymptoms from './physicalSymptoms';

const OptionsPage = () => {

    const history = useHistory();

    const navigateToMentalHealthPage = () => {
        // 👇️ navigate to /mentalHealth
        history.push('/mentalHealth');
    };
    
    const navigatePhsyicalSymptomPage = () => {
        // 👇️ navigate to /physicalHealth
        history.push('/physicalHealth');
    };
    

return (
    <div>
        <h1> Better Life</h1>
        <h2> What would you like to check? </h2>
        <div> 
            <button className = "buttons" onClick={navigateToMentalHealthPage} element={MentalHealthSymptoms} > Mental Health </button>
            <button className = "buttons" onClick={navigatePhsyicalSymptomPage} element={PhysicalSymptoms}> Physical Symptoms </button>
        </div>
    </div>

)

}

export default OptionsPage
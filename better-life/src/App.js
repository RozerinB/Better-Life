import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import './App.css';
import MentalHealthSymptoms from './mentalHealthSymptoms';
import PhysicalSymptoms from './physicalSymptoms';
import OptionsPage from './optionsPage';

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
        <Route exact path='/' component={OptionsPage}>
            <OptionsPage />
          </Route>
          <Route exact path='/mentalHealth' component={MentalHealthSymptoms}>
            <MentalHealthSymptoms />
          </Route>
          <Route exact path='/physicalHealth' component={PhysicalSymptoms}>
            <PhysicalSymptoms />
          </Route>

        </Switch>
      </div>
    </Router>
  );
}
export default App;
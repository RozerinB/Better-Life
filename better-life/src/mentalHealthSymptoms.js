import React from 'react'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';

const MentalHealthSymptoms = () => {


  return (
    <div> 
    <div>
      <h1>  Mental Health Symptoms </h1>
    </div>
        

    <div> 
      <h3> Please select your current symtpoms: </h3>
    <Form.Check 
      id={`question1`}
      label={`Feeling sad or down`}
    />
    <Form.Check 
      id={`question2`}
      label={`Confused thinking or ability to concentrate`}
    />
    <Form.Check 
      id={`question3`}
      label={`Problems with alchol or drug use`}
    />
    <Form.Check 
      id={`question4`}
      label={`Excessive fears or worries`}
    />
    <Form.Check 
      id={`question5`}
      label={`Trouble understanding and relating to situations and peopne`}
    />
    <Form.Check 
      id={`question6`}
      label={`Extreme moood changes`}
    />
    <Form.Check 
      id={`question7`}
      label={`Significant tiredness, low energy or probelms sleeping`}
    />
    <Form.Check 
      id={`question8`}
      label={`Suicidal thoughts`}
    />
    <Button variant="primary">Submit</Button>{' '}
          
  </div>
  </div>
  )
}

export default MentalHealthSymptoms
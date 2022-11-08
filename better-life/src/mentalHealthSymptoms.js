import React from 'react'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';

import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import FormControl from '@mui/material/FormControl';


const MentalHealthSymptoms = () => {

  const [age, setAge] = React.useState('');
  

  return (
    <div> 
    <div>
      <h1>  Mental Health Symptoms </h1>
    </div>
        

    <div> 
      <h3> Please select your current symtpoms: </h3>
      <FormControl sx={{ m: 1, minWidth: 80 }}>
      <InputLabel id="demo-simple-select-label">Age</InputLabel>
  <Select
    labelId="demo-simple-select-label"
    id="demo-simple-select"
    value={age}
    label="Age"
   
  >
    <MenuItem value={18}>18</MenuItem>
    <MenuItem value={19}>19</MenuItem>
    <MenuItem value={20}>20</MenuItem>
    <MenuItem value={21}>21</MenuItem>
    
  </Select>
  </FormControl>

  <FormControl sx={{ m: 1, minWidth: 80 }}>
  
  <InputLabel id="demo-simple-select-label">Gender</InputLabel>
  <Select
    labelId="demo-simple-select-label"
    id="demo-simple-select"
    value={age}
    label="Gender"
   
  >
    <MenuItem value={18}>Male</MenuItem>
    <MenuItem value={19}>Female</MenuItem>
    
    
  </Select>
  </FormControl>
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
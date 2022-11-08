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


const PhysicalSymptoms = () => {

  const [age, setAge] = React.useState('');
  

  return (
    <div> 
    <div>
      <h1>  Physical Health Symptoms </h1>
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
    <MenuItem value={22}>22</MenuItem>
    <MenuItem value={23}>23</MenuItem>
    <MenuItem value={24}>24</MenuItem>
    <MenuItem value={25}>25</MenuItem>

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
    <MenuItem value={20}>Other</MenuItem>
    
  </Select>
  </FormControl>
    <Form.Check 
      id={`question1`}
      label={`Headaches`}
    />
    <Form.Check 
      id={`question2`}
      label={`Upset stomach, including diarrhea, constipation, and nausea`}
    />
    <Form.Check 
      id={`question3`}
      label={`Problems with alcohol or dug use`}
    />
    <Form.Check 
      id={`question4`}
      label={`Aches, pains, and tense muscles`}
    />
    <Form.Check 
      id={`question5`}
      label={`Chest pain and rapid heartbeat`}
    />
    <Form.Check 
      id={`question6`}
      label={`Clenched jaw and grinding teeth`}
    />
    <Form.Check 
      id={`question7`}
      label={`Insomnia`}
    />
    <Form.Check 
      id={`question8`}
      label={`Nervousness and shaking, ringing in the ears, and cold or sweeaty hands and feet`}
    />
    <Form.Check 
      id={`question9`}
      label={`Dry mouth and a hard time swallowing`}
    />
    <Form.Check 
      id={`question10`}
      label={`Frequent colds and infections`}
    />
    <Form.Check 
      id={`question11`}
      label={`Fainting`}
    />
    <Form.Check 
      id={`question12`}
      label={`Seizures`}
    />
    <Form.Check 
      id={`question13`}
      label={`Constant bleeding`}
    />
    <Form.Check 
      id={`question14`}
      label={`Throwing up`}
    />

    <Button variant="primary">Submit</Button>{' '}



          
  </div>
  </div>
  )
}
export default PhysicalSymptoms
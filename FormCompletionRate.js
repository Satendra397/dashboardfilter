// 
import React, { useState } from 'react';
import { BarChart, Bar, XAxis,YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import {  FormControl, FormControlLabel,Slider, FormGroup, Checkbox, FormLabel, Accordion } from '@mui/material';

const data = [
  { employee: 'CS', lastYear: 20, thisYear: 30 },
  { employee: 'RP', lastYear: 18, thisYear: 32 },
  { employee: 'AP', lastYear: 15, thisYear: 28 },
  { employee: 'ML', lastYear: 12, thisYear: 35 },
  { employee: 'SB', lastYear: 10, thisYear: 36 },
  { employee: 'CCo', lastYear: 14, thisYear: 38 },
  { employee: 'JW', lastYear: 22, thisYear: 40 },
  { employee: 'RC', lastYear: 25, thisYear: 39 },
  { employee: 'PP', lastYear: 30, thisYear: 37 },
  { employee: 'CCa', lastYear: 28, thisYear: 34 },
  
  
];

const FormCompletionRate = () => {
  const [range, setRange] = useState([0, 40]);
  const [lastYear, setLastYear] = useState(true);
  const [thisYear, setThisYear] = useState(true);


  
  const handleRangeChange = (event, newValue) => {
    setRange(newValue);
  };
  const handleCheckboxChange = (event) => {
    const { name, checked } = event.target;
    if (name === 'lastYear') {
      setLastYear(checked);
    } else if (name === 'thisYear') {
      setThisYear(checked);
    }
  };

  const filteredData = data.map((item) => ({
    ...item,
    lastYear: lastYear ? item.lastYear : 0,
    thisYear: thisYear ? item.thisYear : 0,
  }));

  return (
    <Accordion>
    <div>
      <h3 style={{ textAlign: 'left' }}>Form Completion Rate </h3>
      <p style={{ textAlign: 'left' }}>By Employee</p>
      <FormControl component="fieldset">
        <FormLabel component="legend">Range: This Year</FormLabel>
          <Slider
          value={range}
          onChange={handleRangeChange}
          valueLabelDisplay="auto"
          min={0}
          max={40}
          step={1}
        /> 
      </FormControl>
      <FormControl component="fieldset">
        <FormLabel component="legend">Filters:</FormLabel>
        <FormGroup>
          <FormControlLabel
            control={
              <Checkbox
                checked={lastYear}
                onChange={handleCheckboxChange}
                name="lastYear"
              />
            }
            label="Last Year"
          />
          <FormControlLabel
            control={
              <Checkbox
                checked={thisYear}
                onChange={handleCheckboxChange}
                name="thisYear"
              />
            }
            label="This Year"
          />
        </FormGroup>
      </FormControl>
      <BarChart width={400} height={220} data={filteredData}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="employee" />
      <YAxis domain={range} /> 
        <Tooltip />
        <Legend />
        {lastYear && (
          <Bar dataKey="lastYear" name="Last Year" fill="#008000" stackId="stack" />
        )}
        {thisYear && (
          <Bar dataKey="thisYear" name="This Year" fill="#C0C0C0" stackId="stack" />
        )}
      </BarChart>
    </div>
    </Accordion>
  );
};

export default FormCompletionRate;

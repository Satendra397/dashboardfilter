
import React, { useState } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import { Slider, FormControl, FormControlLabel, FormGroup, Checkbox, FormLabel, Accordion } from '@mui/material';

const data = [
  { month: 'Jan', pastYear: 20, currentYear: 30 },
  { month: 'Feb', pastYear: 18, currentYear: 32 },
  { month: 'Mar', pastYear: 15, currentYear: 28 },
  { month: 'Apr', pastYear: 12, currentYear: 35 },
  { month: 'May', pastYear: 10, currentYear: 36 },
  { month: 'Jun', pastYear: 14, currentYear: 38 },
  { month: 'Jul', pastYear: 22, currentYear: 40 },
  { month: 'Aug', pastYear: 25, currentYear: 39 },
  { month: 'Sep', pastYear: 30, currentYear: 37 },
  { month: 'Oct', pastYear: 28, currentYear: 34 },
  { month: 'Nov', pastYear: 24, currentYear: 31 },
  { month: 'Dec', pastYear: 22, currentYear: 29 },
];

const VolumeOverTimeChart = () => {
  const [range, setRange] = useState([0, 40]);
  const [pastYear, setPastYear] = useState(true);
  const [currentYear, setCurrentYear] = useState(true);

  const handleRangeChange = (event, newValue) => {
    setRange(newValue);
  };

  const handleCheckboxChange = (event) => {
    const { name, checked } = event.target;
    if (name === 'pastYear') {
      setPastYear(checked);
    } else if (name === 'currentYear') {
      setCurrentYear(checked);
    }
  };

  const filteredData = data.map((item) => ({
    ...item,
    pastYearStack1: pastYear ? item.pastYear : 0,
    currentYearStack1: currentYear ? item.currentYear : 0,
    pastYearStack2: pastYear ? item.pastYear : 0,
    currentYearStack2: currentYear ? item.currentYear : 0,
  }));

  return (
    <Accordion>
    <div>
      <h3 style={{ textAlign: 'left' }}>Volume Over Time </h3>
      <FormControl component="fieldset">
        <FormLabel component="legend">Range:Last Year</FormLabel>
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
                checked={pastYear}
                onChange={handleCheckboxChange}
                name="pastYear"
              />
            }
            label="Past Year"
          />
          <FormControlLabel
            control={
              <Checkbox
                checked={currentYear}
                onChange={handleCheckboxChange}
                name="currentYear"
              />
            }
            label="Current Year"
          />
        </FormGroup>
      </FormControl>
      <BarChart width={500} height={260} data={filteredData}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="month" />
        <YAxis domain={range} />
        <Tooltip />
        <Legend />
        {pastYear && (
          <>
            <Bar dataKey="pastYearStack1"  fill="#008000" stackId="stack1" />
            <Bar dataKey="pastYearStack2"  fill="#C0C0C0" stackId="stack2" />
          </>
        )}
        {currentYear && (
          <>
            <Bar dataKey="currentYearStack1"  fill="#008000" stackId="stack1" />
            <Bar dataKey="currentYearStack2"  fill="#C0C0C0" stackId="stack2" />
          </>
        )}
      </BarChart>
    </div>
    </Accordion>
  );
};

export default VolumeOverTimeChart;

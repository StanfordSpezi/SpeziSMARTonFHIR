import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const StepCountChart = ({ observations }) => {
  const data = observations.map(entry => {
    const date = new Date(entry.resource.effectiveDateTime);
    const formattedDate = `${date.toLocaleString('default', { month: 'long' })} ${date.getDate()}`; // Display month as a word
    
    return {
      date: formattedDate,
      steps: entry.resource.valueQuantity.value,
      originalDate: date // Store the original date for sorting
    };
  }).sort((a, b) => a.originalDate - b.originalDate); // Sort the data by the original date

  return (
    <ResponsiveContainer width={'99%'} height={300}>
      <LineChart data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="date" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="steps" stroke="#8884d8" activeDot={{ r: 8 }} />
      </LineChart>
    </ResponsiveContainer>
  );
};

export default StepCountChart;
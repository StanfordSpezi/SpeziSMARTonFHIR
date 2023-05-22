import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

const StepCountChart = ({ observations }) => {
  const data = observations.map(entry => ({
    date: entry.resource.effectiveDateTime,
    steps: entry.resource.valueQuantity.value,
  }));

  return (
    <LineChart width={600} height={300} data={data}>
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="date" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Line type="monotone" dataKey="steps" stroke="#8884d8" activeDot={{ r: 8 }} />
    </LineChart>
  );
};

export default StepCountChart;
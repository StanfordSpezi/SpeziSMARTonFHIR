import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const SleepChart = ({ observations, startDate, endDate }) => {
    startDate = new Date(startDate);
    endDate = new Date(endDate);

    // Filter and map FHIR Observation resources to chart data
    const data = observations
        .filter(obs => {
            const obsDate = new Date(obs.resource.effectiveDateTime);
            return obsDate >= startDate && obsDate <= endDate;
        })
        .map(obs => {
            const date = new Date(obs.resource.effectiveDateTime);
            return {
                date: `${date.getMonth()+1}/${date.getDate()}`,
                hoursSlept: obs.resource.valueQuantity.value
            };
        });

    return (
        <ResponsiveContainer width={'99%'} height={400}>
        <BarChart width={600} height={400} data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="date" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="hoursSlept" fill="#8884d8" />
        </BarChart>
        </ResponsiveContainer>
    );
};

export default SleepChart;
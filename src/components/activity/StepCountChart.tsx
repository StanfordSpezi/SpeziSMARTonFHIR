import 'react-datepicker/dist/react-datepicker.css';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { BundleEntry, Observation } from 'fhir/r4';

interface StepCountChartProps {
  observations: BundleEntry<Observation>[];
  startDate: string | Date;
  endDate: string | Date;
}

const StepCountChart: React.FC<StepCountChartProps> = ({ observations, startDate, endDate }) => {
  startDate = new Date(startDate);
  endDate = new Date(endDate);
  
  const data = observations.map(observation => {
    if (observation.resource?.effectiveDateTime) {
    const date = new Date(observation.resource?.effectiveDateTime);
    const formattedDate = `${date.toLocaleString('default', { month: 'long' })} ${date.getDate()}`; // Display month as a word
    
    return {
      date: formattedDate,
      steps: observation.resource?.valueQuantity?.value,
      originalDate: date // Store the original date for sorting
    };
  }
  return null;
  })
  .filter(item => item?.originalDate && item.originalDate >= startDate && item.originalDate <= endDate) // Filter by date
  .sort((a, b) => (a?.originalDate.getTime() || 0) - (b?.originalDate.getTime() || 0)); // Sort the data by the original date

  return (
    <ResponsiveContainer width={'99%'} height={400}>
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
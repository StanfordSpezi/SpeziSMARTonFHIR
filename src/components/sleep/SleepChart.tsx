import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { BundleEntry, Observation } from 'fhir/r4';

interface SleepChartProps {
    observations: BundleEntry<Observation>[];
    startDate: string | Date;
    endDate: string | Date;
}

const SleepChart: React.FC<SleepChartProps> = ({ observations, startDate, endDate }) => {
    startDate = new Date(startDate);
    endDate = new Date(endDate);

    // Filter and map FHIR Observation resources to chart data
    const data = observations
        .filter(observation => {
            if (observation.resource?.effectiveDateTime) {
                const obsDate = new Date(observation.resource.effectiveDateTime);
                return obsDate >= startDate && obsDate <= endDate;
            }
            return null;
        })
        .map(observation => {
            if (observation.resource?.effectiveDateTime) {
                const date = new Date(observation.resource.effectiveDateTime);
                return {
                    date: `${date.getMonth() + 1}/${date.getDate()}`,
                    hoursSlept: observation.resource?.valueQuantity?.value
                };
            } else {
                return null;
            }
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
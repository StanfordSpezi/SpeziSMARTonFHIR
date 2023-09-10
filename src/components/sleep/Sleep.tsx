import { useState } from 'react';
import { Card } from 'react-bootstrap';
import SleepChart from './SleepChart';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const Sleep = ({ observations }) => {
    const endDate = new Date();
    const startDate = new Date();
    startDate.setDate(endDate.getDate() - 14); // set the start date to 14 days ago by default

    const [start, setStart] = useState(startDate);
    const [end, setEnd] = useState(endDate);

    return (
        <Card className="p-2 m-2 d-flex flex-column align-items-center justify-content-center shadow">
            <p className="lead">Sleep Duration</p>
            <div style={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center', marginBottom: '20px' }}>
                <DatePicker selected={start} onChange={(date) => setStart(date ?? start)} />
                <div style={{ margin: '0 10px' }}>to</div>
                <DatePicker selected={end} onChange={(date) => setEnd(date ?? end)} />
            </div>
            <SleepChart observations={observations.entry} startDate={start} endDate={end} />
        </Card>
    )
};

export default Sleep;
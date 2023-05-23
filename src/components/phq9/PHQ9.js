import React from 'react';
import { Card } from 'react-bootstrap';
import PHQ9ResultsTable from './PHQ9ResultsTable';

const PHQ9 = ({ responses }) => {
    return (
        <Card className="p-2 m-2 d-flex flex-column align-items-center justify-content-center shadow">
            <p className="lead">PHQ-9 Responses</p>
            <PHQ9ResultsTable responses={responses.entry} />
        </Card>
    )
}

export default PHQ9;
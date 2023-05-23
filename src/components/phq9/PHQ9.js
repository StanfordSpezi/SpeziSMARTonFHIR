import React from 'react';
import { Card } from 'react-bootstrap';
import PHQ9ResultsTable from './PHQ9ResultsTable';

const PHQ9 = ({ responses }) => {
    return (
        <Card className="p-2 m-2 d-flex flex-column align-items-center justify-content-center shadow" style={{ maxWidth: '100%' }}>
            <p className="lead">PHQ-9 Responses</p>
            <div style={{ overflowX: 'auto', width: '100%' }}>
                <PHQ9ResultsTable responses={responses.entry} />
            </div>
        </Card>
    )
}

export default PHQ9;

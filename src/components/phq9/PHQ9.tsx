import { Card } from 'react-bootstrap';
import PHQ9ResultsTable from './PHQ9ResultsTable';
import { Bundle, QuestionnaireResponse } from 'fhir/r4';
import React from 'react';

interface PHQ9Props {
    responsesBundle: Bundle<QuestionnaireResponse>;
}

const PHQ9: React.FC<PHQ9Props> = ({ responsesBundle }) => {
    return (
        <Card className="p-2 m-2 d-flex flex-column align-items-center justify-content-center shadow" style={{ maxWidth: '100%' }}>
            <p className="lead">PHQ-9 Responses</p>
            <div style={{ overflowX: 'auto', width: '100%' }}>
                <PHQ9ResultsTable responses={responsesBundle?.entry ?? []} />
            </div>
        </Card>
    )
}

export default PHQ9;

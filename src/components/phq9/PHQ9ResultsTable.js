import React, { useState } from 'react';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';

const PHQ9ResultsTable = ({ responses }) => {
  const itemsPerPage = 5;
  const [currentPage, setCurrentPage] = useState(0);
  const questionIds = ["PHQ9.1", "PHQ9.2", "PHQ9.3", "PHQ9.4", "PHQ9.5", "PHQ9.6", "PHQ9.7", "PHQ9.8", "PHQ9.9"];
  const questionNames = [
    "Interest or pleasure", 
    "Feeling down", 
    "Sleep issues", 
    "Low energy", 
    "Appetite issues", 
    "Self-esteem", 
    "Trouble concentrating", 
    "Movement or speech issues", 
    "Thoughts of self-harm"
  ];

  const getInterpretation = (score) => {
    if (score <= 4) {
      return "Minimal depression";
    } else if (score <= 9) {
      return "Mild depression";
    } else if (score <= 14) {
      return "Moderate depression";
    } else if (score <= 19) {
      return "Moderately severe depression";
    } else {
      return "Severe depression";
    }
  };  
  
  const sortedResponses = responses.sort((a, b) => new Date(b.resource.authored) - new Date(a.resource.authored));
  const paginatedResponses = sortedResponses.slice(currentPage * itemsPerPage, (currentPage + 1) * itemsPerPage);
  const numberOfPages = Math.ceil(responses.length / itemsPerPage);

  return (
    <div>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Date</th>
            {questionNames.map((name, index) => (
              <th key={index}>{name}</th>
            ))}
            <th>Total</th>
            <th>Interpretation</th>
          </tr>
        </thead>
        <tbody>
          {paginatedResponses.map((response) => {
            const scores = questionIds.map((id) => {
              const item = response.resource.item.find((item) => item.linkId === id);
              const answer = item ? item.answer[0].valueInteger : 0;
              return answer;
            });
            const totalScore = scores.reduce((a, b) => a + b, 0);

            return (
              <tr key={response.resource.id}>
                <td>{new Date(response.resource.authored).toLocaleDateString()}</td>
                {scores.map((score, index) => (
                  <td key={index}>{score}</td>
                ))}
                <td>{totalScore}</td>
                <td>{getInterpretation(totalScore)}</td>
              </tr>
            );
          })}
        </tbody>
      </Table>
      <div style={{ textAlign: 'right' }}>
        Page &nbsp;
        {Array.from({ length: numberOfPages }, (_, i) => i).map((pageNumber) => (
          <Button 
            key={pageNumber}
            onClick={() => setCurrentPage(pageNumber)}
            variant={pageNumber === currentPage ? 'outline-dark' : 'outline-light'}
          >
            {pageNumber + 1}
          </Button>
        ))}
      </div>
    </div>
  );
};

export default PHQ9ResultsTable;

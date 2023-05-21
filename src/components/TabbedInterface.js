import React, { useState } from 'react';
import { Tab, Nav, Container } from 'react-bootstrap';

const TabbedInterface = () => {
  const [activeTab, setActiveTab] = useState('activity');

  const handleTabSelect = (tab) => {
    setActiveTab(tab);
  };

  return (
    <Container style={{ marginTop: '6em' }}>
    <Tab.Container activeKey={activeTab} onSelect={handleTabSelect}>
      <Nav variant="tabs">
        <Nav.Item>
          <Nav.Link eventKey="activity">Activity</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="phq9">PHQ-9</Nav.Link>
        </Nav.Item>
      </Nav>
      <Tab.Content>
        <Tab.Pane eventKey="activity">
          <h3>Activity Module</h3>
        </Tab.Pane>
        <Tab.Pane eventKey="phq9">
          <h3>PHQ-9 Module</h3>
          {/* Add your PHQ-9 tab content here */}
        </Tab.Pane>
      </Tab.Content>
    </Tab.Container>
    </Container>
  );
};

export default TabbedInterface;
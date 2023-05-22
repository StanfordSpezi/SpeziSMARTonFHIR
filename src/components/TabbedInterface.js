import React, { useState } from 'react';
import { Tab, Nav, Container, Row, Col, Card } from 'react-bootstrap';
import StepCountChart from './activity/StepCountChart';
import observations from '../data/observations.json';
import PatientBanner from './PatientBanner';
import DateRangeSelector from './ui/DateRangeSelector';

const TabbedInterface = () => {
  const [activeTab, setActiveTab] = useState('activity');

  const handleTabSelect = (tab) => {
    setActiveTab(tab);
  };

  return (
    <Container style={{ marginTop: '6em' }}>
      <Row>
        <Col>
          <PatientBanner />
        </Col>
        <Col>
          <DateRangeSelector />
        </Col>
      </Row>
      <Row>
        <Col>
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
                <Card className="p-2 m-2 d-flex flex-column align-items-center justify-content-center shadow">
                  <p className="lead">Steps</p>
                  <StepCountChart observations={observations.entry} />
                </Card>
              </Tab.Pane>
              <Tab.Pane eventKey="phq9">
                <h3>PHQ-9 Module</h3>
                {/* Add your PHQ-9 tab content here */}
              </Tab.Pane>
            </Tab.Content>
          </Tab.Container>
        </Col>
      </Row>
    </Container>
  );
};

export default TabbedInterface;
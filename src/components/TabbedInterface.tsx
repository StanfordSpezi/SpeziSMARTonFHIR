import { useState } from 'react';
import { Tab, Nav, Container, Row, Col } from 'react-bootstrap';
import Activity from './activity/Activity';
import PHQ9 from './phq9/PHQ9';
import Sleep from './sleep/Sleep';
import activity from '../data/activity.json';
import sleep from '../data/sleep.json';
import phq9responses from '../data/phq9responses.json'
import PatientBanner from './PatientBanner';
import { Bundle, Observation, QuestionnaireResponse } from 'fhir/r4';

const TabbedInterface = () => {
  const [activeTab, setActiveTab] = useState('activity');

  const handleTabSelect = (tab: string | null) => {
    if (tab) {
      setActiveTab(tab);
    }
  };

  return (
    <Container style={{ marginTop: '6em' }}>
      <Row>
        <Col>
          <PatientBanner />
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
                <Nav.Link eventKey="sleep">Sleep</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="phq9">PHQ-9</Nav.Link>
              </Nav.Item>
            </Nav>
            <Tab.Content>
              <Tab.Pane eventKey="activity">
                <Activity observationBundle={activity as Bundle<Observation>} />
              </Tab.Pane>
              <Tab.Pane eventKey="phq9">
                <PHQ9 responsesBundle={phq9responses as Bundle<QuestionnaireResponse>} />
              </Tab.Pane>
              <Tab.Pane eventKey="sleep">
                <Sleep observationBundle={sleep as Bundle<Observation>} />
              </Tab.Pane>
            </Tab.Content>
          </Tab.Container>
        </Col>
      </Row>
    </Container>
  );
};

export default TabbedInterface;
import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import NavBar from './ui/NavBar';

export default function App({ children, user, users }) {
  return (
    <Container>
      <Row className="justify-content-center">
        <Col xs={12}>
          <NavBar user={user} users={users} />
        </Col>
        <Col xs={10}>{children}</Col>
      </Row>
    </Container>
  );
}

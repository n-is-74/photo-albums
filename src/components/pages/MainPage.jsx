import React from 'react';
import { Col, Image, Row } from 'react-bootstrap';

export default function MainPage() {
  return (
    <Row>
      <Col xs={12}>
        <Image src="/images/start-logo.jpg" style={{ width: '100%' }} />
      </Col>
    </Row>
  );
}

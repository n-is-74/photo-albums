import React from 'react';
import { Button, Card, Image, Col, Row } from 'react-bootstrap';

export default function AlbumCard({ uniqueAlbum }) {
  console.log(uniqueAlbum);
  return (
    <div style={{ display: 'inline-block', margin: '10px' }}>
      <Card style={{ width: '18rem' }}>
        <Row>
          <Col xs={12}>
            <Image src="/img/5994710.png" style={{ width: '100%' }} />
          </Col>
        </Row>
        <Card.Body>
          <Card.Title>{uniqueAlbum.a_name}</Card.Title>
          <Button href={`/albums/${uniqueAlbum.id}`} variant="primary">
            Открыть
          </Button>
        </Card.Body>
      </Card>
    </div>
  );
}

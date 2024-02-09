import React from 'react';
import { Button, Card, Image, Col, Row } from 'react-bootstrap';

export default function AlbumCard({ uniqueAlbum, key }) {
  console.log(uniqueAlbum, key);
  return (
    <div>
      <Card style={{ width: '18rem' }}>
        <Row>
          <Col xs={12}>
            <Image src="/img/5994710.png" style={{ width: '100%' }} />
          </Col>
        </Row>
        <Card.Body>
          <Card.Title>{uniqueAlbum.a_name}</Card.Title>

          <Button href={`/albums/${uniqueAlbum.id}`} variant="primary">
            Go somewhere
          </Button>
        </Card.Body>
      </Card>
    </div>
  );
}

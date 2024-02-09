import React from 'react';

export default function PhotoCard({ photo }) {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={photo.img} />
      <Card.Body>
        <Card.Title>{photo.title}</Card.Title>
        <Button variant="primary">Изменить</Button>
        <Button variant="primary">Удалить</Button>
      </Card.Body>
    </Card>
  );
}

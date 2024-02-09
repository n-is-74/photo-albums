import React, { useState } from 'react';
import axios from 'axios';
import { Form, Col, Button } from 'react-bootstrap';

export default function OneAlbumPage({ album }) {
  const [photo, setPhoto] = useState('');

  const changeHandlerName = (event) => {
    setPhoto(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault(); // Предотвращаем действие по умолчанию формы

    try {
      // Выполняем POST-запрос на сервер
      await axios.post('/api/photo', {
        name: photo,
      });

      // Если запрос выполнен успешно, можно сделать что-то еще, например, очистить состояние
      setPhoto('');
    } catch (error) {
      console.error('Ошибка при отправке фото:', error);
    }
  };

  return (
    <Form className="m-3" onSubmit={handleSubmit}>
      <Col xs={8}>
        <Form.Group className="mb-3" controlId="photo">
          <Form.Label>Название Альбома</Form.Label>
          <Form.Control value={photo} onChange={changeHandlerName} type="text" placeholder="фото" />
          {photo === '' && <div className="text-danger m-3">Пожалуйста, добавьте фото</div>}
        </Form.Group>
        <Col xs={8}>
          <Button type="submit">Создать альбом</Button>
        </Col>
      </Col>
    </Form>
  );
}

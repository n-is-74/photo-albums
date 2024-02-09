import React, { useState } from 'react';
import axios from 'axios';
import { Form, Col, Button } from 'react-bootstrap';

export default function OneAlbumPage() {
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

  const editProfilePic = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const res = await axios.patch('/api/account/profilepic', formData);
    if (res.status === 200) {
      console.log('!');
    }
  };

  return (
    <Form className="m-3" onSubmit={handleSubmit}>
      <Col xs={6}>
        <Form.Group className="mb-3" controlId="photo">
          <Form onSubmit={editProfilePic}>
            <Form.Group controlId="formFile" className="mb-3">
              <Form.Label>Загрузить</Form.Label>
              <Form.Control name="img" type="file" />
            </Form.Group>
            <Form.Control
              value={photo}
              onChange={changeHandlerName}
              type="text"
              placeholder="Описание"
            />
          </Form>
        </Form.Group>
        <Button type="submit" className="me-2">Добавить</Button>
        <Button type="submit" className="me-2">Обновить</Button>
      </Col>
    </Form>
  );
}

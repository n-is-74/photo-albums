import axios from 'axios';
import React, { useState } from 'react';
import { Button, Col, Form } from 'react-bootstrap';

export default function AddAlbumForm({ user, setShowFormModal }) {
  const [album, setAlbum] = useState('');
  const [userUniqueValue, setUserUniqueValue] = useState('');
  const [isPrivate, setIsPrivate] = useState(false);
  const [userNotFoundError, setUserNotFoundError] = useState(false);

  const changeHandlerName = (e) => setAlbum(e.target.value);
  const changeHandlerUserUniqueValue = (e) => setUserUniqueValue(e.target.value);
  const handleChangePrivacy = (e) => setIsPrivate(e.target.value === 'true');

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (album === '') {
      return;
    }

    if (isPrivate && userUniqueValue !== '' && !user.find((u) => u.email === userUniqueValue)) {
      setUserNotFoundError(true);
      return;
    }

    await axios.post('/api/album', {
      name: album,
      privates: isPrivate,
      userUniqueValue,
    });
    setShowFormModal(false);
  };

  return (
    <>
      <Form className="m-3" onSubmit={handleSubmit}>
        <Col xs={8}>
          <Form.Group className="mb-3" controlId="album">
            <Form.Label>Название Альбома</Form.Label>
            <Form.Control
              value={album}
              onChange={changeHandlerName}
              type="text"
              placeholder="Имя"
            />
            {album === '' && (
              <div className="text-danger m-3">Пожалуйста, заполните поле ввода альбом</div>
            )}
          </Form.Group>
          <Form.Group className="mb-3" controlId="albumOpisanie">
            <Form.Label>Выберите режим доступа</Form.Label>
            <Form.Select value={isPrivate.toString()} onChange={handleChangePrivacy} name="private">
              <option value="true">Приватный</option>
              <option value="false">Публичный</option>
            </Form.Select>
          </Form.Group>
          {isPrivate && (
            <Form.Group className="mb-3" controlId="additionalInput">
              <Form.Label>
                Введите уникальный идентификатор пользователя, с которым вы хотите поделиться своим
                альбомом. Если вы оставляете поле пустым, альбом будет виден только вам.
              </Form.Label>
              <Form.Control
                type="text"
                value={userUniqueValue}
                onChange={changeHandlerUserUniqueValue}
                placeholder="Ввод"
              />
            </Form.Group>
          )}
          <Col xs={8}>
            <Button type="submit">Создать альбом</Button>
          </Col>
        </Col>
      </Form>
      {userNotFoundError && (
        <div className="text-danger m-3">
          Пользователь с указанным адресом электронной почты не найден. Пожалуйста, проверьте
          введенный адрес электронной почты.
        </div>
      )}
    </>
  );
}
